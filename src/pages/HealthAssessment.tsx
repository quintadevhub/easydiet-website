
import { useEffect, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

type Assessment = {
  full_name: string;
  age: string;
  height_cm: string;
  weight_kg: string;
  goal: string;
  activity_level: string;
  food_preference: string;
  dietary_restrictions: string;
};

const emptyForm: Assessment = {
  full_name: "",
  age: "",
  height_cm: "",
  weight_kg: "",
  goal: "weight_loss",
  activity_level: "moderate",
  food_preference: "vegetarian",
  dietary_restrictions: "",
};

const inputClass =
  "w-full rounded-xl border border-[#17352A]/15 bg-white px-4 py-3 text-sm text-[#17352A] outline-none transition focus:border-[#075B32] focus:ring-2 focus:ring-[#075B32]/10";

export default function HealthAssessment() {
  const navigate = useNavigate();

  const [form, setForm] = useState<Assessment>(emptyForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    let active = true;

    async function loadAssessment() {
      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (!active) return;

        if (userError || !user) {
          navigate("/login", { replace: true });
          return;
        }

        if (!user.email_confirmed_at) {
          await supabase.auth.signOut();

          if (active) {
            navigate("/login", { replace: true });
          }
          return;
        }

        setUserId(user.id);

        const { data, error: loadError } = await supabase
          .from("health_assessments")
          .select("*")
          .eq("user_id", user.id)
          .maybeSingle();

        if (!active) return;

        if (loadError) {
          setError(
            "Unable to load your assessment. Please refresh the page and try again."
          );
          return;
        }

        if (data) {
          setForm({
            full_name:
              data.full_name ?? user.user_metadata?.full_name ?? "",
            age: String(data.age ?? ""),
            height_cm: String(data.height_cm ?? ""),
            weight_kg: String(data.weight_kg ?? ""),
            goal: data.goal ?? "weight_loss",
            activity_level: data.activity_level ?? "moderate",
            food_preference: data.food_preference ?? "vegetarian",
            dietary_restrictions: data.dietary_restrictions ?? "",
          });
        } else {
          setForm((current) => ({
            ...current,
            full_name: user.user_metadata?.full_name ?? "",
          }));
        }
      } catch {
        if (active) {
          setError("Something went wrong while loading your assessment.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadAssessment();

    return () => {
      active = false;
    };
  }, [navigate]);

  function updateField(field: keyof Assessment, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!userId) {
      setError("Your session has expired. Please log in again.");
      return;
    }

    const age = Number(form.age);
    const height = Number(form.height_cm);
    const weight = Number(form.weight_kg);

    if (!form.full_name.trim() || form.full_name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (!Number.isFinite(age) || age < 18 || age > 120) {
      setError("Please enter an age between 18 and 120.");
      return;
    }

    if (!Number.isFinite(height) || height < 50 || height > 250) {
      setError("Please enter a height between 50 and 250 cm.");
      return;
    }

    if (!Number.isFinite(weight) || weight < 20 || weight > 400) {
      setError("Please enter a weight between 20 and 400 kg.");
      return;
    }

    setSaving(true);

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (
        userError ||
        !user ||
        user.id !== userId ||
        !user.email_confirmed_at
      ) {
        throw new Error(
          "Your session has expired. Please log in again with your verified email."
        );
      }

      const payload = {
        user_id: user.id,
        full_name: form.full_name.trim(),
        age,
        height_cm: height,
        weight_kg: weight,
        goal: form.goal,
        activity_level: form.activity_level,
        food_preference: form.food_preference,
        dietary_restrictions: form.dietary_restrictions.trim(),
        updated_at: new Date().toISOString(),
      };

      const { error: saveError } = await supabase
        .from("health_assessments")
        .upsert(payload, { onConflict: "user_id" });

      if (saveError) throw saveError;

      setSuccess(
        "Your health assessment has been saved. Redirecting to your dashboard..."
      );

      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to save your assessment. Please try again."
      );
    } finally {
      setSaving(false);
    }
  }

  async function handleLogout() {
    setError("");

    const { error: logoutError } = await supabase.auth.signOut();

    if (logoutError) {
      setError("Unable to log out. Please try again.");
      return;
    }

    navigate("/login", { replace: true });
  }

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#F7F4EC] px-6">
        <p className="text-sm text-[#17352A]/60">
          Loading your health assessment...
        </p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#F7F4EC] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="text-sm font-semibold text-[#075B32]">
          easydiet.in
        </Link>

        <div className="mt-8 rounded-3xl border border-white bg-white p-6 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#075B32]">
            Your health journey
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#17352A] sm:text-4xl">
            Health Assessment
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#17352A]/60">
            Tell us about your goals and routine so EasyDiet can better
            understand your nutrition needs.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="full_name"
                className="mb-2 block text-sm font-medium text-[#17352A]"
              >
                Full name
              </label>
              <input
                id="full_name"
                type="text"
                required
                maxLength={100}
                value={form.full_name}
                onChange={(e) => updateField("full_name", e.target.value)}
                className={inputClass}
                placeholder="Your full name"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <div>
                <label
                  htmlFor="age"
                  className="mb-2 block text-sm font-medium text-[#17352A]"
                >
                  Age
                </label>
                <input
                  id="age"
                  type="number"
                  min="18"
                  max="120"
                  required
                  value={form.age}
                  onChange={(e) => updateField("age", e.target.value)}
                  className={inputClass}
                  placeholder="Years"
                />
              </div>

              <div>
                <label
                  htmlFor="height"
                  className="mb-2 block text-sm font-medium text-[#17352A]"
                >
                  Height (cm)
                </label>
                <input
                  id="height"
                  type="number"
                  min="50"
                  max="250"
                  step="0.1"
                  required
                  value={form.height_cm}
                  onChange={(e) => updateField("height_cm", e.target.value)}
                  className={inputClass}
                  placeholder="e.g. 170"
                />
              </div>

              <div>
                <label
                  htmlFor="weight"
                  className="mb-2 block text-sm font-medium text-[#17352A]"
                >
                  Weight (kg)
                </label>
                <input
                  id="weight"
                  type="number"
                  min="20"
                  max="400"
                  step="0.1"
                  required
                  value={form.weight_kg}
                  onChange={(e) => updateField("weight_kg", e.target.value)}
                  className={inputClass}
                  placeholder="e.g. 65"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="goal"
                className="mb-2 block text-sm font-medium text-[#17352A]"
              >
                Your primary goal
              </label>
              <select
                id="goal"
                value={form.goal}
                onChange={(e) => updateField("goal", e.target.value)}
                className={inputClass}
              >
                <option value="weight_loss">Weight loss</option>
                <option value="weight_gain">Weight gain</option>
                <option value="healthy_lifestyle">Healthy lifestyle</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="activity"
                className="mb-2 block text-sm font-medium text-[#17352A]"
              >
                Activity level
              </label>
              <select
                id="activity"
                value={form.activity_level}
                onChange={(e) =>
                  updateField("activity_level", e.target.value)
                }
                className={inputClass}
              >
                <option value="low">Mostly sitting / low activity</option>
                <option value="light">Light activity</option>
                <option value="moderate">Moderately active</option>
                <option value="high">Very active</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="food"
                className="mb-2 block text-sm font-medium text-[#17352A]"
              >
                Food preference
              </label>
              <select
                id="food"
                value={form.food_preference}
                onChange={(e) =>
                  updateField("food_preference", e.target.value)
                }
                className={inputClass}
              >
                <option value="vegetarian">Vegetarian</option>
                <option value="non_vegetarian">Non-vegetarian</option>
                <option value="eggetarian">Eggetarian</option>
                <option value="vegan">Vegan</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="restrictions"
                className="mb-2 block text-sm font-medium text-[#17352A]"
              >
                Dietary restrictions (optional)
              </label>
              <textarea
                id="restrictions"
                rows={3}
                maxLength={1000}
                value={form.dietary_restrictions}
                onChange={(e) =>
                  updateField("dietary_restrictions", e.target.value)
                }
                className={inputClass}
                placeholder="Foods you avoid, allergies, or dietary preferences"
              />
            </div>

            <p className="text-xs leading-5 text-[#17352A]/55">
              Share only information you are comfortable providing. This form
              is for nutrition planning and is not a medical diagnosis.
            </p>

            {error && (
              <p
                role="alert"
                className="rounded-xl bg-red-50 p-3 text-sm leading-6 text-red-700"
              >
                {error}
              </p>
            )}

            {success && (
              <p
                role="status"
                className="rounded-xl bg-green-50 p-3 text-sm leading-6 text-[#075B32]"
              >
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={saving}
              className="w-full rounded-xl bg-[#075B32] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#064526] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving your details..." : "Save Health Assessment"}
            </button>
          </form>

          <button
            type="button"
            onClick={handleLogout}
            className="mt-5 w-full text-sm font-medium text-[#075B32] hover:underline"
          >
            Log out
          </button>
        </div>
      </div>
    </section>
  );
}

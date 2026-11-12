
import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

type Customer = {
  user_id: string;
  full_name: string;
  age: number | null;
  height_cm: number | null;
  weight_kg: number | null;
  goal: string | null;
  activity_level: string | null;
  food_preference: string | null;
  dietary_restrictions: string | null;
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [title, setTitle] = useState("Personalized Diet Plan");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const selectedCustomer = customers.find(
    (customer) => customer.user_id === selectedId
  );

  useEffect(() => {
    async function loadAdmin() {
      const { data, error: authError } =
        await supabase.auth.getUser();

      if (authError || !data.user || !data.user.email_confirmed_at) {
        navigate("/login", { replace: true });
        return;
      }

      const { data: role, error: roleError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", data.user.id)
        .maybeSingle();

      if (roleError || role?.role !== "admin") {
        navigate("/dashboard", { replace: true });
        return;
      }

      const { data: records, error: recordsError } = await supabase
        .from("health_assessments")
        .select(
          "user_id, full_name, age, height_cm, weight_kg, goal, activity_level, food_preference, dietary_restrictions"
        )
        .order("full_name");

      if (recordsError) {
        setError("Unable to load customer assessments.");
      } else {
        setCustomers(records ?? []);
      }

      setLoading(false);
    }

    void loadAdmin();
  }, [navigate]);

  async function savePlan(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!selectedCustomer) {
      setError("Please select a customer.");
      return;
    }

    if (!title.trim() || !content.trim()) {
      setError("Enter the plan title and content.");
      return;
    }

    setSaving(true);

    const { data: authData, error: authError } =
      await supabase.auth.getUser();

    if (authError || !authData.user) {
      setSaving(false);
      navigate("/login", { replace: true });
      return;
    }

    const { data: role, error: roleError } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", authData.user.id)
      .maybeSingle();

    if (roleError || role?.role !== "admin") {
      setSaving(false);
      setError("Admin access could not be verified.");
      return;
    }

    const { error: saveError } = await supabase
      .from("diet_plans")
      .insert({
        user_id: selectedCustomer.user_id,
        title: title.trim(),
        plan_content: content.trim(),
        status,
        created_by: authData.user.id,
        published_at:
          status === "published" ? new Date().toISOString() : null,
      });

    setSaving(false);

    if (saveError) {
      setError(`Unable to save plan: ${saveError.message}`);
      return;
    }

    setMessage(
      status === "published"
        ? "Diet plan published successfully."
        : "Draft saved successfully."
    );
    setContent("");
    setTitle("Personalized Diet Plan");
  }

  async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      setError("Unable to log out. Please try again.");
      return;
    }

    navigate("/login", { replace: true });
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F4EC]">
        Checking admin access...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#F7F4EC] px-5 py-10 text-[#17352A] md:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#075B32]">
              EASYDIET MANAGEMENT
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-5xl">
              Admin Dashboard
            </h1>
            <p className="mt-3 text-sm text-[#17352A]/60">
              Review assessments and manage customer diet plans.
            </p>
          </div>

          <button
            onClick={logout}
            className="rounded-full border border-[#075B32]/20 bg-white px-5 py-3 text-sm font-semibold"
          >
            Log out
          </button>
        </header>

        {error && (
          <p role="alert" className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-700">
            {error}
          </p>
        )}

        {message && (
          <p role="status" className="mt-6 rounded-xl bg-green-50 p-4 text-sm text-green-800">
            {message}
          </p>
        )}

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Customer assessments</h2>
            <p className="mt-2 text-sm text-[#17352A]/60">
              {customers.length} assessment(s)
            </p>

            <label className="mt-6 block text-sm font-medium">
              Select customer
            </label>
            <select
              value={selectedId}
              onChange={(event) => setSelectedId(event.target.value)}
              className="mt-2 w-full rounded-xl border border-[#17352A]/15 bg-white px-4 py-3 text-sm"
            >
              <option value="">Choose a customer</option>
              {customers.map((customer) => (
                <option key={customer.user_id} value={customer.user_id}>
                  {customer.full_name} — {customer.user_id.slice(0, 8)}
                </option>
              ))}
            </select>

            {selectedCustomer && (
              <div className="mt-6 space-y-3 text-sm">
                <h3 className="text-xl font-semibold">
                  {selectedCustomer.full_name}
                </h3>
                <p>Age: {selectedCustomer.age ?? "—"}</p>
                <p>Height: {selectedCustomer.height_cm ?? "—"} cm</p>
                <p>Weight: {selectedCustomer.weight_kg ?? "—"} kg</p>
                <p>Goal: {selectedCustomer.goal ?? "—"}</p>
                <p>Activity: {selectedCustomer.activity_level ?? "—"}</p>
                <p>Food preference: {selectedCustomer.food_preference ?? "—"}</p>
                <p>
                  Dietary restrictions:{" "}
                  {selectedCustomer.dietary_restrictions || "None provided"}
                </p>
              </div>
            )}
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Create diet plan</h2>

            <form onSubmit={savePlan} className="mt-6 space-y-5">
              <div>
                <label className="block text-sm font-medium">Plan title</label>
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  required
                  maxLength={150}
                  className="mt-2 w-full rounded-xl border border-[#17352A]/15 px-4 py-3 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Diet plan content
                </label>
                <textarea
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                  required
                  rows={12}
                  maxLength={30000}
                  placeholder={"Day 1\nBreakfast:\nLunch:\nDinner:\n\nNotes:"}
                  className="mt-2 w-full rounded-xl border border-[#17352A]/15 px-4 py-3 text-sm leading-6"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Status</label>
                <select
                  value={status}
                  onChange={(event) =>
                    setStatus(event.target.value as "draft" | "published")
                  }
                  className="mt-2 w-full rounded-xl border border-[#17352A]/15 bg-white px-4 py-3 text-sm"
                >
                  <option value="draft">Save as draft</option>
                  <option value="published">Publish to customer</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={saving || !selectedCustomer}
                className="w-full rounded-xl bg-[#075B32] px-5 py-4 text-sm font-semibold text-white disabled:opacity-50"
              >
                {saving
                  ? "Saving..."
                  : status === "published"
                    ? "Publish Diet Plan"
                    : "Save Draft"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}

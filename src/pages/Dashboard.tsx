import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

type Assessment = {
  full_name: string;
  age: number | null;
  height_cm: number | null;
  weight_kg: number | null;
  goal: string | null;
  activity_level: string | null;
  food_preference: string | null;
};

type DietPlan = {
  id: string;
  title: string;
  plan_content: string;
  published_at: string | null;
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [name, setName] = useState("Customer");
  const [assessment, setAssessment] = useState<Assessment | null>(null);
  const [plans, setPlans] = useState<DietPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDashboard() {
      const { data: authData, error: authError } =
        await supabase.auth.getUser();

      const user = authData.user;

      if (authError || !user) {
        navigate("/login", { replace: true });
        return;
      }

      if (!user.email_confirmed_at) {
        await supabase.auth.signOut();
        navigate("/login", { replace: true });
        return;
      }

      setName(
        user.user_metadata?.full_name ||
        user.email?.split("@")[0] ||
        "Customer"
      );

      const [assessmentResult, plansResult] = await Promise.all([
        supabase
          .from("health_assessments")
          .select(
            "full_name, age, height_cm, weight_kg, goal, activity_level, food_preference"
          )
          .eq("user_id", user.id)
          .maybeSingle(),

        supabase
          .from("diet_plans")
          .select("id, title, plan_content, published_at")
          .eq("user_id", user.id)
          .eq("status", "published")
          .order("published_at", { ascending: false }),
      ]);

      if (assessmentResult.error || plansResult.error) {
        setError("We couldn't load all your information. Please refresh.");
      } else {
        setAssessment(assessmentResult.data);
        setPlans(plansResult.data ?? []);

        if (assessmentResult.data?.full_name) {
          setName(assessmentResult.data.full_name);
        }
      }

      setLoading(false);
    }

    void loadDashboard();
  }, [navigate]);

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      setError("Unable to log out. Please try again.");
      return;
    }

    navigate("/login", { replace: true });
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F4EC] text-[#17352A]">
        Loading your EasyDiet dashboard...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#F7F4EC] px-5 py-10 text-[#17352A] md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#075B32]">
              YOUR EASYDIET SPACE
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-5xl">
              Welcome back, {name}
            </h1>
            <p className="mt-3 text-sm text-[#17352A]/65">
              Your health journey, all in one place.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-full border border-[#075B32]/20 bg-white px-5 py-3 text-sm font-semibold hover:bg-[#075B32]/5"
          >
            Log out
          </button>
        </div>

        {error && (
          <p className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-700">
            {error}
          </p>
        )}

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm md:col-span-2">
            <p className="text-sm text-[#17352A]/60">
              Your primary goal
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              {assessment?.goal
                ? assessment.goal.replaceAll("_", " ")
                : "Assessment not completed"}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#17352A]/65">
              Keep your health details up to date so your nutrition plan
              can reflect your current needs.
            </p>

            <Link
              to="/health-assessment"
              className="mt-6 inline-flex rounded-full bg-[#075B32] px-6 py-3 text-sm font-semibold text-white hover:bg-[#064826]"
            >
              {assessment ? "Review assessment" : "Complete assessment"}
            </Link>
          </div>

          <div className="rounded-3xl bg-[#075B32] p-6 text-white shadow-sm">
            <p className="text-sm text-white/70">Your diet plans</p>
            <p className="mt-3 text-5xl font-semibold">{plans.length}</p>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Published plans available in your account.
            </p>
          </div>
        </div>

        <section className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#075B32]">
                PERSONAL NUTRITION
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                My Diet Plans
              </h2>
            </div>
          </div>

          {plans.length === 0 ? (
            <div className="mt-5 rounded-3xl border border-[#17352A]/10 bg-white p-8 md:p-10">
              <h3 className="text-xl font-semibold">
                Your personalized plan is being prepared
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#17352A]/65">
                Once the EasyDiet team reviews your assessment and
                publishes your plan, it will appear here.
              </p>
            </div>
          ) : (
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {plans.map((plan) => (
                <article
                  key={plan.id}
                  className="rounded-3xl bg-white p-6 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#075B32]">
                    PUBLISHED DIET PLAN
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">
                    {plan.title}
                  </h3>
                  {plan.published_at && (
                    <p className="mt-2 text-xs text-[#17352A]/50">
                      Published{" "}
                      {new Date(plan.published_at).toLocaleDateString()}
                    </p>
                  )}
                  <div className="mt-5 whitespace-pre-wrap text-sm leading-7 text-[#17352A]/80">
                    {plan.plan_content}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="mt-8 rounded-2xl border border-[#17352A]/10 bg-white/70 p-5">
          <h3 className="font-semibold">Your assessment summary</h3>
          <div className="mt-4 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <p>Age: <strong>{assessment?.age ?? "—"}</strong></p>
            <p>Height: <strong>{assessment?.height_cm ? `${assessment.height_cm} cm` : "—"}</strong></p>
            <p>Weight: <strong>{assessment?.weight_kg ? `${assessment.weight_kg} kg` : "—"}</strong></p>
            <p>Food preference: <strong>{assessment?.food_preference ?? "—"}</strong></p>
          </div>
        </section>

        <p className="mt-8 text-xs leading-6 text-[#17352A]/50">
          EasyDiet provides nutrition planning support and does not
          replace professional medical care. If you have a medical
          condition, consult a qualified healthcare professional.
        </p>
      </div>
    </section>
  );
}

import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim().toLowerCase(),
          password,
        });

      if (loginError) throw loginError;

      const user = data.user;

      if (!user?.email_confirmed_at) {
        await supabase.auth.signOut();
        setMessage(
          "Please verify your email address before continuing."
        );
        return;
      }

      const { data: assessment, error: assessmentError } =
        await supabase
          .from("health_assessments")
          .select("user_id")
          .eq("user_id", user.id)
          .maybeSingle();

      if (assessmentError) {
        await supabase.auth.signOut();
        throw new Error(
          "Unable to check your health assessment. Please try again."
        );
      }

      if (assessment) {
        navigate("/dashboard", { replace: true });
      } else {
        navigate("/health-assessment", { replace: true });
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to log in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleResetPassword() {
    setError("");
    setMessage("");

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setError("Enter your email address first.");
      return;
    }

    setLoading(true);

    try {
      const { error: resetError } =
        await supabase.auth.resetPasswordForEmail(normalizedEmail, {
          redirectTo: `${window.location.origin}/login`,
        });

      if (resetError) throw resetError;

      setMessage(
        "If the address is registered, a password reset email will be sent."
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to request a password reset."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-[#17352A]/15 bg-white px-4 py-3.5 text-sm text-[#17352A] outline-none transition placeholder:text-gray-400 focus:border-[#075B32] focus:ring-2 focus:ring-[#075B32]/10";

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F7F4EC] px-4 py-12">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white bg-white shadow-xl md:grid-cols-2">
        <div className="hidden flex-col justify-between bg-[#075B32] p-10 text-white md:flex lg:p-12">
          <Link to="/" className="text-lg font-semibold tracking-wide">
            easydiet.in
          </Link>

          <div className="py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F4B66A]">
              Welcome back
            </p>

            <h1 className="mt-5 text-4xl font-light leading-tight lg:text-5xl">
              Your health journey.
              <br />
              <span className="font-semibold">Your next step.</span>
            </h1>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
              Sign in to continue working towards your nutrition and
              wellness goals.
            </p>
          </div>

          <p className="text-xs text-white/50">
            Healthy Eating Made Easy
          </p>
        </div>

        <div className="p-6 sm:p-10 lg:p-12">
          <Link to="/" className="text-sm font-semibold text-[#075B32] md:hidden">
            easydiet.in
          </Link>

          <div className="mt-6 md:mt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#075B32]">
              Client portal
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#17352A]">
              Welcome back
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#17352A]/60">
              Log in to continue your EasyDiet journey.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label htmlFor="login-email" className="mb-2 block text-sm font-medium text-[#17352A]">
                Email address
              </label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="login-password" className="mb-2 block text-sm font-medium text-[#17352A]">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                className={inputClass}
              />

              <div className="mt-2 text-right">
                <button
                  type="button"
                  onClick={handleResetPassword}
                  disabled={loading}
                  className="text-sm font-medium text-[#075B32] hover:underline disabled:opacity-50"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            {error && (
              <p role="alert" className="rounded-xl border border-red-100 bg-red-50 p-3 text-sm leading-6 text-red-700">
                {error}
              </p>
            )}

            {message && (
              <p role="status" className="rounded-xl border border-green-100 bg-green-50 p-3 text-sm leading-6 text-[#075B32]">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#075B32] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#064526] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Checking your account..." : "Login to EasyDiet"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#17352A]/65">
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold text-[#075B32] hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

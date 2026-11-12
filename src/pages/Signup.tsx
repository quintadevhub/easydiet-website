
import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleSignup(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setMessage("");

    const fullName = name.trim();
    const normalizedEmail = email.trim().toLowerCase();
    const mobile = phone.trim();

    if (fullName.length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (mobile.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid mobile number.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const { data, error: signupError } =
        await supabase.auth.signUp({
          email: normalizedEmail,
          password,
          options: {
            data: {
              full_name: fullName,
              phone: mobile,
            },
            emailRedirectTo: `${window.location.origin}/health-assessment`,
          },
        });

      if (signupError) {
        throw signupError;
      }

      if (data.session && data.user) {
        if (!data.user.email_confirmed_at) {
          await supabase.auth.signOut();

          setMessage(
            "Your account has been created. Please verify your email before continuing."
          );
        } else {
          navigate("/health-assessment", { replace: true });
          return;
        }
      } else {
        setMessage(
          "Your account request has been received. Please check your email and click the verification link to continue."
        );
      }

      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to create your account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-[#17352A]/15 bg-white px-4 py-3.5 text-sm text-[#17352A] outline-none transition placeholder:text-gray-400 focus:border-[#075B32] focus:ring-2 focus:ring-[#075B32]/10";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7F4EC] px-4 py-12 sm:px-6">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#075B32]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#F28A16]/10 blur-3xl" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white bg-white shadow-xl md:grid-cols-2">
        <div className="relative hidden flex-col justify-between overflow-hidden bg-[#075B32] p-10 text-white md:flex lg:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/5" />

          <div className="relative">
            <Link to="/" className="text-lg font-semibold tracking-wide">
              easydiet.in
            </Link>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/60">
              Healthy Eating Made Easy
            </p>
          </div>

          <div className="relative py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F4B66A]">
              Your journey starts here
            </p>
            <h1 className="mt-5 text-4xl font-light leading-tight lg:text-5xl">
              Small changes.
              <br />
              Healthier habits.
              <br />
              <span className="font-semibold">A better you.</span>
            </h1>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
              Create your account to explore personalised nutrition plans
              designed around your goals, food preferences and daily routine.
            </p>
          </div>

          <p className="relative text-xs text-white/50">
            Personalised nutrition. Everyday food. Practical habits.
          </p>
        </div>

        <div className="p-6 sm:p-10 lg:p-12">
          <Link
            to="/"
            className="text-sm font-semibold text-[#075B32] md:hidden"
          >
            easydiet.in
          </Link>

          <div className="mt-5 md:mt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#075B32]">
              Client registration
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#17352A]">
              Create your account
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#17352A]/60">
              Enter your details to begin your personalised health assessment.
            </p>
          </div>

          <form onSubmit={handleSignup} className="mt-8 space-y-5">
            <div>
              <label htmlFor="signup-name" className="mb-2 block text-sm font-medium text-[#17352A]">
                Full name
              </label>
              <input
                id="signup-name"
                type="text"
                autoComplete="name"
                required
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="signup-email" className="mb-2 block text-sm font-medium text-[#17352A]">
                Email address
              </label>
              <input
                id="signup-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="signup-phone" className="mb-2 block text-sm font-medium text-[#17352A]">
                Mobile number
              </label>
              <input
                id="signup-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                maxLength={20}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your mobile number"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="signup-password" className="mb-2 block text-sm font-medium text-[#17352A]">
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                autoComplete="new-password"
                minLength={8}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="signup-confirm-password" className="mb-2 block text-sm font-medium text-[#17352A]">
                Confirm password
              </label>
              <input
                id="signup-confirm-password"
                type="password"
                autoComplete="new-password"
                minLength={8}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                className={inputClass}
              />
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-xl border border-red-100 bg-red-50 p-3 text-sm leading-6 text-red-700"
              >
                {error}
              </p>
            )}

            {message && (
              <div
                role="status"
                className="rounded-xl border border-green-100 bg-green-50 p-3 text-sm leading-6 text-[#075B32]"
              >
                {message}
                <p className="mt-2">
                  <Link to="/login" className="font-semibold underline">
                    Go to login
                  </Link>
                </p>
                <p className="mt-2 text-xs text-[#17352A]/70">
                  After verifying your email, log in if prompted. You will then
                  be directed to your health assessment.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#075B32] px-5 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#064526] focus:outline-none focus:ring-2 focus:ring-[#075B32]/30 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create my account"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#17352A]/65">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#075B32] hover:underline"
            >
              Log in
            </Link>
          </p>

          <p className="mt-6 text-center text-xs leading-5 text-gray-400">
            By creating an account, you agree to our{" "}
            <Link to="/terms" className="underline hover:text-[#075B32]">
              Terms
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy-policy"
              className="underline hover:text-[#075B32]"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

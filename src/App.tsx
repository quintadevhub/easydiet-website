
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import PageLoader from "./components/PageLoader";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WeightLoss from "./pages/WeightLoss";
import WeightGain from "./pages/WeightGain";
import HealthyLifestyle from "./pages/HealthyLifestyle";
import HowItWorks from "./pages/HowItWorks";
import Guides from "./pages/Guides";
import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import HealthAssessment from "./pages/HealthAssessment";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

import Philosophy from "./sections/PhilosophyIntro";
import Programs from "./sections/ProgramsIntro";

function PlaceholderPage({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow: string;
}) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F7F4EC] px-6">
      <div className="text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#075B32]">
          {eyebrow}
        </p>

        <h1 className="mt-5 text-5xl font-light tracking-[-0.05em] text-[#17352A] md:text-7xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#17352A]/55">
          This page is currently being designed for the new EasyDiet
          experience.
        </p>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <PageLoader />

      <div className="min-h-screen bg-[#F7F4EC] text-[#17352A]">
        <Header />

        <main>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Programs */}
            <Route path="/programs" element={<Programs />} />

            {/* Weight management */}
            <Route path="/weight-loss" element={<WeightLoss />} />
            <Route path="/weight-gain" element={<WeightGain />} />

            {/* Healthy lifestyle */}
            <Route
              path="/healthy-lifestyle"
              element={<HealthyLifestyle />}
            />

            {/* Philosophy */}
            <Route path="/philosophy" element={<Philosophy />} />

            {/* About and contact */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* How it works */}
            <Route path="/how-it-works" element={<HowItWorks />} />

            {/* Guides and resources */}
            <Route path="/guides" element={<Guides />} />
            <Route path="/resources" element={<Resources />} />

            {/* FAQ */}
            <Route path="/faq" element={<FAQ />} />

            {/* Authentication */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            {/* Health assessment */}
            <Route
              path="/health-assessment"
              element={<HealthAssessment />}
            />

            {/* Client dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Admin dashboard */}
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Privacy policy */}
            <Route
              path="/privacy-policy"
              element={
                <PlaceholderPage
                  eyebrow="Legal"
                  title="Privacy Policy"
                />
              }
            />

            {/* Terms and conditions */}
            <Route
              path="/terms"
              element={
                <PlaceholderPage
                  eyebrow="Legal"
                  title="Terms & Conditions"
                />
              }
            />

            {/* 404 */}
            <Route
              path="*"
              element={
                <PlaceholderPage
                  eyebrow="404"
                  title="Page Not Found"
                />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

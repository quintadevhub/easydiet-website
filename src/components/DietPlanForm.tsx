import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import { useState } from "react";

interface DietPlanFormProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  age: string;
  gender: string;
  mobile: string;
  email: string;
  city: string;
  goal: string;
  activity: string;
  foodPreference: string;
  height: string;
  weight: string;
}

const initialData: FormData = {
  name: "",
  age: "",
  gender: "",
  mobile: "",
  email: "",
  city: "",
  goal: "",
  activity: "",
  foodPreference: "",
  height: "",
  weight: "",
};

const steps = [
  "About You",
  "Contact",
  "Your Goal",
  "Lifestyle",
];

export default function DietPlanForm({
  open,
  onClose,
}: DietPlanFormProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] =
    useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);

  const updateField = (
    field: keyof FormData,
    value: string,
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep((current) => current + 1);
    }
  };

  const previousStep = () => {
    if (step > 0) {
      setStep((current) => current - 1);
    }
  };

  const submitForm = async () => {
    setSaving(true);

    try {
      const sheetUrl =
        import.meta.env.VITE_GOOGLE_SHEET_URL;

      if (!sheetUrl) {
        throw new Error(
          "Google Sheet URL is not configured.",
        );
      }

      /*
       * GOOGLE SHEETS SUBMISSION
       *
       * Send the data as URLSearchParams/form data
       * so Google Apps Script can read it through
       * e.parameter.
       */

      const formBody = new URLSearchParams();

      Object.entries(formData).forEach(
        ([key, value]) => {
          formBody.append(key, value);
        },
      );

      formBody.append(
        "submittedAt",
        new Date().toISOString(),
      );

      formBody.append(
        "source",
        "EasyDiet Website",
      );

      await fetch(sheetUrl, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      setSubmitted(true);
    } catch (error) {
      console.error(
        "Form submission error:",
        error,
      );

      alert(
        "Something went wrong while submitting your enquiry. Please try again.",
      );
    } finally {
      setSaving(false);
    }
  };

  const closeForm = () => {
    setStep(0);
    setFormData(initialData);
    setSubmitted(false);
    setSaving(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#17352A]/45 backdrop-blur-sm"
            onClick={closeForm}
          />

          {/* FORM PANEL */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-x-4 top-1/2 z-[210] max-h-[90vh] -translate-y-1/2 overflow-y-auto bg-[#FFFDF8] shadow-[0_30px_100px_rgba(23,53,42,0.2)] sm:inset-x-auto sm:left-1/2 sm:w-[620px] sm:-translate-x-1/2"
          >
            {/* HEADER */}

            <div className="flex items-center justify-between border-b border-[#17352A]/10 px-6 py-5 md:px-8">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#075B32]">
                  EasyDiet
                </p>

                <p className="mt-1 text-sm text-[#17352A]/50">
                  Get your personalised diet plan
                </p>
              </div>

              <button
                type="button"
                onClick={closeForm}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#17352A]/60 transition-colors hover:bg-[#075B32] hover:text-white"
              >
                <X size={19} strokeWidth={1.4} />
              </button>
            </div>

            {/* PROGRESS */}

            {!submitted && (
              <div className="px-6 pt-7 md:px-8">
                <div className="flex items-center gap-2">
                  {steps.map((item, index) => (
                    <div
                      key={item}
                      className="flex flex-1 items-center gap-2"
                    >
                      <div
                        className={`h-1 flex-1 transition-all duration-500 ${
                          index <= step
                            ? "bg-[#075B32]"
                            : "bg-[#17352A]/10"
                        }`}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#075B32]">
                    Step {step + 1} of {steps.length}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.15em] text-[#17352A]/40">
                    {steps[step]}
                  </span>
                </div>
              </div>
            )}

            {/* FORM CONTENT */}

            {!submitted ? (
              <div className="px-6 py-8 md:px-8 md:py-10">
                <AnimatePresence mode="wait">

                  {/* STEP 1 */}

                  {step === 0 && (
                    <motion.div
                      key="step-1"
                      initial={{
                        opacity: 0,
                        x: 25,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -25,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <h2 className="text-3xl font-light tracking-[-0.04em] text-[#17352A] md:text-4xl">
                        Tell us about
                        <br />
                        <span className="font-normal italic text-[#075B32]">
                          yourself.
                        </span>
                      </h2>

                      <p className="mt-4 text-sm leading-6 text-[#17352A]/50">
                        A few basic details will help us
                        understand you better.
                      </p>

                      <div className="mt-8 grid gap-5">
                        <Input
                          label="Full Name"
                          value={formData.name}
                          onChange={(value) =>
                            updateField(
                              "name",
                              value,
                            )
                          }
                          placeholder="Enter your full name"
                        />

                        <div className="grid gap-5 sm:grid-cols-2">
                          <Input
                            label="Age"
                            type="number"
                            value={formData.age}
                            onChange={(value) =>
                              updateField(
                                "age",
                                value,
                              )
                            }
                            placeholder="Your age"
                          />

                          <Select
                            label="Gender"
                            value={formData.gender}
                            onChange={(value) =>
                              updateField(
                                "gender",
                                value,
                              )
                            }
                            options={[
                              "Male",
                              "Female",
                              "Other",
                              "Prefer not to say",
                            ]}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2 */}

                  {step === 1 && (
                    <motion.div
                      key="step-2"
                      initial={{
                        opacity: 0,
                        x: 25,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -25,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <h2 className="text-3xl font-light tracking-[-0.04em] text-[#17352A] md:text-4xl">
                        How can we
                        <br />
                        <span className="font-normal italic text-[#075B32]">
                          reach you?
                        </span>
                      </h2>

                      <p className="mt-4 text-sm leading-6 text-[#17352A]/50">
                        We'll use these details to contact
                        you about your enquiry.
                      </p>

                      <div className="mt-8 grid gap-5">
                        <Input
                          label="Mobile Number"
                          type="tel"
                          value={formData.mobile}
                          onChange={(value) =>
                            updateField(
                              "mobile",
                              value,
                            )
                          }
                          placeholder="+91 XXXXX XXXXX"
                        />

                        <Input
                          label="Email Address"
                          type="email"
                          value={formData.email}
                          onChange={(value) =>
                            updateField(
                              "email",
                              value,
                            )
                          }
                          placeholder="you@example.com"
                        />

                        <Input
                          label="City"
                          value={formData.city}
                          onChange={(value) =>
                            updateField(
                              "city",
                              value,
                            )
                          }
                          placeholder="Your city"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3 */}

                  {step === 2 && (
                    <motion.div
                      key="step-3"
                      initial={{
                        opacity: 0,
                        x: 25,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -25,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <h2 className="text-3xl font-light tracking-[-0.04em] text-[#17352A] md:text-4xl">
                        What are you
                        <br />
                        <span className="font-normal italic text-[#075B32]">
                          working towards?
                        </span>
                      </h2>

                      <p className="mt-4 text-sm leading-6 text-[#17352A]/50">
                        Choose the goal that best describes
                        what you want to achieve.
                      </p>

                      <div className="mt-8 grid gap-3">
                        {[
                          "Healthy Weight Loss",
                          "Healthy Weight Gain",
                          "Healthy Lifestyle",
                        ].map((goal) => (
                          <Choice
                            key={goal}
                            label={goal}
                            selected={
                              formData.goal === goal
                            }
                            onClick={() =>
                              updateField(
                                "goal",
                                goal,
                              )
                            }
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4 */}

                  {step === 3 && (
                    <motion.div
                      key="step-4"
                      initial={{
                        opacity: 0,
                        x: 25,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -25,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <h2 className="text-3xl font-light tracking-[-0.04em] text-[#17352A] md:text-4xl">
                        Tell us about
                        <br />
                        <span className="font-normal italic text-[#075B32]">
                          your lifestyle.
                        </span>
                      </h2>

                      <p className="mt-4 text-sm leading-6 text-[#17352A]/50">
                        These details help us understand
                        your current routine.
                      </p>

                      <div className="mt-8 grid gap-5">
                        <Select
                          label="Activity Level"
                          value={formData.activity}
                          onChange={(value) =>
                            updateField(
                              "activity",
                              value,
                            )
                          }
                          options={[
                            "Sedentary",
                            "Lightly Active",
                            "Moderately Active",
                            "Very Active",
                          ]}
                        />

                        <Select
                          label="Food Preference"
                          value={
                            formData.foodPreference
                          }
                          onChange={(value) =>
                            updateField(
                              "foodPreference",
                              value,
                            )
                          }
                          options={[
                            "Vegetarian",
                            "Non-Vegetarian",
                            "Eggetarian",
                            "Vegan",
                          ]}
                        />

                        <div className="grid gap-5 sm:grid-cols-2">
                          <Input
                            label="Height (cm)"
                            type="number"
                            value={formData.height}
                            onChange={(value) =>
                              updateField(
                                "height",
                                value,
                              )
                            }
                            placeholder="e.g. 170"
                          />

                          <Input
                            label="Weight (kg)"
                            type="number"
                            value={formData.weight}
                            onChange={(value) =>
                              updateField(
                                "weight",
                                value,
                              )
                            }
                            placeholder="e.g. 70"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* BUTTONS */}

                <div className="mt-10 flex items-center justify-between border-t border-[#17352A]/10 pt-6">
                  <button
                    type="button"
                    onClick={previousStep}
                    disabled={step === 0}
                    className={`inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] ${
                      step === 0
                        ? "pointer-events-none opacity-0"
                        : "text-[#17352A]/60 hover:text-[#075B32]"
                    }`}
                  >
                    <ArrowLeft size={14} />
                    Back
                  </button>

                  {step < steps.length - 1 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="group inline-flex items-center gap-4 bg-[#075B32] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#064927]"
                    >
                      Continue

                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={submitForm}
                      disabled={saving}
                      className="group inline-flex items-center gap-4 bg-[#075B32] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#064927] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {saving
                        ? "Saving..."
                        : "Submit Enquiry"}

                      {!saving && (
                        <Check size={15} />
                      )}
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* SUCCESS */

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="px-6 py-20 text-center md:px-8"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#075B32]/10 text-[#075B32]">
                  <Check
                    size={28}
                    strokeWidth={1.5}
                  />
                </div>

                <h2 className="mt-7 text-4xl font-light tracking-[-0.04em] text-[#17352A]">
                  Thank you,
                  <br />

                  <span className="font-normal italic text-[#075B32]">
                    {formData.name ||
                      "for reaching out"}.
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#17352A]/55">
                  Your enquiry has been received. Our
                  team will get in touch with you shortly.
                </p>

                <button
                  type="button"
                  onClick={closeForm}
                  className="mt-8 bg-[#075B32] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white hover:bg-[#064927]"
                >
                  Done
                </button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ============================================================
   INPUT
============================================================ */

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#17352A]/55">
        {label}
      </span>

      <input
        type={type}
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        className="w-full border border-[#17352A]/12 bg-[#F8EFE3]/35 px-4 py-4 text-sm text-[#17352A] outline-none transition-all placeholder:text-[#17352A]/25 focus:border-[#075B32]/45 focus:bg-white"
      />
    </label>
  );
}

/* ============================================================
   SELECT
============================================================ */

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#17352A]/55">
        {label}
      </span>

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="w-full appearance-none border border-[#17352A]/12 bg-[#F8EFE3]/35 px-4 py-4 text-sm text-[#17352A] outline-none transition-all focus:border-[#075B32]/45 focus:bg-white"
      >
        <option value="">
          Select {label.toLowerCase()}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

/* ============================================================
   CHOICE
============================================================ */

function Choice({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-between border px-5 py-5 text-left transition-all duration-300 ${
        selected
          ? "border-[#075B32] bg-[#075B32]/[0.06]"
          : "border-[#17352A]/10 bg-[#F8EFE3]/30 hover:border-[#075B32]/30"
      }`}
    >
      <span
        className={`text-sm ${
          selected
            ? "font-medium text-[#075B32]"
            : "text-[#17352A]/70"
        }`}
      >
        {label}
      </span>

      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full border ${
          selected
            ? "border-[#075B32] bg-[#075B32] text-white"
            : "border-[#17352A]/20"
        }`}
      >
        {selected && <Check size={13} />}
      </span>
    </button>
  );
}
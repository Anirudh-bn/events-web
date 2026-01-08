import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./lib/supabase";
import { Turnstile } from '@marsidev/react-turnstile';

const steps = [
  "Your Info",
  "Event Type",
  "Event Setting",
  "Number of People",
  "Meal Options",
  "Summary"
];

export default function QuestionnaireForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState("forward");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventSetting: "",
    numberOfPeople: "",
    mealOptions: []
  });

  // Load form data from localStorage on mount
  useEffect(() => {
    const savedForm = localStorage.getItem("eventForm");
    const savedStep = localStorage.getItem("eventStep");
    if (savedForm) {
      setForm(JSON.parse(savedForm));
    }
    if (savedStep) {
      setStep(parseInt(savedStep));
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("eventForm", JSON.stringify(form));
    localStorage.setItem("eventStep", step.toString());
  }, [form, step]);

  // Real-time validation
  const validateField = (field, value) => {
    const newErrors = { ...errors };

    switch(field) {
      case "name":
        if (!value.trim()) {
          newErrors.name = "Name is required";
        } else if (value.length < 2) {
          newErrors.name = "Name must be at least 2 characters";
        } else {
          delete newErrors.name;
        }
        break;
      case "phone":
        if (!value.trim()) {
          newErrors.phone = "Phone is required";
        } else if (!/^\d{10}$/.test(value.replace(/\D/g, ''))) {
          newErrors.phone = "Please enter a valid 10-digit phone number";
        } else {
          delete newErrors.phone;
        }
        break;
      case "email":
        if (!value.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = "Please enter a valid email";
        } else {
          delete newErrors.email;
        }
        break;
      case "numberOfPeople":
        if (!value) {
          newErrors.numberOfPeople = "Number of guests is required";
        } else if (parseInt(value) < 1) {
          newErrors.numberOfPeople = "Must be at least 1 guest";
        } else {
          delete newErrors.numberOfPeople;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setDirection("forward");
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setDirection("backward");
      setStep(step - 1);
    }
  };

  const jumpToStep = (targetStep) => {
    setDirection(targetStep > step ? "forward" : "backward");
    setStep(targetStep);
  };

  // Auto-advance for single-select options
  const handleEventTypeSelect = (type) => {
    setForm({ ...form, eventType: type });
    setTimeout(() => handleNext(), 300);
  };

  const handleEventSettingSelect = (setting) => {
    setForm({ ...form, eventSetting: setting });
    setTimeout(() => handleNext(), 300);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && !isNextDisabled()) {
        handleNext();
      } else if (e.key === "Escape" && step > 0) {
        handleBack();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [step, form, errors]);

  const isNextDisabled = () => {
    return (
      (step === 0 && (!form.name || !form.phone || !form.email || Object.keys(errors).length > 0)) ||
      (step === 1 && !form.eventType) ||
      (step === 2 && !form.eventSetting) ||
      (step === 3 && !form.numberOfPeople) ||
      (step === 4 && form.mealOptions.length === 0)
    );
  };

  const handleSubmit = async () => {
    if (!captchaToken) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const { error } = await supabase
        .from('event_leads')
        .insert([
          {
            name: form.name,
            phone: form.phone,
            email: form.email,
            event_type: form.eventType,
            event_setting: form.eventSetting,
            number_of_people: parseInt(form.numberOfPeople),
            meal_options: form.mealOptions,
            location: 'Hyderabad',
            status: 'new',
            notes: '[Captcha Verified]'
          }
        ]);

      if (error) throw error;

      alert("Vowza! 🎉\n\nWe've received your details. Our top vendors in Hyderabad will be in touch shortly.");

      // Clear localStorage after successful submission
      localStorage.removeItem("eventForm");
      localStorage.removeItem("eventStep");

      // Reset form
      setForm({
        name: "",
        phone: "",
        email: "",
        eventType: "",
        eventSetting: "",
        numberOfPeople: "",
        mealOptions: []
      });
      setStep(0);
      setCaptchaToken(null);

      // Navigate back to home
      setTimeout(() => navigate("/"), 2000);

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError(error.message || 'Failed to submit form. Please try again.');
      alert('Error: ' + (error.message || 'Failed to submit form. Please try again.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const eventTypeOptions = [
    { type: "Wedding", icon: "💍", description: "Create your dream wedding celebration" },
    { type: "Birthday", icon: "🎂", description: "Make their special day unforgettable" },
    { type: "Other Event", icon: "✨", description: "Corporate, anniversary, or custom event" }
  ];

  const mealOptions = [
    { name: "Vegetarian", icon: "🥗", description: "Plant-based delicious meals" },
    { name: "Non-Vegetarian", icon: "🍖", description: "Includes meat and poultry options" },
    { name: "Vegan", icon: "🌱", description: "100% plant-based, no animal products" },
    { name: "Gluten-Free", icon: "🌾", description: "Safe for gluten sensitivities" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fffdf7]">
      {/* HEADER */}
      <header className="w-full flex items-center justify-between py-6 px-6 md:px-16 bg-white/80 backdrop-blur-sm border-b border-[#f5e6e0]">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 hover:opacity-70 transition-opacity"
        >
          <div className="font-serif text-2xl md:text-3xl italic text-[#2d2d2d] tracking-wide">
            Vowza
          </div>
        </button>
        <button
          onClick={() => navigate("/")}
          className="text-sm text-[#5d5d5d] hover:text-[#d4a373] transition-colors font-light"
        >
          ← Back to Home
        </button>
      </header>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex justify-center items-center px-4 py-8 md:py-12">
        <div className="bg-white w-full max-w-2xl border border-[#f5e6e0] rounded-sm p-8 md:p-12 relative overflow-hidden">

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#f5e6e0] rounded-full filter blur-3xl opacity-30 -mr-20 -mt-20"></div>

          {/* Progress Bar */}
          <div className="relative mb-10">
            <div className="w-full bg-[#f5e6e0] h-1">
              <div
                className="bg-[#d4a373] h-1 transition-all duration-500 ease-out"
                style={{ width: `${((step + 1) / steps.length) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-3">
              <span className="text-xs text-[#5d5d5d] font-light">Step {step + 1} of {steps.length}</span>
              <span className="text-xs text-[#5d5d5d] font-light">Takes ~3 minutes</span>
            </div>
          </div>

          {/* Animated Content Container */}
          <div className={`transition-all duration-300 ${direction === "forward" ? "animate-slideInRight" : "animate-slideInLeft"}`} key={step}>

            {/* Conversational Headers */}
            {step === 0 && (
              <>
                <h2 className="font-serif text-3xl md:text-4xl mb-3 text-[#2d2d2d] italic">Let's get started</h2>
                <p className="text-[#5d5d5d] mb-8 font-light">Tell us a bit about yourself</p>
              </>
            )}
            {step === 1 && (
              <>
                <h2 className="font-serif text-3xl md:text-4xl mb-3 text-[#2d2d2d] italic">What are we celebrating?</h2>
                <p className="text-[#5d5d5d] mb-8 font-light">Choose the type of event you're planning</p>
              </>
            )}
            {step === 2 && (
              <>
                <h2 className="font-serif text-3xl md:text-4xl mb-3 text-[#2d2d2d] italic">Where's the magic happening?</h2>
                <p className="text-[#5d5d5d] mb-8 font-light">Select your preferred venue setting</p>
              </>
            )}
            {step === 3 && (
              <>
                <h2 className="font-serif text-3xl md:text-4xl mb-3 text-[#2d2d2d] italic">How many guests?</h2>
                <p className="text-[#5d5d5d] mb-8 font-light">This helps us plan the perfect setup</p>
              </>
            )}
            {step === 4 && (
              <>
                <h2 className="font-serif text-3xl md:text-4xl mb-3 text-[#2d2d2d] italic">Let's talk food</h2>
                <p className="text-[#5d5d5d] mb-8 font-light">Select all dietary preferences for your guests</p>
              </>
            )}
            {step === 5 && (
              <>
                <h2 className="font-serif text-3xl md:text-4xl mb-3 text-[#2d2d2d] italic">Looking great!</h2>
                <p className="text-[#5d5d5d] mb-8 font-light">Review your details before submitting</p>
              </>
            )}

            {/* SCREEN CONTENTS */}
            {step === 0 && (
              <div className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <label className="block text-sm text-[#5d5d5d] mb-2 font-light">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      validateField("name", e.target.value);
                    }}
                    className="w-full border border-[#f5e6e0] bg-white p-4 focus:border-[#d4a373] focus:ring-2 focus:ring-[#d4a373]/20 outline-none transition-all duration-200"
                    aria-label="Your Name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <label className="block text-sm text-[#5d5d5d] mb-2 font-light">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={(e) => {
                      setForm({ ...form, phone: e.target.value });
                      validateField("phone", e.target.value);
                    }}
                    className="w-full border border-[#f5e6e0] bg-white p-4 focus:border-[#d4a373] focus:ring-2 focus:ring-[#d4a373]/20 outline-none transition-all duration-200"
                    aria-label="Phone Number"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone}</p>}
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label className="block text-sm text-[#5d5d5d] mb-2 font-light">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      validateField("email", e.target.value);
                    }}
                    className="w-full border border-[#f5e6e0] bg-white p-4 focus:border-[#d4a373] focus:ring-2 focus:ring-[#d4a373]/20 outline-none transition-all duration-200"
                    aria-label="Email Address"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
                </div>

                <p className="text-xs text-[#5d5d5d] flex items-center gap-2 mt-4 font-light">
                  🔒 Your information is safe and secure with us
                </p>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                {eventTypeOptions.map((option) => (
                  <button
                    key={option.type}
                    onClick={() => handleEventTypeSelect(option.type)}
                    className={`border p-6 w-full text-left transition-all duration-200 transform hover:scale-[1.01] hover:shadow-md ${ 
                      form.eventType === option.type
                        ? "bg-[#f5e6e0]/50 border-[#d4a373] shadow-sm"
                        : "border-[#f5e6e0] hover:border-[#d4a373]/50 bg-white"
                    }`}
                    aria-label={`Select ${option.type}`}
                  >
                    <div className="text-3xl mb-3">{option.icon}</div>
                    <div className="font-serif text-xl mb-2 text-[#2d2d2d] italic">{option.type}</div>
                    <div className="text-sm text-[#5d5d5d] font-light">{option.description}</div>
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <button
                  onClick={() => handleEventSettingSelect("Indoor")}
                  className={`border p-6 w-full text-left transition-all duration-200 transform hover:scale-[1.01] hover:shadow-md ${ 
                    form.eventSetting === "Indoor"
                      ? "bg-[#f5e6e0]/50 border-[#d4a373] shadow-sm"
                      : "border-[#f5e6e0] hover:border-[#d4a373]/50 bg-white"
                  }`}
                  aria-label="Select Indoor Event"
                >
                  <div className="text-3xl mb-3">🏛️</div>
                  <div className="font-serif text-xl mb-2 text-[#2d2d2d] italic">Indoor Event</div>
                  <div className="text-sm text-[#5d5d5d] font-light">
                    Climate-controlled comfort, perfect for any weather
                  </div>
                </button>

                <button
                  onClick={() => handleEventSettingSelect("Outdoor")}
                  className={`border p-6 w-full text-left transition-all duration-200 transform hover:scale-[1.01] hover:shadow-md ${ 
                    form.eventSetting === "Outdoor"
                      ? "bg-[#f5e6e0]/50 border-[#d4a373] shadow-sm"
                      : "border-[#f5e6e0] hover:border-[#d4a373]/50 bg-white"
                  }`}
                  aria-label="Select Outdoor Event"
                >
                  <div className="text-3xl mb-3">🌳</div>
                  <div className="font-serif text-xl mb-2 text-[#2d2d2d] italic">Outdoor Event</div>
                  <div className="text-sm text-[#5d5d5d] font-light">
                    Under the open sky, surrounded by nature's beauty
                  </div>
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      const newValue = Math.max(1, parseInt(form.numberOfPeople || 0) - 1);
                      setForm({ ...form, numberOfPeople: newValue.toString() });
                      validateField("numberOfPeople", newValue.toString());
                    }}
                    className="w-12 h-12 border border-[#f5e6e0] hover:border-[#d4a373] hover:bg-[#f5e6e0] transition-all duration-200 flex items-center justify-center text-xl font-light text-[#2d2d2d]"
                    aria-label="Decrease number of people"
                  >
                    −
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="number"
                      placeholder="50"
                      value={form.numberOfPeople}
                      onChange={(e) => {
                        setForm({ ...form, numberOfPeople: e.target.value });
                        validateField("numberOfPeople", e.target.value);
                      }}
                      className="w-full border border-[#f5e6e0] bg-white p-4 text-center text-2xl font-serif text-[#2d2d2d] focus:border-[#d4a373] focus:ring-2 focus:ring-[#d4a373]/20 outline-none transition-all duration-200"
                      min="1"
                      aria-label="Number of guests"
                    />
                  </div>
                  <button
                    onClick={() => {
                      const newValue = parseInt(form.numberOfPeople || 0) + 1;
                      setForm({ ...form, numberOfPeople: newValue.toString() });
                      validateField("numberOfPeople", newValue.toString());
                    }}
                    className="w-12 h-12 border border-[#f5e6e0] hover:border-[#d4a373] hover:bg-[#f5e6e0] transition-all duration-200 flex items-center justify-center text-xl font-light text-[#2d2d2d]"
                    aria-label="Increase number of people"
                  >
                    +
                  </button>
                </div>
                {errors.numberOfPeople && <p className="text-red-500 text-xs mt-2">{errors.numberOfPeople}</p>}
                <p className="text-sm text-[#5d5d5d] text-center font-light">
                  Expected number of guests
                </p>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-3">
                {mealOptions.map((meal) => (
                  <button
                    key={meal.name}
                    onClick={() => {
                      if (form.mealOptions.includes(meal.name)) {
                        setForm({ ...form, mealOptions: form.mealOptions.filter(m => m !== meal.name) });
                      } else {
                        setForm({ ...form, mealOptions: [...form.mealOptions, meal.name] });
                      }
                    }}
                    className={`border p-5 w-full text-left transition-all duration-200 transform hover:scale-[1.01] ${ 
                      form.mealOptions.includes(meal.name)
                        ? "bg-[#f5e6e0]/50 border-[#d4a373] shadow-sm"
                        : "border-[#f5e6e0] hover:border-[#d4a373]/50 bg-white"
                    }`}
                    aria-label={`Select ${meal.name}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{meal.icon}</div>
                      <div className="flex-1">
                        <div className="font-light text-base mb-1 flex items-center gap-2 text-[#2d2d2d]">
                          {meal.name}
                          {form.mealOptions.includes(meal.name) && (
                            <span className="text-[#d4a373] text-sm">✓</span>
                          )}
                        </div>
                        <div className="text-xs text-[#5d5d5d] font-light">{meal.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
                <p className="text-xs text-[#5d5d5d] mt-4 text-center font-light">
                  Multiple selections allowed
                </p>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-5">
                {/* Summary Cards */}
                <div className="bg-[#f5e6e0]/30 border border-[#f5e6e0] p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">👤</span>
                      <span className="font-light text-[#2d2d2d]">Contact Info</span>
                    </div>
                    <button
                      onClick={() => jumpToStep(0)}
                      className="text-xs text-[#d4a373] hover:text-[#b8865f] font-light underline underline-offset-2"
                      aria-label="Edit contact information"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="text-sm text-[#5d5d5d] space-y-1 ml-7 font-light">
                    <p>{form.name}</p>
                    <p>{form.phone}</p>
                    <p>{form.email}</p>
                  </div>
                </div>

                <div className="bg-[#f5e6e0]/30 border border-[#f5e6e0] p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">✨</span>
                      <span className="font-light text-[#2d2d2d]">Event Details</span>
                    </div>
                    <button
                      onClick={() => jumpToStep(1)}
                      className="text-xs text-[#d4a373] hover:text-[#b8865f] font-light underline underline-offset-2"
                      aria-label="Edit event type"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="text-sm text-[#5d5d5d] space-y-1 ml-7 font-light">
                    <p><strong className="font-normal">Type:</strong> {form.eventType}</p>
                    <p><strong className="font-normal">Setting:</strong> {form.eventSetting}</p>
                    <p><strong className="font-normal">Guests:</strong> {form.numberOfPeople} people</p>
                  </div>
                </div>

                <div className="bg-[#f5e6e0]/30 border border-[#f5e6e0] p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🍽️</span>
                      <span className="font-light text-[#2d2d2d]">Meal Preferences</span>
                    </div>
                    <button
                      onClick={() => jumpToStep(4)}
                      className="text-xs text-[#d4a373] hover:text-[#b8865f] font-light underline underline-offset-2"
                      aria-label="Edit meal options"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="text-sm text-[#5d5d5d] ml-7 font-light">
                    <p>{form.mealOptions.length > 0 ? form.mealOptions.join(", ") : "None selected"}</p>
                  </div>
                </div>

                <div className="bg-white border border-[#d4a373]/30 p-5 mt-6">
                  <p className="text-sm text-[#5d5d5d] text-center font-light mb-4">
                    Please verify you are human to proceed.
                  </p>
                  {/* Turnstile Widget */}
                  <div className="flex justify-center">
                    <Turnstile
                      siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                      onSuccess={(token) => setCaptchaToken(token)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-10 gap-4">
            {step > 0 ? (
              <button
                onClick={handleBack}
                className="px-6 py-3 border border-[#f5e6e0] text-[#2d2d2d] hover:bg-[#f5e6e0] transition-all duration-200 font-light"
                aria-label="Go back to previous step"
              >
                ← Back
              </button>
            ) : (
              <div />
            )}

            {step < steps.length - 1 ? (
              <button
                onClick={handleNext}
                className={`px-8 py-3 border text-sm font-light transition-all duration-200 transform ${ 
                  isNextDisabled()
                    ? "opacity-50 cursor-not-allowed border-[#f5e6e0] text-[#5d5d5d]"
                    : "border-[#2d2d2d] text-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-white"
                }`}
                disabled={isNextDisabled()}
                aria-label="Continue to next step"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !captchaToken}
                className={`px-8 py-3 bg-[#2d2d2d] text-white border border-[#2d2d2d] font-light transition-all duration-200 transform hover:bg-[#d4a373] hover:border-[#d4a373] ${ 
                  isSubmitting || !captchaToken
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
                aria-label="Submit event inquiry"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            )}
          </div>

          {/* Keyboard hint */}
          <p className="text-xs text-[#5d5d5d]/50 text-center mt-6 font-light">
            Press Enter to continue • Esc to go back
          </p>
        </div>
      </div>
    </div>
  );
}

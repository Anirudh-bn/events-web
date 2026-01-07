import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#fffdf7] text-[#2d2d2d]">
      {/* NAVBAR */}
      <header className="w-full flex items-center justify-between py-6 px-6 md:px-16 bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-[#f5e6e0]">
        <div className="flex items-center gap-3">
          <div className="font-serif text-2xl md:text-3xl italic text-[#2d2d2d] tracking-wide">
            Vowza
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-light">
          <button
            onClick={() => scrollToSection("home")}
            className="text-[#d4a373] hover:text-[#b8865f] transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-[#d4a373] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-[#d4a373] transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="hover:text-[#d4a373] transition-colors"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="hover:text-[#d4a373] transition-colors"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-[#d4a373] transition-colors"
          >
            Contact
          </button>
        </nav>

        <button
          onClick={() => navigate("/questionnaire")}
          className="hidden md:inline-flex text-xs md:text-sm px-6 py-2.5 border border-[#2d2d2d] text-[#2d2d2d] font-light hover:bg-[#2d2d2d] hover:text-white transition-all duration-300"
        >
          Log In
        </button>
      </header>

      {/* HERO SECTION */}
      <main>
        <section
          id="home"
          className="relative px-6 md:px-16 py-20 md:py-32 min-h-[85vh] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 253, 247, 0.7), rgba(255, 253, 247, 0.7)), url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fffdf7]/40 to-[#fffdf7]"></div>

          <div className="relative text-center max-w-4xl mx-auto z-10">
            <h1 className="font-serif text-5xl md:text-7xl mb-4 text-[#2d2d2d] italic leading-tight">
              Vowza
            </h1>
            <p className="text-lg md:text-xl mb-8 text-[#5d5d5d] font-light tracking-wide">
              Premier Event Creators
            </p>
            <button
              onClick={() => navigate("/questionnaire")}
              className="inline-flex items-center justify-center px-8 py-3 border border-[#2d2d2d] text-[#2d2d2d] text-sm font-light hover:bg-[#2d2d2d] hover:text-white transition-all duration-300"
            >
              Discovery Call
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#d4a373] animate-bounce">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section
          id="services"
          className="px-6 md:px-16 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center bg-white"
        >
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-4xl md:text-6xl mb-6 text-[#2d2d2d] italic">
              Services
            </h2>
            <p className="text-base md:text-lg text-[#5d5d5d] font-light leading-relaxed mb-6">
              From intimate ceremonies to grand celebrations, we craft high-energy, unforgettable experiences
              tailored to your unique love story. Our
              comprehensive planning services ensure every detail reflects your
              vision, allowing you to savor each moment of your special day.
            </p>
            <button
              onClick={() => navigate("/questionnaire")}
              className="text-sm font-serif italic underline underline-offset-4 text-[#2d2d2d] hover:text-[#d4a373] transition-colors"
            >
              View Our Packages
            </button>
          </div>

          <div className="order-1 md:order-2 h-96 md:h-[500px] rounded-sm relative overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Man and woman holding wedding rings"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* EVENT TYPES SECTION */}
        <section className="px-6 md:px-16 py-16 md:py-24 bg-[#fffdf7]">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-[#2d2d2d] italic">
              Celebrations We Create
            </h2>
            <p className="text-base text-[#5d5d5d] font-light max-w-2xl mx-auto">
              Every event is a story waiting to be told. We specialize in
              crafting unforgettable moments across Hyderabad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <article className="bg-white p-8 border border-[#f5e6e0] hover:border-[#d4a373] transition-all duration-300 group">
              <div className="text-4xl mb-4">💍</div>
              <h3 className="font-serif text-2xl mb-3 text-[#2d2d2d] italic">
                Weddings
              </h3>
              <p className="text-sm text-[#5d5d5d] font-light leading-relaxed mb-6">
                Mandap decor, baraat entries, seating arrangements, stage
                design, and photography—meticulously planned around your venue
                and budget to create your dream celebration.
              </p>
              <button
                onClick={() => navigate("/questionnaire?type=wedding")}
                className="text-sm font-serif italic underline underline-offset-4 text-[#2d2d2d] group-hover:text-[#d4a373] transition-colors"
              >
                Plan a Wedding →
              </button>
            </article>

            <article className="bg-white p-8 border border-[#f5e6e0] hover:border-[#d4a373] transition-all duration-300 group">
              <div className="text-4xl mb-4">🎂</div>
              <h3 className="font-serif text-2xl mb-3 text-[#2d2d2d] italic">
                Birthdays
              </h3>
              <p className="text-sm text-[#5d5d5d] font-light leading-relaxed mb-6">
                Custom themes, stunning cakes, entertainment, and photography
                for milestone celebrations—from 1st birthdays to 60th
                anniversaries, we make every year special.
              </p>
              <button
                onClick={() => navigate("/questionnaire?type=birthday")}
                className="text-sm font-serif italic underline underline-offset-4 text-[#2d2d2d] group-hover:text-[#d4a373] transition-colors"
              >
                Plan a Birthday →
              </button>
            </article>

            <article className="bg-white p-8 border border-[#f5e6e0] hover:border-[#d4a373] transition-all duration-300 group">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-serif text-2xl mb-3 text-[#2d2d2d] italic">
                Private Events
              </h3>
              <p className="text-sm text-[#5d5d5d] font-light leading-relaxed mb-6">
                Housewarmings, mehendi nights, rooftop dinners, and intimate
                family gatherings—elegant setups designed to fit perfectly in
                real homes and unique venues.
              </p>
              <button
                onClick={() => navigate("/questionnaire?type=private")}
                className="text-sm font-serif italic underline underline-offset-4 text-[#2d2d2d] group-hover:text-[#d4a373] transition-colors"
              >
                Plan an Event →
              </button>
            </article>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-6 md:px-16 py-16 md:py-24 bg-white">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-[#2d2d2d] italic">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5e6e0] flex items-center justify-center text-2xl font-serif mx-auto mb-4">
                1
              </div>
              <h3 className="font-serif text-xl mb-3 text-[#2d2d2d] italic">
                Tell Us Your Vision
              </h3>
              <p className="text-sm text-[#5d5d5d] font-light leading-relaxed">
                Share your dream event details through our quick
                questionnaire—date, guest count, style preferences, and budget.
                Takes just 3 minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5e6e0] flex items-center justify-center text-2xl font-serif mx-auto mb-4">
                2
              </div>
              <h3 className="font-serif text-xl mb-3 text-[#2d2d2d] italic">
                Receive Your Plan
              </h3>
              <p className="text-sm text-[#5d5d5d] font-light leading-relaxed">
                We curate a dynamic plan with venue options, decor styles, and
                trusted Hyderabad vendors tailored to your requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5e6e0] flex items-center justify-center text-2xl font-serif mx-auto mb-4">
                3
              </div>
              <h3 className="font-serif text-xl mb-3 text-[#2d2d2d] italic">
                Enjoy Your Day
              </h3>
              <p className="text-sm text-[#5d5d5d] font-light leading-relaxed">
                Approve your plan, and we handle everything from booking to
                execution. You simply arrive and celebrate.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/questionnaire")}
              className="inline-flex items-center justify-center px-8 py-3 border border-[#2d2d2d] text-[#2d2d2d] text-sm font-light hover:bg-[#2d2d2d] hover:text-white transition-all duration-300"
            >
              Start Planning in 3 Minutes →
            </button>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section
          id="gallery"
          className="px-6 md:px-16 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center bg-[#f5e6e0]/30"
        >
          <div className="h-96 md:h-[500px] rounded-sm relative overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
              alt="Luxurious outdoor Indian wedding venue setup"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-serif text-4xl md:text-6xl mb-6 text-[#2d2d2d] italic">
              Gallery
            </h2>
            <p className="text-base md:text-lg text-[#5d5d5d] font-light leading-relaxed mb-6">
              Explore our portfolio of beautifully crafted celebrations. Each
              event tells a unique story, reflecting the personalities and
              dreams of the couples and families we've had the privilege to
              serve across Hyderabad.
            </p>
            <button
              onClick={() => navigate("/questionnaire")}
              className="text-sm font-serif italic underline underline-offset-4 text-[#2d2d2d] hover:text-[#d4a373] transition-colors"
            >
              View Photos
            </button>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="px-6 md:px-16 py-16 md:py-24 bg-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-[#2d2d2d] italic">
              Built by People Who've Survived a Hundred Shaadis
            </h2>
            <div className="space-y-4 text-base md:text-lg text-[#5d5d5d] font-light leading-relaxed">
              <p>
                We're a Hyderabad-based team that's planned events from
                intimate house mehendis to 500-guest celebrations in Jubilee
                Hills, Gachibowli, and beyond. We know which decorators actually
                show up on time, which caterers handle last-minute headcount
                jumps, and where you should spend versus save.
              </p>
              <p>
                Our goal is simple: remove the chaos, family politics, and
                WhatsApp spam from planning—so you can enjoy your own event for
                once.
              </p>
            </div>

            <div className="mt-8 p-8 bg-[#f5e6e0]/30 border border-[#f5e6e0]">
              <p className="text-xs uppercase tracking-widest text-[#d4a373] mb-3 font-light">
                Why Hyderabad Only?
              </p>
              <p className="text-sm text-[#5d5d5d] font-light leading-relaxed">
                Events are hyper-local. Vendor reliability, traffic, weather,
                power backup, venue rules—these are things you only learn by
                doing dozens of events in the same city. Focusing on Hyderabad
                means we give you realistic options, not Pinterest fantasies
                that fall apart on the ground.
              </p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section
          id="testimonials"
          className="px-6 md:px-16 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center bg-[#fffdf7]"
        >
          <div>
            <h2 className="font-serif text-4xl md:text-6xl mb-6 text-[#2d2d2d] italic">
              Testimonials
            </h2>
            <blockquote className="mb-6">
              <p className="text-base md:text-lg text-[#5d5d5d] font-light leading-relaxed mb-4">
                "I would recommend Vowza to anyone looking to have a
                beautiful and happy wedding. They made our dream day come true
                without any stress."
              </p>
              <footer className="text-sm text-[#5d5d5d] font-serif italic">
                - Priya & Arjun
              </footer>
            </blockquote>
            <button
              onClick={() => navigate("/questionnaire")}
              className="text-sm font-serif italic underline underline-offset-4 text-[#2d2d2d] hover:text-[#d4a373] transition-colors"
            >
              More Testimonials
            </button>
          </div>

          <div className="h-96 md:h-[500px] rounded-sm relative overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/12718440/pexels-photo-12718440.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Close-up of a couple holding hands"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="px-6 md:px-16 py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl mb-12 text-[#2d2d2d] italic text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8 text-sm md:text-base">
              <div className="border-b border-[#f5e6e0] pb-6">
                <p className="font-light mb-3 text-[#2d2d2d]">
                  What kinds of events do you handle?
                </p>
                <p className="text-[#5d5d5d] font-light leading-relaxed">
                  All private events—weddings, receptions, engagements,
                  birthdays, house parties, mehendi, sangeet, anniversaries,
                  and similar celebrations in and around Hyderabad.
                </p>
              </div>
              <div className="border-b border-[#f5e6e0] pb-6">
                <p className="font-light mb-3 text-[#2d2d2d]">
                  Is there a minimum budget?
                </p>
                <p className="text-[#5d5d5d] font-light leading-relaxed">
                  We work with various budgets. Fill out the questionnaire with
                  your preferred budget, and we'll be honest if we're not the
                  right fit for your requirements.
                </p>
              </div>
              <div className="border-b border-[#f5e6e0] pb-6">
                <p className="font-light mb-3 text-[#2d2d2d]">
                  How far in advance should I contact you?
                </p>
                <p className="text-[#5d5d5d] font-light leading-relaxed">
                  Sooner is better, especially for peak seasons (Nov–Feb).
                  However, we've also pulled off great events on short notice.
                  Share your date and we'll let you know what's realistic.
                </p>
              </div>
              <div className="border-b border-[#f5e6e0] pb-6">
                <p className="font-light mb-3 text-[#2d2d2d]">
                  Do you charge a planning fee?
                </p>
                <p className="text-[#5d5d5d] font-light leading-relaxed">
                  It depends on the scale and complexity of your event. After
                  you fill the questionnaire, we'll send a clear breakdown—no
                  hidden charges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="px-6 md:px-16 py-20 md:py-32 bg-[#f5e6e0] text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-6 text-[#2d2d2d] italic">
            Ready to Start Planning?
          </h2>
          <p className="text-lg text-[#5d5d5d] font-light mb-8 max-w-2xl mx-auto">
            Tell us about your celebration in just 3 minutes. No obligation, no
            pressure—just the first step toward your perfect event.
          </p>
          <button
            onClick={() => navigate("/questionnaire")}
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-[#2d2d2d] text-[#2d2d2d] text-base font-light hover:bg-[#2d2d2d] hover:text-white transition-all duration-300"
          >
            Book Now
          </button>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        id="contact"
        className="px-6 md:px-16 py-12 bg-white border-t border-[#f5e6e0]"
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-sm font-light text-[#5d5d5d]">
          <div>
            <p className="mb-1">Jubilee Hills</p>
            <p>Hyderabad, TG 500033</p>
          </div>
          <div>
            <p className="mb-1">Tel: 040-1234-5678</p>
            <p>Email: info@vowza.in</p>
          </div>
          <div>
            <p className="mb-4">© 2025 by Vowza.</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/questionnaire")}
            className="inline-flex items-center justify-center px-8 py-3 border border-[#2d2d2d] text-[#2d2d2d] text-sm font-light hover:bg-[#2d2d2d] hover:text-white transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      </footer>
    </div>
  );
}

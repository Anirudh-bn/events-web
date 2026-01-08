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
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* NAVBAR */}
      {/* Fixed: Added 'shadow-sm' and better contrast */}
      <header className="w-full flex items-center justify-between py-5 px-6 md:px-16 bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200 shadow-sm">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => scrollToSection("home")} 
            className="font-serif text-2xl md:text-3xl italic text-stone-900 tracking-wide hover:opacity-80 transition-opacity"
          >
            Vowza
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
          <button onClick={() => scrollToSection("home")} className="hover:text-emerald-900 transition-colors">Home</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-emerald-900 transition-colors">About</button>
          <button onClick={() => scrollToSection("services")} className="hover:text-emerald-900 transition-colors">Services</button>
          <button onClick={() => scrollToSection("testimonials")} className="hover:text-emerald-900 transition-colors">Testimonials</button>
          <button onClick={() => scrollToSection("gallery")} className="hover:text-emerald-900 transition-colors">Gallery</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-emerald-900 transition-colors">Contact</button>
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/questionnaire")}
          className="hidden md:inline-flex text-xs md:text-sm px-6 py-2.5 bg-stone-900 text-white font-medium rounded-sm hover:bg-emerald-900 transition-all duration-300 shadow-sm"
        >
          Start Planning
        </button>
      </header>

      <main>
        {/* HERO SECTION */}
        {/* Fixed: Added 'scroll-mt-28' so header doesn't cover content */}
        <section
          id="home"
          className="relative px-6 md:px-16 py-20 md:py-32 min-h-[85vh] flex items-center justify-center bg-cover bg-center scroll-mt-28"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative text-center max-w-4xl mx-auto z-10">
            <h1 className="font-serif text-5xl md:text-7xl mb-6 text-white italic leading-tight drop-shadow-md">
              Vowza
            </h1>
            <p className="text-lg md:text-2xl mb-10 text-stone-100 font-light tracking-wide drop-shadow-sm">
              Hyderabad’s Premier Event Marketplace
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/questionnaire")}
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-900 text-white text-base font-medium hover:bg-emerald-800 transition-all duration-300 shadow-lg"
              >
                Find Vendors
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-base font-medium hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <div className="bg-white py-6 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 text-sm md:text-base font-medium text-stone-600">
            <span className="flex items-center gap-2">✅ Verified Vendors</span>
            <span className="flex items-center gap-2">💎 Best Price Guarantee</span>
            <span className="flex items-center gap-2">📍 Local Hyderabad Experts</span>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="px-6 md:px-16 py-20 md:py-28 bg-white scroll-mt-28"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-8 text-stone-900 italic">
              Built by People Who Know Hyderabad
            </h2>
            <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
              <p>
                We're a local team that has planned events from intimate house mehendis in Jubilee Hills 
                to grand 500-guest weddings in Gachibowli. We know which decorators actually show up on time, 
                which caterers handle last-minute headcount jumps, and where you should spend versus save.
              </p>
              <p>
                Our goal is simple: remove the chaos, family politics, and WhatsApp spam from planning—so you can enjoy your own event for once.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section
          id="services"
          className="px-6 md:px-16 py-20 md:py-28 bg-stone-50 scroll-mt-28"
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-stone-900 italic">
              Celebrations We Create
            </h2>
            <p className="text-stone-500 font-light">Curated experiences for every milestone.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <article className="bg-white p-10 shadow-sm border border-stone-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300 group">
              <div className="text-5xl mb-6">💍</div>
              <h3 className="font-serif text-2xl mb-4 text-stone-900 italic">Weddings</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-8">
                Mandap decor, baraat entries, seating arrangements, and photography—meticulously planned around your venue and budget.
              </p>
              <button onClick={() => navigate("/questionnaire?type=wedding")} className="text-emerald-900 font-medium hover:underline underline-offset-4">
                Plan a Wedding →
              </button>
            </article>

            {/* Service 2 */}
            <article className="bg-white p-10 shadow-sm border border-stone-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300 group">
              <div className="text-5xl mb-6">🎂</div>
              <h3 className="font-serif text-2xl mb-4 text-stone-900 italic">Birthdays</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-8">
                Custom themes, stunning cakes, entertainment, and photography for milestone celebrations—from 1st birthdays to 60th anniversaries.
              </p>
              <button onClick={() => navigate("/questionnaire?type=birthday")} className="text-emerald-900 font-medium hover:underline underline-offset-4">
                Plan a Birthday →
              </button>
            </article>

            {/* Service 3 */}
            <article className="bg-white p-10 shadow-sm border border-stone-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300 group">
              <div className="text-5xl mb-6">✨</div>
              <h3 className="font-serif text-2xl mb-4 text-stone-900 italic">Private Events</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-8">
                Housewarmings, rooftop dinners, and intimate family gatherings—elegant setups designed to fit perfectly in real homes.
              </p>
              <button onClick={() => navigate("/questionnaire?type=private")} className="text-emerald-900 font-medium hover:underline underline-offset-4">
                Plan an Event →
              </button>
            </article>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section
          id="testimonials"
          className="px-6 md:px-16 py-20 md:py-28 bg-white scroll-mt-28"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 text-stone-900 italic">
                Kind Words
              </h2>
              <blockquote className="mb-8">
                <p className="text-xl text-stone-600 font-light italic leading-relaxed mb-6">
                  "I would recommend Vowza to anyone looking to have a beautiful and happy wedding. They connected us with vendors who actually understood our vibe, without the usual Hyderabad markup."
                </p>
                <footer className="text-base font-medium text-stone-900">
                  — Priya & Arjun, <span className="text-stone-500 font-normal">Married at Taj Falaknuma</span>
                </footer>
              </blockquote>
            </div>
            <div className="h-[400px] rounded-sm overflow-hidden shadow-lg relative">
               <img
                src="https://images.pexels.com/photos/12718440/pexels-photo-12718440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy couple"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section
          id="gallery"
          className="px-6 md:px-16 py-20 md:py-28 bg-stone-50 scroll-mt-28"
        >
           <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-stone-900 italic">
              Real Vowza Events
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto h-[600px]">
            {/* Grid of images */}
            <div className="col-span-2 row-span-2 relative overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1519225468063-5078d25503e4?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Event 1"/>
            </div>
            <div className="relative overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Event 2"/>
            </div>
            <div className="relative overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Event 3"/>
            </div>
             <div className="col-span-2 relative overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1530103862676-de3c9a59af57?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Event 4"/>
            </div>
          </div>
          <div className="text-center mt-12">
             <button
              onClick={() => navigate("/questionnaire")}
              className="text-emerald-900 font-medium hover:underline underline-offset-4"
            >
              See Full Portfolio →
            </button>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 md:px-16 py-24 bg-stone-900 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white italic">
            Ready to Plan?
          </h2>
          <p className="text-lg text-stone-400 font-light mb-10 max-w-xl mx-auto">
            Tell us about your celebration in 3 minutes. No obligation, just expert options.
          </p>
          <button
            onClick={() => navigate("/questionnaire")}
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-stone-900 text-base font-medium hover:bg-emerald-50 transition-all duration-300"
          >
            Start Discovery Call
          </button>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        id="contact"
        className="px-6 md:px-16 py-16 bg-stone-50 border-t border-stone-200 scroll-mt-28"
      >
        <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto text-sm text-stone-600">
          <div className="col-span-1 md:col-span-1">
             <div className="font-serif text-2xl italic text-stone-900 mb-4">Vowza</div>
             <p className="mb-4 font-light">Making Hyderabad celebrations effortless, elegant, and unforgettable.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-stone-900 mb-4 uppercase tracking-wider text-xs">Contact</h4>
            <p className="mb-2">Jubilee Hills, Hyderabad</p>
            <p className="mb-2">Tel: 040-1234-5678</p>
            <p>Email: hello@vowza.in</p>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-4 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-2 font-light">
              <li><button onClick={() => scrollToSection("about")} className="hover:text-emerald-900">About Us</button></li>
              <li><button onClick={() => navigate("/questionnaire")} className="hover:text-emerald-900">Careers</button></li>
              <li><button onClick={() => navigate("/questionnaire")} className="hover:text-emerald-900">Privacy Policy</button></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-stone-900 mb-4 uppercase tracking-wider text-xs">For Vendors</h4>
             <p className="mb-4 font-light">Are you a top-tier venue or decorator?</p>
             <button className="text-emerald-900 font-medium hover:underline">Join Our Network →</button>
          </div>
        </div>
        
        <div className="border-t border-stone-200 mt-12 pt-8 text-center text-xs text-stone-400">
          © 2026 Vowza. Made with ❤️ in Hyderabad.
        </div>
      </footer>
    </div>
  );
}
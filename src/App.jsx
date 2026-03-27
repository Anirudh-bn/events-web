import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import QuestionnaireForm from "./QuestionnaireForm";

// Landing Page Component (Internal to App.jsx for simplicity, or could be separate)
function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-900 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-emerald-900 italic">Vowza</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#" className="hover:text-emerald-900 transition-colors">How it Works</a>
            <a href="#" className="hover:text-emerald-900 transition-colors">Services</a>
            <a href="#" className="hover:text-emerald-900 transition-colors">Reviews</a>
          </div>

          <button 
            onClick={() => navigate("/questionnaire")}
            className="bg-emerald-900 text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-emerald-800 transition-all shadow-sm hover:shadow-md"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop" 
            alt="Elegant outdoor event dining" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-medium text-white/90 mb-6 uppercase tracking-wider backdrop-blur-sm">
            Est. 2026 • Hyderabad
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight drop-shadow-lg">
            Vowza: Hyderabad's Premier <br/> <span className="italic text-amber-50">Event Marketplace</span>
          </h1>
          <p className="text-lg md:text-2xl text-stone-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Discover & Book the Finest Vendors in Telangana. From intimate gatherings to grand celebrations.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => navigate("/questionnaire")}
              className="bg-emerald-900 hover:bg-emerald-800 text-white text-lg px-8 py-4 rounded-sm transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 min-w-[220px]"
            >
              Find Your Vendors
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-lg px-8 py-4 rounded-sm transition-all duration-300 min-w-[220px]">
              View Gallery
            </button>
          </div>
        </div>
      </header>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-stone-100 py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-stone-100">
          <div className="flex items-center justify-center gap-3 py-2">
            <span className="text-2xl">✅</span>
            <span className="text-stone-700 font-medium">Verified Vendors</span>
          </div>
          <div className="flex items-center justify-center gap-3 py-2">
            <span className="text-2xl">💎</span>
            <span className="text-stone-700 font-medium">Best Price Guarantee</span>
          </div>
          <div className="flex items-center justify-center gap-3 py-2">
            <span className="text-2xl">🔒</span>
            <span className="text-stone-700 font-medium">Secure Booking</span>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES PREVIEW (Optional Placeholder) */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Curated for Perfection</h2>
          <p className="text-stone-600 max-w-2xl mx-auto mb-16">We handpick every vendor to ensure your event in Hyderabad is nothing short of spectacular.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Venues", icon: "🏰", desc: "Heritage spots to modern halls" },
              { title: "Catering", icon: "🍽️", desc: "Authentic Hyderabadi cuisine" },
              { title: "Decor", icon: "✨", desc: "Breathtaking floral arrangements" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-sm border border-stone-100 hover:border-amber-700/30 transition-colors shadow-sm hover:shadow-md group cursor-pointer">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-serif text-xl text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-6 border-t border-stone-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="font-serif text-2xl text-stone-100 mb-2 italic">Vowza</h4>
            <p className="text-sm">Making events timeless.</p>
          </div>
          
          <div className="bg-stone-800/50 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border border-stone-700/50">
            <div>
              <h5 className="text-stone-200 font-medium mb-1">Are you a Vendor?</h5>
              <p className="text-xs text-stone-500">Join our exclusive network of top-tier professionals.</p>
            </div>
            <button className="whitespace-nowrap bg-amber-700 hover:bg-amber-600 text-white px-5 py-2 rounded-sm text-sm font-medium transition-colors">
              Partner with us
            </button>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-stone-800 text-center md:text-left text-xs text-stone-600 flex flex-col md:flex-row justify-between">
          <p>&copy; 2026 Vowza. Made in Hyderabad.</p>
          <div className="flex gap-6 justify-center md:justify-end mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Instagram</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Questionnaire Form Route */}
        <Route path="/questionnaire" element={<QuestionnaireForm />} />
      </Routes>
    </Router>
  );
}
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Campaigns from "./components/Campaigns"
import CTA from "./components/CTA"

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Campaigns />
        <CTA />
      </main>
      <footer className="border-t border-blue-100 bg-gradient-to-b from-white to-blue-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} ImpactBlue. For creators, for the planet.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-600 hover:text-slate-900">Privacy</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">Terms</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

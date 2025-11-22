import { Leaf, Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: "Campaigns", href: "#campaigns" },
    { label: "Collaborate", href: "#collaborate" },
    { label: "How it works", href: "#how" },
    { label: "Pledge", href: "#pledge" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-blue-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-blue-600 text-white shadow-sm">
            <Leaf className="w-5 h-5" />
          </div>
          <span className="font-semibold text-slate-900">ImpactBlue</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a
            href="#start"
            className="inline-flex items-center rounded-lg bg-blue-600 text-white px-4 py-2 font-medium shadow-sm hover:bg-blue-700 transition-colors"
          >
            Start a Campaign
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-blue-50">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 border-t border-blue-100 bg-white/90">
          <div className="flex flex-col gap-3 py-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-700 hover:text-slate-900">
                {item.label}
              </a>
            ))}
            <a href="#start" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-4 py-2 font-medium shadow-sm hover:bg-blue-700">
              Start a Campaign
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

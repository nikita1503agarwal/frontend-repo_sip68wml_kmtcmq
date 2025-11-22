import { Leaf, Users, Handshake, BarChart3 } from "lucide-react"

export default function Features() {
  const items = [
    {
      icon: Leaf,
      title: "Planet-first mission",
      desc: "Every campaign focuses on measurable environmental outcomes: tree planting, clean water, ocean cleanup and more.",
    },
    {
      icon: Users,
      title: "Creator collaborations",
      desc: "Form teams, co-host challenges, and cross-promote for maximum reach and impact.",
    },
    {
      icon: Handshake,
      title: "Trusted partners",
      desc: "We match you with verified NGOs and climate tech partners so your efforts translate into real change.",
    },
    {
      icon: BarChart3,
      title: "Transparent impact",
      desc: "Live dashboards show pledges, funds raised, and project progress your audience can trust.",
    },
  ]

  return (
    <section id="how" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Built for creators who care</h2>
          <p className="mt-3 text-slate-600">Tools and partnerships to turn your audience into a force for good.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/50 to-white p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

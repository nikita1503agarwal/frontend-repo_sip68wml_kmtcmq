import { Sparkles, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="absolute -top-40 right-0 w-[40rem] h-[40rem] bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-[40rem] h-[40rem] bg-blue-100/40 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium ring-1 ring-blue-200">
            <Sparkles className="w-4 h-4" />
            Create impact with your voice
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
            Pledge. Launch. Collaborate. Save the planet.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Join a community of creators using their reach for good. Start eco-positive campaigns, rally your audience, and partner with other influencers to amplify real-world impact.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-3 font-semibold shadow-sm hover:bg-blue-700 transition-colors"
            >
              Start a campaign
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#campaigns"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50"
            >
              Explore campaigns
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Carbon-offset verified partners • Transparent impact tracking • No cost to join
          </p>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 via-white to-blue-50 ring-1 ring-blue-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop"
              alt="Earth from above"
              className="w-full h-full object-cover opacity-90 mix-blend-multiply"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl p-4 ring-1 ring-slate-200">
            <p className="text-sm font-semibold text-slate-900">Over $2.4M pledged</p>
            <p className="text-xs text-slate-500">from 3,000+ creators globally</p>
          </div>
        </div>
      </div>
    </section>
  )
}

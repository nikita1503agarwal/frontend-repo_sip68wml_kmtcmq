export default function Campaigns() {
  const campaigns = [
    {
      title: "Plant 1M Trees Challenge",
      org: "ForestNow",
      raised: "$580k raised",
      img:
        "https://images.unsplash.com/photo-1523978591478-c753949ff840?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Ocean Plastic Cleanup Week",
      org: "BlueWave Foundation",
      raised: "$312k raised",
      img:
        "https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Solar for Schools",
      org: "BrightFuture",
      raised: "$790k raised",
      img:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop",
    },
  ]

  return (
    <section id="campaigns" className="py-20 bg-gradient-to-b from-white to-blue-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-900">Trending campaigns</h2>
          <a href="#" className="text-blue-700 hover:underline">View all</a>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {campaigns.map((c) => (
            <article key={c.title} className="group rounded-2xl overflow-hidden border border-blue-100 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{c.title}</h3>
                <p className="text-sm text-slate-500">{c.org}</p>
                <p className="mt-3 text-sm font-medium text-blue-700">{c.raised}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

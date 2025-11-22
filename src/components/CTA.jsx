export default function CTA() {
  return (
    <section id="pledge" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 p-8 sm:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold">Make your pledge today</h3>
              <p className="mt-3 text-blue-100">
                Commit to a cause, set your goal, and invite your community. We’ll handle the logistics with trusted partners.
              </p>
            </div>
            <form className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="Your name"
                className="col-span-1 sm:col-span-1 w-full rounded-lg px-4 py-3 bg-white text-slate-900 placeholder-slate-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Cause (e.g., Tree planting)"
                className="col-span-1 sm:col-span-1 w-full rounded-lg px-4 py-3 bg-white text-slate-900 placeholder-slate-400 focus:outline-none"
              />
              <button
                type="button"
                className="col-span-1 w-full rounded-lg bg-slate-900 text-white px-4 py-3 font-semibold hover:bg-slate-800"
              >
                Pledge now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

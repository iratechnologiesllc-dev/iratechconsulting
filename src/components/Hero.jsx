export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            IT Staffing & Consulting
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Building high‑performing technology teams for modern enterprises.
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            IRA Technologies connects top IT talent with organizations that need
            reliable, scalable, and future‑ready solutions.
          </p>
          <div className="mt-8 flex space-x-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 text-sm font-medium"
            >
              Talk to us
            </a>
            <a
              href="/services"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 text-sm font-medium"
            >
              View services
            </a>
          </div>
        </div>

        <div className="bg-brand-light rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">
            Why organizations choose IRA Technologies
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li>• Deep expertise in IT staffing and consulting</li>
            <li>• Flexible engagement models: contract, contract‑to‑hire, direct</li>
            <li>• Focus on long‑term partnerships, not one‑off placements</li>
            <li>• Proven track record with enterprise clients</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

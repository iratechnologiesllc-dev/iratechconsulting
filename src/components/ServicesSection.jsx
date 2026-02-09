const services = [
  {
    title: "IT Staffing",
    desc: "Contract, contract‑to‑hire, and direct placement for critical technology roles.",
  },
  {
    title: "Consulting Services",
    desc: "Project‑based consulting to support digital transformation and modernization.",
  },
  {
    title: "Managed Solutions",
    desc: "End‑to‑end delivery teams for complex enterprise initiatives.",
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">
          We partner with you to design staffing and consulting solutions that align with your business goals.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

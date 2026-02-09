import ServicesSection from '../components/ServicesSection'

export default function Services() {
  return (
    <>
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900">Services</h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            We provide flexible staffing and consulting solutions tailored to your organization’s needs.
          </p>
        </div>
      </div>
      <ServicesSection />
    </>
  )
}

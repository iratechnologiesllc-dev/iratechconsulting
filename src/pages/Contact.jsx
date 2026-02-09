import ContactSection from '../components/ContactSection'

export default function Contact() {
  return (
    <>
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900">Contact</h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Share a bit about your needs and we’ll follow up shortly.
          </p>
        </div>
      </div>
      <ContactSection />
    </>
  )
}

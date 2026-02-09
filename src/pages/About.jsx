import AboutSection from '../components/AboutSection'

export default function About() {
  return (
    <>
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900">About</h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Learn more about who we are, what we believe, and how we partner with clients.
          </p>
        </div>
      </div>
      <AboutSection />
    </>
  )
}

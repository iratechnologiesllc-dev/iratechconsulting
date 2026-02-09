export default function AboutSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">About IRA Technologies</h2>
          <p className="mt-4 text-gray-600">
            IRA Technologies is an IT staffing and consulting firm focused on building long‑term partnerships
            with clients and candidates. We understand that the right people and the right teams drive
            meaningful business outcomes.
          </p>
          <p className="mt-3 text-gray-600">
            From niche technical roles to large‑scale project teams, we bring a consultative approach to every
            engagement.
          </p>
        </div>
        <div className="bg-gray-50 border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900">What we value</h3>
          <ul className="mt-3 text-sm text-gray-700 space-y-2">
            <li>• Transparency and integrity in every interaction</li>
            <li>• Long‑term relationships over short‑term wins</li>
            <li>• Deep understanding of both technology and people</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

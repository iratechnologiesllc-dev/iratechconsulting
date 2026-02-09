export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-2">IRA Technologies</h3>
          <p className="text-sm">
            Trusted IT staffing and consulting partner helping organizations build high‑performing technology teams.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Services</h4>
          <ul className="text-sm space-y-1">
            <li>IT Staffing</li>
            <li>Consulting Services</li>
            <li>Managed Solutions</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p className="text-sm">
            Email: info@iratechconsulting.com<br />
            Location: Haslet, TX
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center text-xs py-4">
        © {new Date().getFullYear()} IRA Technologies. All rights reserved.
      </div>
    </footer>
  )
}

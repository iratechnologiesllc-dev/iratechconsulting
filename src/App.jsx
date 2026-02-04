export default function App() {
  return (
    <div>
      <header className="header">
        <h1>IRA Tech Consulting</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="section">
        <h2>Technology & Consulting Services</h2>
        <p>We deliver reliable IT consulting, staffing, and digital solutions.</p>
      </section>

      <section id="services" className="section gray">
        <h2>Our Services</h2>
        <ul>
          <li>IT Consulting</li>
          <li>Staff Augmentation</li>
          <li>Application Development</li>
          <li>Cloud & DevOps</li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Email: contact@iratechconsulting.com</p>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} IRA Tech Consulting
      </footer>
    </div>
  )
}

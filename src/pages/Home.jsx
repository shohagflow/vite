import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Home.css'

function Home() {
  const [activeNav, setActiveNav] = useState('home')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = location.state.scrollTo
      setActiveNav(section)
      setTimeout(() => {
        const element = document.getElementById(section)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location.state])

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you, ${formData.name}! I'll get back to you soon.`)
    setFormData({ name: '', email: '', message: '' })
  }

  const scrollToSection = (sectionId) => {
    setActiveNav(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => navigate('/')}>Portfolio</div>
          <ul className="nav-menu">
            <li><button className={activeNav === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button className={activeNav === 'about' ? 'active' : ''} onClick={() => navigate('/about')}>About</button></li>
            <li><button className={activeNav === 'skills' ? 'active' : ''} onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button className={activeNav === 'projects' ? 'active' : ''} onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button className={activeNav === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hello, I'm a Full Stack Developer</h1>
          <p className="hero-subtitle">Creating amazing digital experiences with modern technologies</p>
          <button className="cta-button" onClick={() => scrollToSection('contact')}>Get In Touch</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I'm a passionate developer with 5+ years of experience building web applications. I specialize in creating scalable, user-friendly solutions that solve real-world problems.</p>
              <p>My journey in tech started with a curiosity about how things work, and it has evolved into a career dedicated to excellence and continuous learning.</p>
              <p>When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.</p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React.js</li>
                <li>JavaScript/ES6+</li>
                <li>HTML & CSS</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Vite</li>
                <li>Docker</li>
                <li>Agile/Scrum</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>E-Commerce Platform</h3>
              </div>
              <p>A full-stack e-commerce solution with payment integration, user authentication, and product management.</p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-header">
                <h3>Task Management App</h3>
              </div>
              <p>Real-time collaborative task management application with team features and progress tracking.</p>
              <div className="project-tech">
                <span>React</span>
                <span>Firebase</span>
                <span>CSS3</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-header">
                <h3>Portfolio Website</h3>
              </div>
              <p>Modern, responsive portfolio website showcasing projects and skills with smooth animations.</p>
              <div className="project-tech">
                <span>React</span>
                <span>Vite</span>
                <span>Responsive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Work Together</h3>
              <p>Have a project in mind? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.</p>
              <div className="contact-links">
                <p><strong>Email:</strong> your.email@example.com</p>
                <p><strong>Location:</strong> Your City, Country</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleFormChange}
                required
              ></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Your Portfolio. All rights reserved.</p>
          <div className="social-links">
            <a href="#linkedin">LinkedIn</a>
            <a href="#github">GitHub</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

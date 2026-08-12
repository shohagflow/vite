import { useNavigate } from 'react-router-dom'
import './About.css'

function About() {
  const navigate = useNavigate()

  const navigateToSection = (section) => {
    navigate('/', { state: { scrollTo: section } })
  }

  return (
    <div className="about-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => navigate('/')}>Portfolio</div>
          <ul className="nav-menu">
            <li><button onClick={() => navigateToSection('home')}>Home</button></li>
            <li><button className="active">About</button></li>
            <li><button onClick={() => navigateToSection('skills')}>Skills</button></li>
            <li><button onClick={() => navigateToSection('projects')}>Projects</button></li>
            <li><button onClick={() => navigateToSection('contact')}>Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <div className="about-header">
        <div className="header-content">
          <h1>About Me</h1>
          <p>Passionate Developer | Problem Solver | Continuous Learner</p>
        </div>
      </div>

      {/* Bio Section */}
      <section className="bio-section">
        <div className="section-container">
          <div className="bio-grid">
            <div className="bio-text">
              <h2>Who I Am</h2>
              <p>
                I'm a full-stack web developer with 5+ years of experience building scalable, 
                user-friendly web applications. My journey in tech started with curiosity and 
                has evolved into a passion for creating innovative digital solutions.
              </p>
              <p>
                I specialize in React, Node.js, and MongoDB, but I'm always eager to learn 
                new technologies and best practices. I believe in writing clean, maintainable 
                code and collaborating closely with teams to deliver exceptional results.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open source projects, 
                exploring emerging technologies, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="bio-image">
              <div className="image-placeholder">
                <span>Your Photo Here</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <div className="section-container">
          <h2>My Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2019 - Present</h3>
                <h4>Senior Full Stack Developer</h4>
                <p>Building and scaling web applications with modern technologies. Leading a team of developers and mentoring junior developers.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2017 - 2019</h3>
                <h4>Full Stack Developer</h4>
                <p>Developed multiple client projects using React, Node.js, and databases. Improved application performance by 40%.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2015 - 2017</h3>
                <h4>Frontend Developer</h4>
                <p>Started my career focusing on React and JavaScript. Built responsive, interactive web applications.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2014</h3>
                <h4>Self-Learning & First Projects</h4>
                <p>Discovered programming through online courses. Built first projects and launched portfolio website.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-container">
          <h2>My Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>I constantly seek new solutions and embrace emerging technologies to solve problems creatively.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>I believe in the power of teamwork and open communication to achieve amazing results together.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📈</div>
              <h3>Growth</h3>
              <p>Continuous learning and improvement are at the heart of everything I do professionally.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Excellence</h3>
              <p>I'm committed to delivering high-quality work that exceeds expectations every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="section-container">
          <h2>Areas of Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Frontend Development</h3>
              <ul>
                <li>React.js & Next.js</li>
                <li>JavaScript/TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
                <li>Redux & State Management</li>
              </ul>
            </div>
            <div className="expertise-card">
              <h3>Backend Development</h3>
              <ul>
                <li>Node.js & Express.js</li>
                <li>REST APIs</li>
                <li>MongoDB & SQL</li>
                <li>Authentication & Security</li>
                <li>Server Optimization</li>
              </ul>
            </div>
            <div className="expertise-card">
              <h3>Tools & Technologies</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Docker & Deployment</li>
                <li>AWS & Cloud Services</li>
                <li>Testing & Debugging</li>
                <li>Agile/Scrum Methodology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="fun-facts-section">
        <div className="section-container">
          <h2>Fun Facts About Me</h2>
          <div className="facts-grid">
            <div className="fact">
              <div className="fact-number">50+</div>
              <p>Projects Completed</p>
            </div>
            <div className="fact">
              <div className="fact-number">30+</div>
              <p>Happy Clients</p>
            </div>
            <div className="fact">
              <div className="fact-number">10+</div>
              <p>Open Source Contributions</p>
            </div>
            <div className="fact">
              <div className="fact-number">100%</div>
              <p>Passion for Code</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <h2>Ready to Work Together?</h2>
          <p>Let's create something amazing together. Feel free to reach out!</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => navigateToSection('contact')}>Get In Touch</button>
            <button className="btn-secondary" onClick={() => navigateToSection('home')}>View My Work</button>
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

export default About

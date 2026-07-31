import { useState } from 'react'
import './App.css'
import profilePhoto from './assets/abhinav-photo.png'

const navItems = ['Home', 'About', 'Work', 'Contact']

const skillBars = [
  { label: 'Frontend development', level: '92%' },
  { label: 'Backend APIs', level: '86%' },
  { label: 'MongoDB and databases', level: '82%' },
  { label: 'React Native and mobile UI', level: '76%' },
]

const experience = [
  {
    id: 'programming-com',
    company: 'Programming.com',
    role: 'Full Stack Intern',
    period: 'Jan 2026 - Jul 2026',
    summary:
      'Built scalable web applications, responsive interfaces, backend APIs, and database-backed features with cross-functional teams.',
    details: [
      'Developed and maintained scalable web applications using modern full-stack technologies.',
      'Designed and implemented responsive user interfaces with HTML, CSS, JavaScript, and frontend frameworks such as React and Angular.',
      'Built robust backend services and APIs using Node.js and integrated third-party services to improve product functionality.',
      'Worked with MySQL, MongoDB, and PostgreSQL for efficient data management and application workflows.',
      'Collaborated with designers, product managers, and QA engineers while optimizing performance, scalability, and code quality.',
      'Used Git for version control, team collaboration, and structured delivery across ongoing workstreams.',
    ],
  },
  {
    id: 'xpediolive',
    company: 'Xpediolive',
    role: 'Application Development Intern',
    period: 'Jul 2024 - Aug 2024',
    summary:
      'Worked across mobile and web application development, testing, debugging, and delivery workflows.',
    details: [
      'Assisted in developing and testing both mobile and web applications using modern technologies.',
      'Contributed to frontend and backend tasks while learning production-oriented development workflows.',
      'Gained hands-on experience in debugging, application development, and collaborating within a delivery team.',
    ],
  },
]

const projects = [
  {
    id: 'detect',
    title: 'Detect.com',
    category: 'AI investigation platform',
    description:
      'Incident reconstruction, media verification, structured evidence timelines, and role-based workflows using React, Node.js, MongoDB, and Python.',
    link: 'https://detect-com.vercel.app',
    details: [
      'Built as an AI-powered platform for incident reconstruction and media verification.',
      'Organizes digital evidence into structured timelines so investigators can review information in sequence.',
      'Supports authenticity checks, evidence analysis, and role-based workflows for investigation teams.',
      'Stack included React, Node.js, MongoDB, and Python across product and analysis flows.',
    ],
  },
  {
    id: 'medicine',
    title: 'Medicine Recommendation System',
    category: 'ML product build',
    description:
      'A machine learning backed recommendation interface built with Python and React for practical web-based health assistance.',
    link: 'https://medicine-recommendation-system-bice.vercel.app',
    details: [
      'Engineered a medicine recommendation system by applying machine learning concepts to a practical web interface.',
      'Used Python for the recommendation logic and React for the frontend experience.',
      'Focused on translating prediction-driven functionality into an accessible user-facing product.',
    ],
  },
]

const skillCloud = [
  'React',
  'Next.js',
  'JavaScript',
  'Node.js',
  'Express',
  'MongoDB',
  'React Native',
  'Redux',
  'Git',
  'GitHub',
  'Expo',
  'REST APIs',
  'Python',
  'Basic Java',
]

const certifications = [
  'Mobile and Web Application Development from Xpediolive, Maharashtra',
  'Node.js from Knowledge Gate',
  'JavaScript from Knowledge Gate',
  'IBM Ecosystem Cloud Native Developer',
  'Cloud Computing by Jyesta',
  'Claude Code 101 and Claude 101 by Anthropic',
]

const highlights = [
  { label: 'Experience', value: '2 internships' },
  { label: 'Focus', value: 'Full-stack products' },
  { label: 'Stack', value: 'React, Node, MongoDB' },
]

function App() {
  const [feedback, setFeedback] = useState('')
  const [openExperience, setOpenExperience] = useState('programming-com')
  const [openProject, setOpenProject] = useState('detect')
  const [educationOpen, setEducationOpen] = useState(false)

  const copyText = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value)
      setFeedback(`${label} copied`)
    } catch {
      setFeedback(`Could not copy ${label.toLowerCase()}`)
    }
  }

  return (
    <div className="portfolio-page">
      <div className="portfolio-shell">
        <header className="topbar">
          <div className="brand-lockup">
            <span className="brand-mark" aria-hidden="true">
              AS
            </span>
            <div className="brand-copy">
              <span className="brand-name">Abhinav Sharma</span>
              <span className="brand-role">Full Stack Developer</span>
            </div>
          </div>
          <nav className="topnav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>
        </header>

        <section className="hero-panel" id="home">
          <div className="hero-copy">
            <p className="section-kicker">Available for internships</p>
            <h1>Abhinav Sharma</h1>
            <p className="hero-title">Full Stack Developer</p>
            <p className="lead">
              I build reliable web applications with clean interfaces, stable APIs, and production
              workflows that are easy to maintain.
            </p>
            <div className="hero-actions">
              <button
                type="button"
                className="action-button action-primary"
                onClick={() => copyText('sharma21072003@gmail.com', 'Email')}
              >
                Copy email
              </button>
              <a
                className="action-button action-secondary"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sharma21072003@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Send message
              </a>
            </div>
            <div className="hero-metrics">
              {highlights.map((item) => (
                <div key={item.label} className="hero-metric">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
            {feedback ? <p className="feedback">{feedback}</p> : null}
          </div>

          <div className="hero-profile">
            <div className="hero-portrait-frame">
              <img src={profilePhoto} alt="Abhinav Sharma portrait" />
            </div>
            <div className="hero-profile-copy">
              <p>Based in Mandi, Himachal Pradesh</p>
              <p>React, Node.js, MongoDB, React Native</p>
            </div>
          </div>
        </section>

        <section className="content-grid">
          <div className="main-column">
            <section className="panel" id="about">
              <p className="section-kicker">About me</p>
              <h2>I build practical products with thoughtful UI and dependable backend work.</h2>
              <p>
                I am a B.Tech Computer Science and Engineering graduate from DAV Institute of
                Engineering and Technology, Jalandhar. My experience spans frontend systems, API
                integration, database-backed features, debugging, and product delivery.
              </p>
            </section>

            <section className="panel" id="work">
              <div className="section-heading">
                <p className="section-kicker">Experience</p>
                <h2>Internship experience focused on shipping real work.</h2>
              </div>
              <div className="stack-list">
                {experience.map((item) => (
                  <article key={item.company} className="stack-item stack-item-expandable">
                    <button
                      type="button"
                      className="detail-toggle"
                      onClick={() =>
                        setOpenExperience((current) => (current === item.id ? '' : item.id))
                      }
                      aria-expanded={openExperience === item.id}
                    >
                      <span>{item.period}</span>
                      <h3>{item.role}</h3>
                      <strong>{item.company}</strong>
                      <p>{item.summary}</p>
                    </button>
                    {openExperience === item.id ? (
                      <div className="detail-panel">
                        <ul className="detail-list">
                          {item.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>

            <section className="panel">
              <div className="section-heading">
                <p className="section-kicker">Projects</p>
                <h2>Selected work that shows product thinking and implementation.</h2>
              </div>
              <div className="project-stack">
                {projects.map((project) => (
                  <article key={project.title} className="project-tile project-tile-expandable">
                    <button
                      type="button"
                      className="detail-toggle"
                      onClick={() =>
                        setOpenProject((current) => (current === project.id ? '' : project.id))
                      }
                      aria-expanded={openProject === project.id}
                    >
                      <span>{project.category}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </button>
                    {openProject === project.id ? (
                      <div className="detail-panel">
                        <ul className="detail-list">
                          {project.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                        <a
                          className="project-link"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Open project
                        </a>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>

            <section className="panel education-card">
              <div className="section-heading">
                <p className="section-kicker">Education</p>
                <h2>B.Tech Computer Science and Engineering</h2>
              </div>
              <button
                type="button"
                className="detail-toggle"
                onClick={() => setEducationOpen((current) => !current)}
                aria-expanded={educationOpen}
              >
                <p>DAV Institute of Engineering and Technology, Jalandhar</p>
                <span>Jul 2022 - Jul 2026</span>
              </button>
              {educationOpen ? (
                <div className="detail-panel">
                  <p className="education-detail">
                    Senior secondary education was completed at Govt. Sen. Sec. School Khar Kalan
                    (H.P.).
                  </p>
                  <p className="section-kicker certifications-kicker">Certifications</p>
                  <ul className="detail-list">
                    {certifications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </section>
          </div>

          <aside className="side-column" id="contact">
            <section className="panel intro-card">
              <div className="mini-portrait">
                <img src={profilePhoto} alt="Abhinav Sharma portrait" />
              </div>
              <p className="section-kicker">Contact</p>
              <p className="card-copy">
                Full-stack developer with internship experience across frontend systems, backend
                APIs, and database-driven applications.
              </p>
              <div className="contact-list">
                <button type="button" onClick={() => copyText('+91 78766 59026', 'Phone number')}>
                  Copy phone
                </button>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sharma21072003@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email me
                </a>
              </div>
            </section>

            <section className="panel">
              <div className="section-heading">
                <p className="section-kicker">Skills</p>
                <h2>Core technologies I use regularly.</h2>
              </div>
              <div className="skills-bars">
                {skillBars.map((skill) => (
                  <div key={skill.label} className="skill-meter">
                    <div className="skill-meta">
                      <span>{skill.label}</span>
                      <span>{skill.level}</span>
                    </div>
                    <div className="skill-track">
                      <div className="skill-fill" style={{ width: skill.level }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="chip-cloud">
                {skillCloud.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </section>

            <section className="panel">
              <div className="section-heading">
                <p className="section-kicker">Strengths</p>
                <h2>What I bring to a team.</h2>
              </div>
              <div className="summary-card">
                <p>
                  I move from interface building to backend integration, database work, and
                  debugging without breaking product flow. JavaScript is my primary working
                  language, supported by React, Next.js, Node.js, Express, MongoDB, Git, GitHub,
                  React Native, and Expo.
                </p>
              </div>
            </section>
          </aside>
        </section>
      </div>
    </div>
  )
}

export default App

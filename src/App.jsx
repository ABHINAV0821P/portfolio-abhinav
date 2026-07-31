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
    <div className="neo-page">
      <div className="site-frame">
        <section className="primary-panel" id="home">
          <header className="topbar">
            <div className="brand-lockup">
              <span className="brand-dot"></span>
              <span className="brand-name">Abhinav Sharma</span>
            </div>
            <nav className="topnav" aria-label="Primary">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              ))}
            </nav>
          </header>

          <div className="hero-shell">
            <div className="hero-copy">
              <p className="section-kicker">Hello.</p>
              <h1>I&apos;m Abhinav Sharma</h1>
              <h2 className="hero-title">Full Stack Developer</h2>
              <p className="lead">
                I&apos;m a 2026 Computer Science graduate focused on building professional web
                products, reliable APIs, and polished user experiences.
              </p>
              <div className="hero-stats" aria-label="Professional highlights">
                {highlights.map((item) => (
                  <div key={item.label} className="hero-stat">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
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
              <ul className="meta-strip">
                <li>Mandi, Himachal Pradesh</li>
                <li>Open to internships</li>
                <li>English / Hindi</li>
              </ul>
              {feedback ? <p className="feedback">{feedback}</p> : null}
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-portrait-frame">
                <img src={profilePhoto} alt="" />
              </div>
              <div className="hero-visual-ring" />
              <div className="hero-visual-copy">
                <span>Software Developer</span>
                <strong>Designing clean, production-ready interfaces.</strong>
              </div>
            </div>
          </div>

          <section className="about-block" id="about">
            <div className="photo-bubble">
              <img src={profilePhoto} alt="Abhinav Sharma portrait" />
            </div>

            <div className="about-copy">
              <p className="section-kicker">About me</p>
              <h2>I build polished interfaces and dependable backend systems.</h2>
              <p>
                I design responsive interfaces, connect them to dependable APIs, and ship features
                that are practical to use in real products. My experience spans React, Node.js,
                MongoDB, React Native, debugging, deployment, and frontend troubleshooting.
              </p>
              <p className="about-extra">
                I am a B.Tech Computer Science and Engineering graduate from DAV Institute of
                Engineering and Technology, Jalandhar, and I have been building toward full-stack
                product roles through internships, project work, and tool-driven development.
              </p>
              <ul className="bullet-list">
                <li>Web UI and frontend implementation</li>
                <li>Node.js APIs and service integration</li>
                <li>Database-backed application flows</li>
                <li>Mobile-oriented experience with React Native</li>
              </ul>
            </div>
          </section>

          <section className="skills-block" id="work">
            <div className="section-heading">
              <p className="section-kicker">My skills</p>
              <h2>Core strengths shaped by internships and shipped projects.</h2>
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

            <div className="extended-summary">
              <article className="summary-card">
                <p className="section-kicker">Strengths</p>
                <p>
                  My strongest combination is frontend execution plus API-backed application
                  delivery. I move from interface building to backend integration, database work,
                  and debugging without breaking product flow.
                </p>
              </article>
              <article className="summary-card">
                <p className="section-kicker">What I work with</p>
                <p>
                  JavaScript is my primary working language, supported by React, Next.js, Node.js,
                  Express, MongoDB, Git, GitHub, React Native, Expo, and AI-assisted development
                  tools such as Codex, Claude, and Cursor.
                </p>
              </article>
            </div>
          </section>
        </section>

        <aside className="secondary-panel" id="contact">
          <section className="card intro-card">
            <div className="mini-portrait">
              <img src={profilePhoto} alt="Abhinav Sharma portrait" />
            </div>
            <p className="section-kicker">About me</p>
            <p className="card-copy">
              Full-stack developer with internship experience across frontend systems, backend
              APIs, and database-driven applications.
            </p>
            <div className="contact-list">
              <button type="button" onClick={() => copyText('+91 78766 59026', 'Phone number')}>
                Copy phone
              </button>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sharma21072003@gmail.com" target="_blank" rel="noreferrer">
                Email me
              </a>
            </div>
          </section>

          <section className="card experience-card">
            <p className="section-kicker">My resume</p>
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

          <section className="card recent-work-card">
            <p className="section-kicker">Recent work</p>
            <div className="project-stack">
              {projects.map((project) => (
                <article key={project.title} className="project-tile project-tile-expandable">
                  <button
                    type="button"
                    className="detail-toggle"
                    onClick={() => setOpenProject((current) => (current === project.id ? '' : project.id))}
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
                      <a href={project.link} target="_blank" rel="noreferrer">
                        Open project
                      </a>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className="card education-card">
            <p className="section-kicker">Education</p>
            <button
              type="button"
              className="detail-toggle"
              onClick={() => setEducationOpen((current) => !current)}
              aria-expanded={educationOpen}
            >
              <h3>B.Tech Computer Science and Engineering</h3>
              <p>DAV Institute of Engineering and Technology, Jalandhar</p>
              <span>Jul 2022 - Jul 2026</span>
            </button>
            {educationOpen ? (
              <div className="detail-panel">
                <p className="education-detail">
                  Completed B.Tech in Computer Science and Engineering. Senior secondary education
                  was completed at Govt. Sen. Sec. School Khar Kalan (H.P.).
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
        </aside>
      </div>
    </div>
  )
}

export default App

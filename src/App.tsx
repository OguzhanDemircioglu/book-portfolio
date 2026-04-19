import { useEffect, useRef, useState } from 'react'
import './App.css'

type RightPageId = 'turn-1' | 'turn-2' | 'turn-3' | 'turn-4' | 'turn-5'

const profile = {
  name: 'Oguzhan Turgut Demircioglu',
  title: 'Software Developer',
  summary:
    'Backend-focused developer with 5+ years of experience. I build reliable business software with Java, Spring Boot, .NET and React.',
  email: 'oguzhanturgut611@gmail.com',
  phone: '+90 552 773 59 94',
  location: 'Ankara, Turkiye',
  linkedin: 'https://www.linkedin.com/in/oguzhan-demircioglu/',
  github: 'https://github.com/OguzhanDemircioglu',
}

const experiences = [
  {
    period: '12.2024 - 01.2026',
    role: 'Software Developer - Global PBX',
    text: 'Worked on a Web Phone platform with Java 17, Spring Boot, React, Redis, Elasticsearch and microservices.',
  },
  {
    period: '07.2024 - 12.2024',
    role: 'Software Developer - Basarsoft',
    text: 'Built GIS-based stock, vehicle and employee tracking workflows with .NET 7, React, Ocelot and Docker.',
  },
  {
    period: '10.2023 - 07.2024',
    role: 'Software Developer - KolaySoft',
    text: 'Worked on e-invoicing systems across Spring Boot portal services, React frontend, .NET desktop tools and REST/SOAP APIs.',
  },
  {
    period: '11.2021 - 10.2023',
    role: 'Software Developer - Etiya',
    text: 'Maintained legacy SOAP/XML flows and contributed to Spring Boot REST modernization, Angular frontend and Oracle PL/SQL work.',
  },
]

const education = [
  {
    period: '2014 - 2019',
    title: 'Turk Hava Kurumu University',
    text: 'Electrical and Electronics Engineering (English). Built a strong technical foundation in systems, analysis and problem solving.',
  },
  {
    period: 'Core Focus',
    title: 'Software Development',
    text: 'Focused on backend development, APIs, microservices, database work and practical frontend delivery with React.',
  },
  {
    period: 'Key Topics',
    title: 'Engineering Mindset',
    text: 'Comfortable with enterprise systems, legacy modernization, integrations, communication services and product-oriented web applications.',
  },
  {
    period: 'Language',
    title: 'English',
    text: 'Upper intermediate (B2). Able to work with technical documentation and international teams.',
  },
]

const summaryBlocks = [
  {
    label: 'Experience',
    value: '5+ years',
  },
  {
    label: 'Main stack',
    value: 'Java, Spring Boot, .NET, React',
  },
  {
    label: 'Domains',
    value: 'VoIP, CRM, GIS, e-invoicing',
  },
]

const workplaceProjects = [
  {
    title: 'Web Phone (VoIP Platform) - Global PBX',
    stack: 'Java 17, Spring Boot, React, Redis, Elasticsearch, gRPC, Docker',
    details: [
      'Worked on a large microservice-based communication platform for web, mobile and desktop clients.',
      'Took responsibility for 3 microservices and supported React web frontend maintenance.',
      'Contributed to messaging, video call and AI chatbot related features.',
    ],
  },
  {
    title: 'GIS-Based Stock Management - Basarsoft',
    stack: '.NET 7, React, Ocelot, Docker, Oracle',
    details: [
      'Worked on stock, vehicle, meeting room and employee location tracking modules.',
      'Maintained a gateway-based microservice structure with Ocelot.',
      'Contributed to both backend workflows and React frontend screens.',
    ],
  },
  {
    title: 'E-Invoicing Systems - KolaySoft',
    stack: 'Java, Spring Boot, React, .NET, PostgreSQL, MSSQL, REST, SOAP',
    details: [
      'Delivered features across portal services, frontend and desktop data collection tools.',
      'Worked on reporting and invoice data flows connected to legal reporting standards.',
      'Contributed across 3 related projects in the same business domain.',
    ],
  },
  {
    title: 'CRM Order Management - Etiya',
    stack: 'Java, Spring Boot, Angular, SOAP, Oracle PL/SQL, JSP',
    details: [
      'Worked on Turk Telekom CRM and order management related systems.',
      'Maintained legacy SOAP/XML structures and supported REST modernization.',
      'Contributed across backend, frontend and database layers.',
    ],
  },
]

const ownProjects = [
  {
    title: 'Pet Commerce Website',
    link: 'https://pet-eight-rho.vercel.app',
    stack: 'React, Vite, Spring Boot, payment flow, admin tools',
    description:
      'A product-focused commerce website I am building to sell. It already includes catalog, cart, login, orders, payments and admin-side features.',
    details: [
      'Catalog, product detail, cart and order flow',
      'Login, profile and notification features',
      'Spring Boot backend with admin operations',
      'Payment and Telegram notification integration',
    ],
    note:
      'This project is not only a demo. It has potential to become a reusable starter product for niche stores.',
  },
]

const workplaceProjectPages = [
  workplaceProjects.slice(0, 1),
  workplaceProjects.slice(1, 2),
  workplaceProjects.slice(2, 3),
  workplaceProjects.slice(3, 4),
]

export default function App() {
  const pageIds: RightPageId[] = ['turn-1', 'turn-2', 'turn-3', 'turn-4', 'turn-5']
  const [turnedPages, setTurnedPages] = useState<RightPageId[]>(pageIds)
  const [coverOpen, setCoverOpen] = useState(false)
  const [coverHidden, setCoverHidden] = useState(false)
  const timeoutIds = useRef<number[]>([])

  const createZIndexMap = (turned: boolean) =>
    pageIds.reduce(
      (acc, id, index) => {
        acc[id] = turned ? index + 1 : (pageIds.length - index) * 10
        return acc
      },
      {} as Record<RightPageId, number>,
    )

  const baseZIndices = createZIndexMap(false)
  const turnedZIndices = createZIndexMap(true)
  const [pageZIndices, setPageZIndices] = useState<Record<RightPageId, number>>(baseZIndices)

  useEffect(() => {
    const first = window.setTimeout(() => setCoverOpen(true), 300)
    const second = window.setTimeout(() => setTurnedPages([]), 950)
    const third = window.setTimeout(() => setCoverHidden(true), 1300)
    timeoutIds.current.push(first, second, third)

    return () => {
      timeoutIds.current.forEach((timeoutId) => window.clearTimeout(timeoutId))
      timeoutIds.current = []
    }
  }, [])

  const isTurned = (id: RightPageId) => turnedPages.includes(id)

  const togglePage = (id: RightPageId) => {
    if (isTurned(id)) {
      setPageZIndices((current) => ({ ...current, [id]: baseZIndices[id] }))
      const timeoutId = window.setTimeout(() => {
        setTurnedPages((current) => current.filter((item) => item !== id))
      }, 30)
      timeoutIds.current.push(timeoutId)
      return
    }

    setTurnedPages((current) => [...current, id])
    const timeoutId = window.setTimeout(() => {
      setPageZIndices((current) => ({ ...current, [id]: turnedZIndices[id] }))
    }, 950)
    timeoutIds.current.push(timeoutId)
  }

  const openContact = () => {
    setTurnedPages([...pageIds])
    const timeoutId = window.setTimeout(() => {
      setPageZIndices(turnedZIndices)
    }, 950)
    timeoutIds.current.push(timeoutId)
  }

  const backToProfile = () => {
    setPageZIndices(baseZIndices)
    const timeoutId = window.setTimeout(() => {
      setTurnedPages([])
    }, 30)
    timeoutIds.current.push(timeoutId)
  }

  return (
    <main className="scene">
      <div className="wrapper">
        <div className="cover cover-left" />
        <div className={`cover cover-right ${coverOpen ? 'turn' : ''} ${coverHidden ? 'cover-hidden' : ''}`} />

        <div className="book">
          <section className="book-page page-left">
            <div className="profile-page">
              <div className="avatar-circle">OD</div>
              <h1>{profile.name}</h1>
              <h3>{profile.title}</h3>

              <div className="social-media">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <i className="bx bxl-github" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <i className="bx bxl-linkedin-square" />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <i className="bx bx-envelope" />
                </a>
              </div>

              <p>{profile.summary}</p>
              <p className="profile-meta">
                {profile.location}
                <span>|</span>
                {profile.phone}
              </p>

              <div className="btn-box">
                <a
                  href="/resume.pdf"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  View CV
                </a>
                <button className="btn ghost-btn" type="button" onClick={openContact}>
                  Contact
                </button>
              </div>
            </div>
          </section>

          <section
            className={`book-page page-right ${isTurned('turn-1') ? 'turn' : ''}`}
            id="turn-1"
            style={{ zIndex: pageZIndices['turn-1'] }}
          >
            <div className="page-front">
              <h1 className="title">Summary</h1>

              <div className="summary-page">
                <p className="summary-text">
                  Software developer focused on backend systems with solid frontend support experience. I mainly build
                  enterprise applications, integration-heavy services and web products that need to work reliably.
                </p>

                <div className="summary-grid">
                  {summaryBlocks.map((item) => (
                    <div className="summary-card" key={item.label}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="summary-notes">
                  <p>Experienced with monolithic and microservice-based systems.</p>
                  <p>Worked across Java, Spring Boot, .NET, React, Oracle and PostgreSQL environments.</p>
                  <p>Interested in both internal business software and sellable web products.</p>
                </div>
              </div>

              <span className="number-page">1</span>
              <button className="nextprev-btn" type="button" onClick={() => togglePage('turn-1')}>
                <i className="bx bx-chevron-right" />
              </button>
            </div>

            <div className="page-back">
              <h1 className="title">Education</h1>

              <div className="workeduc-box">
                {education.map((item) => (
                  <div className="workeduc-content" key={`${item.period}-${item.title}`}>
                    <span className="year">
                      <i className="bx bxs-calendar" />
                      {item.period}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>

              <span className="number-page">2</span>
              <button className="nextprev-btn back" type="button" onClick={() => togglePage('turn-1')}>
                <i className="bx bx-chevron-left" />
              </button>
            </div>
          </section>

          <section
            className={`book-page page-right ${isTurned('turn-2') ? 'turn' : ''}`}
            id="turn-2"
            style={{ zIndex: pageZIndices['turn-2'] }}
          >
            <div className="page-front">
              <h1 className="title">Work Experience</h1>

              <div className="workeduc-box compact-experience">
                {experiences.map((item) => (
                  <div className="workeduc-content" key={`${item.period}-${item.role}`}>
                    <span className="year">
                      <i className="bx bxs-calendar" />
                      {item.period}
                    </span>
                    <h3>{item.role}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>

              <span className="number-page">3</span>
              <button className="nextprev-btn" type="button" onClick={() => togglePage('turn-2')}>
                <i className="bx bx-chevron-right" />
              </button>
            </div>

            <div className="page-back">
              <h1 className="title">Project Details I</h1>

              <div className="portfolio-box project-details-page">
                {workplaceProjectPages[0].map((project) => (
                  <div className="work-project-card" key={project.title}>
                    <div className="info-box compact-info-box">
                      <div className="info-title">
                        <h3>{project.title}</h3>
                      </div>
                      <p>Tech Used:</p>
                      <p>{project.stack}</p>
                    </div>

                    <div className="project-details-list">
                      {project.details.map((detail) => (
                        <div className="project-detail-item" key={detail}>
                          <i className="bx bx-check-circle" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <span className="number-page">4</span>
              <button className="nextprev-btn back" type="button" onClick={() => togglePage('turn-2')}>
                <i className="bx bx-chevron-left" />
              </button>
            </div>
          </section>

          <section
            className={`book-page page-right ${isTurned('turn-3') ? 'turn' : ''}`}
            id="turn-3"
            style={{ zIndex: pageZIndices['turn-3'] }}
          >
            <div className="page-front">
              <h1 className="title">Project Details II</h1>

              <div className="portfolio-box project-details-page">
                {workplaceProjectPages[1].map((project) => (
                  <div className="work-project-card" key={project.title}>
                    <div className="info-box compact-info-box">
                      <div className="info-title">
                        <h3>{project.title}</h3>
                      </div>
                      <p>Tech Used:</p>
                      <p>{project.stack}</p>
                    </div>

                    <div className="project-details-list">
                      {project.details.map((detail) => (
                        <div className="project-detail-item" key={detail}>
                          <i className="bx bx-check-circle" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <span className="number-page">5</span>
              <button className="nextprev-btn" type="button" onClick={() => togglePage('turn-3')}>
                <i className="bx bx-chevron-right" />
              </button>
            </div>

            <div className="page-back">
              <h1 className="title">Project Details III</h1>

              <div className="portfolio-box project-details-page">
                {workplaceProjectPages[2].map((project) => (
                  <div className="work-project-card" key={project.title}>
                    <div className="info-box compact-info-box">
                      <div className="info-title">
                        <h3>{project.title}</h3>
                      </div>
                      <p>Tech Used:</p>
                      <p>{project.stack}</p>
                    </div>

                    <div className="project-details-list">
                      {project.details.map((detail) => (
                        <div className="project-detail-item" key={detail}>
                          <i className="bx bx-check-circle" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <span className="number-page">6</span>
              <button className="nextprev-btn back" type="button" onClick={() => togglePage('turn-3')}>
                <i className="bx bx-chevron-left" />
              </button>
            </div>
          </section>

          <section
            className={`book-page page-right ${isTurned('turn-4') ? 'turn' : ''}`}
            id="turn-4"
            style={{ zIndex: pageZIndices['turn-4'] }}
          >
            <div className="page-front">
              <h1 className="title">Project Details IV</h1>

              <div className="portfolio-box project-details-page">
                {workplaceProjectPages[3].map((project) => (
                  <div className="work-project-card" key={project.title}>
                    <div className="info-box compact-info-box">
                      <div className="info-title">
                        <h3>{project.title}</h3>
                      </div>
                      <p>Tech Used:</p>
                      <p>{project.stack}</p>
                    </div>

                    <div className="project-details-list">
                      {project.details.map((detail) => (
                        <div className="project-detail-item" key={detail}>
                          <i className="bx bx-check-circle" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <span className="number-page">7</span>
              <button className="nextprev-btn" type="button" onClick={() => togglePage('turn-4')}>
                <i className="bx bx-chevron-right" />
              </button>
            </div>

            <div className="page-back">
              <h1 className="title">Own Projects</h1>

              <div className="portfolio-box own-projects-page">
                {ownProjects.map((project) => (
                  <div className="own-project-card" key={project.title}>
                    <div className="img-box project-preview small-preview">
                      <div className="preview-window">
                        <div className="preview-bar">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="preview-content">
                          <div className="preview-sidebar" />
                          <div className="preview-main">
                            <div className="preview-card large" />
                            <div className="preview-row">
                              <div className="preview-card" />
                              <div className="preview-card" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="info-box compact-info-box">
                      <div className="info-title">
                        <h3>{project.title}</h3>
                        <a href={project.link} target="_blank" rel="noreferrer">
                          Live Preview <i className="bx bx-link-external" />
                        </a>
                      </div>
                      <p>Tech Used:</p>
                      <p>{project.stack}</p>
                      <p>{project.description}</p>
                    </div>

                    <div className="project-details-list">
                      {project.details.map((detail) => (
                        <div className="project-detail-item" key={detail}>
                          <i className="bx bx-check-circle" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    <p className="own-project-note">{project.note}</p>
                  </div>
                ))}
              </div>

              <span className="number-page">8</span>
              <button className="nextprev-btn back" type="button" onClick={() => togglePage('turn-4')}>
                <i className="bx bx-chevron-left" />
              </button>
            </div>
          </section>

          <section
            className={`book-page page-right ${isTurned('turn-5') ? 'turn' : ''}`}
            id="turn-5"
            style={{ zIndex: pageZIndices['turn-5'] }}
          >
            <div className="page-front">
              <h1 className="title">Contact</h1>

              <div className="contact-box simple-contact clean-contact-page">
                <div className="contact-card">
                  <h3>Let&apos;s build something useful.</h3>
                  <p>
                    I enjoy backend-heavy systems, integration work and product-focused web applications with clear
                    business value.
                  </p>
                  <a className="contact-link" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                  <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn Profile
                  </a>
                  <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
                    GitHub Profile
                  </a>
                </div>
              </div>

              <span className="number-page">9</span>
              <button className="nextprev-btn back" type="button" onClick={() => togglePage('turn-4')}>
                <i className="bx bx-chevron-left" />
              </button>
            </div>

            <div className="page-back">
              <h1 className="title">End</h1>

              <div className="contact-box simple-contact clean-contact-page">
                <div className="contact-card">
                  <h3>Thanks for reading.</h3>
                  <p>Backend systems, integrations and product-focused development.</p>
                </div>
              </div>

              <span className="number-page">10</span>
              <button className="back-profile" type="button" onClick={backToProfile}>
                <p>Profile</p>
                <i className="bx bxs-user" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

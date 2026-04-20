import { useEffect, useRef, useState } from 'react'
import './App.css'
import { translations, type Lang } from './translations'

type RightPageId = 'turn-1' | 'turn-2' | 'turn-3' | 'turn-4' | 'turn-5'

function detectLang(): Lang {
  const lang = navigator.language || ''
  return lang.toLowerCase().startsWith('tr') ? 'tr' : 'en'
}

export default function App() {
  const pageIds: RightPageId[] = ['turn-1', 'turn-2', 'turn-3', 'turn-4', 'turn-5']
  const [turnedPages, setTurnedPages] = useState<RightPageId[]>(pageIds)
  const [coverOpen, setCoverOpen] = useState(false)
  const [coverHidden, setCoverHidden] = useState(false)
  const [lang, setLang] = useState<Lang>(detectLang)
  const timeoutIds = useRef<number[]>([])

  const t = translations[lang]

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

  const toggleLang = () => setLang((l) => (l === 'en' ? 'tr' : 'en'))

  return (
    <main className="scene">
      <button className="lang-switch" type="button" onClick={toggleLang}>
        <h2 className={lang === 'en' ? 'lang-active' : ''}>EN</h2>
        <span className="lang-divider">|</span>
        <h2 className={lang === 'tr' ? 'lang-active' : ''}>TR</h2>
      </button>

      <div className="wrapper">
        <div className="cover cover-left" />
        <div className={`cover cover-right ${coverOpen ? 'turn' : ''} ${coverHidden ? 'cover-hidden' : ''}`} />

        <div className="book">
          {/* ── Profile (left page) ── */}
          <section className="book-page page-left">
            <div className="profile-page">
              <div className="avatar-circle">
                <img src="/ben.png" alt="Oguzhan" />
              </div>
              <h1>{t.profile.name}</h1>
              <h3>{t.profile.title}</h3>

              <div className="social-media">
                <a href={t.profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <i className="bx bxl-github" />
                </a>
                <a href={t.profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <i className="bx bxl-linkedin-square" />
                </a>
                <a href={`mailto:${t.profile.email}`} aria-label="Email">
                  <i className="bx bx-envelope" />
                </a>
              </div>

              <p>{t.profile.summary}</p>
              <p className="profile-meta">
                {t.profile.location}
                <span>|</span>
                {t.profile.phone}
              </p>

              <div className="btn-box">
                <a href="/resume.pdf" className="btn" target="_blank" rel="noreferrer">
                  {t.nav.viewCV}
                </a>
                <button className="btn ghost-btn" type="button" onClick={openContact}>
                  {t.nav.contact}
                </button>
              </div>
            </div>
          </section>

          {/* ── Page 1 / 2: Summary + Education ── */}
          <section
            className={`book-page page-right ${isTurned('turn-1') ? 'turn' : ''}`}
            id="turn-1"
            style={{ zIndex: pageZIndices['turn-1'] }}
          >
            <div className="page-front">
              <h1 className="title">{t.summary.pageTitle}</h1>

              <div className="summary-page">
                <p className="summary-text">{t.summary.text}</p>

                <div className="summary-grid">
                  {t.summary.blocks.map((item) => (
                    <div className="summary-card" key={item.label}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="summary-notes">
                  {t.summary.notes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </div>

              <span className="number-page">1</span>
              <button className="nextprev-btn" type="button" onClick={() => togglePage('turn-1')}>
                <i className="bx bx-chevron-right" />
              </button>
            </div>

            <div className="page-back">
              <h1 className="title">{t.education.pageTitle}</h1>

              <div className="workeduc-box">
                {t.education.items.map((item) => (
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

          {/* ── Page 3 / 4: Work Experience + Project I ── */}
          <section
            className={`book-page page-right ${isTurned('turn-2') ? 'turn' : ''}`}
            id="turn-2"
            style={{ zIndex: pageZIndices['turn-2'] }}
          >
            <div className="page-front">
              <h1 className="title">{t.experience.pageTitle}</h1>

              <div className="workeduc-box compact-experience">
                {t.experience.items.map((item) => (
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
              <h1 className="title">{t.projects.titles[0]}</h1>

              <div className="portfolio-box project-details-page">
                {[t.projects.items[0]].map((project) => (
                  <div className="work-project-card" key={project.title}>
                    <div className="info-box compact-info-box">
                      <div className="info-title">
                        <h3>{project.title}</h3>
                      </div>
                      <p>{t.projects.techUsed}</p>
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

          {/* ── Page 5 / 6: Project II + III ── */}
          <section
            className={`book-page page-right ${isTurned('turn-3') ? 'turn' : ''}`}
            id="turn-3"
            style={{ zIndex: pageZIndices['turn-3'] }}
          >
            <div className="page-front">
              <h1 className="title">{t.projects.titles[1]}</h1>

              <div className="portfolio-box project-details-page">
                {[t.projects.items[1]].map((project) => (
                  <div className="work-project-card" key={project.title}>
                    <div className="info-box compact-info-box">
                      <div className="info-title">
                        <h3>{project.title}</h3>
                      </div>
                      <p>{t.projects.techUsed}</p>
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
              <h1 className="title">{t.projects.titles[2]}</h1>

              <div className="portfolio-box project-details-page">
                {[t.projects.items[2]].map((project) => (
                  <div className="work-project-card" key={project.title}>
                    <div className="info-box compact-info-box">
                      <div className="info-title">
                        <h3>{project.title}</h3>
                      </div>
                      <p>{t.projects.techUsed}</p>
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

          {/* ── Page 7 / 8: Project IV + Own Projects ── */}
          <section
            className={`book-page page-right ${isTurned('turn-4') ? 'turn' : ''}`}
            id="turn-4"
            style={{ zIndex: pageZIndices['turn-4'] }}
          >
            <div className="page-front">
              <h1 className="title">{t.projects.titles[3]}</h1>

              <div className="portfolio-box project-details-page">
                {[t.projects.items[3]].map((project) => (
                  <div className="work-project-card" key={project.title}>
                    <div className="info-box compact-info-box">
                      <div className="info-title">
                        <h3>{project.title}</h3>
                      </div>
                      <p>{t.projects.techUsed}</p>
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
              <h1 className="title">{t.ownProjects.pageTitle}</h1>

              <div className="portfolio-box own-projects-page">
                {t.ownProjects.items.map((project) => (
                  <div className="own-project-card" key={project.title}>
                    <div className="img-box project-preview small-preview">
                      <div className="preview-window">
                        <img
                          src="/petshop.png"
                          alt="Pet Commerce Website"
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                        />
                      </div>
                    </div>

                    <div className="info-box compact-info-box">
                      <div className="info-title">
                        <h3>{project.title}</h3>
                        <a href={project.link} target="_blank" rel="noreferrer">
                          {t.ownProjects.livePreview} <i className="bx bx-link-external" />
                        </a>
                      </div>
                      <p>{t.ownProjects.techUsed}</p>
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

          {/* ── Page 9 / 10: Contact + End ── */}
          <section
            className={`book-page page-right ${isTurned('turn-5') ? 'turn' : ''}`}
            id="turn-5"
            style={{ zIndex: pageZIndices['turn-5'] }}
          >
            <div className="page-front">
              <h1 className="title">{t.contact.pageTitle}</h1>

              <div className="contact-box simple-contact clean-contact-page">
                <div className="contact-card">
                  <h3>{t.contact.heading}</h3>
                  <p>{t.contact.text}</p>
                  <a className="contact-link" href={`mailto:${t.profile.email}`}>
                    {t.profile.email}
                  </a>
                  <a className="contact-link" href={t.profile.linkedin} target="_blank" rel="noreferrer">
                    {t.contact.linkedin}
                  </a>
                  <a className="contact-link" href={t.profile.github} target="_blank" rel="noreferrer">
                    {t.contact.github}
                  </a>
                </div>
              </div>

              <span className="number-page">9</span>
              <button className="nextprev-btn back" type="button" onClick={() => togglePage('turn-4')}>
                <i className="bx bx-chevron-left" />
              </button>
            </div>

            <div className="page-back">
              <h1 className="title">{t.end.pageTitle}</h1>

              <div className="contact-box simple-contact clean-contact-page">
                <div className="contact-card">
                  <h3>{t.end.heading}</h3>
                  <p>{t.end.text}</p>
                </div>
              </div>

              <span className="number-page">10</span>
              <button className="back-profile" type="button" onClick={backToProfile}>
                <p>{lang === 'tr' ? 'Profil' : 'Profile'}</p>
                <i className="bx bxs-user" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

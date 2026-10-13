import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllProjects } from '../services/projects'
import type { Project } from '../types/project'
import ProjectCard from '../components/ProjectCard'
import ProjectDetailsModal from '../components/ProjectDetailsModal'
import { useLanguage } from '../i18n/LanguageContext'

const firstProjectYear = 2019
const projectCategories = ['Web & App', 'Electrical & IoT', 'Design']

export default function ProjectList() {
  const { t, translateCategory } = useLanguage()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    getAllProjects()
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError('projects.error')
        setLoading(false)
      })
  }, [])

  const newestProjectYear = projects.reduce(
    (newestYear, project) => Math.max(newestYear, new Date(project.created_at).getFullYear()),
    new Date().getFullYear(),
  )
  const years = Array.from(
    { length: Math.max(newestProjectYear - firstProjectYear + 1, 1) },
    (_, index) => newestProjectYear - index,
  )
  const filteredProjects = projects.filter((project) => {
    const yearMatches = selectedYear === 'all' || String(new Date(project.created_at).getFullYear()) === selectedYear
    const categoryMatches = selectedCategory === 'all'
      || project.category?.trim().toLowerCase() === selectedCategory.toLowerCase()
    return yearMatches && categoryMatches
  })

  return (
    <>
    <section className="projects-page">
      <div className="projects-monitor">
        <div className="projects-screen">
          <div className="projects-toolbar" role="group" aria-label="Desktop status">
            <span className="projects-window-dots" aria-hidden="true"><i /><i /><i /></span>
            <span className="projects-toolbar-label">{t('list.directory')}</span>
            <span className="projects-toolbar-status"><i /> ONLINE</span>
          </div>

          <header className="projects-heading project-list-heading">
            <Link className="project-list-back" to="/#project">← {t('list.back')}</Link>
            <p className="projects-eyebrow">{t('list.kicker')}</p>
            <h1>{t('list.title')}</h1>
            <p className="projects-intro">{t('list.description')}</p>
          </header>

          <div className="project-list-controls" aria-label="Filter projects">
            <label className="project-list-filter">
              <span>{t('list.year')}</span>
              <select value={selectedYear} onChange={(event) => setSelectedYear(event.target.value)}>
                <option value="all">{t('list.allYears')}</option>
                {years.map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
            </label>
            <label className="project-list-filter">
              <span>{t('list.category')}</span>
              <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
                <option value="all">{t('list.allCategories')}</option>
                {projectCategories.map((category) => <option key={category} value={category}>{translateCategory(category)}</option>)}
              </select>
            </label>
            <p className="project-list-count" aria-live="polite">
              {filteredProjects.length} {filteredProjects.length === 1 ? t('list.project') : t('list.projects')}
            </p>
          </div>

          {loading ? (
            <p className="projects-message" role="status">{t('projects.loading')}</p>
          ) : error ? (
            <p className="projects-message projects-message-error" role="alert">{t(error)}</p>
          ) : filteredProjects.length === 0 ? (
            <p className="projects-message">{t('list.empty')}</p>
          ) : (
            <div className="projects-grid project-list-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
    {selectedProject && (
      <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    )}
    </>
  )
}
import type { Project } from '../types/project'
import { getProjectImageUrl } from '../services/projects'
import { useLanguage } from '../i18n/LanguageContext'
import { getLocalizedProjectContent } from '../lib/projectTranslations'

type ProjectCardProps = {
  project: Project
  onSelect: (project: Project) => void
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const { language, t, translateCategory } = useLanguage()
  const imageUrl = getProjectImageUrl(project.image_path)
  const content = getLocalizedProjectContent(project, language)

  return (
    <article
      className="project-folder"
      role="button"
      tabIndex={0}
      onClick={() => onSelect(project)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onSelect(project)
        }
      }}
      aria-label={`${t('projects.viewDetails')} ${content.title}`}
    >
      <div className="project-folder-tab" aria-hidden="true" />
      <div className="project-folder-preview">
        {imageUrl ? (
          <img className="project-folder-image" src={imageUrl} alt={content.title} loading="lazy" />
        ) : (
          <div className="project-folder-image project-folder-placeholder" aria-label="Gambar project belum tersedia">
            <span>NO PREVIEW</span>
          </div>
        )}
        {project.category && <span className="project-folder-category">{translateCategory(project.category)}</span>}
      </div>
      <div className="project-folder-body">
        <div className="project-folder-details">
          <h2 title={content.title}>
            {content.title}
          </h2>
        </div>
      </div>
    </article>
  )
}
import { useEffect, useRef } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { getProjectImageUrl } from '../services/projects'
import type { Project } from '../types/project'
import { useLanguage } from '../i18n/LanguageContext'
import { getLocalizedProjectContent } from '../lib/projectTranslations'

type ProjectDetailsModalProps = {
  project: Project
  onClose: () => void
}

const valueOrNA = (value: string | null | undefined, fallback: string) => value?.trim() || fallback

export default function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  const { language, t, translateCategory } = useLanguage()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const imageUrl = getProjectImageUrl(project.image_path)
  const content = getLocalizedProjectContent(project, language)
  const slug = project.slug?.trim().replace(/^\/+|\/+$/g, '')
  const slugLabel = slug
    ?.split(/[-_]+/)
    .filter(Boolean)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(' ')
  const projectHref = project.url?.trim() || null
  const projectDate = project.created_at ? new Date(project.created_at) : null
  const createdAt = projectDate && Number.isFinite(projectDate.getTime())
    ? projectDate.toLocaleString(language, { dateStyle: 'long', timeStyle: 'short' })
    : t('common.na')

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    dialog.showModal()
    dialog.querySelector<HTMLButtonElement>('.project-detail-close')?.focus()

    return () => {
      if (dialog.open) dialog.close()
    }
  }, [])

  const closeOnBackdrop = (event: React.MouseEvent<HTMLDialogElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const outsideDialog = event.clientX < bounds.left
      || event.clientX > bounds.right
      || event.clientY < bounds.top
      || event.clientY > bounds.bottom

    if (outsideDialog) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className="project-detail-dialog"
      aria-labelledby="project-detail-title"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={closeOnBackdrop}
    >
      <div className="project-detail-shell">
        <div className="project-detail-cover">
          {imageUrl ? (
            <img className="project-detail-image" src={imageUrl} alt={`Preview ${valueOrNA(content.title, t('common.na'))}`} />
          ) : (
            <div className="project-detail-image project-detail-image-empty">N/A</div>
          )}
          <button className="project-detail-close" type="button" onClick={onClose} aria-label={t('modal.close')}>
            <FaXmark aria-hidden="true" />
          </button>
        </div>

        <header className="project-detail-header">
          <div>
            <p className="project-detail-eyebrow">{t('modal.case')}</p>
            <h2 id="project-detail-title">{valueOrNA(content.title, t('common.na'))}</h2>
          </div>
        </header>

        <dl className="project-detail-fields">
          <div className="project-detail-field">
            <dt>{t('modal.category')}</dt>
            <dd>{translateCategory(project.category)}</dd>
          </div>
          <div className="project-detail-field">
            <dt>{t('modal.created')}</dt>
            <dd>{createdAt}</dd>
          </div>
          <div className="project-detail-field project-detail-field-wide">
            <dt>{t('modal.description')}</dt>
            <dd>{valueOrNA(content.description, t('common.na'))}</dd>
          </div>
          <div className="project-detail-field">
            <dt>{t('modal.stack')}</dt>
            <dd>{project.stack?.length ? project.stack.join(', ') : t('common.na')}</dd>
          </div>
          <div className="project-detail-field">
            <dt>{t('modal.url')}</dt>
            <dd>
              {projectHref ? (
                <a href={projectHref} target="_blank" rel="noreferrer">{slugLabel || t('common.na')}</a>
              ) : t('common.na')}
            </dd>
          </div>
        </dl>
      </div>
    </dialog>
  )
}
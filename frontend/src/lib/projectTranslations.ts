import type { Language } from '../i18n/LanguageContext'
import type { Certificate } from '../types/certificate'
import type { Project } from '../types/project'

export function getLocalizedProjectContent(project: Project, language: Language) {
  const translation = project.translations?.[language]

  return {
    title: translation?.title?.trim() || project.title,
    description: translation?.description?.trim() || project.description,
  }
}

export function getLocalizedCertificateTitle(certificate: Certificate, language: Language) {
  return certificate.translations?.[language]?.title?.trim() || certificate.title
}
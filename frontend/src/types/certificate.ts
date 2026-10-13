import type { ProjectTranslations } from './project'

export type Certificate = {
  id: string
  title: string
  issuer: string
  image_path: string
  issued_at: string | null
  created_at: string
  translations?: ProjectTranslations | null
}

export type ProjectTranslation = {
  title?: string | null
  description?: string | null
}

export type ProjectTranslations = Partial<Record<'en' | 'zh-CN' | 'ja', ProjectTranslation>>

export type Project = {
  id: string
  title: string
  slug: string | null
  description: string
  image_path: string | null
  stack: string[]
  url: string | null
  created_at: string
  category: string | null
  translations?: ProjectTranslations | null
}
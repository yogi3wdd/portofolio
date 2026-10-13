import { supabase } from '../lib/supabaseClient'
import type { Project } from '../types/project'

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5)

  if (error) {
    throw error
  }

  return (data ?? []) as Project[]
}

export async function getAllProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw error
  }

  return (data ?? []) as Project[]
}

export function getProjectImageUrl(path: string | null): string | null {
  if (!path) return null

  return supabase.storage.from('projects').getPublicUrl(path).data.publicUrl
}
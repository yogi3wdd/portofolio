import { supabase } from '../lib/supabaseClient'
import type { Certificate } from '../types/certificate'

export async function getCertificates(): Promise<Certificate[]> {
  const { data, error } = await supabase
    .from('certificates')
    .select('*')
    .order('issued_at', { ascending: false, nullsFirst: false })

  if (error) {
    throw error
  }

  return (data ?? []) as Certificate[]
}

export function getCertificateImageUrl(path: string): string {
  return supabase.storage.from('certifications').getPublicUrl(path).data.publicUrl
}

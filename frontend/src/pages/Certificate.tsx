import { useEffect, useState } from 'react'
import { FaFolder } from 'react-icons/fa'
import { getCertificateImageUrl, getCertificates } from '../services/certificates'
import type { Certificate as CertificateItem } from '../types/certificate'
import { useLanguage } from '../i18n/LanguageContext'
import { getLocalizedCertificateTitle } from '../lib/projectTranslations'

const Certificate = () => {
  const { language, t } = useLanguage()
  const [certificates, setCertificates] = useState<CertificateItem[]>([])
  const [copies, setCopies] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getCertificates()
      .then(setCertificates)
      .catch((loadError: unknown) => {
        console.error('Failed to load certificates from Supabase:', loadError)
        setError('certificates.error')
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (certificates.length === 0) return

    const updateCopies = () => {
      const cardWidth = Math.min(window.innerWidth * 0.8, 420)
      setCopies(Math.max(1, Math.ceil(window.innerWidth / (certificates.length * (cardWidth + 24)))))
    }

    updateCopies()
    window.addEventListener('resize', updateCopies)
    return () => window.removeEventListener('resize', updateCopies)
  }, [certificates.length])

  const repeatedCertificates = Array.from({ length: copies }, () => certificates).flat()

  const renderCertificates = (isClone: boolean) => (
    <div
      className="certificate-group flex shrink-0 gap-6 pr-6"
      aria-hidden={isClone}
    >
      {repeatedCertificates.map((certificate, index) => {
        const title = getLocalizedCertificateTitle(certificate, language)

        return (
          <article
            key={`${isClone ? 'clone-' : ''}${certificate.id}-${index}`}
            className="w-[min(80vw,420px)] shrink-0 overflow-hidden rounded-2xl border border-white/35 bg-white/20"
          >
            <img
              src={getCertificateImageUrl(certificate.image_path)}
              alt={title}
              className="aspect-[16/10] w-full bg-[#111] object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="font-semibold">{title}</h3>
              {certificate.issuer && <p className="mt-1 text-sm text-gray-100">{certificate.issuer}</p>}
              {certificate.issued_at && (
                <p className="mt-1 text-xs text-gray-400">
                  {new Date(`${certificate.issued_at}T00:00:00`).toLocaleDateString(language, {
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              )}
            </div>
          </article>
        )
      })}
    </div>
  )

  return (
    <section className="certificate-section relative flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden border-t border-white/5 py-20 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-1/2 z-0 h-[min(75vh,34rem)] w-20 -translate-y-1/2 rounded-2xl bg-[#e9c46a] sm:w-28"
      />
      <div className="pointer-events-none absolute right-[-2rem] top-1/2 z-20 h-[min(75vh,34rem)] w-20 -translate-y-1/2 sm:w-28">
        <FaFolder
          aria-hidden="true"
          preserveAspectRatio="none"
          className="absolute left-1/2 top-1/2 h-20 w-[min(75vh,34rem)] -translate-x-1/2 -translate-y-1/2 rotate-[270deg] text-[#e9c46a] drop-shadow-[0_6px_8px_rgba(0,0,0,0.5)] sm:h-28"
        />
      </div>
      <h2 className="relative z-10 mb-10 text-center font-permanent-marker text-4xl font-bold">{t('certificates.title')}</h2>
      {loading ? (
        <p className="animate-pulse" role="status">{t('certificates.loading')}</p>
      ) : error ? (
          <p className="text-center text-red-400" role="alert">{t(error)}</p>
      ) : certificates.length === 0 ? (
        <p className="text-gray-400">{t('certificates.empty')}</p>
      ) : (
        <div className="certificate-viewport relative z-10 w-full">
          <div className="certificate-track flex w-max">
            {renderCertificates(false)}
            {renderCertificates(true)}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
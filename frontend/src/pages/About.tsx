import { motion } from 'framer-motion';
import fotoDiri from '../assets/picture/fotoDiri2.png';
import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <section className="about-section w-full min-h-screen text-white">
      <div className="about-dossier">
        <header className="about-heading">
          <p className="font-junge">{t('about.file')}</p>
          <h1 className="font-permanent-marker">{t('about.title')}</h1>
        </header>

        <div className="about-layout">
          <motion.figure
            className="about-polaroid"
            initial={{ opacity: 0, y: 24, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <span className="about-photo-pin" aria-hidden="true" />
            <img src={fotoDiri} alt="Portrait of Yogi Tri Widodo" />
            <figcaption>
              <strong className="font-junge">Yogi Tri Widodo</strong>
              <span>Cilacap, Indonesia</span>
            </figcaption>
          </motion.figure>

          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
          >
            <p className="about-kicker font-junge">{t('about.profile')}</p>
            <h2 className="font-permanent-marker">{t('about.greeting')}</h2>
            <p className="about-intro">{t('about.intro')}</p>
            <p className="about-detail">{t('about.detail')}</p>

            <div className="about-focus" aria-label={t('about.focus')}>
              <span>{t('category.web')}</span>
              <span>{t('category.electrical')}</span>
              <span>{t('category.design')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { FaWhatsapp } from 'react-icons/fa';
import { RiLineFill } from 'react-icons/ri';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

type SendStatus = {
  type: 'success' | 'error';
  message: string;
} | null;

const Contact = () => {
  const { t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<SendStatus>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    setIsSending(true);
    setSendStatus(null);

    try {
      await emailjs.sendForm(
        'service_x4nrtkf',
        'template_yji2qdb',
        form.current,
        '0gbw3C8B22vjRiEYF'
      );
      setSendStatus({
        type: 'success',
        message: t('contact.sentMessage'),
      });
      form.current.reset();
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setSendStatus({
        type: 'error',
        message: t('contact.failedMessage'),
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section pt-8 pb-0 px-[40px] flex justify-center items-end w-full">
      <div className="w-full relative">

        {/* LABEL TAB FOLDER */}
        <div className="bg-[#FEC98C] w-24 h-6 md:w-60 md:h-10 rounded-t-xl md:rounded-t-2xl ml-6 flex items-center justify-center">
          <span className="text-black font-bold font-poppins text-xs md:text-sm tracking-widest">{t('contact.tab')}</span>
        </div>

        {/* BODY FOLDER */}
        <div className="bg-[#FEC98C] rounded-t-2xl p-4 md:p-8 pb-0 md:pb-0 shadow-2xl relative z-10">
          <div className="bg-white rounded-t-xl p-8 md:p-12 flex flex-col md:flex-row gap-12">

            {/* SISI KIRI: TEXT & SOCIALS */}
            <div className="flex-1">
              <h2 className="text-[#2A2A2A] text-2xl md:text-5xl font-black mb-6 leading-tight font-kode-mono">
                {t('contact.title')}
              </h2>
              <p className="text-[#2A2A2A] text-xs md:text-sm leading-relaxed mb-16 max-w-[280px] font-kode-mono">
                {t('contact.description')}
              </p>

              <div className="flex gap-4">
                <a href="https://wa.me/6285725706432"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-gray-200 rounded-xl flex items-center justify-center text-2xl text-[#25D366] hover:border-[#25D366] transition-all">
                  <FaWhatsapp />
                </a>
                <a href="https://line.me/ti/p/yogi3wdd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-gray-200 rounded-xl flex items-center justify-center text-2xl text-[#00B900] hover:border-[#00B900] transition-all">
                  <RiLineFill />
                </a>
              </div>
            </div>

            {/* FORM */}
            <form ref={form} onSubmit={sendEmail} className="flex-[1.5] flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{t('contact.name')}</label>
                <input name="from_name" type="text" required className="bg-gray-100 rounded-lg p-3 outline-none text-black focus:ring-1 focus:ring-[#FFC888]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{t('contact.email')}</label>
                <input name="from_email" type="email" required className="bg-gray-100 rounded-lg p-3 outline-none text-black focus:ring-1 focus:ring-[#FFC888]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{t('contact.message')}</label>
                <textarea name="message" rows={3} required className="bg-gray-100 rounded-lg p-3 outline-none text-black resize-none focus:ring-1 focus:ring-[#FFC888]"></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="bg-black text-white font-bold py-3 rounded-lg mt-2 hover:bg-zinc-800 transition-all disabled:bg-gray-400"
              >
                {isSending ? t('contact.sending') : t('contact.send')}
              </button>
            </form>

          </div>
        </div>
      </div>
      <AnimatePresence>
        {sendStatus && (
          <motion.aside
            key={sendStatus.type}
            initial={{ opacity: 0, x: 24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 24, scale: 0.96 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            role={sendStatus.type === 'error' ? 'alert' : 'status'}
            aria-live={sendStatus.type === 'error' ? 'assertive' : 'polite'}
            className={`fixed right-5 top-5 z-[100] flex w-[min(24rem,calc(100vw-2.5rem))] items-start gap-4 rounded-xl border-2 p-5 text-white shadow-2xl backdrop-blur-md ${
              sendStatus.type === 'success'
                ? 'border-emerald-300 bg-emerald-700/40'
                : 'border-rose-300 bg-rose-700/40'
            }`}
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg font-bold text-white"
            >
              {sendStatus.type === 'success' ? '✓' : '!'}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-poppins text-sm font-bold">
                {sendStatus.type === 'success' ? t('contact.sentTitle') : t('contact.failedTitle')}
              </p>
              <p className="mt-1 text-sm leading-relaxed">{sendStatus.message}</p>
            </div>
            <button
              type="button"
              onClick={() => setSendStatus(null)}
              aria-label={t('contact.closeNotice')}
              className="-mr-1 -mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl text-white transition-colors hover:bg-white/15"
            >
              ×
            </button>
          </motion.aside>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
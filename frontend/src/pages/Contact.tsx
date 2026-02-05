import { FaWhatsapp } from 'react-icons/fa';
import { RiLineFill } from 'react-icons/ri';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    setIsSending(true);

    emailjs.sendForm(
      'service_x4nrtkf',   // Ambil dari Service ID di EmailJS
      'template_yji2qdb',  // Ambil dari Template ID di EmailJS
      form.current,
      '0gbw3C8B22vjRiEYF'    // Ambil dari Public Key di Account Settings
    )
      .then(() => {
        alert("Pesan berhasil dikirim ke Yogi! 🚀");
        form.current?.reset();
      })
      .catch((error) => {
        alert("Waduh, gagal kirim. Coba lagi ya!");
        console.error(error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="bg-[#2A2A2A] pt-8 pb-0 px-[40px] flex justify-center items-end w-full">
      <div className="w-full relative">

        {/* LABEL TAB FOLDER */}
        <div className="bg-[#FEC98C] w-60 h-10 rounded-t-2xl ml-6 flex items-center justify-center">
          <span className="text-black font-bold font-poppins text-sm tracking-widest">CONTACT</span>
        </div>

        {/* BODY FOLDER */}
        <div className="bg-[#FEC98C] rounded-t-2xl p-8 pb-0 shadow-2xl relative z-10">
          <div className="bg-white rounded-t-xl p-8 md:p-12 flex flex-col md:flex-row gap-12">

            {/* SISI KIRI: TEXT & SOCIALS */}
            <div className="flex-1">
              <h2 className="text-[#2A2A2A] text-5xl font-black mb-6 leading-tight font-kode-mono">
                GET IN <br /> TOUCH
              </h2>
              <p className="text-[#2A2A2A] text-sm leading-relaxed mb-16 max-w-[280px] font-kode-mono">
                Have questions or want to collaborate? Send us your message via the email form or by clicking on one of the apps below.
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
                <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Name</label>
                <input name="from_name" type="text" required className="bg-gray-100 rounded-lg p-3 outline-none text-black focus:ring-1 focus:ring-[#FFC888]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Email</label>
                <input name="from_email" type="email" required className="bg-gray-100 rounded-lg p-3 outline-none text-black focus:ring-1 focus:ring-[#FFC888]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Message</label>
                <textarea name="message" rows={3} required className="bg-gray-100 rounded-lg p-3 outline-none text-black resize-none focus:ring-1 focus:ring-[#FFC888]"></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="bg-black text-white font-bold py-3 rounded-lg mt-2 hover:bg-zinc-800 transition-all disabled:bg-gray-400"
              >
                {isSending ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen w-full bg-[#1a1a1a] flex flex-col items-center justify-center p-10 text-white">
      {/* Animasi Judul */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-6 font-sans tracking-tight"
      >
        ABOUT ME
      </motion.h1>

      {/* Konten Sederhana */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-2xl text-center border border-white/20 p-8 rounded-3xl bg-white/5 backdrop-blur-md"
      >
        <p className="text-lg leading-relaxed text-gray-300">
          Halo! Saya <span className="text-white font-bold">Yogi Tri Widodo</span>. 
          Saya adalah seorang pengembang yang bersemangat dalam membangun solusi kreatif 
          melalui Mobile Development, Web Development, UI/UX Design, dan IoT.
        </p>
        
        <div className="mt-8 grid grid-cols-2 gap-4 text-sm font-mono text-gray-400">
          <div className="border border-white/10 p-3 rounded-xl">📍 Karanganyar, Indonesia</div>
          <div className="border border-white/10 p-3 rounded-xl">🎓 Student / Developer</div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
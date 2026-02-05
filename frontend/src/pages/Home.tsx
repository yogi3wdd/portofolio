import { motion } from 'framer-motion'; // Import motion
import bgImage from '../assets/picture/background.png';
import fotoDiri from '../assets/picture/fotoDiri.png';

const Home = () => {
    return (
        <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            {/* Judul */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-22 md:top-24 text-white text-2xl md:text-6xl z-10 font-permanent-marker text-center w-full tracking-widest"
            >
                WHO AM I?
            </motion.h1>

            {/* Garis Merah */}
            <svg className="absolute inset-0 w-full h-full z-40 pointer-events-none">
                {/* Desktop Lines */}
                <g className="hidden md:block">
                    <AnimatedLine x1="16%" y1="28%" x2="54%" y2="62%" delay={1.5} />
                    <AnimatedLine x1="82%" y1="23%" x2="54%" y2="62%" delay={1.7} />
                    <AnimatedLine x1="23%" y1="72%" x2="54%" y2="62%" delay={1.9} />
                    <AnimatedLine x1="75%" y1="76%" x2="54%" y2="62%" delay={2.1} />
                </g>
                {/* Mobile Lines */}
                <g className="block md:hidden">
                    <AnimatedLine x1="18%" y1="26%" x2="56%" y2="57%" delay={1.5} />
                    <AnimatedLine x1="80%" y1="22%" x2="56%" y2="57%" delay={1.7} />
                    <AnimatedLine x1="18%" y1="75%" x2="56%" y2="57%" delay={1.9} />
                    <AnimatedLine x1="82%" y1="76%" x2="56%" y2="57%" delay={2.1} />
                </g>
            </svg>

            {/* Foto Diri dan Nama */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: -1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="relative z-20 transform scale-75 md:scale-110 translate-y-10 md:translate-y-16"
            >
                {/* Efek Cahaya */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] rounded-full z-[-1]" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 60%)', filter: 'blur(120px)' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] rounded-full z-[-2]" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 80%)', filter: 'blur(240px)' }}></div>

                {/* Polaroid Foto */}
                <div className="bg-white p-2 md:p-2 pb-3 rounded-2xl relative shadow-2xl">
                    <div className="w-40 h-52 md:w-50 md:h-66 bg-[#f3d3a3] overflow-hidden border-2 md:border-4 border-white rounded-xl">
                        <img src={fotoDiri} alt="Yogi" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-black text-center mt-2 md:mt-4 text-l md:text-xl font-junge uppercase">
                        YOGI TRI WIDODO
                    </p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 1.5,
                            ease: "backOut"
                        }}
                        className="absolute top-[52%] right-[16%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 pin-red-solid rounded-full z-30"
                    ></motion.div>
                </div>
            </motion.div>

            <StickyNote text="Mobile Developer" pos="top-[25%] left-[5%] md:left-[10%]" rot="rotate-[10deg]" delay={1.2} />
            <StickyNote text="Web Developer" pos="top-[20%] right-[5%] md:right-[12%]" rot="-rotate-[13deg]" delay={1.4} />
            <StickyNote text="UI/UX Designer" pos="bottom-[15%] left-[5%] md:left-[18%]" rot="-rotate-3" delay={1.6} />
            <StickyNote text="IoT Developer" pos="bottom-[12%] right-[5%] md:right-[20%]" rot="rotate-0" delay={1.8} />
        </div>
    );
};

const AnimatedLine = ({ x1, y1, x2, y2, delay }: any) => (
    <motion.line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="red" strokeWidth="3" strokeOpacity="0.8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: delay, ease: "easeInOut" }}
    />
);

const StickyNote = ({ text, pos, rot, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        className={`absolute ${pos} ${rot} z-20`}
    >
        <div className="bg-white p-2 md:p-4 pt-8 md:pt-10 pb-3 md:pb-4 w-24 md:w-36 flex flex-col items-center relative shadow-lg">
            <div className="absolute top-1 md:top-2 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 pin-red-solid rounded-full"></div>
            <span className="text-black font-kode-mono text-[12px] md:text-sm font-bold uppercase text-center leading-tight break-words max-w-[80%] block">
                {text}
            </span>
        </div>
    </motion.div>
);

export default Home;
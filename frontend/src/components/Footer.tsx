import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaPinterestP,
    FaGithub
} from 'react-icons/fa6';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialIcons = [
        { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/yogi-tri-widodo", label: "LinkedIn" },
        { icon: <FaFacebookF />, link: "https://facebook.com/yogitri.widodo.7", label: "Facebook" },
        { icon: <FaInstagram />, link: "https://instagram.com/yogi3wdd", label: "Instagram" },
        { icon: <FaPinterestP />, link: "https://pinterest.com/yogi3wdd", label: "Pinterest" },
        { icon: <FaGithub />, link: "https://github.com/yogi3wdd", label: "GitHub" },
    ];

    return (
        <footer className="bg-black text-white py-12 px-10 font-poppins">
            <div className="w-full">

                {/* LOGO / NAMA */}
                <h2 className="text-4xl font-poppins font-bold tracking-tighter mb-8 uppercase">
                    YOGI TRI WIDODO
                </h2>

                {/* SOSIAL MEDIA ICONS (LINGKARAN PUTIH TIPIS) */}
                <div className="flex flex-wrap gap-4 mb-10">
                    {socialIcons.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.label}
                            className="w-10 h-10 border border-white/50 rounded-full flex items-center justify-center text-lg hover:bg-white hover:text-black transition-all duration-300"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>

                {/* GARIS PEMISAH */}
                <hr className="border-white/10 mb-8" />

                {/* COPYRIGHT & TAHUN */}
                <p className="text-[10px] text-gray-400 tracking-widest uppercase">
                    © {currentYear} Yogi Tri Widodo. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
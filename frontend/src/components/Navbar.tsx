import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const pathLogo = "/my_logo.png";
    const [activeTab, setActiveTab] = useState('Home');
    const menuItems = ['Home', 'About', 'Skill', 'Project', 'Certificate'];

    useEffect(() => {
        const handleScrollUpdate = (e: any) => {
            const sectionId = e.detail;
            setActiveTab(sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
        };

        window.addEventListener('sectionChange', handleScrollUpdate);
        return () => window.removeEventListener('sectionChange', handleScrollUpdate);
    }, []);

    return (
        <nav className="fixed top-4 left-0 w-full flex items-center justify-between px-10 z-[100]">

            {/* LOGO & NAMA */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center overflow-hidden bg-black/20">
                    <img
                        src={pathLogo}
                        alt="Logo"
                        className="w-7 h-7 object-contain"
                    />
                </div>
                <span className="text-white text-3xl tracking-[0.2em] font-poppins">
                    YOGI
                </span>
            </div>

            {/* NAV CAPSULE */}
            <div className="border border-white/100 !rounded-full p-[3px]">
                <ul className="flex items-center gap-8 relative">
                    {menuItems.map((item) => (
                        <li key={item} className="relative">
                            <a
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setActiveTab(item)}
                                className={`relative z-10 px-4 py-2 text-sm font-poppins transition-colors duration-300 block ${activeTab === item ? 'text-[#2A2A2A]' : 'text-white hover:text-gray-300'
                                    }`}
                            >
                                {item}
                            </a>

                            {activeTab === item && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-[#D9D9D9] !rounded-full z-0"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* CONTACT */}
            <div className="border border-white/100 rounded-full p-[3px]">
                <button className="bg-[#D9D9D9] hover:bg-white text-[#2A2A2A] px-8 py-2 rounded-full text-sm transition-all">
                    Contact
                </button>
            </div>

        </nav>
    );
};

export default Navbar;
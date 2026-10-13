import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const Navbar = () => {
    const { pathname } = useLocation();
    const { language, setLanguage, t } = useLanguage();
    const pathLogo = "/my_logo.png";
    const [activeTab, setActiveTab] = useState('home');
    const menuItems = [
        { id: 'home', label: 'nav.home' },
        { id: 'about', label: 'nav.about' },
        { id: 'skill', label: 'nav.skills' },
        { id: 'project', label: 'nav.projects' },
        { id: 'certificate', label: 'nav.certificates' },
    ];

    useEffect(() => {
        const handleScrollUpdate = (e: any) => {
            const sectionId = e.detail;
            setActiveTab(sectionId);
        };

        window.addEventListener('sectionChange', handleScrollUpdate);
        return () => window.removeEventListener('sectionChange', handleScrollUpdate);
    }, []);

    return (
        <nav className="site-navbar fixed top-4 left-0 w-full flex items-center justify-between gap-3 px-10 z-[100]">

            {/* LOGO & NAMA */}
            <div className="site-brand flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center overflow-hidden bg-black/20">
                    <img
                        src={pathLogo}
                        alt="Logo"
                        className="w-7 h-7 object-contain"
                    />
                </div>
                <span className="site-brand-name text-white text-2xl xl:text-3xl tracking-[0.2em] font-poppins">
                    YOGI
                </span>
            </div>

            {/* NAV CAPSULE */}
            <div className="site-nav-capsule border border-white/100 !rounded-full p-[3px]">
                <ul className="site-nav-list flex items-center gap-1 xl:gap-8 relative">
                    {menuItems.map((item) => (
                        <li key={item.id} className="relative">
                            <Link
                                to={pathname === '/' ? `#${item.id}` : `/#${item.id}`}
                                onClick={() => setActiveTab(item.id)}
                                className={`site-nav-link relative z-10 px-2 xl:px-4 py-2 text-xs xl:text-sm font-poppins transition-colors duration-300 block ${activeTab === item.id ? 'text-[#2A1A10]' : 'text-white hover:text-gray-300'
                                    }`}
                            >
                                {t(item.label)}
                            </Link>

                            {activeTab === item.id && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-[#C8753D] !rounded-full z-0"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <label className="language-picker">
                <span className="sr-only">{t('language.label')}</span>
                <select
                    value={language}
                    onChange={(event) => setLanguage(event.target.value as typeof language)}
                    aria-label={t('language.label')}
                >
                    <option value="en">English</option>
                    <option value="zh-CN">中文</option>
                    <option value="ja">日本語</option>
                </select>
            </label>

            {/* CONTACT */}
            <div className="site-nav-contact border border-white/40 rounded-full p-[2px]">
                <div className="border border-white/40 rounded-full">
                    <Link
                        to={pathname === '/' ? '#contact' : '/#contact'}
                        onClick={() => setActiveTab('')}
                        className="bg-gray-300 hover:bg-white text-[#2A2A2A] px-3 xl:px-6 py-2 rounded-full text-xs xl:text-sm font-bold transition-all block text-center font-poppins"
                    >
                        {t('nav.contact')}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
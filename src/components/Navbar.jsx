import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { i18n, t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show navbar at the very top (0-10px)
            if (currentScrollY < 10) {
                setIsVisible(true);
                setScrolled(false);
            }
            // Hide when scrolling down, show when scrolling up
            else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
                setScrolled(true);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
                setScrolled(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const changeLanguage = (lang) => {
        console.log('Changing language to:', lang); // Debug log
        i18n.changeLanguage(lang);
        setIsOpen(false);
    };

    // Handle touch events for mobile devices
    const handleLanguageChange = (lang) => (e) => {
        e.preventDefault();
        e.stopPropagation();
        changeLanguage(lang);
    };

    const navLinks = [
        { name: "home", href: "#home" },
        { name: "history", href: "#history" },
        { name: "unique-features", href: "#unique-features" },
        { name: "ritual-services", href: "#ritual-services" },
        { name: "daily-festivals", href: "#daily-festivals" },
        { name: "timings", href: "#timings" },
        { name: "gallery", href: "#gallery" },
        { name: "contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                } ${scrolled
                    ? "bg-gradient-to-r from-maroon-dark via-maroon to-maroon-dark backdrop-blur-xl shadow-2xl py-2 border-b-2 border-gold/40"
                    : "bg-gradient-to-b from-black/90 via-maroon-dark/50 to-transparent py-4"
                }`}
            style={{
                borderBottom: scrolled ? "2px solid rgba(212, 175, 55, 0.4)" : "none",
            }}
        >
            {/* Decorative Top Border - Sacred Pattern */}
            {scrolled && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60 animate-pulse"></div>
            )}

            {/* Sacred Dots Pattern */}
            {scrolled && (
                <div className="absolute top-0 left-0 right-0 flex justify-center gap-2 py-1">
                    <div className="w-1 h-1 rounded-full bg-gold/60 animate-pulse"></div>
                    <div className="w-1 h-1 rounded-full bg-gold/60 animate-pulse delay-75"></div>
                    <div className="w-1 h-1 rounded-full bg-gold/60 animate-pulse delay-150"></div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex justify-between items-center">
                {/* LOGO / BRAND - Enhanced with better padding and devotional styling */}
                <a
                    href="#home"
                    className="group relative flex items-center gap-3 pl-2 sm:pl-4 md:pl-6 mr-4 md:mr-6 lg:mr-8 flex-shrink-0"
                    style={{ minWidth: '60px' }}
                >
                    {/* Decorative Ring around Logo */}
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>

                    {/* Logo with Sacred Glow */}
                    <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 rounded-full bg-gold/30 blur-xl group-hover:bg-gold/50 transition-all duration-500"></div>
                        <img
                            src="https://res.cloudinary.com/dfyufd3gl/image/upload/v1764845213/cropped_circle_image_1_l8siml.png"
                            alt="Temple Logo"
                            className="relative h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 rounded-full border-2 border-gold/30 group-hover:border-gold/60 p-0.5"
                            style={{ minWidth: '56px', minHeight: '56px' }}
                        />
                        {/* Sacred Aura Effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-gold/20 animate-ping opacity-0 group-hover:opacity-100"></div>
                    </div>
                </a>

                {/* DESKTOP NAV - Enhanced with devotional styling */}
                <div className="hidden md:flex items-center gap-2 lg:gap-4 flex-1 min-w-0">
                    <div className="flex gap-2 lg:gap-4 font-medium tracking-wide text-sm uppercase overflow-x-auto scrollbar-hide" style={{ maxWidth: 'calc(100% - 180px)' }}>
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`relative group py-2 px-1 transition-all duration-300 whitespace-nowrap ${scrolled
                                    ? "text-gold-light hover:text-white"
                                    : "text-white/90 hover:text-gold"
                                    }`}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {/* Sacred Underline */}
                                <span className="relative z-10 font-sans font-semibold text-xs tracking-wider">
                                    {t(link.name)}
                                </span>

                                {/* Animated Bottom Border - Traditional Pattern */}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold via-gold-light to-gold transition-all duration-500 group-hover:w-full shadow-lg shadow-gold/50"></span>

                                {/* Hover Glow Effect */}
                                <span className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded blur-sm"></span>
                            </a>
                        ))}
                    </div>

                    {/* LANGUAGE SWITCHER - Enhanced devotional design */}
                    <div
                        className={`flex gap-1 rounded-full p-1 border-2 transition-all duration-500 backdrop-blur-md flex-shrink-0 ml-auto ${scrolled
                            ? "bg-maroon-dark/60 border-gold/40 shadow-lg shadow-gold/20"
                            : "bg-white/10 border-white/30 shadow-xl"
                            }`}
                        style={{ minWidth: '160px' }}
                    >
                        {["en", "te", "hi"].map((lang) => (
                            <button
                                key={lang}
                                onClick={handleLanguageChange(lang)}
                                onTouchEnd={handleLanguageChange(lang)}
                                type="button"
                                role="button"
                                aria-label={`Switch to ${lang.toUpperCase()} language`}
                                style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer select-none ${i18n.language === lang
                                    ? "bg-gradient-to-r from-gold via-gold-light to-gold text-maroon-dark shadow-xl shadow-gold/40 transform scale-110 border border-gold-dark"
                                    : "text-white/70 hover:text-white hover:bg-white/20 hover:scale-105 active:bg-white/30"
                                    }`}
                            >
                                {lang.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                {/* MOBILE MENU BUTTON - Enhanced */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gold p-2 focus:outline-none hover:text-white transition-all duration-300 hover:scale-110 relative group"
                >
                    <div className="absolute inset-0 bg-gold/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
                    <svg
                        className="w-8 h-8 drop-shadow-lg relative z-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Decorative Bottom Border Pattern */}
            {scrolled && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/60 to-transparent"></div>
            )}

            {/* MOBILE MENU - Enhanced devotional design */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-maroon-dark via-maroon to-maroon-dark backdrop-blur-2xl border-b-2 border-gold/40 shadow-2xl transition-all duration-700 overflow-hidden ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                {/* Sacred Top Border */}
                <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

                <div className="flex flex-col p-8 space-y-6 items-center relative">
                    {/* Decorative Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-4 left-4 w-16 h-16 border-2 border-gold rounded-full"></div>
                        <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-gold rounded-full"></div>
                    </div>

                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="relative text-gold-light text-xl font-serif tracking-wider hover:text-white transition-all duration-300 hover:scale-110 group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <span className="relative z-10">{t(link.name)}</span>
                            <span className="absolute -inset-2 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg blur-sm"></span>
                        </a>
                    ))}

                    {/* Language Switcher for Mobile */}
                    <div className="flex gap-4 pt-6 border-t border-gold/20 w-full justify-center">
                        {["en", "te", "hi"].map((lang) => (
                            <button
                                key={lang}
                                onClick={handleLanguageChange(lang)}
                                onTouchEnd={handleLanguageChange(lang)}
                                type="button"
                                role="button"
                                aria-label={`Switch to ${lang.toUpperCase()} language`}
                                style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent', minWidth: '60px', minHeight: '44px' }}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold border-2 transition-all duration-300 cursor-pointer select-none ${i18n.language === lang
                                    ? "bg-gradient-to-r from-gold via-gold-light to-gold text-maroon-dark shadow-xl shadow-gold/40 border-gold-dark scale-110"
                                    : "text-gold border-gold/40 hover:bg-white/10 hover:scale-105 active:bg-white/20"
                                    }`}
                            >
                                {lang.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sacred Bottom Border */}
                <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            </div>
        </nav>
    );
}

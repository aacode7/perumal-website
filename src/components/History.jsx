import React from "react";
import { useTranslation } from "react-i18next";

export default function History() {
    const { t } = useTranslation();

    return (
        <section id="history" className="relative py-32 px-6 overflow-hidden">
            {/* Parallax Background */}
            <div className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
                style={{ backgroundImage: "url('https://res.cloudinary.com/dfyufd3gl/image/upload/v1764821631/WhatsApp_Image_2025-12-04_at_09.34.02_2eeb20a1_xqx5p5.jpg')" }}>
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10 animate-on-scroll">
                <h2 className="text-5xl md:text-6xl font-bold mb-16 font-serif tracking-tight">
                    <span className="drop-shadow-lg" style={{ color: '#d4af37', WebkitTextFillColor: '#d4af37' }}>
                        {t("History")}
                    </span>
                </h2>

                <div className="glass-panel p-8 md:p-12 rounded-3xl relative transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Corner Ornaments */}
                    <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-gold/60 rounded-tl-3xl"></div>
                    <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-gold/60 rounded-tr-3xl"></div>
                    <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-gold/60 rounded-bl-3xl"></div>
                    <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-gold/60 rounded-br-3xl"></div>

                    <p className="text-base md:text-xl leading-relaxed text-white/90 font-serif text-left drop-shadow-md" style={{ whiteSpace: 'pre-line' }}>
                        {t("history_text")}
                    </p>

                    <div className="mt-10 flex justify-center">
                        <div className="h-1 w-32 bg-gradient-gold rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

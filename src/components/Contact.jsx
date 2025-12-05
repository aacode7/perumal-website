import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section id="contact" className="relative py-12 px-6 bg-maroon-dark overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)", backgroundSize: "30px 30px" }}>
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10 animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-serif">
                    <span style={{ color: '#d4af37', WebkitTextFillColor: '#d4af37' }}>
                        {t("Contact")}
                    </span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center items-center group hover:bg-white/5 transition-all duration-300 border-gold/30">
                        <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <span className="text-3xl">📍</span>
                        </div>
                        <h3 className="text-xl font-bold text-gold mb-3 font-serif">{t("Address")}</h3>
                        <p className="text-sm text-white/90 leading-relaxed font-medium font-sans mb-4">
                            {t("address_line1")}  <br />
                            {t("address_line2")}  <br />
                            {t("address_line3")}
                        </p>
                        <a
                            href="https://www.google.com/maps?q=Koneru+Perumal+Temple+Secunderabad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 px-6 py-2 bg-gradient-gold text-maroon-dark rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all uppercase tracking-wide"
                        >
                            {t("Open Map")}
                        </a>
                    </div>

                    <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center items-center group hover:bg-white/5 transition-all duration-300 border-gold/30">
                        <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <span className="text-3xl">📞</span>
                        </div>
                        <h3 className="text-xl font-bold text-gold mb-3 font-serif">{t("Phone")}</h3>
                        <p className="text-sm text-white/90 mb-4 font-medium font-sans">
                            {t("For pooja bookings and enquiries")}
                        </p>
                        <a
                            href="tel:27703245"
                            className="text-2xl font-bold text-white hover:text-gold transition-colors font-serif"
                        >
                            27703245
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from "react";
import { useTranslation } from "react-i18next";

export default function UniqueFeatures() {
    const { t } = useTranslation();

    return (
        <section id="unique-features" className="relative py-24 px-6 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: "radial-gradient(#d4af37 2px, transparent 2px)", backgroundSize: "40px 40px" }}>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 font-serif tracking-tight">
                    <span style={{ color: '#d4af37', WebkitTextFillColor: '#d4af37' }}>
                        {t("Specialty of the temple")}
                    </span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Feature Description */}
                    <div className="glass-panel bg-sandal/20 p-8 md:p-12 rounded-3xl border border-gold/20 shadow-xl">
                        <div className="mb-8">
                            <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0">
                                <span className="text-4xl">🕉️</span>
                            </div>
                            <h3 className="text-3xl font-bold mb-6 font-serif" style={{ color: '#d4af37' }}>
                                {t("unique_title")}
                            </h3>
                        </div>

                        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6 font-sans" style={{ whiteSpace: 'pre-line' }}>
                            {t("unique_feature_text")}
                        </p>

                        <div className="mt-8 pt-8 border-t border-gold/30">
                            <h4 className="text-xl font-bold mb-4 font-serif" style={{ color: '#b7950b' }}>
                                {t("unique_ritual_title")}
                            </h4>
                            <p className="text-base leading-relaxed text-gray-700 font-sans" style={{ whiteSpace: 'pre-line' }}>
                                {t("unique_ritual_text")}
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Benefits Card */}
                    <div className="space-y-6">
                        <div className="bg-maroon-dark p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300">
                            <h4 className="text-2xl font-bold mb-6 text-center font-serif" style={{ color: '#d4af37' }}>
                                {t("unique_benefits_title")}
                            </h4>
                            <div className="space-y-4">
                                {[
                                    { icon: "🏥", text: t("benefit_health") },
                                    { icon: "📚", text: t("benefit_education") },
                                    { icon: "💑", text: t("benefit_marriage") },
                                    { icon: "🏡", text: t("benefit_land") }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                                        <span className="text-3xl">{item.icon}</span>
                                        <span className="text-white/90 font-medium text-lg">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ritual Day Card */}
                        <div className="bg-gradient-gold p-6 rounded-3xl shadow-xl text-center">
                            <div className="text-4xl mb-3">📅</div>
                            <h5 className="text-xl font-bold text-maroon-dark mb-2 font-serif">
                                {t("ritual_day")}
                            </h5>
                            <p className="text-maroon font-semibold text-lg">
                                {t("ritual_day_name")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

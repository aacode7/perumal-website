import React from "react";
import { useTranslation } from "react-i18next";

export default function Timings() {
    const { t } = useTranslation();

    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    return (
        <section id="timings" className="py-24 px-6 bg-white relative">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16 font-serif" style={{ color: '#d4af37', WebkitTextFillColor: '#d4af37' }}>
                    <span className="relative inline-block">
                        {t("Timings")}
                        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-2xl" style={{ color: '#d4af37' }}></span>
                    </span>
                </h2>
                <div className="bg-sandal/20 p-8 md:p-12 rounded-3xl shadow-xl border border-gold/10">
                    <ul className="space-y-6">
                        {days.map((day) => (
                            <li
                                key={day}
                                className="flex flex-col md:flex-row justify-between items-center border-b border-maroon/5 pb-4 last:border-0 hover:bg-white/60 p-4 rounded-xl transition-all duration-300 group"
                            >
                                <span className="font-bold text-maroon text-xl font-serif group-hover:translate-x-2 transition-transform">
                                    {t(day)}
                                </span>
                                <span className="font-medium text-lg tracking-wide mt-2 md:mt-0">
                                    <span className="font-bold" style={{ color: '#d4af37', WebkitTextFillColor: '#d4af37', opacity: 1 }}>6 AM – 11 AM</span>
                                    <span className="mx-3" style={{ color: 'rgba(106, 0, 0, 0.3)' }}>|</span>
                                    <span className="font-bold" style={{ color: '#d4af37', WebkitTextFillColor: '#d4af37', opacity: 1 }}>5 PM – 8 PM</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}


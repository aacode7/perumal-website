import React from "react";
import { useTranslation } from "react-i18next";

export default function DailyFestivals() {
    const { t } = useTranslation();

    const schedule = [
        { time: t("time_5_30_am"), event: t("event_suprabhatam") },
        { time: t("time_7_00_am"), event: t("event_homam_tiruvaradhana") },
        { time: t("time_7_45_am"), event: t("event_sattumurai") },
        { time: t("time_8_30_am"), event: t("event_tirucchi_seva") },
        { time: t("time_10_00_am"), event: t("event_tirumanjanam") },
        { time: t("time_4_00_pm"), event: t("event_homam_nityaradhana") },
        { time: t("time_7_00_pm"), event: t("event_vahana_seva") },
        { time: t("time_9_00_pm"), event: t("event_alwars_seva") }
    ];

    return (
        <section id="daily-festivals" className="relative py-24 px-6 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: "linear-gradient(45deg, #d4af37 25%, transparent 25%, transparent 75%, #d4af37 75%, #d4af37), linear-gradient(45deg, #d4af37 25%, transparent 25%, transparent 75%, #d4af37 75%, #d4af37)", backgroundSize: "20px 20px", backgroundPosition: "0 0, 10px 10px" }}>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif tracking-tight" style={{ color: '#d4af37', WebkitTextFillColor: '#d4af37' }}>
                    {t("daily_festivals_title")}
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Timeline */}
                    <div className="relative border-l-4 border-gold/30 ml-4 md:ml-0 space-y-8 pl-8 md:pl-12">
                        {schedule.map((item, index) => (
                            <div key={index} className="relative group">
                                {/* Dot */}
                                <div className="absolute -left-[42px] md:-left-[58px] top-2 w-6 h-6 rounded-full bg-gold border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>

                                <div className="bg-sandal/10 p-6 rounded-2xl border border-gold/10 hover:bg-sandal/20 transition-colors shadow-sm hover:shadow-md">
                                    <span className="inline-block px-3 py-1 bg-maroon text-white text-sm font-bold rounded-full mb-2 shadow-sm">
                                        {item.time}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-serif">
                                        {item.event}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Notes Section */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="bg-gradient-to-br from-maroon to-maroon-dark text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-gold/20 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-gold/20 rounded-full blur-2xl"></div>

                            <h3 className="text-3xl font-bold mb-8 font-serif border-b border-white/20 pb-4 flex items-center gap-3">
                                <span>📢</span> {t("important_notes")}
                            </h3>

                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <span className="text-2xl mt-1">🕉️</span>
                                    <p className="text-lg leading-relaxed text-white/90 font-medium">
                                        {t("festival_note_1")}
                                    </p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="text-2xl mt-1">🎭</span>
                                    <p className="text-lg leading-relaxed text-white/90 font-medium">
                                        {t("festival_note_2")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-gold/20 text-center">
                            <p className="text-gray-600 italic">
                                "{t("festival_footer_quote")}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

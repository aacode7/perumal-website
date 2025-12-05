import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ComingSoonModal from "./ComingSoonModal";

export default function RitualServices() {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

    const handleBookNowClick = () => {
        setModalTitle(t("book_now"));
        setIsModalOpen(true);
    };

    const handleDonationClick = () => {
        setModalTitle(t("donation"));
        setIsModalOpen(true);
    };

    const services = [
        {
            category: t("paid_services"),
            items: [
                { name: t("ashtottara_archana"), price: "20-00" },
                { name: t("sahasranama_archana"), price: "50-00" },
                { name: t("abhishekam"), price: "500-00" },
                { name: t("kalyanam"), price: "1500-00" },
                { name: t("anjaneya_akupuja"), price: "50-00" },
                { name: t("swarna_pushparchana"), price: "150-00" },
                { name: t("annadanam"), price: "1500-00" }
            ]
        },
        {
            category: t("perpetual_poojas"),
            note: t("perpetual_note"),
            items: [
                { name: t("perpetual_pooja"), price: "3000-00" },
                { name: t("perpetual_prasadam"), price: "3000-00" },
                { name: t("perpetual_abhishekam"), price: "3000-00" },
                { name: t("perpetual_kalyanam"), price: "10000-00" },
                { name: t("varaha_perpetual"), price: "3000-00" },
                { name: t("anjaneya_perpetual"), price: "3000-00" }
            ]
        },
        {
            category: t("prasadam_items"),
            items: [
                { name: t("pulihora_packet"), price: "20-00" },
                { name: t("rava_kesari_packet"), price: "20-00" },
                { name: t("laddu_one"), price: "20-00" },
                { name: t("vada_one"), price: "20-00" }
            ]
        },
        {
            category: t("vehicle_poojas"),
            items: [
                { name: t("scooter_pooja"), price: "150-00" },
                { name: t("auto_car_lorry"), price: "200-00" }
            ]
        },
        {
            category: t("various_offerings"),
            items: [
                { name: t("pulihora_kg"), price: "300-00" },
                { name: t("chakkera_pongali_kg"), price: "400-00" },
                { name: t("dadhyojanam_kg"), price: "300-00" },
                { name: t("katte_pongali_kg"), price: "300-00" },
                { name: t("rava_kesari_kg"), price: "300-00" },
                { name: t("kheerannam_kg"), price: "500-00" },
                { name: t("laddu_kg"), price: "400-00" },
                { name: t("kadambam_kg"), price: "500-00" },
                { name: t("sundelu_kg"), price: "200-00" },
                { name: t("vada_kg"), price: "400-00" }
            ]
        }
    ];

    return (
        <section id="ritual-services" className="relative py-24 px-6 bg-sandal-dark/30 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: "radial-gradient(#b7950b 2px, transparent 2px)", backgroundSize: "30px 30px" }}>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="text-left">
                        <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight mb-4" style={{ color: '#d4af37', WebkitTextFillColor: '#d4af37' }}>
                            {t("Details of various rituals performed in the presence of the Lord")}
                        </h2>
                        <p className="text-xl text-gray-700 font-serif italic">
                            {t("ritual_subtitle")}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 flex-wrap justify-center md:justify-end">
                        {/* Book Now Button */}
                        <button
                            onClick={handleBookNowClick}
                            onTouchEnd={handleBookNowClick}
                            type="button"
                            role="button"
                            aria-label="Book ritual service now"
                            style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                            className="bg-gradient-gold text-maroon-dark font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer select-none"
                        >
                            <span>📅</span>
                            {t("book_now")}
                        </button>

                        {/* Donation Button */}
                        <button
                            onClick={handleDonationClick}
                            onTouchEnd={handleDonationClick}
                            type="button"
                            role="button"
                            aria-label="Make a donation"
                            style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                            className="bg-gradient-gold text-maroon-dark font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer select-none"
                        >
                            <span>💰</span>
                            {t("donation")}
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-xl p-6 border-2 border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4 text-center font-serif pb-3 border-b-2 border-gold/30" style={{ color: '#b7950b' }}>
                                {service.category}
                            </h3>
                            {service.note && (
                                <p className="text-xs text-gray-600 mb-3 italic text-center bg-gold/10 p-2 rounded">
                                    {service.note}
                                </p>
                            )}
                            <div className="space-y-3">
                                {service.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0 hover:bg-sandal/20 px-2 rounded transition-colors">
                                        <span className="text-gray-800 font-medium text-sm flex-1">{item.name}</span>
                                        <span className="font-bold text-maroon ml-2 whitespace-nowrap" style={{ fontSize: '0.95rem' }}>
                                            ₹ {item.price}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Special Note */}
                <div className="mt-12 bg-gradient-gold p-6 rounded-3xl shadow-xl max-w-4xl mx-auto">
                    <div className="flex items-start gap-4">
                        <span className="text-4xl">📝</span>
                        <div>
                            <h4 className="text-xl font-bold text-maroon-dark mb-2 font-serif">{t("special_note_title")}</h4>
                            <p className="text-maroon leading-relaxed font-medium">
                                {t("tulabharam_note")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Coming Soon Modal */}
            <ComingSoonModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={modalTitle}
            />
        </section>
    );
}

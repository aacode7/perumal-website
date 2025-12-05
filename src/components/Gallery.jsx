import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Gallery() {
    const { t } = useTranslation();
    const [showMore, setShowMore] = useState(false);

    const galleryItems = [
        // Images
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764821641/WhatsApp_Image_2025-12-04_at_09.34.02_17e7b7d0_imv6zq.jpg",
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764821631/WhatsApp_Image_2025-12-04_at_09.34.02_2eeb20a1_xqx5p5.jpg",
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764821661/WhatsApp_Image_2025-12-04_at_09.34.03_31454068_otbxxh.jpg",
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764821675/WhatsApp_Image_2025-12-04_at_09.41.15_c5e76b1d_ebefsl.jpg",
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764821689/WhatsApp_Image_2025-12-04_at_09.41.15_efbccbc4_stf29b.jpg",
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764821704/WhatsApp_Image_2025-12-04_at_09.41.16_48287d73_tls13q.jpg",
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764822884/WhatsApp_Image_2025-12-04_at_09.34.02_f0717d0e_ypp1vt.jpg",
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764823018/WhatsApp_Image_2025-12-04_at_09.34.01_17d00a9b_fz8mwy.jpg",
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764823031/WhatsApp_Image_2025-12-04_at_09.34.01_e038182e_tryxqq.jpg",
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764823041/WhatsApp_Image_2025-12-04_at_09.34.03_7a59c6e1_jwvysk.jpg",
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764829910/WhatsApp_Image_2025-12-04_at_11.16.20_8531edf6_sdonvl.jpg",
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764827382/WhatsApp_Image_2025-12-04_at_11.16.20_5c38e325_ecr9kl.jpg",

        // Video
        "https://res.cloudinary.com/dfyufd3gl/video/upload/v1764822878/WhatsApp_Video_2025-12-04_at_09.34.08_9c925aa9_c16zxi.mp4",
    ];

    const visibleItems = showMore ? galleryItems : galleryItems.slice(0, 6);

    return (
        <section id="gallery" className="bg-sandal-dark/30 py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16 font-serif" style={{ color: '#d4af37', WebkitTextFillColor: '#d4af37' }}>
                    {t("Gallery")}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleItems.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-white"
                        >
                            {item.endsWith(".mp4") ? (
                                <video
                                    src={item}
                                    controls
                                    className="w-full h-80 object-cover bg-black"
                                />
                            ) : (
                                <>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                                    <img
                                        src={item}
                                        loading="lazy"
                                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                                        alt={`Temple Gallery ${index + 1}`}
                                    />
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {!showMore && (
                    <div className="text-center mt-16">
                        <button
                            onClick={() => setShowMore(true)}
                            onTouchEnd={() => setShowMore(true)}
                            type="button"
                            role="button"
                            aria-label="View all gallery images"
                            style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                            className="bg-maroon text-gold px-10 py-4 rounded-full font-bold shadow-xl hover:bg-gold hover:text-maroon active:scale-95 transition-all duration-300 transform hover:scale-105 tracking-wider uppercase text-sm cursor-pointer select-none"
                        >
                            {t("View All Gallery")}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Carousel() {
    const images = [
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764821689/WhatsApp_Image_2025-12-04_at_09.41.15_efbccbc4_stf29b.jpg",
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764821631/WhatsApp_Image_2025-12-04_at_09.34.02_2eeb20a1_xqx5p5.jpg",
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764821641/WhatsApp_Image_2025-12-04_at_09.34.02_17e7b7d0_imv6zq.jpg",
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764821675/WhatsApp_Image_2025-12-04_at_09.41.15_c5e76b1d_ebefsl.jpg",
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764821661/WhatsApp_Image_2025-12-04_at_09.34.03_31454068_otbxxh.jpg",
        "https://res.cloudinary.com/dfyufd3gl/image/upload/v1764821704/WhatsApp_Image_2025-12-04_at_09.41.16_48287d73_tls13q.jpg",
    ];

    return (
        <div className="w-full relative" style={{ height: '100vh', height: '100dvh', minHeight: '-webkit-fill-available' }}>
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                pagination={{
                    clickable: true,
                    bulletActiveClass: 'swiper-pagination-bullet-active !bg-gold !opacity-100',
                    bulletClass: 'swiper-pagination-bullet !bg-white !opacity-50',
                }}
                className="h-full w-full"
                style={{ width: '100%', height: '100%' }}
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative w-full h-full overflow-hidden">
                            <img
                                src={img}
                                className="w-full h-full object-cover object-center"
                                alt={`Temple ${i + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                            {/* Premium Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

import React from "react";
import { useTranslation } from "react-i18next";

export default function ComingSoonModal({ isOpen, onClose, title }) {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="relative bg-gradient-to-br from-maroon-dark via-maroon to-maroon-dark p-8 md:p-12 rounded-3xl shadow-2xl max-w-md mx-4 border-2 border-gold/40 animate-slideUp">
                {/* Decorative Corner Elements */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold/60 rounded-tl-2xl"></div>
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/60 rounded-tr-2xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold/60 rounded-bl-2xl"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold/60 rounded-br-2xl"></div>

                {/* Close Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onClose();
                    }}
                    onTouchEnd={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onClose();
                    }}
                    type="button"
                    role="button"
                    style={{
                        touchAction: 'manipulation',
                        WebkitTapHighlightColor: 'transparent',
                        minWidth: '48px',
                        minHeight: '48px',
                        padding: '12px'
                    }}
                    className="absolute top-4 right-4 text-gold hover:text-white transition-colors duration-300 z-10 cursor-pointer select-none flex items-center justify-center"
                    aria-label="Close"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Content */}
                <div className="text-center relative z-10 pt-4">
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                        <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center shadow-xl animate-bounce">
                            <span className="text-4xl">🙏</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-gold">
                        {title || t("coming_soon_title")}
                    </h3>

                    {/* Message */}
                    <p className="text-lg text-white/90 mb-8 font-sans leading-relaxed">
                        {t("coming_soon_message")}
                    </p>

                    {/* Decorative Divider */}
                    <div className="flex justify-center gap-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-gold/60 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-gold/60 animate-pulse delay-75"></div>
                        <div className="w-2 h-2 rounded-full bg-gold/60 animate-pulse delay-150"></div>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onClose();
                        }}
                        onTouchEnd={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onClose();
                        }}
                        type="button"
                        role="button"
                        aria-label="Close modal"
                        style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                        className="bg-gradient-gold text-maroon-dark px-8 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider cursor-pointer select-none"
                    >
                        {t("close")}
                    </button>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
                </div>
            </div>
        </div>
    );
}

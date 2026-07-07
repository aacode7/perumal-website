import { useTranslation } from "react-i18next";

export default function Footer({ onOpenInauguration }) {
    const { t } = useTranslation();
    return (
        <footer className="bg-maroon text-gold text-center py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-sm md:text-base mb-2">
                    © {new Date().getFullYear()} {t("temple_name")} — {t("all_rights_reserved")}
                </p>
                <p className="text-gold/70 text-xs md:text-sm">
                    {t("developed_by")} <span className="font-semibold text-gold">Ascription Technologies Private Limited</span>
                </p>
                <button
                    type="button"
                    onClick={onOpenInauguration}
                    className="mt-3 inline-flex items-center text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-gold/85 transition-colors hover:text-white"
                >
                    Inaugrate
                </button>
            </div>
        </footer>
    );
}

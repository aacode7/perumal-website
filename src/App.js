import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// IMPORT COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import History from "./components/History";
import UniqueFeatures from "./components/UniqueFeatures";
import RitualServices from "./components/RitualServices";
import DailyFestivals from "./components/DailyFestivals";
import Timings from "./components/Timings";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import InaugurationPage from "./components/InaugurationPage";

function App() {
  const { t } = useTranslation();
  const [hasLaunched, setHasLaunched] = useState(false);

  useEffect(() => {
    if (hasLaunched) {
      window.scrollTo(0, 0);
    }
  }, [hasLaunched]);

  return (
    <div className="font-sans text-gray-900 bg-sandal/10 min-h-screen flex flex-col relative">
      {!hasLaunched && <InaugurationPage onLaunch={() => setHasLaunched(true)} />}

      <div
        aria-hidden={!hasLaunched}
        className={`transition-all duration-700 ${hasLaunched ? "opacity-100" : "opacity-0 pointer-events-none select-none blur-sm"}`}
      >
        <Navbar />

        <main className="flex-grow">
          {/* HERO SECTION */}
          <section id="home" className="relative" style={{ height: '100dvh', minHeight: '-webkit-fill-available' }}>
            <Carousel />
            <div className="absolute inset-0 flex flex-col justify-end items-center pb-20 md:pb-32 z-10 pointer-events-none">
              <div className="text-center animate-on-scroll">
                <h1 className="text-4xl md:text-7xl font-bold font-serif drop-shadow-2xl mb-4 tracking-tight">
                  <span className="drop-shadow-sm" style={{ color: '#d4af37', WebkitTextFillColor: '#d4af37' }}>
                    {t("temple_name")}
                  </span>
                </h1>
                <p className="text-gold text-lg md:text-xl font-semibold tracking-wide drop-shadow-lg mb-2">
                  {t("estd_1823")}
                </p>
                <p className="text-gold/90 text-sm md:text-base font-medium tracking-wide drop-shadow-md mb-3">
                  {t("endowments_dept")}
                </p>
                <p className="text-white/90 text-xl md:text-2xl font-medium tracking-wide drop-shadow-md">
                  {t("location")}
                </p>
              </div>
            </div>
          </section>

          <History />
          <UniqueFeatures />
          <RitualServices />
          <DailyFestivals />
          <Timings />
          <Gallery />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;

import { useEffect, useRef, useState } from "react";

const confettiPieces = Array.from({ length: 32 }, (_, index) => {
  const offset = index - 16;

  return {
    id: index,
    left: 50 + (offset % 8) * 1.8,
    top: 44 + (index % 5) * 1.4,
    delay: `${index * 45}ms`,
    x: `${(index % 2 === 0 ? -1 : 1) * (70 + (index % 6) * 18)}px`,
    y: `${-180 - (index % 7) * 22}px`,
    rotate: `${(index % 8) * 28 - 90}deg`,
    size: 8 + (index % 5) * 2,
    color: index % 3 === 0 ? "#d4af37" : index % 3 === 1 ? "#fff7e0" : "#6b0000",
  };
});

function formatCountdown(value) {
  return `${value}..`;
}

export default function InaugurationPage({ onLaunch }) {
  const [phase, setPhase] = useState("idle");
  const [countdown, setCountdown] = useState(3);
  const [ribbonSplit, setRibbonSplit] = useState(false);
  const [hideLaunchDate, setHideLaunchDate] = useState(false);
  const launchTimerRef = useRef(null);
  const today = new Date();
  const todayLabel = `${String(today.getDate()).padStart(2, "0")}/${String(today.getMonth() + 1).padStart(2, "0")}/${today.getFullYear()}`;
  const countdownDelayMs = 1350;
  const ribbonOpenDelayMs = 900;

  const showRibbon = phase === "idle" || phase === "cutting";
  const showScissors = phase !== "idle";
  const showCountdown = phase === "countdown";
  const showCelebrate = phase === "celebrate";
  const isLaunching = phase !== "idle";

  useEffect(() => {
    if (phase !== "cutting") return undefined;

    const splitTimer = setTimeout(() => {
      setRibbonSplit(true);
    }, ribbonOpenDelayMs);

    const timer = setTimeout(() => {
      setCountdown(3);
      setPhase("countdown");
    }, 2200);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(timer);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "countdown") return undefined;

    setCountdown(3);
    const timers = [];

    timers.push(
      setTimeout(() => setCountdown(2), countdownDelayMs),
      setTimeout(() => setCountdown(1), countdownDelayMs * 2),
      setTimeout(() => setPhase("celebrate"), countdownDelayMs * 3)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "celebrate") return undefined;

    const timer = setTimeout(() => {
      setPhase("done");
      onLaunch();
    }, 1600);

    return () => clearTimeout(timer);
  }, [phase, onLaunch]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      if (launchTimerRef.current) {
        clearTimeout(launchTimerRef.current);
      }
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleLaunch = () => {
    if (isLaunching) return;
    setHideLaunchDate(true);

    launchTimerRef.current = setTimeout(() => {
      setRibbonSplit(false);
      setPhase("cutting");
    }, 250);
  };

  return (
    <div className="fixed inset-0 z-[70] overflow-hidden inauguration-shell">
      <div className="absolute inset-0 inauguration-backdrop" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-maroon-dark/75" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/18 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-maroon/28 blur-3xl" />
        <div className="absolute left-0 top-1/4 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-12 top-12 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="mb-7 space-y-3">
          <div className="mx-auto mb-6 w-fit overflow-hidden rounded-[1.75rem] border border-gold/40 bg-white/10 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <img
              src="/M_Hanumata_Rao_IAS.jpg"
              alt="Sri Hanumantha Rao IAS"
              className="h-40 w-32 rounded-[1.25rem] object-cover sm:h-48 sm:w-36 md:h-56 md:w-44"
            />
          </div>
          <p className="text-xs sm:text-sm uppercase tracking-[0.6em] text-gold/80">
            Grand Inauguration
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            <span style={{ color: "#fcf6ba", WebkitTextFillColor: "#fcf6ba" }}>
              Temple Website Launch
            </span>
          </h1>
          <div className="mx-auto max-w-4xl launch-host-card">
            <p className="launch-host-label">Ascription Technologies Hearty Welcomes</p>
            <p className="launch-host-copy launch-host-name">
              <span>Sri Hanumantha Rao IAS</span>, Commissioner, Endowment Dept., Government of Telangana.
            </p>
          </div>
        </div>

        <div
          className={`relative w-full max-w-5xl px-2 sm:px-6 transition-all duration-700 ${
            showRibbon ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-3"
          }`}
        >
          <div className="absolute left-1/2 top-1/2 h-4 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-2xl" />

          <div
            className={`mx-auto relative flex h-20 max-w-3xl items-stretch overflow-hidden rounded-full bg-gradient-to-r from-maroon-dark via-maroon to-maroon-dark shadow-[0_20px_80px_rgba(0,0,0,0.35)] ribbon-track ${
              ribbonSplit ? "ribbon-track-cut" : ""
            }`}
          >
            <span className="ribbon-line ribbon-line-top">
              <span className="ribbon-line-segment ribbon-line-left" />
              <span className="ribbon-line-segment ribbon-line-right" />
            </span>
            <span className="ribbon-line ribbon-line-bottom">
              <span className="ribbon-line-segment ribbon-line-left" />
              <span className="ribbon-line-segment ribbon-line-right" />
            </span>

            <div
              className={`flex w-1/2 items-center justify-end bg-gradient-to-r from-maroon-dark via-maroon to-maroon-light pr-8 text-white transition-transform duration-1000 ease-out ribbon-half-left ${
                ribbonSplit ? "ribbon-half-left-cut" : ""
              }`}
            >
              <span className="font-serif text-lg tracking-[0.28em] text-white/90 sm:text-xl">
                INAUGU
              </span>
            </div>
            <div
              className={`ribbon-center-piece relative flex items-center justify-center ${
                ribbonSplit ? "ribbon-center-split" : ""
              }`}
            >
              <span className="ribbon-center-half ribbon-center-half-left" />
              <span className="ribbon-center-half ribbon-center-half-right" />
              <span
                className={`relative z-10 px-1 text-center font-serif text-[0.72rem] font-bold uppercase tracking-[0.22em] text-maroon-dark transition-all duration-300 sm:text-xs ${
                  hideLaunchDate ? "opacity-0 scale-90" : "opacity-100 scale-100"
                }`}
              >
                {todayLabel}
              </span>
            </div>
            <div
              className={`flex w-1/2 items-center justify-start bg-gradient-to-r from-maroon-light via-maroon to-maroon-dark pl-8 text-white transition-transform duration-1000 ease-out ribbon-half-right ${
                ribbonSplit ? "ribbon-half-right-cut" : ""
              }`}
            >
              <span className="font-serif text-lg tracking-[0.28em] text-white/90 sm:text-xl">
                RATION
              </span>
            </div>
          </div>

          {showScissors && (
            <div
              className={`absolute inset-x-0 bottom-[1%] z-20 flex justify-center transition-all duration-700 ${
                phase === "cutting" ? "opacity-100 scissors-cutting" : "opacity-90"
              } ${ribbonSplit ? "scissors-cleared" : "scissors-ready"}`}
            >
              <img
                src="/scissors.png"
                alt=""
                aria-hidden="true"
                draggable="false"
                className="scissors-icon object-contain object-center select-none"
              />
            </div>
          )}
        </div>

        <div
          className={`relative w-full max-w-4xl px-3 sm:px-6 transition-all duration-700 ${
            showRibbon ? "pointer-events-none opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {showCountdown && (
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.5em] text-gold/70">
                Launching in
              </p>
              <div className="launch-countdown text-6xl font-black leading-none text-white sm:text-8xl">
                {formatCountdown(countdown)}
              </div>
            </div>
          )}

          {showCelebrate && (
            <div className="congrats-pop space-y-3">
              <p className="text-xs uppercase tracking-[0.5em] text-gold/70">
                Ceremony complete
              </p>
              <div className="text-4xl font-serif font-bold text-gold sm:text-6xl">
                Congratulations
              </div>
              <p className="mx-auto max-w-lg text-sm uppercase tracking-[0.35em] text-white/70">
                Welcome to the temple
              </p>
            </div>
          )}

          {showCelebrate && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {confettiPieces.map((piece) => (
                <span
                  key={piece.id}
                  className="paper-piece paper-piece-active"
                  style={{
                    left: `${piece.left}%`,
                    top: `${piece.top}%`,
                    width: `${piece.size}px`,
                    height: `${piece.size * 1.7}px`,
                    backgroundColor: piece.color,
                    animationDelay: piece.delay,
                    "--paper-x": piece.x,
                    "--paper-y": piece.y,
                    "--paper-rotate": piece.rotate,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={handleLaunch}
            disabled={isLaunching}
            className={`group relative overflow-hidden rounded-full border border-gold/70 px-8 py-4 font-semibold tracking-[0.25em] text-maroon-dark transition-all duration-500 ${
              isLaunching
                ? "cursor-not-allowed bg-gold/80 opacity-90"
                : "bg-gradient-to-r from-gold via-gold-light to-gold shadow-[0_15px_40px_rgba(212,175,55,0.35)] hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(212,175,55,0.5)]"
            }`}
          >
            <span className="relative z-10">
              {isLaunching ? "Launching..." : "LAUNCH"}
            </span>
            <span className="absolute inset-0 launch-shine opacity-0 group-hover:opacity-100" />
          </button>

          <p className="max-w-lg text-xs uppercase tracking-[0.4em] text-white/55">
            {showCelebrate ? "Color papers flying for the celebration" : "Developed by Ascription Technologies"}
          </p>
        </div>
      </div>
    </div>
  );
}

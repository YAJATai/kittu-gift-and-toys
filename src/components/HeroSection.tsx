export default function HeroSection() {
    return (
      <section className="relative overflow-hidden min-h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
            type="video/mp4"
          />
        </video>
        <div className="relative max-w-[1831px] mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 z-10 pt-[120px] sm:pt-[150px] min-h-screen flex flex-col justify-between">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
            <h1 className="font-grotesk text-[48px] sm:text-[72px] md:text-[96px] lg:text-[120px] font-normal uppercase leading-[1.05] sm:leading-[1] md:leading-[1] text-cream relative mt-12 md:mt-24">
              Kittu Gift<br />
              & Toys
              <span className="font-condiment text-[48px] sm:text-[72px] md:text-[100px] lg:text-[140px] font-normal normal-case text-neon mix-blend-exclusion leading-[0.79] tracking-[0.03em] absolute right-[-8px] bottom-[-30px] sm:bottom-[-40px] md:bottom-[-60px] lg:right-[-40px] -rotate-2 opacity-90 drop-shadow-[0_0_15px_rgba(111,255,0,0.4)]">
                Kittu
              </span>
            </h1>
            <p className="font-mono text-[14px] sm:text-[15px] md:text-[16px] uppercase text-cream max-w-[266px] leading-relaxed mt-4 lg:mt-[40px]">
              "Jaipur's most loved toy store. Hot Wheels, RC cars, karaoke sets, gift hampers and more — friendly staff, 909 happy families served."
            </p>
          </div>
  
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-5 max-w-[335px]">
              <p className="font-mono text-[14px] sm:text-[15px] md:text-[16px] uppercase lg:text-cream text-[#010828] opacity-10 leading-relaxed">
                "Jaipur's most loved toy store. Hot Wheels, RC cars, karaoke sets, gift hampers and more — friendly staff, 909 happy families served."
              </p>
              <p className="font-mono text-[14px] sm:text-[15px] md:text-[16px] uppercase lg:text-cream text-[#010828] opacity-10 leading-relaxed">
                "Jaipur's most loved toy store. Hot Wheels, RC cars, karaoke sets, gift hampers and more — friendly staff, 909 happy families served."
              </p>
            </div>
            <div className="hidden lg:flex flex-col gap-5 max-w-[335px]">
              <p className="font-mono text-[14px] sm:text-[15px] md:text-[16px] uppercase lg:text-cream text-[#010828] opacity-10 leading-relaxed">
                "Jaipur's most loved toy store. Hot Wheels, RC cars, karaoke sets, gift hampers and more — friendly staff, 909 happy families served."
              </p>
              <p className="font-mono text-[14px] sm:text-[15px] md:text-[16px] uppercase lg:text-cream text-[#010828] opacity-10 leading-relaxed">
                "Jaipur's most loved toy store. Hot Wheels, RC cars, karaoke sets, gift hampers and more — friendly staff, 909 happy families served."
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

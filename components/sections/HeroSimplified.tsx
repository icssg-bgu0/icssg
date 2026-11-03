import Image from "next/image";
import bguLogo from "@/bgu-logo.png";
import springerLogo from "@/springer-logo.png";
import { RegistrationCountdown } from "@/components/hero/RegistrationCountdown";
import { PhotoCarousel } from "@/components/hero/PhotoCarousel";

export function HeroSimplified() {
  return (
    <section id="home" className="pt-32 pb-16 bg-gray-50 border-b border-gray-200">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="mb-10 flex justify-center">
            <div className="flex w-full max-w-xl items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-4 shadow-sm sm:gap-10 sm:px-8">
              <div className="hero-logo w-[46%] max-w-[225px]">
                <Image src={bguLogo} alt="Birla Global University logo" className="h-auto w-full object-contain" priority />
              </div>
              <div className="hero-logo hero-logo--delayed w-[46%] max-w-[230px]">
                <Image src={springerLogo} alt="Springer logo" className="h-auto w-full object-contain" priority />
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-[#337ab7] mb-6 leading-tight">
            1st International Conference on Smart Systems and Sustainable Governance Powered by AI (ICSSG-AI 2027)
          </h1>
          
          <div className="flex justify-center items-center gap-2 mb-12 text-xl md:text-2xl font-bold text-gray-700">
            <span className="text-[#337ab7]">📅</span> 11th to 13th March 2027
          </div>
          
          <RegistrationCountdown />
          <PhotoCarousel />
        </div>
      </div>
    </section>
  );
}

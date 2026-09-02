import React from 'react';
import { FiFeather, FiAward } from 'react-icons/fi';
import { RiCompass3Line } from 'react-icons/ri';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';

export default function AboutPage({ onNavigate, onOpenBooking, onOpenClassRegister }) {
  return (
    <div className="pt-8 pb-20 bg-[#F7F6F2] min-h-screen text-left">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        
        <SectionHeader
          tag="Studio Ethos & Journey"
          title="THE ARTIST & THE SANCTUARY"
          subtitle="A multidisciplinary creative atelier built on relentless dedication to pencil realism, custom tattoo mastery, and fine art education."
        />

        {/* Core Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-cinzel text-2xl sm:text-4xl text-[#111111] leading-snug">
              MORE THAN A TATTOO STUDIO. <br />
              <span className="font-serif-editorial italic text-[#555555]">A DEDICATED ATELIER.</span>
            </h3>

            <p className="text-xs sm:text-sm md:text-base text-[#555555] font-light leading-relaxed">
              At MS Tattoo & Art Studio, we believe that an artist’s discipline does not stop when the needle stops vibrating. Our founder’s journey began with classical graphite portraiture and anatomical studies, translating years of fine drawing expertise onto living skin.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-[#555555] font-light leading-relaxed">
              Today, the studio functions across five intertwined creative pillars: bespoke tattoo craftsmanship, hyper-realistic fine art commissions, architectural wall murals, theatrical celebration artworks (Glitter & Crystal Stone), and rigorous academy mentorship.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="md" onClick={onOpenBooking}>
                Commission Artwork
              </Button>
              <Button variant="outline" size="md" onClick={onOpenClassRegister}>
                Join Academy
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#EFEDE7] border border-[#D8D6D0] p-8 sm:p-10 relative">
            <h4 className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#111111] mb-6 font-semibold">
              Core Studio Pillars
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="p-4 bg-[#F7F6F2] border border-[#D8D6D0] flex items-start gap-3">
                <RiCompass3Line className="text-[#111111] text-lg mt-0.5 shrink-0" />
                <div>
                  <strong className="text-[#111111] block font-semibold">Tattoo Craftsmanship</strong>
                  <span className="text-[#777777]">Single needle, fine line, portrait tattoos, and custom anatomical flow.</span>
                </div>
              </div>

              <div className="p-4 bg-[#F7F6F2] border border-[#D8D6D0] flex items-start gap-3">
                <FiFeather className="text-[#111111] text-lg mt-0.5 shrink-0" />
                <div>
                  <strong className="text-[#111111] block font-semibold">Fine Art Portraiture</strong>
                  <span className="text-[#777777]">Museum-grade graphite, polychromos color pencils, and lifelike skin tones.</span>
                </div>
              </div>

              <div className="p-4 bg-[#F7F6F2] border border-[#D8D6D0] flex items-start gap-3">
                <FiAward className="text-[#111111] text-lg mt-0.5 shrink-0" />
                <div>
                  <strong className="text-[#111111] block font-semibold">Theatrical & Dimensional Art</strong>
                  <span className="text-[#777777]">Sparkling glitter unveilings, crystal stone portraits, wood burning, and resin art.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hygiene Standards Card */}
        <div className="p-8 sm:p-10 bg-[#EFEDE7] border border-[#111111]">
          <div className="max-w-4xl space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-mono block font-bold">
              Safety & Standards
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl text-[#111111]">
              CLINICAL HYGIENE IN AN ARTISTIC SANCTUARY
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
              We maintain surgical-grade standards: single-use gas sterilized membrane needles, autoclave sterilization for stainless equipment, and medical barrier film wrapped around every machine and cord during sessions.
            </p>
            <div className="pt-2">
              <span className="font-mono text-xs text-[#111111] font-semibold">
                🕥 Open Daily: 10:30 AM – 5:00 PM (Monday – Saturday)
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { FiArrowRight, FiCheckCircle, FiClock, FiShield, FiCalendar, FiBookOpen, FiFeather } from 'react-icons/fi';
import Hero from '../components/home/Hero';
import StatsBar from '../components/home/StatsBar';
import ArtFormsStrip from '../components/home/ArtFormsStrip';
import StudioMotionReels from '../components/home/StudioMotionReels';
import OpenMicBanner from '../components/home/OpenMicBanner';
import SectionHeader from '../components/common/SectionHeader';
import ArtworkCard from '../components/common/ArtworkCard';
import Button from '../components/common/Button';
import { artworkCollection } from '../data/artworks';
import { artCourses } from '../data/courses';

export default function HomePage({
  onNavigate,
  onOpenBooking,
  onOpenClassRegister,
  onArtworkClick
}) {
  const featuredWorks = artworkCollection.filter((item) => item.featured).slice(0, 6);

  return (
    <div className="space-y-0 text-left bg-[#F7F6F2]">

      {/* 1. MASTER HERO SECTION (EXACT COMPOSITION FROM REFERENCE IMAGE) */}
      <Hero
        onExploreArt={() => onNavigate('gallery')}
        onBookSession={() => onOpenBooking()}
      />

      {/* 2. 4-COLUMN STATS STRIP FROM REFERENCE IMAGE */}
      <StatsBar />

      {/* 3. "OUR ART FORMS" GALLERY CAROUSEL FROM REFERENCE IMAGE */}
      <ArtFormsStrip
        onNavigate={onNavigate}
        onSelectArtForm={(formId) => {
          if (formId === 'tattoos') onNavigate('tattoos');
          else onNavigate('artworks');
        }}
      />

      {/* 4. STUDIO IN MOTION — LIVE PROCESS & GLITTER REELS */}
      <StudioMotionReels onBookSession={() => onOpenBooking()} />

      {/* 5. OPEN MIC / UPCOMING EVENT ANNOUNCEMENT (REQUIREMENT 8) */}
      <OpenMicBanner onInquireEvent={() => onOpenBooking({ category: 'event', title: 'Open Mic Night Registration' })} />

      {/* 5. FEATURED STUDIO ARCHIVE CREATIONS */}
      <section className="py-20 bg-[#F7F6F2] border-b border-[#D8D6D0]">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#777777] font-semibold block mb-2">
                Curated Showcase
              </span>
              <h3 className="font-cinzel text-2xl sm:text-4xl text-[#111111] font-normal">
                FEATURED STUDIO WORKS
              </h3>
            </div>

            <button
              onClick={() => onNavigate('gallery')}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#111111] font-semibold border-b border-[#111111] pb-1 hover:opacity-70 transition-opacity cursor-pointer self-start md:self-auto"
            >
              <span>View All 50+ Works</span>
              <FiArrowRight className="text-xs" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWorks.map((artwork, idx) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                index={idx}
                onClick={onArtworkClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACADEMY & WORKSHOPS PREVIEW */}
      <section className="py-20 bg-[#EFEDE7] border-b border-[#D8D6D0]">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#777777] font-semibold block mb-2">
                Education & Mentorship
              </span>
              <h3 className="font-cinzel text-2xl sm:text-4xl text-[#111111] font-normal">
                MS ART ACADEMY
              </h3>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-[#555555] mt-3 md:mt-0">
              <FiClock className="text-[#111111]" />
              <span>Studio Hours: 10:30 AM – 5:00 PM</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {artCourses.map((course) => (
              <div
                key={course.id}
                className="p-6 bg-[#F7F6F2] border border-[#D8D6D0] hover:border-[#111111] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9.5px] uppercase font-mono tracking-widest text-[#777777] block mb-2">
                    {course.duration}
                  </span>
                  <h4 className="font-cinzel text-base sm:text-lg text-[#111111] font-semibold mb-1">
                    {course.title}
                  </h4>
                  <p className="text-[10.5px] text-[#777777] font-mono mb-4">
                    {course.subtitle}
                  </p>
                  <span className="font-cinzel text-xl text-[#111111] font-bold block mb-4">
                    {course.formattedFee}
                  </span>
                </div>

                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => onOpenClassRegister(course)}
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ARTWORK PRICING / TARIFF PREVIEW */}
      <section className="py-20 bg-[#F7F6F2] border-b border-[#D8D6D0]">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <SectionHeader
            tag="Studio Tariff"
            title="COMMISSION RATES & TARIFF"
            subtitle="Clear, structured pricing for handmade fine art commissions. Handcrafted on archival Bristol paper and museum-grade surfaces."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#EFEDE7] border border-[#D8D6D0]">
              <span className="text-[10px] font-mono uppercase text-[#777777] block mb-1">Pencil Portrait</span>
              <h4 className="font-cinzel text-lg text-[#111111] mb-2 font-semibold">Graphite Pencil</h4>
              <span className="font-cinzel text-2xl text-[#111111] font-bold block mb-2">From ₹1,800</span>
              <p className="text-xs text-[#555555] font-light mb-4">A4 Single Face ₹1,800 | A3 Single ₹3,500 | Couples ₹7,000</p>
              <Button variant="outline" size="sm" className="w-full" onClick={() => onNavigate('pricing')}>
                View Rates
              </Button>
            </div>

            <div className="p-6 bg-[#EFEDE7] border border-[#D8D6D0]">
              <span className="text-[10px] font-mono uppercase text-[#777777] block mb-1">Vibrant Realism</span>
              <h4 className="font-cinzel text-lg text-[#111111] mb-2 font-semibold">Colour Pencil</h4>
              <span className="font-cinzel text-2xl text-[#111111] font-bold block mb-2">From ₹3,500</span>
              <p className="text-xs text-[#555555] font-light mb-4">Single A4 ₹3,500 | A3 ₹6,000 | A2 ₹10,000</p>
              <Button variant="outline" size="sm" className="w-full" onClick={() => onNavigate('pricing')}>
                View Rates
              </Button>
            </div>

            <div className="p-6 bg-[#EFEDE7] border border-[#D8D6D0]">
              <span className="text-[10px] font-mono uppercase text-[#777777] block mb-1">Dimensional Art</span>
              <h4 className="font-cinzel text-lg text-[#111111] mb-2 font-semibold">Crystal Stone Art</h4>
              <span className="font-cinzel text-2xl text-[#111111] font-bold block mb-2">From ₹6,500</span>
              <p className="text-xs text-[#555555] font-light mb-4">A2 Single ₹6,500 | Couples 20×30 inch ₹17,000</p>
              <Button variant="outline" size="sm" className="w-full" onClick={() => onNavigate('pricing')}>
                View Rates
              </Button>
            </div>

            <div className="p-6 bg-[#EFEDE7] border border-[#D8D6D0]">
              <span className="text-[10px] font-mono uppercase text-[#777777] block mb-1">Event Reveal</span>
              <h4 className="font-cinzel text-lg text-[#111111] mb-2 font-semibold">Glitter Surprise</h4>
              <span className="font-cinzel text-2xl text-[#111111] font-bold block mb-2">From ₹10,000</span>
              <p className="text-xs text-[#555555] font-light mb-4">Single 2×3 ft ₹10,000 | Couples 4×3 ft ₹15,000</p>
              <Button variant="outline" size="sm" className="w-full" onClick={() => onNavigate('pricing')}>
                View Rates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. STUDIO PHILOSOPHY / THE ATELIER ETHOS */}
      <section className="py-20 bg-[#F7F6F2] border-b border-[#D8D6D0]">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#777777] font-mono block font-semibold">
                Studio Philosophy
              </span>
              <h3 className="font-cinzel text-3xl sm:text-5xl text-[#111111] font-normal leading-tight">
                AN ARTIST'S SANCTUARY.
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                MS Tattoo & Art Studio was founded to bridge the gap between academic fine art portraiture and precision custom tattooing. Whether working on cold-pressed archival paper or living human skin, every line is treated as an enduring piece of heritage.
              </p>
              <div className="pt-2">
                <Button variant="primary" size="md" onClick={() => onNavigate('about')}>
                  Read Full Story
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 bg-[#EFEDE7] border border-[#D8D6D0] space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#777777] block">
                Clinical Hygiene Commitment
              </span>
              <blockquote className="font-serif-editorial italic text-xl text-[#111111] leading-relaxed">
                “100% single-use EO sterilized needle cartridges, medical barrier film on all surfaces, and hospital-grade asepsis.”
              </blockquote>
              <span className="text-xs font-mono text-[#555555] block">
                Timings: 10:30 AM – 5:00 PM Daily
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL BOOKING INVITATION */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="w-full px-6 sm:px-10 lg:px-14 text-center">
          <div className="max-w-2xl mx-auto space-y-5">
            <h3 className="font-cinzel text-3xl sm:text-4xl text-[#111111]">
              READY TO COMMENCE YOUR ARTWORK OR TATTOO?
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] font-light">
              Visit our studio for a private consultation, commission an archival family portrait, or sign up for an upcoming academy cohort.
            </p>
            <div className="pt-3 flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="md" onClick={() => onOpenBooking()}>
                Book Session / Consultation
              </Button>
              <Button variant="outline" size="md" onClick={() => onOpenClassRegister()}>
                Enroll in Academy
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

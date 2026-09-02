import React from 'react';
import { FiClock, FiBookOpen } from 'react-icons/fi';
import SectionHeader from '../components/common/SectionHeader';
import CourseCard from '../components/classes/CourseCard';
import ClassSchedule from '../components/classes/ClassSchedule';
import Button from '../components/common/Button';
import { artCourses } from '../data/courses';

export default function ClassesPage({ onOpenClassRegister }) {
  return (
    <div className="pt-8 pb-20 bg-[#F7F6F2] min-h-screen text-left">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        
        <SectionHeader
          tag="Studio Academy & Mentorship"
          title="ART & TATTOO EDUCATION PROGRAMS"
          subtitle="Rigorous, personalized mentorship transforming passionate illustrators into confident, hygienic, and technically skilled professionals."
        />

        {/* Studio Timings & Overview Banner */}
        <div className="mb-14 p-6 sm:p-8 bg-[#EFEDE7] border border-[#111111] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#F7F6F2] border border-[#D8D6D0] flex items-center justify-center text-[#111111] text-xl font-mono shrink-0">
              🕥
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-mono block font-bold">
                Official Studio Timings
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl text-[#111111] font-semibold">
                10:30 AM – 5:00 PM
              </h3>
              <p className="text-xs text-[#555555] font-light">
                Full-day studio immersion with dedicated 1-on-1 critiques and daily machine & drawing drills.
              </p>
            </div>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => onOpenClassRegister()}
            icon={FiBookOpen}
          >
            Apply for Next Batch
          </Button>
        </div>

        {/* 4 Core Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {artCourses.map((course, idx) => (
            <CourseCard
              key={course.id}
              course={course}
              index={idx}
              onRegister={(c) => onOpenClassRegister(c)}
            />
          ))}
        </div>

        {/* Dedicated Class Timings & Daily Schedule */}
        <div className="mb-16">
          <ClassSchedule />
        </div>

        {/* Academy Ethos & Admission Process */}
        <div className="p-8 sm:p-10 bg-[#EFEDE7] border border-[#D8D6D0]">
          <div className="max-w-4xl space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-mono block font-bold">
              Admission Guidelines
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl text-[#111111]">
              HOW ADMISSIONS WORK AT MS ACADEMY
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
              To guarantee individual attention and close instructor supervision, our cohorts are intentionally restricted to small groups (4 to 8 students max). Applications are reviewed on a rolling basis.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="p-4 bg-[#F7F6F2] border border-[#D8D6D0]">
                <span className="font-mono text-sm text-[#111111] font-bold block mb-1">01</span>
                <h5 className="font-cinzel text-sm text-[#111111] mb-1 font-semibold">Submit Application</h5>
                <p className="text-[#777777] leading-relaxed">Fill out the course registration form with your preferred start date and artistic background.</p>
              </div>

              <div className="p-4 bg-[#F7F6F2] border border-[#D8D6D0]">
                <span className="font-mono text-sm text-[#111111] font-bold block mb-1">02</span>
                <h5 className="font-cinzel text-sm text-[#111111] mb-1 font-semibold">Consultation Call</h5>
                <p className="text-[#777777] leading-relaxed">We contact you via phone/WhatsApp to discuss your creative goals and seat availability.</p>
              </div>

              <div className="p-4 bg-[#F7F6F2] border border-[#D8D6D0]">
                <span className="font-mono text-sm text-[#111111] font-bold block mb-1">03</span>
                <h5 className="font-cinzel text-sm text-[#111111] mb-1 font-semibold">Seat Confirmation</h5>
                <p className="text-[#777777] leading-relaxed">Confirm admission and receive your pre-course prep materials and curriculum schedule.</p>
              </div>
            </div>

            <div className="pt-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenClassRegister()}
              >
                Start Registration Form
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

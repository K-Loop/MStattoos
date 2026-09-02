import React, { useState } from 'react';
import { FiClock, FiMapPin, FiPhone, FiMail, FiSend, FiCheckCircle } from 'react-icons/fi';
import { RiWhatsappLine } from 'react-icons/ri';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import { CustomInput, CustomTextarea, CustomSelect } from '../components/common/CustomControls';

export default function ContactPage({ onOpenBooking, onOpenClassRegister }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Studio Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const subjectOptions = [
    { value: 'General Studio Inquiry', label: 'General Studio Inquiry' },
    { value: 'Tattoo Consultation', label: 'Tattoo Consultation' },
    { value: 'Fine Art Commission', label: 'Fine Art Commission' },
    { value: 'Academy Enrollment', label: 'Academy Enrollment' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-8 pb-20 bg-[#F7F6F2] min-h-screen text-left">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        
        <SectionHeader
          tag="Connect With The Studio"
          title="VISIT, INQUIRE & CONSULT"
          subtitle="Reach out to book a tattoo consultation, commission a custom artwork, or enroll in upcoming academy batches."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#EFEDE7] border border-[#D8D6D0] p-8 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-mono block mb-1 font-bold">
                  Studio Schedule
                </span>
                <div className="flex items-center gap-3 text-lg sm:text-xl font-cinzel text-[#111111]">
                  <FiClock className="text-[#111111] text-base" />
                  <span>10:30 AM – 5:00 PM</span>
                </div>
                <span className="text-xs text-[#555555] block mt-1">Monday through Saturday</span>
              </div>

              <div className="border-t border-[#D8D6D0] pt-6 space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-[#111111] text-base mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-[#111111] block">MS Tattoo & Art Studio</span>
                    <span className="text-[#555555] leading-relaxed block">
                      Main Studio & Art Academy<br />
                      Private Consultation by Appointment
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FiPhone className="text-[#111111] text-base shrink-0" />
                  <div>
                    <span className="text-[#111111] font-mono font-medium">+91 98000 00000</span>
                    <span className="text-[#777777] block text-[10px]">Calls & Consultations</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <RiWhatsappLine className="text-[#16a34a] text-lg shrink-0" />
                  <div>
                    <span className="text-[#111111] font-mono font-medium">+91 98000 00000</span>
                    <span className="text-[#777777] block text-[10px]">Instant WhatsApp Studio Desk</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FiMail className="text-[#111111] text-base shrink-0" />
                  <div>
                    <span className="text-[#111111] font-mono">contact@mstattoostudio.com</span>
                    <span className="text-[#777777] block text-[10px]">Direct Studio Inbox</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#D8D6D0] pt-6 flex flex-col gap-3">
                <Button variant="primary" size="md" onClick={onOpenBooking}>
                  Book Tattoo / Artwork
                </Button>
                <Button variant="outline" size="md" onClick={onOpenClassRegister}>
                  Academy Application
                </Button>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#EFEDE7] border border-[#D8D6D0] p-8 sm:p-10">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-cinzel text-2xl text-[#111111] tracking-wide mb-1">
                      DIRECT STUDIO INQUIRY
                    </h3>
                    <p className="text-xs text-[#555555] font-light">
                      Send us a message regarding custom sizes, bespoke tattoo ideas, or course schedules.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <CustomInput
                      label="Your Full Name"
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Maya Lin"
                      required
                    />
                    <CustomInput
                      label="Email Address"
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@domain.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <CustomInput
                      label="Phone / WhatsApp"
                      id="phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98000 00000"
                    />
                    <CustomSelect
                      label="Inquiry Topic"
                      options={subjectOptions}
                      value={form.subject}
                      onChange={(val) => setForm({ ...form, subject: val })}
                    />
                  </div>

                  <CustomTextarea
                    label="Your Message"
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your artwork ideas or questions..."
                    rows={4}
                    required
                  />

                  <div className="pt-2">
                    <Button type="submit" variant="primary" size="md" icon={FiSend}>
                      Transmit Message
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#F7F6F2] border border-[#111111] flex items-center justify-center mx-auto text-[#111111]">
                    <FiCheckCircle className="text-xl" />
                  </div>
                  <h4 className="font-cinzel text-xl text-[#111111]">
                    MESSAGE RECEIVED
                  </h4>
                  <p className="text-xs text-[#555555] max-w-sm mx-auto leading-relaxed">
                    Thank you for contacting MS Tattoo & Art Studio. Our team will review your inquiry and respond within 24 hours.
                  </p>
                  <div className="pt-3">
                    <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

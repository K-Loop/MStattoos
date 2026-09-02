import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Layout
import SidebarNav from './components/layout/SidebarNav';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import TattoosPage from './pages/TattoosPage';
import ArtworksPage from './pages/ArtworksPage';
import ClassesPage from './pages/ClassesPage';
import GalleryPage from './pages/GalleryPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Modals
import LightboxModal from './components/common/LightboxModal';
import RegistrationModal from './components/forms/RegistrationModal';
import CommissionModal from './components/forms/CommissionModal';
import AdminDashboard from './components/admin/AdminDashboard';

// Data
import { artworkCollection } from './data/artworks';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Modals state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxList, setLightboxList] = useState(artworkCollection);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedArtworkForCommission, setSelectedArtworkForCommission] = useState(null);

  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [selectedCourseForRegister, setSelectedCourseForRegister] = useState(null);

  const [adminOpen, setAdminOpen] = useState(false);

  // Handlers
  const handleOpenLightbox = (artwork, customList = artworkCollection) => {
    setLightboxList(customList);
    const idx = customList.findIndex((item) => item.id === artwork.id);
    setLightboxIndex(idx !== -1 ? idx : 0);
    setLightboxOpen(true);
  };

  const handleOpenBooking = (artworkOrService = null) => {
    setSelectedArtworkForCommission(artworkOrService);
    setBookingModalOpen(true);
  };

  const handleOpenClassRegister = (course = null) => {
    setSelectedCourseForRegister(course);
    setRegisterModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#ffffff] flex flex-col justify-between relative">
      
      {/* Left Persistent Image-Based Navigation Sidebar (Desktop) + Header (Mobile) */}
      <SidebarNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={() => handleOpenBooking()}
        isAdmin={adminOpen}
        onToggleAdmin={() => setAdminOpen(!adminOpen)}
      />

      {/* Main Content Pane with desktop offset to accommodate the 240px fixed left sidebar */}
      <div className="flex-grow xl:ml-[240px] flex flex-col justify-between pt-16 xl:pt-0">
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === 'home' && (
                <HomePage
                  onNavigate={setActiveTab}
                  onOpenBooking={() => handleOpenBooking()}
                  onOpenClassRegister={() => handleOpenClassRegister()}
                  onArtworkClick={(art) => handleOpenLightbox(art)}
                />
              )}

              {activeTab === 'tattoos' && (
                <TattoosPage
                  onOpenBooking={() => handleOpenBooking({ category: 'tattoos', title: 'Tattoo Consultation' })}
                  onArtworkClick={(art) => {
                    const tattoosOnly = artworkCollection.filter((a) => a.category === 'tattoos');
                    handleOpenLightbox(art, tattoosOnly);
                  }}
                />
              )}

              {activeTab === 'artworks' && (
                <ArtworksPage
                  onNavigate={setActiveTab}
                  onOpenBooking={() => handleOpenBooking()}
                  onArtworkClick={(art) => handleOpenLightbox(art)}
                />
              )}

              {activeTab === 'classes' && (
                <ClassesPage
                  onOpenClassRegister={(course) => handleOpenClassRegister(course)}
                />
              )}

              {activeTab === 'gallery' && (
                <GalleryPage
                  onArtworkClick={(art) => handleOpenLightbox(art)}
                />
              )}

              {activeTab === 'pricing' && (
                <PricingPage
                  onOpenBooking={(service) => handleOpenBooking(service)}
                />
              )}

              {activeTab === 'about' && (
                <AboutPage
                  onNavigate={setActiveTab}
                  onOpenBooking={() => handleOpenBooking()}
                  onOpenClassRegister={() => handleOpenClassRegister()}
                />
              )}

              {activeTab === 'contact' && (
                <ContactPage
                  onOpenBooking={() => handleOpenBooking()}
                  onOpenClassRegister={() => handleOpenClassRegister()}
                />
              )}

              {activeTab === '404' && (
                <NotFoundPage
                  onReturnHome={() => setActiveTab('home')}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <Footer
          onNavigate={setActiveTab}
          onOpenBooking={() => handleOpenBooking()}
          onOpenClassRegister={() => handleOpenClassRegister()}
        />
      </div>

      {/* Full-Screen Lightbox Modal with consistent Left Back Button */}
      <LightboxModal
        isOpen={lightboxOpen}
        artworks={lightboxList}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        onCommissionRequest={(art) => handleOpenBooking(art)}
      />

      {/* Class Registration Modal with custom controls & left Back Button */}
      <RegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        initialCourse={selectedCourseForRegister}
      />

      {/* Custom Artwork & Tattoo Booking Modal with custom controls & left Back Button */}
      <CommissionModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialArtwork={selectedArtworkForCommission}
      />

      {/* Admin Management Dashboard with left Back Button */}
      {adminOpen && (
        <AdminDashboard
          onClose={() => setAdminOpen(false)}
        />
      )}
    </div>
  );
}

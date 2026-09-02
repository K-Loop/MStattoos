import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2 } from 'react-icons/fi';
import SectionHeader from '../components/common/SectionHeader';
import ArtworkCard from '../components/common/ArtworkCard';
import { CustomTabs } from '../components/common/CustomControls';
import { EmptyState } from '../components/common/StateViews';
import { artworkCollection } from '../data/artworks';

export default function GalleryPage({ onArtworkClick }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Works', count: artworkCollection.length },
    { id: 'tattoos', label: 'Tattoos', count: artworkCollection.filter(a => a.category === 'tattoos').length },
    { id: 'graphite-pencil', label: 'Pencil & Graphite', count: artworkCollection.filter(a => a.category === 'graphite-pencil').length },
    { id: 'acrylic-wall', label: 'Paintings & Murals', count: artworkCollection.filter(a => a.category === 'acrylic-wall').length },
    { id: 'crystal-stone', label: 'Crystal Stone Art', count: artworkCollection.filter(a => a.category === 'crystal-stone').length },
    { id: 'glitter-art', label: 'Glitter Surprise', count: artworkCollection.filter(a => a.category === 'glitter-art').length },
    { id: 'specialty-art', label: 'Wood & Resin Art', count: artworkCollection.filter(a => a.category === 'specialty-art').length }
  ];

  const filteredArtworks = artworkCollection.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="pt-8 pb-20 bg-[#F7F6F2] min-h-screen text-left">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        
        <SectionHeader
          tag="Permanent & Contemporary Archive"
          title="MASTER GALLERY & ARTWORK ARCHIVE"
          subtitle="Explore over 50+ curated works spanning classical pencil portraits, luminous colored pigments, theatrical glitter reveals, and bespoke tattoo craft."
        />

        {/* Custom Editorial Tabs */}
        <div className="flex justify-center mb-10">
          <CustomTabs
            tabs={categories}
            activeTab={selectedCategory}
            onChange={(val) => setSelectedCategory(val)}
          />
        </div>

        {/* Live Filter Summary */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#D8D6D0] text-xs text-[#777777] font-mono">
          <div>
            Showing <strong className="text-[#111111]">{filteredArtworks.length}</strong> creations
          </div>
          <div className="flex items-center gap-2">
            <FiMaximize2 className="text-[#111111]" />
            <span className="hidden sm:inline">Click any artwork to open Fullscreen Lightbox & Inquire</span>
          </div>
        </div>

        {/* Dynamic Gallery Grid */}
        {filteredArtworks.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredArtworks.map((artwork, idx) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  index={idx}
                  onClick={onArtworkClick}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <EmptyState
            title="No Artworks In This Section"
            subtitle="There are currently no pieces under this specific archive filter."
            actionLabel="Reset to All Works"
            onAction={() => setSelectedCategory('all')}
          />
        )}

      </div>
    </div>
  );
}

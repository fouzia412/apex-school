import { useState } from 'react';
import { PageHero } from '@/components/common/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

import gallery1 from '@/assets/gallery/gallery-1.jpg';
import gallery2 from '@/assets/gallery/gallery-2.jpg';
import gallery3 from '@/assets/gallery/gallery-3.jpg';
import gallery4 from '@/assets/gallery/gallery-4.jpg';
import gallery5 from '@/assets/gallery/gallery-5.jpg';
import gallery6 from '@/assets/gallery/gallery-6.jpg';

const categories = ['All', 'Academic', 'Cultural', 'Sports', 'Events'];

const galleryImages = [
  { id: 1, src: gallery1, category: 'Academic', title: 'Science Laboratory', year: '2025' },
  { id: 2, src: gallery2, category: 'Cultural', title: 'Annual Day Performance', year: '2025' },
  { id: 3, src: gallery3, category: 'Sports', title: 'Sports Day Athletics', year: '2025' },
  { id: 4, src: gallery4, category: 'Academic', title: 'Library Learning', year: '2024' },
  { id: 5, src: gallery5, category: 'Events', title: 'Graduation Ceremony', year: '2024' },
  { id: 6, src: gallery6, category: 'Cultural', title: 'Art & Craft Activities', year: '2024' },
  { id: 7, src: gallery1, category: 'Academic', title: 'Chemistry Experiments', year: '2024' },
  { id: 8, src: gallery2, category: 'Cultural', title: 'Dance Performance', year: '2023' },
  { id: 9, src: gallery3, category: 'Sports', title: 'Track Events', year: '2023' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <PageHero
        title="Picture Gallery"
        subtitle="Capturing moments of excellence and joy"
        breadcrumbs={[{ label: 'Media', href: '#' }, { label: 'Gallery' }, { label: 'Picture Gallery' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-secondary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <span className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded mb-2">{image.category}</span>
                    <h3 className="text-primary-foreground font-semibold">{image.title}</h3>
                    <p className="text-primary-foreground/70 text-sm">{image.year}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-5 h-5 text-primary-foreground" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-background/20 flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full rounded-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-primary-foreground">{selectedImage.title}</h3>
                <p className="text-primary-foreground/70">{selectedImage.category} • {selectedImage.year}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;

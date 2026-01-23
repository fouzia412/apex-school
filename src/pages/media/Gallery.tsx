import { useState } from 'react';
import { PageHero } from '@/components/common/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
  { id: 24, src: '/gallery/ADS05038.JPG' },
  { id: 1, src: '/gallery/DD0A0025.JPG' },
  { id: 2, src: '/gallery/DD0A0028.JPG' },
  { id: 3, src: '/gallery/DD0A0038.JPG' },
  { id: 4, src: '/gallery/DD0A0073.JPG' },
  { id: 5, src: '/gallery/DD0A0082.JPG' },
  { id: 6, src: '/gallery/DD0A0807.JPG' },
  { id: 7, src: '/gallery/DD0A0815.JPG' },
  { id: 8, src: '/gallery/DD0A0818.JPG' },
  { id: 9, src: '/gallery/DD0A0824.JPG' },
  { id: 10, src: '/gallery/DD0A0826.JPG' },
  { id: 11, src: '/gallery/DD0A0832.JPG' },
  { id: 12, src: '/gallery/DD0A0850.JPG' },
  { id: 13, src: '/gallery/DD0A0853.JPG' },
  { id: 14, src: '/gallery/DD0A0917.JPG' },
  { id: 15, src: '/gallery/DD0A1007.JPG' },
  { id: 16, src: '/gallery/DD0A1015.JPG' },
  { id: 17, src: '/gallery/DD0A1086.JPG' },
  { id: 18, src: '/gallery/DD0A1105.JPG' },
  { id: 19, src: '/gallery/DD0A1109.JPG' },
  { id: 20, src: '/gallery/DD0A9980.JPG' },
  { id: 21, src: '/gallery/DD0A9986.JPG' },
  { id: 22, src: '/gallery/DD0A9990.JPG' },
  { id: 23, src: '/gallery/DD0A9996.JPG' },
  
  { id: 25, src: '/gallery/ADS05044.JPG' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  return (
    <>
      {/* Hero */}
      <PageHero
        title="Picture Gallery"
        subtitle="Moments captured from campus life"
        breadcrumbs={[
          { label: 'Media', href: '#' },
          { label: 'Gallery' },
          { label: 'Picture Gallery' },
        ]}
      />

      {/* Masonry Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            className="
              columns-1
              sm:columns-2
              lg:columns-3
              gap-4
            "
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="mb-4 break-inside-avoid cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt="Gallery image"
                  className="
                    w-full
                    rounded-2xl
                    bg-muted
                    object-contain
                    transition-transform
                    duration-300
                    hover:scale-[1.02]
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex justify-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedImage.src}
                alt="Expanded"
                className="
                  max-h-[70vh]
                  md:max-h-[80vh]
                  w-auto
                  rounded-xl
                  object-contain
                  bg-black
                  p-2
                "
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;

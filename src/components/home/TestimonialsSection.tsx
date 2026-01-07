import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Parent of Class X Student',
    quote:
      "APEX – The School of Excellence has been instrumental in shaping my daughter's personality. The teachers are dedicated, the facilities are world-class, and the holistic approach to education is truly commendable.",
    rating: 5,
    avatar: 'PS',
  },
  {
    id: 2,
    name: 'Arjun Reddy',
    role: 'Alumni, Batch of 2023',
    quote:
      "The years I spent at APEX – The School of Excellence were truly transformative. The school not only prepared me academically but also instilled values that guide me today at IIT Delhi.",
    rating: 5,
    avatar: 'AR',
  },
  {
    id: 3,
    name: 'Dr. Meera Krishnan',
    role: 'Parent of Two Students',
    quote:
      "Both my children study at APEX – The School of Excellence, and I've seen remarkable growth in their confidence and knowledge. The school’s emphasis on academics and extracurriculars is perfectly balanced.",
    rating: 5,
    avatar: 'MK',
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern (must not capture clicks) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow text-secondary mb-3 block">Testimonials</span>
          <h2 className="heading-1 text-primary-foreground mb-4">
            What Our <span className="text-secondary">Community</span> Says
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary-foreground/20"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-secondary mb-6 opacity-50" />

              {/* Quote Text */}
              <blockquote className="quote text-primary-foreground text-xl md:text-2xl mb-8 leading-relaxed">
                “{testimonials[currentIndex].quote}”
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center font-heading font-bold text-secondary-foreground">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-primary-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary-foreground/70 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? 'bg-secondary w-8'
                      : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

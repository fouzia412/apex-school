import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Medal, Trophy, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const achievements = [
  {
    id: 1,
    title: 'National Science Olympiad',
    description: 'Multiple Gold Medals in NSO 2025',
    icon: Medal,
    color: 'bg-yellow-500',
  },
  {
    id: 2,
    title: 'CBSE Board Toppers',
    description: '15 Students in Top 1% Nationwide',
    icon: Trophy,
    color: 'bg-primary',
  },
  {
    id: 3,
    title: 'Sports Excellence',
    description: 'State Champions in Athletics',
    icon: Award,
    color: 'bg-orange-500',
  },
  {
    id: 4,
    title: 'Cultural Awards',
    description: 'Best School in National Youth Festival',
    icon: Star,
    color: 'bg-secondary',
  },
];

export const AchievementsSection = () => {
  return (
    <section className="section-padding relative bg-muted/30 overflow-hidden">
      {/* Soft background (never block clicks) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-background via-muted/40 to-background"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="eyebrow mb-3 block text-secondary font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Pride
          </motion.span>

          <motion.h2
            className="heading-1 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Celebrating <span className="text-gradient-gold">Excellence</span>
          </motion.h2>

          <motion.p
            className="body-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            At APEX – The School of Excellence, our students consistently
            achieve remarkable success in academics, sports, and cultural
            pursuits.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative bg-card rounded-2xl p-6 border border-border overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Hover glow (must not capture clicks) */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 z-0 ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-4 shadow-md`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-heading font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {/* <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button variant="gold" size="lg" asChild>
            <Link to="/media-awards">
              View All Achievements
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
};

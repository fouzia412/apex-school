import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, Clock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tabs = ['Latest News', 'Circulars', 'Events'];

const newsItems = [
  {
    id: 1,
    title: 'APEX Students Excel in National Science Olympiad',
    excerpt:
      'Our students secured top positions in the National Science Olympiad, bringing pride to APEX – The School of Excellence.',
    date: '2025-12-28',
    category: 'Achievement',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400',
  },
  {
    id: 2,
    title: 'Annual Sports Day Celebration 2025',
    excerpt:
      'A spectacular display of athletic excellence and team spirit marked APEX Annual Sports Day.',
    date: '2025-12-20',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
  },
  {
    id: 3,
    title: 'New Innovation Lab Inaugurated at APEX',
    excerpt:
      'State-of-the-art robotics and AI lab inaugurated to foster innovation among students.',
    date: '2025-12-15',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
  },
];

const circulars = [
  { id: 1, title: 'Winter Vacation Notice 2025–26', date: '2025-12-25', type: 'Notice' },
  { id: 2, title: 'Fee Payment Schedule for Q4', date: '2025-12-20', type: 'Finance' },
  { id: 3, title: 'Parent–Teacher Meeting Schedule', date: '2025-12-18', type: 'Academic' },
  { id: 4, title: 'Transport Route Changes Update', date: '2025-12-15', type: 'Transport' },
];

const events = [
  { id: 1, title: 'Annual Day Celebrations', date: '2026-01-15', time: '10:00 AM', venue: 'Main Auditorium' },
  { id: 2, title: 'Science Exhibition 2026', date: '2026-01-20', time: '9:00 AM', venue: 'Science Block' },
  { id: 3, title: 'Inter-School Debate Competition', date: '2026-01-25', time: '11:00 AM', venue: 'Conference Hall' },
];

export const NewsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow mb-3 block">Stay Updated</span>
            <h2 className="heading-1">
              News & <span className="text-gradient">Announcements</span>
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 p-1 bg-background rounded-xl border border-border">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-lg font-heading text-sm font-medium transition-all ${
                  activeTab === index
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* TAB CONTENT */}
        <AnimatePresence mode="wait">
          {/* NEWS */}
          {activeTab === 0 && (
            <motion.div
              key="news"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {newsItems.map((item) => (
                <article
                  key={item.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 left-4 badge-secondary">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      {new Date(item.date).toLocaleDateString('en-IN')}
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {item.excerpt}
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center text-sm font-semibold text-primary"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </motion.div>
          )}

          {/* CIRCULARS */}
          {activeTab === 1 && (
            <motion.div
              key="circulars"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              {circulars.map((circular) => (
                <div
                  key={circular.id}
                  className="flex items-center gap-4 p-5 border-b last:border-0 hover:bg-muted/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold">
                      {circular.title}
                    </h4>
                    <div className="text-sm text-muted-foreground flex gap-3">
                      <span>{new Date(circular.date).toLocaleDateString('en-IN')}</span>
                      <span className="badge-outline">{circular.type}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Download</Button>
                </div>
              ))}
            </motion.div>
          )}

          {/* EVENTS */}
          {activeTab === 2 && (
            <motion.div
              key="events"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold">
                        {new Date(event.date).getDate()}
                      </span>
                      <span className="text-xs uppercase">
                        {new Date(event.date).toLocaleDateString('en-IN', { month: 'short' })}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-2">
                        {event.title}
                      </h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" /> {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" /> {event.venue}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/gallery">
              View All Updates <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

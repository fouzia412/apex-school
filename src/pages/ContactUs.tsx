import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'sonner';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  campus: string;
};

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    campus: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        'https://script.google.com/macros/s/AKfycbyvqcN--0z1J_HGUHkkUXc4YpunDvDPG792xN2lfNiQ4BiQQunHAbgRtMWNWB5uJeU1Zg/exec',
        {
          method: 'POST',
          body: JSON.stringify(formData), // ✅ NO HEADERS (IMPORTANT)
        }
      );

      const text = await res.text(); // Apps Script safety
      const data = JSON.parse(text);

      if (data.success) {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          campus: '',
        });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We’d love to hear from you"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* CONTACT FORM */}
            <motion.div
              className="bg-card p-6 md:p-8 rounded-3xl border border-border"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="display-4 text-foreground mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    placeholder="Student / Guardian Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    setFormData({ ...formData, phone: value });
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20"
                />

                <select
                  name="campus"
                  required
                  value={formData.campus}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Preferred Campus</option>
                  <option value="Bandlaguda">Bandlaguda – Subhan Hills</option>
                  <option value="Malakpet">Malakpet – Chanchalguda</option>
                </select>

                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select Subject</option>
                  <option value="Admissions">Admissions</option>
                  <option value="Academics">Academics</option>
                  <option value="Transport">Transport</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20"
                />

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="display-4 text-foreground mb-6">
                Our Campuses
              </h2>

              <div className="space-y-8">

                <div className="space-y-3">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold">
                        Bandlaguda – Subhan Hills
                      </h3>
                      <p className="text-muted-foreground">
                        H.NO: 18-13-8/A/16/H/6, Wadi E Farhan, Subhan Hills,
                        Bandlaguda, Hyderabad, TS – 500005
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden h-56 md:h-64">
                    <iframe
                      src="https://www.google.com/maps?q=Subhan+Hills+Bandlaguda+Hyderabad&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold">
                        Malakpet – Chanchalguda
                      </h3>
                      <p className="text-muted-foreground">
                        16-4-14, MAM Center, Beside MAM Palace,
                        Chanchalguda, Malakpet, Hyderabad
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden h-56 md:h-64">
                    <iframe
                      src="https://www.google.com/maps?q=MAM+Palace+Chanchalguda+Malakpet+Hyderabad&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <p className="text-muted-foreground">
                      +91 79897 85346, +91 81429 74915
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <p className="text-muted-foreground">
                      Info@apextheschool.in
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <p className="text-muted-foreground">
                      Mon – Sat: 8:00 AM – 4:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

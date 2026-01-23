import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { footerLinks, socialLinks, contactInfo } from "@/config/navigation";
import apexLogo from "@/assets/apex-logo.jpg";

const socialIconMap: Record<string, React.ReactNode> = {
  Facebook: <Facebook className="w-4 h-4" />,
  Twitter: <Twitter className="w-4 h-4" />,
  Instagram: <Instagram className="w-4 h-4" />,
  Youtube: <Youtube className="w-4 h-4" />,
  Linkedin: <Linkedin className="w-4 h-4" />,
};

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-apex-black text-primary-foreground">
      <div className="container mx-auto px-4 py-10 space-y-8">
        {/* ================= TOP ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src={apexLogo}
            alt="APEX School"
            className="h-12 bg-white p-2 rounded-md"
          />

          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition"
              >
                {socialIconMap[social.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* ================= MIDDLE ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {/* Quick Links */}
          <div>
            <p className="font-semibold mb-3">Quick Links</p>
            <ul className="space-y-2 text-primary-foreground/70">
              {footerLinks.quickLinks.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-secondary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <p className="font-semibold mb-3">Academics</p>
            <ul className="space-y-2 text-primary-foreground/70">
              {footerLinks.resources.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-secondary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold mb-3">Contact</p>
            <ul className="space-y-2 text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {contactInfo.phone}
              </li>

              <li className="flex items-center gap-2 break-all">
                <Mail className="w-4 h-4" />
                {contactInfo.email}
              </li>

              <li className="flex items-center gap-2">
                <span className="text-xs opacity-60">{contactInfo.hours}</span>
              </li>
            </ul>
          </div>

          {/* Campuses */}
          <div>
            <p className="font-semibold mb-3">Campuses</p>
            <ul className="space-y-3 text-primary-foreground/70">
              {contactInfo.addresses.map((campus, index) => (
                <li key={index} className="flex gap-2 items-start">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <a
                    href={campus.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                  >
                    <span className="block font-medium">{campus.label}</span>
                    <span className="text-xs leading-relaxed">
                      {campus.address}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM (FULL WIDTH) ================= */}
        <div className="border-t border-white/10 pt-4 w-full">
          <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 text-xs text-primary-foreground/60">
            {/* Left */}
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} APEX – The School of Excellence
            </p>

            {/* Right */}
            <div className="flex gap-4 md:justify-end md:ml-auto">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 w-10 h-10 rounded-lg bg-primary text-black flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://api.whatsapp.com/send?phone=917989785346"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-5 z-50 w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-whatsapp"
      >
        <IoLogoWhatsapp className="w-6 h-6 text-white" />
      </a>
    </footer>
  );
};

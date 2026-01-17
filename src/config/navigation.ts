// Navigation configuration for APEX School
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

export const navigationConfig: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: "Home",
  },
  {
    label: "About Us",
    href: "#",
    icon: "Building",
    children: [
      { label: "Our School", href: "/our-school" },
      { label: "Mission & Vision", href: "/mission-vision" },
      { label: "Principal's Message", href: "/principal-message" },
      { label: "Chairman's Message", href: "/chairman-message" },
      { label: "Director's Message", href: "/director-message" },
      { label: "Management Committee", href: "/management-committee" },
    ],
  },
  {
    label: "Academics",
    href: "#",
    icon: "BookOpen",
    children: [
      { label: "Pre-Primary & Primary", href: "/curriculum/pre-primary" },
      { label: "Middle & Secondary School", href: "/curriculum/middle-secondary" },
      { label: "Senior Secondary School", href: "/curriculum/senior-secondary" },
      { label: "Faculty", href: "/faculty" },
    ],
  },
  {
    label: "Admissions",
    href: "/admission-process",
    icon: "UserPlus",
     children: [
      { label: "Admission Process", href: "/admission-process" },
      { label: "Fee Structure", href: "/fee-structure" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Media",
    href: "#",
    icon: "Camera",
    children: [
      { label: "Picture Gallery", href: "/gallery" },
      { label: "Video Gallery", href: "/video-gallery" },
      { label: "Awards & Achievements", href: "/media-awards" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    label: "Infrastructure",
    href: "#",
    icon: "Building2",
    children: [
      { label: "Our Campus", href: "/infrastructure/our-campus" },
      { label: "Innovation Labs", href: "/infrastructure/innovation-labs" },
      { label: "Sports Facilities", href: "/infrastructure/sports-facilities" },
      { label: "Library", href: "/infrastructure/library" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    icon: "MapPin",
  },
];

export const footerLinks = {
  quickLinks: [
    { label: "About Us", href: "/our-school" },
    { label: "Admissions", href: "/admission-process" },
    { label: "Academics", href: "/curriculum/pre-primary" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  resources: [
    { label: "Pre-Primary", href: "/curriculum/pre-primary" },
    { label: "Middle School", href: "/curriculum/middle-secondary" },
    { label: "Senior Secondary", href: "/curriculum/senior-secondary" },
    { label: "Faculty", href: "/faculty" },
    { label: "Testimonials", href: "/testimonials" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/apexschool", icon: "Facebook" },
  { label: "Twitter", href: "https://twitter.com/apexschool", icon: "Twitter" },
  { label: "Instagram", href: "https://instagram.com/apexschool", icon: "Instagram" },
  { label: "YouTube", href: "https://youtube.com/apexschool", icon: "Youtube" },
  { label: "LinkedIn", href: "https://linkedin.com/company/apexschool", icon: "Linkedin" },
];

export const contactInfo = {
  address: "APEX Campus, Excellence Road, City 500001",
  phone: "+91 40 1234 5678",
  email: "info@apexschool.in",
  hours: "Mon - Sat: 8:00 AM - 4:00 PM",
};
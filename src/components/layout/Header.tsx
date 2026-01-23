import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Home, Building, BookOpen, UserPlus, Users, Building2, Trophy, Camera, MapPin, Phone, Mail } from 'lucide-react';
import { navigationConfig, contactInfo, type NavItem } from '@/config/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import apexLogo from '@/assets/apex-logo.jpg';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-4 h-4" />,
  Building: <Building className="w-4 h-4" />,
  BookOpen: <BookOpen className="w-4 h-4" />,
  UserPlus: <UserPlus className="w-4 h-4" />,
  Users: <Users className="w-4 h-4" />,
  Building2: <Building2 className="w-4 h-4" />,
  Trophy: <Trophy className="w-4 h-4" />,
  Camera: <Camera className="w-4 h-4" />,
  MapPin: <MapPin className="w-4 h-4" />,
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-apex-black text-primary-foreground py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />
              {contactInfo.email}
            </a>
          </div>
         {/* Addresses with Google Maps */}
<div className="flex items-center gap-6">
  {contactInfo.addresses.map((item, index) => (
    <a
      key={index}
      href={item.mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-secondary transition-colors"
      title={`Open ${item.label} in Google Maps`}
    >
      <MapPin className="w-4 h-4 flex-shrink-0" />
      <span className="truncate max-w-[280px]">
        {item.label}
      </span>
    </a>
  ))}
</div>


        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/95 backdrop-blur-lg shadow-md py-2'
            : 'bg-background py-4'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={apexLogo} 
                alt="APEX School Logo" 
                className="h-14 md:h-16 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationConfig.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.children ? (
                    <button
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 rounded-lg font-heading text-sm font-medium transition-all duration-200',
                        activeDropdown === item.label
                          ? 'text-primary bg-primary/5'
                          : 'text-foreground hover:text-primary hover:bg-primary/5'
                      )}
                    >
                      {item.icon && iconMap[item.icon]}
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          activeDropdown === item.label && 'rotate-180'
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 rounded-lg font-heading text-sm font-medium transition-all duration-200',
                        location.pathname === item.href
                          ? 'text-primary bg-primary/5'
                          : 'text-foreground hover:text-primary hover:bg-primary/5'
                      )}
                    >
                      {item.icon && iconMap[item.icon]}
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 min-w-[240px] bg-card rounded-xl shadow-lg border border-border overflow-hidden"
                      >
                        <div className="py-2">
                          {item.children.map((child) => (
                            <DropdownItem key={child.label} item={child} />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            {/* <div className="hidden lg:flex items-center gap-3">
              <Button variant="gold" size="lg" asChild>
                <Link to="/admission-process">Apply Now</Link>
              </Button>
            </div> */}

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-card shadow-xl overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <img 
                      src={apexLogo} 
                      alt="APEX School Logo" 
                      className="h-10 object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navigationConfig.map((item, index) => (
                    <MobileNavItem key={item.label} item={item} index={index} />
                  ))}
                </nav>

                {/* <div className="mt-8 pt-8 border-t border-border">
                  <Button variant="gold" size="lg" className="w-full" asChild>
                    <Link to="/admission-process">Apply Now</Link>
                  </Button>
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const DropdownItem = ({ item }: { item: NavItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.children) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">
          {item.label}
          <ChevronDown className={cn('w-4 h-4 transition-transform', isOpen && '-rotate-90')} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute left-full top-0 ml-1 min-w-[220px] bg-card rounded-xl shadow-lg border border-border overflow-hidden"
            >
              <div className="py-2">
                {item.children.map((child) => (
                  <DropdownItem key={child.label} item={child} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      to={item.href}
      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
    >
      {item.label}
    </Link>
  );
};

const MobileNavItem = ({ item, index }: { item: NavItem; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      {item.children ? (
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors',
              isOpen ? 'bg-primary/5 text-primary' : 'text-foreground hover:bg-muted'
            )}
          >
            <span className="flex items-center gap-2">
              {item.icon && iconMap[item.icon]}
              {item.label}
            </span>
            <ChevronDown className={cn('w-4 h-4 transition-transform', isOpen && 'rotate-180')} />
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden pl-6"
              >
                <div className="py-2 space-y-1">
                  {item.children.map((child) => (
                    <MobileSubItem key={child.label} item={child} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link
          to={item.href}
          className={cn(
            'flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors',
            location.pathname === item.href
              ? 'bg-primary/5 text-primary'
              : 'text-foreground hover:bg-muted'
          )}
        >
          {item.icon && iconMap[item.icon]}
          {item.label}
        </Link>
      )}
    </motion.div>
  );
};

const MobileSubItem = ({ item }: { item: NavItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.children) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-3 py-2 text-sm text-foreground hover:text-primary transition-colors"
        >
          {item.label}
          <ChevronDown className={cn('w-3 h-3 transition-transform', isOpen && 'rotate-180')} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden pl-4"
            >
              {item.children.map((child) => (
                <MobileSubItem key={child.label} item={child} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      to={item.href}
      className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
    >
      {item.label}
    </Link>
  );
};
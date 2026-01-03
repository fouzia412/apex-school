import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
  type FocusEvent as ReactFocusEvent,
} from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Building,
  BookOpen,
  UserPlus,
  Users,
  Building2,
  Trophy,
  Camera,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { navigationConfig, contactInfo, type NavItem } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/** ✅ Update this to your real logo path in /public */
const LOGO_SRC = "/dps.jpg";

const iconMap: Record<string, ReactNode> = {
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

const pastelIconBg = [
  "bg-emerald-50 text-emerald-700",
  "bg-blue-50 text-blue-700",
  "bg-violet-50 text-violet-700",
  "bg-amber-50 text-amber-700",
  "bg-rose-50 text-rose-700",
  "bg-cyan-50 text-cyan-700",
  "bg-lime-50 text-lime-700",
  "bg-fuchsia-50 text-fuchsia-700",
];

function isExternalHref(href: string) {
  const h = (href ?? "").trim();
  return (
    h.startsWith("http://") ||
    h.startsWith("https://") ||
    h.startsWith("mailto:") ||
    h.startsWith("tel:") ||
    h.toLowerCase().endsWith(".pdf")
  );
}

function isPlaceholderHref(href: string) {
  const h = (href ?? "").trim();
  return h === "#" || h === "" || h.toLowerCase() === "javascript:void(0)";
}

function hasChildren(item: NavItem) {
  return Array.isArray(item.children) && item.children.length > 0;
}

function SmartLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  if (isPlaceholderHref(href)) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  if (isExternalHref(href)) {
    const isPdf = href.toLowerCase().endsWith(".pdf");
    return (
      <a
        href={href}
        className={className}
        target={isPdf ? "_blank" : undefined}
        rel={isPdf ? "noreferrer" : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

/**
 * ✅ TRUE 3-STEP CASCADING MENU (DESKTOP)
 * - Column 1 always (level-1)
 * - Column 2 only when hovered level-1 has children (panel width expands)
 * - Column 3 only when hovered level-2 has children (panel width expands again)
 * - No children => that next column disappears AND panel width shrinks
 */
function CascadingMenu3({
  topItem,
  hoveredL1,
  hoveredL2,
  setHoveredL1,
  setHoveredL2,
  onNavigate,
}: {
  topItem: NavItem;
  hoveredL1: string | null;
  hoveredL2: string | null;
  setHoveredL1: (v: string | null) => void;
  setHoveredL2: (v: string | null) => void;
  onNavigate: () => void;
}) {
  const level1 = topItem.children ?? [];

  const activeL1 = useMemo(() => {
    if (!hoveredL1) return null;
    return level1.find((x) => x.label === hoveredL1) ?? null;
  }, [hoveredL1, level1]);

  const showL2 = !!activeL1 && hasChildren(activeL1);
  const level2 = showL2 ? activeL1!.children ?? [] : [];

  const activeL2 = useMemo(() => {
    if (!hoveredL2) return null;
    return level2.find((x) => x.label === hoveredL2) ?? null;
  }, [hoveredL2, level2]);

  const showL3 = !!activeL2 && hasChildren(activeL2);
  const level3 = showL3 ? activeL2!.children ?? [] : [];

  return (
    <div className="flex items-stretch">
      {/* LEVEL 1 */}
      <div className={cn("w-[300px] min-w-[300px]", (showL2 || showL3) && "border-r border-border")}>
        <div className="px-4 py-3">
          <p className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
            {topItem.label}
          </p>
        </div>

        <div className="px-2 pb-3">
          <div className="rounded-lg border border-border bg-background overflow-hidden">
            <ul className="divide-y divide-border max-h-[70vh] overflow-y-auto">
              {level1.map((item) => {
                const itemHasKids = hasChildren(item);

                return (
                  <li
                    key={item.label}
                    onMouseEnter={() => {
                      if (itemHasKids) {
                        setHoveredL1(item.label);
                        setHoveredL2(null);
                      } else {
                        setHoveredL1(null);
                        setHoveredL2(null);
                      }
                    }}
                  >
                    {itemHasKids ? (
                      <button
                        type="button"
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground",
                          "hover:bg-muted transition-colors"
                        )}
                      >
                        <span className="truncate">{item.label}</span>
                        <ChevronRight className="w-4 h-4 opacity-60" />
                      </button>
                    ) : (
                      <SmartLink
                        href={item.href}
                        onClick={onNavigate}
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground",
                          "hover:bg-muted transition-colors"
                        )}
                      >
                        <span className="truncate">{item.label}</span>
                      </SmartLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* LEVEL 2 */}
      {showL2 && (
        <div className={cn("w-[300px] min-w-[300px]", showL3 && "border-r border-border")}>
          <div className="px-4 py-3">
            <p className="text-sm font-semibold text-foreground truncate">{activeL1?.label}</p>
          </div>

          <div className="px-2 pb-3">
            <div className="rounded-lg border border-border bg-background overflow-hidden">
              <ul className="divide-y divide-border max-h-[70vh] overflow-y-auto">
                {level2.map((item) => {
                  const itemHasKids = hasChildren(item);

                  return (
                    <li
                      key={item.label}
                      onMouseEnter={() => {
                        if (itemHasKids) setHoveredL2(item.label);
                        else setHoveredL2(null);
                      }}
                    >
                      {itemHasKids ? (
                        <button
                          type="button"
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground",
                            "hover:bg-muted transition-colors"
                          )}
                        >
                          <span className="truncate">{item.label}</span>
                          <ChevronRight className="w-4 h-4 opacity-60" />
                        </button>
                      ) : (
                        <SmartLink
                          href={item.href}
                          onClick={onNavigate}
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground",
                            "hover:bg-muted transition-colors"
                          )}
                        >
                          <span className="truncate">{item.label}</span>
                        </SmartLink>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* LEVEL 3 */}
      {showL3 && (
        <div className="w-[320px] min-w-[320px]">
          <div className="px-4 py-3">
            <p className="text-sm font-semibold text-foreground truncate">{activeL2?.label}</p>
          </div>

          <div className="px-2 pb-3">
            <div className="rounded-lg border border-border bg-background overflow-hidden">
              <div className="max-h-[70vh] overflow-y-auto">
                {level3.some(hasChildren) ? (
                  <div className="divide-y divide-border">
                    {level3.map((grp) => {
                      const grpHasKids = hasChildren(grp);

                      if (!grpHasKids) {
                        return (
                          <SmartLink
                            key={grp.label}
                            href={grp.href}
                            onClick={onNavigate}
                            className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors truncate"
                          >
                            {grp.label}
                          </SmartLink>
                        );
                      }

                      return (
                        <div key={grp.label} className="p-0">
                          <div className="px-4 py-3">
                            <p className="text-sm font-semibold text-foreground mb-2 truncate">
                              {grp.label}
                            </p>
                            <div className="space-y-1">
                              {(grp.children ?? []).map((leaf) => (
                                <SmartLink
                                  key={leaf.label}
                                  href={leaf.href}
                                  onClick={onNavigate}
                                  className="block px-2 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors truncate"
                                >
                                  {leaf.label}
                                </SmartLink>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <ul className="divide-y divide-border">
                    {level3.map((leaf) => (
                      <li key={leaf.label}>
                        <SmartLink
                          href={leaf.href}
                          onClick={onNavigate}
                          className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors truncate"
                        >
                          {leaf.label}
                        </SmartLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   ✅ MOBILE: TRUE MULTI-LEVEL (3rd step will show)
   - Works for 2, 3, 4... levels (recursive)
   - Minimal spacing (no huge gaps)
   - Each item expands one-by-one
   - Clicking a leaf navigates + closes menu
========================================================= */
function MobileNavNode({
  item,
  depth = 0,
  onNavigate,
}: {
  item: NavItem;
  depth?: number;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const itemHasKids = hasChildren(item);

  const padLeft = 12 + depth * 12;

  if (!itemHasKids) {
    return (
      <SmartLink
        href={item.href}
        onClick={onNavigate}
        className={cn(
          "flex items-center justify-between rounded-xl border border-border bg-background",
          "px-4 py-3 text-sm font-medium hover:bg-muted transition-colors"
        )}
      >
        <span className="truncate" style={{ paddingLeft: padLeft }}>
          {item.label}
        </span>
      </SmartLink>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-background overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className={cn(
          "w-full flex items-center justify-between",
          "px-4 py-3 text-sm font-semibold hover:bg-muted transition-colors"
        )}
      >
        <span className="truncate" style={{ paddingLeft: padLeft }}>
          {item.label}
        </span>
        <ChevronDown className={cn("w-4 h-4 transition-transform", open && "rotate-180")} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.16 }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 pt-0 space-y-2">
              {(item.children ?? []).map((child) => (
                <MobileNavNode
                  key={`${depth}-${item.label}-${child.label}`}
                  item={child}
                  depth={depth + 1}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Desktop dropdown states
  const [activeTop, setActiveTop] = useState<string | null>(null);
  const [hoveredL1, setHoveredL1] = useState<string | null>(null);
  const [hoveredL2, setHoveredL2] = useState<string | null>(null);

  // Dropdown position
  const navRef = useRef<HTMLElement | null>(null);
  const [dropdownStyle, setDropdownStyle] = useState<{ left: number; width: number } | null>(null);
  const [panelLeft, setPanelLeft] = useState<number | null>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveTop(null);
    setHoveredL1(null);
    setHoveredL2(null);
    setDropdownStyle(null);
    setPanelLeft(null);
  }, [location]);

  const activeTopItem = useMemo(() => {
    if (!activeTop) return null;
    return navigationConfig.find((x) => x.label === activeTop) ?? null;
  }, [activeTop]);

  const visibleCols = useMemo(() => {
    if (!activeTopItem) return 0;

    const level1 = activeTopItem.children ?? [];
    const l1 = hoveredL1 ? level1.find((x) => x.label === hoveredL1) ?? null : null;
    const showL2 = !!l1 && hasChildren(l1);
    if (!showL2) return 1;

    const level2 = l1!.children ?? [];
    const l2 = hoveredL2 ? level2.find((x) => x.label === hoveredL2) ?? null : null;
    const showL3 = !!l2 && hasChildren(l2);
    return showL3 ? 3 : 2;
  }, [activeTopItem, hoveredL1, hoveredL2]);

  const calcPanelWidth = (cols: number) => {
    const W1 = 300;
    const W2 = 300;
    const W3 = 320;
    if (cols <= 1) return W1;
    if (cols === 2) return W1 + W2;
    return W1 + W2 + W3;
  };

  const calcStyle = (desiredWidth: number) => {
    const navEl = navRef.current;
    if (!navEl) return null;

    const navRect = navEl.getBoundingClientRect();
    const gutter = 8;

    const width = Math.min(desiredWidth, navRect.width - gutter * 2);
    const maxLeft = Math.max(gutter, navRect.width - width - gutter);

    const baseLeft = panelLeft ?? gutter;
    const left = Math.min(Math.max(baseLeft, gutter), maxLeft);

    return { left, width };
  };

  const openMegaAt = (triggerEl: HTMLElement, item: NavItem) => {
    const navEl = navRef.current;
    if (!navEl) return;

    const navRect = navEl.getBoundingClientRect();
    const btnRect = triggerEl.getBoundingClientRect();

    const gutter = 8;
    const desiredWidth = calcPanelWidth(1);
    const width = Math.min(desiredWidth, navRect.width - gutter * 2);

    const rawLeft = btnRect.left - navRect.left;
    const maxLeft = Math.max(gutter, navRect.width - width - gutter);
    const left = Math.min(Math.max(rawLeft, gutter), maxLeft);

    setActiveTop(item.label);
    setHoveredL1(null);
    setHoveredL2(null);

    setPanelLeft(left);
    setDropdownStyle({ left, width });
  };

  const closeMega = () => {
    setActiveTop(null);
    setHoveredL1(null);
    setHoveredL2(null);
    setDropdownStyle(null);
    setPanelLeft(null);
  };

  useEffect(() => {
    if (!activeTopItem || !dropdownStyle) return;

    const desiredWidth = calcPanelWidth(visibleCols);
    const style = calcStyle(desiredWidth);
    if (!style) return;

    setDropdownStyle(style);
    setPanelLeft(style.left);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCols]);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Mail className="w-4 h-4" />
              {contactInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{contactInfo.address}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 bg-background",
          isScrolled ? "shadow-md" : "shadow-none"
        )}
      >
        <div className="container mx-auto px-4">
          {/* Row 1 */}
          <div className={cn("flex items-center justify-between gap-3", isScrolled ? "py-2" : "py-4")}>
            <Link to="/" className="flex items-center gap-3 min-w-0">
              <img
                src={LOGO_SRC}
                alt="Delhi Public School Hyderabad"
                className="h-14 sm:h-16 w-auto object-contain max-w-[260px] sm:max-w-[340px]"
              />
              {/* <div className="hidden xl:block min-w-0">
                <p className="font-heading font-bold text-lg text-foreground leading-tight truncate">
                  Delhi Public School, Hyderabad
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  Affiliation No.: 3630051 • School Number: 57562
                </p>
              </div> */}
            </Link>

            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{contactInfo.email}</span>
              </div>
              <Button variant="gold" size="lg" asChild>
                <Link to="/admission-process">Apply Now</Link>
              </Button>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button variant="gold" size="sm" asChild>
                <Link to="/admission-process">Apply</Link>
              </Button>
              <button
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen((s) => !s)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Row 2 Nav */}
          <div className="hidden lg:block border-t border-border">
            <nav
              ref={navRef}
              className="relative"
              onMouseLeave={() => {
                closeMega();
              }}
            >
              <div className="flex items-center justify-between gap-2 py-3 overflow-x-auto">
                {navigationConfig.map((item, idx) => {
                  const isActive = !isPlaceholderHref(item.href) && location.pathname === item.href;
                  const colorClass = pastelIconBg[idx % pastelIconBg.length];

                  if (hasChildren(item)) {
                    return (
                      <button
                        key={item.label}
                        type="button"
                        onMouseEnter={(e: ReactMouseEvent<HTMLElement>) =>
                          openMegaAt(e.currentTarget as HTMLElement, item)
                        }
                        onFocus={(e: ReactFocusEvent<HTMLElement>) =>
                          openMegaAt(e.currentTarget as HTMLElement, item)
                        }
                        className={cn(
                          "group flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap",
                          activeTop === item.label ? "bg-primary/5 text-primary" : "hover:bg-muted text-foreground"
                        )}
                      >
                        <span className={cn("flex items-center justify-center w-8 h-8 rounded-xl", colorClass)}>
                          {item.icon ? iconMap[item.icon] : null}
                        </span>
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn("w-4 h-4 transition-transform", activeTop === item.label && "rotate-180")}
                        />
                      </button>
                    );
                  }

                  return (
                    <SmartLink
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "group flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap",
                        isActive ? "bg-primary/5 text-primary" : "hover:bg-muted text-foreground"
                      )}
                    >
                      <span className={cn("flex items-center justify-center w-8 h-8 rounded-xl", colorClass)}>
                        {item.icon ? iconMap[item.icon] : null}
                      </span>
                      <span>{item.label}</span>
                    </SmartLink>
                  );
                })}
              </div>

              {/* Desktop dropdown */}
              <AnimatePresence>
                {activeTopItem && hasChildren(activeTopItem) && dropdownStyle && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.12 }}
                    className="absolute top-full z-[80]"
                    style={{ left: dropdownStyle.left, width: dropdownStyle.width }}
                    onMouseEnter={() => setActiveTop(activeTopItem.label)}
                  >
                    <motion.div
                      className="mt-2 rounded-xl border border-border bg-card shadow-lg overflow-hidden"
                      animate={{ width: dropdownStyle.width }}
                      transition={{ duration: 0.12 }}
                    >
                      <CascadingMenu3
                        topItem={activeTopItem}
                        hoveredL1={hoveredL1}
                        hoveredL2={hoveredL2}
                        setHoveredL1={setHoveredL1}
                        setHoveredL2={setHoveredL2}
                        onNavigate={closeMega}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          </div>
        </div>
      </header>

      {/* ✅ Mobile Menu (NOW supports 3rd step and deeper) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-card shadow-2xl overflow-y-auto"
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={LOGO_SRC} alt="DPS Hyderabad" className="h-10 w-auto object-contain" />
                    {/* <div>
                      <p className="font-heading font-bold text-foreground">DPS Hyderabad</p>
                      <p className="text-xs text-muted-foreground">Menu</p>
                    </div> */}
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2">
                  {navigationConfig.map((item) => (
                    <MobileNavNode
                      key={item.label}
                      item={item}
                      onNavigate={() => setIsMobileMenuOpen(false)}
                    />
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <Button variant="gold" size="lg" className="w-full" asChild>
                    <Link to="/admission-process" onClick={() => setIsMobileMenuOpen(false)}>
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

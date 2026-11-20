import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Sun,
  Moon,
  ArrowUpRight,
  X,
  ExternalLink,
  Copy,
  Check,
  Send,
  Loader2,
  MapPin,
  Award,
  Sparkles,
  Code2,
  Database,
  Layout,
  Server,
  Globe,
  GitBranch,
  Layers,
  Terminal,
  Cpu,
  Mail,
  MessageCircle,
  Menu,
  Briefcase,
  GraduationCap,
} from 'lucide-react';

/**
 * ============================================================================
 * 1. EXACT CONTENT & DATA (Single Source of Truth - Zero WordPress Mentions)
 * ============================================================================
 */
const PORTFOLIO_DATA = {
  personal: {
    fullName: 'Kanwal Khan',
    role: 'Full Stack & Web Developer',
    location: 'Karachi, Pakistan',
    whatsappLabel: '03220489208 (WhatsApp Only)',
    whatsappNumber: '03220489208',
    whatsappUrl: 'https://wa.me/923220489208',
    email: 'kik.3122003@mail.com',
    emailUrl: 'mailto:kik.3122003@mail.com',
    summary:
      'Dedicated and detail-oriented Full Stack & Web Developer with hands-on experience in building modern web applications, frontend interfaces, and responsive backend platforms. Currently pursuing an Advanced Diploma in Software Engineering (ADSE) at Aptech Garden with multiple academic distinctions. A collaborative team player with strong management and interpersonal skills, eager to contribute effectively to dynamic projects and deliver high-quality digital solutions.',
  },
  heroPills: ['Full Stack Developer', 'MERN Stack', 'UI Engineering'],
  swappingWords: ['Design', 'Develop', 'Deploy'],
  education: {
    current: {
      title: 'Advanced Diploma in Software Engineering (ADSE)',
      institution: 'Aptech Garden',
      status: 'Ongoing',
      highlights: [
        'Term 1 (Oct 2024): Achieved Distinction - Overall Weighted Score: 81.0% (Practical: 95%, Objective: 77%, e-Projects: 71%)',
        'Term 2 (May 2025): Achieved Distinction - Overall Weighted Score: 77.0% (Practical: 93%, e-Projects: 76%, Objective: 69%)',
        'Term 4 (May 2026): Completed with strong credit standing (Practical: 95%, Overall Score: 71.0%)',
      ],
    },
    previous: {
      title: 'Intermediate in Commerce (I.Com)',
      status: 'Completed',
      score: 'Grade / Score: 81.64%',
    },
  },
  distinctionBadges: [
    '81.0% Term 1 Distinction',
    '77.0% Term 2 Distinction',
    '95% Practical Score',
    '81.64% I.Com',
  ],
  coreStrengths: [
    'Punctual',
    'Responsible',
    'Team Collaboration',
    'Project Coordination',
    'Time Management',
  ],
  motionGridSkills: [
    { name: 'React.js', category: 'Frontend', icon: Code2, accent: 'text-sky-500' },
    { name: 'Next.js', category: 'Framework', icon: Layers, accent: 'text-neutral-800 dark:text-neutral-200' },
    { name: 'Node.js', category: 'Backend', icon: Server, accent: 'text-emerald-500' },
    { name: 'Express.js', category: 'Backend', icon: Terminal, accent: 'text-amber-500' },
    { name: 'MongoDB', category: 'Database', icon: Database, accent: 'text-green-600' },
    { name: 'JavaScript ES6+', category: 'Language', icon: Cpu, accent: 'text-yellow-500' },
    { name: 'Tailwind CSS', category: 'Styling', icon: Layout, accent: 'text-cyan-500' },
    { name: 'HTML5 / CSS3', category: 'Core Web', icon: Globe, accent: 'text-orange-500' },
    { name: 'REST APIs', category: 'Architecture', icon: Briefcase, accent: 'text-indigo-500' },
    { name: 'Git & GitHub', category: 'Version Control', icon: GitBranch, accent: 'text-rose-500' },
    { name: 'Responsive UI', category: 'Design', icon: Sparkles, accent: 'text-blue-500' },
    { name: 'Bootstrap', category: 'UI Framework', icon: Layout, accent: 'text-purple-500' },
  ],
  projects: [
    {
      id: 'eventsphere',
      title: 'EventSphere',
      category: 'Full Stack Web Application',
      liveUrl: 'https://event-sphere-management-dt25.vercel.app/login',
      imageSrc: '/projects/eventsphere.PNG',
      summary:
        'Full-stack exhibition portal featuring exhibitor dashboards, booth selection, event browsing, and application status tracking.',
      detail:
        'A comprehensive MERN full-stack event and exhibition management platform built with a dedicated Exhibitor Portal. Enables businesses to browse upcoming tech expos and hackathons, inspect venue capacities and booth dimensions, submit exhibition applications, and manage approved booths in real time.',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      themeGradient: 'from-slate-900 via-indigo-950 to-slate-900',
      badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
    },
    {
      id: 'sabaqhub-ai',
      title: 'SabaqHub AI',
      category: 'AI Web Application',
      liveUrl: 'https://sabuqhub-ai.vercel.app/',
      imageSrc: '/projects/sabuqhub.PNG',
      summary:
        'AI-powered academic study assistant built with Next.js, React, and OpenAI API for multi-level student learning.',
      detail:
        'An interactive educational AI platform designed for Matric (9th/10th), O-Level, A-Level, Intermediate, and University students. Supports subject-specific queries across Physics, Chemistry, Mathematics, Biology, English, Urdu, Computer, and Islamiat, complete with file/photo upload capabilities for instant academic explanations.',
      stack: ['Next.js', 'React', 'OpenAI API', 'Tailwind CSS'],
      themeGradient: 'from-emerald-950 via-teal-950 to-slate-950',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    },
    {
      id: 'ah-clothing-hub',
      title: 'AH Clothing Hub',
      category: 'E-Commerce Web Platform',
      liveUrl: 'https://ah-clothinghub.vercel.app/',
      imageSrc: '/projects/ahclothinghub.PNG',
      summary:
        'Editorial streetwear e-commerce storefront featuring seasonal collections, category filtering, and shopping cart state.',
      detail:
        'A clean, responsive e-commerce web application tailored for everyday streetwear and seasonal fashion drops. Features structured product curation for Men and Women, dynamic cart management, category navigation, and localized Cash-on-Delivery checkout flows.',
      stack: ['React.js', 'JavaScript (ES6+)', 'CSS3', 'Responsive UI'],
      themeGradient: 'from-stone-200 via-emerald-100 to-stone-100',
      badgeColor: 'bg-stone-500/10 text-stone-700 dark:text-stone-300 border-stone-500/20',
    },
    {
      id: 'velora',
      title: 'Velora',
      category: 'Luxury Brand & Cafe Web Design',
      liveUrl: 'https://velora-preminum-cafe.vercel.app/',
      imageSrc: '/projects/velora.PNG',
      summary:
        'Dark-and-gold luxury cafe web experience showcasing signature coffees, brand philosophy, and interactive menus.',
      detail:
        'A refined, editorial web experience crafted for a luxury coffee brand. Combines dark-mode aesthetics with gold serif typography, structured mega-menus for Coffee Origins, Signature Coffees, Beverages, and Desserts, and smooth visual storytelling.',
      stack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'UI/UX Design'],
      themeGradient: 'from-neutral-950 via-amber-950/60 to-stone-950',
      badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
    },
  ],
};

/**
 * ============================================================================
 * 2. CUSTOM HOOKS (Scroll Reveal & External Link Helper)
 * ============================================================================
 */
function useScrollReveal(options = { threshold: 0.14 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}

function openExternalSafely(e, url, onFallbackNotify) {
  if (e) e.preventDefault();
  try {
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win && onFallbackNotify) {
      onFallbackNotify(url);
    }
  } catch {
    if (onFallbackNotify) onFallbackNotify(url);
  }
}

/**
 * ============================================================================
 * 3. SWAPPING TEXT COMPONENT
 * ============================================================================
 */
function SwappingTextDemo({
  words = PORTFOLIO_DATA.swappingWords,
  stagger = 0.05,
  duration = 2200,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(timer);
  }, [words.length, duration]);

  const currentWord = words[index];

  return (
    <span className="inline-grid justify-items-start align-baseline overflow-hidden py-1">
      {words.map((word) => (
        <span
          key={word}
          aria-hidden="true"
          className="invisible col-start-1 row-start-1 select-none pointer-events-none"
        >
          {word}
        </span>
      ))}

      <span
        key={currentWord}
        className="col-start-1 row-start-1 whitespace-nowrap text-indigo-600 dark:text-indigo-400"
        aria-live="polite"
      >
        {currentWord.split('').map((char, charIdx) => (
          <span
            key={`${currentWord}-${charIdx}`}
            className="inline-block animate-swapCharUp"
            style={{
              animationDelay: `${charIdx * stagger}s`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </span>
  );
}

/**
 * ============================================================================
 * 4. THEME TOGGLER BUTTON
 * ============================================================================
 */
function ThemeTogglerButtonDemo({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle theme"
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-[#0F172A] dark:text-[#F8FAFC] hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      <span
        className={`absolute transition-all duration-300 ${
          isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      >
        <Sun className="h-4 w-4" strokeWidth={2} />
      </span>
      <span
        className={`absolute transition-all duration-300 ${
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        }`}
      >
        <Moon className="h-4 w-4" strokeWidth={2} />
      </span>
    </button>
  );
}

/**
 * ============================================================================
 * 5. HERO CUSTOM CURSOR WRAPPER
 * ============================================================================
 */
function HeroCursorWrapper({ children }) {
  const containerRef = useRef(null);
  const [cursorState, setCursorState] = useState({
    x: 0,
    y: 0,
    visible: false,
  });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window
      );
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (isTouchDevice || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setCursorState({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        visible: true,
      });
    },
    [isTouchDevice]
  );

  const handleMouseLeave = useCallback(() => {
    setCursorState((prev) => ({ ...prev, visible: false }));
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full"
    >
      {children}

      {!isTouchDevice && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute top-0 left-0 z-30 transition-opacity duration-200 ${
            cursorState.visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: `translate3d(${cursorState.x + 14}px, ${cursorState.y + 16}px, 0)`,
          }}
        >
          <div className="flex items-center gap-1.5 rounded-full bg-[#0F172A] dark:bg-[#F8FAFC] text-[#F8FAFC] dark:text-[#0A0A0C] px-3 py-1 text-xs font-medium shadow-lg border border-white/10 dark:border-black/10 whitespace-nowrap">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 dark:bg-emerald-600 animate-pulse" />
            <span>Kanwal Developer</span>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * ============================================================================
 * 6. FLOATING GLASSY NAVBAR
 * ============================================================================
 */
function Navbar({ activeSection, theme, onToggleTheme, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-5 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none">
      <nav
        aria-label="Primary Navigation"
        className="mx-auto max-w-[1120px] flex items-center justify-between pointer-events-auto rounded-full bg-white/75 dark:bg-[#121215]/75 backdrop-blur-md border border-black/[0.08] dark:border-white/[0.08] px-4 sm:px-5 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.28)]"
      >
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="font-jakarta text-lg sm:text-xl font-bold tracking-[-0.03em] text-[#0F172A] dark:text-[#F8FAFC] flex items-center gap-1.5"
        >
          <span>Kanwal</span>
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
        </a>

        <div className="hidden md:flex items-center bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full px-2 py-1.5 gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                  isActive
                    ? 'text-[#0F172A] dark:text-[#F8FAFC]'
                    : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]'
                }`}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-full bg-black/[0.06] dark:bg-white/[0.10] transition-all duration-300"
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeTogglerButtonDemo theme={theme} onToggle={onToggleTheme} />

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#0F172A] dark:bg-[#F8FAFC] text-[#F8FAFC] dark:text-[#0A0A0C] px-4 py-2 text-xs sm:text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
          >
            <span>Get in Touch</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full text-[#0F172A] dark:text-[#F8FAFC] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden mx-auto max-w-[1120px] mt-2 pointer-events-auto rounded-3xl bg-white/95 dark:bg-[#121215]/95 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.08] p-4 shadow-xl">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-black/[0.06] dark:bg-white/[0.10] text-[#0F172A] dark:text-[#F8FAFC]'
                      : 'text-[#64748B] dark:text-[#94A3B8]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-[#0F172A] dark:bg-[#F8FAFC] text-[#F8FAFC] dark:text-[#0A0A0C] px-4 py-3 text-sm font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/**
 * ============================================================================
 * 7. SECTION 1 - MAIN HERO (#home)
 * ============================================================================
 */
function HeroSection({ onNavigate, onExternalFallback }) {
  const { personal, heroPills } = PORTFOLIO_DATA;

  return (
    <section
      id="home"
      className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 px-4 sm:px-6 overflow-hidden"
    >
      <HeroCursorWrapper>
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8">
            {heroPills.map((pill, idx) => (
              <span
                key={pill}
                style={{ animationDelay: `${idx * 120}ms` }}
                className="animate-fadeUp inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-[#121215] border border-black/[0.08] dark:border-white/[0.08] px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#0F172A] dark:text-[#F8FAFC] shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                {pill}
              </span>
            ))}
          </div>

          <h1 className="font-jakarta text-4xl sm:text-6xl md:text-[64px] font-bold tracking-[-0.03em] leading-[1.12] text-[#0F172A] dark:text-[#F8FAFC] max-w-4xl">
            Hello! I&apos;m Kanwal Khan,
            <br className="hidden sm:block" /> I <SwappingTextDemo /> Modern Web Applications.
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-[#64748B] dark:text-[#94A3B8] font-normal">
            Full Stack &amp; Web Developer based in Karachi, Pakistan crafting clean,
            responsive, and high-performing digital solutions.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('projects');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0F172A] dark:bg-[#F8FAFC] text-[#F8FAFC] dark:text-[#0A0A0C] px-7 py-3.5 text-sm sm:text-base font-semibold shadow-md hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={personal.emailUrl}
              onClick={(e) => openExternalSafely(e, personal.emailUrl, onExternalFallback)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/80 dark:bg-[#121215]/80 backdrop-blur-md border border-black/[0.08] dark:border-white/[0.08] text-[#0F172A] dark:text-[#F8FAFC] px-7 py-3.5 text-sm sm:text-base font-medium shadow-sm hover:bg-white dark:hover:bg-[#18181C] hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Email Me</span>
            </a>
          </div>
        </div>
      </HeroCursorWrapper>
    </section>
  );
}

/**
 * ============================================================================
 * 8. SECTION 2 - ABOUT & MOTION GRID (#about)
 * ============================================================================
 */
function AboutSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });
  const { personal, education, distinctionBadges, coreStrengths, motionGridSkills } =
    PORTFOLIO_DATA;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6"
    >
      <div
        className={`mx-auto max-w-[1120px] transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            About &amp; Stack
          </span>
          <h2 className="mt-2 font-jakarta text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-[#0F172A] dark:text-[#F8FAFC]">
            Engineering Precision &amp; Academic Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-[#121215] border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-black/[0.06] dark:border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#64748B] dark:text-[#94A3B8]">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                  <span>{personal.location}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-3 py-1 text-xs font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Available for Opportunities
                </span>
              </div>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#0F172A]/90 dark:text-[#F8FAFC]/90">
                {personal.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {distinctionBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#FAFAFA] dark:bg-[#0A0A0C] border border-black/[0.08] dark:border-white/[0.08] px-3.5 py-1.5 text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC]"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-7 space-y-4 rounded-2xl bg-[#FAFAFA] dark:bg-[#0A0A0C] border border-black/[0.06] dark:border-white/[0.06] p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-xl bg-indigo-500/10 p-2 text-indigo-600 dark:text-indigo-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-jakarta text-sm sm:text-base font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                        {education.current.title}
                      </h3>
                      <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                        {education.current.institution} &bull; {education.current.status}
                      </span>
                    </div>
                    <ul className="mt-2.5 space-y-1.5 text-xs sm:text-[13px] text-[#64748B] dark:text-[#94A3B8]">
                      {education.current.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-2 text-xs sm:text-[13px]">
                  <span className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                    {education.previous.title} ({education.previous.status})
                  </span>
                  <span className="font-medium text-[#64748B] dark:text-[#94A3B8]">
                    {education.previous.score}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-black/[0.06] dark:border-white/[0.06]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">
                Core Strengths
              </span>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {coreStrengths.map((strength) => (
                  <span
                    key={strength}
                    className="rounded-full bg-black/[0.04] dark:bg-white/[0.06] px-3 py-1 text-xs font-medium text-[#0F172A] dark:text-[#F8FAFC]"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl bg-white dark:bg-[#121215] border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-jakarta text-lg font-bold tracking-[-0.02em] text-[#0F172A] dark:text-[#F8FAFC]">
                    Technical Stack
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8]">
                    Interactive Motion Grid
                  </p>
                </div>
                <span className="rounded-full bg-[#FAFAFA] dark:bg-[#0A0A0C] border border-black/[0.08] dark:border-white/[0.08] px-3 py-1 text-xs font-medium text-[#64748B] dark:text-[#94A3B8]">
                  12 Technologies
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {motionGridSkills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group rounded-2xl bg-[#FAFAFA] dark:bg-[#0A0A0C] border border-black/[0.08] dark:border-white/[0.08] p-3.5 flex flex-col items-start justify-between gap-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-md hover:border-indigo-500/30 cursor-default"
                    >
                      <div className="flex w-full items-center justify-between">
                        <div className="rounded-xl bg-white dark:bg-[#121215] border border-black/[0.06] dark:border-white/[0.06] p-2 shadow-2xs group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className={`w-4 h-4 ${skill.accent}`} />
                        </div>
                        <span className="text-[10px] font-medium text-[#64748B] dark:text-[#94A3B8] opacity-0 group-hover:opacity-100 transition-opacity">
                          {skill.category}
                        </span>
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-[#0F172A] dark:text-[#F8FAFC] leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#64748B] dark:text-[#94A3B8]">
              <span>MERN &amp; Modern Frontend</span>
              <span className="font-medium text-[#0F172A] dark:text-[#F8FAFC]">
                Production Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ============================================================================
 * 9. PROJECT VISUAL THUMBNAIL (Real local image + faithful visual fallback)
 * ============================================================================
 */
function ProjectVisualPreview({ project }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (!imgFailed && project.imageSrc) {
    return (
      <img
        src={project.imageSrc}
        alt={`${project.title} screenshot`}
        onError={() => setImgFailed(true)}
        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
      />
    );
  }

  return (
    <div
      className={`w-full h-full bg-gradient-to-br ${project.themeGradient} p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden select-none transition-transform duration-500 ease-out group-hover:scale-105`}
    >
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <span
          className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full truncate max-w-[200px] ${
            project.id === 'ah-clothing-hub'
              ? 'bg-black/10 text-stone-800'
              : 'bg-white/10 text-white/80'
          }`}
        >
          {project.liveUrl.replace('https://', '')}
        </span>
      </div>

      {project.id === 'eventsphere' && (
        <div className="my-auto pt-2 z-10 space-y-2.5">
          <div className="flex items-center justify-between text-white">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-indigo-300 font-semibold">
                Exhibitor Portal
              </div>
              <div className="text-sm sm:text-base font-bold">Available Exhibitions</div>
            </div>
            <span className="rounded-full bg-indigo-500/30 border border-indigo-400/30 px-2.5 py-0.5 text-[10px] text-indigo-200">
              3 Events Available
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { name: 'Tech Expo 2026', loc: 'PC Hotel', status: 'Upcoming' },
              { name: 'FutureTech AI', loc: 'Garden Karachi', status: 'Upcoming' },
              { name: 'NextGen Hackathon', loc: 'Defence Phase 8', status: 'Approved' },
            ].map((ev) => (
              <div
                key={ev.name}
                className="rounded-xl bg-white/[0.07] border border-white/10 p-2.5 text-white"
              >
                <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 mb-1">
                  {ev.status}
                </span>
                <div className="text-[11px] font-semibold truncate">{ev.name}</div>
                <div className="text-[9px] text-slate-300 truncate mt-0.5">{ev.loc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.id === 'sabaqhub-ai' && (
        <div className="my-auto pt-2 z-10 text-center space-y-2.5">
          <div className="text-white">
            <div className="text-sm sm:text-base font-bold">
              Ask anything academic,{' '}
              <span className="text-teal-300 italic font-medium">the effortless way</span>
            </div>
            <div className="mt-1.5 flex flex-wrap justify-center gap-1">
              {['Matric', 'O-Level', 'A-Level', 'Intermediate', 'University'].map((lvl, i) => (
                <span
                  key={lvl}
                  className={`text-[9px] px-2 py-0.5 rounded-full ${
                    i === 0
                      ? 'bg-emerald-500 text-slate-950 font-semibold'
                      : 'bg-white/10 text-slate-200'
                  }`}
                >
                  {lvl}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1.5 max-w-sm mx-auto">
            {['Physics', 'Chemistry', 'Math', 'Biology', 'English', 'Urdu', 'Computer', 'Islamiat'].map(
              (subj) => (
                <div
                  key={subj}
                  className="rounded-lg bg-white/[0.07] border border-white/10 py-1.5 px-1 text-[10px] text-slate-200 font-medium"
                >
                  {subj}
                </div>
              )
            )}
          </div>
        </div>
      )}

      {project.id === 'ah-clothing-hub' && (
        <div className="my-auto pt-2 z-10 grid grid-cols-12 gap-3 items-center">
          <div className="col-span-5 rounded-xl bg-white/85 border border-stone-300/70 p-2.5 shadow-sm flex flex-col justify-between h-full">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-bold uppercase tracking-wider bg-stone-900 text-white px-1.5 py-0.5 rounded">
                569 Straight
              </span>
              <span className="text-[9px] font-semibold text-emerald-800">COD Available</span>
            </div>
            <div className="my-2 flex items-center justify-center gap-1.5">
              <div className="w-9 h-12 rounded-md bg-stone-100 border border-stone-300 shadow-2xs flex flex-col items-center justify-center">
                <div className="w-4 h-1 bg-stone-300 rounded-full mb-1" />
                <div className="w-1 h-5 bg-stone-300 rounded-full" />
              </div>
              <div className="w-9 h-12 rounded-md bg-sky-800/85 border border-sky-900/40 shadow-2xs flex flex-col justify-between p-1">
                <span className="w-2.5 h-1.5 bg-red-600 rounded-xs self-end" />
                <div className="w-full h-0.5 bg-sky-300/40" />
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] text-stone-600 font-medium">
              <span>Men &amp; Women</span>
              <span className="text-rose-700 font-semibold">New Drop</span>
            </div>
          </div>

          <div className="col-span-7 rounded-xl bg-white/95 border border-stone-200 p-3 text-left shadow-sm">
            <div className="text-[9px] uppercase tracking-widest text-stone-500 font-semibold">
              AH CLOTHING HUB
            </div>
            <div className="text-xs sm:text-sm font-serif font-bold text-stone-900 leading-snug mt-0.5">
              ELEVATE YOUR EVERYDAY.{' '}
              <span className="text-stone-500 font-normal">STREETWEAR, REFINED.</span>
            </div>
            <span className="mt-2 inline-block rounded bg-emerald-300/80 text-emerald-950 text-[9px] font-bold px-2.5 py-1 uppercase tracking-wider">
              Explore The Latest
            </span>
          </div>
        </div>
      )}

      {project.id === 'velora' && (
        <div className="my-auto pt-2 z-10 grid grid-cols-12 gap-2 items-center px-1">
          <div className="col-span-7 text-left">
            <div className="text-[9px] uppercase tracking-[0.22em] text-amber-400/90 font-semibold">
              VELORA
            </div>
            <div className="mt-1 font-serif text-base sm:text-lg font-bold text-white leading-tight">
              A Symphony of
              <span className="block italic font-normal text-amber-300 text-lg sm:text-xl">
                Dark &amp; Gold
              </span>
            </div>
            <p className="mt-1 text-[10px] text-stone-300">
              Where luxury meets the perfect roast.
            </p>
            <div className="mt-2.5 flex items-center gap-1.5">
              <span className="px-2.5 py-1 bg-[#5a1f28] text-white text-[9px] font-semibold uppercase tracking-wider">
                View Menu
              </span>
              <span className="px-2.5 py-1 border border-white/35 text-white text-[9px] font-semibold uppercase tracking-wider">
                Explore Story
              </span>
            </div>
          </div>

          <div className="col-span-5 flex items-center justify-center relative">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-stone-900/90 border border-amber-500/25 shadow-2xl flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-stone-100 p-1 shadow-inner flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-700 via-amber-800 to-stone-900 flex items-center justify-center relative overflow-hidden">
                  <svg viewBox="0 0 64 64" className="w-11 h-11 text-amber-100/90" fill="currentColor">
                    <path d="M32 48C32 48 16 37 16 25C16 19.5 20.5 15 26 15C29.2 15 31.3 16.6 32 18.2C32.7 16.6 34.8 15 38 15C43.5 15 48 19.5 48 25C48 37 32 48 32 48Z" />
                  </svg>
                </div>
              </div>
              <div className="w-3.5 h-2 rounded-r-full bg-stone-200 -ml-0.5 shadow" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * ============================================================================
 * 10. SECTION 3 - PROJECTS & INTERACTIVE DETAIL MODAL (#projects)
 * ============================================================================
 */
function ProjectsSection({ onSelectProject }) {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.12 });
  const { projects } = PORTFOLIO_DATA;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6"
    >
      <div
        className={`mx-auto max-w-[1120px] transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              <Code2 className="w-3.5 h-3.5" />
              Selected Work
            </span>
            <h2 className="mt-2 font-jakarta text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-[#0F172A] dark:text-[#F8FAFC]">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm text-[#64748B] dark:text-[#94A3B8] max-w-md">
            Click any project card to inspect the full architecture, technology stack, and live deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(project);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.title}`}
              className="group rounded-3xl bg-white dark:bg-[#121215] border border-black/[0.08] dark:border-white/[0.08] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_18px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 flex flex-col"
            >
              <div className="aspect-[16/10] w-full overflow-hidden border-b border-black/[0.06] dark:border-white/[0.06]">
                <ProjectVisualPreview project={project} />
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${project.badgeColor}`}
                    >
                      {project.category}
                    </span>

                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FAFAFA] dark:bg-[#0A0A0C] border border-black/[0.08] dark:border-white/[0.08] text-[#0F172A] dark:text-[#F8FAFC] group-hover:bg-[#0F172A] group-hover:text-white dark:group-hover:bg-[#F8FAFC] dark:group-hover:text-[#0A0A0C] group-hover:rotate-45 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="mt-4 font-jakarta text-xl sm:text-2xl font-bold tracking-[-0.02em] text-[#0F172A] dark:text-[#F8FAFC]">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#64748B] dark:text-[#94A3B8] line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#FAFAFA] dark:bg-[#0A0A0C] border border-black/[0.06] dark:border-white/[0.06] px-2.5 py-0.5 text-[11px] font-medium text-[#64748B] dark:text-[#94A3B8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * ============================================================================
 * 10B. PROJECT DETAIL MODAL
 * ============================================================================
 */
function ProjectModal({ project, onClose, onExternalFallback }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
      />

      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#121215] border border-black/[0.1] dark:border-white/[0.1] shadow-2xl animate-modalIn">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 dark:bg-[#121215]/90 backdrop-blur-md border border-black/10 dark:border-white/10 text-[#0F172A] dark:text-[#F8FAFC] hover:scale-105 transition-transform shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="aspect-[16/10] w-full overflow-hidden border-b border-black/[0.08] dark:border-white/[0.08]">
          <ProjectVisualPreview project={project} />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${project.badgeColor}`}
            >
              {project.category}
            </span>
          </div>

          <h3
            id="modal-project-title"
            className="mt-3 font-jakarta text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#0F172A] dark:text-[#F8FAFC]"
          >
            {project.title}
          </h3>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748B] dark:text-[#94A3B8]">
            {project.detail}
          </p>

          <div className="mt-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">
              Technologies Used
            </span>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[#FAFAFA] dark:bg-[#0A0A0C] border border-black/[0.08] dark:border-white/[0.08] px-3.5 py-1.5 text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full px-5 py-2.5 text-sm font-medium text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC] transition-colors"
            >
              Close Preview
            </button>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => openExternalSafely(e, project.liveUrl, onExternalFallback)}
              className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] dark:bg-[#F8FAFC] text-[#F8FAFC] dark:text-[#0A0A0C] px-6 py-3 text-sm font-semibold shadow-md hover:opacity-90 active:scale-[0.98] transition-all"
            >
              <span>Visit Live Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ============================================================================
 * 11. SECTION 4 - CONTACT (#contact)
 * ============================================================================
 */
function ContactSection({ onExternalFallback }) {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.12 });
  const { personal } = PORTFOLIO_DATA;

  const [copiedKey, setCopiedKey] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitState, setSubmitState] = useState('idle');

  const handleCopy = async (key, value) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setSubmitState('sending');

    // Optional: Paste a free Web3Forms key for kik.3122003@mail.com for silent background delivery
    const WEB3FORMS_ACCESS_KEY = '';

    try {
      if (WEB3FORMS_ACCESS_KEY) {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `Portfolio Inquiry from ${formData.name}`,
            from_name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 650));
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:${personal.email}?subject=${subject}&body=${body}`;
        openExternalSafely(null, mailtoLink, onExternalFallback);
      }

      setSubmitState('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitState('idle'), 3500);
    } catch {
      setSubmitState('idle');
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6"
    >
      <div
        className={`mx-auto max-w-3xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="rounded-3xl bg-white dark:bg-[#121215] border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-10 md:p-12 shadow-[0_8px_36px_rgba(0,0,0,0.03)]">
          <div className="text-center max-w-xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              <Mail className="w-3.5 h-3.5" />
              Get In Touch
            </span>
            <h2 className="mt-2 font-jakarta text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-[#0F172A] dark:text-[#F8FAFC]">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8]">
              Reach out directly via WhatsApp or Email, or send a message using the form below.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center rounded-full bg-[#FAFAFA] dark:bg-[#0A0A0C] border border-black/[0.08] dark:border-white/[0.08] p-1 pl-4 gap-2">
              <a
                href={personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openExternalSafely(e, personal.whatsappUrl, onExternalFallback)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#0F172A] dark:text-[#F8FAFC] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{personal.whatsappLabel}</span>
              </a>
              <button
                type="button"
                onClick={() => handleCopy('whatsapp', personal.whatsappNumber)}
                aria-label="Copy WhatsApp number"
                title="Copy WhatsApp Number"
                className="inline-flex items-center gap-1 rounded-full bg-white dark:bg-[#121215] border border-black/[0.08] dark:border-white/[0.08] px-3 py-1.5 text-xs font-medium text-[#0F172A] dark:text-[#F8FAFC] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                {copiedKey === 'whatsapp' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#64748B] dark:text-[#94A3B8]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="inline-flex items-center rounded-full bg-[#FAFAFA] dark:bg-[#0A0A0C] border border-black/[0.08] dark:border-white/[0.08] p-1 pl-4 gap-2">
              <a
                href={personal.emailUrl}
                onClick={(e) => openExternalSafely(e, personal.emailUrl, onExternalFallback)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#0F172A] dark:text-[#F8FAFC] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>{personal.email}</span>
              </a>
              <button
                type="button"
                onClick={() => handleCopy('email', personal.email)}
                aria-label="Copy email address"
                title="Copy Email Address"
                className="inline-flex items-center gap-1 rounded-full bg-white dark:bg-[#121215] border border-black/[0.08] dark:border-white/[0.08] px-3 py-1.5 text-xs font-medium text-[#0F172A] dark:text-[#F8FAFC] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                {copiedKey === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#64748B] dark:text-[#94A3B8]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-1.5"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-2xl bg-[#FAFAFA] dark:bg-[#0A0A0C] border border-black/[0.08] dark:border-white/[0.08] px-4 py-3 text-sm text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#64748B]/60 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-1.5"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-2xl bg-[#FAFAFA] dark:bg-[#0A0A0C] border border-black/[0.08] dark:border-white/[0.08] px-4 py-3 text-sm text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#64748B]/60 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15 transition-all"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-1.5"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                placeholder="Tell me about your project, timeline, or collaboration idea..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-2xl bg-[#FAFAFA] dark:bg-[#0A0A0C] border border-black/[0.08] dark:border-white/[0.08] px-4 py-3 text-sm text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#64748B]/60 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15 transition-all resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col items-center gap-2">
              <button
                type="submit"
                disabled={submitState === 'sending'}
                className={`w-full sm:w-auto min-w-[210px] inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold shadow-md transition-all duration-300 ${
                  submitState === 'sent'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#0F172A] dark:bg-[#F8FAFC] text-[#F8FAFC] dark:text-[#0A0A0C] hover:opacity-90 active:scale-[0.98]'
                } disabled:opacity-70`}
              >
                {submitState === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
                {submitState === 'sending' && (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                )}
                {submitState === 'sent' && (
                  <>
                    <span>Message Sent ✓</span>
                  </>
                )}
              </button>
              <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                Delivers directly to {personal.email}
              </p>
            </div>
          </form>
        </div>

        <footer className="mt-12 text-center text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8]">
          <p>
            &copy; {new Date().getFullYear()} {personal.fullName} &mdash; {personal.role}.{' '}
            {personal.location}.
          </p>
        </footer>
      </div>
    </section>
  );
}

/**
 * ============================================================================
 * 12. MAIN SPA ROOT COMPONENT (ThemeProvider + Smooth Section Observer)
 * ============================================================================
 */
export default function App() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [sandboxToastUrl, setSandboxToastUrl] = useState(null);

  const handleExternalFallback = useCallback((url) => {
    const cleanText = url.replace(/^mailto:/, '');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(cleanText).catch(() => {});
    }
    setSandboxToastUrl(cleanText);
    setTimeout(() => setSandboxToastUrl(null), 4000);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const fontLinkId = 'kanwal-portfolio-fonts';
    if (!document.getElementById(fontLinkId)) {
      const link = document.createElement('link');
      link.id = fontLinkId;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 240;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <style>{`
        html {
          scroll-behavior: smooth;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .font-jakarta {
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
        }
        @keyframes swapCharUp {
          0% {
            opacity: 0;
            transform: translateY(65%);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0%);
            filter: blur(0px);
          }
        }
        .animate-swapCharUp {
          animation: swapCharUp 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out both;
        }
        @keyframes modalIn {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modalIn {
          animation: modalIn 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-swapCharUp,
          .animate-fadeUp,
          .animate-fadeIn,
          .animate-modalIn {
            animation: none !important;
          }
        }
      `}</style>

      <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0C] text-[#0F172A] dark:text-[#F8FAFC] transition-colors duration-300 selection:bg-indigo-500/20 selection:text-indigo-700 dark:selection:text-indigo-300">
        <Navbar
          activeSection={activeSection}
          theme={theme}
          onToggleTheme={toggleTheme}
          onNavigate={scrollToSection}
        />

        <main>
          <HeroSection onNavigate={scrollToSection} onExternalFallback={handleExternalFallback} />
          <AboutSection />
          <ProjectsSection onSelectProject={setSelectedProject} />
          <ContactSection onExternalFallback={handleExternalFallback} />
        </main>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onExternalFallback={handleExternalFallback}
        />

        {sandboxToastUrl && (
          <div className="fixed bottom-5 right-5 z-[60] max-w-sm rounded-2xl bg-[#0F172A] dark:bg-[#F8FAFC] text-[#F8FAFC] dark:text-[#0A0A0C] px-4 py-3 text-xs shadow-2xl border border-white/15 dark:border-black/15 flex items-center gap-2.5 animate-fadeIn">
            <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
            <div className="truncate">
              <div className="font-semibold">Copied link (Preview sandbox blocks popups):</div>
              <div className="opacity-80 truncate">{sandboxToastUrl}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
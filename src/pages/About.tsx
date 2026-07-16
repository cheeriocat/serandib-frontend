import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const AboutCounter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    let frameId: number;
    let startTime: number | null = null;
    const duration = 1200;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        frameId = requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [target]);

  return (
    <h2 ref={ref} className="font-display-lg text-4xl sm:text-5xl font-bold text-primary">
      {count}{suffix}
    </h2>
  );
};

export const About: React.FC = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-surface-container-lowest py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        <div className="relative z-10 px-6 max-w-[1280px] mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 border border-primary/20 rounded-full text-primary font-bold text-xs uppercase tracking-widest bg-primary/5">
              Global Reach, Local Depth
            </span>
            <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-on-surface">
              From Global Markets to <span className="text-gradient">Local Leadership</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              For over two decades, Serandib Technologies has been the bridge between global innovation and Sri Lanka's technological evolution.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#pillars" 
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-lg active:scale-95"
              >
                Explore Our Journey
              </a>
              <Link 
                to="/contact" 
                className="border border-secondary-container text-secondary-container px-8 py-4 rounded-full font-bold text-sm hover:bg-secondary/5 transition-all active:scale-95"
              >
                Connect with Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Metrics */}
      <section className="py-20 bg-white border-y border-outline-variant/30">
        <div className="px-6 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-10 rounded-xl text-center space-y-4 shadow-sm border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>history</span>
              <AboutCounter target={20} suffix="+" />
              <p className="font-label-sm text-xs text-secondary font-bold uppercase tracking-widest">Years of Excellence</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">A legacy of reliability and continuous growth in the tech ecosystem.</p>
            </div>
            <div className="glass-panel p-10 rounded-xl text-center space-y-4 shadow-sm border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <AboutCounter target={28} suffix="+" />
              <p className="font-label-sm text-xs text-secondary font-bold uppercase tracking-widest">Locations Nationwide</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">Strategic presence ensuring unparalleled accessibility across the island.</p>
            </div>
            <div className="glass-panel p-10 rounded-xl text-center space-y-4 shadow-sm border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>devices</span>
              <AboutCounter target={800} suffix="k+" />
              <p className="font-label-sm text-xs text-secondary font-bold uppercase tracking-widest">Devices Sold</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">Empowering nearly a million users with cutting-edge hardware solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section: Bento Grid */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto bg-white" id="pillars">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-lg text-3xl font-bold text-on-surface">Core Pillars of Expertise</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 glass-panel p-8 rounded-xl flex flex-col justify-end relative overflow-hidden group min-h-[350px]">
            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
              <img 
                alt="International trading and logistics terminal" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8NSzkQJtPg6SccLCHyqaxIgV2AaW0vXpj9CWS9EkRcC7badrHvla2MyzAuUD9XOBDOyXNMbNix2pYwPZt-DAx0i-zR0fg65lPiOjFbqOqUFHEtSxmIpHCn3hQqZc5HP--EY7xKIQmyD2LgtJGe9PzwsuC2R3wbPlWbkPbe0IHqbHLax-0FXdnHM2gGgtn1oWWMMg_82D8RzqYDlz76BSA8WAenV8dOFYRbkg1HmJALPY3oC3vrOnG"
              />
            </div>
            <div className="relative z-10 bg-white/95 p-6 rounded-lg border border-primary/10 backdrop-blur-sm shadow-md">
              <h3 className="font-headline-md text-xl font-bold text-primary mb-2">International Trading</h3>
              <p className="text-sm text-on-surface-variant max-w-md leading-relaxed">
                Our global sourcing network brings the world's most innovative technology brands directly to the local market with streamlined efficiency.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-4 glass-panel p-8 rounded-xl flex flex-col items-center justify-center text-center space-y-4 min-h-[350px]">
            <div className="w-16 h-16 rounded-full bg-secondary-container/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
            </div>
            <h3 className="font-headline-md text-xl font-bold text-on-surface">Customer Service Excellence</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Dedicated support channels and a customer-first philosophy that defines every interaction at our 27 nationwide arcades.
            </p>
          </div>
          
          <div className="md:col-span-4 glass-panel p-8 rounded-xl flex flex-col items-center justify-center text-center space-y-4 min-h-[350px]">
            <div className="w-16 h-16 rounded-full bg-secondary-container/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
            </div>
            <h3 className="font-headline-md text-xl font-bold text-on-surface">Nationwide Distribution</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              A robust logistics and warehouse infrastructure connecting remote municipalities to the central digital economy.
            </p>
          </div>
          
          <div className="md:col-span-8 glass-panel p-8 rounded-xl flex items-center gap-8 relative overflow-hidden bg-surface-container-low min-h-[350px]">
            <div className="flex-1 space-y-4 z-10">
              <h3 className="font-headline-md text-xl font-bold text-primary">Strategic Partnership</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Our alliance with <strong>Dialog Axiata</strong> amplifies our reach, creating an integrated ecosystem for national telecom expansion and customer management.
              </p>
            </div>
            <div className="hidden md:block w-48 h-48 animate-pulse opacity-10 absolute right-8 bottom-0">
              <span className="material-symbols-outlined text-primary text-[180px]">handshake</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-surface-container-low relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#005994 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="px-6 max-w-[1280px] mx-auto relative z-10 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-headline-lg text-3xl font-bold text-on-surface">Our Vision</h2>
            <p className="text-lg md:text-xl text-on-surface-variant italic leading-relaxed font-light">
              "To be the undisputed catalyst of Sri Lanka's digital renaissance, empowering every citizen and enterprise through seamless access to the world's finest technological innovations."
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 border-l-4 border-secondary bg-white shadow-sm rounded-r-xl">
              <h4 className="font-headline-md text-xl font-bold text-on-surface mb-4">The Mission</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                We are committed to building a future-proof infrastructure that democratizes technology. By combining ethical trading, technical mastery, and a relentless focus on the end-user, we transform complex innovations into accessible tools for growth.
              </p>
            </div>
            <div className="p-8 border-l-4 border-primary bg-white shadow-sm rounded-r-xl">
              <h4 className="font-headline-md text-xl font-bold text-on-surface mb-4">Our Values</h4>
              <ul className="space-y-3 text-sm text-on-surface-variant font-medium">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary font-bold text-lg">check_circle</span>
                  Integrity in Every Transaction
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary font-bold text-lg">check_circle</span>
                  Innovation-Led Problem Solving
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary font-bold text-lg">check_circle</span>
                  Community-Centric Growth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Roots, Local Impact */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto bg-white">
        <div className="glass-panel rounded-2xl p-8 md:p-12 overflow-hidden relative min-h-[400px] flex flex-col lg:flex-row items-center gap-12 bg-surface-container-lowest border border-outline-variant/30">
          <div className="flex-1 space-y-6">
            <h2 className="font-headline-lg text-3xl font-bold text-on-surface">Global Roots, Local Impact</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Serandib Technologies operates with a global perspective, maintaining partnerships with tier-one tech giants across continents while keeping our heartbeat firmly in Sri Lanka.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-primary text-on-primary flex items-center justify-center font-bold text-xs shadow-md">HK</div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-primary text-on-primary flex items-center justify-center font-bold text-xs shadow-md">SG</div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs shadow-md">DXB</div>
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-on-surface-variant">Global Hub Connectivity</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-64 lg:h-[350px] bg-surface-container rounded-xl relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 opacity-80">
              <img 
                alt="Digital world map connecting Sri Lanka to global hubs" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXKbgy6GqlqC27jN1rPV_Mzm2r01HtAQvMWZTdbBxnzy5EixRlgJsZRK0xwrY_Y4fLrDyZ6Hh-JOmPmfc7a0T3sO2YH3uVrOvAGWt_bLOZ3iMw5_6nzQW_pai-MZFgxifu0CZYYAScfUhGmi0us4HmgQzP_N4YqpOkhodC-sWG2T2AT3sVAQP88d9fyTQTwFtu6kt9TbUUW5B_az93lChWa31tN0yX4YEfnmwBJUhBj7HOCBIwyG_v"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg shadow-sm border border-outline-variant/30">
              <span className="w-3 h-3 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-on-surface">Headquarters: Colombo, Sri Lanka</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

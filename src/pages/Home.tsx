import React, { useState, useEffect, useRef } from 'react';
import { HeroShader } from '../components/HeroShader';
import { Link } from 'react-router-dom';

// Animated Counter Component for premium feel
const AnimatedCounter: React.FC<{ target: number; prefix?: string; suffix?: string; isRange?: boolean; rangeText?: string }> = ({ 
  target, 
  prefix = "", 
  suffix = "", 
  isRange = false,
  rangeText = "" 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let frameId: number;
    let startTime: number | null = null;
    const duration = 1500; // 1.5 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * target);
      setCount(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    observer = new IntersectionObserver((entries) => {
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
    <div ref={ref} className="font-headline-lg text-primary text-5xl font-bold tracking-tight">
      {isRange ? rangeText : `${prefix}${count}${suffix}`}
    </div>
  );
};

export const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArcade, setActiveArcade] = useState('Kohuwala');

  // Dialog Arcades Mock Data for Finder
  const arcades = [
    { name: 'Kohuwala Arcade', address: '12-6/1 Sunethra Devi Road, Kohuwala', hours: 'Open • Closes 6PM', city: 'Kohuwala' },
    { name: 'Nugegoda Arcade', address: 'High Level Road, Nugegoda', hours: 'Open • Closes 5:30PM', city: 'Nugegoda' },
    { name: 'Galle Arcade', address: 'Wackwella Road, Galle', hours: 'Open • Closes 6PM', city: 'Galle' },
    { name: 'Jaffna Arcade', address: 'Hospital Road, Jaffna', hours: 'Open • Closes 5PM', city: 'Jaffna' },
    { name: 'Kandy Arcade', address: 'Dalada Veediya, Kandy', hours: 'Open • Closes 5:30PM', city: 'Kandy' },
  ];

  const filteredArcades = arcades.filter(arcade => 
    arcade.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    arcade.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-surface-container-low">
        <HeroShader />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl text-on-surface mb-6 leading-tight">
            Connect. <span className="text-secondary-container">Inspire.</span> Lead.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
            Empowering intelligence through seamless connectivity and collaboration. We bridge the gap between innovation and impact across the Asian technological landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#services" 
              className="px-8 py-4 bg-primary text-on-primary font-bold rounded-lg shadow-lg hover:bg-secondary transition-all active:scale-95"
            >
              Explore Our Services
            </a>
            <Link 
              to="/partners" 
              className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-all active:scale-95 bg-white/50 backdrop-blur-sm"
            >
              Partner With Us
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <span className="material-symbols-outlined text-secondary text-4xl font-bold">
            keyboard_double_arrow_down
          </span>
        </div>
      </section>

      {/* About/Stats Bar */}
      <section className="bg-surface py-12 border-y border-outline-variant/30 shadow-inner">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <AnimatedCounter target={2012} suffix="" />
            <div className="font-label-sm text-xs uppercase tracking-widest text-on-surface-variant group-hover:text-secondary transition-colors mt-2">Founded</div>
          </div>
          <div className="text-center group">
            <AnimatedCounter target={500} isRange rangeText="201–500" />
            <div className="font-label-sm text-xs uppercase tracking-widest text-on-surface-variant group-hover:text-secondary transition-colors mt-2">Employees</div>
          </div>
          <div className="text-center group">
            <AnimatedCounter target={27} suffix="" />
            <div className="font-label-sm text-xs uppercase tracking-widest text-on-surface-variant group-hover:text-secondary transition-colors mt-2">Dialog Arcades</div>
          </div>
          <div className="text-center group">
            <AnimatedCounter target={14} prefix="" suffix="M+" />
            <div className="font-label-sm text-xs uppercase tracking-widest text-on-surface-variant group-hover:text-secondary transition-colors mt-2">Subscribers Served</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background" id="services">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-4 uppercase tracking-wide">Our Core Pillars</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bento Layout Service Cards */}
            <div className="bg-surface-container-low p-8 rounded-xl transition-all duration-300 md:col-span-2 border border-outline-variant/30 hover:border-primary/50 group shadow-sm flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-5xl text-primary mb-6 group-hover:text-secondary transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
                <h3 className="font-headline-lg text-2xl font-bold text-on-surface mb-4">Dialog National Sales Partnership</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  As the primary distribution and sales partner for Dialog Axiata in the Northern Province, we manage a vast retail and dealer network. We ensure high-performance connectivity solutions reach every corner of the region with absolute service excellence and infrastructure stability.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-full font-bold">Primary Partner</span>
                <span className="px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-full font-bold">Exclusive Northern Sales</span>
                <span className="px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-full font-bold">Nationwide Scale</span>
              </div>
            </div>
            
            <div className="bg-surface-container-low p-8 rounded-xl transition-all duration-300 border border-outline-variant/30 hover:border-primary/50 group shadow-sm">
              <span className="material-symbols-outlined text-5xl text-primary mb-6 group-hover:text-secondary transition-colors">storefront</span>
              <h3 className="font-headline-lg text-2xl font-bold text-on-surface mb-4">Dialog Arcades</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Directly managing 27 premier customer experience centers across Sri Lanka, providing specialized telco solutions, corporate connectivity, and premium smart devices.
              </p>
            </div>
            
            <div className="bg-surface-container-low p-8 rounded-xl transition-all duration-300 border border-outline-variant/30 hover:border-primary/50 group shadow-sm">
              <span className="material-symbols-outlined text-5xl text-primary mb-6 group-hover:text-secondary transition-colors">co-working</span>
              <h3 className="font-headline-lg text-2xl font-bold text-on-surface mb-4">Co-working Spaces (Joyroom)</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Modern, high-tech environments designed to foster local startup talent, digital nomads, and community collaboration in key urban centers.
              </p>
            </div>
            
            <div className="bg-surface-container-low p-8 rounded-xl transition-all duration-300 border border-outline-variant/30 hover:border-primary/50 group shadow-sm">
              <span className="material-symbols-outlined text-5xl text-primary mb-6 group-hover:text-secondary transition-colors">router</span>
              <h3 className="font-headline-lg text-2xl font-bold text-on-surface mb-4">High-Speed Internet (Zigo)</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Deploying enterprise-grade fiber optic and next-gen mobile connections to guarantee business continuity for multinational firms.
              </p>
            </div>
            
            <div className="bg-surface-container-low p-8 rounded-xl transition-all duration-300 border border-outline-variant/30 hover:border-primary/50 group shadow-sm">
              <span className="material-symbols-outlined text-5xl text-primary mb-6 group-hover:text-secondary transition-colors">public</span>
              <h3 className="font-headline-lg text-2xl font-bold text-on-surface mb-4">International Trading</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Global hardware procurement and smart logistics partnerships that seamlessly deliver world-class hardware solutions to local consumers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Highlight */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative bg-surface-container-lowest p-10 md:p-12 rounded-2xl border border-outline-variant/30 border-l-4 border-l-primary shadow-lg">
              <div className="h-20 w-48 mb-8 bg-surface-container/50 rounded flex items-center justify-center p-4">
                <img 
                  alt="Dialog Axiata logo" 
                  className="h-10 object-contain" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6HPmTqTEVeKQCFlLsZ2iejjmOeYSwEX9wAl_LwbSnk-5_uvRoP_g_xAIwpD0CV7Jcz7S5v0ZG-shvAoS6yO-hPOEdxjB2c9AHI-zGGdAhuUDZHQHDs8WzUUVf1uw-W6pGTClY2tsSOBVowaFIDz9xA7xJqks9AM1QBbjptdEOR3LVkhnys1VxCQLpNuAwJIGv63axmHsIalkZ-HpYR8lRv2n3qn15NPG0BAbbC-wsQoW0qwVt4MyE"
                />
              </div>
              <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-6">A Legacy of Collaboration</h2>
              <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
                Serandib Technologies stands as a cornerstone in the Dialog Axiata ecosystem. Our partnership is built on over a decade of shared vision—to transform Sri Lanka's digital infrastructure.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Through our dedicated management of National Sales and customer-centric Arcades, we have consistently outperformed benchmarks, ensuring that the excellence of Dialog is delivered directly to millions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 rounded-xl overflow-hidden shadow-xl border-2 border-primary/10 hover:scale-105 transition-transform duration-300">
              <img 
                alt="Modern corporate office" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBik_CFxv482_Ry0c7cibH9HvFudVzg4vs0zOG-oqpKzDwQZYIkv0LW20smOWF7g4jBQRYSp0hrQXVZycS08Y1bNFLvXlGKVgp1PWZuIllx4h4ZIgVUhG1l8f6O9EOKGnOAwdnryUht-sbxC3ZTb9w1rsGqX9tj3rqXpPuTnuLvOw9bD73umB_YH5aUmR51PzGdBqtjngKkseNMDwQLWHQWTWtMhUR1lkpxLEtzbP1qaGyv81P6HlX_"
              />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-xl mt-8 border-2 border-secondary/10 hover:scale-105 transition-transform duration-300">
              <img 
                alt="Fiber optic connectivity" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeDqnM-H5SHRNsAX5YqeescWtFjYBJqpL2IqEfTcYC7aryNeq7W1SzHBKFtLRyMpp4KBnLOFObyg5W9zpXOJy48JTZcRSegoZvvP1L3t2xmFWh0pFZTpvQDq0jj5TMjU79sAOp-SnV-ZWd2bgxAGWQBI__4Oq09xbAFdvuIZzHdReZfFUAX_9rRAM1vJOJmScyNG2ZQTMSfbosi26_h8N__Cqn2SXINmK7Jw2oP5SmIrJcSGIn9nco"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Finder Section */}
      <section className="py-24 bg-background" id="locations">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-2 uppercase tracking-wide">Service Network</h2>
              <p className="text-on-surface-variant">Find an authorized Dialog Arcade near you.</p>
            </div>
            <div className="relative w-full md:w-96">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary font-bold">search</span>
              <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface-container border border-outline-variant text-on-surface px-12 py-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/50" 
                placeholder="Enter city or district..." 
                type="text"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-auto lg:h-[550px]">
            {/* Interactive map illustration */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-outline-variant bg-surface-container relative shadow-md h-[300px] lg:h-full">
              <img 
                alt="Service locations map" 
                className="w-full h-full object-cover opacity-85 grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv_Gu33NjvCJ1m8zLM49Bvcw1csKW-dXbgvZ-HMRZpa8X9MI4_fs9JDqOXnLbGYX-lbyy_VbJShJiTUC4I2k18pctD6EuJ1-a2rSjfkY0KOoBvvSifNGbciva1GQlLAe1BETvvRm8L3k4SU2sxMuVntPUbmWUwU0bKUDK0Gavf2Q9arj66DSh1_BAYqaDqaLfjM4KUgTXhzSrky-6mGjh9ks41PsDnkoggGAxFDQmeacYMMLfJ5GR1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent pointer-events-none"></div>
              
              {/* Map location pinpoint markers */}
              <div className="absolute top-1/2 left-[48%] animate-ping w-4 h-4 bg-secondary rounded-full" />
              <div className="absolute top-1/2 left-[48%] w-3 h-3 bg-secondary rounded-full border border-white" />
              
              <div className="absolute top-[42%] left-[45%] w-3 h-3 bg-primary rounded-full border border-white" />
              <div className="absolute top-[68%] left-[51%] w-3 h-3 bg-primary rounded-full border border-white" />
              <div className="absolute top-[22%] left-[47%] w-3 h-3 bg-primary rounded-full border border-white" />

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow border border-outline-variant/30 max-w-xs">
                <p className="text-xs uppercase font-bold text-secondary">Active Selection</p>
                <h4 className="font-bold text-on-surface">{activeArcade} Arcade</h4>
                <p className="text-xs text-on-surface-variant mt-1">Providing dedicated telecom support and smart device solutions.</p>
              </div>
            </div>
            
            {/* List panel */}
            <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar max-h-[400px] lg:max-h-full">
              {filteredArcades.length > 0 ? (
                filteredArcades.map((arcade) => (
                  <div 
                    key={arcade.name}
                    onClick={() => setActiveArcade(arcade.city)}
                    className={`p-6 rounded-xl transition-all cursor-pointer border-l-4 shadow-sm flex flex-col justify-between ${
                      activeArcade === arcade.city 
                        ? 'border-l-secondary bg-surface-container-lowest scale-[1.02] shadow-md border-y border-r border-outline-variant/30' 
                        : 'border-l-primary bg-white border border-outline-variant/30 hover:border-l-secondary hover:scale-[1.01]'
                    }`}
                  >
                    <div>
                      <h4 className="font-headline-lg text-lg font-bold text-on-surface mb-1">{arcade.name}</h4>
                      <p className="text-sm text-on-surface-variant">{arcade.address}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-primary">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <span className="text-xs uppercase font-bold">{arcade.hours}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center p-12 bg-white rounded-xl border border-outline-variant/30 text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl block mb-2">search_off</span>
                  No locations found.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-24 bg-surface-container-low" id="careers">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-surface-container-lowest rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-outline-variant/30 shadow-xl">
            <div className="flex-1">
              <span className="inline-block px-4 py-1 bg-secondary-container/10 text-secondary rounded-full text-xs font-bold uppercase tracking-widest mb-6">Hiring Now</span>
              <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-6">HR Assistant &amp; Receptionist</h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                We are seeking a versatile and professional individual to join our front-of-house team. This dual-role requires exceptional communication skills and a passion for supporting our human capital.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-on-surface font-medium">
                  <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                  Manage front-desk operations and visitor experience
                </li>
                <li className="flex items-center gap-3 text-on-surface font-medium">
                  <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                  Support recruitment cycles and document management
                </li>
                <li className="flex items-center gap-3 text-on-surface font-medium">
                  <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                  Coordinate internal communications and staff welfare
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="px-10 py-4 bg-primary text-on-primary font-bold rounded-lg hover:bg-secondary transition-all shadow-xl shadow-primary/20 inline-block active:scale-95"
              >
                Apply Now
              </Link>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/3 aspect-square rounded-2xl overflow-hidden bg-surface p-2 border border-outline-variant shadow-inner">
              <img 
                alt="Professional office reception" 
                className="w-full h-full object-cover rounded-xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9UU92jcGaoBDFjjfV4i1XqKca5P_sXdCGGzI7mXFgUtvVBCLdZCCTUnPzBW4V57znwABktgux_yGKuLbyRhKzcDdBDlmUsWZc0M7r12yfZeP7uT-O9ZR3DLQdxUXpniMxw0TzgtC-KoGEGHpjUnSqln1qK5kBi2hsyP-eUIfr4QSZOr934mtvf2Soqgnou37s5fMCGWGvGnhvDzTJ6HSPqD-KAO_ktjaV4etMWgjAarNHc5lyHzjs"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

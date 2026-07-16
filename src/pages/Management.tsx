import React from 'react';
import { Link } from 'react-router-dom';

interface Director {
  name: string;
  role: string;
  description: string;
  imgUrl: string;
  email: string;
  linkedin: string;
}

export const Management: React.FC = () => {
  const directors: Director[] = [
    {
      name: 'Keshan Fernando',
      role: 'Director',
      description: 'Keshan is a visionary leader dedicated to bridging global innovation with local potential. His strategic approach focuses on identifying high-impact opportunities that catalyze digital transformation across Sri Lanka\'s core industries.',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD46TX_fCBW3CjkeIcLLqIWWEWHEvA8FyjX1P82-kH0_lU61FnoP5Nj2Q7KnyIcLNADNXF-Bg1SFKyp6gS4RRSOI7z_vCXoUkmHKTOpvHrzS1nWVJUTd3sX9gpVmPW35KUQ5e_X30k-nimnjrgVWHFwqNKGhqL3MMD0rrYwiYv8kTCST9hTwqCqh8HG_2uMY41e5QmsBgXiveqhMVkYHkwTMNfcxe-7Bn7CBMPga49XcTA7W3iXS5oP',
      email: 'mailto:keshan.f@serandibtech.com',
      linkedin: '#'
    },
    {
      name: 'Nishad Fernando',
      role: 'Director',
      description: 'Nishad brings deep expertise in operational excellence and market alignment. He is passionate about meeting local demand with world-class solutions, ensuring Serandib Technologies remains a trusted partner for global brands.',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApdf27HZKWBMYuEk1I3ZV6Oviidx0CjiRsXGNK0dhgTyG5e3FYlPOgZxDjYUOJFdP9wcqJJpRjqIJ9QkVO9w9oWZDLpyICclcdYBQJv-rqT9avfkRwgyKaLz9r9RXY_p-XyLvReYosqRFztelUOC3X3RPrCj8_a0-YatDt4O1aiB0pW3eaoOSnDBIrMZ5vyP-yfpxV4x_HYpwyNuHLdfHt_r04HDvSBd2NUnxiBy353wXCKTIXQv0m',
      email: 'mailto:nishad.f@serandibtech.com',
      linkedin: '#'
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-16 pb-20 overflow-hidden bg-surface-container-lowest">
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-bold text-xs uppercase tracking-widest">
              CORPORATE STEWARDSHIP
            </div>
            <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl font-extrabold text-on-surface leading-tight">
              Leadership &amp; <span className="text-gradient">Management</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              At Serandib Technologies, we serve as the strategic bridge between world-class global brands and the vibrant, high-demand economy of Sri Lanka. Our leadership team is dedicated to fostering innovation and scaling excellence across regional borders.
            </p>
            <div className="flex gap-4">
              <a 
                href="#directors" 
                className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity active:scale-95 shadow-lg"
              >
                Meet the Team
              </a>
              <a 
                href="#philosophy" 
                className="border border-secondary text-secondary px-8 py-4 rounded-lg font-bold text-sm hover:bg-secondary-container/10 transition-colors active:scale-95"
              >
                Core Values
              </a>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="aspect-square rounded-full border-2 border-dashed border-primary/20 animate-[spin_60s_linear_infinite] absolute inset-0 -m-8"></div>
            <div className="glass-card rounded-full p-12 aspect-square flex items-center justify-center relative overflow-hidden group border-none bg-primary/5 max-w-[320px] mx-auto">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
              <span className="material-symbols-outlined text-[120px] text-primary opacity-30 select-none">corporate_fare</span>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-24 bg-surface" id="directors">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="font-headline-lg text-3xl font-bold text-on-surface">Board of <span className="text-gradient">Directors</span></h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Providing the vision and governance that drives our mission forward in South Asia's technology landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {directors.map((director) => (
              <div key={director.name} className="glass-card p-10 rounded-xl flex flex-col items-center text-center bg-white border border-outline-variant/30">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-surface-container-low shadow-lg bg-surface relative group">
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-750 scale-105" 
                    alt={director.name} 
                    src={director.imgUrl}
                  />
                </div>
                <h3 className="font-headline-lg text-2xl font-bold text-on-surface mb-2">{director.name}</h3>
                <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-6">{director.role}</p>
                <p className="text-sm text-on-surface-variant leading-relaxed font-body-md flex-grow">
                  {director.description}
                </p>
                <div className="mt-8 flex gap-4">
                  <a className="text-on-surface-variant hover:text-primary transition-colors p-2" href={director.linkedin} target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-xl">link</span>
                  </a>
                  <a className="text-on-surface-variant hover:text-primary transition-colors p-2" href={director.email}>
                    <span className="material-symbols-outlined text-xl">mail</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy Section */}
      <section className="py-24 relative overflow-hidden bg-surface-container-low" id="philosophy">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-4">Our Leadership <span className="text-gradient">Philosophy</span></h2>
            <p className="text-on-surface-variant max-w-xl leading-relaxed">
              We believe that leadership is more than just management—it is the art of creating sustainable value through collective brilliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white border border-outline-variant/30 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined">handshake</span>
                </div>
                <h4 className="font-headline-lg text-lg font-bold text-on-surface">Trusted Partnerships</h4>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                We build enduring relationships based on transparency and integrity. By aligning our interests with those of our global partners, we create an ecosystem of mutual growth and long-term success.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white border border-outline-variant/30 group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined">settings_suggest</span>
                </div>
                <h4 className="font-headline-lg text-lg font-bold text-on-surface">Operational Excellence</h4>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Precision in execution is our hallmark. We leverage cutting-edge technology and lean methodologies to ensure that every project we undertake is delivered with the highest standards of quality.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white border border-outline-variant/30 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined">insights</span>
                </div>
                <h4 className="font-headline-lg text-lg font-bold text-on-surface">Strategic Vision</h4>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                We don't just react to trends; we anticipate them. Our leadership team maintains a forward-looking perspective, constantly exploring new frontiers to keep our partners ahead of the curve.
              </p>
            </div>
          </div>

          {/* Bento Style Impact Section */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 glass-card p-10 rounded-xl flex flex-col justify-between bg-white border border-outline-variant/30">
              <div>
                <span className="text-primary font-bold text-5xl">15+</span>
                <p className="text-secondary font-bold text-xs uppercase tracking-widest mt-1">Global Brand Partners</p>
              </div>
              <p className="mt-8 text-on-surface-variant italic border-l-2 border-secondary pl-6 leading-relaxed text-sm">
                "Connecting the world's most innovative technologies with Sri Lanka's growing demand is not just our business—it is our purpose."
              </p>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col items-center justify-center text-center bg-white border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary text-5xl mb-4">public</span>
              <h5 className="text-on-surface font-bold text-base">Global Reach</h5>
              <p className="text-on-surface-variant text-xs mt-1">Expanding networks across three continents.</p>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col items-center justify-center text-center bg-white border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">verified</span>
              <h5 className="text-on-surface font-bold text-base">ISO Certified</h5>
              <p className="text-on-surface-variant text-xs mt-1">Maintained standards of highest quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-surface-container-low p-12 md:p-16 rounded-3xl relative overflow-hidden border border-outline-variant/30 shadow-md">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <span className="material-symbols-outlined text-[180px] text-primary">diversity_3</span>
            </div>
            <div className="relative z-10 max-w-2xl space-y-6">
              <h2 className="font-headline-lg text-3xl font-bold text-on-surface leading-tight">Innovate with Us</h2>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                Ready to expand your brand's footprint in the Sri Lankan market? Our leadership team is eager to discuss how we can build a strategic bridge together.
              </p>
              <div className="flex flex-wrap gap-6 pt-2">
                <Link 
                  to="/partners" 
                  className="bg-primary text-on-primary px-8 py-3.5 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
                >
                  Partner with Serandib
                </Link>
                <Link 
                  to="/" 
                  className="text-secondary flex items-center gap-2 font-bold text-sm group"
                >
                  Learn about our services 
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform text-sm font-bold">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

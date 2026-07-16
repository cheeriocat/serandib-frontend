import React, { useState } from 'react';

interface EventItem {
  id: number;
  title: string;
  date: string;
  category: 'Innovation' | 'Corporate';
  description: string;
  icon: string;
  color: string;
  linkText: string;
}

export const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Innovation' | 'Corporate'>('All');

  const events: EventItem[] = [
    {
      id: 1,
      title: 'Serandib Cloud Launch',
      date: 'May 12, 2025',
      category: 'Innovation',
      description: 'Unveiling our high-performance edge computing infrastructure designed for regional scalability.',
      icon: 'rocket_launch',
      color: 'bg-primary-container/20 text-primary',
      linkText: 'Learn more'
    },
    {
      id: 2,
      title: 'Tech Talent Summit',
      date: 'April 05, 2025',
      category: 'Innovation',
      description: 'Bringing together 500+ developers to discuss the future of AI and open-source in Southeast Asia.',
      icon: 'groups',
      color: 'bg-secondary-container/20 text-secondary',
      linkText: 'View highlights'
    },
    {
      id: 3,
      title: 'Green Initiative 2025',
      date: 'March 22, 2025',
      category: 'Corporate',
      description: 'Announcing our commitment to carbon neutrality across all local data center operations.',
      icon: 'eco',
      color: 'bg-tertiary-container/20 text-tertiary',
      linkText: 'Our Commitment'
    }
  ];

  const filteredEvents = activeTab === 'All' 
    ? events 
    : events.filter(e => e.category === activeTab);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <header className="relative px-6 py-20 max-w-[1280px] mx-auto text-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,89,148,0.05)_0%,transparent_70%)]"></div>
        </div>
        <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl text-on-surface mb-6 tracking-tight font-extrabold leading-tight">
          Corporate Milestones &amp; <br className="hidden md:block"/> <span className="text-gradient">Community Impact</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
          Exploring the intersections of innovation, partnership, and progress in the Sri Lankan tech ecosystem.
        </p>
      </header>

      {/* Featured Event Section */}
      <section className="px-6 pb-20 max-w-[1280px] mx-auto">
        <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-outline-variant/30 bg-white">
          <div className="grid md:grid-cols-2 items-stretch">
            <div className="relative h-64 md:h-full overflow-hidden min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent z-10 hidden md:block"></div>
              <div 
                className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBX4tiIWucK8WANVgaDXA_0MynU0Z0POrGs0nYV0EObmXGwfr1MM-NAHHPSf8ZwbcT0KxVr-LYW7ci61stoOX4rmzMNpKRIFEsEKcYVc1REKXY3gCV24gSGuFF9asTvOg6kD0CBUROPrhr4k31ftiDRJU0hUX-3vksi6qc8F_EExD06zUKwZgr0FSLyyGi_6NkpJ94AVV6t544RyI5ORCJangs5o9_njIL5PWdBrev71lv0SVcGhX0P')` }}
              ></div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1.5 bg-secondary-container/20 text-secondary text-xs font-bold rounded uppercase tracking-widest">
                  Featured Partnership
                </span>
                <span className="text-on-surface-variant font-label-sm text-xs">June 30, 2025</span>
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mb-6">
                VIVO Partners with SnapPay Fintrex Mobile Loan
              </h2>
              <p className="text-sm md:text-base text-on-surface-variant mb-8 leading-relaxed">
                A strategic collaboration bringing accessible mobile financing to communities across the nation. This milestone marks a significant step in our mission to bridge the digital divide through innovative fintech solutions tailored for the Sri Lankan market.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-primary text-white text-sm font-bold rounded hover:bg-primary/95 transition-all shadow-md active:scale-95">
                  Read Full Story
                </button>
                <button className="px-8 py-3 border border-primary text-primary text-sm font-bold rounded hover:bg-primary/5 transition-all active:scale-95">
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feed Grid with Interactive Filter Tab */}
      <section className="px-6 py-20 bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-2">Company Feed</h2>
              <p className="text-sm text-on-surface-variant">Chronicles of our journey through technological excellence.</p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex gap-2 p-1 bg-white rounded-lg border border-outline-variant/30 shadow-sm">
              {(['All', 'Innovation', 'Corporate'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 text-sm font-semibold rounded-md transition-all ${
                    activeTab === tab 
                      ? 'bg-primary text-on-primary shadow-sm' 
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {tab === 'All' ? 'All Events' : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Filtered Event Cards */}
            {filteredEvents.map((event) => (
              <div key={event.id} className="glass-card rounded-xl p-8 flex flex-col justify-between h-full group bg-white">
                <div>
                  <div className="mb-6 flex justify-between items-start">
                    <div className={`w-12 h-12 rounded flex items-center justify-center ${event.color}`}>
                      <span className="material-symbols-outlined">{event.icon}</span>
                    </div>
                    <span className="text-xs text-on-surface-variant font-medium">{event.date}</span>
                  </div>
                  <h3 className="font-headline-lg text-xl font-bold text-on-surface mb-4">{event.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                    {event.description}
                  </p>
                </div>
                <a className="flex items-center text-primary font-bold text-sm group-hover:gap-2 transition-all cursor-pointer" href="#">
                  {event.linkText} <span className="material-symbols-outlined ml-1 text-sm font-bold">arrow_forward</span>
                </a>
              </div>
            ))}

            {/* Large Grid Item (Press Release Info) */}
            <div className="md:col-span-2 glass-card rounded-xl relative overflow-hidden group bg-white border border-outline-variant/30">
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(254,128,40,0.1)_0%,transparent_60%)]"></div>
              </div>
              <div className="p-8 md:p-12 relative z-10 flex flex-col justify-between h-full min-h-[250px]">
                <div>
                  <span className="text-xs text-secondary font-bold uppercase tracking-[0.2em] block mb-4">Press Release</span>
                  <h3 className="font-headline-lg text-2xl font-bold text-on-surface mb-4 max-w-xl">Strategic Expansion into Emerging Markets</h3>
                  <p className="text-sm text-on-surface-variant max-w-2xl leading-relaxed mb-6">
                    Serandib Technologies officially announces its operational roadmap for regional expansion, focusing on robust digital payment frameworks and infrastructure support.
                  </p>
                </div>
                <div className="pt-4">
                  <button className="px-6 py-2 border border-outline hover:text-primary hover:border-primary transition-all rounded text-sm font-semibold active:scale-95 bg-white">
                    Download Full Report
                  </button>
                </div>
              </div>
            </div>

            {/* Tall Grid Item (Statistics Counter) */}
            <div className="glass-card rounded-xl p-8 bg-gradient-to-br from-white to-surface-container-low flex flex-col justify-center items-center text-center border border-outline-variant/30">
              <div className="mb-6">
                <span className="font-display-lg text-5xl font-extrabold text-primary block">25+</span>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mt-1 block">Major Partnerships</span>
              </div>
              <div className="h-px bg-outline-variant/30 w-16 mx-auto mb-6"></div>
              <div>
                <span className="font-display-lg text-5xl font-extrabold text-secondary block">100k</span>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mt-1 block">Impacted Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Informed Newsletter Section */}
      <section className="px-6 py-20 max-w-[1280px] mx-auto">
        <div className="glass-card rounded-2xl overflow-hidden relative border-none bg-white shadow-xl">
          <div className="absolute inset-0 shimmer opacity-10 pointer-events-none"></div>
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mb-4">Stay Informed</h2>
              <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                Subscribe to our monthly newsletter for executive insights, technological breakthroughs, and upcoming ecosystem events.
              </p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex-grow">
                  <input 
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" 
                    placeholder="Enter your business email" 
                    type="email"
                  />
                </div>
                <button className="px-8 py-3 bg-secondary text-on-secondary text-sm font-bold rounded-lg shadow-lg hover:brightness-110 active:scale-95 transition-all">
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-xs text-on-surface-variant">
                By subscribing, you agree to our <a className="underline hover:text-primary font-medium" href="#">Privacy Policy</a>.
              </p>
            </div>
            <div className="h-full min-h-[300px] hidden md:block relative">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBv5Q04eGkbEX-vahMyR2Psx2UF4f0peyrNfOwFUPiLn8ZrNPL0VKERs445mFZRXRKNkWM2_-Halxkz9XWb-GMbl7jPhMPFmMCF1-acLAthKvcXn4loqg-QWM41_kJ3ISYg5p4abbxFd178igVFc60yEtmY7qUfzEpdi1Y9iHLPTwsBqfMqATbSFdfq9HnWoipuAR0xAqVEpq_RReVJv9L4vRvKR7SBe_Va0dIvagUul4YBXFrUJYHn')` }}
              >
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

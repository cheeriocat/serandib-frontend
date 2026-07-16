import React, { useState } from 'react';

interface Partner {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  colorClass: string;
}

export const Partners: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    partnerType: 'Technology Partner',
    message: ''
  });

  const partnersList: Partner[] = [
    {
      id: 1,
      name: 'Zigo Mobile',
      category: 'Technology Partner',
      description: 'One of Sri Lanka’s first feature phone brands, now evolved into a premium global mobile technology brand with a strong foothold in international markets including the UAE.',
      icon: 'smartphone',
      colorClass: 'bg-primary/10 text-primary hover:bg-primary hover:text-on-primary'
    },
    {
      id: 2,
      name: 'Joyroom',
      category: 'Distribution Partner',
      description: 'Authorized National Distributor of high-end mobile accessories. We import and distribute Bluetooth speakers, headsets, and portable audio solutions from this global industry leader.',
      icon: 'headphones',
      colorClass: 'bg-secondary/10 text-secondary hover:bg-secondary hover:text-on-secondary'
    },
    {
      id: 3,
      name: 'Dialog Arcades',
      category: 'Operations Partner',
      description: 'Official partner managing 27 arcades nationwide, serving as key retail hubs for Dialog\'s cutting-edge telecom solutions, broadband services, and customer care.',
      icon: 'storefront',
      colorClass: 'bg-primary/10 text-primary hover:bg-primary hover:text-on-primary'
    },
    {
      id: 4,
      name: 'Dialog National Sales',
      category: 'Exclusive Sales Partner',
      description: 'Exclusive national sales partner for the Northern Province of Sri Lanka, leading regional expansion and accessibility of digital services across the Northern region.',
      icon: 'point_of_sale',
      colorClass: 'bg-primary/10 text-primary hover:bg-primary hover:text-on-primary'
    },
    {
      id: 5,
      name: 'SnapPay',
      category: 'Financial Service Partner',
      description: 'National service partner for smartphone financing, providing the fastest and simplest way to own high-end smartphones without the need for credit cards or guarantors.',
      icon: 'account_balance_wallet',
      colorClass: 'bg-secondary/10 text-secondary hover:bg-secondary hover:text-on-secondary'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactPerson || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        partnerType: 'Technology Partner',
        message: ''
      });
    }, 2500);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden bg-surface-container-low">
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs mb-8 uppercase tracking-widest font-bold">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
            Global Ecosystem
          </div>
          <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl text-on-surface mb-6 leading-tight max-w-4xl mx-auto font-extrabold">
            Our Strategic <span className="text-gradient">Partners</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Building the future of connectivity through global and local alliances. We collaborate with industry leaders to deliver exceptional value and technological innovation across Asia.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="relative py-24 bg-background">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnersList.map((partner) => (
              <div key={partner.id} className="glass-card rounded-xl p-8 flex flex-col h-full justify-between group bg-white border border-outline-variant/30">
                <div>
                  <div className={`mb-8 w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 ${partner.colorClass}`}>
                    <span className="material-symbols-outlined text-[32px] font-medium" style={{ fontVariationSettings: "'FILL' 1" }}>{partner.icon}</span>
                  </div>
                  <h3 className="font-headline-lg text-2xl font-bold text-on-surface mb-4">{partner.name}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
                    {partner.description}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-outline-variant/30 pt-6 mt-auto">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{partner.category}</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform text-sm font-bold">arrow_forward</span>
                </div>
              </div>
            ))}

            {/* Partnership CTA Card */}
            <div 
              onClick={() => setShowForm(true)}
              className="rounded-xl p-8 flex flex-col h-full bg-gradient-to-br from-primary to-primary-container relative overflow-hidden group cursor-pointer shadow-xl min-h-[320px] justify-between"
            >
              <div className="absolute -right-6 -bottom-6 opacity-25 group-hover:scale-110 transition-transform duration-500 text-on-primary">
                <span className="material-symbols-outlined text-[150px]">handshake</span>
              </div>
              <div>
                <h3 className="font-headline-lg text-2xl font-bold text-on-primary mb-4 relative z-10">Become a Partner</h3>
                <p className="text-sm text-on-primary/95 leading-relaxed mb-8 relative z-10">
                  Join our ecosystem and leverage our extensive distribution network, national infrastructure, and market expertise to scale your technology solutions.
                </p>
              </div>
              <div className="relative z-10 pt-4">
                <button className="px-8 py-3 bg-white text-primary font-bold text-sm rounded-lg hover:shadow-lg hover:bg-surface-container-lowest transition-all">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">5+</div>
              <div className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Strategic Alliances</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-secondary mb-2">27+</div>
              <div className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Operational Hubs</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">15+</div>
              <div className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-secondary mb-2">1M+</div>
              <div className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">End Users Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Synchronized newsletter block */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-outline-variant/30 p-10 md:p-12 rounded-2xl text-center relative overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-primary-container"></div>
            <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mb-4">Stay Synchronized</h2>
            <p className="text-sm text-on-surface-variant mb-8 leading-relaxed max-w-lg mx-auto">
              Get the latest insights, technology updates, and partnership news delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="flex-grow bg-white border border-outline-variant/50 rounded-lg px-5 py-3 text-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                placeholder="Enter your email" 
                type="email"
              />
              <button className="px-8 py-3 bg-primary text-on-primary text-sm font-bold rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Become a Partner Interactive Dialog Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative border border-outline-variant shadow-2xl animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors p-2"
              aria-label="Close dialog"
            >
              <span className="material-symbols-outlined text-2xl font-bold">close</span>
            </button>
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <span className="material-symbols-outlined text-secondary text-6xl animate-bounce">check_circle</span>
                <h3 className="text-2xl font-bold text-on-surface">Application Received</h3>
                <p className="text-sm text-on-surface-variant">
                  Thank you for your interest. Our partnership development team will contact you shortly.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-on-surface mb-6">Partnership Application</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-primary uppercase">Company Name *</label>
                    <input 
                      required
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant rounded-lg py-2.5 px-4 text-sm outline-none focus:border-primary"
                      placeholder="Enter company name"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-primary uppercase">Contact Person *</label>
                    <input 
                      required
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant rounded-lg py-2.5 px-4 text-sm outline-none focus:border-primary"
                      placeholder="Your full name"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-primary uppercase">Email Address *</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant rounded-lg py-2.5 px-4 text-sm outline-none focus:border-primary"
                      placeholder="email@company.com"
                      type="email"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-primary uppercase">Partnership Type</label>
                    <select
                      name="partnerType"
                      value={formData.partnerType}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant rounded-lg py-2.5 px-4 text-sm outline-none focus:border-primary"
                    >
                      <option>Technology Partner</option>
                      <option>Distribution Partner</option>
                      <option>Operations Partner</option>
                      <option>Financial Service Partner</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-primary uppercase">Brief Proposal Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-surface-container-low border border-outline-variant rounded-lg py-2.5 px-4 text-sm outline-none focus:border-primary resize-none"
                      placeholder="Describe what you want to achieve..."
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full mt-4 bg-primary text-on-primary font-bold py-3 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    Submit Application
                    <span className="material-symbols-outlined text-sm font-bold">send</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

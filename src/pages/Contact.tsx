import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="bg-background min-h-screen relative">
      {/* Background Grid Layer */}
      <div className="absolute inset-0 -z-10 connectivity-grid opacity-100 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="px-6 max-w-[1280px] mx-auto py-16 md:py-20 text-center">
        <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl text-on-surface mb-6 font-extrabold leading-tight">
          Let's get in touch!
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-on-surface-variant max-w-2xl mx-auto">
          Find the right contact to answer your questions. We are here to help you navigate your digital transformation journey with expert guidance and innovative solutions.
        </p>
      </section>

      {/* Main Content: Form & Info Grid */}
      <section className="px-6 max-w-[1280px] mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7 glass-card p-8 md:p-12 rounded-2xl bg-white border border-outline-variant/30 shadow-lg relative">
            {submitted ? (
              <div className="text-center py-20 space-y-6">
                <span className="material-symbols-outlined text-6xl text-secondary animate-bounce">mark_email_read</span>
                <h3 className="text-2xl font-bold text-on-surface">Message Sent Successfully!</h3>
                <p className="text-sm text-on-surface-variant max-w-sm mx-auto">
                  Thank you for reaching out to us. Our customer relations team will review your message and respond within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase">Name *</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant rounded-xl py-3 px-4 text-on-surface transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                      placeholder="Enter your full name" 
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase">Email *</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant rounded-xl py-3 px-4 text-on-surface transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                      placeholder="john@company.com" 
                      type="email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase">Phone number</label>
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant rounded-xl py-3 px-4 text-on-surface transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                      placeholder="+94 117 255 255" 
                      type="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase">Subject *</label>
                    <input 
                      required
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant rounded-xl py-3 px-4 text-on-surface transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                      placeholder="How can we help?" 
                      type="text"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary uppercase">Message *</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-low border border-outline-variant rounded-xl py-3 px-4 text-on-surface transition-all outline-none resize-none focus:border-primary focus:ring-1 focus:ring-primary" 
                    placeholder="Tell us more about your project..." 
                    rows={5}
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary text-on-primary font-bold text-lg py-4 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                >
                  Submit Message
                  <span className="material-symbols-outlined text-base font-bold">send</span>
                </button>
              </form>
            )}
          </div>

          {/* Info Side Panel */}
          <div className="lg:col-span-5 space-y-8">
            {/* Phone */}
            <div className="glass-card p-8 rounded-2xl flex gap-6 items-start bg-white border border-outline-variant/30 shadow-sm">
              <div className="bg-primary/10 p-3 rounded-xl text-primary">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>phone_in_talk</span>
              </div>
              <div>
                <h3 className="font-headline-lg text-lg font-bold text-on-surface mb-2">Phone</h3>
                <p className="text-sm text-on-surface-variant mb-4">Give us a call to speak directly with our team for urgent inquiries.</p>
                <a className="font-display-lg text-2xl font-bold text-primary hover:underline" href="tel:0117255255">0117 255 255</a>
              </div>
            </div>
            
            {/* Email */}
            <div className="glass-card p-8 rounded-2xl flex gap-6 items-start bg-white border border-outline-variant/30 shadow-sm">
              <div className="bg-secondary/10 p-3 rounded-xl text-secondary">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>alternate_email</span>
              </div>
              <div>
                <h3 className="font-headline-lg text-lg font-bold text-on-surface mb-2">Email</h3>
                <p className="text-sm text-on-surface-variant mb-4">Shoot us an email for prompt, detailed responses regarding our solutions.</p>
                <a className="font-display-lg text-2xl font-bold text-primary hover:underline" href="mailto:info@serandibt.lk">info@serandibt.lk</a>
              </div>
            </div>
            
            {/* Visit Us */}
            <div className="glass-card p-8 rounded-2xl flex gap-6 items-start bg-white border border-outline-variant/30 shadow-sm">
              <div className="bg-primary/10 p-3 rounded-xl text-primary">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <div>
                <h3 className="font-headline-lg text-lg font-bold text-on-surface mb-2">Visit Us</h3>
                <p className="text-sm text-on-surface-variant mb-3">Need instant answers? Our doors are always open for innovation discussions.</p>
                <p className="text-base text-on-surface font-semibold">No. 12 - 1/6, Sunethra Devi Road, Kohuwala, Nugegoda, Sri Lanka.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-surface-container-low py-20">
        <div className="px-6 max-w-[1280px] mx-auto">
          <div className="bg-white p-10 md:p-14 rounded-2xl overflow-hidden relative border border-outline-variant shadow-xl">
            {/* Background Accent */}
            <div className="absolute -right-24 -top-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
            <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mb-4">Subscribe to our Newsletter</h2>
                <p className="text-base text-on-surface-variant">Get the latest insights, technology tips, and industry updates delivered straight to your inbox.</p>
              </div>
              <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
                <input 
                  className="bg-white border border-outline-variant/50 rounded-xl px-6 py-4 min-w-[280px] focus:border-primary outline-none transition-all text-sm" 
                  placeholder="Your work email" 
                  type="email"
                />
                <button className="bg-secondary text-on-secondary font-bold px-10 py-4 rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-secondary/20 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full border-y border-outline-variant/30 bg-surface-container-low relative">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-surface-container-low via-transparent to-surface-container-low pointer-events-none"></div>
        <div 
          className="w-full h-full bg-cover bg-center grayscale opacity-70" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpiLzCdDL3MJkmYWNLgF3iF2K_RwBBhMLNlwj_LiLYNZ6xVpVVvEpYnFxM3EO845d0tTMT1esWwGAxym0CmWhGoi3qnthgstshkrJa5q4UJv50iWddfUjqgiuoKUEwJftNjTejf4dH8a6Z5RS8HCRtX07Ie0zgmXGOQv7XjwjRy75gqAXDjNgIN2_HgrwiacgEimRS8WNbsncWb3dVhK6bSsJnbRWxMlcr7Lv3hdPWNe5vyMSvLwBR')` }}
        ></div>
      </section>
    </div>
  );
};

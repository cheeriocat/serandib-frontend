import React, { useState } from 'react';
import { HeroShader } from '../components/HeroShader';

// Helper to convert hex to normalized RGB array [r, g, b]
const hexToRgb = (hex: string): [number, number, number] => {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;
  return [r, g, b];
};

export const ShaderPlayground: React.FC = () => {
  const [speed, setSpeed] = useState(0.2);
  const [colorBlueHex, setColorBlueHex] = useState('#0072bc');
  const [colorOrangeHex, setColorOrangeHex] = useState('#ec7320');
  const [colorWhiteHex, setColorWhiteHex] = useState('#f9f9fc');

  // Presets configuration
  const presets = [
    {
      name: 'Horizon Classic (Original)',
      blue: '#0072bc',
      orange: '#ec7320',
      white: '#f9f9fc',
      speed: 0.2
    },
    {
      name: 'Horizon Teal Corporate (Minimalist)',
      blue: '#006b58',
      orange: '#fe8028',
      white: '#f9f9f9',
      speed: 0.15
    },
    {
      name: 'Deep Oceanic Cyberpunk',
      blue: '#6366f1',
      orange: '#ec4899',
      white: '#0f172a',
      speed: 0.4
    },
    {
      name: 'Autumn Sunset',
      blue: '#ea580c',
      orange: '#eab308',
      white: '#fef2f2',
      speed: 0.25
    }
  ];

  const applyPreset = (preset: typeof presets[0]) => {
    setColorBlueHex(preset.blue);
    setColorOrangeHex(preset.orange);
    setColorWhiteHex(preset.white);
    setSpeed(preset.speed);
  };

  return (
    <div className="min-h-screen bg-background relative flex flex-col justify-end lg:flex-row items-stretch">
      
      {/* Shader background panel (Full width behind the UI, or half-screen display) */}
      <div className="absolute inset-0 z-0 bg-black">
        <HeroShader 
          className="w-full h-full"
          speed={speed}
          colorBlue={hexToRgb(colorBlueHex)}
          colorOrange={hexToRgb(colorOrangeHex)}
          colorWhite={hexToRgb(colorWhiteHex)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Info Headline Badge */}
      <div className="relative z-10 p-8 flex flex-col justify-between flex-grow pointer-events-none max-w-2xl">
        <div className="space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md text-primary font-bold text-xs uppercase tracking-widest rounded-full border border-primary/20">
            WebGL Interactions
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
            Shader Waves <span className="text-secondary-container">Playground</span>
          </h1>
          <p className="text-white/80 leading-relaxed text-sm md:text-base max-w-md drop-shadow">
            Experience real-time interactive brand canvas computation. Customize rendering parameters, wave dynamics, and primary color fields to test fluid design variations.
          </p>
        </div>
        
        {/* Mouse Position Indicator (Simulated in UI) */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 max-w-xs pointer-events-auto self-start mt-8">
          <p className="text-xs uppercase font-bold text-secondary-container">Mouse Position Reactive</p>
          <p className="text-xs text-white/70 mt-1">Move your cursor across the screen to dynamically warp the wave harmonics.</p>
        </div>
      </div>

      {/* Sidebar Controls Panel */}
      <div className="relative z-10 w-full lg:w-[450px] bg-white/90 backdrop-blur-xl border-t lg:border-t-0 lg:border-l border-outline-variant/30 p-8 flex flex-col justify-between overflow-y-auto">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-on-surface">Shader Parameters</h2>
            <p className="text-xs text-on-surface-variant mt-1">Adjust WebGL uniform registers in real-time.</p>
          </div>

          {/* Controls Sliders */}
          <div className="space-y-6">
            {/* Speed Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-primary uppercase">
                <span>Wave Speed (u_speed)</span>
                <span>{speed.toFixed(2)}x</span>
              </div>
              <input 
                type="range" 
                min="0.0" 
                max="1.5" 
                step="0.05"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full accent-primary h-1.5 bg-surface-container-low rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Colors picker inputs */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-bold text-primary uppercase tracking-wide">Color Map Registers (RGB Vector)</h3>
              
              {/* Primary Color (Blue) */}
              <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-outline-variant/20">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-on-surface">Primary Wave</p>
                  <p className="text-[10px] text-on-surface-variant font-mono uppercase">{colorBlueHex}</p>
                </div>
                <input 
                  type="color" 
                  value={colorBlueHex}
                  onChange={(e) => setColorBlueHex(e.target.value)}
                  className="w-10 h-10 border-0 rounded-lg cursor-pointer bg-transparent"
                />
              </div>

              {/* Secondary Color (Orange) */}
              <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-outline-variant/20">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-on-surface">Accent Wave</p>
                  <p className="text-[10px] text-on-surface-variant font-mono uppercase">{colorOrangeHex}</p>
                </div>
                <input 
                  type="color" 
                  value={colorOrangeHex}
                  onChange={(e) => setColorOrangeHex(e.target.value)}
                  className="w-10 h-10 border-0 rounded-lg cursor-pointer bg-transparent"
                />
              </div>

              {/* Background Color (White) */}
              <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-outline-variant/20">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-on-surface">Tonal Background</p>
                  <p className="text-[10px] text-on-surface-variant font-mono uppercase">{colorWhiteHex}</p>
                </div>
                <input 
                  type="color" 
                  value={colorWhiteHex}
                  onChange={(e) => setColorWhiteHex(e.target.value)}
                  className="w-10 h-10 border-0 rounded-lg cursor-pointer bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Theme Presets */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-primary uppercase tracking-wide">Brand Theme Presets</h3>
            <div className="grid grid-cols-1 gap-2">
              {presets.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => applyPreset(preset)}
                  className="w-full text-left p-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 bg-white hover:bg-surface-container-low transition-all text-xs font-semibold text-on-surface flex items-center justify-between shadow-sm"
                >
                  <span>{preset.name}</span>
                  <div className="flex gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: preset.blue }}></div>
                    <div className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: preset.orange }}></div>
                    <div className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: preset.white }}></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reset Control */}
        <div className="pt-8 border-t border-outline-variant/30">
          <button 
            onClick={() => {
              setColorBlueHex('#0072bc');
              setColorOrangeHex('#ec7320');
              setColorWhiteHex('#f9f9fc');
              setSpeed(0.2);
            }}
            className="w-full py-3 border border-primary text-primary hover:bg-primary/5 transition-all text-xs font-bold rounded-lg uppercase tracking-wider active:scale-[0.98]"
          >
            Restore Default Brand Colors
          </button>
        </div>
      </div>

    </div>
  );
};

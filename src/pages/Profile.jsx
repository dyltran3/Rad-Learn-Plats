import React from 'react';
import GlassCard from '../components/GlassCard';

const Profile = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Left Column: Core Identity */}
      <aside className="col-span-12 lg:col-span-3 space-y-8">
        {/* Avatar Module */}
        <GlassCard className="p-8 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4">
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Verified Host</span>
          </div>
          <div className="relative inline-block mt-4">
            <div className="w-48 h-48 rounded-full border-2 border-primary p-2 flex items-center justify-center relative z-10 bg-background-light dark:bg-background-dark">
              <img
                alt="Avatar"
                className="w-full h-full rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEsa3DbLf97UVh3QTqt-dpws5Sipy_trNJZsx9t9y2wF6gnUYcn93mDiC56E4CXq0CRltCkfOAWW9ppOOOUGLneQm8xbsszpvjfRK-7SeYo7yh5KRxCp0UYyUduRCSeSWMXcxrHa4eGWg8u-Y2X2XBxDk67R9AX5cmPbaSM-GCX6-WT5svT7tJHnu27OLMjmFhBCmIM_Y50HG9Qm-WUlGiCIhPGdbxOXOM8oWNeQ63xa7AgnEc0_29sW8i1-O9iM6rOts2lBLzROAX"
              />
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-extrabold tracking-tight">Kaelen Vance</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Sync Rate: 98.4%</p>
          </div>

          {/* Core Stats */}
          <div className="mt-8 space-y-4">
            <div className="text-left">
              <div className="flex justify-between items-end mb-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Level 42</span>
                <span className="text-xs font-bold text-primary">8,450 / 10,000 XP</span>
              </div>
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[84.5%] rounded-full shadow-[0_0_8px_rgba(238,43,140,0.5)]"></div>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Attributes Panel */}
        <GlassCard className="p-6">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="material-icons text-primary text-sm">bolt</span>
            Active Buffs
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-white/40 dark:bg-black/20 rounded-lg border border-white/50">
              <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-icons text-sm">psychology</span>
              </div>
              <div>
                <p className="text-sm font-bold">Deep Focus</p>
                <p className="text-[10px] text-slate-500">Learning Speed +15%</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </aside>

      {/* Center Column: Achievement Hall */}
      <section className="col-span-12 lg:col-span-6 space-y-8">
        <GlassCard className="p-8 h-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black italic tracking-tighter uppercase">Medal Hall</h2>
              <p className="text-slate-500 text-sm">System Milestones & Rare Achievements</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative group cursor-pointer">
              <GlassCard className="p-6 border-t-2 border-t-primary flex flex-col items-center hover:-translate-y-2 transition-transform">
                <div className="w-20 h-20 mb-4 relative flex items-center justify-center bg-gradient-to-br from-primary to-pink-400 rounded-full border-4 border-white/30">
                  <span className="material-icons text-white text-3xl">auto_awesome</span>
                </div>
                <h4 className="font-bold text-sm text-center">Alpha Learner</h4>
              </GlassCard>
            </div>
            {/* More medals can be added here */}
          </div>
        </GlassCard>
      </section>

      {/* Right Column: Data & Analytics */}
      <aside className="col-span-12 lg:col-span-3 space-y-8">
        <GlassCard className="p-6">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="material-icons text-primary text-sm">analytics</span>
            Attribute Radar
          </h3>
          <div className="relative w-full aspect-square flex items-center justify-center">
             {/* Simple SVG Radar Mockup */}
             <svg className="w-full h-full" viewBox="0 0 200 200">
               <polygon className="fill-none stroke-slate-300 dark:stroke-slate-700" points="100,20 176,65 176,135 100,180 24,135 24,65"></polygon>
               <polygon fill="rgba(238, 43, 140, 0.4)" points="100,35 160,70 140,125 100,165 40,120 50,75" stroke="#ee2b8c" strokeWidth="2"></polygon>
             </svg>
          </div>
        </GlassCard>
      </aside>
    </div>
  );
};

export default Profile;

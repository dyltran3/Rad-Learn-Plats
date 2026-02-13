import React from 'react';
import GlassCard from '../components/GlassCard';

const Missions = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 w-full">
      {/* Page Header */}
      <div className="text-center mb-16 max-w-2xl px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter uppercase leading-none text-slate-900 dark:text-white">
          Choose Your <span className="text-primary italic">Destiny</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 font-medium">
          Select a progression path to unlock new terminal nodes and specialized skill modules. All quests adapt to your current level.
        </p>
      </div>

      {/* Isometric Cards Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4 isometric-view mb-20">

        {/* Card 1: Academic Quests */}
        <div className="glass-card iso-card-1 rounded-xl p-8 flex flex-col h-[500px] group cursor-pointer hover:bg-white/50 transition-colors">
          <div className="mb-8">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg flex items-center justify-center mb-6">
              <span className="material-icons text-3xl">auto_stories</span>
            </div>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-[10px] font-bold rounded-full uppercase tracking-widest">Rank: Bronze</span>
            <h3 className="text-2xl font-bold mt-4 uppercase text-slate-900 dark:text-white">Academic Quests</h3>
            <p className="text-sm opacity-60 mt-2 text-slate-600 dark:text-slate-300">Grades 6-12 Core Alignment</p>
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-white/30 dark:bg-white/5 rounded-lg border border-white/20">
              <span className="material-icons text-sm opacity-40">check_circle</span>
              <span className="text-sm font-medium">Foundation Mastery</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white/30 dark:bg-white/5 rounded-lg border border-white/20">
              <span className="material-icons text-sm opacity-40">star</span>
              <span className="text-sm font-medium">Advanced Placement</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white/30 dark:bg-white/5 rounded-lg border border-white/20">
              <span className="material-icons text-sm opacity-40">psychology</span>
              <span className="text-sm font-medium">Core Disciplines</span>
            </div>
          </div>
          <button className="w-full mt-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase text-xs tracking-widest rounded-lg group-hover:bg-primary group-hover:text-white transition-all shadow-xl shadow-transparent group-hover:shadow-primary/20">
            Initiate Quest
          </button>
        </div>

        {/* Card 2: Professional Skills */}
        <div className="glass-card iso-card-2 rounded-xl p-8 flex flex-col h-[500px] border-primary/30 group cursor-pointer hover:bg-white/50 transition-colors">
          <div className="mb-8">
            <div className="w-14 h-14 bg-primary/20 text-primary rounded-lg flex items-center justify-center mb-6 shadow-inner">
              <span className="material-icons text-3xl">code</span>
            </div>
            <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest">Rank: Silver</span>
            <h3 className="text-2xl font-bold mt-4 uppercase text-slate-900 dark:text-white">Professional Skills</h3>
            <p className="text-sm opacity-60 mt-2 text-slate-600 dark:text-slate-300">Coding, Economy & Engineering</p>
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center space-x-3">
                <span className="material-icons text-sm text-primary">terminal</span>
                <span className="text-sm font-medium">Technical Mastery</span>
              </div>
              <span className="text-[10px] opacity-60">Lv. 20 Req</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center space-x-3">
                <span className="material-icons text-sm text-primary">payments</span>
                <span className="text-sm font-medium">Financial Literacy</span>
              </div>
              <span className="text-[10px] opacity-60">Lv. 15 Req</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center space-x-3">
                <span className="material-icons text-sm text-primary">settings_input_component</span>
                <span className="text-sm font-medium">Architecture Design</span>
              </div>
              <span className="text-[10px] opacity-60">Lv. 25 Req</span>
            </div>
          </div>
          <button className="w-full mt-8 py-4 bg-primary text-white font-bold uppercase text-xs tracking-widest rounded-lg shadow-xl shadow-primary/30 group-hover:scale-105 transition-transform">
            Access Modules
          </button>
        </div>

        {/* Card 3: Elite Path */}
        <div className="glass-card iso-card-3 rounded-xl p-8 flex flex-col h-[500px] platinum-glow group relative overflow-hidden cursor-pointer hover:bg-white/50 transition-colors">
          <div className="absolute inset-0 gold-sheen opacity-20 pointer-events-none"></div>
          <div className="mb-8 relative z-10">
            <div className="w-14 h-14 bg-yellow-400/20 text-yellow-600 dark:text-yellow-400 rounded-lg flex items-center justify-center mb-6 border border-yellow-400/40 shadow-lg shadow-yellow-500/20">
              <span className="material-icons text-3xl">workspace_premium</span>
            </div>
            <span className="px-3 py-1 bg-yellow-400/20 text-yellow-600 dark:text-yellow-400 text-[10px] font-bold rounded-full uppercase tracking-widest border border-yellow-400/20">Rank: Gold Elite</span>
            <h3 className="text-2xl font-bold mt-4 uppercase text-slate-900 dark:text-white">Elite Path</h3>
            <p className="text-sm opacity-60 mt-2 text-slate-600 dark:text-slate-300">Startup Thinking & Leadership</p>
          </div>
          <div className="flex-1 space-y-4 relative z-10">
            <div className="flex items-center space-x-3 p-3 bg-yellow-400/5 rounded-lg border border-yellow-400/20">
              <span className="material-icons text-sm text-yellow-600 dark:text-yellow-400">rocket_launch</span>
              <span className="text-sm font-bold">Venture Creation</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-yellow-400/5 rounded-lg border border-yellow-400/20">
              <span className="material-icons text-sm text-yellow-600 dark:text-yellow-400">groups</span>
              <span className="text-sm font-bold">Systems Leadership</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-yellow-400/5 rounded-lg border border-yellow-400/20">
              <span className="material-icons text-sm text-yellow-600 dark:text-yellow-400">bolt</span>
              <span className="text-sm font-bold">Paradigm Breaking</span>
            </div>
          </div>
          <div className="mt-8 relative z-10">
            <button className="w-full py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-bold uppercase text-xs tracking-widest rounded-lg shadow-xl shadow-yellow-600/20">
              Unlock Elite Tier
            </button>
            <p className="text-[9px] text-center mt-3 uppercase font-bold opacity-40">PREMIUM SUBSCRIPTION REQUIRED</p>
          </div>
        </div>

      </div>

      {/* Bottom Stats Bar */}
      <div className="flex items-center space-x-12 opacity-50 text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">
        <div className="flex items-center space-x-2">
          <span className="material-icons text-sm">wifi_tethering</span>
          <span>Server: Omega-01</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="material-icons text-sm">history</span>
          <span>Last Sync: 0.002s Ago</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="material-icons text-sm">visibility</span>
          <span>14.2k Active Explorers</span>
        </div>
      </div>
    </div>
  );
};

export default Missions;

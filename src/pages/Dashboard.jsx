import React from 'react';
import Header from '../components/Header';
import GlassCard from '../components/GlassCard';

const Dashboard = () => {
  return (
    <>
      <Header />

      {/* Navigation Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mb-10">
        {/* Missions */}
        <GlassCard className="group relative p-8 border-b-4 border-primary/30 hover:border-primary transition-all cursor-pointer overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-icons-round text-8xl text-primary">auto_awesome</span>
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
              <span className="material-icons-round">explore</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Missions</h3>
            <p className="text-slate-500 mb-6 text-sm">Continue your path through the digital architecture.</p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Neural Networks 101</span>
                  <span className="text-primary">75%</span>
                </div>
                <div className="w-full h-1.5 bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[75%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Skill Tree */}
        <GlassCard className="group relative p-8 border-b-4 border-pink-300/30 hover:border-pink-400 transition-all cursor-pointer overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-icons-round text-8xl text-pink-500">account_tree</span>
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-lg flex items-center justify-center mb-6">
              <span className="material-icons-round">psychology</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Skill Tree</h3>
            <p className="text-slate-500 mb-6 text-sm">Visualize your growth and unlock new data nodes.</p>
            <div className="flex gap-2">
              <div className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-bold">4 Nodes Unlocked</div>
              <div className="px-3 py-1 bg-slate-100 text-slate-400 rounded-full text-xs font-bold">2 Pending</div>
            </div>
          </div>
        </GlassCard>

        {/* Colab */}
        <GlassCard className="group relative p-8 border-b-4 border-blue-300/30 hover:border-blue-400 transition-all cursor-pointer overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-icons-round text-8xl text-blue-500">hub</span>
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center mb-6">
              <span className="material-icons-round">sensors</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Colab</h3>
            <p className="text-slate-500 mb-6 text-sm">Join real-time sync sessions with fellow architects.</p>
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white" alt="User 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgP_XLQ3oObTpJ1hIzY57dgE3zUDEtagQ9Xq6d99TPqwgRDRYpd3zY7qTb6abFYHc-CSuTGP-MQw_cIj2F9dYa4C-SdUtggpqKdrrOlwN9aB0HRxa9Rtwk3P4CQIjyerk5Hc4Utc3P7i7Uxf9Aap4qElRWAQO7BgmFALeWG4cb8FLDMQEB0ghcp9H6z3Z6B4fAVB7CF_JZRLT9EOqjQKcCeAIv99kbHVw2Y2yeFGcKQs9OvM-DAkJWNDYd2RyKvb5K3_Z8ZPEeI5bF" />
              <img className="w-8 h-8 rounded-full border-2 border-white" alt="User 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzzhJuVMIhZMzh24jJ6VUAYs8_v0b1kAh6CGhA0vrJLHt4567TVWxBabeJy5Lfr0xte2yC_LEZIiEN0uKX2TwCLhzCSDqg2fmlAP6A4aAEybclmEFCcB2soC74N_izEfqNVNEOuUjwqC52emcyJWYGOO8sW8ej-Fr44NTHoEVYNNV3A3id66kfsUeMJ9hg_OJjC1H11LU93sMQd6RRy2ikUFfsKYAhD0HIpcealorm_gAtNUtmTYGseRZSj6-1ajlOLSk5Zt0udBDn" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">+12</div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Quick Note Extension */}
      <div className="px-6 flex-1">
        <GlassCard className="h-full p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="material-icons-round text-primary">edit_note</span>
              <h3 className="font-bold text-slate-700">Quick Note Extension</h3>
            </div>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-slate-100 rounded transition-colors"><span className="material-icons-round text-slate-400 text-sm">push_pin</span></button>
              <button className="p-1 hover:bg-slate-100 rounded transition-colors"><span className="material-icons-round text-slate-400 text-sm">close</span></button>
            </div>
          </div>
          <textarea className="flex-1 bg-transparent border-none focus:ring-0 text-slate-600 placeholder:text-slate-300 resize-none font-display text-lg w-full outline-none" placeholder="Type your study insights here... System automatically syncs with Cloud Node 7."></textarea>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
            <div className="flex gap-4">
              <span className="material-icons-round text-slate-300 cursor-pointer hover:text-primary transition-colors">format_bold</span>
              <span className="material-icons-round text-slate-300 cursor-pointer hover:text-primary transition-colors">format_italic</span>
              <span className="material-icons-round text-slate-300 cursor-pointer hover:text-primary transition-colors">link</span>
            </div>
            <span className="text-[10px] text-slate-300 uppercase tracking-widest font-bold italic">Auto-saving...</span>
          </div>
        </GlassCard>
      </div>
    </>
  );
};

export default Dashboard;

import React from 'react';
import GlassCard from '../components/GlassCard';

const SkillTree = () => {
  return (
    <div className="relative h-full flex overflow-hidden">
      {/* Skill Tree Canvas */}
      <div className="relative flex-1 overflow-auto cursor-grab active:cursor-grabbing scrollbar-hide bg-background-light dark:bg-background-dark">
        <div className="relative w-[2000px] h-[1500px]">
          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" stroke="#ee2b8c" strokeWidth="2">
            <line x1="1000" x2="850" y1="750" y2="600"></line>
            <line x1="1000" x2="1150" y1="750" y2="600"></line>
            <line x1="1000" x2="1000" y1="750" y2="950"></line>
            <line x1="850" x2="700" y1="600" y2="500"></line>
            <line x1="850" x2="750" y1="600" y2="450"></line>
            <line x1="1150" x2="1300" y1="600" y2="500"></line>
            <line x1="1000" x2="900" y1="950" y2="1100"></line>
            <line x1="1000" x2="1100" y1="950" y2="1100"></line>
          </svg>

          {/* Core Node */}
          <div className="absolute left-[950px] top-[700px] group">
            <div className="skill-node node-pulse w-24 h-24 bg-primary text-white rounded-full flex flex-col items-center justify-center shadow-xl shadow-primary/40 relative z-10 cursor-pointer">
              <span className="material-icons text-3xl">psychology</span>
              <span className="text-[10px] font-bold mt-1 uppercase">Foundation</span>
            </div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
              <span className="text-xs font-extrabold uppercase bg-primary text-white px-3 py-1 rounded-full">MASTERED</span>
            </div>
          </div>

          {/* Logic Cluster */}
          <div className="absolute left-[790px] top-[540px] group">
            <div className="skill-node w-20 h-20 glass-card border-primary rounded-full flex flex-col items-center justify-center shadow-lg relative z-10 cursor-pointer border-2">
              <span className="material-icons text-2xl text-primary">data_object</span>
              <span className="text-[8px] font-bold mt-1 uppercase">Logic II</span>
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
              <span className="text-[10px] font-bold uppercase opacity-80">ACTIVE [88%]</span>
            </div>
          </div>

          {/* Languages Cluster */}
          <div className="absolute left-[1110px] top-[540px] group">
            <div className="skill-node w-20 h-20 glass-card border-primary/40 rounded-full flex flex-col items-center justify-center shadow-lg relative z-10 cursor-pointer border-2 bg-primary/10">
              <span className="material-icons text-2xl text-primary">translate</span>
              <span className="text-[8px] font-bold mt-1 uppercase">Linguistics</span>
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
              <span className="text-[10px] font-bold uppercase text-primary">LEVEL 4</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Details */}
      <aside className="w-96 glass-card border-l border-primary/10 h-full flex flex-col z-40 relative m-0 rounded-none border-y-0 border-r-0">
        <div className="p-8 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-extrabold uppercase tracking-widest opacity-60">Skill Manifest</h2>
            <button className="text-primary material-icons">close</button>
          </div>
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-tr from-primary to-primary/40 rounded-full p-1 mb-4">
              <div className="w-full h-full bg-white dark:bg-background-dark rounded-full flex items-center justify-center overflow-hidden">
                <img className="w-full h-full object-cover opacity-80" alt="Skill" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5CpDdkoTR65RpctaI5ltcgqOdzcfajEk8FsRy4BQH2Ql1qx0DV9y4EqsdLgcckHGVla6e_PkaTYJHn2fkkIOvcNcxIULm0dfNqFHiQBZIskM4zZ_sLotOzLrq1584PlmYqoKoRf34KC-NS7-4EeHaIlrwAf5hKoN-0ixcvq8lyIcTD8kWP1VK0p5VvUIWwNVKhpiQxVKdFIdMRVglPW6D81_ui1tkTrfp-hGhdy4APYbt5dqsPLB-zgE8jo_stlWFKSWbEAbhA6Pp" />
              </div>
            </div>
            <h3 className="text-2xl font-extrabold">Recursive Logic II</h3>
            <p className="text-xs font-semibold opacity-60 uppercase tracking-tighter mt-1">Branch: Computing & Abstraction</p>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-bold uppercase">Experience Gained</span>
                <span className="text-xs font-mono">880/1000</span>
              </div>
              <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[88%] rounded-full shadow-[0_0_8px_rgba(238,43,140,0.3)]"></div>
              </div>
            </div>

            <div className="pt-4">
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-transform active:scale-95">
                <span className="material-icons text-lg">bolt</span>
                ENGAGE PRACTICE MODE
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SkillTree;

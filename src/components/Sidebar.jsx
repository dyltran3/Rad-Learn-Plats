import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', path: '/' },
    { icon: 'auto_awesome', label: 'Missions', path: '/missions' },
    { icon: 'account_tree', label: 'Skill Tree', path: '/skill-tree' },
    { icon: 'groups', label: 'Colab', path: '/colab' },
    { icon: 'person', label: 'Profile', path: '/profile' }, // Added Profile based on plan
  ];

  return (
    <aside className="w-72 glass-card m-6 rounded-xl flex flex-col p-6 border-r border-white/50 h-[calc(100vh-3rem)] sticky top-6">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
          S
        </div>
        <h1 className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white">
          SYST<span className="text-primary">Ξ</span>M
        </h1>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-primary/10 text-primary font-semibold'
                  : 'text-slate-500 hover:bg-primary/5 hover:text-primary'
              }`
            }
          >
            <span className="material-icons-round">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Pomodoro Energy Core */}
      <div className="mt-auto pt-6 border-t border-primary/10">
        <div className="relative flex flex-col items-center justify-center p-6 glass-card rounded-xl border border-primary/20 bg-primary/5">
          <div className="relative w-32 h-32 rounded-full border-4 border-primary/20 flex items-center justify-center mb-4">
            <div className="absolute inset-0 border-t-4 border-primary rounded-full rotate-45 energy-core-glow"></div>
            <div className="text-center">
              <span className="text-2xl font-bold text-primary block">25:00</span>
              <span className="text-[10px] uppercase tracking-widest text-primary/60 font-medium">Focus Core</span>
            </div>
          </div>
          <button className="w-full py-2 bg-primary text-white rounded-lg font-medium shadow-md shadow-primary/20 hover:scale-105 transition-transform active:scale-95">
            Initiate
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

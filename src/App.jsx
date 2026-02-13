import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Missions from './pages/Missions';
import SkillTree from './pages/SkillTree';
import Colab from './pages/Colab';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-primary/20 rotate-45"></div>
        <div className="absolute top-1/4 right-1/3 w-8 h-8 rounded-full border border-primary/30"></div>
      </div>

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="missions" element={<Missions />} />
          <Route path="skill-tree" element={<SkillTree />} />
          <Route path="colab" element={<Colab />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>

      {/* UI Decor */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <button className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/40 hover:scale-110 transition-transform">
          <span className="material-icons-round">help_outline</span>
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;

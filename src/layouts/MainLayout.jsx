import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const MainLayout = () => {
  return (
    <div className="relative z-10 flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 pl-0 flex flex-col min-w-0">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <header className="flex items-center justify-between mb-10 px-6 pt-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {title || <>Welcome back, <span className="text-primary">User_01</span></>}
        </h2>
        <p className="text-slate-500 font-medium">
          {subtitle || "System uptime: 124:45:12 • Rank: Elite Novice"}
        </p>
      </div>
      <div className="flex items-center gap-6">
        {/* Music Player Widget */}
        <div className="glass-card px-4 py-2 rounded-full flex items-center gap-4 border border-primary/20 hidden md:flex">
          <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              alt="Music cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPbnCCxN-4oEHNj6iPg1z9LAskqLOf5WRq1Jvf4CvOoYWhQbF1tk0i-Nz-20Cp20YBO23viq9TavMp-zgrDgkI8_uvm9Fb1aaYtTG63WITi10_FqFcj4iTPmTagxFIbhmA_xCaogL0983DDq-U8-GWGirmKW-uGV67dOp_vQJlKPITptkvouw_CWGZsumAm2BmvaFjNpT_ZjNJ9Hwjnvuf2mLXGY802UR6za7icVga1pOC2q-RAYLTfKl0lC5zmyq0CxSkMXo9BY8p"
            />
          </div>
          <div className="overflow-hidden w-32">
            <p className="text-xs font-bold truncate text-primary">Cyber-Lofi Beats #4</p>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Playing Now</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons-round text-primary text-xl cursor-pointer">skip_previous</span>
            <span className="material-icons-round text-primary text-2xl cursor-pointer">play_circle_filled</span>
            <span className="material-icons-round text-primary text-xl cursor-pointer">skip_next</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl border-2 border-primary/30 p-1">
            <img
              className="w-full h-full object-cover rounded-lg"
              alt="User avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA32d5u8osG287CAmxAb9brJ4-dpItdK3S4fi9-xeb6UhQH-J37tWR8LdScwa6d-r9GO9F3kvKHOWaHRT0z19EoDZUODZr5Nkgwa0Bj2mFtNb_u420tanvQIuvgC-OkzSUIKiI5pauzZTQVTVqj1EClGwGBlZOUTdePdOCzEkdC0kNfwyms2t6SZhlAH9zu24oMun2ZS5ElxnBtceqVloDTFHERVl_HjE5qSaVmD2mNk1u2TwmPU1znlx2yiQCW0d7FODvFWK0dWaz7"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

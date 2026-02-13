import React from 'react';

const Colab = () => {
  return (
    <div className="relative h-[calc(100vh-64px)] w-full flex flex-col overflow-hidden">
      {/* Top Navigation / Pomodoro Header (Local to Page) */}
      <header className="h-20 z-40 flex items-center justify-between px-8 bg-transparent">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-pink rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-pink/30">
            <span className="material-icons text-xl">hub</span>
          </div>
          <div>
            <h1 className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              COLAB<span className="text-primary-pink">SYSTEM</span>
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-primary-pink/60">Real-time Hub v2.4</p>
          </div>
        </div>

        {/* Syncronized Pomodoro */}
        <div className="glass-card px-6 py-2 rounded-full flex items-center gap-6 border-primary-pink/20">
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase font-bold text-primary-pink tracking-widest leading-none mb-1">Study Session</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tabular-nums text-slate-900 dark:text-white">12:45</span>
              <div className="w-2 h-2 rounded-full bg-primary-pink animate-pulse"></div>
            </div>
          </div>
          <div className="h-8 w-[1px] bg-primary-pink/20"></div>
          <button className="bg-primary-pink text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-primary-pink/90 transition-all shadow-md shadow-primary-pink/20">
            <span className="material-icons text-lg">coffee</span>
            JOIN BREAK
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="glass-card p-2 rounded-full flex gap-2">
            <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white transition-colors text-slate-500">
              <span className="material-icons text-sm">settings</span>
            </button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white transition-colors text-slate-500">
              <span className="material-icons text-sm">notifications</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace Area */}
      <main className="relative flex-1 flex overflow-hidden w-full">
        {/* Left Sidebar: Squad List */}
        <aside className="w-64 h-[calc(100%-2rem)] ml-6 my-auto glass-card rounded-2xl p-4 flex flex-col gap-4 z-40">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-bold text-sm tracking-wide text-slate-500 flex items-center gap-2">
              <span className="material-icons text-sm">group</span> SQUAD LIST
            </h2>
            <span className="bg-primary-pink/10 text-primary-pink text-[10px] font-black px-2 py-0.5 rounded-full">5 ACTIVE</span>
          </div>
          <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
            {/* User Item 1 */}
            <div className="p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-white hover:border-primary-pink/30 transition-all group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img alt="Mina" className="w-10 h-10 rounded-lg bg-accent-lavender/30 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcLxVC89j1-ynKimeKz1SK-IFgketaY_qszzYkW-ejWX2Lv1Lf90gibjKupHQ2BIc2EencT7tBwWJZzBTXQVNGkjzOLSUd6w3SbiIUoI8v24f1aGofQRuirjYihscr5QufMm6-rpp6wLz72SGyC0XohnLs169CDZiE66Ish9oR1Bl2zzjiJYJD84TKMOHjyf3l7-MmfLC7LjEhKUMqrvHq6yrhdizTruvm7NsW23xl3IVDK656RUhxfMYsQjyqOUFV0pFb6nZ5WEt8"/>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-primary-pink transition-colors">Mina_Chan</p>
                  <p className="text-[10px] text-slate-400">Coding Architecture</p>
                </div>
              </div>
            </div>

            {/* User Item 2 */}
            <div className="p-3 rounded-xl bg-primary-pink/5 border border-primary-pink/20 transition-all group cursor-pointer ring-1 ring-primary-pink/20">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img alt="Hiro" className="w-10 h-10 rounded-lg bg-primary-pink/20 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxxlheb6CeaEk0vVXZwA7m6Cs6FgtswxJNfs2MRoxwEDjxosTPD6_Q7ZhS1IcIICB5py02v0T6lhU0TBDte9gk4nK7DoB-GOzhOgjQwP9gOm3XRN8DgTqPNFY6aIi_L48FcqXOqegdPCywEAj6FuZfvs3Ftxa9CKfHP48Tc9BVUCaa54Ko_r06CFIqhNTQI0xv23VkbsY742zR9CF93PQyK9UmN4Ojj6BnqjU3aQ-RHNTbzNOXATP26Xh8-wX66WnN6QL3etKBhVOd"/>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary-pink border-2 border-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-primary-pink">Hiro_Sama</p>
                  <p className="text-[10px] text-primary-pink/60">Focusing: 24m</p>
                </div>
                <span className="material-icons text-primary-pink text-sm">mic</span>
              </div>
            </div>

            {/* User Item 3 */}
            <div className="p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-white hover:border-primary-pink/30 transition-all group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img alt="Yuki" className="w-10 h-10 rounded-lg bg-accent-mint/30 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfwwe-tGGjVHn_hzNFkL6C7g55siIOBUI-tXSOL0RJ17LvIkg3bTa8EznNQUR6QmNeTCCeSjB3JEQv-KVU23u4s22ws1QM_iTwU7b9PnUfknUuQsV1rW06eC1T1UbXPe6U15ze_wT0b4xtSi9pRu-LXSkngLoIcnCe7uxbWJM6UbyI5Vby0ySogsBqM6QrWdGDkVt5o5782DbZVbZf3nNEM7j6H25IDF0nhp4cHc0TOncdTjzpzroPz1mwZA3PosFl5Njg1v2rWDQX"/>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-400 border-2 border-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-primary-pink transition-colors">Yuki_99</p>
                  <p className="text-[10px] text-slate-400">Idle / Thinking</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-primary-pink/10">
            <button className="w-full py-3 rounded-xl border-2 border-dashed border-primary-pink/20 text-primary-pink/50 font-bold text-xs flex items-center justify-center gap-2 hover:bg-primary-pink/5 hover:border-primary-pink/40 transition-all">
              <span className="material-icons text-sm">person_add</span>
              INVITE SQUAD
            </button>
          </div>
        </aside>

        {/* Central Collaborative Space */}
        <div className="flex-1 relative flex items-center justify-center overflow-hidden">
          {/* Floating Avatars */}
          <div className="absolute top-[15%] left-[10%] z-30 group cursor-pointer animate-bounce duration-[3000ms]">
            <div className="relative avatar-glow">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 glass-card px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <span className="text-xs font-bold text-primary-pink italic">"Check this part out!"</span>
              </div>
              <img alt="Mina" className="w-16 h-16 rounded-full border-4 border-accent-lavender bg-accent-lavender/20 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWpyF_dky1igQkwalAGD5uLwE9DHgF53Rpvsetc6DTvXn-nwLzhTtjUe87xyvo43aGIV6bgu8k7l6Pva7PdZD9gPS5Z0ab6mKn1N4ykSFjrZcFMxQiDmGl1SEDKsgkz3ch7EqQ-ZbhW5JQ0arUKhDmAVQ8klEvC00R-ggAdKYVWN5QjY6b6jqa9hr3G7fENR6G6_Q3gbjleyfvmiDaMPc9hNjdgaVJIMmDCwMnDwElnRCd0PjZpx-mwuA6xixJULtc1n-fHz-v_bHb"/>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-accent-lavender text-[9px] font-black rounded text-purple-900 uppercase">Coding</div>
            </div>
          </div>

          <div className="absolute top-[20%] right-[20%] z-30 group cursor-pointer">
            <div className="relative avatar-glow">
              <img alt="Yuki" className="w-14 h-14 rounded-full border-4 border-accent-mint bg-accent-mint/20 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4j65J7KmXrvOmfZUGeNqW3XOY83DOw_iTcSJ88ODIQ5H7p8Oen78y3nS74WnDoxYf4eOC6iaLXWz5GIox19ta7MXc1J1MqlfLhXSVHoIRQEE0t2rYN7e2fV5PLIOCNZZFKYta6PpyRuOF8XKCfn7GD0dw3cb7Qs0YbPoch57rK5uqGSUYaBWq3ADeRcxNJC_9saZpXPakK6kMERPYLfeuWWHsUADoBfhkulaoYQHJmTSCMcAe3gKnF7MDvuWpZQRNZhoifW1uVWBL"/>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-accent-mint text-[9px] font-black rounded text-teal-900 uppercase">Research</div>
            </div>
          </div>

          {/* Main Whiteboard Canvas */}
          <div className="w-[85%] h-[75%] glass-card rounded-[2rem] relative overflow-hidden border-white/60 shadow-2xl">
            {/* Toolbar */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 glass-card rounded-2xl p-2 flex gap-2 z-20 border-primary-pink/20">
              <button className="w-10 h-10 rounded-xl bg-primary-pink text-white flex items-center justify-center">
                <span className="material-icons text-sm">edit</span>
              </button>
              <button className="w-10 h-10 rounded-xl hover:bg-white/80 transition-colors flex items-center justify-center text-slate-600">
                <span className="material-icons text-sm">shapes</span>
              </button>
              <button className="w-10 h-10 rounded-xl hover:bg-white/80 transition-colors flex items-center justify-center text-slate-600">
                <span className="material-icons text-sm">text_fields</span>
              </button>
              <div className="w-[1px] bg-slate-200 mx-1"></div>
              <button className="w-10 h-10 rounded-xl hover:bg-white/80 transition-colors flex items-center justify-center text-slate-600">
                <span className="material-icons text-sm">delete_outline</span>
              </button>
            </div>

            {/* Canvas Content */}
            <div className="p-16 flex flex-col items-center justify-center h-full text-center">
              <div className="max-w-md space-y-8">
                <div className="relative inline-block">
                  <div className="absolute -top-6 -right-12 bg-accent-lavender px-3 py-1 rounded-lg text-xs font-bold text-purple-900 rotate-12 shadow-sm">SYSTEM DRAFT</div>
                  <h2 className="text-4xl font-black text-slate-800 dark:text-white leading-tight">Neural Architecture <br/><span className="text-primary-pink italic">Whiteboard</span></h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-white/40 dark:bg-white/10 rounded-2xl border border-white/80 dark:border-white/20 text-left">
                    <div className="w-8 h-8 rounded-lg bg-accent-peach/40 flex items-center justify-center mb-3 text-orange-600">
                      <span className="material-icons text-sm">terminal</span>
                    </div>
                    <h3 className="font-bold text-sm mb-1 text-slate-900 dark:text-white">Backend Specs</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Implementing real-time sockets via System Hub Protocol...</p>
                  </div>
                  <div className="p-6 bg-white/40 dark:bg-white/10 rounded-2xl border border-white/80 dark:border-white/20 text-left">
                    <div className="w-8 h-8 rounded-lg bg-accent-mint/40 flex items-center justify-center mb-3 text-emerald-600">
                      <span className="material-icons text-sm">palette</span>
                    </div>
                    <h3 className="font-bold text-sm mb-1 text-slate-900 dark:text-white">UI Guidelines</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Maintain pastel cyber aesthetic with high contrast...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Collaborative Cursors */}
            <div className="absolute top-[40%] left-[30%] flex items-center gap-1 pointer-events-none">
              <span className="material-icons text-primary-pink" style={{fontSize: '20px'}}>near_me</span>
              <span className="bg-primary-pink text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">Mina_Chan</span>
            </div>

            {/* Footer Console */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-white/30 dark:bg-black/30 backdrop-blur-md border-t border-white/40 flex items-center px-6 text-[10px] font-bold text-slate-500 tracking-wider overflow-hidden">
              <span className="text-primary-pink mr-3">SYSTEM LOG:</span>
              <div className="flex gap-4">
                <span>[12:44:02] Hiro_Sama started a screen share</span>
                <span className="opacity-40">/</span>
                <span>[12:44:15] Mina_Chan edited "Backend Specs"</span>
                <span className="opacity-40">/</span>
                <span className="animate-pulse">[LIVE] System connection optimized...</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Chat Bubble */}
        <div className="fixed bottom-8 right-8 z-50">
          <div className="relative group">
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-pink text-white text-[10px] font-black rounded-full flex items-center justify-center border-4 border-background-light dark:border-background-dark ring-2 ring-primary-pink/20">3</div>
            <button className="w-16 h-16 bg-primary-pink rounded-full text-white flex items-center justify-center shadow-xl shadow-primary-pink/40 hover:scale-105 transition-transform">
              <span className="material-icons text-3xl">chat_bubble</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Colab;

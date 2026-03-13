import Link from "next/link";

export default function DailyOptimizer() {
  return (
    <div className="max-w-[1200px] mx-auto min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="flex items-center justify-between border-b border-primary/10 px-6 py-4 bg-background-light dark:bg-background-dark sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="text-primary">
            <span className="material-symbols-outlined text-3xl">auto_fix_high</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Daily Optimizer</h2>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-primary font-bold border-b-2 border-primary pb-1">Timeline</Link>
          <Link href="/insights" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Insights</Link>
          <Link href="/tasks" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Tasks</Link>
          <Link href="/log" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Daily Log</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">calendar_today</span>
          </button>
          <button className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-primary/20">
            <img alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOSrO1N8bStgJHGl0_ilH3tHfaJgNDmfV53NaVa6jH5JlKbRS1jWiDaF5y6Ax7EmZTqdvSvq9FpTaGBZZejdcetB4r9MwvwVPN7h8yKlJ8NYHiXeYn1lmggaW172ONXUK_v0Z2b-qPv4BjHB3UJErzrB7-2FNDVagbT7Krhp2nDDVJzOpq9L4cFRF7v4RdiOPtE-G4x2vsJwl_k2qGC7YguJwasaT3GZWVsjbuQVJ20atXtZGI69XGSfrqSIisdiQWnxSTxDNMw8bl"/>
          </div>
        </div>
      </header>
      <main className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar: Energy Stats */}
        <aside className="lg:col-span-3 flex flex-col gap-6">
          <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-primary/5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Current Biological State</h3>
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-primary">bolt</span>
              <p className="text-2xl font-bold">Peak Focus</p>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Your cortisol levels are peaking. This is the optimal window for deep analytical work.
            </p>
            <div className="mt-4 h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[85%]"></div>
            </div>
            <p className="text-[10px] mt-2 text-right font-medium text-primary">85% Energy Potential</p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-primary/5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Legend</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">Fixed Event</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-blue-500"></div>
                <span className="text-sm font-medium">Optimized Task</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-emerald-500/20 border border-emerald-500"></div>
                <span className="text-sm font-medium">Biological Window</span>
              </div>
            </div>
          </div>
        </aside>
        {/* Main Timeline Section */}
        <section className="lg:col-span-9 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-2xl font-bold">Optimized Schedule</h1>
              <p className="text-slate-500">Tuesday, October 24th</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                Sync Calendar
              </button>
            </div>
          </div>
          {/* Timeline Container */}
          <div className="relative bg-white dark:bg-slate-800 rounded-xl shadow-md border border-primary/10 overflow-hidden">
            {/* Time Labels & Grid */}
            <div className="flex flex-col">
              {/* 8:00 AM Slot */}
              <div className="flex border-b border-slate-100 dark:border-slate-700 min-h-[100px] relative">
                <div className="w-20 py-4 px-2 text-right text-xs font-bold text-slate-400 border-r border-slate-100 dark:border-slate-700">8 AM</div>
                <div className="flex-1 p-2 relative bg-emerald-50/30 dark:bg-emerald-900/10">
                  <div className="absolute inset-y-2 left-2 right-4 rounded-lg border-l-4 border-primary bg-primary/5 p-3 flex flex-col justify-center">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm">Morning Strategy Sync</h4>
                      <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full uppercase font-black">Fixed</span>
                    </div>
                    <p className="text-xs text-slate-500">Project Alpha Team</p>
                  </div>
                </div>
              </div>
              {/* 9:00 AM Slot - Biological Window */}
              <div className="flex border-b border-slate-100 dark:border-slate-700 min-h-[120px] relative">
                <div className="w-20 py-4 px-2 text-right text-xs font-bold text-slate-400 border-r border-slate-100 dark:border-slate-700">9 AM</div>
                <div className="flex-1 p-2 bg-emerald-50/50 dark:bg-emerald-900/20 relative group">
                  <div className="absolute top-2 left-2 right-4 h-[calc(100%-16px)] rounded-lg border-2 border-dashed border-emerald-500/30 flex items-center justify-center">
                    <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest opacity-40">Biological Peak Focus Window</span>
                  </div>
                  {/* Overlaid Task */}
                  <div className="absolute top-4 left-6 right-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/30 p-3 shadow-sm z-10">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm text-blue-900 dark:text-blue-100">Draft Quarterly Architecture</h4>
                      <span className="flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-100 dark:bg-blue-800 px-2 py-0.5 rounded-full">
                        <span className="material-symbols-outlined text-xs">psychology</span> Deep Work
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs text-slate-400">info</span>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400">Slotted here: High cognitive load matches 95% energy score.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 10:00 AM Slot */}
              <div className="flex border-b border-slate-100 dark:border-slate-700 min-h-[100px] relative">
                <div className="w-20 py-4 px-2 text-right text-xs font-bold text-slate-400 border-r border-slate-100 dark:border-slate-700">10 AM</div>
                <div className="flex-1 p-2 bg-emerald-50/50 dark:bg-emerald-900/20 relative">
                  {/* Overlaid Task Continued/Next */}
                  <div className="absolute top-2 left-6 right-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/30 p-3 shadow-sm">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm text-blue-900 dark:text-blue-100">Review PR Requests</h4>
                      <span className="flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-100 dark:bg-blue-800 px-2 py-0.5 rounded-full">
                        <span className="material-symbols-outlined text-xs">code</span> Analytical
                      </span>
                    </div>
                    <p className="text-[11px] mt-1 text-slate-500">Auto-filled in High Focus white space.</p>
                  </div>
                </div>
              </div>
              {/* 11:00 AM Slot */}
              <div className="flex border-b border-slate-100 dark:border-slate-700 min-h-[100px] relative">
                <div className="w-20 py-4 px-2 text-right text-xs font-bold text-slate-400 border-r border-slate-100 dark:border-slate-700">11 AM</div>
                <div className="flex-1 p-2 relative">
                  <div className="absolute inset-y-2 left-2 right-4 rounded-lg border-l-4 border-primary bg-primary/5 p-3">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm">Product Lead Interview</h4>
                      <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full uppercase font-black">Fixed</span>
                    </div>
                    <p className="text-xs text-slate-500">Candidate: Sarah Jenkins</p>
                  </div>
                </div>
              </div>
              {/* 12:00 PM Slot - Energy Dip */}
              <div className="flex border-b border-slate-100 dark:border-slate-700 min-h-[100px] relative">
                <div className="w-20 py-4 px-2 text-right text-xs font-bold text-slate-400 border-r border-slate-100 dark:border-slate-700">12 PM</div>
                <div className="flex-1 p-2 bg-orange-50/30 dark:bg-orange-900/10 relative">
                  <div className="absolute inset-x-2 top-0 h-px bg-primary/20"></div>
                  <div className="absolute top-2 left-2 right-4 h-[calc(100%-16px)] rounded-lg border-2 border-dashed border-orange-300 dark:border-orange-800 flex items-center justify-center">
                    <span className="text-[10px] text-orange-600 font-bold uppercase tracking-widest opacity-40">Biological Energy Trough</span>
                  </div>
                  <div className="absolute top-4 left-6 right-8 rounded-lg border-l-4 border-slate-400 bg-slate-50 dark:bg-slate-700 p-3 italic">
                    <div className="flex items-center gap-2 text-slate-500">
                      <span className="material-symbols-outlined text-sm">restaurant</span>
                      <h4 className="font-medium text-sm">Lunch & Reset Window</h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* 1:00 PM Slot */}
              <div className="flex border-b border-slate-100 dark:border-slate-700 min-h-[100px] relative">
                <div className="w-20 py-4 px-2 text-right text-xs font-bold text-slate-400 border-r border-slate-100 dark:border-slate-700">1 PM</div>
                <div className="flex-1 p-2 relative bg-orange-50/20 dark:bg-orange-900/5">
                  <div className="absolute top-2 left-6 right-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/30 p-3 shadow-sm">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm text-blue-900 dark:text-blue-100">Clear Inbox (Zero)</h4>
                      <span className="flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-100 dark:bg-blue-800 px-2 py-0.5 rounded-full">
                        <span className="material-symbols-outlined text-xs">mail</span> Admin
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs text-slate-400">info</span>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400">Slotted here: Low energy cost task matches post-lunch trough.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Summary */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px] p-4 rounded-xl bg-primary/5 border border-primary/10 flex items-center gap-4">
              <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Alignment Score</p>
                <p className="text-xl font-black text-primary">92%</p>
              </div>
            </div>
            <div className="flex-1 min-w-[200px] p-4 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center gap-4">
              <div className="size-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <span className="material-symbols-outlined">task_alt</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Tasks Slotted</p>
                <p className="text-xl font-black">4 of 5</p>
              </div>
            </div>
            <div className="flex-1 min-w-[200px] p-4 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center gap-4">
              <div className="size-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <span className="material-symbols-outlined">hourglass_top</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Deep Work</p>
                <p className="text-xl font-black">2.5 Hours</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

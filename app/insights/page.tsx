import React from"react";
import Link from"next/link";

export default function Insights() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

      <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 py-8">
        {/* Hero Title Section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
            <span className="material-symbols-outlined text-sm">bolt</span>
            Biological Intelligence
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Biological Performance Insights</h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            Detailed analysis of your metabolic, hormonal, and cognitive rhythms based on continuous biometric monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Stats */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <p className="text-slate-500 text-sm font-medium mb-1">Calorie Count</p>
              <h3 className="text-2xl font-bold">1,840 <span className="text-sm font-normal text-slate-400 italic">kcal/day</span></h3>
              <div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-3/4"></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <p className="text-slate-500 text-sm font-medium mb-1">Biological Age</p>
              <h3 className="text-2xl font-bold">28.4 <span className="text-sm font-normal text-green-500">-2.1 yrs</span></h3>
              <p className="text-xs text-slate-400 mt-2">Optimizing via current circadian alignment</p>
            </div>
            <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
              <div className="flex items-center gap-2 text-primary mb-3">
                <span className="material-symbols-outlined">lightbulb</span>
                <span className="text-sm font-bold uppercase">Today's Insight</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Your cortisol peak is delayed by 45 minutes today. Expect peak focus to arrive later in the morning.
              </p>
            </div>
          </aside>

          {/* Main Content / Chart Area */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-xl font-bold">Daily Cognitive & Energy Levels</h3>
                  <p className="text-slate-500 text-sm">24-hour biological cycle synchronization</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-primary"></span>
                    <span className="text-xs font-medium uppercase tracking-tighter">Energy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-blue-500"></span>
                    <span className="text-xs font-medium uppercase tracking-tighter">Cognitive</span>
                  </div>
                </div>
              </div>

              {/* Main Visualization Container */}
              <div className="relative h-[400px] w-full mt-10">
                {/* Y-Axis Labels */}
                <div className="absolute -left-8 inset-y-0 flex flex-col justify-between text-[10px] font-bold text-slate-400 py-4 uppercase">
                  <span>High</span>
                  <span>Mid</span>
                  <span>Low</span>
                </div>
                
                {/* Chart */}
                <div className="w-full h-full flex items-end justify-between border-l border-b border-slate-200 pb-2 relative">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
                    <div className="border-t border-slate-900 w-full"></div>
                    <div className="border-t border-slate-900 w-full"></div>
                    <div className="border-t border-slate-900 w-full"></div>
                  </div>

                  {/* The Wave Graph SVG */}
                  <div className="absolute inset-0 px-2 overflow-visible">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 400">
                      {/* Energy Path (Primary) */}
                      <path className="text-primary" d="M0,350 C100,340 150,50 250,60 C350,70 450,250 550,240 C650,230 750,150 850,170 C950,190 1000,380 1000,380" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
                      {/* Cognitive Path (Blue) */}
                      <path className="text-blue-500" d="M0,380 C100,360 200,80 300,90 C400,100 500,280 600,270 C700,260 800,300 900,320 C1000,340 1000,380 1000,380" fill="none" stroke="currentColor" strokeDasharray="8 4" strokeLinecap="round" strokeWidth="4"></path>
                      {/* Peak Markers */}
                      <circle className="fill-primary" cx="250" cy="60" r="6"></circle>
                      <circle className="fill-slate-400" cx="550" cy="240" r="6"></circle>
                    </svg>
                  </div>

                  {/* X-Axis Labels */}
                  <div className="absolute -bottom-8 inset-x-0 flex justify-between text-[10px] font-bold text-slate-400 px-2 uppercase">
                    <span>06:00</span>
                    <span>09:00</span>
                    <span>12:00</span>
                    <span>15:00</span>
                    <span>18:00</span>
                    <span>21:00</span>
                    <span>00:00</span>
                  </div>

                  {/* Peak Performance Windows Annotations */}
                  <div className="absolute top-[30px] left-[18%] w-[18%] text-center">
                    <div className="bg-primary text-white text-[10px] font-black py-1 px-2 rounded-full uppercase mb-2">
                      Peak Window
                    </div>
                    <div className="text-[11px] font-bold text-slate-800">Peak Cognitive Performance</div>
                    <div className="text-[9px] text-slate-500 uppercase">09:15 - 11:30</div>
                  </div>

                  <div className="absolute bottom-[40px] right-[5%] w-[18%] text-center">
                    <div className="bg-slate-200 text-slate-600 text-[10px] font-black py-1 px-2 rounded-full uppercase mb-2">
                      Lull Period
                    </div>
                    <div className="text-[11px] font-bold text-slate-800">Lowest Cognitive Performance</div>
                    <div className="text-[9px] text-slate-500 uppercase">23:00 - 05:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Phase Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border-l-4 border-primary border-slate-200 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <span className="material-symbols-outlined">rocket_launch</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400">AM PHASE</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Maximum Velocity</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Optimal for deep work, complex problem solving, and strategic decision making. Your neural firing rate is currently at its daily maximum.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500 border-slate-200 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                    <span className="material-symbols-outlined">nightlight</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400">PM PHASE</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Recovery & Consolidation</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Period of lower metabolic demand. Best suited for administrative tasks, reflection, and physiological wind-down protocols.
                </p>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl text-center border border-slate-200">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Alertness</p>
                <span className="text-xl font-black text-primary">94%</span>
              </div>
              <div className="bg-white p-4 rounded-xl text-center border border-slate-200">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Metabolic Rate</p>
                <span className="text-xl font-black text-slate-800">High</span>
              </div>
              <div className="bg-white p-4 rounded-xl text-center border border-slate-200">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Sleep Quality</p>
                <span className="text-xl font-black text-green-500">Optimal</span>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer Info */}
      <footer className="mt-auto border-t border-slate-200 py-6 px-10 text-center">
        <p className="text-xs text-slate-500">
          Data analyzed from integrated biosensors. Last sync: 2 minutes ago.
          <span className="mx-2">|</span>
          <a className="text-primary hover:underline" href="#">Download Biological PDF Report</a>
        </p>
      </footer>
    </div>
  );
}

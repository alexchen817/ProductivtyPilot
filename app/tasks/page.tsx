import React from "react";
import Link from "next/link";

export default function TasksManager() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header Section */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-white dark:bg-slate-900 sticky top-0 z-50">
          <div className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-3xl">calendar_apps_script</span>
            <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">SyncFlow</h2>
          </div>
          <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Timeline</Link>
            <Link href="/insights" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Insights</Link>
            <Link href="/tasks" className="text-primary font-bold border-b-2 border-primary pb-1">Tasks</Link>
            <Link href="/log" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Daily Log</Link>
          </nav>
          <div className="flex gap-3">
            <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-primary/20">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqJr2XPdJG_9V1lnmr4ronS2ve-7k-BV-DOrBkGPQ23ehQ8Ms2uDfHaveO1P3ogCaKoDo8ki_IsmdvJf4LLA_Ks6kfzxyvknHgR-JIGXunTm2qSBLBk3Gw0Nw5rWvg7wCPlYIzzWy7jX7xtoNQ3F_03xMgrhqBfdB3XqXAcD9WITKIQmRQFUufsol4ERBbXJ0qh_Kp0mtJ7cauprL_cunbUrOqe2VkXoMcKY1oEUX7uLEbMCj2eTAfQYAKMUcANg7Z9jEaJNvFr3tb" alt="User" />
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 md:px-20 py-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Calendar & Integrations */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Mini Calendar Component */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">October 2023</h3>
                  <div className="flex gap-1">
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"><span className="material-symbols-outlined">chevron_left</span></button>
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"><span className="material-symbols-outlined">chevron_right</span></button>
                  </div>
                </div>
                <div className="grid grid-cols-7 text-center text-sm mb-2 opacity-60">
                  <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                </div>
                <div className="grid grid-cols-7 gap-y-1">
                  <button className="h-10 flex items-center justify-center text-slate-400">28</button>
                  <button className="h-10 flex items-center justify-center text-slate-400">29</button>
                  <button className="h-10 flex items-center justify-center text-slate-400">30</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">1</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">2</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">3</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">4</button>
                  <button className="h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">5</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">6</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">7</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">8</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">9</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">10</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">11</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">12</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">13</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">14</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">15</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">16</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">17</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">18</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">19</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">20</button>
                  <button className="h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">21</button>
                </div>
              </div>

              {/* Integration Section */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">sync</span>
                  Calendar Sync
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg border border-primary/20 bg-primary/5">
                    <div className="flex items-center gap-3">
                      <div className="text-[#4285F4]">
                        <span className="material-symbols-outlined">calendar_today</span>
                      </div>
                      <span className="font-medium">Google Calendar</span>
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">CONNECTED</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                    <div className="flex items-center gap-3">
                      <div className="text-slate-900 dark:text-white">
                        <span className="material-symbols-outlined">brand_awareness</span>
                      </div>
                      <span className="font-medium">Apple Calendar</span>
                    </div>
                    <button className="text-xs font-bold text-primary hover:underline">CONNECT</button>
                  </div>
                </div>
              </div>

              {/* Fixed Events List (Read-only) */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">lock</span>
                  Fixed Events
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border-l-4 border-slate-400">
                    <div className="text-sm font-bold w-12 pt-1">09:00</div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">Product Stand-up</p>
                      <p className="text-xs opacity-60">Zoom Meeting • 30m</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 text-sm">event_repeat</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border-l-4 border-slate-400">
                    <div className="text-sm font-bold w-12 pt-1">11:30</div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">Doctor Appointment</p>
                      <p className="text-xs opacity-60">Central Clinic • 1h</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border-l-4 border-slate-400">
                    <div className="text-sm font-bold w-12 pt-1">15:00</div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">Stakeholder Review</p>
                      <p className="text-xs opacity-60">Boardroom B • 1.5h</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 text-sm">groups</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Flexible Tasks */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Task Header Card */}
              <div className="bg-primary/10 rounded-xl p-8 border border-primary/20 flex items-center gap-6">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Flexible Tasks</h1>
                  <p className="text-slate-600 dark:text-slate-400">Drag and drop these tasks into your available gaps for maximum efficiency.</p>
                </div>
                <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined">add</span>
                  New Task
                </button>
              </div>

              {/* Tasks List */}
              <div className="grid grid-cols-1 gap-4">
                {/* Task 1: High Focus */}
                <div className="group bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all cursor-pointer">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex items-center justify-center size-10 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                        <span className="material-symbols-outlined">psychology</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg group-hover:text-primary transition-colors">Complete Design System Documentation</h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="flex items-center gap-1 text-xs font-medium text-slate-500"><span className="material-symbols-outlined text-sm">schedule</span> 2h 30m</span>
                          <span className="flex items-center gap-1 text-xs font-bold text-red-600 bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded-full uppercase tracking-wider border border-red-100 dark:border-red-900/30">High Focus</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400"><span className="material-symbols-outlined">edit</span></button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400"><span className="material-symbols-outlined">drag_indicator</span></button>
                    </div>
                  </div>
                </div>

                {/* Task 2: Low Focus */}
                <div className="group bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all cursor-pointer">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex items-center justify-center size-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg group-hover:text-primary transition-colors">Review Pending Email Submissions</h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="flex items-center gap-1 text-xs font-medium text-slate-500"><span className="material-symbols-outlined text-sm">schedule</span> 45m</span>
                          <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full uppercase tracking-wider border border-green-100 dark:border-green-900/30">Low Focus</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400"><span className="material-symbols-outlined">edit</span></button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400"><span className="material-symbols-outlined">drag_indicator</span></button>
                    </div>
                  </div>
                </div>

                {/* Task 3: High Focus */}
                <div className="group bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all cursor-pointer">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex items-center justify-center size-10 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                        <span className="material-symbols-outlined">code</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg group-hover:text-primary transition-colors">Debug API Authentication Issue</h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="flex items-center gap-1 text-xs font-medium text-slate-500"><span className="material-symbols-outlined text-sm">schedule</span> 1h 15m</span>
                          <span className="flex items-center gap-1 text-xs font-bold text-red-600 bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded-full uppercase tracking-wider border border-red-100 dark:border-red-900/30">High Focus</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400"><span className="material-symbols-outlined">edit</span></button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400"><span className="material-symbols-outlined">drag_indicator</span></button>
                    </div>
                  </div>
                </div>

                {/* Task 4: Low Focus */}
                <div className="group bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all cursor-pointer">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex items-center justify-center size-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                        <span className="material-symbols-outlined">receipt_long</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg group-hover:text-primary transition-colors">Submit Travel Expenses</h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="flex items-center gap-1 text-xs font-medium text-slate-500"><span className="material-symbols-outlined text-sm">schedule</span> 20m</span>
                          <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full uppercase tracking-wider border border-green-100 dark:border-green-900/30">Low Focus</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400"><span className="material-symbols-outlined">edit</span></button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400"><span className="material-symbols-outlined">drag_indicator</span></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Focus Summary Card */}
              <div className="mt-4 bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-4">Cognitive Load Analysis</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Total High Focus Time</span>
                        <span className="font-bold text-red-600">3h 45m</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Total Low Focus Time</span>
                        <span className="font-bold text-green-600">1h 05m</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/5 p-4 border-t border-primary/10 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">info</span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Pro Tip: Schedule your <span className="font-bold text-red-600">High Focus</span> tasks during your peak productivity hours, usually between 9 AM and 11 AM.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

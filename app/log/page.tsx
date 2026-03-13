"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function DailyLog() {
  const [gi, setGi] = useState<number>(0);
  const [carbs, setCarbs] = useState<number>(0);
  const [fiber, setFiber] = useState<number>(0);

  const calculateGL = () => {
    return (gi * (carbs - fiber)) / 100;
  };

  const getGLSeverity = (gl: number) => {
    if (gi === 0 && carbs === 0 && fiber === 0) return { label: "N/A", color: "text-slate-400" };
    if (gl <= 10) return { label: "Small Spike", color: "text-green-500 bg-green-50 dark:bg-green-900/20" };
    if (gl <= 19) return { label: "Moderate Spike", color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20" };
    return { label: "Large Spike", color: "text-red-500 bg-red-50 dark:bg-red-900/20" };
  };

  const currentGL = calculateGL();
  const severity = getGLSeverity(currentGL);

  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-10 py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-10 rounded-xl bg-primary text-white">
            <span className="material-symbols-outlined">edit_note</span>
          </div>
          <div>
            <h2 className="text-lg font-bold leading-tight tracking-tight">Daily Log</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Track your performance indicators</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Timeline</Link>
          <Link href="/insights" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Insights</Link>
          <Link href="/tasks" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Tasks</Link>
          <Link href="/log" className="text-primary font-bold border-b-2 border-primary pb-1">Daily Log</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center rounded-xl size-10 bg-slate-200/50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined">calendar_today</span>
          </button>
          <button className="flex items-center justify-center rounded-xl size-10 bg-slate-200/50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="h-10 w-10 rounded-full border-2 border-primary bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoP4CSBIsHApgOXQflQJOGKafhH1vyq4vZ7nj9_La_8OqAfZ3-NF6_I3Nn3GEWBA3GrfLVvbaGwLOHHLGgA44Sc2qvKN29LVlF8zYsA4OhTQG480LvdPAU02aUTXDtq6Fuu52oNRjUrfNzmdeREE6TNvbnGeo9-EuMdsl4tsTXgALVHH87vUe8NOrKk8GRsKeBwIW1_ygLCtxXq4n_vDyMeZoWYoGr37shCU8dL5eodkBa_GD_MrmEzRsRRqzMFknhIP44lqSu4MNK')" }}></div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 md:px-10 py-8">
        <div className="mx-auto max-w-[800px] flex flex-col gap-8">
          {/* Page Intro */}
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold">Log Entry for Today</h1>
            <p className="text-slate-500 dark:text-slate-400">Complete these sections to see your productivity insights tomorrow.</p>
          </div>

          {/* Sleep Data Section */}
          <section className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">bedtime</span>
              <h2 className="text-xl font-bold">Sleep Data</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Wake Time</span>
                <input className="form-input rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-primary w-full h-12 px-4" type="time" defaultValue="07:00"/>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Duration (hours)</span>
                <div className="relative">
                  <input className="form-input rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-primary w-full h-12 px-4" placeholder="8.0" step="0.5" type="number" defaultValue="8.0" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">hrs</span>
                </div>
              </label>
            </div>
          </section>

          {/* Dietary Events Section with Glycemic Load */}
          <section className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">restaurant</span>
                <h2 className="text-xl font-bold">Dietary Events & Glycemic Load</h2>
              </div>
              <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                <span className="material-symbols-outlined text-sm">add</span> Add Meal
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="flex flex-wrap md:flex-nowrap gap-4">
                  <select className="form-select flex-1 min-w-[120px] rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-primary focus:ring-primary text-sm">
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Snack</option>
                  </select>
                  <input className="form-input flex-1 min-w-[120px] rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-primary focus:ring-primary text-sm" type="time" defaultValue="08:30"/>
                  <input className="form-input flex-[2] min-w-[200px] rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-primary focus:ring-primary text-sm" placeholder="What did you eat?" type="text"/>
                  <button className="text-slate-400 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
                
                {/* Glycemic Load Calculator */}
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-2">
                  <p className="text-sm font-medium mb-3 flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-sm text-primary">calculate</span>
                    Glycemic Level Calculator
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <label className="flex flex-col gap-1">
                      <span className="text-xs text-slate-500">Glycemic Index</span>
                      <input 
                        className="form-input rounded-md border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm h-9 px-3" 
                        type="number" 
                        value={gi || ""} 
                        onChange={(e) => setGi(Number(e.target.value))} 
                        placeholder="e.g. 55"
                      />
                    </label>
                    <label className="flex flex-col gap-1">
                      <span className="text-xs text-slate-500">Carbs (g)</span>
                      <input 
                        className="form-input rounded-md border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm h-9 px-3" 
                        type="number" 
                        value={carbs || ""} 
                        onChange={(e) => setCarbs(Number(e.target.value))}
                        placeholder="e.g. 40" 
                      />
                    </label>
                    <label className="flex flex-col gap-1">
                      <span className="text-xs text-slate-500">Fiber (g)</span>
                      <input 
                        className="form-input rounded-md border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm h-9 px-3" 
                        type="number" 
                        value={fiber || ""} 
                        onChange={(e) => setFiber(Number(e.target.value))} 
                        placeholder="e.g. 5"
                      />
                    </label>
                  </div>
                  <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-xs block text-slate-500 mb-1">Calculated Glycemic Load:</span>
                      <span className="font-bold text-lg">{currentGL > 0 ? currentGL.toFixed(1) : "0.0"}</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold border ${severity.color} ${severity.label === "N/A" ? "border-slate-200 dark:border-slate-800" : "border-transparent"}`}>
                      {severity.label}
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2 text-right italic">Formula: [GI * (Carbs - Fiber)] / 100</p>
                </div>
              </div>
            </div>
          </section>

          {/* Stimulant Events Section */}
          <section className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">coffee</span>
              <h2 className="text-xl font-bold">Stimulant Events</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-primary/10 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">coffee</span> Coffee
              </button>
              <button className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-primary/10 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">local_cafe</span> Tea
              </button>
              <button className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-primary/10 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">energy_savings_leaf</span> Energy Drink
              </button>
              <button className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-primary/10 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">add</span> Custom
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Intake Time</span>
              <input className="form-input rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-primary max-w-[200px] h-12 px-4" type="time" defaultValue="14:30"/>
            </div>
          </section>

          {/* Physical Exhaustion Section */}
          <section className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">fitness_center</span>
              <h2 className="text-xl font-bold">Physical Exhaustion</h2>
            </div>
            <div className="flex flex-col gap-8">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Activity Type</span>
                <input className="form-input rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-primary w-full h-12 px-4" placeholder="e.g. Running, HIIT, Yoga" type="text"/>
              </label>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Perceived Exertion Level</span>
                  <span className="text-primary font-bold text-lg" id="exertion-val">7 / 10</span>
                </div>
                <input className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary" max="10" min="1" type="range" defaultValue="7"/>
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>RELAXED</span>
                  <span>MODERATE</span>
                  <span>INTENSE</span>
                </div>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-12">
            <button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">save</span>
              Save Daily Log
            </button>
            <button className="flex-1 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold py-4 rounded-xl transition-all">
              Cancel
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

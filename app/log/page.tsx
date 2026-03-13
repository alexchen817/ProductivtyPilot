"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function DailyLog() {
  const [wakeTime, setWakeTime] = useState("07:00");
  const [sleepDuration, setSleepDuration] = useState("8.0");

  const [dietEvents, setDietEvents] = useState([
    { id: 1, meal_time: "08:30", meal_type: "Balanced" }
  ]);

  const [stimulantEvents, setStimulantEvents] = useState([
    { id: 1, activity_time: "14:30", exertion_level: 7 }
  ]);

  const addDietEvent = () => {
    setDietEvents([...dietEvents, { id: Date.now(), meal_time: "12:00", meal_type: "Balanced" }]);
  };

  const addStimulantEvent = () => {
    setStimulantEvents([...stimulantEvents, { id: Date.now(), activity_time: "17:00", exertion_level: 5 }]);
  };

  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <main className="flex-1 overflow-y-auto px-4 md:px-10 py-8">
        <div className="mx-auto max-w-[800px] flex flex-col gap-8">
          {/* Page Intro */}
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold">Log Entry for Today</h1>
            <p className="text-slate-500">Complete these sections to see your productivity insights tomorrow.</p>
          </div>

          {/* Sleep Data Section */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
               <span className="material-symbols-outlined text-primary">bedtime</span>
              <h2 className="text-xl font-bold">Sleep Data (Daily Start State)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-700">wake_time (Timestamp)</span>
                <input 
                  className="form-input rounded-xl border-slate-200 bg-slate-50 focus:border-primary focus:ring-primary w-full h-12 px-4" 
                  type="time" 
                  value={wakeTime}
                  onChange={(e) => setWakeTime(e.target.value)}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-700">sleep_duration (Hours)</span>
                <div className="relative">
                  <input 
                    className="form-input rounded-xl border-slate-200 bg-slate-50 focus:border-primary focus:ring-primary w-full h-12 px-4" 
                    placeholder="8.0" 
                    step="0.5" 
                    type="number" 
                    value={sleepDuration}
                    onChange={(e) => setSleepDuration(e.target.value)}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">hrs</span>
                </div>
              </label>
            </div>
          </section>

          {/* Dietary Events Section */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">restaurant</span>
                <h2 className="text-xl font-bold">Dietary Events (The Disruptors)</h2>
              </div>
              <button onClick={addDietEvent} className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                <span className="material-symbols-outlined text-sm">add</span> Add Meal
              </button>
            </div>

            <p className="text-sm text-slate-500 mb-4">
              Track metabolic load. For example, a high-carb meal triggers a predictable 90-minute energy dip starting 30-45 minutes after consumption.
            </p>

            <div className="flex flex-col gap-4">
              {dietEvents.map((event, index) => (
                <div key={event.id} className="flex flex-col gap-4 p-5 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex flex-wrap md:flex-nowrap gap-4">
                    <label className="flex-1 min-w-[120px]">
                      <span className="text-xs font-medium text-slate-500 mb-1 block">meal_time</span>
                      <input 
                        className="form-input w-full rounded-lg border-slate-200 bg-white focus:border-primary focus:ring-primary text-sm h-10 px-3" 
                        type="time" 
                        value={event.meal_time}
                        onChange={(e) => {
                          const newEvents = [...dietEvents];
                          newEvents[index].meal_time = e.target.value;
                          setDietEvents(newEvents);
                        }}
                      />
                    </label>
                    <label className="flex-[2] min-w-[200px]">
                      <span className="text-xs font-medium text-slate-500 mb-1 block">meal_type</span>
                      <select 
                        className="form-select w-full rounded-lg border-slate-200 bg-white focus:border-primary focus:ring-primary text-sm h-10 px-3"
                        value={event.meal_type}
                        onChange={(e) => {
                          const newEvents = [...dietEvents];
                          newEvents[index].meal_type = e.target.value;
                          setDietEvents(newEvents);
                        }}
                      >
                        <option value="High-Carb">High-Carb</option>
                        <option value="High-Protein">High-Protein</option>
                        <option value="Balanced">Balanced</option>
                        <option value="Light Snack">Light Snack</option>
                        <option value="Stimulants">Stimulants</option>
                      </select>
                    </label>
                    <div className="flex items-end pb-1">
                      <button 
                        className="text-slate-400 hover:text-red-500 transition-colors h-10 w-10 flex items-center justify-center"
                        onClick={() => {
                          const newEvents = dietEvents.filter((_, i) => i !== index);
                          setDietEvents(newEvents);
                        }}
                      >
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stimulant/Physical Events Section */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">fitness_center</span>
                <h2 className="text-xl font-bold">Stimulant Events (The Boosters)</h2>
              </div>
              <button onClick={addStimulantEvent} className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                <span className="material-symbols-outlined text-sm">add</span> Add Event
              </button>
            </div>
            
            <p className="text-sm text-slate-500 mb-4">
              A heavy training session will lower the overall cognitive baseline for the rest of the day.
            </p>

            <div className="flex flex-col gap-6">
              {stimulantEvents.map((event, index) => (
                <div key={event.id} className="flex flex-col gap-6 p-5 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex justify-between items-start">
                    <label className="flex flex-col gap-2 w-1/2">
                      <span className="text-sm font-medium text-slate-700">activity_time (Timestamp)</span>
                      <input 
                        className="form-input rounded-xl border-slate-200 bg-white focus:border-primary focus:ring-primary w-full h-12 px-4" 
                        type="time" 
                        value={event.activity_time}
                        onChange={(e) => {
                          const newEvents = [...stimulantEvents];
                          newEvents[index].activity_time = e.target.value;
                          setStimulantEvents(newEvents);
                        }}
                      />
                    </label>
                    <button 
                      className="text-slate-400 hover:text-red-500 transition-colors mt-8"
                      onClick={() => {
                        const newEvents = stimulantEvents.filter((_, i) => i !== index);
                        setStimulantEvents(newEvents);
                      }}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-medium text-slate-700">exertion_level (Scale 1-10)</span>
                      <span className="text-primary font-bold text-lg">{event.exertion_level} / 10</span>
                    </div>
                    <input 
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" 
                      max="10" 
                      min="1" 
                      type="range" 
                      value={event.exertion_level}
                      onChange={(e) => {
                        const newEvents = [...stimulantEvents];
                        newEvents[index].exertion_level = parseInt(e.target.value, 10);
                        setStimulantEvents(newEvents);
                      }}
                    />
                    <div className="flex justify-between text-xs text-slate-400 font-medium">
                      <span>1 (RELAXED)</span>
                      <span>5 (MODERATE)</span>
                      <span>10 (INTENSE)</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-12">
            <button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">save</span>
              Save Daily Log
            </button>
            <button className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-4 rounded-xl transition-all">
              Cancel
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

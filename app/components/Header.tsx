"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-primary/10 bg-background-light/80 backdrop-blur-md px-6 md:px-10 py-3">
      <div className="flex items-center gap-4">
        <img src="/favicon.ico" alt="Productivity Pilot Logo" className="w-8 h-8 rounded-md" />
        <h2 className="text-xl font-bold tracking-tight">Productivity Pilot</h2>
      </div>
      <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
        <Link href="/" className={`transition-colors ${pathname === '/' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-slate-500 hover:text-primary'}`}>Timeline</Link>
        <Link href="/insights" className={`transition-colors ${pathname === '/insights' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-slate-500 hover:text-primary'}`}>Insights</Link>
        <Link href="/tasks" className={`transition-colors ${pathname === '/tasks' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-slate-500 hover:text-primary'}`}>Tasks</Link>
        <Link href="/log" className={`transition-colors ${pathname === '/log' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-slate-500 hover:text-primary'}`}>Daily Log</Link>
      </nav>
      <div className="flex items-center gap-3">
        <button className="flex items-center justify-center rounded-xl size-10 bg-slate-200/50 text-slate-700 hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined">calendar_today</span>
        </button>
        <button className="flex items-center justify-center rounded-xl size-10 bg-slate-200/50 text-slate-700 hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="size-10 rounded-full bg-slate-200 overflow-hidden border border-primary/20 flex items-center justify-center">
          <img alt="User" className="w-full h-full object-cover" src="/IMG_2016.jpg" />
        </div>
      </div>
    </header>
  );
}

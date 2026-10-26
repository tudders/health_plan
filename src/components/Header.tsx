import React from 'react';
import { ActiveTab } from '../types';
import { Stethoscope, FileText } from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenReport: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenReport
}) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark in high-character display */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('overview')}
            className="text-left group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
              <Stethoscope className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              NeuroImmune Axis
            </span>
          </button>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden xl:flex items-center gap-4 text-xs xl:text-sm font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`transition-colors whitespace-nowrap py-1 ${
              activeTab === 'overview'
                ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Executive Summary
          </button>

          <button
            onClick={() => setActiveTab('pathology')}
            className={`transition-colors whitespace-nowrap py-1 ${
              activeTab === 'pathology'
                ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Circuit Cascade
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`transition-colors whitespace-nowrap py-1 ${
              activeTab === 'matrix'
                ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            SCT vs ADHD Matrix
          </button>

          <button
            onClick={() => setActiveTab('iq-fatigue')}
            className={`transition-colors whitespace-nowrap py-1 ${
              activeTab === 'iq-fatigue'
                ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            IQ & Fatigability
          </button>

          <button
            onClick={() => setActiveTab('pharmacy')}
            className={`transition-colors whitespace-nowrap py-1 ${
              activeTab === 'pharmacy'
                ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Pharmacotherapy
          </button>

          <button
            onClick={() => setActiveTab('exercise')}
            className={`transition-colors whitespace-nowrap py-1 ${
              activeTab === 'exercise'
                ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Physical Exercises 🏃
          </button>

          <button
            onClick={() => setActiveTab('exercises')}
            className={`transition-colors whitespace-nowrap py-1 ${
              activeTab === 'exercises'
                ? 'text-teal-400 font-semibold border-b-2 border-teal-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Exercises (Brain & Body) 🎯
          </button>

          <button
            onClick={() => setActiveTab('deep-dive')}
            className={`transition-colors whitespace-nowrap py-1 ${
              activeTab === 'deep-dive'
                ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Mechanisms & Fluency
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`transition-colors whitespace-nowrap py-1 ${
              activeTab === 'simulator'
                ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Flare Simulator
          </button>

          <button
            onClick={() => setActiveTab('vascular')}
            className={`transition-colors whitespace-nowrap py-1 ${
              activeTab === 'vascular'
                ? 'text-rose-400 font-semibold border-b-2 border-rose-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Vascular Health
          </button>

          <button
            onClick={() => setActiveTab('protocol')}
            className={`transition-colors whitespace-nowrap py-1 ${
              activeTab === 'protocol'
                ? 'text-emerald-400 font-semibold border-b-2 border-emerald-400'
                : 'text-emerald-400/80 hover:text-emerald-300 font-medium'
            }`}
          >
            Unified Protocol ✨
          </button>

          <button
            onClick={() => setActiveTab('condition-matrix')}
            className={`transition-colors whitespace-nowrap py-1 ${
              activeTab === 'condition-matrix'
                ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                : 'text-amber-400/80 hover:text-amber-300 font-medium'
            }`}
          >
            Efficacy Matrix ⚡
          </button>

          <button
            onClick={() => setActiveTab('catalog')}
            className={`transition-colors whitespace-nowrap py-1 ${
              activeTab === 'catalog'
                ? 'text-indigo-400 font-semibold border-b-2 border-indigo-400'
                : 'text-indigo-400/80 hover:text-indigo-300 font-medium'
            }`}
          >
            Master Inventory 📋
          </button>

          <button
            onClick={() => setActiveTab('evidence')}
            className={`transition-colors whitespace-nowrap py-1 ${
              activeTab === 'evidence'
                ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Evidence
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenReport}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors whitespace-nowrap shadow-sm shadow-cyan-950"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Clinical Profiler</span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Horizontal Navigation Scroller */}
      <div className="xl:hidden flex items-center gap-2 px-4 py-2 border-t border-slate-900 bg-slate-950/95 overflow-x-auto no-scrollbar text-xs">
        {[
          { id: 'overview', label: 'Summary' },
          { id: 'pathology', label: 'Circuit' },
          { id: 'matrix', label: 'SCT vs ADHD' },
          { id: 'iq-fatigue', label: 'IQ & Fatigue' },
          { id: 'pharmacy', label: 'Pharma' },
          { id: 'exercise', label: 'Physical 🏃' },
          { id: 'exercises', label: 'Brain Drills 🎯' },
          { id: 'deep-dive', label: 'Mechanisms' },
          { id: 'simulator', label: 'Simulator' },
          { id: 'vascular', label: 'Vascular' },
          { id: 'protocol', label: 'Unified Protocol ✨' },
          { id: 'condition-matrix', label: 'Efficacy Matrix ⚡' },
          { id: 'catalog', label: 'Master Inventory 📋' },
          { id: 'evidence', label: 'Evidence' },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id as ActiveTab)}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-colors ${
              activeTab === t.id
                ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/40'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </header>
  );
};

import React, { useState, useMemo } from 'react';
import {
  MATRIX_ELEMENTS,
  CONDITION_PROFILES,
  ELEMENT_CATEGORIES,
  IMPACT_VERDICT_OPTIONS,
  ConditionProfileMeta
} from '../data/matrixData';
import {
  MatrixElement,
  ConditionProfileKey,
  ElementCategory,
  ImpactVerdict,
  ActiveTab
} from '../types';
import {
  Filter,
  Search,
  SlidersHorizontal,
  Info,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Dumbbell,
  Pill,
  Leaf,
  Activity,
  Layers,
  Sparkles,
  ArrowUpDown,
  X,
  Copy,
  Check,
  ChevronRight,
  ShieldCheck,
  Flame,
  Brain
} from 'lucide-react';

type ViewMode = 'two-way-grid' | 'by-condition' | 'by-element';

interface ConditionElementMatrixProps {
  onNavigateToTab?: (tab: ActiveTab) => void;
}

export const ConditionElementMatrix: React.FC<ConditionElementMatrixProps> = ({
  onNavigateToTab
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('two-way-grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedVerdictFilter, setSelectedVerdictFilter] = useState<string>('All Impacts');
  const [activeConditionKey, setActiveConditionKey] = useState<ConditionProfileKey>('pelvic');
  const [selectedElementForDrawer, setSelectedElementForDrawer] = useState<MatrixElement | null>(null);
  const [copiedElementId, setCopiedElementId] = useState<string | null>(null);

  // Category Icon helper
  const getCategoryIcon = (category: ElementCategory) => {
    switch (category) {
      case 'Physical Exercise':
      case 'Exercise & Physical':
        return <Dumbbell className="w-3.5 h-3.5 text-blue-400" />;
      case 'Cognitive & Brain Exercises':
        return <Brain className="w-3.5 h-3.5 text-cyan-400" />;
      case 'Vitamins & Nutrients':
        return <Sparkles className="w-3.5 h-3.5 text-amber-400" />;
      case 'Pharmacotherapy':
        return <Pill className="w-3.5 h-3.5 text-emerald-400" />;
      case 'Botanicals & Cannabinoids':
        return <Leaf className="w-3.5 h-3.5 text-teal-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  // Verdict style token helper
  const getVerdictStyle = (verdict: ImpactVerdict) => {
    switch (verdict) {
      case 'Gold Helper':
        return {
          badge: 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60',
          text: 'text-emerald-400',
          dot: 'bg-emerald-400',
          icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
        };
      case 'Moderate Helper':
        return {
          badge: 'bg-cyan-950/80 text-cyan-300 border-cyan-700/60',
          text: 'text-cyan-400',
          dot: 'bg-cyan-400',
          icon: <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
        };
      case 'Contextual / Neutral':
        return {
          badge: 'bg-amber-950/80 text-amber-300 border-amber-700/60',
          text: 'text-amber-400',
          dot: 'bg-amber-400',
          icon: <Info className="w-3.5 h-3.5 text-amber-400" />
        };
      case 'Caution':
        return {
          badge: 'bg-orange-950/80 text-orange-300 border-orange-700/60',
          text: 'text-orange-400',
          dot: 'bg-orange-400',
          icon: <AlertTriangle className="w-3.5 h-3.5 text-orange-400" />
        };
      case 'Severe Hinder':
        return {
          badge: 'bg-rose-950/80 text-rose-300 border-rose-700/60',
          text: 'text-rose-400',
          dot: 'bg-rose-400',
          icon: <XCircle className="w-3.5 h-3.5 text-rose-400" />
        };
    }
  };

  // Rating badge color based on numeric rating
  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'text-emerald-400';
    if (rating >= 3.5) return 'text-cyan-400';
    if (rating >= 2.5) return 'text-amber-400';
    if (rating >= 2.0) return 'text-orange-400';
    return 'text-rose-400';
  };

  // Filtered elements
  const filteredElements = useMemo(() => {
    return MATRIX_ELEMENTS.filter(element => {
      // Category filter
      if (selectedCategory !== 'All Categories' && element.category !== selectedCategory) {
        return false;
      }

      // Verdict filter
      if (selectedVerdictFilter === 'Gold Helpers (4.5★ - 5.0★)' && element.overallRating < 4.5) {
        return false;
      }
      if (selectedVerdictFilter === 'Moderate Helpers (3.5★ - 4.4★)' && (element.overallRating < 3.5 || element.overallRating >= 4.5)) {
        return false;
      }
      if (selectedVerdictFilter === 'Cautions (2.0★ - 3.4★)' && (element.overallRating < 2.0 || element.overallRating >= 3.5)) {
        return false;
      }
      if (selectedVerdictFilter === 'Severe Hinders (0.0★ - 1.9★)' && element.overallRating >= 2.0) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = element.name.toLowerCase().includes(q);
        const matchesSummary = element.summary.toLowerCase().includes(q);
        const matchesReceptors = element.targetReceptors?.some(r => r.toLowerCase().includes(q));
        const matchesMechanisms = Object.values(element.conditionImpacts).some(imp =>
          imp.mechanism.toLowerCase().includes(q) || imp.clinicalPearl.toLowerCase().includes(q)
        );
        return matchesName || matchesSummary || matchesReceptors || matchesMechanisms;
      }

      return true;
    });
  }, [selectedCategory, selectedVerdictFilter, searchQuery]);

  // Elements ranked for active condition
  const rankedConditionElements = useMemo(() => {
    return [...filteredElements].sort((a, b) => {
      const ratingA = a.conditionImpacts[activeConditionKey].rating;
      const ratingB = b.conditionImpacts[activeConditionKey].rating;
      return ratingB - ratingA;
    });
  }, [filteredElements, activeConditionKey]);

  // Handle copy to clipboard
  const handleCopyElement = (element: MatrixElement) => {
    const text = [
      `ELEMENT: ${element.name} (${element.category})`,
      `OVERALL RATING: ${element.overallRating.toFixed(1)}/5.0 ★ [${element.overallVerdict}]`,
      `DOSAGE/DELIVERY: ${element.deliveryOrDosing}`,
      element.exerciseLimits ? `PACING LIMITS: Duration: ${element.exerciseLimits.maxDuration} | Exertion: ${element.exerciseLimits.exertionCeiling} | Freq: ${element.exerciseLimits.weeklyFrequency}` : '',
      `SUMMARY: ${element.summary}`,
      '',
      '--- CONDITION IMPACT PROFILE ---',
      ...Object.entries(element.conditionImpacts).map(([key, impact]) => {
        const cond = CONDITION_PROFILES[key as ConditionProfileKey];
        return `• ${cond.label}: ${impact.rating.toFixed(1)}/5.0 ★ [${impact.verdict}]\n  Mechanism: ${impact.mechanism}\n  Pearl: ${impact.clinicalPearl}`;
      })
    ].filter(Boolean).join('\n');

    navigator.clipboard.writeText(text);
    setCopiedElementId(element.id);
    setTimeout(() => setCopiedElementId(null), 2500);
  };

  const conditionKeys: ConditionProfileKey[] = ['mcas', 'brain-fog', 'vascular', 'slow-comt', 'pelvic'];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* ─────────────────────────────────────────────────────────────────────────────
          1. HEADER & HIGH-LEVEL OVERVIEW
      ───────────────────────────────────────────────────────────────────────────── */}
      <section className="p-6 md:p-8 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>Multi-System Phenotype Cross-Reference</span>
              <span>·</span>
              <span>2-Way Matrix Architecture</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Condition × Element Efficacy Matrix
            </h1>
            <p className="text-sm text-slate-300 max-w-4xl leading-relaxed">
              Exhaustive bidirectional matrix mapping how specific physical modalities, micronutrients, pharmaceuticals, and botanicals interact across your 5 core conditions: <strong className="text-emerald-400">MCAS</strong>, <strong className="text-cyan-400">Brain Fog (SCT)</strong>, <strong className="text-sky-400">Vascular/Orthostatic</strong>, <strong className="text-amber-400">Slow COMT (Met/Met)</strong>, and <strong className="text-rose-400">Pelvic Tone & Lifelong Anorgasmia</strong>.
            </p>
          </div>

          {/* Quick Metrics Bar & Master Inventory Link */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="flex items-center gap-3 bg-slate-950/80 p-3 rounded-lg border border-slate-800/80 text-xs font-mono">
              <div className="text-center px-2">
                <div className="text-base font-bold text-cyan-300 tabular-nums">{MATRIX_ELEMENTS.length}</div>
                <div className="text-[10px] text-slate-400 uppercase">Elements</div>
              </div>
              <div className="w-px h-6 bg-slate-800" />
              <div className="text-center px-2">
                <div className="text-base font-bold text-emerald-300 tabular-nums">5</div>
                <div className="text-[10px] text-slate-400 uppercase">Conditions</div>
              </div>
              <div className="w-px h-6 bg-slate-800" />
              <div className="text-center px-2">
                <div className="text-base font-bold text-amber-300 tabular-nums">{MATRIX_ELEMENTS.length * 5}</div>
                <div className="text-[10px] text-slate-400 uppercase">Cross-Links</div>
              </div>
            </div>

            {onNavigateToTab && (
              <button
                onClick={() => onNavigateToTab('catalog')}
                className="px-3.5 py-2.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>Master Inventory 📋</span>
              </button>
            )}
          </div>
        </div>

        {/* Clinical Note Callout */}
        <div className="p-3.5 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-xs text-slate-300 flex items-start gap-3">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-cyan-300">Bidirectional Clinical Reality:</span>
            <span> An intervention that is a 5-star gold standard for one condition can simultaneously be a severe hazard for another (e.g., Vitamin K2 MK-7 benefits vascular bones but causes refractory tachycardia in Slow COMT; skipping benefits cerebral blood flow but aggravates pelvic pudendal compression; acute THC relieves pelvic cramps but worsens chronic working memory and visceral hypersensitivity).</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────────
          2. VIEW MODE SEGMENTED CONTROL & FILTERS
      ───────────────────────────────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Mode Selector Tabs */}
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-lg">
            <button
              onClick={() => setViewMode('two-way-grid')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-2 ${
                viewMode === 'two-way-grid'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Two-Way Heat Grid</span>
            </button>

            <button
              onClick={() => setViewMode('by-condition')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-2 ${
                viewMode === 'by-condition'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Condition Leaderboards</span>
            </button>

            <button
              onClick={() => setViewMode('by-element')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-2 ${
                viewMode === 'by-element'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Element Deep Breakdown</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search elements, mechanisms, or receptors..."
              className="w-full pl-9 pr-8 py-1.5 text-xs bg-slate-900/90 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Ribbons */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-800/60">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span className="font-mono text-[11px] uppercase">Category:</span>
          </div>

          {ELEMENT_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 text-xs rounded-md border transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-slate-800 text-cyan-300 border-cyan-500/50 font-medium'
                  : 'bg-slate-950/70 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}

          <div className="w-px h-4 bg-slate-800 mx-1 hidden sm:block" />

          {/* Verdict Filter */}
          <div className="flex items-center gap-1.5 ml-auto">
            <span className="text-[11px] font-mono uppercase text-slate-500">Verdict:</span>
            <select
              value={selectedVerdictFilter}
              onChange={e => setSelectedVerdictFilter(e.target.value)}
              className="text-xs bg-slate-900 border border-slate-800 rounded-md px-2.5 py-1 text-slate-300 focus:outline-none focus:border-cyan-400"
            >
              {IMPACT_VERDICT_OPTIONS.map(opt => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────────
          3. VIEW MODE A: TWO-WAY HEAT GRID (DEFAULT)
      ───────────────────────────────────────────────────────────────────────────── */}
      {viewMode === 'two-way-grid' && (
        <section className="space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-950/90 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[950px]">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/90 text-xs">
                    <th className="p-3.5 font-semibold text-slate-200 sticky left-0 z-20 bg-slate-900 w-64 border-r border-slate-800">
                      Therapeutic Element
                    </th>
                    {conditionKeys.map(key => {
                      const profile = CONDITION_PROFILES[key];
                      return (
                        <th key={key} className="p-3 font-semibold text-slate-200 text-center w-56 border-r border-slate-800/80 last:border-r-0">
                          <div className="space-y-0.5">
                            <span className="text-xs text-white block">{profile.shortLabel}</span>
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-normal">
                              {profile.badge}
                            </span>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-xs">
                  {filteredElements.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-slate-500">
                        No elements match the current search or filter combination.
                      </td>
                    </tr>
                  ) : (
                    filteredElements.map((element, idx) => (
                      <tr
                        key={element.id}
                        className={`hover:bg-slate-900/60 transition-colors ${
                          idx % 2 === 0 ? 'bg-slate-950/40' : 'bg-slate-900/20'
                        }`}
                      >
                        {/* Sticky Left Column: Element Identity */}
                        <td className="p-3 sticky left-0 z-10 bg-slate-950/95 border-r border-slate-800">
                          <button
                            onClick={() => setSelectedElementForDrawer(element)}
                            className="text-left group w-full focus:outline-none"
                          >
                            <div className="flex items-center gap-1.5">
                              {getCategoryIcon(element.category)}
                              <span className="font-semibold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                                {element.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400 font-mono">
                              <span className={`font-semibold ${getRatingColor(element.overallRating)}`}>
                                {element.overallRating.toFixed(1)}★
                              </span>
                              <span>·</span>
                              <span className="text-slate-500 truncate max-w-[140px]">{element.category}</span>
                            </div>
                            {element.exerciseLimits && (
                              <div className="mt-1 text-[10px] text-cyan-400 font-mono">
                                ⚡ Pacing Limits Defined
                              </div>
                            )}
                          </button>
                        </td>

                        {/* Condition Cross-Link Cells */}
                        {conditionKeys.map(condKey => {
                          const impact = element.conditionImpacts[condKey];
                          const style = getVerdictStyle(impact.verdict);
                          return (
                            <td
                              key={condKey}
                              onClick={() => setSelectedElementForDrawer(element)}
                              className="p-2.5 text-center cursor-pointer border-r border-slate-800/80 last:border-r-0 hover:bg-slate-800/50 transition-colors group"
                            >
                              <div className="space-y-1">
                                {/* Rating and Star Chip */}
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[11px] font-mono font-semibold transition-transform group-hover:scale-105"
                                  style={{
                                    backgroundColor: impact.rating >= 4.0 ? 'rgba(6, 78, 59, 0.4)' : impact.rating <= 2.0 ? 'rgba(136, 19, 55, 0.4)' : 'rgba(120, 53, 15, 0.4)',
                                    borderColor: impact.rating >= 4.0 ? 'rgba(16, 185, 129, 0.4)' : impact.rating <= 2.0 ? 'rgba(244, 63, 94, 0.4)' : 'rgba(245, 158, 11, 0.4)',
                                    color: impact.rating >= 4.0 ? '#34d399' : impact.rating <= 2.0 ? '#fb7185' : '#fcd34d'
                                  }}
                                >
                                  <span>{impact.rating.toFixed(1)}★</span>
                                  <span className="text-[10px] opacity-80">{impact.stars}</span>
                                </div>

                                {/* Short Mechanism Summary */}
                                <p className="text-[11px] text-slate-400 line-clamp-2 leading-tight group-hover:text-slate-200 transition-colors">
                                  {impact.mechanism}
                                </p>
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-xs text-slate-500 text-center font-mono">
            Click any row or cell to inspect full physiological mechanisms, receptor pathways, and clinical pacing limits.
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────────────────────
          4. VIEW MODE B: CONDITION LEADERBOARDS
      ───────────────────────────────────────────────────────────────────────────── */}
      {viewMode === 'by-condition' && (
        <section className="space-y-6">
          {/* Condition Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {conditionKeys.map(key => {
              const meta = CONDITION_PROFILES[key];
              const isSelected = activeConditionKey === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveConditionKey(key)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-400/80 shadow-md shadow-cyan-950/50'
                      : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    {meta.badge}
                  </span>
                  <span className={`text-xs font-semibold block mt-0.5 ${isSelected ? 'text-cyan-300' : 'text-slate-200'}`}>
                    {meta.shortLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Condition Banner */}
          <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>{CONDITION_PROFILES[activeConditionKey].label}</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                  Evidence-Ranked Leaderboard
                </span>
              </h2>
              <span className="text-xs font-mono text-slate-400">
                Sorted 5.0★ Helpers → 0.0★ Hinders
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-slate-200">Core Pathology:</strong> {CONDITION_PROFILES[activeConditionKey].corePathophysiology}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-800/70 font-mono">
              <div>
                <span className="text-rose-400 font-semibold">Primary Risk: </span>
                <span className="text-slate-400">{CONDITION_PROFILES[activeConditionKey].primaryRiskFactor}</span>
              </div>
              <div>
                <span className="text-emerald-400 font-semibold">Therapeutic Target: </span>
                <span className="text-slate-400">{CONDITION_PROFILES[activeConditionKey].therapeuticTarget}</span>
              </div>
            </div>
          </div>

          {/* Ranked Elements Cards */}
          <div className="space-y-3">
            {rankedConditionElements.map((element, rankIdx) => {
              const impact = element.conditionImpacts[activeConditionKey];
              const style = getVerdictStyle(impact.verdict);
              return (
                <div
                  key={element.id}
                  onClick={() => setSelectedElementForDrawer(element)}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 cursor-pointer transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-slate-400 w-6">
                        #{rankIdx + 1}
                      </span>
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(element.category)}
                        <h3 className="text-sm font-semibold text-white">
                          {element.name}
                        </h3>
                      </div>
                      <span className="text-xs text-slate-400 hidden md:inline">
                        · {element.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`px-2.5 py-0.5 rounded text-xs font-semibold border ${style.badge}`}>
                        {impact.verdict}
                      </span>
                      <div className="flex items-center gap-1 font-mono text-xs font-bold text-slate-200 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                        <span className={getRatingColor(impact.rating)}>{impact.rating.toFixed(1)}★</span>
                        <span className="text-slate-500 font-normal">{impact.stars}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">
                        Specific Molecular Mechanism
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {impact.mechanism}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-cyan-400 block mb-0.5">
                        Actionable Clinical Guidance
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {impact.clinicalPearl}
                      </p>
                    </div>
                  </div>

                  {element.exerciseLimits && (
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-cyan-300 bg-cyan-950/20 px-3 py-1.5 rounded border border-cyan-800/30">
                      <span><strong>Duration Limit:</strong> {element.exerciseLimits.maxDuration}</span>
                      <span>·</span>
                      <span><strong>Exertion Ceiling:</strong> {element.exerciseLimits.exertionCeiling}</span>
                      <span>·</span>
                      <span><strong>Weekly:</strong> {element.exerciseLimits.weeklyFrequency}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────────────────────
          5. VIEW MODE C: ELEMENT DEEP BREAKDOWN
      ───────────────────────────────────────────────────────────────────────────── */}
      {viewMode === 'by-element' && (
        <section className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredElements.map(element => {
              const overallStyle = getVerdictStyle(element.overallVerdict);
              return (
                <div
                  key={element.id}
                  className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all space-y-4"
                >
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(element.category)}
                        <span className="text-[11px] font-mono text-slate-400 uppercase">
                          {element.category}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {element.name}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {element.deliveryOrDosing}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold border ${overallStyle.badge}`}>
                        {element.overallVerdict}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-300">
                        {element.overallRating.toFixed(1)} / 5.0 {element.overallStars}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                    {element.summary}
                  </p>

                  {/* Exercise Limits Callout if applicable */}
                  {element.exerciseLimits && (
                    <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-800/40 space-y-1 text-xs">
                      <div className="flex items-center gap-1.5 font-mono text-[11px] text-blue-300 font-semibold uppercase">
                        <Dumbbell className="w-3.5 h-3.5" />
                        <span>Prescribed Pacing Limits & Safety Ceilings</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-slate-300 font-mono pt-1">
                        <div>• Max Duration: {element.exerciseLimits.maxDuration}</div>
                        <div>• Exertion Limit: {element.exerciseLimits.exertionCeiling}</div>
                        <div>• Weekly Freq: {element.exerciseLimits.weeklyFrequency}</div>
                        <div>• Recovery Rest: {element.exerciseLimits.recoveryRest}</div>
                      </div>
                    </div>
                  )}

                  {/* Key Clinical Considerations Callout if present */}
                  {element.clinicalConsiderations && element.clinicalConsiderations.length > 0 && (
                    <div className="p-3 rounded-lg bg-indigo-950/20 border border-indigo-800/40 space-y-1.5 text-xs">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-indigo-300 font-bold uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Key Clinical Consideration</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-3">
                        {element.clinicalConsiderations[0]}
                      </p>
                    </div>
                  )}

                  {/* 5 Conditions Mini Matrix */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      Cross-Condition Ratings
                    </span>
                    <div className="grid grid-cols-5 gap-1.5 text-center">
                      {conditionKeys.map(key => {
                        const imp = element.conditionImpacts[key];
                        const meta = CONDITION_PROFILES[key];
                        return (
                          <div
                            key={key}
                            className="p-1.5 rounded bg-slate-950 border border-slate-800/80 space-y-0.5"
                          >
                            <span className="text-[9px] font-mono uppercase text-slate-400 block truncate">
                              {meta.shortLabel.split(' ')[0]}
                            </span>
                            <span className={`text-xs font-mono font-bold block ${getRatingColor(imp.rating)}`}>
                              {imp.rating.toFixed(1)}★
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Inspect Details Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => handleCopyElement(element)}
                      className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5 font-mono"
                    >
                      {copiedElementId === element.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Profile</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setSelectedElementForDrawer(element)}
                      className="px-3 py-1 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors flex items-center gap-1"
                    >
                      <span>Deep Breakdown</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────────────────────
          6. SLIDE-OVER DETAIL DRAWER / MODAL
      ───────────────────────────────────────────────────────────────────────────── */}
      {selectedElementForDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div
            className="w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-y-auto space-y-6 p-6 sm:p-8"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(selectedElementForDrawer.category)}
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {selectedElementForDrawer.category}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedElementForDrawer.name}
                </h2>
                <p className="text-xs text-slate-400 font-mono">
                  Prescription / Intake: {selectedElementForDrawer.deliveryOrDosing}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleCopyElement(selectedElementForDrawer)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  title="Copy element details to clipboard"
                >
                  {copiedElementId === selectedElementForDrawer.id ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setSelectedElementForDrawer(null)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Overall Verdict Banner */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block">
                  Overall Composite Impact
                </span>
                <div className="text-sm font-semibold text-white mt-0.5">
                  {selectedElementForDrawer.overallVerdict}
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono">
                <span className="text-xl font-bold text-cyan-400">
                  {selectedElementForDrawer.overallRating.toFixed(1)} / 5.0
                </span>
                <span className="text-base text-amber-400">
                  {selectedElementForDrawer.overallStars}
                </span>
              </div>
            </div>

            {/* Target Receptors */}
            {selectedElementForDrawer.targetReceptors && (
              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase text-slate-400 block">
                  Primary Receptor & Pathway Targets
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedElementForDrawer.targetReceptors.map(rec => (
                    <span
                      key={rec}
                      className="px-2.5 py-1 text-xs rounded bg-slate-950 border border-slate-800 text-cyan-300 font-mono"
                    >
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Exercise Limits if present */}
            {selectedElementForDrawer.exerciseLimits && (
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-mono font-bold text-cyan-300 uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Clinical Limits, Exertion Ceilings & Frequency Restrictions</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 font-mono pt-1">
                  <div>
                    <strong className="text-slate-400">Max Duration:</strong> {selectedElementForDrawer.exerciseLimits.maxDuration}
                  </div>
                  <div>
                    <strong className="text-slate-400">Exertion Ceiling:</strong> {selectedElementForDrawer.exerciseLimits.exertionCeiling}
                  </div>
                  <div>
                    <strong className="text-slate-400">Weekly Frequency:</strong> {selectedElementForDrawer.exerciseLimits.weeklyFrequency}
                  </div>
                  <div>
                    <strong className="text-slate-400">Recovery Mandate:</strong> {selectedElementForDrawer.exerciseLimits.recoveryRest}
                  </div>
                </div>
              </div>
            )}

            {/* Comprehensive Clinical Considerations & Protocols */}
            {selectedElementForDrawer.clinicalConsiderations && selectedElementForDrawer.clinicalConsiderations.length > 0 && (
              <div className="p-5 rounded-xl bg-indigo-950/20 border border-indigo-700/50 space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <h4 className="text-sm font-bold text-indigo-200 tracking-wide font-mono uppercase">
                    Clinical Considerations & Phenotype Guidance
                  </h4>
                </div>
                <div className="space-y-2.5">
                  {selectedElementForDrawer.clinicalConsiderations.map((consideration, idx) => {
                    const colonIndex = consideration.indexOf(':');
                    const title = colonIndex !== -1 ? consideration.slice(0, colonIndex) : null;
                    const body = colonIndex !== -1 ? consideration.slice(colonIndex + 1) : consideration;
                    return (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-slate-950/80 border border-indigo-950/80 text-xs leading-relaxed"
                      >
                        {title ? (
                          <>
                            <strong className="text-indigo-300 font-mono font-semibold block sm:inline mr-1.5">
                              • {title}:
                            </strong>
                            <span className="text-slate-300">{body}</span>
                          </>
                        ) : (
                          <span className="text-slate-300">• {body}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Key Contraindications & Guardrails if present */}
            {selectedElementForDrawer.keyContraindications && selectedElementForDrawer.keyContraindications.length > 0 && (
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-mono font-bold text-rose-300 uppercase">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  <span>Critical Safety Guardrails & Absolute Contraindications</span>
                </div>
                <ul className="space-y-1.5 text-slate-300 font-mono text-[11px] pt-1">
                  {selectedElementForDrawer.keyContraindications.map((warning, wIdx) => (
                    <li key={wIdx} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">✕</span>
                      <span>{warning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Detailed 5 Conditions Accordion */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-slate-400 block">
                Condition-by-Condition Mechanistic Breakdown
              </span>

              {conditionKeys.map(key => {
                const impact = selectedElementForDrawer.conditionImpacts[key];
                const meta = CONDITION_PROFILES[key];
                const style = getVerdictStyle(impact.verdict);
                return (
                  <div
                    key={key}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{meta.label}</span>
                        <span className="text-[10px] font-mono text-slate-500">[{meta.badge}]</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${style.badge}`}>
                          {impact.verdict}
                        </span>
                        <span className={`font-mono font-bold ${getRatingColor(impact.rating)}`}>
                          {impact.rating.toFixed(1)}★
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed pt-1">
                      <strong className="text-slate-200 font-mono">Mechanism: </strong>
                      {impact.mechanism}
                    </p>

                    <div className="text-cyan-300 font-mono pt-1 border-t border-slate-900">
                      <strong>Clinical Pearl: </strong>
                      {impact.clinicalPearl}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer close */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedElementForDrawer(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

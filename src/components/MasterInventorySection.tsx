import React, { useState, useMemo } from 'react';
import { 
  MASTER_INVENTORY_ITEMS, 
  INVENTORY_CATEGORIES, 
  InventoryItem, 
  InventoryCategory 
} from '../data/masterInventoryData';
import { ActiveTab } from '../types';
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Layers, 
  Activity, 
  Pill, 
  Dumbbell, 
  ShieldCheck, 
  Copy, 
  Check, 
  Info,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface MasterInventorySectionProps {
  onNavigateToTab: (tab: ActiveTab) => void;
}

export const MasterInventorySection: React.FC<MasterInventorySectionProps> = ({
  onNavigateToTab
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedAxis, setSelectedAxis] = useState<string>('All Axes');
  const [selectedSectionFilter, setSelectedSectionFilter] = useState<string>('All Sections');
  const [expandedItemId, setExpandedItemId] = useState<string | null>('slow-jogging');
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'matrix' | 'cards' | 'section-audit'>('matrix');

  const axes = ['All Axes', 'MCAS', 'Brain Fog / SCT', 'Vascular', 'Slow COMT', 'Pelvic / Pudendal'];

  const filteredItems = useMemo(() => {
    return MASTER_INVENTORY_ITEMS.filter((item) => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.primaryAction.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.standardDosingOrProtocol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.crossCheckNotes.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = 
        selectedCategory === 'All Categories' || item.category === selectedCategory;

      const matchesAxis = 
        selectedAxis === 'All Axes' || item.targetAxes.includes(selectedAxis as any);

      const matchesSection = 
        selectedSectionFilter === 'All Sections' ||
        (selectedSectionFilter === 'Efficacy Matrix' && item.presence.efficacyMatrix) ||
        (selectedSectionFilter === 'Exercise Engine' && item.presence.exerciseEngine) ||
        (selectedSectionFilter === 'Targeted Exercises' && item.presence.exercisesSection) ||
        (selectedSectionFilter === 'Pharma Matrix' && item.presence.pharmaMatrix) ||
        (selectedSectionFilter === 'Unified Protocol' && item.presence.unifiedProtocol) ||
        (selectedSectionFilter === 'Vascular Health' && item.presence.vascularSection) ||
        (selectedSectionFilter === 'Flare Simulator' && item.presence.flareSimulator) ||
        (selectedSectionFilter === 'Evidence Compendium' && item.presence.evidenceCompendium);

      return matchesSearch && matchesCategory && matchesAxis && matchesSection;
    });
  }, [searchQuery, selectedCategory, selectedAxis, selectedSectionFilter]);

  const handleCopyInventory = () => {
    const text = MASTER_INVENTORY_ITEMS.map(item => {
      const axesList = item.targetAxes.join(', ');
      return `### ${item.name} (${item.category})\n- Primary Action: ${item.primaryAction}\n- Protocol / Ceilings: ${item.standardDosingOrProtocol}\n- Target Axes: ${axesList}\n- Cross-Check Notes: ${item.crossCheckNotes}\n`;
    }).join('\n');

    navigator.clipboard.writeText(
      `# NeuroImmune Axis - Definitive Master Inventory & Cross-Section Index\nTotal Items: ${MASTER_INVENTORY_ITEMS.length}\n\n${text}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getVerdictBadge = (verdict: InventoryItem['tierOrVerdict']) => {
    switch (verdict) {
      case 'Gold Standard / High Efficacy':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40';
      case 'Therapeutic / Moderate':
        return 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40';
      case 'Caution / Strict Bounds':
        return 'bg-amber-950/80 text-amber-300 border-amber-500/40';
      case 'Contraindicated / Severe Flare Risk':
        return 'bg-rose-950/80 text-rose-300 border-rose-500/40';
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner & Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-indigo-950/50 border border-slate-800 p-6 md:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Layers className="w-3.5 h-3.5" />
              <span>Definitive Platform Register & Cross-Check Auditor</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Master Inventory & Cross-Section Index
            </h1>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              The single authoritative source of truth for all elements, physical modalities, pharmaceuticals, 
              nutraceuticals, and diagnostic biomarkers. Use this cross-referencing ledger to verify presence across 
              the <strong className="text-amber-300 font-semibold">Condition × Element Efficacy Matrix</strong>, <strong className="text-cyan-300 font-semibold">Exercise Pacing Engine</strong>, <strong className="text-emerald-300 font-semibold">Unified Protocol</strong>, and other sections.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={handleCopyInventory}
              className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Master Index</span>
                </>
              )}
            </button>
            <button
              onClick={() => onNavigateToTab('condition-matrix')}
              className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-colors shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Jump to Efficacy Matrix</span>
            </button>
          </div>
        </div>

        {/* Quick Audit Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800/80">
          <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">Total Cataloged Items</div>
            <div className="text-xl font-bold text-white mt-1">{MASTER_INVENTORY_ITEMS.length} Elements</div>
            <div className="text-[11px] text-emerald-400 mt-0.5">100% Cross-Indexed</div>
          </div>
          <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">Physical Modalities</div>
            <div className="text-xl font-bold text-cyan-300 mt-1">
              {MASTER_INVENTORY_ITEMS.filter(i => i.category === 'Exercise & Physical').length} Modalities
            </div>
            <div className="text-[11px] text-cyan-400/80 mt-0.5">Including Niko Niko Jogging</div>
          </div>
          <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">Pharma & Nutrients</div>
            <div className="text-xl font-bold text-indigo-300 mt-1">
              {MASTER_INVENTORY_ITEMS.filter(i => i.category === 'Pharmacotherapy' || i.category === 'Vitamins & Nutraceuticals').length} Agents
            </div>
            <div className="text-[11px] text-indigo-400/80 mt-0.5">Off-label & Receptor-mapped</div>
          </div>
          <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">Clinical Phenotypes</div>
            <div className="text-xl font-bold text-amber-300 mt-1">5 Core Axes</div>
            <div className="text-[11px] text-amber-400/80 mt-0.5">MCAS · SCT · Vascular · COMT · Pelvic</div>
          </div>
        </div>
      </div>

      {/* Verification Notice: Slow Jogging Verified */}
      <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 flex items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Audit Alert Resolved</div>
            <div className="text-xs sm:text-sm text-slate-300">
              <strong className="text-white font-semibold">Very Slow Jogging (Japanese "Niko Niko" Pace)</strong> is synchronized across both the <span className="text-amber-300 font-semibold">Condition × Element Efficacy Matrix</span> and the <span className="text-cyan-300 font-semibold">Exercise Pacing Engine</span> with complete 5-star condition ratings, molecular mechanisms, and pacing ceilings.
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setSearchQuery('Slow Jogging');
            setSelectedCategory('Exercise & Physical');
          }}
          className="px-3 py-1.5 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold whitespace-nowrap border border-emerald-500/30 transition-colors"
        >
          Inspect Entry
        </button>
      </div>

      {/* Control Bar: Search, Category Filters, Axis Filters & View Mode */}
      <div className="space-y-4 bg-slate-900/60 p-4 md:p-5 rounded-2xl border border-slate-800 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by element name, receptor, mechanism, or dosing rules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs md:text-sm bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setViewMode('matrix')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                viewMode === 'matrix' 
                  ? 'bg-slate-800 text-cyan-300 font-semibold shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Cross-Check Table
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                viewMode === 'cards' 
                  ? 'bg-slate-800 text-cyan-300 font-semibold shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Detailed Cards
            </button>
            <button
              onClick={() => setViewMode('section-audit')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                viewMode === 'section-audit' 
                  ? 'bg-slate-800 text-cyan-300 font-semibold shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Section Auditor
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/60">
          <span className="text-xs text-slate-400 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" />
            Category:
          </span>
          <button
            onClick={() => setSelectedCategory('All Categories')}
            className={`px-2.5 py-1 text-xs rounded-lg transition-colors ${
              selectedCategory === 'All Categories'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-medium'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            All Categories ({MASTER_INVENTORY_ITEMS.length})
          </button>
          {INVENTORY_CATEGORIES.map((cat) => {
            const count = MASTER_INVENTORY_ITEMS.filter(i => i.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-xs rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-medium'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Filter by Target Axis & Section Presence */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/60 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Target Axis:</span>
            <select
              value={selectedAxis}
              onChange={(e) => setSelectedAxis(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-200 rounded-lg px-2.5 py-1 text-xs focus:outline-none focus:border-cyan-500"
            >
              {axes.map(axis => (
                <option key={axis} value={axis}>{axis}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <span className="text-slate-400">Section Presence:</span>
            <select
              value={selectedSectionFilter}
              onChange={(e) => setSelectedSectionFilter(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-200 rounded-lg px-2.5 py-1 text-xs focus:outline-none focus:border-cyan-500"
            >
              <option value="All Sections">All Sections</option>
              <option value="Efficacy Matrix">In Efficacy Matrix</option>
              <option value="Exercise Engine">In Exercise Engine</option>
              <option value="Targeted Exercises">In Targeted Exercises 🎯</option>
              <option value="Pharma Matrix">In Pharma Matrix</option>
              <option value="Unified Protocol">In Unified Protocol</option>
              <option value="Vascular Health">In Vascular Section</option>
              <option value="Evidence Compendium">In Evidence Compendium</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main View Area */}
      {viewMode === 'matrix' && (
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-950/90 border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold">
                  <th className="py-3.5 px-4 min-w-[200px]">Element & Category</th>
                  <th className="py-3.5 px-4 min-w-[220px]">Primary Action / Protocol</th>
                  <th className="py-3.5 px-3 min-w-[130px]">Rating / Verdict</th>
                  <th className="py-3.5 px-3 text-center w-16" title="Condition × Element Efficacy Matrix">Matrix</th>
                  <th className="py-3.5 px-3 text-center w-16" title="Exercise Pacing Engine">Exercise</th>
                  <th className="py-3.5 px-3 text-center w-16" title="Pharmacotherapy Matrix">Pharma</th>
                  <th className="py-3.5 px-3 text-center w-16" title="Unified Protocol">Protocol</th>
                  <th className="py-3.5 px-3 text-center w-16" title="Vascular Health">Vascular</th>
                  <th className="py-3.5 px-3 text-center w-16" title="Evidence Compendium">Evidence</th>
                  <th className="py-3.5 px-4 text-right min-w-[110px]">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {filteredItems.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="py-12 text-center text-slate-500">
                      No inventory items match your current filter criteria.
                    </td>
                  </tr>
                ) : (
                  filteredItems.map((item) => {
                    const isExpanded = expandedItemId === item.id;
                    return (
                      <React.Fragment key={item.id}>
                        <tr 
                          onClick={() => setExpandedItemId(isExpanded ? null : item.id)}
                          className={`hover:bg-slate-800/40 transition-colors cursor-pointer ${
                            isExpanded ? 'bg-slate-800/50' : ''
                          }`}
                        >
                          {/* Element Name & Category */}
                          <td className="py-3 px-4">
                            <div className="font-semibold text-white flex items-center gap-1.5">
                              {item.name}
                              {item.id === 'slow-jogging' && (
                                <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                                  NEW SYNC
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5">{item.category}</div>
                          </td>

                          {/* Primary Action / Dosing */}
                          <td className="py-3 px-4">
                            <div className="text-slate-200 line-clamp-1">{item.primaryAction}</div>
                            <div className="text-[11px] text-slate-400 mt-0.5 font-mono line-clamp-1">
                              {item.standardDosingOrProtocol}
                            </div>
                          </td>

                          {/* Verdict Badge */}
                          <td className="py-3 px-3">
                            <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold border ${getVerdictBadge(item.tierOrVerdict)}`}>
                              {item.tierOrVerdict}
                            </span>
                          </td>

                          {/* Efficacy Matrix Presence */}
                          <td className="py-3 px-3 text-center">
                            {item.presence.efficacyMatrix ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onNavigateToTab('condition-matrix');
                                }}
                                title="Present in Efficacy Matrix - Click to Jump"
                                className="inline-flex items-center justify-center text-amber-400 hover:text-amber-300 p-1 rounded hover:bg-amber-950/40"
                              >
                                <CheckCircle2 className="w-4 h-4" />
                              </button>
                            ) : (
                              <span className="text-slate-600 inline-flex items-center justify-center">
                                <XCircle className="w-4 h-4" />
                              </span>
                            )}
                          </td>

                          {/* Exercise Engine Presence */}
                          <td className="py-3 px-3 text-center">
                            {item.presence.exerciseEngine ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onNavigateToTab('exercise');
                                }}
                                title="Present in Exercise Engine - Click to Jump"
                                className="inline-flex items-center justify-center text-cyan-400 hover:text-cyan-300 p-1 rounded hover:bg-cyan-950/40"
                              >
                                <CheckCircle2 className="w-4 h-4" />
                              </button>
                            ) : (
                              <span className="text-slate-600 inline-flex items-center justify-center">
                                <XCircle className="w-4 h-4" />
                              </span>
                            )}
                          </td>

                          {/* Pharma Matrix Presence */}
                          <td className="py-3 px-3 text-center">
                            {item.presence.pharmaMatrix ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onNavigateToTab('pharmacy');
                                }}
                                title="Present in Pharma Matrix - Click to Jump"
                                className="inline-flex items-center justify-center text-indigo-400 hover:text-indigo-300 p-1 rounded hover:bg-indigo-950/40"
                              >
                                <CheckCircle2 className="w-4 h-4" />
                              </button>
                            ) : (
                              <span className="text-slate-600 inline-flex items-center justify-center">
                                <XCircle className="w-4 h-4" />
                              </span>
                            )}
                          </td>

                          {/* Unified Protocol Presence */}
                          <td className="py-3 px-3 text-center">
                            {item.presence.unifiedProtocol ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onNavigateToTab('protocol');
                                }}
                                title="Present in Unified Protocol - Click to Jump"
                                className="inline-flex items-center justify-center text-emerald-400 hover:text-emerald-300 p-1 rounded hover:bg-emerald-950/40"
                              >
                                <CheckCircle2 className="w-4 h-4" />
                              </button>
                            ) : (
                              <span className="text-slate-600 inline-flex items-center justify-center">
                                <XCircle className="w-4 h-4" />
                              </span>
                            )}
                          </td>

                          {/* Vascular Health Presence */}
                          <td className="py-3 px-3 text-center">
                            {item.presence.vascularSection ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onNavigateToTab('vascular');
                                }}
                                title="Present in Vascular Section - Click to Jump"
                                className="inline-flex items-center justify-center text-rose-400 hover:text-rose-300 p-1 rounded hover:bg-rose-950/40"
                              >
                                <CheckCircle2 className="w-4 h-4" />
                              </button>
                            ) : (
                              <span className="text-slate-600 inline-flex items-center justify-center">
                                <XCircle className="w-4 h-4" />
                              </span>
                            )}
                          </td>

                          {/* Evidence Compendium Presence */}
                          <td className="py-3 px-3 text-center">
                            {item.presence.evidenceCompendium ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onNavigateToTab('evidence');
                                }}
                                title="Present in Evidence Compendium - Click to Jump"
                                className="inline-flex items-center justify-center text-purple-400 hover:text-purple-300 p-1 rounded hover:bg-purple-950/40"
                              >
                                <CheckCircle2 className="w-4 h-4" />
                              </button>
                            ) : (
                              <span className="text-slate-600 inline-flex items-center justify-center">
                                <XCircle className="w-4 h-4" />
                              </span>
                            )}
                          </td>

                          {/* Quick Inspect Toggle */}
                          <td className="py-3 px-4 text-right">
                            <span className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center justify-end gap-1 font-medium">
                              {isExpanded ? 'Hide' : 'Details'}
                              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            </span>
                          </td>
                        </tr>

                        {/* Expandable Inspection Drawer */}
                        {isExpanded && (
                          <tr className="bg-slate-950/80 border-b border-slate-800">
                            <td colSpan={10} className="p-4 md:p-6 space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-2 md:col-span-2">
                                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                    Mechanism & Clinical Rationale
                                  </div>
                                  <p className="text-xs md:text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                                    {item.primaryAction}
                                  </p>

                                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-1">
                                    Dosage Protocol / Exercise Safety Ceilings
                                  </div>
                                  <p className="text-xs text-amber-200/90 font-mono bg-amber-950/20 p-2.5 rounded-xl border border-amber-500/30">
                                    {item.standardDosingOrProtocol}
                                  </p>
                                </div>

                                <div className="space-y-3 bg-slate-900/40 p-3.5 rounded-xl border border-slate-800">
                                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                    Target Phenotypic Axes
                                  </div>
                                  <div className="flex flex-wrap gap-1.5">
                                    {item.targetAxes.map((axis) => (
                                      <span
                                        key={axis}
                                        className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-200 border border-slate-700 font-medium"
                                      >
                                        {axis}
                                      </span>
                                    ))}
                                  </div>

                                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-2">
                                    Cross-Check Audit Notes
                                  </div>
                                  <p className="text-xs text-slate-400 leading-relaxed">
                                    {item.crossCheckNotes}
                                  </p>

                                  <div className="pt-2 flex flex-wrap gap-2">
                                    {item.presence.efficacyMatrix && (
                                      <button
                                        onClick={() => onNavigateToTab('condition-matrix')}
                                        className="text-[11px] px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-semibold flex items-center gap-1"
                                      >
                                        Open in Matrix <ArrowRight className="w-3 h-3" />
                                      </button>
                                    )}
                                    {item.presence.exerciseEngine && (
                                      <button
                                        onClick={() => onNavigateToTab('exercise')}
                                        className="text-[11px] px-2.5 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 font-semibold flex items-center gap-1"
                                      >
                                        Open in Exercise <ArrowRight className="w-3 h-3" />
                                      </button>
                                    )}
                                    {item.presence.pharmaMatrix && (
                                      <button
                                        onClick={() => onNavigateToTab('pharmacy')}
                                        className="text-[11px] px-2.5 py-1 rounded bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 font-semibold flex items-center gap-1"
                                      >
                                        Open in Pharma <ArrowRight className="w-3 h-3" />
                                      </button>
                                    )}
                                    {item.presence.unifiedProtocol && (
                                      <button
                                        onClick={() => onNavigateToTab('protocol')}
                                        className="text-[11px] px-2.5 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 font-semibold flex items-center gap-1"
                                      >
                                        Open in Protocol <ArrowRight className="w-3 h-3" />
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Cards View */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-lg transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${getVerdictBadge(item.tierOrVerdict)}`}>
                    {item.tierOrVerdict}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3">
                  {item.primaryAction}
                </p>

                <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 text-[11px] font-mono text-amber-200/90">
                  {item.standardDosingOrProtocol}
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1">
                  {item.targetAxes.map((axis) => (
                    <span
                      key={axis}
                      className="px-2 py-0.5 rounded text-[10px] bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {axis}
                    </span>
                  ))}
                </div>

                {/* Section Presence Badges */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>Sections Present:</span>
                  <div className="flex items-center gap-1.5 font-semibold">
                    {item.presence.efficacyMatrix && <span className="text-amber-400">Matrix</span>}
                    {item.presence.exercisesSection && <span className="text-teal-400">Exercises 🎯</span>}
                    {item.presence.exerciseEngine && <span className="text-cyan-400">Exercise</span>}
                    {item.presence.pharmaMatrix && <span className="text-indigo-400">Pharma</span>}
                    {item.presence.unifiedProtocol && <span className="text-emerald-400">Protocol</span>}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  {item.presence.exercisesSection ? (
                    <button
                      onClick={() => onNavigateToTab('exercises')}
                      className="flex-1 py-1.5 text-center text-xs font-semibold rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 transition-colors"
                    >
                      View in Exercises 🎯
                    </button>
                  ) : item.presence.efficacyMatrix ? (
                    <button
                      onClick={() => onNavigateToTab('condition-matrix')}
                      className="flex-1 py-1.5 text-center text-xs font-semibold rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-colors"
                    >
                      View in Matrix
                    </button>
                  ) : item.presence.exerciseEngine ? (
                    <button
                      onClick={() => onNavigateToTab('exercise')}
                      className="flex-1 py-1.5 text-center text-xs font-semibold rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 transition-colors"
                    >
                      View in Exercise
                    </button>
                  ) : (
                    <button
                      onClick={() => onNavigateToTab('protocol')}
                      className="flex-1 py-1.5 text-center text-xs font-semibold rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 transition-colors"
                    >
                      View in Protocol
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Section-by-Section Auditor View */}
      {viewMode === 'section-audit' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Efficacy Matrix Audit */}
            <div className="bg-slate-900/60 border border-amber-500/30 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Condition × Element Matrix</h3>
                    <div className="text-[11px] text-amber-400/90">Interactive 5-Star Evaluations</div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigateToTab('condition-matrix')}
                  className="text-xs text-amber-300 hover:text-amber-200 flex items-center gap-1 font-semibold"
                >
                  Visit <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              <div className="text-xs text-slate-300 space-y-1.5">
                <div className="font-semibold text-slate-200">Cataloged in Matrix:</div>
                <ul className="space-y-1 text-slate-400 pl-2 border-l border-amber-500/30">
                  <li className="text-emerald-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Very Slow Jogging (Niko Niko Pace)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Farmer's Walks & Loaded Carries
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Skipping / Jump Rope Work
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Kettlebell Armor Building Complex
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Zone 1 Walking & Recumbent Cycling
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Somatic Pelvic Decompression (90/90)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Maximal Anaerobic Sprinting / Metcon
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> 16+ Vitamins, Botanicals & Pharmacotherapies
                  </li>
                </ul>
              </div>
            </div>

            {/* Exercise Engine Audit */}
            <div className="bg-slate-900/60 border border-cyan-500/30 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Exercise Pacing Engine</h3>
                    <div className="text-[11px] text-cyan-400/90">Hemodynamic & Mast Cell Boundaries</div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigateToTab('exercise')}
                  className="text-xs text-cyan-300 hover:text-cyan-200 flex items-center gap-1 font-semibold"
                >
                  Visit <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              <div className="text-xs text-slate-300 space-y-1.5">
                <div className="font-semibold text-slate-200">Cataloged in Engine:</div>
                <ul className="space-y-1 text-slate-400 pl-2 border-l border-cyan-500/30">
                  <li className="text-emerald-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Very Slow Jogging (Niko Niko Pace)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Farmer's Walks & Loaded Carries
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> High-Intensity Interval Training (HIIT)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Steady-State Cardio (Running 8-10 km/h)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Controlled Low-Rep Resistance Training
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Somatic Vagal Movement & Pilates
                  </li>
                </ul>
              </div>
            </div>

            {/* Pharmacotherapy Matrix Audit */}
            <div className="bg-slate-900/60 border border-indigo-500/30 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <Pill className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Pharmacotherapy Matrix</h3>
                    <div className="text-[11px] text-indigo-400/90">Receptor & Off-Label Profiler</div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigateToTab('pharmacy')}
                  className="text-xs text-indigo-300 hover:text-indigo-200 flex items-center gap-1 font-semibold"
                >
                  Visit <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              <div className="text-xs text-slate-300 space-y-1.5">
                <div className="font-semibold text-slate-200">Cataloged in Pharma Matrix:</div>
                <ul className="space-y-1 text-slate-400 pl-2 border-l border-indigo-500/30">
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Roflumilast (PDE4 cAMP Brake)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Ketotifen Fumarate (H1 & Stabilizer)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Low-Dose Naltrexone (TLR4 Antagonist)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Guanfacine (Prefrontal α2A Agonist)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Pentoxifylline (Microvascular Rheology)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Fludrocortisone (Mineralocorticoid)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Oral Cromolyn Sodium (Mucosal Lock)
                  </li>
                </ul>
              </div>
            </div>

            {/* Targeted Exercises Section Audit */}
            <div className="bg-slate-900/60 border border-teal-500/30 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Targeted Exercises 🎯</h3>
                    <div className="text-[11px] text-teal-400/90">Brain, Vagal & Vascular Tone</div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigateToTab('exercises')}
                  className="text-xs text-teal-300 hover:text-teal-200 flex items-center gap-1 font-semibold"
                >
                  Visit <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              <div className="text-xs text-slate-300 space-y-1.5">
                <div className="font-semibold text-slate-200">Cataloged in Exercises:</div>
                <ul className="space-y-1 text-slate-400 pl-2 border-l border-teal-500/30">
                  <li className="text-teal-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Dual N-Back Training (CDS/SCT Delay Lock)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Polyrhythmic Acoustic Drumming (ADHD Pacing)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Vocal Chanting & Singing (Laryngeal Vagal CAIP)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> 0.1 Hz Resonance Breathing (Baroreflex Reset)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Seated Soleus Calf Pushups (Venous Siphon)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Bilateral Gaze Tracking & Juggling
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Mammalian Dive Reflex (Cold Immersion)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Supine 90/90 Reverse Kegels (Pudendal Release)
                  </li>
                  <li className="text-slate-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Transcranial Photobiomodulation (810/1064nm tPBM)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

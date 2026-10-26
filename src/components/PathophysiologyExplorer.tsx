import React, { useState } from 'react';
import { PATHOLOGY_NODES } from '../data/clinicalData';
import { PathologyNode } from '../types';
import {
  Activity,
  Layers,
  ArrowRight,
  ShieldAlert,
  Zap,
  Info,
  ChevronRight,
  Microscope,
  Stethoscope
} from 'lucide-react';

export const PathophysiologyExplorer: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('enteric-mast-cells');
  const [filterTier, setFilterTier] = useState<string>('all');
  const [selectedMediator, setSelectedMediator] = useState<string | null>(null);

  const selectedNode = PATHOLOGY_NODES.find((n) => n.id === selectedNodeId) || PATHOLOGY_NODES[0];

  const allMediators = Array.from(
    new Set(PATHOLOGY_NODES.flatMap((n) => n.primaryMediators))
  ).slice(0, 10);

  const filteredNodes = PATHOLOGY_NODES.filter((node) => {
    if (filterTier !== 'all' && node.tier !== filterTier) return false;
    if (selectedMediator && !node.primaryMediators.some((m) => m.toLowerCase().includes(selectedMediator.toLowerCase()))) {
      return false;
    }
    return true;
  });

  const getTierBadge = (tier: PathologyNode['tier']) => {
    switch (tier) {
      case 'visceral':
        return { label: 'Tier 1 · Visceral', color: 'text-amber-400 border-amber-500/30 bg-amber-950/20' };
      case 'sinocranial':
        return { label: 'Tier 2B · Sinonasal', color: 'text-pink-400 border-pink-500/30 bg-pink-950/20' };
      case 'neurovascular':
        return { label: 'Tier 2 · Neurovascular', color: 'text-rose-400 border-rose-500/30 bg-rose-950/20' };
      case 'neurochemical':
        return { label: 'Tier 3 · Central Cascade', color: 'text-purple-400 border-purple-500/30 bg-purple-950/20' };
      case 'cognitive':
        return { label: 'Tier 4 · Cognitive Expression', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20' };
      default:
        return { label: 'Signal Node', color: 'text-slate-400 border-slate-700 bg-slate-900' };
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
            <Activity className="w-3.5 h-3.5" />
            <span>Pathophysiological Cascade & Signal Circuit</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            The Gut-Brain Neuro-Immune Axis
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-3xl">
            Trace how peripheral enteric mast cell degranulation and visceral hyper-afference breach the blood-brain barrier, trigger microglial neuroinflammation, induce presynaptic H3 shutdown, and collapse verbal and situational fluency.
          </p>
        </div>

        {/* Tier Filter Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
          {[
            { id: 'all', label: 'All Tiers' },
            { id: 'visceral', label: '1. Visceral' },
            { id: 'sinocranial', label: '2B. Sinus Axis' },
            { id: 'neurovascular', label: '2. Barrier' },
            { id: 'neurochemical', label: '3. Central' },
            { id: 'cognitive', label: '4. Cognitive' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterTier(tab.id)}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filterTier === tab.id
                  ? 'bg-slate-800 text-cyan-300 shadow-sm border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Mediator Tag Bar (Functional Filters) */}
      <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
        <span className="text-slate-500 font-mono text-[11px] uppercase tracking-wider">Highlight Mediator:</span>
        <button
          onClick={() => setSelectedMediator(null)}
          className={`px-2 py-0.5 rounded text-xs transition-colors ${
            selectedMediator === null
              ? 'bg-slate-800 text-white border border-slate-700'
              : 'text-slate-400 hover:text-slate-300'
          }`}
        >
          Reset Filter
        </button>
        {allMediators.map((mediator) => (
          <button
            key={mediator}
            onClick={() => setSelectedMediator(selectedMediator === mediator ? null : mediator)}
            className={`px-2 py-0.5 rounded text-xs transition-colors border ${
              selectedMediator === mediator
                ? 'bg-cyan-950 text-cyan-300 border-cyan-500/50'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
            }`}
          >
            {mediator}
          </button>
        ))}
      </div>

      {/* Main Split Console: Left Pathway Stage, Right Clinical Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Cascade Flow Map (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3 pb-2 border-b border-slate-800/80">
              <span className="font-mono uppercase tracking-wider">Interactive Flow Architecture</span>
              <span className="text-slate-500">Click any step to inspect molecular detail</span>
            </div>

            <div className="space-y-3">
              {filteredNodes.map((node, index) => {
                const isSelected = node.id === selectedNode.id;
                const badge = getTierBadge(node.tier);

                return (
                  <div key={node.id} className="relative">
                    {/* Visual Connector Line between sequential nodes */}
                    {index < filteredNodes.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-slate-700 to-transparent z-0 pointer-events-none" />
                    )}

                    <button
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`w-full text-left p-3.5 rounded-lg border transition-all relative z-10 ${
                        isSelected
                          ? 'bg-slate-800/90 border-cyan-500/70 shadow-lg shadow-cyan-950/50 ring-1 ring-cyan-500/30'
                          : 'bg-slate-900/80 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold ${
                              isSelected
                                ? 'bg-cyan-500 text-slate-950'
                                : 'bg-slate-800 text-slate-300 border border-slate-700'
                            }`}
                          >
                            {index + 1}
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${badge.color}`}
                              >
                                {badge.label}
                              </span>
                              <span className="text-xs text-slate-400 font-mono">
                                {node.anatomicalLocation.split(',')[0]}
                              </span>
                            </div>

                            <h3 className="text-sm font-semibold text-white tracking-tight">
                              {node.title}
                            </h3>
                            <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                              {node.subtitle}
                            </p>

                            {/* Mediator Tags */}
                            <div className="flex flex-wrap items-center gap-1.5 mt-2">
                              {node.primaryMediators.map((m) => (
                                <span
                                  key={m}
                                  className={`text-[11px] font-mono px-1.5 py-0.2 rounded ${
                                    selectedMediator && m.toLowerCase().includes(selectedMediator.toLowerCase())
                                      ? 'bg-cyan-900/60 text-cyan-200 border border-cyan-500/40'
                                      : 'bg-slate-950 text-slate-400'
                                  }`}
                                >
                                  {m}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isSelected ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600'
                          }`}
                        />
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Deep Inspector Panel (5 cols) */}
        <div className="lg:col-span-5 sticky top-20 space-y-4">
          <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 shadow-xl space-y-5">
            {/* Inspector Header */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span className="uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Microscope className="w-3.5 h-3.5" />
                  {selectedNode.tierLabel}
                </span>
                <span className="text-slate-500">{selectedNode.anatomicalLocation}</span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {selectedNode.title}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {selectedNode.subtitle}
              </p>
            </div>

            {/* Mediators Cluster */}
            <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800/80">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1.5">
                Primary Biochemical Mediators
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedNode.primaryMediators.map((med) => (
                  <span
                    key={med}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700"
                  >
                    {med}
                  </span>
                ))}
              </div>
            </div>

            {/* Pathophysiological Mechanism */}
            <div>
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mb-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Biological & Cellular Mechanism
              </span>
              <p className="text-xs leading-relaxed text-slate-300 bg-slate-950/40 p-3 rounded-lg border border-slate-800/60">
                {selectedNode.mechanism}
              </p>
            </div>

            {/* Cognitive Impact (Focus on SCT, Brain Fog, Fluency) */}
            <div className="p-3.5 bg-cyan-950/20 rounded-lg border border-cyan-800/30 space-y-1.5">
              <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-cyan-400" />
                Cognitive & Fluency Manifestation
              </span>
              <p className="text-xs leading-relaxed text-cyan-100/90">
                {selectedNode.cognitiveImpact}
              </p>
            </div>

            {/* Observable Clinical Signs */}
            <div>
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mb-2">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                Observable Patient Phenotypes
              </span>
              <ul className="space-y-1.5">
                {selectedNode.clinicalSigns.map((sign, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Evidence-Based Interventions */}
            <div className="pt-2 border-t border-slate-800">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mb-2">
                <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
                Targeted Therapeutic Interventions
              </span>
              <ul className="space-y-1.5">
                {selectedNode.interventions.map((inv, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{inv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

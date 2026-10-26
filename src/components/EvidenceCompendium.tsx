import React, { useState } from 'react';
import { EVIDENCE_CITATIONS } from '../data/clinicalData';
import { EvidenceCitation } from '../types';
import { BookOpen, Search, ExternalLink, Bookmark, CheckCircle2 } from 'lucide-react';

export const EvidenceCompendium: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'all',
    'SCT / CDS',
    'ADHD',
    'MCAS & Neuroinflammation',
    'Gut-Brain & Visceral'
  ];

  const filteredCitations = EVIDENCE_CITATIONS.filter((cite) => {
    if (selectedCategory !== 'all' && cite.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        cite.title.toLowerCase().includes(q) ||
        cite.authors.toLowerCase().includes(q) ||
        cite.coreFinding.toLowerCase().includes(q) ||
        cite.clinicalRelevance.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Peer-Reviewed Evidence Base</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Scientific Literature & Foundational Citations
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-4xl">
          Empirical studies establishing Cognitive Disengagement Syndrome, mast cell-mediated neurovascular breach, histamine H3 receptor hetero-regulation, and visceral interoceptive cognitive load.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg overflow-x-auto w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-slate-800 text-cyan-300 border border-slate-700 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Disciplines' : cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search authors, findings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>
      </div>

      {/* Citations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCitations.map((cite) => (
          <div
            key={cite.id}
            className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                {cite.category}
              </span>
              <span className="text-xs font-mono text-slate-400 tabular-nums">
                {cite.year}
              </span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white tracking-tight leading-snug">
                {cite.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-medium">
                {cite.authors}
              </p>
              <p className="text-xs text-slate-500 italic mt-0.5">
                {cite.journal}
              </p>
            </div>

            <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800/80 space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                Core Empirical Finding
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {cite.coreFinding}
              </p>
            </div>

            <div className="p-3 bg-cyan-950/20 rounded-lg border border-cyan-800/30 space-y-1">
              <span className="text-[10px] font-mono uppercase text-cyan-400 block font-semibold">
                Clinical Significance
              </span>
              <p className="text-xs text-cyan-200/90 leading-relaxed">
                {cite.clinicalRelevance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

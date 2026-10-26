import React, { useState } from 'react';
import { OFF_LABEL_PHARMA_LIST } from '../data/pharmaData';
import { OffLabelPharma } from '../types';
import {
  Pill,
  ShieldAlert,
  Zap,
  Brain,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Info,
  CheckCircle2,
  Filter,
  Check,
  Star
} from 'lucide-react';

export const PharmacotherapyMatrix: React.FC = () => {
  const [selectedPharmaId, setSelectedPharmaId] = useState<string>('roflumilast');
  const [sedationFilter, setSedationFilter] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const selectedPharma =
    OFF_LABEL_PHARMA_LIST.find((p) => p.id === selectedPharmaId) || OFF_LABEL_PHARMA_LIST[0];

  const filteredList = OFF_LABEL_PHARMA_LIST.filter((item) => {
    if (sedationFilter === 'all') return true;
    if (sedationFilter === 'circuit-breakers') {
      return ['perilla-extract', 'rifaximin', 'budesonide-rinse', 'minocycline-doxycycline', 'roflumilast'].includes(item.id);
    }
    if (sedationFilter === 'vascular-supplements') {
      return [
        'diosmin-hesperidin-mpff',
        'pycnogenol-pine-bark',
        'ascorbic-acid-p5p-complex',
        'gotu-kola-triterpenes',
        'molybdenum-glycinate-suox',
        'benfotiamine-thiamine-b1',
        'perilla-extract',
        'pea'
      ].includes(item.id);
    }
    if (sedationFilter === 'non-sedating') return item.sedationLiability === 'None';
    if (sedationFilter === 'low-sedating') return item.sedationLiability === 'Low';
    if (sedationFilter === 'sedating') return item.sedationLiability === 'High';
    return true;
  });

  const getSedationBadge = (liability: OffLabelPharma['sedationLiability']) => {
    switch (liability) {
      case 'None':
        return 'text-emerald-400 bg-emerald-950/40 border border-emerald-500/30';
      case 'Low':
        return 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30';
      case 'Moderate':
        return 'text-amber-400 bg-amber-950/40 border border-amber-500/30';
      case 'High':
        return 'text-rose-400 bg-rose-950/40 border border-rose-500/30';
    }
  };

  const handleCopyNotes = (pharma: OffLabelPharma) => {
    const text = `DRUG: ${pharma.genericName} (${pharma.brandNames})\nCLASS: ${pharma.drugClass}\nMECHANISM: ${pharma.primaryMechanism}\nCOGNITIVE IMPACT: ${pharma.cognitiveImpact}\nDOSING: ${pharma.typicalDosageRange}\nPEARLS:\n${pharma.clinicalPearls.map(p => `• ${p}`).join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(pharma.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          <Pill className="w-3.5 h-3.5" />
          <span>Precision Neuro-Immunopharmacology</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Off-Label Pharmaceuticals & Non-Sedating Regimens
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-4xl">
          Deconstructing PDE4 inhibitors (Roflumilast), solving the "Ketotifen sedation dilemma," optimizing high-dose Ebastine, and exploring novel central disinhibitors (Pitolisant, LDN, Guanfacine).
        </p>
      </div>

      {/* CRITICAL CLINICAL SAFETY & DOSING CLARIFICATION CALLOUT */}
      <div className="p-5 rounded-xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 border border-amber-500/40 shadow-xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-300 font-bold">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>Crucial Clinical Unit Clarification & The "Ketotifen Dilemma"</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 leading-relaxed">
          <div className="space-y-1.5 p-3 rounded-lg bg-slate-950/80 border border-amber-500/20">
            <h4 className="font-semibold text-white">1. Dosing Unit: 500 mcg (0.5 mg) vs. 500 mg</h4>
            <p>
              When you mentioned taking <em className="text-amber-200">"ketotifen 500mg"</em>, you are almost certainly taking <strong className="text-white">500 micrograms (500 mcg = 0.5 mg)</strong>. In clinical pharmacology, standard ketotifen dosing is <strong>0.5 mg to 2.0 mg daily</strong>. A true dose of 500 mg would be 250 to 500 times the therapeutic ceiling! Be sure to verify your prescription label indicates <strong>mcg</strong> or <strong>0.5 mg</strong>.
            </p>
          </div>

          <div className="space-y-1.5 p-3 rounded-lg bg-slate-950/80 border border-amber-500/20">
            <h4 className="font-semibold text-white">2. Why You "Cannot Think" After ~7 Days</h4>
            <p>
              Your observation—<em className="text-cyan-300">"for about 7 days or whenever I notice I cannot think from the ketotifen"</em>—is the classic <strong className="text-white">Ketotifen Trade-Off</strong>. Ketotifen is lipid-soluble and penetrates the BBB. It calms the acute mast cell storm, but as tissue concentrations reach steady-state around day 5-7, its central H1 and muscarinic blockade creates cumulative cognitive slowing and sedation.
            </p>
          </div>
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
          <span className="text-[11px] font-mono text-slate-500 px-2 uppercase">Sedation Liability:</span>
          {[
            { id: 'all', label: 'All Agents' },
            { id: 'vascular-supplements', label: '🌿 Vascular & Sulfite/Histamine Stack (MPFF, Pycnogenol, Molybdenum, B1, PEA)' },
            { id: 'circuit-breakers', label: '⚡ Flare Circuit Breakers (Perilla, Rifaximin, Budesonide Rinse)' },
            { id: 'non-sedating', label: 'Zero Sedation (Perilla, Rifaximin, Roflumilast, LDN)' },
            { id: 'low-sedating', label: 'Low Sedation (Ebastine, Guanfacine)' },
            { id: 'sedating', label: 'High Sedation (Ketotifen)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSedationFilter(tab.id)}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                sedationFilter === tab.id
                  ? 'bg-slate-800 text-cyan-300 shadow-sm border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-400 font-mono">
          Showing {filteredList.length} of {OFF_LABEL_PHARMA_LIST.length} Pharmacotherapies
        </div>
      </div>

      {/* MAIN SPLIT VIEW: Drug Selector Grid on Left, Deep Drug Inspector on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left List Column (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          {filteredList.map((pharma) => {
            const isSelected = pharma.id === selectedPharma.id;
            return (
              <button
                key={pharma.id}
                onClick={() => setSelectedPharmaId(pharma.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-950/50 ring-1 ring-cyan-500/30'
                    : 'bg-slate-950/70 border-slate-800 hover:bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {pharma.genericName}
                    </h3>
                    <div className="text-[11px] text-slate-400 font-mono">
                      {pharma.brandNames}
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${getSedationBadge(
                      pharma.sedationLiability
                    )}`}
                  >
                    Sedation: {pharma.sedationLiability}
                  </span>
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {pharma.primaryMechanism}
                </p>

                {pharma.helpRating && (
                  <div className="flex items-center gap-1.5 mt-2 px-2 py-1 rounded bg-slate-900/90 border border-slate-800 text-[11px] font-mono">
                    <span className="text-amber-400">{pharma.helpStars}</span>
                    <span className="text-white font-bold">{pharma.helpRating.toFixed(1)}/5★</span>
                    <span className="text-slate-400 truncate text-[10px]">· {pharma.helpVerdict}</span>
                  </div>
                )}

                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-800/60 text-[11px] font-mono text-slate-500">
                  <span>BBB: {pharma.bbbPenetration}</span>
                  <span>·</span>
                  <span className="text-cyan-400">{pharma.drugClass.split(' ')[0]}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Deep Inspector Column (7 cols) */}
        <div className="lg:col-span-7 sticky top-20 space-y-5">
          <div className="p-6 md:p-8 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
            {/* Header */}
            <div className="border-b border-slate-800 pb-4 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
                  {selectedPharma.drugClass}
                </span>

                <button
                  onClick={() => handleCopyNotes(selectedPharma)}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 transition-colors"
                >
                  {copiedId === selectedPharma.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied Drug Notes</span>
                    </>
                  ) : (
                    <>
                      <Pill className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Clinical Profile</span>
                    </>
                  )}
                </button>
              </div>

              <h1 className="text-2xl font-bold text-white tracking-tight">
                {selectedPharma.genericName}
              </h1>
              <div className="text-xs text-slate-400 font-mono">
                Brand Names / Aliases: {selectedPharma.brandNames}
              </div>
            </div>

            {/* Quick Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-0.5">
                <span className="text-[10px] font-mono uppercase text-slate-500 block">
                  Sedation Liability
                </span>
                <span className="text-xs font-bold text-white">
                  {selectedPharma.sedationLiability}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-0.5">
                <span className="text-[10px] font-mono uppercase text-slate-500 block">
                  BBB Penetration
                </span>
                <span className="text-xs font-bold text-cyan-300">
                  {selectedPharma.bbbPenetration}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-0.5 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-mono uppercase text-slate-500 block">
                  Typical Dosage
                </span>
                <span className="text-xs font-bold text-slate-200 font-mono truncate block">
                  {selectedPharma.typicalDosageRange.split(' ')[0]} {selectedPharma.typicalDosageRange.split(' ')[1]}
                </span>
              </div>
            </div>

            {/* Help Rating Banner */}
            {selectedPharma.helpRating && (
              <div className="p-3.5 rounded-lg bg-gradient-to-r from-amber-950/30 via-slate-950 to-slate-950 border border-amber-500/40 space-y-1.5 shadow-md">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-mono font-bold text-amber-300 uppercase">
                      Clinical Help Rating: {selectedPharma.helpRating.toFixed(1)} / 5.0 Stars
                    </span>
                  </div>
                  <span className="text-amber-400 font-mono text-sm tracking-widest">{selectedPharma.helpStars}</span>
                </div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span className="text-slate-400 font-normal">Assessment:</span>
                  <span>{selectedPharma.helpVerdict}</span>
                </div>
                {selectedPharma.ratingRationale && (
                  <p className="text-[11px] text-slate-300 leading-relaxed border-t border-amber-500/20 pt-1.5">
                    <strong>Mechanism:</strong> {selectedPharma.ratingRationale}
                  </p>
                )}
              </div>
            )}

            {/* Primary Mechanism */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Cellular & Molecular Mechanism
              </span>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/80 p-3.5 rounded-lg border border-slate-800">
                {selectedPharma.primaryMechanism}
              </p>
            </div>

            {/* Cognitive & Brain Fog Impact */}
            <div className="p-4 rounded-lg bg-cyan-950/20 border border-cyan-800/30 space-y-1.5">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                <Brain className="w-3.5 h-3.5 text-cyan-400" />
                Cognitive Impact (Fluency & Mental Tempo)
              </span>
              <p className="text-xs text-cyan-100/90 leading-relaxed">
                {selectedPharma.cognitiveImpact}
              </p>
            </div>

            {/* Dosage & Titration Protocol */}
            <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                <Pill className="w-3.5 h-3.5 text-emerald-400" />
                Typical Dosing & Titration Window
              </span>
              <p className="text-xs text-slate-300 font-mono">
                {selectedPharma.typicalDosageRange}
              </p>
            </div>

            {/* Clinical Pearls */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Translational Clinical Pearls
              </span>
              <ul className="space-y-1.5">
                {selectedPharma.clinicalPearls.map((pearl, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{pearl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cautions & Warnings */}
            <div className="pt-2 border-t border-slate-800 space-y-2">
              <span className="text-xs font-semibold text-rose-300 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                Clinical Warnings & Monitoring
              </span>
              <ul className="space-y-1.5">
                {selectedPharma.cautionWarnings.map((warn, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-rose-200/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>{warn}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* STRATEGIC PROTOCOL: HOW TO SOLVE THE KETOTIFEN STORM VS BRAIN FOG DILEMMA */}
      <div className="p-6 md:p-8 rounded-xl bg-slate-900 border border-slate-800 space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-1">
            Precision Cycling Architecture
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            How to Tame the MCAS Storm Without Losing Your Cognitive Faculties
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            A structured framework for cycling Ketotifen and Ebastine to bust acute flares while maintaining high-IQ cognitive processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Phase 1 */}
          <div className="p-5 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
            <div className="text-[11px] font-mono uppercase text-rose-400 font-bold">
              Phase 1 · Acute Storm Buster (Days 1 - 7)
            </div>
            <h4 className="text-sm font-bold text-white">Quench the Systemic Surge</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Use Ketotifen (0.5 mg to 1 mg strictly at bedtime) + Ebastine (20-40 mg morning) + Nasal Cromolyn Sodium (Nasalcrom 3x daily).
            </p>
            <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-800/80">
              Outcome: Quenches systemic and sinonasal mast cells before cranial damage spreads.
            </div>
          </div>

          {/* Phase 2 */}
          <div className="p-5 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
            <div className="text-[11px] font-mono uppercase text-amber-400 font-bold">
              Phase 2 · Cognitive Clearance & Bridge (Days 8 - 14)
            </div>
            <h4 className="text-sm font-bold text-white">The Ketotifen Exit Strategy</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              As soon as brain fog from Ketotifen sets in, taper Ketotifen down to 0.25-0.5 mg alternate nights or stop. Transition immediately to Oral Cromolyn Sodium (100-200 mg 4x daily) + PEA (600-1200 mg).
            </p>
            <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-800/80">
              Outcome: Replaces central H1-sedating stabilizer with peripheral non-sedating stabilizers.
            </div>
          </div>

          {/* Phase 3 */}
          <div className="p-5 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
            <div className="text-[11px] font-mono uppercase text-emerald-400 font-bold">
              Phase 3 · High-IQ Maintenance & Prefrontal Optimization
            </div>
            <h4 className="text-sm font-bold text-white">Sustained Processing Speed</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Maintain baseline mast cell stability with Oral + Nasal Cromolyn, PEA, and Low-Dose Naltrexone (1.5-4.5 mg). Support prefrontal delay-period firing with Guanfacine (0.5-1 mg) or micro-dose Roflumilast (100-250 mcg) under physician guidance.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-800/80">
              Outcome: Protects prefrontal working memory buffers without sedation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

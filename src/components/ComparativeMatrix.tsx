import React, { useState } from 'react';
import { COGNITIVE_COMPARISONS } from '../data/clinicalData';
import { CognitiveDomainComparison } from '../types';
import { Scale, HelpCircle, CheckCircle2, AlertTriangle, ArrowUpDown } from 'lucide-react';

export const ComparativeMatrix: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const getSeverityBadge = (severity: 'Mild' | 'Moderate' | 'Severe' | 'Variable') => {
    switch (severity) {
      case 'Severe':
        return 'text-rose-400 bg-rose-950/40 border border-rose-500/30';
      case 'Moderate':
        return 'text-amber-400 bg-amber-950/40 border border-amber-500/30';
      case 'Mild':
        return 'text-emerald-400 bg-emerald-950/40 border border-emerald-500/30';
      case 'Variable':
        return 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          <Scale className="w-3.5 h-3.5" />
          <span>Differential Neurocognitive Phenotyping</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          SCT vs. ADHD vs. MCAS Brain Fog vs. Visceral Hypersensitivity
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-4xl">
          Disentangling overlapping symptoms: Why an inflammatory flare can mimic Sluggish Cognitive Tempo, why ADHD medications can fail or trigger mast cells, and how gut-brain signals rob situational fluency.
        </p>
      </div>

      {/* Clinical Diagnostic Pearl Callout */}
      <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start gap-3.5">
        <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <div className="text-xs space-y-1">
          <h4 className="font-semibold text-slate-200">
            The Diagnostic Chameleon: Why Patients Are Frequently Misdiagnosed
          </h4>
          <p className="text-slate-400 leading-relaxed">
            Patients with underlying MCAS and visceral hypersensitivity are often mislabeled as having refractory ADHD or severe depression. In reality, their prefrontal working memory and processing speed collapses from cytokine-induced microglial priming and H3 autoreceptor activation. Notice the critical difference: ADHD is characterized by <span className="text-slate-200 font-medium">executive disinhibition and distractibility</span>, whereas MCAS flare and SCT present with <span className="text-cyan-300 font-medium">hypoarousal, mental latency, and acute word-finding blockage</span>.
          </p>
        </div>
      </div>

      {/* Comparative Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60 shadow-xl">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-900 border-b border-slate-800 text-slate-400 font-mono uppercase tracking-wider text-[11px]">
              <th className="p-4 w-1/5 min-w-[180px]">Cognitive Domain</th>
              <th className="p-4 w-1/5 min-w-[220px] bg-cyan-950/20 text-cyan-300">
                SCT (Cognitive Disengagement)
              </th>
              <th className="p-4 w-1/5 min-w-[220px]">ADHD (Executive Axis)</th>
              <th className="p-4 w-1/5 min-w-[220px] bg-rose-950/20 text-rose-300">
                MCAS Neuroinflammatory Fog
              </th>
              <th className="p-4 w-1/5 min-w-[220px] bg-amber-950/20 text-amber-300">
                Visceral Hypersensitivity
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            {COGNITIVE_COMPARISONS.map((row, index) => {
              const isSelected = selectedDomain === row.domain;
              return (
                <tr
                  key={index}
                  onClick={() => setSelectedDomain(isSelected ? null : row.domain)}
                  className={`transition-colors cursor-pointer ${
                    isSelected ? 'bg-slate-800/50' : 'hover:bg-slate-900/40'
                  }`}
                >
                  {/* Domain Title */}
                  <td className="p-4 font-semibold text-white align-top border-r border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      <span>{row.domain}</span>
                    </div>
                  </td>

                  {/* SCT / CDS Column */}
                  <td className="p-4 align-top bg-cyan-950/10 border-r border-slate-800/80">
                    <div className="space-y-2">
                      <span className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded ${getSeverityBadge(row.sct.severity)}`}>
                        {row.sct.severity} Deficit
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {row.sct.presentation}
                      </p>
                      <div className="pt-1.5 border-t border-slate-800/60 text-slate-400 font-mono text-[11px]">
                        <span className="text-slate-500 uppercase">Substrate: </span>
                        {row.sct.mechanism}
                      </div>
                    </div>
                  </td>

                  {/* ADHD Column */}
                  <td className="p-4 align-top border-r border-slate-800/80">
                    <div className="space-y-2">
                      <span className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded ${getSeverityBadge(row.adhd.severity)}`}>
                        {row.adhd.severity} Deficit
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {row.adhd.presentation}
                      </p>
                      <div className="pt-1.5 border-t border-slate-800/60 text-slate-400 font-mono text-[11px]">
                        <span className="text-slate-500 uppercase">Substrate: </span>
                        {row.adhd.mechanism}
                      </div>
                    </div>
                  </td>

                  {/* MCAS Brain Fog Column */}
                  <td className="p-4 align-top bg-rose-950/10 border-r border-slate-800/80">
                    <div className="space-y-2">
                      <span className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded ${getSeverityBadge(row.mcasBrainFog.severity)}`}>
                        {row.mcasBrainFog.severity} Deficit
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {row.mcasBrainFog.presentation}
                      </p>
                      <div className="pt-1.5 border-t border-slate-800/60 text-slate-400 font-mono text-[11px]">
                        <span className="text-slate-500 uppercase">Substrate: </span>
                        {row.mcasBrainFog.mechanism}
                      </div>
                    </div>
                  </td>

                  {/* Visceral Hypersensitivity Column */}
                  <td className="p-4 align-top bg-amber-950/10">
                    <div className="space-y-2">
                      <span className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded ${getSeverityBadge(row.visceralSensitivity.severity)}`}>
                        {row.visceralSensitivity.severity} Deficit
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {row.visceralSensitivity.presentation}
                      </p>
                      <div className="pt-1.5 border-t border-slate-800/60 text-slate-400 font-mono text-[11px]">
                        <span className="text-slate-500 uppercase">Substrate: </span>
                        {row.visceralSensitivity.mechanism}
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Matrix Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
            SCT / CDS Primary Driver
          </div>
          <h4 className="text-sm font-semibold text-white">Central Hypoarousal & DMN</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Intrinsic deficit in processing speed and thalamic alerting networks. Persistent slow mental pacing uncoupled from immune flares.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
            ADHD Primary Driver
          </div>
          <h4 className="text-sm font-semibold text-white">Frontostriatal Disinhibition</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Dopamine clearance and receptor deficiency causing executive working memory decay and reward-seeking impulsivity.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="text-[11px] font-mono text-rose-400 uppercase tracking-wider">
            MCAS Primary Driver
          </div>
          <h4 className="text-sm font-semibold text-white">Microglial & H3 Shutdown</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Episodic mediator release (histamine, cytokines) driving BBB permeabilization, shutting down acetylcholine and temporal word retrieval.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">
            Visceral Sensitivity Driver
          </div>
          <h4 className="text-sm font-semibold text-white">Interoceptive Salience Theft</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Sensory hyper-afference via vagal and spinal C-fibers bombards the anterior insula, exhausting bandwidth for dynamic situational fluency.
          </p>
        </div>
      </div>
    </div>
  );
};

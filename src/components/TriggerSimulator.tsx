import React, { useState } from 'react';
import { SIMULATION_SCENARIOS } from '../data/clinicalData';
import { Play, RotateCcw, ArrowRight, ShieldCheck, Activity, Gauge, Flame, Clock } from 'lucide-react';

export const TriggerSimulator: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(SIMULATION_SCENARIOS[0].id);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const scenario =
    SIMULATION_SCENARIOS.find((s) => s.id === activeScenarioId) || SIMULATION_SCENARIOS[0];
  const currentStep = scenario.steps[currentStepIndex];

  const handleSelectScenario = (id: string) => {
    setActiveScenarioId(id);
    setCurrentStepIndex(0);
  };

  const getGaugeColor = (val: number, reverse: boolean = false) => {
    if (reverse) {
      if (val > 70) return 'text-rose-400';
      if (val > 40) return 'text-amber-400';
      return 'text-emerald-400';
    } else {
      if (val > 70) return 'text-emerald-400';
      if (val > 40) return 'text-amber-400';
      return 'text-rose-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          <Activity className="w-3.5 h-3.5" />
          <span>Real-Time Pathophysiology Simulator</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Flare-to-Cognition Propagation Engine
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-4xl">
          Simulate how an immunological or chemical trigger (high-histamine meal, neuroendocrine stress, thermal exertion, sinonasal flare, or sulfite preservative challenge) propagates from peripheral mast cells to microglial neuroinflammation, precipitating verbal blocks, bronchospasm, and situational freeze.
        </p>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
        {SIMULATION_SCENARIOS.map((scen) => {
          const isSelected = scen.id === scenario.id;
          return (
            <button
              key={scen.id}
              onClick={() => handleSelectScenario(scen.id)}
              className={`p-4 text-left rounded-xl border transition-all ${
                isSelected
                  ? 'bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-500/30'
                  : 'bg-slate-950/70 border-slate-800 hover:bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              <div className="text-[10px] font-mono uppercase text-cyan-400 mb-1">
                {scen.triggerType}
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{scen.name}</h3>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {scen.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Main Simulation Workspace */}
      <div className="p-6 md:p-8 rounded-xl bg-slate-900/70 border border-slate-800 shadow-2xl space-y-8">
        {/* Timeline Scrubber */}
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
            <span className="uppercase tracking-wider flex items-center gap-1.5 text-cyan-400">
              <Clock className="w-3.5 h-3.5" />
              Timeline Propagation
            </span>
            <span>
              Step {currentStepIndex + 1} of {scenario.steps.length}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {scenario.steps.map((step, idx) => {
              const isCurrent = idx === currentStepIndex;
              const isPast = idx < currentStepIndex;

              return (
                <button
                  key={idx}
                  onClick={() => setCurrentStepIndex(idx)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    isCurrent
                      ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-md shadow-cyan-950'
                      : isPast
                      ? 'bg-slate-900/90 border-slate-700 text-slate-300'
                      : 'bg-slate-950 border-slate-800/80 text-slate-500 hover:border-slate-700 hover:text-slate-400'
                  }`}
                >
                  <div className="text-xs font-mono font-bold tracking-tight mb-0.5">
                    {step.timeOffset}
                  </div>
                  <div className="text-[11px] font-medium leading-tight truncate">
                    {step.phaseName}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Gauges Ribbon (Tabular Figures) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-400 block">
              Verbal Fluency Index
            </span>
            <div className="flex items-baseline gap-2">
              <span
                className={`text-3xl font-bold font-mono tabular-nums ${getGaugeColor(
                  currentStep.verbalFluencyScore
                )}`}
              >
                {currentStep.verbalFluencyScore}
              </span>
              <span className="text-xs text-slate-500 font-mono">/ 100</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
              <div
                className="bg-cyan-400 h-full transition-all duration-300"
                style={{ width: `${currentStep.verbalFluencyScore}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-500 block pt-1">
              Phonemic & lexical access capacity
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-400 block">
              Processing Speed
            </span>
            <div className="flex items-baseline gap-2">
              <span
                className={`text-3xl font-bold font-mono tabular-nums ${getGaugeColor(
                  currentStep.processingSpeedScore
                )}`}
              >
                {currentStep.processingSpeedScore}
              </span>
              <span className="text-xs text-slate-500 font-mono">/ 100</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
              <div
                className="bg-indigo-400 h-full transition-all duration-300"
                style={{ width: `${currentStep.processingSpeedScore}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-500 block pt-1">
              Internal mental tempo & reaction latency
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-400 block">
              Situational Fluency
            </span>
            <div className="flex items-baseline gap-2">
              <span
                className={`text-3xl font-bold font-mono tabular-nums ${getGaugeColor(
                  currentStep.situationalFluencyScore
                )}`}
              >
                {currentStep.situationalFluencyScore}
              </span>
              <span className="text-xs text-slate-500 font-mono">/ 100</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
              <div
                className="bg-purple-400 h-full transition-all duration-300"
                style={{ width: `${currentStep.situationalFluencyScore}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-500 block pt-1">
              Dynamic social calibration & context switching
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-400 block">
              Visceral / Interoceptive Noise
            </span>
            <div className="flex items-baseline gap-2">
              <span
                className={`text-3xl font-bold font-mono tabular-nums ${getGaugeColor(
                  currentStep.visceralNoiseScore,
                  true
                )}`}
              >
                {currentStep.visceralNoiseScore}
              </span>
              <span className="text-xs text-slate-500 font-mono">/ 100</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
              <div
                className="bg-rose-500 h-full transition-all duration-300"
                style={{ width: `${currentStep.visceralNoiseScore}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-500 block pt-1">
              Insular cognitive bandwidth drain
            </span>
          </div>
        </div>

        {/* Current State Detail Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Biological Event */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-[11px] font-mono uppercase text-amber-400 tracking-wider block">
              01 · Biological Cascade
            </span>
            <p className="text-xs leading-relaxed text-slate-300">
              {currentStep.biologicalEvent}
            </p>
          </div>

          {/* Neurochemical State */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-[11px] font-mono uppercase text-purple-400 tracking-wider block">
              02 · Neurochemical Balance
            </span>
            <p className="text-xs leading-relaxed text-slate-300">
              {currentStep.neurochemicalState}
            </p>
          </div>

          {/* Cognitive & Speech Manifestation */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider block">
              03 · Cognitive & Fluency Impact
            </span>
            <p className="text-xs leading-relaxed text-slate-300">
              {currentStep.cognitiveSymptom}
            </p>
          </div>
        </div>

        {/* Controls Bar & Mitigation Protocol */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <button
              disabled={currentStepIndex === 0}
              onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-md transition-colors"
            >
              Previous Phase
            </button>

            <button
              disabled={currentStepIndex === scenario.steps.length - 1}
              onClick={() =>
                setCurrentStepIndex((prev) => Math.min(scenario.steps.length - 1, prev + 1))
              }
              className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-40 disabled:cursor-not-allowed rounded-md transition-colors flex items-center gap-1.5"
            >
              <span>Next Phase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setCurrentStepIndex(0)}
              className="p-1.5 text-slate-400 hover:text-slate-200 transition-colors"
              title="Reset Timeline"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Mitigation Badge Button */}
          <div className="text-xs text-slate-400">
            <span className="text-slate-500 font-mono">Trigger: </span>
            <span className="text-white font-medium">{scenario.name}</span>
          </div>
        </div>

        {/* Evidence Mitigation Box */}
        <div className="p-4 bg-emerald-950/20 rounded-lg border border-emerald-500/30 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Targeted Clinical Interventions for This Scenario</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
            {scenario.mitigationStrategies.map((strat, sIdx) => (
              <div key={sIdx} className="flex items-start gap-2">
                <span className="text-emerald-400 font-mono">✓</span>
                <span>{strat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

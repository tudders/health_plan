import React, { useState, useEffect, useRef } from 'react';
import { NEURO_COGNITIVE_EXERCISES } from '../data/exercisesSectionData';
import { NeuroCognitiveExercise, ActiveTab } from '../types';
import {
  Brain,
  Activity,
  Heart,
  Wind,
  Layers,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
  Info,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Volume2,
  Sliders,
  Dumbbell,
  Eye
} from 'lucide-react';

interface ExercisesSectionProps {
  onNavigateToTab?: (tab: ActiveTab) => void;
}

export const ExercisesSection: React.FC<ExercisesSectionProps> = ({ onNavigateToTab }) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [selectedTarget, setSelectedTarget] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedExerciseId, setExpandedExerciseId] = useState<string | null>('dual-n-back');
  const [activeInteractiveTool, setActiveInteractiveTool] = useState<string>('breathing');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // 1. Resonance Breathing State (5.5s in / 5.5s out)
  const [isBreathingActive, setIsBreathingActive] = useState<boolean>(false);
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'exhale'>('inhale');
  const [breathingSecondsLeft, setBreathingSecondsLeft] = useState<number>(5.5);
  const [breathingCyclesCompleted, setBreathingCyclesCompleted] = useState<number>(0);

  // 2. Metronome State
  const [isMetronomeActive, setIsMetronomeActive] = useState<boolean>(false);
  const [metronomeBpm, setMetronomeBpm] = useState<number>(90);
  const [metronomeBeat, setMetronomeBeat] = useState<number>(0);

  // 3. Soleus Pump State
  const [soleusReps, setSoleusReps] = useState<number>(0);
  const [isSoleusPumping, setIsSoleusPumping] = useState<boolean>(false);

  // 4. Dual N-Back Mini Simulator State
  const [nBackActive, setNBackActive] = useState<boolean>(false);
  const [nBackPosition, setNBackPosition] = useState<number>(4); // 0-8 grid
  const [nBackLetter, setNBackLetter] = useState<string>('A');
  const [nBackStep, setNBackStep] = useState<number>(0);
  const [nBackScore, setNBackScore] = useState<{ hits: number; total: number }>({ hits: 0, total: 0 });
  const [history, setHistory] = useState<{ pos: number; letter: string }[]>([]);
  const [nBackMessage, setNBackMessage] = useState<string>('Press Start to initiate 2-Back delay-period training');

  // 5. Bilateral Gaze / EMDR Pacer State
  const [isGazeActive, setIsGazeActive] = useState<boolean>(false);
  const [gazeSpeed, setGazeSpeed] = useState<'slow' | 'medium' | 'fast'>('medium');
  const [gazeMode, setGazeMode] = useState<'smooth' | 'saccade'>('smooth');
  const [gazePosition, setGazePosition] = useState<number>(50); // 0 to 100%
  const [gazeCyclesCompleted, setGazeCyclesCompleted] = useState<number>(0);

  // Breathing timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isBreathingActive) {
      interval = setInterval(() => {
        setBreathingSecondsLeft((prev) => {
          if (prev <= 0.2) {
            setBreathingPhase((currentPhase) => {
              if (currentPhase === 'inhale') {
                return 'exhale';
              } else {
                setBreathingCyclesCompleted((c) => c + 1);
                return 'inhale';
              }
            });
            return 5.5;
          }
          return parseFloat((prev - 0.1).toFixed(1));
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isBreathingActive]);

  // Metronome effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isMetronomeActive) {
      const msPerBeat = (60 / metronomeBpm) * 1000;
      interval = setInterval(() => {
        setMetronomeBeat((b) => (b + 1) % 4);
      }, msPerBeat);
    }
    return () => clearInterval(interval);
  }, [isMetronomeActive, metronomeBpm]);

  // Dual N-Back sequence runner
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (nBackActive) {
      timeout = setTimeout(() => {
        const letters = ['C', 'H', 'K', 'L', 'Q', 'R', 'S', 'T'];
        const newPos = Math.floor(Math.random() * 9);
        const newLetter = letters[Math.floor(Math.random() * letters.length)];

        setHistory((prev) => {
          const updated = [...prev, { pos: newPos, letter: newLetter }];
          return updated.slice(-10); // keep recent
        });

        setNBackPosition(newPos);
        setNBackLetter(newLetter);
        setNBackStep((s) => s + 1);
      }, 2500);
    }
    return () => clearTimeout(timeout);
  }, [nBackActive, nBackStep]);

  // Bilateral Gaze / EMDR Pacer animation effect
  useEffect(() => {
    let animationFrameId: number;
    let saccadeInterval: NodeJS.Timeout;

    if (isGazeActive) {
      if (gazeMode === 'smooth') {
        const speedFreq = gazeSpeed === 'slow' ? 0.45 : gazeSpeed === 'medium' ? 0.75 : 1.15;
        const startTime = Date.now();
        let lastSin = 0;

        const updateSmoothGaze = () => {
          const elapsed = (Date.now() - startTime) / 1000;
          const currentSin = Math.sin(elapsed * 2 * Math.PI * speedFreq);
          // Calculate horizontal percentage: smoothly oscillations between 12% and 88%
          const pos = 50 + 38 * currentSin;
          setGazePosition(pos);

          // Increment count when crossing from positive to negative half of sine wave
          if (lastSin >= 0 && currentSin < 0) {
            setGazeCyclesCompleted((c) => c + 1);
          }
          lastSin = currentSin;

          animationFrameId = requestAnimationFrame(updateSmoothGaze);
        };
        animationFrameId = requestAnimationFrame(updateSmoothGaze);
      } else {
        // Discrete Saccade Jump Mode
        const jumpMs = gazeSpeed === 'slow' ? 1000 : gazeSpeed === 'medium' ? 650 : 420;
        let side: 'left' | 'right' = 'left';
        setGazePosition(15);

        saccadeInterval = setInterval(() => {
          side = side === 'left' ? 'right' : 'left';
          setGazePosition(side === 'left' ? 15 : 85);
          if (side === 'left') {
            setGazeCyclesCompleted((c) => c + 1);
          }
        }, jumpMs);
      }
    } else {
      setGazePosition(50);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (saccadeInterval) clearInterval(saccadeInterval);
    };
  }, [isGazeActive, gazeSpeed, gazeMode]);

  const handleCopy = (ex: NeuroCognitiveExercise) => {
    const text = `EXERCISE: ${ex.name}\nDomain: ${ex.domain} | Target: ${ex.primaryTarget} (${ex.overallStars})\n\nMechanism: ${ex.primaryMechanism}\n\nPrescribed Protocol:\n${ex.prescribedProtocol}\n\nCDS/SCT Impact: ${ex.cdsSctImpact}\nVascular Tone Impact: ${ex.vascularImpact}\nClinical Pearls: ${ex.clinicalPearls.join(' | ')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(ex.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const domains = [
    'all',
    'Cognitive & Working Memory',
    'Rhythmic & Auditory',
    'Vagal & Autonomic',
    'Vascular & Hemodynamic',
    'Somato-Pelvic'
  ];

  const targets = [
    'all',
    'CDS / SCT',
    'ADHD',
    'Vascular Tone',
    'Vagal CAIP',
    'Pelvic / Pudendal'
  ];

  const filteredExercises = NEURO_COGNITIVE_EXERCISES.filter((ex) => {
    const matchesDomain = selectedDomain === 'all' || ex.domain === selectedDomain;
    const matchesTarget = selectedTarget === 'all' || ex.primaryTarget === selectedTarget;
    const matchesSearch =
      ex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ex.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ex.primaryMechanism.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ex.prescribedProtocol.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesTarget && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          <Activity className="w-3.5 h-3.5" />
          <span>Neuro-Somatic & Cognitive Rehabilitation</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
          <span>Targeted Exercises: Brain, Vagal, & Vascular Tone</span>
          <span className="text-xs font-normal font-mono px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/40">
            {NEURO_COGNITIVE_EXERCISES.length} Prescribed Protocols
          </span>
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-4xl">
          Non-exertional and rhythmically paced interventions designed specifically for Cognitive Disengagement Syndrome (CDS/SCT), ADHD executive gating, and vascular tone. These protocols bypass adrenergic crashes and mast cell triggers to systematically strengthen prefrontal delay-period buffers, stimulate vagal efferents, and activate the soleus venous pump.
        </p>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-[11px] font-mono text-cyan-400 uppercase">CDS/SCT Chaining</div>
            <div className="text-sm font-bold text-white mt-0.5">Dual N-Back & Drumming</div>
            <div className="text-[10px] text-slate-400">Halts attractor basin flattening</div>
          </div>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-[11px] font-mono text-emerald-400 uppercase">Vagal CAIP Activation</div>
            <div className="text-sm font-bold text-white mt-0.5">Singing & Dive Reflex</div>
            <div className="text-[10px] text-slate-400">α7-nAChR mast cell quieting</div>
          </div>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-[11px] font-mono text-rose-400 uppercase">Vascular Siphon</div>
            <div className="text-sm font-bold text-white mt-0.5">Seated Soleus Pushups</div>
            <div className="text-[10px] text-slate-400">Pumps 500–1000 mL pooled blood</div>
          </div>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-[11px] font-mono text-amber-400 uppercase">Pudendal Release</div>
            <div className="text-sm font-bold text-white mt-0.5">90/90 Reverse Kegels</div>
            <div className="text-[10px] text-slate-400">Alcock's canal decompression</div>
          </div>
        </div>

        {/* Reciprocal Banner linking to Physical Exercises */}
        <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-950 border border-blue-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
              <Dumbbell className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-blue-300 block">Looking for Cardiovascular & Resistance Training Protocols?</strong>
              <span className="text-slate-300">
                Explore the <strong className="text-white">Physical Exercises 🏃</strong> section for 4 km/h Very Slow Jogging ("Niko Niko" pace), Farmer's Walks, Kettlebell Armor Building, Zone 1 Walking, and HIIT avoidance guardrails.
              </span>
            </div>
          </div>
          {onNavigateToTab && (
            <button
              onClick={() => onNavigateToTab('exercise')}
              className="px-3 py-1.5 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/40 font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 self-start sm:self-auto shrink-0"
            >
              <span>Open Physical Exercises</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Interactive Practice Assistant Workspace */}
      <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/30 shadow-xl shadow-cyan-950/20 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Interactive Exercise Assistant & Timers</h3>
              <p className="text-xs text-slate-400">Live pacing tools to calibrate your nervous system</p>
            </div>
          </div>

          {/* Interactive Tool Selector Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-slate-950 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveInteractiveTool('breathing')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeInteractiveTool === 'breathing'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              0.1 Hz Resonance Pacer
            </button>
            <button
              onClick={() => setActiveInteractiveTool('metronome')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeInteractiveTool === 'metronome'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Drumming Metronome
            </button>
            <button
              onClick={() => setActiveInteractiveTool('soleus')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeInteractiveTool === 'soleus'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Soleus Venous Pump
            </button>
            <button
              onClick={() => setActiveInteractiveTool('dual-n-back')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeInteractiveTool === 'dual-n-back'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Dual N-Back Simulator
            </button>
            <button
              onClick={() => setActiveInteractiveTool('emdr-gaze')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeInteractiveTool === 'emdr-gaze'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Bilateral EMDR Eye Tracker
            </button>
          </div>
        </div>

        {/* 1. Resonance Breathing Interactive Pacer */}
        {activeInteractiveTool === 'breathing' && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-2">
            <div className="flex flex-col items-center justify-center flex-1">
              <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Expanding / Contracting Glow Circle */}
                <div
                  className={`absolute rounded-full transition-all duration-100 ease-out border-2 ${
                    breathingPhase === 'inhale'
                      ? 'bg-cyan-500/20 border-cyan-400 shadow-2xl shadow-cyan-500/50 scale-100'
                      : 'bg-indigo-500/10 border-indigo-400 shadow-md shadow-indigo-950 scale-75'
                  }`}
                  style={{
                    width: `${Math.max(60, (breathingPhase === 'inhale' ? (5.5 - breathingSecondsLeft) / 5.5 : breathingSecondsLeft / 5.5) * 180)}px`,
                    height: `${Math.max(60, (breathingPhase === 'inhale' ? (5.5 - breathingSecondsLeft) / 5.5 : breathingSecondsLeft / 5.5) * 180)}px`
                  }}
                />
                <div className="relative z-10 text-center">
                  <div className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">
                    {breathingPhase === 'inhale' ? 'Inhale (Smooth Nasal)' : 'Exhale (Effortless)'}
                  </div>
                  <div className="text-3xl font-bold font-mono text-white mt-0.5">
                    {breathingSecondsLeft.toFixed(1)}s
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    5.5s Cadence · 0.1 Hz
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => setIsBreathingActive(!isBreathingActive)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-md ${
                    isBreathingActive
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30'
                      : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-cyan-950'
                  }`}
                >
                  {isBreathingActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isBreathingActive ? 'Pause Session' : 'Start Resonance Pacer'}</span>
                </button>
                <button
                  onClick={() => {
                    setIsBreathingActive(false);
                    setBreathingSecondsLeft(5.5);
                    setBreathingPhase('inhale');
                    setBreathingCyclesCompleted(0);
                  }}
                  className="px-3 py-2 rounded-lg text-xs bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            <div className="w-full md:w-96 space-y-3 bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium">Cycles Completed:</span>
                <span className="font-mono text-white font-bold">{breathingCyclesCompleted} ({Math.round(breathingCyclesCompleted * 11 / 60)} min)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium">Target Frequency:</span>
                <span className="font-mono text-cyan-300 font-bold">5.45 Breaths / Min (~0.1 Hz)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium">Physiological Goal:</span>
                <span className="text-emerald-400 font-semibold">Maximize Baroreflex HRV Gain</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                <strong className="text-white block font-semibold">Technique Cue:</strong>
                <p>
                  Inhale smoothly into your lower belly without expanding your upper chest. Do not hold your breath at the top or bottom. This synchronizes pulmonary blood flow with your arterial baroreceptors to immediately oxygenate your frontopolar cortex.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 2. Drumming & Rhythm Metronome */}
        {activeInteractiveTool === 'metronome' && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-2">
            <div className="flex flex-col items-center justify-center flex-1 space-y-4">
              {/* Visual Beat Indicator */}
              <div className="flex items-center gap-3">
                {[0, 1, 2, 3].map((b) => (
                  <div
                    key={b}
                    className={`w-12 h-16 rounded-xl border flex flex-col items-center justify-center transition-all ${
                      isMetronomeActive && metronomeBeat === b
                        ? 'bg-amber-400 text-slate-950 border-amber-300 scale-110 shadow-lg shadow-amber-400/40 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-500'
                    }`}
                  >
                    <span className="text-lg font-mono">{b + 1}</span>
                    <span className="text-[9px] uppercase tracking-wider">{b === 0 ? 'Down' : 'Beat'}</span>
                  </div>
                ))}
              </div>

              {/* Tempo Slider */}
              <div className="w-full max-w-xs space-y-2 text-center">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                  <span>Tempo:</span>
                  <span className="text-lg font-bold text-amber-300">{metronomeBpm} BPM</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="140"
                  value={metronomeBpm}
                  onChange={(e) => setMetronomeBpm(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>60 (Calm)</span>
                  <span>90 (Optimal Ostinato)</span>
                  <span>140 (Fast)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsMetronomeActive(!isMetronomeActive)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-md ${
                    isMetronomeActive
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30'
                      : 'bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-amber-950'
                  }`}
                >
                  {isMetronomeActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isMetronomeActive ? 'Stop Metronome' : 'Start Drumming Beat'}</span>
                </button>
              </div>
            </div>

            <div className="w-full md:w-96 space-y-3 bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-xs">
              <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" />
                <span>Auditory-Motor Entrainment Protocol</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Use your hands on your lap, desk, or a drum pad. Alternate hands on each beat: <strong className="text-white">Right-Left-Right-Left</strong>.
              </p>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                <span className="text-emerald-400 font-bold block">Why this fixes ADHD & CDS:</span>
                Sub-millisecond auditory-motor predictive timing forces the cerebellum and basal ganglia to synchronize thalamocortical gamma oscillations. This elevates striatal dopamine naturally and quells mind-wandering without adrenergic stimulation.
              </div>
            </div>
          </div>
        )}

        {/* 3. Soleus Pump Counter & Assistant */}
        {activeInteractiveTool === 'soleus' && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-2">
            <div className="flex flex-col items-center justify-center flex-1 space-y-4">
              <div className="text-center">
                <div className="text-5xl font-mono font-bold text-white tracking-tight">
                  {soleusReps}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">
                  Seated Soleus Calf Raises Completed
                </div>
                <div className="text-xs font-mono text-emerald-400 mt-0.5">
                  ~{Math.round(soleusReps * 3.5)} mL Pooled Blood Recirculated Upward
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSoleusReps((r) => r + 10)}
                  className="px-4 py-2.5 rounded-lg text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-md shadow-cyan-950 transition-all flex items-center gap-1.5"
                >
                  <Dumbbell className="w-3.5 h-3.5" />
                  <span>+10 Reps (Pump Heels)</span>
                </button>
                <button
                  onClick={() => setSoleusReps((r) => r + 50)}
                  className="px-3.5 py-2.5 rounded-lg text-xs font-bold bg-slate-800 text-cyan-300 hover:bg-slate-700 transition-colors"
                >
                  +50 Set
                </button>
                <button
                  onClick={() => setSoleusReps(0)}
                  className="px-3 py-2.5 rounded-lg text-xs bg-slate-900 text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            <div className="w-full md:w-96 space-y-3 bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-xs">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                The "Second Heart" Biomechanics
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Sit upright with knees bent at 90°. Keep the balls of your feet anchored to the floor while lifting your heels as high as possible, then lower.
              </p>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5 text-[11px]">
                <div className="flex justify-between text-slate-300">
                  <span>Goal per 90-min desk bout:</span>
                  <span className="font-mono font-bold text-white">150–250 reps</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Hydrostatic relief:</span>
                  <span className="text-emerald-400 font-semibold">Prevents Amlodipine sock marks</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Metabolic thermal heat:</span>
                  <span className="text-cyan-300 font-semibold">0.0°C (100% MCAS safe)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. Dual N-Back Mini Simulator */}
        {activeInteractiveTool === 'dual-n-back' && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-2">
            <div className="flex flex-col items-center justify-center flex-1 space-y-4">
              {/* 3x3 Grid Display */}
              <div className="grid grid-cols-3 gap-2 p-3 bg-slate-950 rounded-xl border border-slate-800 shadow-inner">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
                  <div
                    key={idx}
                    className={`w-14 h-14 rounded-lg flex items-center justify-center font-bold font-mono text-xl transition-all ${
                      nBackActive && nBackPosition === idx
                        ? 'bg-cyan-500 text-slate-950 scale-105 shadow-md shadow-cyan-500/50'
                        : 'bg-slate-900 text-slate-700 border border-slate-800'
                    }`}
                  >
                    {nBackActive && nBackPosition === idx ? nBackLetter : ''}
                  </div>
                ))}
              </div>

              <div className="text-center space-y-1">
                <div className="text-xs font-mono text-cyan-300">
                  Stimulus: Position {nBackPosition + 1} · Letter "{nBackLetter}"
                </div>
                <div className="text-[11px] text-slate-400">
                  Does this match the position or letter from <strong className="text-white">2 steps ago</strong>?
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    if (!nBackActive) {
                      setNBackActive(true);
                      setNBackStep(1);
                      setHistory([]);
                      setNBackMessage('Focus on keeping both position and letter in your prefrontal buffer');
                    } else {
                      setNBackActive(false);
                      setNBackMessage('Training paused');
                    }
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    nBackActive
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-md shadow-cyan-950'
                  }`}
                >
                  {nBackActive ? 'Pause Training' : 'Start 2-Back Round'}
                </button>
              </div>
            </div>

            <div className="w-full md:w-96 space-y-3 bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-xs">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5" />
                <span>Prefrontal Attractor Basin Locking</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Dual N-Back forces the dorsolateral prefrontal cortex (DLPFC) to hold and update two independent information streams without letting them overwrite each other.
              </p>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                <strong className="text-emerald-400 block font-semibold">How it resolves Sluggish Cognitive Tempo:</strong>
                SCT is fundamentally an attractor basin flattening disease: a thought slides out of working memory before the conclusion is formed. Dual N-Back exercises the exact pyramidal recurrent circuits that keep thoughts locked in working memory.
              </div>
            </div>
          </div>
        )}

        {/* 5. Bilateral Gaze / EMDR Saccadic Pacer */}
        {activeInteractiveTool === 'emdr-gaze' && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-2">
            <div className="flex flex-col items-center justify-center flex-1 space-y-4 w-full">
              {/* Eye Tracking Chamber */}
              <div className="w-full max-w-lg p-5 bg-slate-950 rounded-2xl border border-slate-800 shadow-inner space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-mono text-cyan-400">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Bilateral Visual Field Track</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Cycles: <strong className="text-white font-bold">{gazeCyclesCompleted}</strong>
                  </div>
                </div>

                {/* Track Bar with Moving Orb */}
                <div className="relative h-14 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center px-4 overflow-hidden">
                  {/* Visual Midline Indicator */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-700/40 z-0"></div>
                  
                  {/* Left / Right Hemisphere Markers */}
                  <div className="absolute left-3 text-[10px] font-mono text-slate-600 uppercase select-none">Left Field</div>
                  <div className="absolute right-3 text-[10px] font-mono text-slate-600 uppercase select-none">Right Field</div>

                  {/* Tracking Dot / Sphere */}
                  <div
                    className="absolute w-7 h-7 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/80 border-2 border-white flex items-center justify-center transition-all duration-75 z-10"
                    style={{
                      left: `calc(${gazePosition}% - 14px)`,
                      transform: isGazeActive ? 'scale(1.1)' : 'scale(1.0)'
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-slate-950"></div>
                  </div>
                </div>

                {/* Control Panel: Speed & Mode */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase">Tracking Speed:</label>
                    <div className="flex items-center gap-1">
                      {(['slow', 'medium', 'fast'] as const).map((spd) => (
                        <button
                          key={spd}
                          onClick={() => setGazeSpeed(spd)}
                          className={`flex-1 py-1 text-[11px] rounded font-medium capitalize transition-colors ${
                            gazeSpeed === spd
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                          }`}
                        >
                          {spd}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase">Movement Dynamics:</label>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setGazeMode('smooth')}
                        className={`flex-1 py-1 text-[11px] rounded font-medium transition-colors ${
                          gazeMode === 'smooth'
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                            : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        Smooth Pursuit
                      </button>
                      <button
                        onClick={() => setGazeMode('saccade')}
                        className={`flex-1 py-1 text-[11px] rounded font-medium transition-colors ${
                          gazeMode === 'saccade'
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                            : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        Saccadic Jumps
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Start / Pause / Reset Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsGazeActive(!isGazeActive)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-md ${
                    isGazeActive
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30'
                      : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-cyan-950'
                  }`}
                >
                  {isGazeActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isGazeActive ? 'Pause Tracking' : 'Start Bilateral Gaze Pacer'}</span>
                </button>
                <button
                  onClick={() => {
                    setIsGazeActive(false);
                    setGazePosition(50);
                    setGazeCyclesCompleted(0);
                  }}
                  className="px-3 py-2 rounded-lg text-xs bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Neurobiology & Technique Card */}
            <div className="w-full md:w-96 space-y-3 bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-xs">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                <span>The EMDR & Amygdala Inhibition Pathway</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Alternating horizontal eye tracking engages the exact neurological machinery used in Eye Movement Desensitization and Reprocessing (EMDR):
              </p>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 space-y-2">
                <div>
                  <strong className="text-emerald-400 block font-semibold">1. Superior Colliculus $\to$ Amygdala Brake:</strong>
                  Bilateral eye movements recruit the superior colliculus, which projects to the mediodorsal thalamus to fire inhibitory GABAergic interneurons into the basolateral amygdala, rapidly extinguishing threat and sensory overload.
                </div>
                <div>
                  <strong className="text-cyan-400 block font-semibold">2. Working Memory Taxation (Van den Hout):</strong>
                  Tracking an external lateral stimulus heavily taxes the central executive visuospatial sketchpad, instantly disrupting perseverative daydreaming and internal ruminative loops in CDS/SCT.
                </div>
                <div>
                  <strong className="text-amber-400 block font-semibold">3. Optic Flow Locomotion Signal:</strong>
                  Horizontal retinal slip mimics physical forward locomotion, signaling to the brainstem that the organism is moving through space—deactivating the autonomic freeze reflex.
                </div>
              </div>
              <div className="text-[10px] text-slate-500 italic">
                Cue: Keep your head completely stationary. Track the cyan orb exclusively with your eyes. Run 30–60 second sets between tasks.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Domain Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto p-1 bg-slate-900 border border-slate-800 rounded-xl no-scrollbar">
          {domains.map((dom) => (
            <button
              key={dom}
              onClick={() => setSelectedDomain(dom)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedDomain === dom
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {dom === 'all' ? 'All Domains' : dom}
            </button>
          ))}
        </div>

        {/* Target Axis Filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={selectedTarget}
            onChange={(e) => setSelectedTarget(e.target.value)}
            className="px-3 py-1.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500"
          >
            {targets.map((tgt) => (
              <option key={tgt} value={tgt}>
                Target: {tgt === 'all' ? 'All Conditions' : tgt}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search exercises, protocols..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-56 px-3 py-1.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Exercise Cards Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredExercises.map((exercise) => {
          const isExpanded = expandedExerciseId === exercise.id;

          return (
            <div
              key={exercise.id}
              className={`rounded-xl border transition-all ${
                isExpanded
                  ? 'bg-slate-900/90 border-cyan-500/50 shadow-xl shadow-cyan-950/20'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Card Header Row */}
              <div
                onClick={() => setExpandedExerciseId(isExpanded ? null : exercise.id)}
                className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                      {exercise.domain}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/40">
                      Target: {exercise.primaryTarget}
                    </span>
                    <span className="text-xs text-amber-300 font-mono">
                      {exercise.overallStars} ({exercise.overallRating})
                    </span>
                    <span className="text-[11px] text-emerald-400 font-semibold">
                      {exercise.verdict}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exercise.name}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {exercise.summary}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 self-end md:self-center shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(exercise);
                    }}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Copy Prescribed Protocol"
                  >
                    {copiedId === exercise.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedExerciseId(isExpanded ? null : exercise.id);
                    }}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Expanded Deep Clinical View */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-slate-800/80 space-y-5 text-xs">
                  {/* Prescribed Protocol Callout */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-1.5">
                    <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Prescribed Daily / Weekly Protocol</span>
                    </div>
                    <p className="text-slate-200 text-xs leading-relaxed font-mono">
                      {exercise.prescribedProtocol}
                    </p>
                  </div>

                  {/* Primary Neural & Cellular Mechanism */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Brain className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Neural & Autonomic Circuit Mechanism</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {exercise.primaryMechanism}
                    </p>
                  </div>

                  {/* Condition Specific Impacts Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                      <div className="text-[11px] font-bold text-cyan-300 uppercase font-mono">
                        CDS / Sluggish Cognitive Tempo
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        {exercise.cdsSctImpact}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                      <div className="text-[11px] font-bold text-indigo-300 uppercase font-mono">
                        ADHD & Executive Gating
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        {exercise.adhdImpact}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                      <div className="text-[11px] font-bold text-rose-300 uppercase font-mono">
                        Vascular Tone & Edema
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        {exercise.vascularImpact}
                      </p>
                    </div>
                  </div>

                  {/* Additional Safety: MCAS & Pelvic */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-[11px]">MCAS & Mast Cell Safety:</strong>
                        <span className="text-slate-400 text-[11px]">{exercise.mcasImpact}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start gap-2">
                      <Heart className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-[11px]">Pelvic Floor & Pudendal Impact:</strong>
                        <span className="text-slate-400 text-[11px]">{exercise.pelvicImpact}</span>
                      </div>
                    </div>
                  </div>

                  {/* Clinical Pearls & Warnings */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">
                      Key Clinical Pearls
                    </div>
                    <ul className="space-y-1 pl-4 list-disc text-slate-300 text-[11px]">
                      {exercise.clinicalPearls.map((pearl, pIdx) => (
                        <li key={pIdx}>{pearl}</li>
                      ))}
                    </ul>

                    {exercise.contraindications.length > 0 && (
                      <div className="pt-2">
                        <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                          Contraindications & Boundaries
                        </div>
                        <ul className="space-y-1 pl-4 list-disc text-slate-400 text-[11px]">
                          {exercise.contraindications.map((contra, cIdx) => (
                            <li key={cIdx}>{contra}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

import React from 'react';
import { ActiveTab } from '../types';
import {
  Brain,
  ShieldAlert,
  Flame,
  Activity,
  ArrowRight,
  Zap,
  Sparkles,
  MessageSquare,
  Users,
  Compass,
  CheckCircle2,
  Droplets,
  RefreshCw,
  HeartPulse
} from 'lucide-react';

interface OverviewSectionProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenReport: () => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  setActiveTab,
  onOpenReport
}) => {
  return (
    <div className="space-y-10">
      {/* Hero Visual Anchor */}
      <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-6 md:p-10 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -mb-20" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <span>Clinical Neuro-Immunology & Neuropsychiatry Brief</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The NeuroImmune Axis: SCT, ADHD, MCAS & Visceral Hypersensitivity
          </h1>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed font-normal">
            When neurodivergent cognitive architectures (<span className="text-cyan-300 font-medium">ADHD & Sluggish Cognitive Tempo</span>) collide with peripheral mast cell degranulation (<span className="text-rose-300 font-medium">MCAS</span>) and enteric nerve sensitization (<span className="text-amber-300 font-medium">Visceral Hypersensitivity</span>), systemic inflammatory cascades cross the blood-brain barrier. The result is a profound, episodic collapse of <strong className="text-white">processing speed, verbal word retrieval</strong>, and <strong className="text-white">situational agility</strong>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveTab('pathology')}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm shadow-cyan-950"
            >
              <span>Explore Circuit Cascade</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActiveTab('matrix')}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
            >
              <span>Compare SCT vs. ADHD</span>
            </button>

            <button
              onClick={() => setActiveTab('iq-fatigue')}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-purple-300 hover:text-white bg-purple-950/60 hover:bg-purple-900/60 rounded-lg border border-purple-700/60 transition-colors"
            >
              <Brain className="w-3.5 h-3.5" />
              <span>Analyze 130 vs 108 IQ Fatigue & Sinus Fog</span>
            </button>

            <button
              onClick={() => setActiveTab('simulator')}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
            >
              <span>Run Flare Simulator</span>
            </button>
          </div>
        </div>
      </div>

      {/* Case Profile Spotlight: 125-140 IQ vs 108 PSI & Sinonasal Axis */}
      <div className="p-5 md:p-6 rounded-xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-cyan-950/40 border border-purple-500/30 shadow-lg space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Clinical Case Analysis: Gifted Baseline (125-140) with 108 Processing Speed & Sinus Histamine Fog</span>
          </div>
          <button
            onClick={() => setActiveTab('iq-fatigue')}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 w-fit"
          >
            <span>View Full Fatigability Curve</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
          Your testing pattern—<strong className="text-white">scoring 125–140 across all subtasks but 108 on Processing Speed</strong>, combined with starting off <strong className="text-cyan-300">"very fast, but fading"</strong>—reveals that your raw cognitive velocity is superior (130+ burst speed), but your <strong className="text-rose-300">neural energetic sustainability</strong> collapses under continuous load. When paired with a <strong className="text-amber-300">sinus histamine flare</strong>, inflammatory mediators cross the cribriform plate into the anterior cranial fossa, causing the connective links of sequential reasoning to dissolve—phenomenologically experienced as <strong className="text-white">"thoughts slipping through fingers"</strong>: the inability to follow a chain of thoughts through to its conclusion.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => setActiveTab('iq-fatigue')}
            className="text-xs font-semibold px-3 py-1.5 rounded-md bg-purple-900/60 hover:bg-purple-800 text-purple-200 border border-purple-500/40 transition-colors flex items-center gap-1.5"
          >
            <Brain className="w-3.5 h-3.5" />
            <span>Interactive Fatigability Scrubber</span>
          </button>

          <button
            onClick={() => setActiveTab('pharmacy')}
            className="text-xs font-semibold px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Off-Label Pharma (Roflumilast & Ketotifen Cycling)</span>
          </button>

          <button
            onClick={() => setActiveTab('exercise')}
            className="text-xs font-semibold px-3 py-1.5 rounded-md bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-700/60 transition-colors flex items-center gap-1.5"
          >
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Exercise Pacing (4 km/h Slow Jogging vs. HIIT)</span>
          </button>

          <button
            onClick={() => setActiveTab('iq-fatigue')}
            className="text-xs font-semibold px-3 py-1.5 rounded-md bg-rose-950/60 hover:bg-rose-900/60 text-rose-300 border border-rose-700/60 transition-colors flex items-center gap-1.5"
          >
            <Droplets className="w-3.5 h-3.5 text-rose-400" />
            <span>Sinus Histamine & Pulmicort Rinse</span>
          </button>

          <button
            onClick={() => setActiveTab('protocol')}
            className="text-xs font-semibold px-3 py-1.5 rounded-md bg-emerald-950/90 hover:bg-emerald-900/90 text-emerald-300 border border-emerald-500/80 transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-950/40"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Master Action Plan: Simple Dietary, Pharma, Nutraceutical & Exercise Recommendations (Flush & Stabilise) ✨</span>
          </button>

          <button
            onClick={() => setActiveTab('iq-fatigue')}
            className="text-xs font-semibold px-3 py-1.5 rounded-md bg-emerald-950/70 hover:bg-emerald-900/70 text-emerald-300 border border-emerald-600/60 transition-colors flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
            <span>Weeks-Long Flares & The 3 Circuit Breakers (Antibiotics, Low Stress, Perilla)</span>
          </button>

          <button
            onClick={() => setActiveTab('condition-matrix')}
            className="text-xs font-semibold px-3 py-1.5 rounded-md bg-amber-950/80 hover:bg-amber-900/80 text-amber-300 border border-amber-500/60 transition-colors flex items-center gap-1.5 shadow-md shadow-amber-950/40"
          >
            <Activity className="w-3.5 h-3.5 text-amber-400" />
            <span>Condition × Element Efficacy Matrix (Interactive 5-Condition Breakdown) ⚡</span>
          </button>

          <button
            onClick={() => setActiveTab('vascular')}
            className="text-xs font-semibold px-3 py-1.5 rounded-md bg-rose-950/70 hover:bg-rose-900/70 text-rose-300 border border-rose-600/60 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
            <span>General Health Goal: Vascular Health Architecture (Starling Simulator & Protocols)</span>
          </button>

          <button
            onClick={() => setActiveTab('vascular')}
            className="text-xs font-semibold px-3 py-1.5 rounded-md bg-amber-950/70 hover:bg-amber-900/70 text-amber-300 border border-amber-600/60 transition-colors flex items-center gap-1.5"
          >
            <Activity className="w-3.5 h-3.5 text-amber-400" />
            <span>Vascular Supplements & Sock Marks (MPFF, Pycnogenol, Vit C/P5P, Gotu Kola)</span>
          </button>

          <button
            onClick={() => setActiveTab('exercise')}
            className="text-xs font-semibold px-3 py-1.5 rounded-md bg-cyan-950/70 hover:bg-cyan-900/70 text-cyan-300 border border-cyan-600/60 transition-colors flex items-center gap-1.5"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
            <span>Confirmed Sulfite Allergy & SUOX (Molybdenum, Benfotiamine B1, Avoid E220-E228)</span>
          </button>
        </div>
      </div>

      {/* Master Synthesis: Unified Protocol Spotlight Banner */}
      <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-emerald-950/50 via-slate-900 to-teal-950/50 border border-emerald-500/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg shadow-emerald-950/20">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-500/60 flex items-center justify-center text-emerald-400 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 font-mono">
                Master Action Plan
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-200 border border-emerald-600/50 font-mono">
                Flush & Stabilise
              </span>
            </div>
            <h3 className="text-sm font-bold text-white mt-0.5">
              The Unified Protocol: Dietary, Pharma, Nutraceutical & Exercise Blueprint
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-3xl leading-relaxed">
              Bringing everything together into simple recommendations: flush circulating mediators, ingested sulfites (SUOX), and amlodipine-filtered edema, while permanently stabilizing mast cell membranes, prefrontal brain fog (SCT/ADHD), and vascular endothelial health—with 100% slow-COMT safety (strictly zero Quercetin or EGCG).
            </p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('protocol')}
          className="self-stretch md:self-auto px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap shadow-sm"
        >
          <span>Open Unified Protocol</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Vascular Health Goal Spotlight Banner */}
      <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-rose-950/40 via-slate-900 to-indigo-950/40 border border-rose-800/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-rose-950 border border-rose-700/50 flex items-center justify-center text-rose-400 shrink-0">
            <HeartPulse className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-300 font-mono">
                New Section: General Health Goal
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-rose-900/60 text-rose-200 border border-rose-700/50 font-mono">
                Vascular Health
              </span>
            </div>
            <h3 className="text-sm font-bold text-white mt-0.5">
              Endothelial Glycocalyx Integrity, Venous Return & The Starling Fluid Mechanics Engine
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-3xl leading-relaxed">
              Explore how Amlodipine 5mg pre-capillary vasodilation, lifelong sock indentations, mast cell hyperpermeability, and sulfite allergy interact with microvascular hydrostatic pressure ($P_c$) and cerebral perfusion. Features an interactive Starling filtration simulator, a 24-hour protocol, and physician collaboration brief.
            </p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('vascular')}
          className="self-stretch md:self-auto px-4 py-2 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 border border-rose-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
        >
          <span>Open Vascular Section</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* The 4 Intersecting Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Pillar 1: SCT */}
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
          <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
            <Brain className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase text-cyan-400">Cognitive Profile</div>
            <h3 className="text-base font-bold text-white">Sluggish Cognitive Tempo (CDS)</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Hypoarousal, mental latency, daydreaming, and slow information retrieval. Distinct from classical ADHD; failure to downregulate the Default Mode Network during task demand.
          </p>
          <div className="pt-2 border-t border-slate-800 text-[11px] text-cyan-300 font-mono">
            Core Hallmark: Processing speed delay
          </div>
        </div>

        {/* Pillar 2: ADHD */}
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-950 border border-indigo-800/40 flex items-center justify-center text-indigo-400">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase text-indigo-400">Executive Substrate</div>
            <h3 className="text-base font-bold text-white">ADHD (Prefrontal Circuitry)</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Dopaminergic and noradrenergic dysregulation in the DLPFC and basal ganglia. Impairs working memory, strategic inhibitory control, and temporal planning.
          </p>
          <div className="pt-2 border-t border-slate-800 text-[11px] text-indigo-300 font-mono">
            Core Hallmark: Working memory slips
          </div>
        </div>

        {/* Pillar 3: MCAS */}
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
          <div className="w-9 h-9 rounded-lg bg-rose-950 border border-rose-800/40 flex items-center justify-center text-rose-400">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase text-rose-400">Immune Driver</div>
            <h3 className="text-base font-bold text-white">Mast Cell Activation (MCAS)</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Episodic degranulation releasing &gt;200 mediators (histamine, tryptase, TNF-α). Meningeal mast cells permeabilize the BBB, activating microglia and inducing brain fog.
          </p>
          <div className="pt-2 border-t border-slate-800 text-[11px] text-rose-300 font-mono">
            Core Hallmark: BBB breach & microglial flare
          </div>
        </div>

        {/* Pillar 4: Visceral Hypersensitivity */}
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
          <div className="w-9 h-9 rounded-lg bg-amber-950 border border-amber-800/40 flex items-center justify-center text-amber-400">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase text-amber-400">Sensory Axis</div>
            <h3 className="text-base font-bold text-white">Visceral Hypersensitivity</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Sensitization of enteric C-fibers and vagal afferents. Floods the anterior insula with interoceptive noise, causing sensory gating breakdown and conversational freeze.
          </p>
          <div className="pt-2 border-t border-slate-800 text-[11px] text-amber-300 font-mono">
            Core Hallmark: Insular bandwidth theft
          </div>
        </div>
      </div>

      {/* The Core Question: What Happens to Brain Fog, Verbal Fluency, and Situational Fluency? */}
      <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-8">
        <div className="border-b border-slate-800 pb-4">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
            Pathophysiological Deep-Dive
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            How Inflammation Degrades Cognitive Processing & Fluency
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Brain Fog */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2.5 text-rose-400">
              <Flame className="w-4 h-4" />
              <h3 className="text-sm font-bold uppercase tracking-wider">1. The Anatomy of Brain Fog</h3>
            </div>
            <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <p>
                Brain fog in MCAS is not subjective lethargy—it is <strong className="text-white">active microglial neuroinflammation</strong> and <strong className="text-white">prefrontal mitochondrial hypometabolism</strong>.
              </p>
              <p>
                When peripheral mast cells degranulate, vascular endothelial growth factor (VEGF) and matrix metalloproteinases degrade claudin-5 at the blood-brain barrier. Meningeal mast cells activate microglia, which release TNF-α and IL-1β.
              </p>
              <p>
                This induces the <strong className="text-cyan-300">Kynurenine shunt</strong>: tryptophan is diverted into neurotoxic <strong className="text-white">Quinolinic Acid</strong>, causing NMDA excitotoxicity, reducing synaptic signal-to-noise ratio in the DLPFC, and plunging the brain into heavy, unrefreshing fog.
              </p>
            </div>
          </div>

          {/* Card 2: Verbal Fluency */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2.5 text-cyan-400">
              <MessageSquare className="w-4 h-4" />
              <h3 className="text-sm font-bold uppercase tracking-wider">2. Verbal Fluency Collapse</h3>
            </div>
            <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <p>
                Verbal fluency requires instantaneous collaboration between the left inferior frontal gyrus (Broca's BA 44/45) and middle temporal semantic hubs via the arcuate fasciculus.
              </p>
              <p>
                In this intersection, patients suffer a <strong className="text-white">triple hit</strong>:
              </p>
              <ul className="space-y-1 list-disc pl-4 text-slate-400">
                <li><strong className="text-slate-200">ADHD Hit:</strong> Working memory slips lose the conceptual thread mid-sentence.</li>
                <li><strong className="text-slate-200">SCT Hit:</strong> Slow processing speed delays lexical search.</li>
                <li><strong className="text-slate-200">H3 Histamine Paradox:</strong> Excess central histamine binds presynaptic H3 autoreceptors, shutting down <strong className="text-cyan-300">acetylcholine release</strong>—the exact neurotransmitter needed for memory and word recall.</li>
              </ul>
              <p>
                The result is severe <strong className="text-white">"tip-of-the-tongue" paralysis</strong>: the concept is clear, but the word cannot be retrieved in real time.
              </p>
            </div>
          </div>

          {/* Card 3: Situational Fluency */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2.5 text-amber-400">
              <Users className="w-4 h-4" />
              <h3 className="text-sm font-bold uppercase tracking-wider">3. Situational Fluency Freeze</h3>
            </div>
            <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <p>
                Situational fluency is real-time environmental navigation: reading micro-expressions, adjusting conversational rhythm, handling sensory banter, and quick-witted context switching.
              </p>
              <p>
                Visceral hypersensitivity acts as an <strong className="text-white">involuntary background CPU drain</strong>. Enteric mast cell mediators sensitize unmyelinated C-fibers, sending high-frequency signals via the vagus and spinothalamic tract to the anterior insular cortex.
              </p>
              <p>
                The insula—the central hub of the Salience Network—is overwhelmed by gut distress and autonomic noise. With zero spare working memory, the individual suffers <strong className="text-white">sensory gating failure</strong>, freezes, and withdraws into protective non-verbal silence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Clinical Pearls & Next Step Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Why Stimulants Frequently Backfire</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Standard ADHD stimulants (Amphetamines/Methylphenidate) trigger massive sympathetic norepinephrine release. In MCAS, noradrenaline binds adrenergic receptors on sensitized mast cells, triggering histamine degranulation. Rather than improving focus, stimulants can paradoxically trigger flushing, tachycardia, brain fog, and visceral pain.
          </p>
          <div className="text-[11px] text-cyan-300 font-mono pt-1">
            Solution: Stabilize mast cells first (Cromolyn/Ketotifen), consider Alpha-2A agonist (Guanfacine).
          </div>
        </div>

        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 font-semibold">
            <Compass className="w-4 h-4" />
            <span>Integrated Clinical Action Plan</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Treatment must be ordered sequentially: 1) Block peripheral and central mast cell degranulation (Oral Cromolyn, Ketotifen, H1/H2 blockers), 2) Gate visceral nociception to free insular bandwidth (low-dose TCA or neuromodulators), 3) Modulate microglia and prefrontal networks (LDN and Guanfacine).
          </p>
          <div className="pt-1">
            <button
              onClick={onOpenReport}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <span>Generate personalized consultation brief</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

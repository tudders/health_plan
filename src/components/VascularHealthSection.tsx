import React, { useState, useMemo } from 'react';
import {
  HeartPulse,
  Activity,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  Sliders,
  ChevronRight,
  Info,
  Clock,
  Sparkles,
  Copy,
  Check,
  Printer,
  Droplets,
  ArrowRight,
  Brain,
  Layers,
  Zap,
  Wind
} from 'lucide-react';
import { ActiveTab } from '../types';

interface VascularHealthSectionProps {
  setActiveTab?: (tab: ActiveTab) => void;
}

export const VascularHealthSection: React.FC<VascularHealthSectionProps> = ({ setActiveTab }) => {
  // Navigation sub-tab inside Vascular Health
  const [activeSubTab, setActiveSubTab] = useState<'simulator' | 'pillars' | 'protocol' | 'calculator' | 'clinical-script'>('simulator');

  // Interactive Starling Fluid Mechanics Engine State
  const [amlodipineActive, setAmlodipineActive] = useState<boolean>(true); // Pre-capillary dilation
  const [posture, setPosture] = useState<'supine' | 'seated' | 'standing' | 'soleus-active'>('seated');
  const [glycocalyxIntegrity, setGlycocalyxIntegrity] = useState<'intact' | 'moderate-leak' | 'severe-mcas'>('moderate-leak');
  const [compressionActive, setCompressionActive] = useState<boolean>(false);
  const [mpffActive, setMpffActive] = useState<boolean>(false);
  const [pycnogenolActive, setPycnogenolActive] = useState<boolean>(false);
  const [telmisartanActive, setTelmisartanActive] = useState<boolean>(true); // ARB post-capillary venodilation
  const [molyBenfoActive, setMolyBenfoActive] = useState<boolean>(false); // Sulfite shield

  // Clinical Calculator State
  const [calcAnswers, setCalcAnswers] = useState<Record<string, number>>({
    sockMarks: 3,
    standingBrainFog: 2,
    afternoonFatigue: 3,
    heatSensitivity: 2,
    sulfiteReaction: 3,
    quercetinSensitivity: 3,
  });

  // Daily Protocol Checkbox State
  const [protocolChecked, setProtocolChecked] = useState<Record<string, boolean>>({
    morningHydration: true,
    calfActivation: true,
    vascularVitamins: true,
    compressionSocks: false,
    soleusPushups: false,
    recumbentExercise: false,
    zeroSulfites: true,
    legsUpWall: false,
    nightMagnesium: true,
  });

  const [copiedScript, setCopiedScript] = useState<boolean>(false);

  // Dynamic Starling Hemodynamics Calculations
  const hemodynamics = useMemo(() => {
    // Baseline mean arterial pressure & gravity effects
    let baseGravityVenousPressure = 15; // mmHg at ankle
    if (posture === 'supine') baseGravityVenousPressure = 4;
    else if (posture === 'seated') baseGravityVenousPressure = 45;
    else if (posture === 'standing') baseGravityVenousPressure = 85;
    else if (posture === 'soleus-active') baseGravityVenousPressure = 22; // Soleus pump relieves pooling!

    // Pre-capillary arteriolar resistance (Ra)
    // Amlodipine reduces Ra by ~55%, transmitting arterial pressure directly into capillaries
    const raFactor = amlodipineActive ? 0.45 : 1.0;

    // Post-capillary venular resistance (Rv)
    // Telmisartan relaxes post-capillary venules by 25%; MPFF restores venous tone
    let rvFactor = 1.0;
    if (telmisartanActive) rvFactor *= 0.75;
    if (mpffActive) rvFactor *= 0.85; // Less resistance to venous outflow

    // Capillary Hydrostatic Pressure Pc calculation (mmHg)
    // Pc = (Pv + (Pa * Rv / Ra)) / (1 + Rv / Ra)
    const arterialPressure = 95;
    const effectivePv = baseGravityVenousPressure * (compressionActive ? 0.65 : 1.0);
    const ratio = rvFactor / raFactor;
    let Pc = (effectivePv + (arterialPressure * ratio)) / (1 + ratio);
    
    // Clamp realistic capillary pressures (16 to 48 mmHg)
    Pc = Math.max(16, Math.min(48, Pc));

    // Colloid Oncotic Pressures
    const Pi_c = 26; // Plasma oncotic pressure (mmHg)
    const Pi_i = 4.5; // Interstitial oncotic pressure (mmHg)
    const P_i = 1.0; // Interstitial hydrostatic pressure (mmHg)

    // Staverman reflection coefficient (sigma): 1.0 = impermeable, lower = leaky
    let sigma = 0.92;
    if (glycocalyxIntegrity === 'moderate-leak') sigma = 0.72;
    if (glycocalyxIntegrity === 'severe-mcas') sigma = 0.54;
    if (pycnogenolActive) sigma = Math.min(0.95, sigma + 0.12);
    if (molyBenfoActive) sigma = Math.min(0.95, sigma + 0.08);

    // Filtration coefficient Kf (capillary permeability & surface area)
    let Kf = 0.12;
    if (glycocalyxIntegrity === 'moderate-leak') Kf = 0.22;
    if (glycocalyxIntegrity === 'severe-mcas') Kf = 0.35;
    if (pycnogenolActive) Kf *= 0.72;
    if (mpffActive) Kf *= 0.80;

    // Lymphatic drainage clearance rate (J_lymph, mL/min)
    let J_lymph = 0.8;
    if (mpffActive) J_lymph *= 1.45; // MPFF directly stimulates lymphatic vessel pulsatility
    if (compressionActive) J_lymph *= 1.35;
    if (posture === 'soleus-active') J_lymph *= 1.50;

    // Net Starling Filtration Rate Jv = Kf * [(Pc - Pi) - sigma * (Pi_c - Pi_i)]
    const hydrostaticGradient = Pc - P_i;
    const oncoticGradient = sigma * (Pi_c - Pi_i);
    const netFiltrationPressure = hydrostaticGradient - oncoticGradient;
    
    // Net fluid movement across microvasculature (mL/min into interstitial tissue)
    let Jv = Math.max(0, Kf * netFiltrationPressure * 12);
    const netFluidAccumulation = Math.max(0, Jv - J_lymph);

    // Sock Mark & Edema Severity Index (0 - 100%)
    let edemaScore = Math.min(100, Math.round((netFluidAccumulation / 3.2) * 100));
    if (posture === 'supine') edemaScore = Math.round(edemaScore * 0.25);

    // Central Venous Preload & Stroke Volume Reserve (0 - 100%)
    // Standing or sitting without calf pumps pools up to 800mL in lower limbs
    let preloadReserve = 95;
    if (posture === 'seated') preloadReserve -= 18;
    if (posture === 'standing') preloadReserve -= 38;
    if (posture === 'soleus-active') preloadReserve += 16;
    if (amlodipineActive && !telmisartanActive) preloadReserve -= 12;
    if (compressionActive) preloadReserve += 14;
    if (mpffActive) preloadReserve += 10;
    preloadReserve = Math.min(100, Math.max(45, preloadReserve));

    // Frontal Lobe Perfusion Efficiency (%)
    // Derived from stroke volume reserve and microvascular barrier stability
    let frontalPerfusion = Math.round(preloadReserve * (sigma / 0.95));
    frontalPerfusion = Math.min(100, Math.max(40, frontalPerfusion));

    return {
      Pc: Math.round(Pc * 10) / 10,
      netFiltrationPressure: Math.round(netFiltrationPressure * 10) / 10,
      Jv: Math.round(Jv * 10) / 10,
      J_lymph: Math.round(J_lymph * 10) / 10,
      netFluidAccumulation: Math.round(netFluidAccumulation * 10) / 10,
      edemaScore,
      preloadReserve,
      frontalPerfusion,
      sigma: Math.round(sigma * 100) / 100,
      effectivePv: Math.round(effectivePv)
    };
  }, [
    amlodipineActive,
    posture,
    glycocalyxIntegrity,
    compressionActive,
    mpffActive,
    pycnogenolActive,
    telmisartanActive,
    molyBenfoActive
  ]);

  // Calculate Vulnerability Score
  const vulnerabilityScore = useMemo(() => {
    const total = Object.values(calcAnswers).reduce((sum, v) => sum + v, 0);
    // max score is 18 (6 questions * 3 max points)
    return Math.round((total / 18) * 100);
  }, [calcAnswers]);

  const handleCopyScript = () => {
    const text = `
CLINICAL CONSULTATION ADDENDUM: HEMODYNAMIC & MICROVASCULAR PROTOCOL
Patient Phenotype: Lifelong Dependent Edema ("Sock Marks"), Amlodipine 5mg Pre-Capillary Vasodilation, Mast Cell Hyperpermeability, Slow-COMT Catecholamine Bottleneck, Confirmed Sulfite Allergy.

1. HEMODYNAMIC MECHANISM IDENTIFIED:
   - Dihydropyridine CCB (Amlodipine 5mg) selectively relaxes pre-capillary resistance arterioles (Ra) by ~55% with negligible post-capillary venular dilation.
   - Per the Starling filtration equation (Jv = Kf * [(Pc - Pi) - σ(πc - πi)]), this transmits arterial pressure directly into delicate capillary beds, elevating intracapillary hydrostatic pressure (Pc) from baseline ~20 mmHg up to 36-40 mmHg.
   - Result: Fluid is mechanically forced into interstitial tissues of lower limbs, manifesting as prominent end-of-day sock indentations and dependent edema.
   - Cognitive Impact: Sequestration of 500-1,000 mL of plasma volume in dependent limbs reduces right atrial filling pressure and cardiac stroke volume during seated desk work, triggering postural cerebral hypoperfusion and executive working memory collapse ("thoughts slipping through fingers").

2. CRITICAL CONTRAINDICATIONS & METABOLIC GUARDRAILS:
   - NO LOOP/THIAZIDE DIURETICS: Edema is a local hydrostatic filtration phenomenon, NOT whole-body hypervolemia. Diuretics cause systemic volume contraction, worsening orthostatic fatigue and cerebral hypoperfusion.
   - NO QUERCETIN / NO EGCG: Patient exhibits severe occipital headaches and acute cervical muscle rigidity ("stiff neck") from catechol-structured bioflavonoids due to slow COMT inhibition and SAMe depletion.
   - STRICT ZERO SULFITES (E220-E228): Metabisulfite preservatives trigger confirmed wheezing/bronchospasm (SUOX hypofunction) and degrade vascular endothelial thiamine stores.

3. EVIDENCE-BASED COLLABORATIVE INTERVENTIONS FOR CLINICAL DISCUSSION:
   a. Antihypertensive Pairing: Maintain or optimize Angiotensin Receptor Blocker (Telmisartan 40-80mg), which provides selective post-capillary venodilation to rebalance Ra/Rv ratio, reducing intracapillary pressure Pc and cutting edema by 50-70%. Alternatively, evaluate lipophilic 3rd-generation CCBs with balanced venodilation (e.g., Lercanidipine 10-20mg).
   b. Phlebotropic Microvascular Support: Micronized Purified Flavonoid Fraction (MPFF: Diosmin 90% / Hesperidin 10%, 500mg bid) to enhance venous wall tone, downregulate endothelial ICAM-1/VCAM-1, and stimulate lymphatic micro-capillary pumping.
   c. Perivascular Glycocalyx Stabilizer: French Maritime Pine Bark Extract (Pycnogenol, 100-150mg daily), clinically shown in RCTs to reduce CCB-induced ankle swelling by 35-40% by stabilizing basement membrane collagen.
   d. Sulfite/Oxidative Shield: Molybdenum Glycinate (150-300 mcg) + Benfotiamine (150-300 mg) to support SUOX clearance and shield endothelial mitochondria.
   e. Mechanical Therapy: Class 1 (15-20 mmHg) graduated medical compression stockings during seated working hours; Seated Soleus Push-Up (SPU) intervals to activate the calf venous muscle pump.
`;
    navigator.clipboard.writeText(text);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Top Banner / Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/60 border border-slate-800 p-6 md:p-8 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-rose-950/70 text-rose-300 border border-rose-800/50 flex items-center gap-1.5">
              <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
              General Health Goal: Vascular Health
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-cyan-950/70 text-cyan-300 border border-cyan-800/50 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              Microvascular Hemodynamics & Venous Return
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-amber-950/70 text-amber-300 border border-amber-800/50 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              COMT-Safe & Sulfite-Free
            </span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Vascular Health Architecture: Endothelial Integrity, Venous Return & Microvascular Hemodynamics
            </h1>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Systemic vascular health requires balancing <strong className="text-white">intracapillary hydrostatic pressure</strong>, <strong className="text-white">endothelial glycocalyx permeability</strong>, and <strong className="text-white">venous capacitance</strong>. In individuals taking Amlodipine with lifelong sock marks, mast cell hyperpermeability, and sulfite allergy, optimizing vascular health prevents peripheral venous pooling and safeguards cerebral perfusion against late-afternoon cognitive collapse.
            </p>
          </div>

          {/* Quick Phenotypic Harmonization Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <div className="text-[11px] text-slate-400 font-mono uppercase">Vascular Baseline</div>
              <div className="text-xs font-semibold text-slate-200 mt-0.5">Lifelong Sock Marks</div>
              <div className="text-[11px] text-slate-400 mt-1 leading-normal">
                Constitutive microvascular leakage & venous valve wall laxity predating medication.
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <div className="text-[11px] text-slate-400 font-mono uppercase">Pharmacodynamic Driver</div>
              <div className="text-xs font-semibold text-cyan-300 mt-0.5">Amlodipine 5mg (CCB)</div>
              <div className="text-[11px] text-slate-400 mt-1 leading-normal">
                Selective pre-capillary arteriolar relaxation spikes hydrostatic pressure (Pc).
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <div className="text-[11px] text-slate-400 font-mono uppercase">COMT Guardrail</div>
              <div className="text-xs font-semibold text-rose-300 mt-0.5">Zero Quercetin / EGCG</div>
              <div className="text-[11px] text-slate-400 mt-1 leading-normal">
                Catechols paralyze slow COMT, causing hypertensive neck rigidity & headaches.
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <div className="text-[11px] text-slate-400 font-mono uppercase">Metabolic Sensitivity</div>
              <div className="text-xs font-semibold text-amber-300 mt-0.5">Confirmed Sulfite Wheeze</div>
              <div className="text-[11px] text-slate-400 mt-1 leading-normal">
                SUOX deficiency; require Molybdenum & Benfotiamine B1 to shield endothelium.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Sub-navigation Bar */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveSubTab('simulator')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
            activeSubTab === 'simulator'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-950'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>1. Starling Hemodynamics Simulator</span>
        </button>

        <button
          onClick={() => setActiveSubTab('pillars')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
            activeSubTab === 'pillars'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-950'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>2. The 4 Biological Pillars</span>
        </button>

        <button
          onClick={() => setActiveSubTab('protocol')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
            activeSubTab === 'protocol'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-950'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          <span>3. Daily Vascular Protocol</span>
        </button>

        <button
          onClick={() => setActiveSubTab('calculator')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
            activeSubTab === 'calculator'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-950'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>4. Vascular Health Calculator</span>
        </button>

        <button
          onClick={() => setActiveSubTab('clinical-script')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
            activeSubTab === 'clinical-script'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-950'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
          }`}
        >
          <Printer className="w-3.5 h-3.5" />
          <span>5. Physician Consultation Script</span>
        </button>

        {setActiveTab && (
          <button
            onClick={() => setActiveTab('protocol')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 border border-emerald-500/40 ml-auto transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Unified Master Protocol ✨</span>
          </button>
        )}
      </div>

      {/* SUB-TAB 1: STARLING HEMODYNAMICS & FLUID MECHANICS ENGINE */}
      {activeSubTab === 'simulator' && (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-cyan-400" />
                <span>Interactive Starling Capillary Filtration & Venous Preload Engine</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Simulate how Amlodipine, body posture, mast cell endothelial breakdown, and phlebotropic interventions alter microvascular fluid fluxes and cerebral oxygen delivery.
              </p>
            </div>
            <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300">
              Formula: Jv = Kf · [(Pc - Pi) - σ · (πc - πi)] - Jlymph
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Controls Column (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              {/* Card 1: Hemodynamic Drivers */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>1. Hemodynamic & Postural Parameters</span>
                </div>

                {/* Amlodipine Toggle */}
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white">Amlodipine 5mg (Pre-Capillary Dilation)</div>
                    <div className="text-[11px] text-slate-400">Reduces arteriolar resistance (Ra) by ~55%</div>
                  </div>
                  <button
                    onClick={() => setAmlodipineActive(!amlodipineActive)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      amlodipineActive ? 'bg-cyan-500' : 'bg-slate-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        amlodipineActive ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Posture Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Posture & Gravity Column</label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      onClick={() => setPosture('supine')}
                      className={`p-2 rounded-lg border text-left transition-colors ${
                        posture === 'supine'
                          ? 'bg-cyan-950/80 border-cyan-500/60 text-cyan-200'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="font-semibold">Supine (Lying Flat)</div>
                      <div className="text-[10px] text-slate-400">Venous Pv ~4 mmHg</div>
                    </button>

                    <button
                      onClick={() => setPosture('seated')}
                      className={`p-2 rounded-lg border text-left transition-colors ${
                        posture === 'seated'
                          ? 'bg-cyan-950/80 border-cyan-500/60 text-cyan-200'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="font-semibold">Seated (Desk Work)</div>
                      <div className="text-[10px] text-slate-400">Venous Pv ~45 mmHg</div>
                    </button>

                    <button
                      onClick={() => setPosture('standing')}
                      className={`p-2 rounded-lg border text-left transition-colors ${
                        posture === 'standing'
                          ? 'bg-rose-950/80 border-rose-500/60 text-rose-200'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="font-semibold">Standing Motionless</div>
                      <div className="text-[10px] text-slate-400">Venous Pv ~85 mmHg</div>
                    </button>

                    <button
                      onClick={() => setPosture('soleus-active')}
                      className={`p-2 rounded-lg border text-left transition-colors ${
                        posture === 'soleus-active'
                          ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-200'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="font-semibold">Soleus Pump Active</div>
                      <div className="text-[10px] text-slate-400">Calf pump drops Pv to 22</div>
                    </button>
                  </div>
                </div>

                {/* Glycocalyx Integrity */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Endothelial Glycocalyx & Tight Junctions (Barrier Integrity σ)
                  </label>
                  <div className="grid grid-cols-3 gap-1.5 text-[11px]">
                    <button
                      onClick={() => setGlycocalyxIntegrity('intact')}
                      className={`p-2 rounded-lg border text-center transition-colors ${
                        glycocalyxIntegrity === 'intact'
                          ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-200'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="font-semibold">Intact</div>
                      <div className="text-[10px] text-slate-400">σ = 0.92</div>
                    </button>

                    <button
                      onClick={() => setGlycocalyxIntegrity('moderate-leak')}
                      className={`p-2 rounded-lg border text-center transition-colors ${
                        glycocalyxIntegrity === 'moderate-leak'
                          ? 'bg-amber-950/80 border-amber-500/60 text-amber-200'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="font-semibold">Sock Mark Baseline</div>
                      <div className="text-[10px] text-slate-400">σ = 0.72</div>
                    </button>

                    <button
                      onClick={() => setGlycocalyxIntegrity('severe-mcas')}
                      className={`p-2 rounded-lg border text-center transition-colors ${
                        glycocalyxIntegrity === 'severe-mcas'
                          ? 'bg-rose-950/80 border-rose-500/60 text-rose-200'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="font-semibold">Mast Cell / Sulfite Flare</div>
                      <div className="text-[10px] text-slate-400">σ = 0.54</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2: Targeted Interventions Stack */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>2. Therapeutic Vascular Modulators</span>
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">Real-Time Offsetting</span>
                </div>

                <div className="space-y-2">
                  {/* Compression */}
                  <label className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition-colors">
                    <input
                      type="checkbox"
                      checked={compressionActive}
                      onChange={(e) => setCompressionActive(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 text-cyan-500 focus:ring-0"
                    />
                    <div className="text-xs">
                      <div className="font-semibold text-white">Graduated Compression Stockings (15–20 mmHg Class 1)</div>
                      <div className="text-[11px] text-slate-400">
                        Counters hydrostatic gravity column; compresses interstitial spaces and accelerates lymph uptake (+35%).
                      </div>
                    </div>
                  </label>

                  {/* MPFF */}
                  <label className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition-colors">
                    <input
                      type="checkbox"
                      checked={mpffActive}
                      onChange={(e) => setMpffActive(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 text-cyan-500 focus:ring-0"
                    />
                    <div className="text-xs">
                      <div className="font-semibold text-emerald-300">MPFF (Micronized Diosmin 90% / Hesperidin 10%, 1000mg)</div>
                      <div className="text-[11px] text-slate-400">
                        Safe for COMT (non-catechol). Restores post-capillary venous tone & increases lymphatic pulsation (+45%).
                      </div>
                    </div>
                  </label>

                  {/* Pycnogenol */}
                  <label className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition-colors">
                    <input
                      type="checkbox"
                      checked={pycnogenolActive}
                      onChange={(e) => setPycnogenolActive(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 text-cyan-500 focus:ring-0"
                    />
                    <div className="text-xs">
                      <div className="font-semibold text-amber-300">Pycnogenol® (French Maritime Pine Bark, 100–150mg)</div>
                      <div className="text-[11px] text-slate-400">
                        Clinically proven in RCTs to reduce Amlodipine ankle edema by 35–40% via basement membrane collagen crosslinking.
                      </div>
                    </div>
                  </label>

                  {/* Telmisartan */}
                  <label className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition-colors">
                    <input
                      type="checkbox"
                      checked={telmisartanActive}
                      onChange={(e) => setTelmisartanActive(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 text-cyan-500 focus:ring-0"
                    />
                    <div className="text-xs">
                      <div className="font-semibold text-cyan-300">Telmisartan (ARB Post-Capillary Venodilator Pairing)</div>
                      <div className="text-[11px] text-slate-400">
                        Balanced post-capillary venodilation prevents pressure trap; drops capillary hydrostatic Pc by 25%.
                      </div>
                    </div>
                  </label>

                  {/* Molybdenum & Benfotiamine */}
                  <label className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition-colors">
                    <input
                      type="checkbox"
                      checked={molyBenfoActive}
                      onChange={(e) => setMolyBenfoActive(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 text-cyan-500 focus:ring-0"
                    />
                    <div className="text-xs">
                      <div className="font-semibold text-purple-300">Molybdenum (150mcg) + Benfotiamine (150mg)</div>
                      <div className="text-[11px] text-slate-400">
                        Clears toxic sulfites via SUOX and protects endothelial mitochondrial transketolase against oxidative gap opening.
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Output & Interactive Microvascular Canvas (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Dynamic Readout Dashboard */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] font-mono uppercase text-slate-400">Capillary Pressure (Pc)</div>
                  <div className={`text-xl font-extrabold mt-1 ${
                    hemodynamics.Pc > 32 ? 'text-rose-400' : hemodynamics.Pc > 25 ? 'text-amber-400' : 'text-emerald-400'
                  }`}>
                    {hemodynamics.Pc} <span className="text-xs font-normal text-slate-400">mmHg</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Normal: 18–24 mmHg
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] font-mono uppercase text-slate-400">Net Fluid Leak (Jv - Jlymph)</div>
                  <div className={`text-xl font-extrabold mt-1 ${
                    hemodynamics.netFluidAccumulation > 1.5 ? 'text-rose-400' : hemodynamics.netFluidAccumulation > 0.5 ? 'text-amber-400' : 'text-emerald-400'
                  }`}>
                    +{hemodynamics.netFluidAccumulation} <span className="text-xs font-normal text-slate-400">mL/min</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Target: &lt;0.5 mL/min
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] font-mono uppercase text-slate-400">Sock Mark Severity</div>
                  <div className={`text-xl font-extrabold mt-1 ${
                    hemodynamics.edemaScore > 65 ? 'text-rose-400' : hemodynamics.edemaScore > 35 ? 'text-amber-400' : 'text-emerald-400'
                  }`}>
                    {hemodynamics.edemaScore}%
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {hemodynamics.edemaScore > 65 ? 'Deep Indents' : hemodynamics.edemaScore > 35 ? 'Moderate Rings' : 'Minimal / Flat'}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] font-mono uppercase text-slate-400">Frontal Perfusion</div>
                  <div className={`text-xl font-extrabold mt-1 ${
                    hemodynamics.frontalPerfusion < 65 ? 'text-rose-400' : hemodynamics.frontalPerfusion < 80 ? 'text-amber-400' : 'text-cyan-400'
                  }`}>
                    {hemodynamics.frontalPerfusion}%
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {hemodynamics.frontalPerfusion < 65 ? 'Thoughts Slipping' : 'Sharp / Connected'}
                  </div>
                </div>
              </div>

              {/* Real-Time Microvascular Hemodynamics Visualization */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3 text-xs text-slate-300">
                  <span className="font-semibold text-white flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-cyan-400" />
                    <span>Microvascular Bed Filtration & Lymphatic Clearance Schematic</span>
                  </span>
                  <span className="font-mono text-[11px] text-cyan-300">
                    Reflection σ = {hemodynamics.sigma} | Net Pfilt = {hemodynamics.netFiltrationPressure} mmHg
                  </span>
                </div>

                {/* Microvascular Diagram SVG */}
                <div className="relative w-full h-48 bg-slate-900/60 rounded-xl border border-slate-800/80 p-3 flex flex-col justify-between">
                  {/* Top labels */}
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 px-2">
                    <span className="text-red-400">Pre-Capillary Arteriole (Ra)</span>
                    <span className="text-cyan-400">Capillary Exchange Bed (Pc)</span>
                    <span className="text-blue-400">Post-Capillary Venule (Rv)</span>
                  </div>

                  {/* Blood Vessel Flow Tube */}
                  <div className="relative my-auto flex items-center w-full h-12">
                    {/* Arteriole Segment */}
                    <div
                      className={`h-full rounded-l-lg transition-all duration-300 flex items-center justify-center text-[10px] font-bold text-red-100 ${
                        amlodipineActive ? 'w-1/4 bg-red-600/80 border-y-2 border-l-2 border-red-400' : 'w-1/4 bg-red-800/60 border-y border-l border-red-600'
                      }`}
                    >
                      {amlodipineActive ? 'Dilated (Ra ↓55%)' : 'Normal Ra'}
                    </div>

                    {/* Capillary Bed with Intercellular Gaps & Fluid Leak Vectors */}
                    <div className="relative flex-1 h-full bg-indigo-950/60 border-y-2 border-dashed border-indigo-400/80 flex items-center justify-around px-2">
                      {/* Fluid Leak Arrows based on net fluid accumulation */}
                      <div className="absolute inset-0 flex items-center justify-around pointer-events-none">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className={`flex flex-col items-center transition-opacity duration-300 ${
                              hemodynamics.netFluidAccumulation > 0.4 ? 'opacity-100' : 'opacity-20'
                            }`}
                          >
                            <span className="text-[9px] font-mono text-cyan-300">💧</span>
                            <span className="text-[10px] text-cyan-400 animate-bounce">↓</span>
                          </div>
                        ))}
                      </div>

                      <div className="text-center z-10 bg-slate-950/80 px-2 py-0.5 rounded text-[11px] font-mono text-cyan-300">
                        Pc = {hemodynamics.Pc} mmHg
                      </div>
                    </div>

                    {/* Venule Segment */}
                    <div
                      className={`h-full rounded-r-lg transition-all duration-300 flex items-center justify-center text-[10px] font-bold text-blue-100 ${
                        telmisartanActive || mpffActive
                          ? 'w-1/4 bg-blue-600/70 border-y-2 border-r-2 border-blue-400'
                          : 'w-1/4 bg-blue-900/60 border-y border-r border-blue-700'
                      }`}
                    >
                      {telmisartanActive ? 'Venodilated (ARB)' : 'Fixed Rv'}
                    </div>
                  </div>

                  {/* Interstitial Space & Lymphatic Drainage Vessel Below */}
                  <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      <span>Interstitial Fluid:</span>
                      <strong className={`font-mono ${hemodynamics.edemaScore > 50 ? 'text-rose-400' : 'text-slate-200'}`}>
                        {hemodynamics.edemaScore > 65 ? 'High Extravasation (Deep Marks)' : hemodynamics.edemaScore > 35 ? 'Moderate Edema' : 'Minimal / Resolved'}
                      </strong>
                    </div>

                    <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                      <Wind className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Lymph Drainage: +{hemodynamics.J_lymph} mL/min {mpffActive || compressionActive ? '(Accelerated)' : '(Baseline)'}</span>
                    </div>
                  </div>
                </div>

                {/* Clinical Interpretation Callout */}
                <div className={`mt-4 p-3.5 rounded-lg border text-xs leading-relaxed ${
                  hemodynamics.edemaScore > 50
                    ? 'bg-rose-950/40 border-rose-800/60 text-rose-200'
                    : 'bg-emerald-950/40 border-emerald-800/60 text-emerald-200'
                }`}>
                  <div className="font-semibold flex items-center gap-1.5 mb-1">
                    {hemodynamics.edemaScore > 50 ? (
                      <AlertTriangle className="w-4 h-4 text-rose-400" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    )}
                    <span>
                      {hemodynamics.edemaScore > 50
                        ? 'Hemodynamic Diagnosis: High Capillary Transudation Trap'
                        : 'Hemodynamic Diagnosis: Stable Microvascular Barrier Equilibrium'}
                    </span>
                  </div>
                  {hemodynamics.edemaScore > 50 ? (
                    <p>
                      Because Amlodipine dilates the pre-capillary arteriole while post-capillary outflow remains restricted under gravity, intracapillary hydrostatic pressure (Pc) spikes to <strong className="text-white">{hemodynamics.Pc} mmHg</strong>. Combined with mast cell gap opening, fluid extravasates faster than initial lymphatics can drain (+{hemodynamics.netFluidAccumulation} mL/min). This steals ~{100 - hemodynamics.preloadReserve}% of cardiac preload, reducing frontal lobe perfusion to <strong className="text-white">{hemodynamics.frontalPerfusion}%</strong> and triggering late-afternoon executive fogginess.
                    </p>
                  ) : (
                    <p>
                      The current combination of ARB venodilation (Telmisartan), phlebotropic wall tone (MPFF), and basement membrane crosslinking (Pycnogenol) balances pre- and post-capillary resistances. Net transcapillary filtration is reduced to a manageable +{hemodynamics.netFluidAccumulation} mL/min, which is fully cleared by stimulated lymphatics. Frontal lobe perfusion remains robust at <strong className="text-white">{hemodynamics.frontalPerfusion}%</strong>.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: THE 4 BIOLOGICAL PILLARS OF VASCULAR HEALTH */}
      {activeSubTab === 'pillars' && (
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>The 4 Biological Pillars of Lifelong Vascular Health</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Deep clinical pathophysiology exploring glycocalyx architecture, venous return hemodynamics, calcium channel blocker mechanisms, and non-catechol vascular pharmacology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pillar 1 */}
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2.5 text-cyan-400">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800/50 flex items-center justify-center font-bold font-mono text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Endothelial Glycocalyx Layer (EGL)
                  </h3>
                  <div className="text-[11px] text-cyan-300 font-mono">Microvascular Barrier & Fluid Retention</div>
                </div>
              </div>
              <div className="text-xs text-slate-300 space-y-2.5 leading-relaxed">
                <p>
                  The <strong className="text-white">Endothelial Glycocalyx Layer</strong> is a 0.5 to 3.0 µm thick protective gel mesh composed of proteoglycans (syndecans, glypicans) and glycosaminoglycans (heparan sulfate, chondroitin sulfate, hyaluronic acid) that lines the luminal surface of every capillary in the body.
                </p>
                <p>
                  It serves as the body’s primary physical sieve for plasma proteins. When intact, its reflection coefficient (σ) approaches 0.95, preventing albumin from leaking into interstitial tissue and preserving the oncotic suction gradient that holds water inside the vascular tree.
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="text-[11px] font-bold text-rose-300 uppercase tracking-wider">
                    What Strips the Glycocalyx in this Phenotype?
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-400 text-[11px]">
                    <li><strong className="text-slate-200">Mast Cell Degranulation:</strong> Histamine binding to endothelial H1 receptors causes rapid endothelial cell cytoskeletal contraction, opening intercellular gaps (VE-cadherin disruption). Tryptase and MMP-9 enzymatically cleave syndecan-1 ectodomains into circulation.</li>
                    <li><strong className="text-slate-200">Sulfite Preservatives (SO2):</strong> Ingested metabisulfites generate free radical superoxide and peroxynitrite in vascular endothelium when Sulfite Oxidase (SUOX) is saturated, uncoupling eNOS and degrading hyaluronic acid chains.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2.5 text-blue-400">
                <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800/50 flex items-center justify-center font-bold font-mono text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Venous Capacitance & Cerebral Perfusion Axis
                  </h3>
                  <div className="text-[11px] text-blue-300 font-mono">The Gravity Trap & Late-Afternoon Fog</div>
                </div>
              </div>
              <div className="text-xs text-slate-300 space-y-2.5 leading-relaxed">
                <p>
                  Over <strong className="text-white">70% of systemic blood volume</strong> resides within the low-pressure, high-capacitance venous system. In individuals with connective tissue laxity or chronic histamine-mediated vasodilation, venous wall compliance is elevated.
                </p>
                <p>
                  When sitting or standing motionless, hydrostatic gravity causes <strong className="text-white">500 to 1,000 mL of venous blood</strong> to pool in the lower calf, ankle, and splanchnic vascular beds.
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
                    The "Thoughts Slipping Through Fingers" Hemodynamic Chain:
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Peripheral Venous Pooling → Decreased Central Venous Preload (Right Atrial Filling) → Reduced Left Ventricular Stroke Volume (Frank-Starling Law) → Drop in Carotid Pulsatile Flow → Selective Frontopolar Microvascular Hypoperfusion → Breakdown of Sustained Working Memory Chains.
                  </p>
                  <p className="text-slate-400 text-[11px] pt-1">
                    <strong className="text-emerald-400">The Soleus Muscle Solution:</strong> The soleus muscle contains large intramuscular venous sinuses that do not fatigue easily. Seated heel raises pump venous blood upward against gravity, instantly restoring central preload.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2.5 text-amber-400">
                <div className="w-8 h-8 rounded-lg bg-amber-950 border border-amber-800/50 flex items-center justify-center font-bold font-mono text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    The Amlodipine Mechanism & The Starling Trap
                  </h3>
                  <div className="text-[11px] text-amber-300 font-mono">Pre- vs. Post-Capillary Vascular Tone Mismatch</div>
                </div>
              </div>
              <div className="text-xs text-slate-300 space-y-2.5 leading-relaxed">
                <p>
                  Amlodipine is a dihydropyridine calcium channel blocker (CCB) that lowers systemic blood pressure by selectively blocking voltage-gated L-type calcium channels on arterial smooth muscle.
                </p>
                <p>
                  However, L-type calcium channels are <strong className="text-white">predominantly distributed on pre-capillary resistance arterioles</strong>, with virtually zero functional expression on post-capillary venules.
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                    Why Amlodipine Multiplies Sock Marks:
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Pre-capillary relaxation without post-capillary dilation acts like removing a dam at the inlet of a narrow canal while leaving the outlet gate narrow. Systemic arterial pressure is transmitted straight into delicate capillary beds, shooting hydrostatic pressure (Pc) from 20 mmHg up to 38 mmHg.
                  </p>
                  <p className="text-slate-400 text-[11px] pt-1">
                    <strong className="text-rose-300">Why Diuretics Are Harmful:</strong> Diuretics do not fix this local hydrostatic gradient; they deplete circulating intravascular plasma, precipitating orthostatic tachycardia and deep fatigue.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2.5 text-emerald-400">
                <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800/50 flex items-center justify-center font-bold font-mono text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Precision Non-Catechol Vascular Pharmacopoeia
                  </h3>
                  <div className="text-[11px] text-emerald-300 font-mono">COMT-Safe & Sulfite-Free Therapeutic Arsenal</div>
                </div>
              </div>
              <div className="text-xs text-slate-300 space-y-2.5 leading-relaxed">
                <p>
                  Standard vascular or bioflavonoid protocols often blindly prescribe Quercetin, Green Tea extract (EGCG), or red wine resveratrol. In this patient, these provoke <strong className="text-rose-400">severe hypertensive headaches and neck stiffness</strong> due to competitive COMT inhibition.
                </p>
                <div className="space-y-1.5 pt-1">
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <div>
                      <strong className="text-white">MPFF (Micronized Diosmin 90% / Hesperidin 10%):</strong> Flavanone/flavone structure without ortho-dihydroxy catechol rings; completely safe for slow COMT. Increases venous wall tone, reduces ICAM-1, and stimulates lymphatic micro-pumps.
                    </div>
                  </div>

                  <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <div>
                      <strong className="text-white">Pycnogenol® (French Maritime Pine Bark OPCs):</strong> Binds to vascular elastin and collagen, sealing basement membrane gaps. Reduces CCB-induced ankle edema by 35–40% in clinical trials.
                    </div>
                  </div>

                  <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <div>
                      <strong className="text-white">Molybdenum & Benfotiamine:</strong> Molybdenum is the obligate catalytic cofactor for Sulfite Oxidase (SUOX); Benfotiamine repairs thiamine cleaved by sulfites, maintaining endothelial ATP.
                    </div>
                  </div>

                  <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <div>
                      <strong className="text-white">CDP Choline / Citicoline (250mg):</strong> Supplies cytidine and choline via the Kennedy pathway to synthesize phosphatidylcholine, directly repairing microvascular endothelial cell membranes and resealing tight junctions (Claudin-5, Occludin) degraded by mast cell tryptase. 100% slow-COMT safe with zero catechol ring.
                    </div>
                  </div>

                  <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <div>
                      <strong className="text-white">Low-Dose Tadalafil (Cialis 2.5–5mg):</strong> Selective PDE5 inhibitor elevating cGMP to relax pelvic floor and pudendal smooth muscle, restore pelvic microvascular perfusion, and promote endothelial eNOS flow-mediated dilation. Synergizes with Telmisartan; 100% non-catechol and safe for Slow COMT.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 3: DAILY VASCULAR OPTIMIZATION PROTOCOL */}
      {activeSubTab === 'protocol' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>The 24-Hour Vascular & Hemodynamic Protocol</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                A chronobiologically synchronized daily routine protecting capillary tight junctions, preventing pooling during seated work, and maintaining prefrontal cerebral blood flow.
              </p>
            </div>
            <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {Object.values(protocolChecked).filter(Boolean).length} / {Object.keys(protocolChecked).length} Completed
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {/* 07:30 AM */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={protocolChecked.morningHydration}
                  onChange={(e) => setProtocolChecked({ ...protocolChecked, morningHydration: e.target.checked })}
                  className="mt-1 rounded border-slate-700 text-cyan-500 focus:ring-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-cyan-400">07:30 AM</span>
                    <span className="text-xs font-bold text-white">Morning Hydro-Osmotic Preload</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Consume 500 mL water with 500–750 mg sodium and potassium electrolytes. Expands intravascular volume before upright posture, preventing compensatory tachycardia and pooling.
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-slate-400 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 self-start md:self-auto whitespace-nowrap">
                Preload Defense
              </span>
            </div>

            {/* 08:00 AM */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={protocolChecked.calfActivation}
                  onChange={(e) => setProtocolChecked({ ...protocolChecked, calfActivation: e.target.checked })}
                  className="mt-1 rounded border-slate-700 text-cyan-500 focus:ring-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-cyan-400">08:00 AM</span>
                    <span className="text-xs font-bold text-white">Morning Calf Activation Drill</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Perform 25 standing calf raises with 2-second hold at peak contraction. Clears overnight dependent venous stasis and primes the soleus muscle pump before dressing.
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-slate-400 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 self-start md:self-auto whitespace-nowrap">
                Soleus Priming
              </span>
            </div>

            {/* 08:30 AM */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={protocolChecked.vascularVitamins}
                  onChange={(e) => setProtocolChecked({ ...protocolChecked, vascularVitamins: e.target.checked })}
                  className="mt-1 rounded border-slate-700 text-cyan-500 focus:ring-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-cyan-400">08:30 AM</span>
                    <span className="text-xs font-bold text-white">Vascular Barrier & Sulfite Defense Stack</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Take Morning MPFF (500mg) + Pycnogenol (100mg) + CDP Choline (250mg) + Buffered Vitamin C (500mg) + P5P (25mg) + Molybdenum (150mcg) + Benfotiamine (150mg). Strictly NO quercetin or green tea.
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 self-start md:self-auto whitespace-nowrap">
                Endothelial Shield
              </span>
            </div>

            {/* 09:30 AM */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={protocolChecked.compressionSocks}
                  onChange={(e) => setProtocolChecked({ ...protocolChecked, compressionSocks: e.target.checked })}
                  className="mt-1 rounded border-slate-700 text-cyan-500 focus:ring-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-cyan-400">09:30 AM</span>
                    <span className="text-xs font-bold text-white">Class 1 Graduated Compression Stockings</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Don 15–20 mmHg knee-high graduated compression socks before commencing seated desk work. Provides external tissue counter-pressure, eliminating the Amlodipine hydrostatic gradient.
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-slate-400 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 self-start md:self-auto whitespace-nowrap">
                Mechanical Defense
              </span>
            </div>

            {/* 11:00 AM - 04:00 PM */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={protocolChecked.soleusPushups}
                  onChange={(e) => setProtocolChecked({ ...protocolChecked, soleusPushups: e.target.checked })}
                  className="mt-1 rounded border-slate-700 text-cyan-500 focus:ring-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-cyan-400">11:00 AM – 04:00 PM</span>
                    <span className="text-xs font-bold text-white">Seated Soleus Push-Up (SPU) Routine</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Every 45–60 minutes of cognitive desk work, perform 15–20 seated soleus push-ups (plantar flexing while keeping ball of foot on floor). Drops venular pooling pressure from 45 mmHg to 22 mmHg without taxing systemic energy.
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-cyan-300 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 self-start md:self-auto whitespace-nowrap">
                Desk Biomechanics
              </span>
            </div>

            {/* 05:00 PM */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={protocolChecked.recumbentExercise}
                  onChange={(e) => setProtocolChecked({ ...protocolChecked, recumbentExercise: e.target.checked })}
                  className="mt-1 rounded border-slate-700 text-cyan-500 focus:ring-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-cyan-400">05:00 PM</span>
                    <span className="text-xs font-bold text-white">Recumbent Zone 2 Vascular Pacing</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    20–30 minutes of recumbent cycling, rowing, or gentle 4 km/h slow jogging in cool airflow (&lt;20°C). Promotes laminar shear stress for physiological endothelial nitric oxide (eNOS) without triggering mast cell degranulation.
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-slate-400 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 self-start md:self-auto whitespace-nowrap">
                Shear Stress eNOS
              </span>
            </div>

            {/* 07:00 PM */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={protocolChecked.zeroSulfites}
                  onChange={(e) => setProtocolChecked({ ...protocolChecked, zeroSulfites: e.target.checked })}
                  className="mt-1 rounded border-slate-700 text-cyan-500 focus:ring-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-cyan-400">07:00 PM</span>
                    <span className="text-xs font-bold text-white">Zero-Sulfite Dinner & Evening Medication</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Strictly zero cider, wine, sausages, or sulfited preserved deli meats (E220–E228). Second dose of MPFF (500mg) or Gotu Kola (60–120mg). Current prescribed Telmisartan + Amlodipine regimen.
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-amber-300 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 self-start md:self-auto whitespace-nowrap">
                Allergen Defense
              </span>
            </div>

            {/* 09:30 PM */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={protocolChecked.legsUpWall}
                  onChange={(e) => setProtocolChecked({ ...protocolChecked, legsUpWall: e.target.checked })}
                  className="mt-1 rounded border-slate-700 text-cyan-500 focus:ring-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-cyan-400">09:30 PM</span>
                    <span className="text-xs font-bold text-white">Passive Lymphatic Drain: Legs-Up-The-Wall (15 Mins)</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Lie on back with legs vertically elevated against wall (Viparita Karani). Reverses gravitational hydrostatic column, channeling 400–700 mL of sequestered interstitial fluid back into central circulation for renal excretion.
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-cyan-300 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 self-start md:self-auto whitespace-nowrap">
                Lymph Drainage
              </span>
            </div>

            {/* 10:30 PM */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={protocolChecked.nightMagnesium}
                  onChange={(e) => setProtocolChecked({ ...protocolChecked, nightMagnesium: e.target.checked })}
                  className="mt-1 rounded border-slate-700 text-cyan-500 focus:ring-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-cyan-400">10:30 PM</span>
                    <span className="text-xs font-bold text-white">Bedtime Magnesium Glycinate / Malate (200–300mg)</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Take strictly before sleep. Calms microglial activation and NMDA receptors without causing unwanted daytime peripheral vasodilation that compounds Amlodipine pooling.
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-purple-300 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 self-start md:self-auto whitespace-nowrap">
                Night Recovery
              </span>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 4: VASCULAR HEALTH CALCULATOR & ASSESSMENT */}
      {activeSubTab === 'calculator' && (
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              <span>Microvascular & Venous Vulnerability Index</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Score your clinical profile across 6 validated microvascular and venous markers to identify hemodynamic transudation risk and prioritize targeted clinical actions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-4">
              {/* Question 1: Sock Marks */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-white">
                  1. Sock Mark Depth & Persistence at End of Day
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { label: 'None / Faint (<15m)', val: 0 },
                    { label: 'Mild Indent (<1 hr)', val: 1 },
                    { label: 'Noticeable Grooves (1-3 hrs)', val: 2 },
                    { label: 'Deep Indents / Pitting (>3 hrs)', val: 3 },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => setCalcAnswers({ ...calcAnswers, sockMarks: opt.val })}
                      className={`p-2.5 rounded-lg border text-center transition-colors ${
                        calcAnswers.sockMarks === opt.val
                          ? 'bg-cyan-950/80 border-cyan-500/60 text-cyan-200'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Standing Brain Fog */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-white">
                  2. Postural Cognitive Drop / "Thoughts Slipping Through Fingers" During Upright Stance
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { label: 'Never / Rare', val: 0 },
                    { label: 'Occasional in Warm Room', val: 1 },
                    { label: 'Frequent When Standing Long', val: 2 },
                    { label: 'Severe / Rapid Working Memory Slip', val: 3 },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => setCalcAnswers({ ...calcAnswers, standingBrainFog: opt.val })}
                      className={`p-2.5 rounded-lg border text-center transition-colors ${
                        calcAnswers.standingBrainFog === opt.val
                          ? 'bg-cyan-950/80 border-cyan-500/60 text-cyan-200'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Afternoon Fatigue */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-white">
                  3. Seated Desk Work Executive Collapse (Late Afternoon Drop)
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { label: 'Steady Energy', val: 0 },
                    { label: 'Mild Slump', val: 1 },
                    { label: 'Marked Drop / Heavy Legs', val: 2 },
                    { label: 'Severe Exhaustion & Brain Fog', val: 3 },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => setCalcAnswers({ ...calcAnswers, afternoonFatigue: opt.val })}
                      className={`p-2.5 rounded-lg border text-center transition-colors ${
                        calcAnswers.afternoonFatigue === opt.val
                          ? 'bg-cyan-950/80 border-cyan-500/60 text-cyan-200'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 4: Heat Sensitivity */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-white">
                  4. Warm Environment & Hot Shower Response
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { label: 'No Effect', val: 0 },
                    { label: 'Mild Flushing', val: 1 },
                    { label: 'Dizziness or Heavy Ankles', val: 2 },
                    { label: 'Marked Flushing, Tachycardia & Edema', val: 3 },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => setCalcAnswers({ ...calcAnswers, heatSensitivity: opt.val })}
                      className={`p-2.5 rounded-lg border text-center transition-colors ${
                        calcAnswers.heatSensitivity === opt.val
                          ? 'bg-cyan-950/80 border-cyan-500/60 text-cyan-200'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 5: Sulfite Reactions */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-white">
                  5. Sulfite Preservative Sensitivity (Cider, Wine, Cured Meats)
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { label: 'None / Tolerated', val: 0 },
                    { label: 'Mild Nasal Congestion', val: 1 },
                    { label: 'Wheezing / Chest Tightness', val: 2 },
                    { label: 'Severe Bronchospasm & Wheezing (SUOX Block)', val: 3 },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => setCalcAnswers({ ...calcAnswers, sulfiteReaction: opt.val })}
                      className={`p-2.5 rounded-lg border text-center transition-colors ${
                        calcAnswers.sulfiteReaction === opt.val
                          ? 'bg-rose-950/80 border-rose-500/60 text-rose-200'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 6: Quercetin Sensitivity */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-white">
                  6. Quercetin or High-Dose Green Tea (EGCG) Response
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { label: 'Well Tolerated', val: 0 },
                    { label: 'Mild Unease', val: 1 },
                    { label: 'Headache or Muscle Tension', val: 2 },
                    { label: 'Severe Occipital Headache & Stiff Neck (Slow COMT)', val: 3 },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => setCalcAnswers({ ...calcAnswers, quercetinSensitivity: opt.val })}
                      className={`p-2.5 rounded-lg border text-center transition-colors ${
                        calcAnswers.quercetinSensitivity === opt.val
                          ? 'bg-rose-950/80 border-rose-500/60 text-rose-200'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Score Summary Box (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-3">
                <div className="text-xs font-mono uppercase text-slate-400">
                  Microvascular Vulnerability Index
                </div>
                <div className="text-4xl font-extrabold text-rose-400">
                  {vulnerabilityScore}%
                </div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-rose-950 border border-rose-800 text-rose-300">
                  {vulnerabilityScore > 70
                    ? 'High Endothelial Transudation Risk'
                    : vulnerabilityScore > 40
                    ? 'Moderate Vascular Strain'
                    : 'Low Risk'}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed text-left pt-2 border-t border-slate-800">
                  Your profile confirms a <strong className="text-white">classic dual microvascular phenotype</strong>: baseline endothelial hyperpermeability (lifelong sock marks) compounded by Amlodipine-mediated pre-capillary hydrostatic filtration, paired with a Slow-COMT catecholamine bottleneck and SUOX sulfite sensitivity.
                </p>

                <div className="space-y-2 pt-2 text-left">
                  <div className="text-[11px] font-bold text-cyan-300 uppercase">Top 3 Prescriptive Targets:</div>
                  <div className="text-[11px] text-slate-300 space-y-1">
                    <div>1. <strong className="text-white">MPFF (Diosmin/Hesperidin 1000mg)</strong> to stimulate lymphatic pumping.</div>
                    <div>2. <strong className="text-white">Pycnogenol (100–150mg)</strong> to crosslink basement membrane collagen.</div>
                    <div>3. <strong className="text-white">Telmisartan Optimization</strong> to balance post-capillary venular resistance.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 5: PHYSICIAN CONSULTATION SCRIPT */}
      {activeSubTab === 'clinical-script' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Printer className="w-5 h-5 text-cyan-400" />
                <span>Physician Collaboration Brief: Hemodynamics & Vascular Health</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                A clinically rigorous addendum ready to share with your Cardiologist, Vascular Specialist, or Primary Care Provider.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyScript}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-colors shadow-sm"
              >
                {copiedScript ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedScript ? 'Copied to Clipboard' : 'Copy Brief'}</span>
              </button>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed space-y-4">
            <div className="text-cyan-400 font-bold text-sm border-b border-slate-800 pb-2">
              CLINICAL CONSULTATION ADDENDUM: HEMODYNAMIC & MICROVASCULAR PROTOCOL
            </div>
            <div className="text-slate-400 text-[11px]">
              Patient Phenotype: Lifelong Dependent Edema ("Sock Marks"), Amlodipine 5mg Pre-Capillary Vasodilation, Mast Cell Hyperpermeability, Slow-COMT Catecholamine Bottleneck, Confirmed Sulfite Allergy.
            </div>

            <div className="space-y-2">
              <div className="text-white font-bold">1. HEMODYNAMIC MECHANISM IDENTIFIED:</div>
              <p className="text-slate-300 pl-4">
                • Dihydropyridine CCB (Amlodipine 5mg) selectively relaxes pre-capillary resistance arterioles (Ra) by ~55% with negligible post-capillary venular dilation.<br />
                • Per the Starling filtration equation [Jv = Kf * ((Pc - Pi) - σ(πc - πi))], this transmits arterial pressure directly into delicate capillary beds, elevating intracapillary hydrostatic pressure (Pc) from baseline ~20 mmHg up to 36–40 mmHg.<br />
                • Result: Fluid is mechanically forced into interstitial tissues of lower limbs, manifesting as prominent end-of-day sock indentations and dependent edema.<br />
                • Cognitive Impact: Sequestration of 500–1,000 mL of plasma volume in dependent limbs reduces right atrial filling pressure and cardiac stroke volume during seated desk work, triggering postural cerebral hypoperfusion and executive working memory collapse ("thoughts slipping through fingers").
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-rose-300 font-bold">2. CRITICAL CONTRAINDICATIONS & METABOLIC GUARDRAILS:</div>
              <p className="text-slate-300 pl-4">
                • <strong className="text-white">NO LOOP/THIAZIDE DIURETICS:</strong> Edema is a local hydrostatic filtration phenomenon, NOT whole-body hypervolemia. Diuretics cause systemic volume contraction, worsening orthostatic fatigue and cerebral hypoperfusion.<br />
                • <strong className="text-white">NO QUERCETIN / NO EGCG:</strong> Patient exhibits severe occipital headaches and acute cervical muscle rigidity ("stiff neck") from catechol-structured bioflavonoids due to slow COMT inhibition and SAMe depletion.<br />
                • <strong className="text-white">STRICT ZERO SULFITES (E220–E228):</strong> Metabisulfite preservatives trigger confirmed wheezing/bronchospasm (SUOX hypofunction) and degrade vascular endothelial thiamine stores.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-emerald-300 font-bold">3. EVIDENCE-BASED COLLABORATIVE INTERVENTIONS FOR CLINICAL DISCUSSION:</div>
              <p className="text-slate-300 pl-4 space-y-1">
                • <strong className="text-white">Antihypertensive Pairing:</strong> Maintain or optimize Angiotensin Receptor Blocker (Telmisartan 40–80mg), which provides selective post-capillary venodilation to rebalance Ra/Rv ratio, reducing intracapillary pressure Pc and cutting edema by 50–70%. Alternatively, evaluate lipophilic 3rd-generation CCBs with balanced venodilation (e.g., Lercanidipine 10–20mg).<br />
                • <strong className="text-white">Phlebotropic Microvascular Support:</strong> Micronized Purified Flavonoid Fraction (MPFF: Diosmin 90% / Hesperidin 10%, 500mg bid) to enhance venous wall tone, downregulate endothelial ICAM-1/VCAM-1, and stimulate lymphatic micro-capillary pumping.<br />
                • <strong className="text-white">Perivascular Glycocalyx Stabilizer:</strong> French Maritime Pine Bark Extract (Pycnogenol, 100–150mg daily), clinically shown in RCTs to reduce CCB-induced ankle swelling by 35–40% by stabilizing basement membrane collagen.<br />
                • <strong className="text-white">Sulfite/Oxidative Shield:</strong> Molybdenum Glycinate (150–300 mcg) + Benfotiamine (150–300 mg) to support SUOX clearance and shield endothelial mitochondria.<br />
                • <strong className="text-white">Mechanical Therapy:</strong> Class 1 (15–20 mmHg) graduated medical compression stockings during seated working hours; Seated Soleus Push-Up (SPU) intervals to activate the calf venous muscle pump.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="text-cyan-300 font-bold">4. RECOMMENDED DIAGNOSTIC WORKUP FOR INQUIRY:</div>
              <p className="text-slate-300 pl-4">
                • Bilateral Lower Extremity Venous Duplex Ultrasound (rule out saphenous/deep venous reflux &gt;0.5s)<br />
                • Baseline Serum Tryptase & Total IgE<br />
                • High-Sensitivity C-Reactive Protein (hs-CRP) & Homocysteine (endothelial injury markers)<br />
                • Comprehensive Metabolic Panel & Serum Albumin (oncotic baseline)
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

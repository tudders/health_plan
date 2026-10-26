import { ActiveTab } from '../types';

export interface SectionPresence {
  sectionId: ActiveTab;
  sectionName: string;
  isPresent: boolean;
  notes?: string;
}

export type InventoryCategory = 
  | 'Physical Exercise'
  | 'Cognitive & Brain Exercises'
  | 'Exercise & Physical'
  | 'Pharmacotherapy'
  | 'Vitamins & Nutraceuticals'
  | 'Botanicals & Cannabinoids'
  | 'Clinical Phenotypes'
  | 'Biomarkers & Diagnostics';

export interface InventoryItem {
  id: string;
  name: string;
  category: InventoryCategory;
  primaryAction: string;
  standardDosingOrProtocol: string;
  tierOrVerdict: 'Gold Standard / High Efficacy' | 'Therapeutic / Moderate' | 'Caution / Strict Bounds' | 'Contraindicated / Severe Flare Risk';
  targetAxes: ('MCAS' | 'Brain Fog / SCT' | 'Vascular' | 'Slow COMT' | 'Pelvic / Pudendal')[];
  presence: {
    efficacyMatrix: boolean;
    exerciseEngine: boolean;
    exercisesSection?: boolean;
    pharmaMatrix: boolean;
    unifiedProtocol: boolean;
    flareSimulator: boolean;
    vascularSection: boolean;
    evidenceCompendium: boolean;
  };
  crossCheckNotes: string;
}

export const MASTER_INVENTORY_ITEMS: InventoryItem[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. PHYSICAL EXERCISE MODALITIES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'slow-jogging',
    name: 'Very Slow Jogging (~4 km/h / Japanese "Niko Niko" Pace)',
    category: 'Physical Exercise',
    primaryAction: 'Cerebellar-thalamocortical optic flow pacing; zero thermal or splanchnic shock',
    standardDosingOrProtocol: '15–30 min; 160–180 spm cadence; RPE 2–3; nasal breathing only',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Brain Fog / SCT', 'MCAS', 'Vascular', 'Slow COMT', 'Pelvic / Pudendal'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: true,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Synchronized in both Efficacy Matrix & Exercise Pacing Engine. #1 rated cardiovascular modality.'
  },
  {
    id: 'farmers-walks',
    name: "Farmer's Walks & Loaded Carries (Zone 2/3 Modulation)",
    category: 'Physical Exercise',
    primaryAction: 'High-proprioception frontoparietal anchor; soleus pump reverses Amlodipine pooling',
    standardDosingOrProtocol: '20–35% bodyweight total; 4–6 rounds of 60–90s; strict continuous breathing',
    tierOrVerdict: 'Therapeutic / Moderate',
    targetAxes: ['Vascular', 'Brain Fog / SCT', 'Pelvic / Pudendal', 'Slow COMT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Indexed in Matrix and Exercise Engine; crucial hemodynamic countermeasure for lower-leg edema.'
  },
  {
    id: 'skipping-rope',
    name: 'Skipping / Jump Rope Work',
    category: 'Physical Exercise',
    primaryAction: 'Rhythmic soleus calf pump for cerebral perfusion; requires impact mitigation',
    standardDosingOrProtocol: '3–5 min total (30–45s bouts); RPE 4–5 max; cushioned turf; 1–2x/week',
    tierOrVerdict: 'Caution / Strict Bounds',
    targetAxes: ['Vascular', 'Brain Fog / SCT', 'MCAS', 'Slow COMT', 'Pelvic / Pudendal'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: false
    },
    crossCheckNotes: 'Explicit upper limits added: capped at 5 mins total, strictly sub-anaerobic.'
  },
  {
    id: 'kettlebell-armor-building',
    name: 'Kettlebell Armor Building Complex (2 Cleans, 1 Press, 3 Squats)',
    category: 'Physical Exercise',
    primaryAction: 'High-density multi-joint neural recruitment and frontostriatal dopamine stimulation',
    standardDosingOrProtocol: '8–12 min density block; 5–8 total rounds; RPE 6–7 max; 1–2x/week',
    tierOrVerdict: 'Caution / Strict Bounds',
    targetAxes: ['Brain Fog / SCT', 'Vascular', 'MCAS', 'Slow COMT', 'Pelvic / Pudendal'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: false
    },
    crossCheckNotes: 'Explicit upper limits added: capped at 12 min density ceiling, strictly stop 2 reps prior to failure.'
  },
  {
    id: 'zone-1-walking-recumbent',
    name: 'Zone 1 Walking & Supine / Recumbent Ergometer Cycling',
    category: 'Physical Exercise',
    primaryAction: 'Orthostatic-free capillary perfusion with zero catecholamine or mast cell cost',
    standardDosingOrProtocol: '25–40 min continuous; RPE 2–3; 4–6x/week',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Vascular', 'MCAS', 'Brain Fog / SCT', 'Slow COMT', 'Pelvic / Pudendal'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: true,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Foundational baseline movement pattern across dysautonomia and MCAS protocols.'
  },
  {
    id: 'somatic-pelvic-decompression',
    name: 'Somatic Diaphragmatic Pelvic Decompression (90/90 Position)',
    category: 'Physical Exercise',
    primaryAction: 'Gravitational pelvic unloading, pudendal canal decompression & vagal reset',
    standardDosingOrProtocol: '12–20 min daily supine with lower legs elevated on chair/bench at 90°',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Pelvic / Pudendal', 'Slow COMT', 'MCAS', 'Vascular', 'Brain Fog / SCT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Core intervention for lifelong anorgasmia and hypertonic pelvic floor resting tone.'
  },
  {
    id: 'controlled-strength',
    name: 'Controlled Low-Rep Resistance Training (3–5 Reps / Long Rest)',
    category: 'Physical Exercise',
    primaryAction: 'Myokine IL-6 anti-inflammatory release without lactic acidosis or thermal surge',
    standardDosingOrProtocol: '3–6 reps/set; 2–3 min passive rest; RPE 7–8; no Valsalva breath-holding',
    tierOrVerdict: 'Therapeutic / Moderate',
    targetAxes: ['Brain Fog / SCT', 'Vascular', 'MCAS'],
    presence: {
      efficacyMatrix: false,
      exerciseEngine: true,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Detailed in Exercise Pacing Engine; pairs with Zone 2 foundational movement.'
  },
  {
    id: 'somatic-vagal',
    name: 'Somatic Vagal Movement & Reformer Pilates (Horizontal Springs)',
    category: 'Physical Exercise',
    primaryAction: 'Cholinergic anti-inflammatory pathway stimulation via alpha-7 nAChR',
    standardDosingOrProtocol: '20–45 min; horizontal springs (zero orthostatic stress); gentle floor mobility',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['MCAS', 'Brain Fog / SCT', 'Pelvic / Pudendal', 'Vascular'],
    presence: {
      efficacyMatrix: false,
      exerciseEngine: true,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Primary exercise prescription during active MCAS or visceral flares.'
  },
  {
    id: 'maximal-sprints-metcon',
    name: 'Maximal Anaerobic Sprinting / Metcon HIIT / Tabatas',
    category: 'Physical Exercise',
    primaryAction: 'Massive catecholamine flooding, thermal degranulation, splanchnic ischemia',
    standardDosingOrProtocol: 'Strictly 0 minutes (contraindicated in this phenotype)',
    tierOrVerdict: 'Contraindicated / Severe Flare Risk',
    targetAxes: ['MCAS', 'Slow COMT', 'Brain Fog / SCT', 'Vascular', 'Pelvic / Pudendal'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: true,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Identified as the #1 non-pharmacological trigger for 48–72h cognitive crashes.'
  },
  // ─────────────────────────────────────────────────────────────────────────────
  // 2. TARGETED EXERCISES: BRAIN, VAGAL & SOMATIC DRILLS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'dual-n-back',
    name: 'Dual N-Back Training (Working Memory & Executive Chaining)',
    category: 'Cognitive & Brain Exercises',
    primaryAction: 'Simultaneous visual-spatial and auditory delay-period updating; expands prefrontal buffer capacity and halts CDS thought fade',
    standardDosingOrProtocol: '15–20 min daily (4–5 days/week); progress 1-back to 2-back; morning prefrontal peak',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Brain Fog / SCT', 'Slow COMT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      exercisesSection: true,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'The premier cognitive training protocol that expands working memory buffer capacity without catecholamine spikes.'
  },
  {
    id: 'drumming',
    name: 'Polyrhythmic Acoustic Drumming & Bilateral Entrainment',
    category: 'Cognitive & Brain Exercises',
    primaryAction: 'Cerebellar-striatal auditory-motor timing; synchronizes thalamocortical oscillations and stimulates endogenous dopamine',
    standardDosingOrProtocol: '15–25 min at 80–120 BPM (3–5x/week); alternating bilateral 4/4 or polyrhythms with nasal breathing',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Brain Fog / SCT', 'Vascular', 'Slow COMT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      exercisesSection: true,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Acoustic rhythmic scaffolding overcomes the sluggish internal clock of SCT while satisfying ADHD sensory hunger.'
  },
  {
    id: 'singing-chanting',
    name: 'Vocal Chanting & Melodic Singing (Laryngeal Vagal CAIP)',
    category: 'Cognitive & Brain Exercises',
    primaryAction: 'Mechanical vibration of recurrent/superior laryngeal nerves; fires cholinergic anti-inflammatory pathway (α7-nAChR)',
    standardDosingOrProtocol: '10–15 min daily (or 5 min pre-meal); low-pitch resonant humming with 8–12s extended exhalations',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['MCAS', 'Vascular', 'Brain Fog / SCT', 'Pelvic / Pudendal'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      exercisesSection: true,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Directly fires vagal efferents to quiet enteric mast cells via α7-nAChR; induces reciprocal pelvic floor relaxation.'
  },
  {
    id: 'resonance-breathing',
    name: '0.1 Hz Resonance Frequency Breathing (5.5 Breaths/Min)',
    category: 'Cognitive & Brain Exercises',
    primaryAction: 'Aligns pulmonary blood flow with arterial baroreceptors; maximizes HRV gain and cerebral pulsatile microperfusion',
    standardDosingOrProtocol: '10–20 min 2x daily (morning & afternoon slump); 5.5s smooth nasal inhale, 5.5s effortless exhale; 0 pauses',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Vascular', 'MCAS', 'Brain Fog / SCT', 'Pelvic / Pudendal', 'Slow COMT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      exercisesSection: true,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: true,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Gold-standard baroreflex recalibration for orthostatic intolerance; clears splanchnic pooling without drugs.'
  },
  {
    id: 'soleus-pushups',
    name: 'Seated Soleus Calf Pushups & Venous Siphon Drill',
    category: 'Cognitive & Brain Exercises',
    primaryAction: 'Slow-twitch soleus intramuscular venous plexus pump; ejects 500–1000 mL pooled blood to heart with 0°C heat',
    standardDosingOrProtocol: '100–250 seated heel raises every 60–90 min of desk work; continuous ball-of-foot anchor at 90° knee flexion',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Vascular', 'Brain Fog / SCT', 'MCAS'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      exercisesSection: true,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'The definitive mechanical countermeasure for Amlodipine dependent edema and afternoon desk-work brain drain.'
  },
  {
    id: 'juggling-gaze',
    name: 'Bilateral Gaze Tracking, Juggling & Saccadic Pacing (The EMDR Axis)',
    category: 'Cognitive & Brain Exercises',
    primaryAction: 'Bilateral horizontal gaze tracking (superior colliculus-amygdala inhibition / EMDR axis) & cross-body visual-motor juggling',
    standardDosingOrProtocol: '5–15 min daily (or 60s bilateral tracking breaks); smooth pursuit vs. saccadic eye tracking + 3-ball juggling',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Brain Fog / SCT', 'Slow COMT', 'MCAS'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      exercisesSection: true,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Engages the EMDR superior colliculus-mediodorsal thalamus-amygdala inhibition pathway to quiet autonomic fear/threat while taxing working memory to dissolve SCT daydreaming.'
  },
  {
    id: 'mammalian-dive',
    name: 'Mammalian Dive Reflex / Cold Face Immersion',
    category: 'Cognitive & Brain Exercises',
    primaryAction: 'Trigeminal-vagal sensory-motor reflex; triggers immediate bradycardia, peripheral vasoconstriction & parasympathetic surge',
    standardDosingOrProtocol: '15–30s facial immersion in cool water (10–15°C); repeat 1–2x during acute sensory overload or tachycardia',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Vascular', 'MCAS', 'Pelvic / Pudendal'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      exercisesSection: true,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: true,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Fastest physiological circuit breaker to arrest acute hyperadrenergic surges and sympathetic pelvic guarding in <10 seconds.'
  },
  {
    id: 'pelvic-reverse-kegel',
    name: 'Supine 90/90 Diaphragmatic Decompression & Reverse Kegels',
    category: 'Cognitive & Brain Exercises',
    primaryAction: 'Gravitational offloading and pudendal canal decompression; eccentric pelvic floor elongation and pudendal perfusion',
    standardDosingOrProtocol: '10–15 min daily (post-exercise or before bed); calves at 90/90 on chair; 4s belly inhale, 6s passive release; 0 Kegels',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Pelvic / Pudendal', 'Vascular', 'Brain Fog / SCT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      exercisesSection: true,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Foundational somatic therapy for hypertonic pelvic floor dysfunction and overcoming lifelong anorgasmic reflex blocks.'
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. PHARMACOTHERAPY & OFF-LABEL AGENTS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'isrib',
    name: 'ISRIB / trans-ISRIB (Integrated Stress Response Inhibitor)',
    category: 'Pharmacotherapy',
    primaryAction: 'eIF2B decameric allosteric activator; overrides p-eIF2α translational arrest & reverses neuroinflammatory memory loss',
    standardDosingOrProtocol: 'Investigational translational research models (0.25–2.5 mg/kg in specialized lipid/cyclodextrin formulations); 2BAct pipeline',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Brain Fog / SCT', 'Slow COMT', 'MCAS', 'Vascular', 'Pelvic / Pudendal'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Frontier investigational agent that breaks eIF2α translational shutdown in hippocampus/PFC with zero catecholamine load on Slow COMT.'
  },
  {
    id: 'tadalafil',
    name: 'Tadalafil (Cialis / Low-Dose Daily PDE5 Inhibitor)',
    category: 'Pharmacotherapy',
    primaryAction: 'Selective PDE5 inhibition elevating cGMP; relaxes pelvic floor smooth muscle, enhances pudendal microperfusion & optimizes endothelial NO tone',
    standardDosingOrProtocol: '2.5mg to 5.0mg orally once daily at the same time; steady-state pelvic smooth muscle relaxation without hemodynamic swings',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Pelvic / Pudendal', 'Vascular', 'Brain Fog / SCT', 'Slow COMT', 'MCAS'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Direct physiological solution for pelvic floor hypertonicity, CPPS, and lifelong anorgasmia. Relaxes internal pudendal arterial bed; synergistic with Telmisartan; 100% slow-COMT safe.'
  },
  {
    id: '5-meo-dmt',
    name: '5-MeO-DMT (Investigational Ultra-Rapid 5-HT1A Agonist)',
    category: 'Pharmacotherapy',
    primaryAction: 'High-affinity 5-HT1A receptor full agonist; silences dorsal raphe, collapses Default Mode Network hyperconnectivity & releases somatic pelvic armoring',
    standardDosingOrProtocol: 'Investigational clinical trial context: 2–5mg vaporized freebase (low dose) to 10–12mg (full mystical dose) under medical supervision; never combine with MAOIs',
    tierOrVerdict: 'Caution / Strict Bounds',
    targetAxes: ['Pelvic / Pudendal', 'Brain Fog / SCT', 'Slow COMT', 'MCAS'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Rapid-acting indolethylamine with profound somatic disinhibition and oxytocin surge for pelvic trauma/anorgasmia. Metabolized by MAO-A, not COMT. Strictly avoid MAOIs.'
  },
  {
    id: 'dmt',
    name: 'N,N-DMT (Investigational 5-HT2A & Sigma-1 Receptor Agonist)',
    category: 'Pharmacotherapy',
    primaryAction: '5-HT2A cortical desynchronization + Sigma-1 receptor endoplasmic reticulum chaperone; quells neuroinflammation and induces rapid TrkB spinogenesis',
    standardDosingOrProtocol: 'Investigational translational research context: 15–30mg vaporized pure synthetic freebase or 0.2–0.4 mg/kg IV in clinical trial settings; zero botanical impurities',
    tierOrVerdict: 'Caution / Strict Bounds',
    targetAxes: ['Brain Fog / SCT', 'MCAS', 'Slow COMT', 'Pelvic / Pudendal'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Sigma-1 receptor activation provides ER stress buffering and microglial cytokine suppression. Strictly requires synthetic purity to prevent plant terpene mast cell flares.'
  },
  {
    id: 'roflumilast',
    name: 'Roflumilast (Daliresp / Daxas)',
    category: 'Pharmacotherapy',
    primaryAction: 'Selective PDE4 inhibition raising intracellular cAMP; suppresses microglial M1 state',
    standardDosingOrProtocol: '100–250 mcg daily (titrated from micro-doses); morning dosing',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Brain Fog / SCT', 'MCAS', 'Slow COMT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Gold-standard pro-cognitive PDE4 brake; zero catecholamine or anticholinergic burden.'
  },
  {
    id: 'ketotifen',
    name: 'Ketotifen Fumarate (Zaditen)',
    category: 'Pharmacotherapy',
    primaryAction: 'Dual mast cell membrane stabilizer + high-affinity lipophilic H1 antagonist',
    standardDosingOrProtocol: '0.5–1.0 mg strictly at bedtime; pulse for 5–7 days during acute flares',
    tierOrVerdict: 'Caution / Strict Bounds',
    targetAxes: ['MCAS', 'Brain Fog / SCT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: true,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Explains the "Ketotifen Dilemma": resolves acute MCAS storm but central H1 block induces brain fog after 7 days.'
  },
  {
    id: 'ldn',
    name: 'Low-Dose Naltrexone / LDN',
    category: 'Pharmacotherapy',
    primaryAction: 'Antagonizes microglial TLR4 receptors; transient opioid rebound elevates endorphins',
    standardDosingOrProtocol: '1.5–4.5 mg at bedtime (compound dye-free without microcrystalline cellulose)',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Brain Fog / SCT', 'MCAS', 'Pelvic / Pudendal'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Directly quenches central microglial priming; well-tolerated in slow COMT.'
  },
  {
    id: 'guanfacine',
    name: 'Guanfacine (Tenex / Intuniv)',
    category: 'Pharmacotherapy',
    primaryAction: 'Postsynaptic alpha-2A adrenergic agonist; strengthens prefrontal cortex connectivity',
    standardDosingOrProtocol: '0.5–2.0 mg evening/bedtime; non-stimulant frontoparietal stabilizer',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Brain Fog / SCT', 'Slow COMT', 'MCAS', 'Vascular'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Arnsten lab gold standard: closes hyperpolarizing HCN channels in prefrontal dendritic spines.'
  },
  {
    id: 'pentoxifylline',
    name: 'Pentoxifylline (Trental)',
    category: 'Pharmacotherapy',
    primaryAction: 'Non-selective PDE inhibitor; increases red blood cell deformability and microvascular perfusion',
    standardDosingOrProtocol: '400 mg 1–2x daily with substantial meals',
    tierOrVerdict: 'Therapeutic / Moderate',
    targetAxes: ['Vascular', 'Brain Fog / SCT', 'MCAS', 'Pelvic / Pudendal'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Hemorheological agent that lowers blood viscosity and promotes pudendal and cerebral microflow.'
  },
  {
    id: 'fludrocortisone',
    name: 'Fludrocortisone Acetate (Florinef)',
    category: 'Pharmacotherapy',
    primaryAction: 'Synthetic mineralocorticoid; expands intravascular blood volume via renal sodium retention',
    standardDosingOrProtocol: '0.05–0.1 mg morning; co-administered with 2–3g sodium chloride and 2L fluid',
    tierOrVerdict: 'Caution / Strict Bounds',
    targetAxes: ['Vascular', 'Brain Fog / SCT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Requires regular potassium monitoring; primary pharmaceutical volume expander for POTS.'
  },
  {
    id: 'cromolyn-sodium',
    name: 'Cromolyn Sodium Oral (Gastrocrom)',
    category: 'Pharmacotherapy',
    primaryAction: 'Non-systemic mucosal mast cell stabilizer; locks gut epithelial barrier against food triggers',
    standardDosingOrProtocol: '100–200 mg in 4 oz water 20–30 min prior to meals; strictly non-absorbed (<1%)',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['MCAS', 'Brain Fog / SCT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: true,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Zero central sedation liability; the ideal non-sedating daytime stabilizer.'
  },
  {
    id: 'amlodipine',
    name: 'Amlodipine (Norvasc)',
    category: 'Pharmacotherapy',
    primaryAction: 'Dihydropyridine calcium channel blocker; relaxes peripheral arterial smooth muscle',
    standardDosingOrProtocol: '2.5–5.0 mg daily; patient baseline cardiovascular medication',
    tierOrVerdict: 'Caution / Strict Bounds',
    targetAxes: ['Vascular', 'Pelvic / Pudendal'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Pre-capillary dilation creates dependent lower-leg venous pooling; countered by farmer carries and Soleus pump.'
  },
  {
    id: 'telmisartan',
    name: 'Telmisartan (Micardis)',
    category: 'Pharmacotherapy',
    primaryAction: 'Angiotensin II AT1 receptor blocker + partial PPAR-gamma agonist; vascular anti-inflammatory',
    standardDosingOrProtocol: '20–40 mg morning; patient baseline cardiovascular medication',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Vascular', 'Brain Fog / SCT', 'MCAS'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Unique AT1 blocker that penetrates BBB and exerts neuroprotective PPAR-gamma microglial suppression.'
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. VITAMINS & NUTRACEUTICALS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'creatine',
    name: 'Creatine Monohydrate (Micronized Creapure®)',
    category: 'Vitamins & Nutraceuticals',
    primaryAction: 'High-energy phosphagen ATP buffer + spares 40–50% of hepatic SAMe methyl reserves for Slow COMT',
    standardDosingOrProtocol: '2.5–3.0g daily dissolved 100% transparently in warm liquid with morning meal; NO 20g loading',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Slow COMT', 'Brain Fog / SCT', 'Vascular', 'MCAS', 'Pelvic / Pudendal'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Critical methylation-sparing agent for Slow COMT Met/Met; delivers neuro-energetics to prefrontal circuits without catecholamine stimulation.'
  },
  {
    id: 'cdp-choline',
    name: "CDP Choline / Citicoline (Cytidine 5'-Diphosphocholine)",
    category: 'Vitamins & Nutraceuticals',
    primaryAction: 'Dual vagal α7nAChR anti-inflammatory reflex agonist + prefrontal acetylcholine precursor + Kennedy pathway endothelial membrane lipid repair',
    standardDosingOrProtocol: '250mg once daily in morning with food (titrate to 250–500mg max if tolerated; strictly avoid late-day dosing)',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Brain Fog / SCT', 'MCAS', 'Vascular', 'Slow COMT', 'Pelvic / Pudendal'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: true,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Synchronized across Condition-Element Matrix, Unified Protocol (Answer 5 & Morning Stabilise Stack), Flare Simulator, and Vascular Endothelial Shield. Rescues prefrontal cognitive chaining from histamine H3 shutdown without catecholamine stimulation or Slow COMT strain.'
  },
  {
    id: 'pea',
    name: 'Palmitoylethanolamide / PEA (Micronized / Levagen+)',
    category: 'Vitamins & Nutraceuticals',
    primaryAction: 'Endogenous lipid mediator activating nuclear PPAR-alpha; silences ALIAmide mast cell axis',
    standardDosingOrProtocol: '400–600 mg 2x daily with healthy fats (olive/avocado oil)',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['MCAS', 'Pelvic / Pudendal', 'Brain Fog / SCT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Primary non-sedating mast cell stabilizer; reduces pelvic visceral hyperalgesia via non-CB1 pathways.'
  },
  {
    id: 'vitamin-d3',
    name: 'Vitamin D3 (Cholecalciferol Liquid Drops)',
    category: 'Vitamins & Nutraceuticals',
    primaryAction: 'Genomic VDR transcription factor; downregulates mast cell FcεRI and induces eNOS',
    standardDosingOrProtocol: '2,000–5,000 IU daily in liquid MCT drops; target 50–70 ng/mL 25-OH D',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['MCAS', 'Brain Fog / SCT', 'Vascular', 'Slow COMT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Liquid drops eliminate excipient allergens; must be paired with K2 and Magnesium.'
  },
  {
    id: 'vitamin-k2',
    name: 'Vitamin K2 (Menaquinone MK-4 / MK-7)',
    category: 'Vitamins & Nutraceuticals',
    primaryAction: 'Carboxylates Matrix Gla Protein (MGP) and osteocalcin; steers calcium into bone, away from arteries',
    standardDosingOrProtocol: '100–200 mcg MK-7 or 5–15 mg MK-4 with fatty breakfast',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Vascular', 'Brain Fog / SCT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Crucial arterial elasticity protector; prevents vascular calcification driven by unbuffered calcium.'
  },
  {
    id: 'magnesium-threonate-glycinate',
    name: 'Magnesium L-Threonate & Bisglycinate / Malate',
    category: 'Vitamins & Nutraceuticals',
    primaryAction: 'Essential COMT enzymatic cofactor; NMDA receptor gatekeeper; elevates CSF magnesium',
    standardDosingOrProtocol: '144 mg elemental Mg via L-Threonate (morning) + 200 mg Glycinate/Malate (evening)',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Slow COMT', 'Brain Fog / SCT', 'Pelvic / Pudendal', 'Vascular'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Slow COMT (Met/Met) is dependent on magnesium as a rate-limiting catalyst to break down catecholamines.'
  },
  {
    id: 'quercetin-phytosome',
    name: 'Quercetin Phytosome (Phospholipid Complex)',
    category: 'Vitamins & Nutraceuticals',
    primaryAction: 'Inhibits intracellular calcium influx in mast cells and suppresses kinase signaling',
    standardDosingOrProtocol: '250–500 mg 1–2x daily 20 min before meals',
    tierOrVerdict: 'Therapeutic / Moderate',
    targetAxes: ['MCAS', 'Brain Fog / SCT', 'Slow COMT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Phytosome complex yields 20x higher bio-absorption than crude powder; use moderate doses in slow COMT.'
  },
  {
    id: 'l-citrulline',
    name: 'L-Citrulline Malate',
    category: 'Vitamins & Nutraceuticals',
    primaryAction: 'Bypasses hepatic arginase to elevate plasma L-arginine and upregulate eNOS nitric oxide',
    standardDosingOrProtocol: '1,500–3,000 mg daily on empty stomach',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Vascular', 'Pelvic / Pudendal', 'Brain Fog / SCT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Supports pudendal cavernous microperfusion and counteracts arterial stiffness.'
  },
  {
    id: 'hydroxocobalamin',
    name: 'Hydroxocobalamin / Adenosylcobalamin (Non-Methyl B12)',
    category: 'Vitamins & Nutraceuticals',
    primaryAction: 'Direct nitric oxide scavenger and non-methylated cobalamin source for slow COMT',
    standardDosingOrProtocol: '1,000–2,000 mcg sublingual lozenge 2–3x/week; avoid methylcobalamin',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Slow COMT', 'MCAS', 'Brain Fog / SCT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Scavenges peroxynitrite during MCAS flares without causing methyl-trap panic in Met/Met phenotypes.'
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. BOTANICALS & PHYTOCANNABINOIDS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'broad-spectrum-cbd',
    name: 'Broad-Spectrum CBD (0.0% THC / Phytocannabinoid-Rich)',
    category: 'Botanicals & Cannabinoids',
    primaryAction: 'Negative allosteric modulator of CB1; binds 5-HT1A, TRPV1 and suppresses microglial NF-κB',
    standardDosingOrProtocol: '15–30 mg sublingual oil drops held under tongue for 90 seconds',
    tierOrVerdict: 'Therapeutic / Moderate',
    targetAxes: ['Brain Fog / SCT', 'MCAS', 'Pelvic / Pudendal', 'Slow COMT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Must be strictly THC-free: THC is a CB1 agonist that causes hippocampal cognitive slowing and hyperalgesia.'
  },
  {
    id: 'cbg-cannabigerol',
    name: 'Cannabigerol / CBG Isolate (Pure Cannabinoid)',
    category: 'Botanicals & Cannabinoids',
    primaryAction: 'Alpha-2 adrenergic receptor agonist & 5-HT1A antagonist; gastrointestinal anti-inflammatory',
    standardDosingOrProtocol: '10–20 mg morning/midday; non-sedating focus cannabinoid',
    tierOrVerdict: 'Therapeutic / Moderate',
    targetAxes: ['Brain Fog / SCT', 'MCAS', 'Slow COMT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Known as the "neurogenic" cannabinoid: supports prefrontal alertness without central sedation.'
  },
  {
    id: 'beta-caryophyllene',
    name: 'Beta-Caryophyllene / BCP (Selective CB2 Terpene)',
    category: 'Botanicals & Cannabinoids',
    primaryAction: 'Dietary phytocannabinoid with 100% selective CB2 receptor agonism; zero CB1 psychotropic activity',
    standardDosingOrProtocol: '25–50 mg daily in carrier oil with meals',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['MCAS', 'Brain Fog / SCT', 'Pelvic / Pudendal'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Directly suppresses mast cell and microglial mediator release while leaving cognitive networks clear.'
  },
  {
    id: 'perilla-frutescens',
    name: 'Perilla Frutescens Extract (High-Luteolin Botanical)',
    category: 'Botanicals & Cannabinoids',
    primaryAction: 'Crosses blood-brain barrier; luteolin & rosmarinic acid silence dural mast cells and microglia',
    standardDosingOrProtocol: '100–300 mg daily with meals; standardized to luteolin and rosmarinic acid',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['MCAS', 'Brain Fog / SCT', 'Vascular'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Dr. Theoharides benchmark botanical for clearing cranial mast cell brain fog.'
  },
  {
    id: 'caffeine-coffee',
    name: 'High-Dose Caffeine / Unfiltered Coffee (>100mg)',
    category: 'Botanicals & Cannabinoids',
    primaryAction: 'Adenosine receptor antagonist; surges adrenal epinephrine; mycotoxins liberate histamine',
    standardDosingOrProtocol: 'Strictly taper or avoid (replace with L-Theanine + green tea or decaf)',
    tierOrVerdict: 'Contraindicated / Severe Flare Risk',
    targetAxes: ['Slow COMT', 'MCAS', 'Pelvic / Pudendal', 'Brain Fog / SCT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: true,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Overloads slow COMT with un-cleared catecholamines; triggers pelvic floor guarding and anorgasmia.'
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. CORE CLINICAL PHENOTYPES & AXES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'phenotype-mcas',
    name: 'Mast Cell Activation Syndrome (MCAS & Histamine Axis)',
    category: 'Clinical Phenotypes',
    primaryAction: 'Hyper-responsive mucosal, dural, and perivascular mast cell mediator exocytosis',
    standardDosingOrProtocol: 'Baseline stabilization: Oral Cromolyn + PEA + Vitamin D3; avoid sulfites & heat',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['MCAS'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: true,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Fully mapped across all sections; key trigger of fluctuating neurocognitive symptoms.'
  },
  {
    id: 'phenotype-sct-fog',
    name: 'Brain Fog & Sluggish Cognitive Tempo (Neuro-Cognitive SCT)',
    category: 'Clinical Phenotypes',
    primaryAction: 'Microglial TLR4 priming, DMN daydreaming drift, and prefrontal hypo-arousal',
    standardDosingOrProtocol: 'Roflumilast + Niko Niko jogging + Guanfacine; avoid anticholinergics & HIIT',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Brain Fog / SCT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: true,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Differentiated from classic hyperactive ADHD; central focus of the IQ & Fatigue Analyzer.'
  },
  {
    id: 'phenotype-vascular',
    name: 'Vascular & Orthostatic Dysregulation (Dysautonomia Axis)',
    category: 'Clinical Phenotypes',
    primaryAction: 'Endothelial nitric oxide uncoupling, splanchnic venous pooling, cerebral hypoperfusion',
    standardDosingOrProtocol: 'Farmer carries + Vitamin K2 + Recumbent cardio + Hydration/Electrolytes',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Vascular'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: true,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Co-managed with baseline Amlodipine/Telmisartan; addressed in Vascular Health section.'
  },
  {
    id: 'phenotype-slow-comt',
    name: 'Slow COMT (Catechol-O-Methyltransferase Met/Met)',
    category: 'Clinical Phenotypes',
    primaryAction: 'Enzymatic bottleneck in prefrontal and peripheral catecholamine degradation',
    standardDosingOrProtocol: 'Magnesium L-Threonate + Hydroxocobalamin; eliminate caffeine & high-dose methyl donors',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Slow COMT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: true,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Governs all pharmacotherapy pacing and exercise intensity limits.'
  },
  {
    id: 'phenotype-pelvic-anorgasmia',
    name: 'Pelvic Floor Tone & Lifelong Anorgasmia (Pudendal Axis)',
    category: 'Clinical Phenotypes',
    primaryAction: 'Pre-existing pudendal nerve gating mismatch, pelvic hypertonia, visceral hypersensitivity',
    standardDosingOrProtocol: '90/90 decompression + PEA + L-Citrulline; zero high-impact axial loads',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Pelvic / Pudendal'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: true,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Lifelong condition predating treatments; addressed with somatic release and vascular microperfusion.'
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. BIOMARKERS & DIAGNOSTICS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'biomarker-tryptase',
    name: 'Serum Tryptase (Baseline vs. Acute Flare Window)',
    category: 'Biomarkers & Diagnostics',
    primaryAction: 'Confirms mast cell exocytosis; formula: baseline x 1.2 + 2 ng/mL within 1–4h of flare',
    standardDosingOrProtocol: 'Blood draw at baseline quiescent state, repeated 60–120 min post-acute flare',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['MCAS'],
    presence: {
      efficacyMatrix: false,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: true,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Consensus biomarker for formal MCAS diagnostic criteria according to Valent & Afrin.'
  },
  {
    id: 'biomarker-urine-pgd2-histamine',
    name: '24-Hour Urine Prostaglandin D2 (PGD2) & N-Methylhistamine',
    category: 'Biomarkers & Diagnostics',
    primaryAction: 'Captures delayed mast cell mediator release filtered by kidneys; highly heat-sensitive',
    standardDosingOrProtocol: '24-hour collection kept strictly on wet ice / chilled cold storage',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['MCAS', 'Vascular'],
    presence: {
      efficacyMatrix: false,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Higher clinical sensitivity for non-clonal MCAS than isolated random serum tryptase.'
  },
  {
    id: 'biomarker-nasa-lean-stand',
    name: 'NASA 10-Minute Lean Test / Active Stand Test',
    category: 'Biomarkers & Diagnostics',
    primaryAction: 'Assesses heart rate delta, blood pressure, and cerebral perfusion during orthostasis',
    standardDosingOrProtocol: '5 min supine resting, followed by 10 min standing with shoulders against wall',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Vascular', 'Brain Fog / SCT'],
    presence: {
      efficacyMatrix: false,
      exerciseEngine: true,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: true,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Differentiates postural orthostatic tachycardia (POTS) from orthostatic hypotension.'
  },
  {
    id: 'biomarker-semg-pudendal',
    name: 'Surface EMG of Pelvic Floor & Pudendal Somatosensory Evoked Potentials',
    category: 'Biomarkers & Diagnostics',
    primaryAction: 'Quantifies resting microvolt tone of pubococcygeus and pudendal nerve sensory conduction velocity',
    standardDosingOrProtocol: 'Specialist pelvic physical therapy evaluation; resting baseline <2.0 uV',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Pelvic / Pudendal'],
    presence: {
      efficacyMatrix: false,
      exerciseEngine: false,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Validates hypertonic pelvic resting state versus hypocontractility; critical for tailoring biofeedback.'
  },
  {
    id: 'methylene-blue-usp',
    name: 'Methylene Blue (USP Grade / Low-Dose 15–30 mg)',
    category: 'Pharmacotherapy',
    primaryAction: 'Direct sGC inhibitor (reverses vasoplegia/sock marks) & Complex I–IV mitochondrial electron donor',
    standardDosingOrProtocol: '15–30 mg once daily in morning diluted in water with Vitamin C via glass straw',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Vascular', 'Brain Fog / SCT', 'MCAS', 'Slow COMT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      exercisesSection: false,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Direct countermeasure for Amlodipine sock marks and splanchnic pooling; bypasses stalled mitochondrial complexes to fuel prefrontal CMRO2 for CDS. Contraindicated with SSRIs.'
  },
  {
    id: 'agmatine-sulfate',
    name: 'Agmatine Sulfate (Endogenous Imidazoline / α2A Neuromodulator)',
    category: 'Vitamins & Nutraceuticals',
    primaryAction: 'Endogenous I1/α2A adrenoreceptor agonist, selective NR2B NMDA blocker, and selective iNOS inhibitor',
    standardDosingOrProtocol: '500–1,000 mg orally once or twice daily on an empty stomach',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Brain Fog / SCT', 'Slow COMT', 'Pelvic / Pudendal', 'Vascular', 'MCAS'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      exercisesSection: false,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: false,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Endogenous Guanfacine equivalent; closes prefrontal dendritic HCN channels to tune delay-period firing, preserves eNOS, and suppresses pudendal hypertonicity.'
  },
  {
    id: 'tudca-chaperone',
    name: 'Tauroursodeoxycholic Acid (TUDCA / ER Stress Chaperone)',
    category: 'Vitamins & Nutraceuticals',
    primaryAction: 'Hydrophilic chemical chaperone resolving Endoplasmic Reticulum (ER) stress, protecting endothelial claudin-5, and silencing non-IgE mast cell degranulation',
    standardDosingOrProtocol: '250–500 mg orally once or twice daily with food',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['MCAS', 'Brain Fog / SCT', 'Vascular', 'Slow COMT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      exercisesSection: false,
      pharmaMatrix: true,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Inhibits the Unfolded Protein Response (UPR); prevents ER-stress-induced store-operated calcium entry in mast cells and reinforces capillary tight junctions against sock-mark edema.'
  },
  {
    id: 'transcranial-photobiomodulation',
    name: 'Transcranial Near-Infrared Photobiomodulation (tPBM: 810 nm / 1064 nm)',
    category: 'Cognitive & Brain Exercises',
    primaryAction: 'Photo-dissociation of inhibitory NO from Cytochrome c Oxidase (Complex IV), surging prefrontal ATP, pulsed CBF, and meningeal lymphatic flow',
    standardDosingOrProtocol: '10–15 min, 3–4x weekly; 15–30 J/cm² of 810 nm or 1064 nm light to prefrontal (F3/F4) & suboccipital cradle',
    tierOrVerdict: 'Gold Standard / High Efficacy',
    targetAxes: ['Brain Fog / SCT', 'Vascular', 'MCAS', 'Slow COMT'],
    presence: {
      efficacyMatrix: true,
      exerciseEngine: false,
      exercisesSection: true,
      pharmaMatrix: false,
      unifiedProtocol: true,
      flareSimulator: false,
      vascularSection: true,
      evidenceCompendium: true
    },
    crossCheckNotes: 'Direct biophysical reversal of CDS prefrontal hypofrontality without catecholamines; stimulates glymphatic deep cervical drainage and calms dural mast cells.'
  }
];

export const INVENTORY_CATEGORIES: InventoryCategory[] = [
  'Physical Exercise',
  'Cognitive & Brain Exercises',
  'Pharmacotherapy',
  'Vitamins & Nutraceuticals',
  'Botanicals & Cannabinoids',
  'Clinical Phenotypes',
  'Biomarkers & Diagnostics'
];

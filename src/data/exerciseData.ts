import { ExerciseModality } from '../types';

export const EXERCISE_MODALITIES: ExerciseModality[] = [
  {
    id: 'slow-jogging',
    name: 'Very Slow Jogging (~4 km/h / Japanese "Niko Niko" Pace)',
    intensityCategory: 'Ultra-Gentle / Zone 1',
    verdict: 'Gold Standard (Therapeutic)',
    executiveImpact:
      'Optimum executive & alerting reset: Continuous rhythmic cadence (~160-180 steps/min) and bilateral optic flow stimulate cerebellar-thalamocortical circuits, downregulating intrusive Default Mode Network (DMN) daydreaming while elevating prefrontal alertness without mitochondrial ATP exhaustion.',
    mcasDegranulationRisk: 'Negligible',
    visceralGutImpact:
      'Splanchnic blood flow preserved at >95% baseline. Zero gut ischemia, zero bacterial endotoxin (LPS) leakage. Gentle rhythmic vertical oscillation supports enteric peristalsis and lymphatic drainage without triggering visceral nociceptive C-fibers.',
    mechanisms: {
      thermalStress:
        'Core body temperature remains flat (elevation <0.2°C), safely below the activation threshold of heat-sensitive mast cell TRPV1/TRPV4 channels.',
      sympatheticLoad:
        'Heart rate stays strictly in Zone 1 (<115-125 bpm). Minimal circulating noradrenaline; stimulates post-exercise parasympathetic rebound.',
      splanchnicPerfusion:
        'Normal visceral perfusion maintained; avoids the exercise-induced gut hypoperfusion and mucosal barrier breakdown seen in higher intensities.',
      rhythmicNeuromodulation:
        'Rhythmic, low-impact foot-strikes provide gentle proprioceptive entrainment that resets the sluggish internal clock of SCT without triggering adrenergic fatigue.'
    },
    protocolRecommendation:
      'Speed: 3.5 - 4.5 km/h (literally walking pace, but with a tiny running bounce). Cadence: 160-180 short steps/minute. Duration: 15 to 30 minutes in cool ambient air or on an indoor treadmill. Conversational rule: You must be able to smile ("Niko Niko") and speak comfortably in full sentences without breathing hard.',
    clinicalPearls: [
      'The exact sweet spot for ADHD + SCT + MCAS: provides the dopamine/alertness benefit of cardiovascular movement with zero histamine dump.',
      'Generates steady-state endocannabinoids (Anandamide) and Brain-Derived Neurotrophic Factor (BDNF) without microglial inflammatory triggers.',
      'Can be performed without pre-workout antihistamine loading because it generates near-zero mast cell degranulation.',
      'Acts as a somatic grounding tool when thoughts feel scattered or when sluggish cognitive tempo creates morning inertia.'
    ]
  },
  {
    id: 'hiit-anaerobic',
    name: 'High-Intensity Interval Training (HIIT & Tabata)',
    intensityCategory: 'High-Intensity / Anaerobic',
    verdict: 'Contraindicated (High Flare Risk)',
    executiveImpact:
      'Severe post-exercise cognitive crash: While initial minutes feel stimulating due to acute adrenaline, the massive downstream surge of systemic histamine and cytokines triggers presynaptic H3 autoreceptor shutdown, plunging the patient into 24-72 hours of profound brain fog, lexical retrieval failure, and SCT lethargy.',
    mcasDegranulationRisk: 'Extreme',
    visceralGutImpact:
      'Catastrophic gut ischemia-reperfusion: Splanchnic blood flow drops by up to 80% to feed working muscles. Epithelial tight junctions (ZO-1, claudin-1) degrade, allowing bacterial lipopolysaccharide (LPS) to flood portal circulation, triggering acute enteric mast cell degranulation and severe visceral hyperalgesia.',
    mechanisms: {
      thermalStress:
        'Rapid, steep spike in core body temperature (>1.0°C), directly triggering temperature-sensitive TRPV1 and TRPV4 ion channels on cutaneous and meningeal mast cells.',
      sympatheticLoad:
        'Massive catecholaminergic surge (supraphysiological adrenaline/noradrenaline). Adrenaline binds sensitized α1 and β2 receptors on mast cells, provoking explosive mediator exocytosis.',
      splanchnicPerfusion:
        'Acute mesenteric vasoconstriction induces intestinal epithelial hypoxia followed by oxidative reperfusion damage ("leaky gut of exercise").',
      rhythmicNeuromodulation:
        'Dysregulated autonomic storm: Sympathetic overdrive followed by severe parasympathetic exhaustion; overwhelms thalamocortical sensory gating.'
    },
    protocolRecommendation:
      'Strictly avoid. If interval training is mandated, replace with "micro-intervals" of slow walking interspersed with very slow jogging, never crossing anaerobic threshold.',
    clinicalPearls: [
      'The #1 exercise trigger for prolonged MCAS and brain fog flares in neurodivergent patients.',
      'Patients frequently report feeling "poisoned," "drugged," or having severe throbbing sinus pressure within 1-2 hours after a HIIT workout.',
      'Lactic acidosis (pH < 7.2) directly activates Acid-Sensing Ion Channels (ASICs) on sensory nerves and triggers mast cell degranulation.'
    ]
  },
  {
    id: 'steady-aerobic',
    name: 'Moderate-to-High Steady-State Cardio (Running 8-10 km/h / 45+ Min Spin)',
    intensityCategory: 'Moderate Aerobic',
    verdict: 'Caution / Modified Only',
    executiveImpact:
      'Unpredictable & flare-dependent: Moderate aerobic work can boost executive dopamine, but prolonged duration (>30 mins) builds cumulative thermal and histamine debt, resulting in delayed afternoon brain fog where "thoughts slip through fingers."',
    mcasDegranulationRisk: 'High',
    visceralGutImpact:
      'Cumulative splanchnic hypoperfusion accumulates after 20-30 minutes. High dehydration risk and prolonged intra-abdominal pressure can trigger post-run nausea, bloating, and visceral hypersensitivity flare-ups.',
    mechanisms: {
      thermalStress:
        'Sustained metabolic heat production over 30-60 minutes overwhelms heat dissipation, activating thermal mast cell degranulation.',
      sympatheticLoad:
        'Sustained elevated noradrenaline; if comorbid with POTS/dysautonomia, peripheral vasodilation causes lower extremity venous pooling and cerebral hypoperfusion.',
      splanchnicPerfusion:
        'Progressive reduction in visceral blood flow over time, increasing gut barrier permeability.',
      rhythmicNeuromodulation:
        'Beneficial in first 15 minutes, but transitions into neuro-immune exhaustion as duration exceeds individual energetic capacity.'
    },
    protocolRecommendation:
      'Cap duration at 15 to 20 minutes maximum. Keep ambient room temperature cool (<20°C / 68°F). Utilize pre-exercise cooling vests or sip ice water. Prefer recumbent cycling or swimming in cool water (<27°C) to eliminate orthostatic venous pooling.',
    clinicalPearls: [
      'Duration is the critical poison: 15 minutes is often well-tolerated, whereas 40 minutes reliably triggers an MCAS flare.',
      'In hot weather, running outdoors combines airborne pollen/histamines with thermal stress—an almost guaranteed trigger for sinus mast cell activation and cribriform fog.',
      'Hydrate with chilled electrolyte water before and during exercise to support blood volume.'
    ]
  },
  {
    id: 'controlled-strength',
    name: 'Controlled Low-Rep Resistance Training (3-5 Reps / Long Rest)',
    intensityCategory: 'Controlled Resistance',
    verdict: 'Beneficial If Controlled',
    executiveImpact:
      'High executive and cognitive benefit: Stimulates muscle-derived Irisin and Neurotrophin-3, boosting Brain-Derived Neurotrophic Factor (BDNF) and prefrontal dopamine sensitivity without causing metabolic exhaustion or brain fog.',
    mcasDegranulationRisk: 'Low-Moderate',
    visceralGutImpact:
      'Zero splanchnic ischemia. Brief sets do not divert visceral blood flow. Increases insulin sensitivity and strengthens core intra-abdominal stabilizing musculature.',
    mechanisms: {
      thermalStress:
        'Minimal thermal rise: Short set duration (10-15 seconds) followed by long passive rest (2-3 minutes) allows core temperature to remain baseline.',
      sympatheticLoad:
        'Brief, controlled sympathetic burst followed by immediate autonomic settling; avoids continuous catecholamine accumulation.',
      splanchnicPerfusion:
        'Splanchnic blood flow remains completely intact between sets.',
      rhythmicNeuromodulation:
        'High motor unit recruitment and proprioceptive feedback enhance frontostriatal motor control networks without depleting prefrontal ATP.'
    },
    protocolRecommendation:
      'Focus on compound movements with strict technique. Rep range: 3 to 6 reps per set. Rest intervals: 2 to 3 full minutes between sets. Never train to muscular failure (leave 2-3 reps in reserve / RPE 7-8). Critical breathing rule: Avoid Valsalva breath-holding (exhale forcefully on exertion to prevent intracranial venous pressure spikes).',
    clinicalPearls: [
      'Muscle contraction releases Interleukin-6 (myokine IL-6), which functions as a potent systemic anti-inflammatory, directly counteracting macrophage-derived inflammatory cytokines.',
      'Contrast sharply with high-rep bodybuilding / "pump" training (which causes lactic acidosis and triggers mast cells).',
      'If sinus pressure is active, avoid heavy overhead presses or inverted movements that elevate cavernous sinus venous pressure.'
    ]
  },
  {
    id: 'somatic-vagal',
    name: 'Somatic Vagal Movement & Reformer Pilates',
    intensityCategory: 'Somatic / Restorative',
    verdict: 'Gold Standard (Therapeutic)',
    executiveImpact:
      'Restores insular cognitive bandwidth: Deep somatic proprioception and vagal efferent pacing calm the hyperactive Salience Network, liberating working memory capacity and dramatically improving situational fluency in social environments.',
    mcasDegranulationRisk: 'Negligible',
    visceralGutImpact:
      'Directly activates the Cholinergic Anti-Inflammatory Pathway via the efferent vagus nerve. Acetylcholine binding to α7 nicotinic acetylcholine receptors on enteric macrophages and mast cells directly suppresses TNF-α and histamine release.',
    mechanisms: {
      thermalStress:
        'Zero thermal elevation; completely eliminates temperature-dependent mast cell activation.',
      sympatheticLoad:
        'Suppresses locus coeruleus hyperactivity; elevates heart rate variability (HRV) and respiratory sinus arrhythmia.',
      splanchnicPerfusion:
        'Enhances splanchnic microvascular perfusion and supports mucosal barrier repair.',
      rhythmicNeuromodulation:
        'Calms visceral hyper-afference ascending via unmyelinated C-fibers, closing the spinal pain gate and clearing insular interoceptive noise.'
    },
    protocolRecommendation:
      'Reformer Pilates with horizontal springs (POTS-safe), somatic walking, gentle floor mobility, or structured resonance frequency breathing (5.5 breaths/min with prolonged exhalations). Duration: 20 to 45 minutes.',
    clinicalPearls: [
      'The single best modality during an active MCAS or visceral flare-up.',
      'Horizontal positioning on a Pilates reformer eliminates orthostatic tachycardia while still providing muscular tone and proprioceptive input.',
      'Can be performed even when experiencing sinus congestion or moderate brain fog.'
    ]
  },
  {
    id: 'farmers-walks',
    name: 'Farmer\'s Walks & Loaded Carries (Zone 2/3/4 Modulation)',
    intensityCategory: 'Controlled Resistance',
    verdict: 'Beneficial If Controlled',
    executiveImpact:
      'Powerful executive anchoring & somatic integration: Massive proprioceptive grip/core tension coupled with rhythmic bipedal gait forces frontoparietal attention into absolute presence. Calms ADHD mental restlessness and eliminates SCT daydreaming drift through high somatic feedback.',
    mcasDegranulationRisk: 'Low-Moderate',
    visceralGutImpact:
      'Strengthens intra-abdominal stabilizing wall (transversus abdominis, quadratus lumborum) and supports visceral organ suspension. Splanchnic blood flow is preserved far better than running because aerobic demand is distributed across full-body isometric tension rather than continuous mesenteric vasoconstriction.',
    mechanisms: {
      thermalStress:
        'Intermittent heat profile: Sets of 45-90 seconds generate localized muscular heat without sustaining core temperature elevation (>0.3°C), keeping mast cells below the TRPV4 degranulation threshold if rest intervals are honored.',
      sympatheticLoad:
        'Controlled adrenergic pacing: In Zone 2 (nasal breathing, moderate load), noradrenaline remains low. In Zone 4 (heavy maximal load), adrenaline spikes sharply—requiring strict load governance to prevent mast cell degranulation.',
      splanchnicPerfusion:
        'Visceral perfusion remains intact between sets; avoids the continuous ischemic shunting of high-speed running.',
      rhythmicNeuromodulation:
        'Active Calf Muscle Pump Synergy: The cyclical gastrocnemius/soleus contractions while bearing load mechanically force pooled venous blood back to the heart—directly neutralizing the lower-extremity venous pooling caused by Amlodipine!'
    },
    protocolRecommendation:
      'Zone 2 Pacing Rule (The Sweet Spot): Use 20% to 35% of total bodyweight (divided between hands). Walk steadily for 60 to 90 seconds per carry. Maintain strict continuous nasal or pursed-lip breathing (NEVER hold breath / NO Valsalva). Rest 90 to 120 seconds between carries. Perform 4 to 6 rounds in cool ambient air.',
    clinicalPearls: [
      'Amlodipine Countermeasure: Amlodipine causes pre-capillary vasodilation and dependent venous pooling in the lower legs. Farmer\'s walks act as an active hemodynamic pump, driving venous return and preventing post-workout leg swelling.',
      'Telmisartan Protection: Telmisartan\'s PPAR-γ agonism and AT1 blockade protect against vascular permeability, but combined with Amlodipine, peripheral resistance drops fast when weights are released. Rule: NEVER stand motionless after dropping weights; continue walking slowly for 15-20 seconds to prevent orthostatic gray-out.',
      'The Valsalva Warning for Sinus Histamine: If weights are too heavy (Zone 4), you instinctively brace and hold your breath. This spikes cavernous sinus and jugular venous pressure, forcing sinus histamine across the cribriform plate into the frontal lobes. Always breathe continuously while carrying!'
    ]
  }
];

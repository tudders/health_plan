import { MatrixElement, ConditionProfileKey } from '../types';

export interface ConditionProfileMeta {
  key: ConditionProfileKey;
  label: string;
  shortLabel: string;
  badge: string;
  corePathophysiology: string;
  primaryRiskFactor: string;
  therapeuticTarget: string;
}

export const CONDITION_PROFILES: Record<ConditionProfileKey, ConditionProfileMeta> = {
  mcas: {
    key: 'mcas',
    label: 'Mast Cell Activation Syndrome (MCAS)',
    shortLabel: 'MCAS & Histamine',
    badge: 'MCAS Axis',
    corePathophysiology: 'Hyper-reactive mast cell degranulation discharging histamine, tryptase, PGD2, and leukotrienes across mucosal, neural, and dural borders.',
    primaryRiskFactor: 'Sudden temperature shifts, mechanical vibration, fermented ingredients, microbial endotoxemia (LPS), and unbuffered adrenergic surges.',
    therapeuticTarget: 'Membrane stabilization (FcεRI receptor silencing), gut barrier mucosal locking, and H1/H2 histamine receptor blockade.'
  },
  'brain-fog': {
    key: 'brain-fog',
    label: 'Brain Fog & Neuroinflammation (SCT)',
    shortLabel: 'Brain Fog & SCT',
    badge: 'Neuro-Cognitive',
    corePathophysiology: 'Microglial TLR4 receptor priming, chronic central neuroinflammation, sluggish cognitive tempo, and delayed prefrontal executive processing.',
    primaryRiskFactor: 'Peripheral cytokine leakage crossing blood-brain barrier, central histamine surge, hippocampal CB1 downregulation, and neurovascular uncoupling.',
    therapeuticTarget: 'Microglial phenotypic reset (M1 pro-inflammatory to M2 neuroprotective), cAMP elevation via PDE4 inhibition, and acetylcholine disinhibition.'
  },
  vascular: {
    key: 'vascular',
    label: 'Vascular & Orthostatic Dysregulation',
    shortLabel: 'Vascular / Orthostatic',
    badge: 'Vascular Axis',
    corePathophysiology: 'Endothelial nitric oxide (eNOS) uncoupling, splanchnic venous pooling, cerebral hypoperfusion, and arterial stiffness or microvascular shear stress.',
    primaryRiskFactor: 'Prolonged upright stillness, dehydration, warm ambient temps, microvascular calcification, and post-prandial splanchnic stealing.',
    therapeuticTarget: 'eNOS upregulation, red blood cell deformability (hemorheology), active MGP carboxylation, and splanchnic vasoconstrictive tone.'
  },
  'slow-comt': {
    key: 'slow-comt',
    label: 'Slow COMT (Catechol-O-Methyltransferase Met/Met)',
    shortLabel: 'Slow COMT (Met/Met)',
    badge: 'Catechol Clearance',
    corePathophysiology: 'Enzymatic bottleneck in prefrontal and peripheral degradation of catecholamines (epinephrine, norepinephrine, and dopamine).',
    primaryRiskFactor: 'Exogenous adrenergic stimulants, prolonged half-life quinones, methyl donors, and unpaced high-cadence anaerobic exertion.',
    therapeuticTarget: 'Magnesium cofactor support, SAMe/SAH ratio optimization, avoidance of accumulated adrenergic sensitizers, and gentle clearance pacing.'
  },
  pelvic: {
    key: 'pelvic',
    label: 'Pelvic Floor Tone & Lifelong Anorgasmia',
    shortLabel: 'Pelvic & Pudendal',
    badge: 'Pelvic / Pudendal',
    corePathophysiology: 'Pre-existing pudendal nerve sensory gating mismatch, chronic pelvic floor hypertonicity, visceral hypersensitivity, and autonomic sympathetic predominance.',
    primaryRiskFactor: 'Axial impact vibration, intra-abdominal valsalva pressure, chronic cannabis-induced visceral hyperalgesia rebound, and sympathetic vasoconstriction.',
    therapeuticTarget: 'Somatic myofascial decompression, PPAR-α non-CB1 visceral gating, pudendal microvascular perfusion, and cortical sexual disinhibition.'
  }
};

export const MATRIX_ELEMENTS: MatrixElement[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. PHYSICAL EXERCISE MODALITIES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'slow-jogging',
    name: 'Very Slow Jogging (~4 km/h / Japanese "Niko Niko" Pace)',
    category: 'Physical Exercise',
    deliveryOrDosing: '15–30 min continuous; tiny gentle steps (~160–180 cadence); cool ambient temperature',
    overallVerdict: 'Gold Helper',
    overallRating: 4.8,
    overallStars: '★★★★★',
    summary: 'The premier cardiovascular reset for ADHD + SCT + MCAS. Rhythmic bilateral optic flow activates frontostriatal attention with zero thermal spike, splanchnic ischemia, or mast cell degranulation.',
    exerciseLimits: {
      maxDuration: '15 to 30 minutes continuous (cap at 20 min in warm environments)',
      exertionCeiling: 'RPE 2–3 (Zone 1, Niko Niko pace - must comfortably converse or smile with 100% nasal breathing)',
      weeklyFrequency: '3 to 5 sessions / week',
      recoveryRest: 'Immediate seated or supine 90/90 pelvic decompression; zero post-exertional fatigue'
    },
    clinicalConsiderations: [
      'Thermal Ceiling & MCAS Safety: Keep pace strictly within "Niko Niko" bounds (you must comfortably smile, sing, or converse with 100% closed-mouth nasal breathing) to prevent core temperature rising >0.2°C, staying well beneath the mast cell TRPV1/TRPV4 trigger threshold.',
      'SCT Cerebellar Pacing: Continuous rhythmic optic flow synchronizes cerebellar-thalamocortical circuits, clearing morning sluggish cognitive tempo brain fog and inertia without drawing down adrenal catecholamines.',
      'Pudendal Sparing Footwork: Cadence must be maintained high (~160–180 steps/min) with ultra-short midfoot strides landing directly beneath the center of gravity to eliminate pelvic axial concussion and protect pudendal nerve conduction.',
      'Post-Jog Hemodynamic Transition: Immediately upon finishing, avoid abrupt stillness; spend 3–5 minutes in seated or supine 90/90 pelvic decompression to allow lower-limb blood pooling to equilibrate centrally.'
    ],
    keyContraindications: [
      'Ambient temperature exceeding 24°C (75°F) or direct unshaded midday sun (thermal mast cell trigger).',
      'Exceeding nasal breathing threshold into anaerobic mouth panting (triggers catecholamine flooding in Slow COMT).'
    ],
    conditionImpacts: {
      mcas: {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Core body temperature remains flat (elevation <0.2°C), safely below the activation threshold of heat-sensitive mast cell TRPV1/TRPV4 channels. Zero splanchnic ischemia or LPS gut leakage.',
        clinicalPearl: 'Can be executed safely without prophylactic antihistamines; delivers cardiovascular benefits with negligible histamine mediator dumping.'
      },
      'brain-fog': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Continuous rhythmic cadence (~160–180 steps/min) and bilateral optic flow stimulate cerebellar-thalamocortical circuits, suppressing DMN daydreaming and elevating prefrontal alertness without ATP depletion.',
        clinicalPearl: 'The definitive neuro-cognitive reset for Sluggish Cognitive Tempo (SCT) morning brain inertia.'
      },
      vascular: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Rhythmic soleus and gastrocnemius contraction powerfully propels pooled splanchnic and femoral venous blood back to the right atrium, boosting stroke volume and endothelial shear signaling.',
        clinicalPearl: 'Dramatically reduces lower extremity orthostatic venous pooling without causing tachycardia or exercise collapse.'
      },
      'slow-comt': {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Heart rate remains strictly in Zone 1 (<115–125 bpm). Minimal circulating epinephrine or noradrenaline leaves sluggish COMT enzymes completely unburdened and promotes parasympathetic rebound.',
        clinicalPearl: 'Generates steady-state endocannabinoids (anandamide) and BDNF without triggering catecholamine toxicity or insomnia.'
      },
      pelvic: {
        rating: 4.6,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Ultra-short stride length and soft midfoot bounce eliminate high axial impact and Valsalva intra-abdominal pressure spikes, preventing pudendal nerve concussion while promoting gentle reciprocal pelvic mobility.',
        clinicalPearl: 'Maintain soft, relaxed hips and breathe strictly diaphragmatically into the pelvis during the jog.'
      }
    }
  },
  {
    id: 'farmers-walks',
    name: "Farmer's Walks & Loaded Carries (Zone 2/3 Modulation)",
    category: 'Physical Exercise',
    deliveryOrDosing: '20% to 35% total bodyweight split between hands; 60–90 second walks; strict continuous nasal breathing',
    overallVerdict: 'Moderate Helper',
    overallRating: 4.1,
    overallStars: '★★★★☆',
    summary: 'High-proprioception frontoparietal anchor that strengthens intra-abdominal wall and drives calf muscle venous return, counteracting lower-extremity blood pooling.',
    exerciseLimits: {
      maxDuration: '4 to 6 total rounds (60–90 seconds per carry)',
      exertionCeiling: 'RPE 5–6 (Zone 2/3, continuous pursed-lip or nasal breathing; absolutely zero Valsalva breath-holding)',
      weeklyFrequency: '2 sessions / week',
      recoveryRest: '90 to 120 seconds active rest between carries; keep walking slowly 15s after dropping load'
    },
    clinicalConsiderations: [
      'Zero-Valsalva Breath Mandate: Holding breath under load drastically spikes intra-abdominal and intracranial pressure, driving sinus and meningeal mast cell degranulation and aggravating pudendal canal compression.',
      'Active Recovery (Anti-Syncope): Never stand motionless immediately after setting weights down; walk slowly unloaded for 15–20 seconds to allow the muscle pump to stabilize venous return and prevent acute orthostatic gray-out.',
      'Amlodipine Pooling Countermeasure: Mechanically activates deep soleus/gastrocnemius intramuscular venous plexuses, reversing dependent ankle edema caused by dihydropyridine calcium channel blocker therapy.',
      'Dosing & Cadence Ceiling: Cap sets at 60–90 seconds with 90–120s passive rest; stop well before muscular failure to prevent lactic acidosis and secondary histamine release.'
    ],
    keyContraindications: [
      'Heavy loads (>35% bodyweight) requiring Valsalva breath-holding or violent abdominal bracing.',
      'Active systemic MCAS flare with marked dermatographia or cutaneous pressure urticaria.'
    ],
    conditionImpacts: {
      mcas: {
        rating: 3.8,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Intermittent carries under 90s avoid sustained core hyperthermia, maintaining mast cells below TRPV4 activation if rest intervals are strictly honored.',
        clinicalPearl: 'Never hold breath: Valsalva spikes jugular and cavernous sinus pressure, driving sinus histamines across cribriform plate.'
      },
      'brain-fog': {
        rating: 4.4,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Massive grip and core proprioceptive feedback anchors frontoparietal networks into absolute presence, dissipating ADHD restlessness and SCT daydreaming drift.',
        clinicalPearl: 'Immediate grounding tool when experiencing cognitive detachment or lexical retrieval stalls.'
      },
      vascular: {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Cyclical gastrocnemius/soleus contractions while bearing load mechanically pump pooled venous blood out of dependent limbs, directly neutralizing orthostatic pooling.',
        clinicalPearl: 'Crucial: Never stand motionless immediately after dropping weights—walk gently for 15 seconds to avoid sudden orthostatic gray-out.'
      },
      'slow-comt': {
        rating: 3.6,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'In Zone 2 with continuous breathing, catecholamine spikes remain manageable; if loaded to Zone 4 failure, adrenaline accumulates and delays COMT clearance.',
        clinicalPearl: 'Keep loads modest (20–30% bodyweight total) to prevent sympathetic runaway.'
      },
      pelvic: {
        rating: 3.8,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Recruits tonic transverse abdominis support and promotes pelvic floor co-stabilization without the extreme downward crushing forces of heavy back squats.',
        clinicalPearl: 'Ensure ribs remain stacked over pelvis; do not hyperextend lumbar spine or clench pelvic floor.'
      }
    }
  },
  {
    id: 'skipping-rope',
    name: 'Skipping / Jump Rope Work',
    category: 'Physical Exercise',
    deliveryOrDosing: 'Interval bouts with lightweight speed rope; strictly flat, shock-absorbing surface',
    overallVerdict: 'Contextual / Neutral',
    overallRating: 3.0,
    overallStars: '★★★☆☆',
    summary: 'Rhythmic calf pump promotes splanchnic venous return and cerebral perfusion, but vertical ground reaction impacts create pelvic tension and vibration-induced mast cell stress.',
    exerciseLimits: {
      maxDuration: '3 to 5 minutes total per session (split into 30–45s bouts)',
      exertionCeiling: 'RPE 4–5 max (Zone 2, strictly nasal diaphragmatic breathing, sub-anaerobic)',
      weeklyFrequency: '1 to 2 sessions / week maximum (never on consecutive days)',
      recoveryRest: '3 minutes supine wall-supported pelvic decompression between rounds'
    },
    conditionImpacts: {
      mcas: {
        rating: 2.6,
        stars: '★★½☆☆',
        verdict: 'Caution',
        mechanism: 'High-frequency mechanical foot-strike vibration and skin friction can trigger local cutaneous and perivascular mast cell shear degranulation if unpaced.',
        clinicalPearl: 'Use cushioned turf or rubber mats. Wear graduated compression socks to dampen tissue micro-oscillation.'
      },
      'brain-fog': {
        rating: 3.9,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Rhythmic coordination and steady cadence trigger hippocampal neurogenesis and elevate cerebral arterial blood velocity via the peripheral muscular pump.',
        clinicalPearl: 'Keep intervals short (30s on / 60s off) to maintain executive alertness without inducing lactic neuro-fatigue.'
      },
      vascular: {
        rating: 3.7,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Soleus and gastrocnemius contraction powerfully propels pooled blood from lower extremities back to right atrium, reducing orthostatic splanchnic pooling.',
        clinicalPearl: 'Hydrate with electrolyte-rich sodium water 20 minutes prior to prevent post-exercise orthostatic drops.'
      },
      'slow-comt': {
        rating: 2.8,
        stars: '★★★☆☆',
        verdict: 'Caution',
        mechanism: 'Rapid hopping triggers acute burst of epinephrine and norepinephrine; slow COMT enzyme requires extended hours to clear circulating catecholamines.',
        clinicalPearl: 'Strictly cease before heart rate exceeds Zone 2 threshold. If pulse remains >100 bpm post-exercise, discontinue.'
      },
      pelvic: {
        rating: 2.0,
        stars: '★★☆☆☆',
        verdict: 'Caution',
        mechanism: 'Downward ground reaction forces increase intra-abdominal pressure against a hypertonic pelvic diaphragm, irritating the pudendal nerve and aggravating anorgasmic sensory numbness.',
        clinicalPearl: 'Perform gentle eccentric pelvic floor drops before skipping. Cease immediately if perineal numbness or tension manifests.'
      }
    }
  },
  {
    id: 'kettlebell-armor-building',
    name: 'Kettlebell Armor Building Complex (2 Cleans, 1 Press, 3 Front Squats)',
    category: 'Physical Exercise',
    deliveryOrDosing: 'Double kettlebells (moderate load, e.g. 12–16kg); EMOM or auto-regulated rest intervals',
    overallVerdict: 'Moderate Helper',
    overallRating: 3.2,
    overallStars: '★★★☆☆',
    summary: 'Gold-standard structural hypertrophy and neural density protocol; requires strict ceilings to avoid catecholamine saturation and pelvic floor compression.',
    exerciseLimits: {
      maxDuration: '8 to 12 minutes total density block (maximum 5 to 8 total rounds)',
      exertionCeiling: 'RPE 6–7 maximum (stop 2 reps before technical failure; zero grinding)',
      weeklyFrequency: '1 to 2 sessions / week maximum',
      recoveryRest: 'Full 90–120 seconds between complexes; mandatory supine 90/90 diaphragmatic reset'
    },
    conditionImpacts: {
      mcas: {
        rating: 2.9,
        stars: '★★★☆☆',
        verdict: 'Caution',
        mechanism: 'Eccentric muscular strain and thermal core elevation trigger IL-6 release and systemic histamine dumping if complexes are pushed to lactic failure.',
        clinicalPearl: 'Limit complexes to clean, crisp sets. Never perform circuit training with zero rest; rest until breathing is completely normal.'
      },
      'brain-fog': {
        rating: 4.1,
        stars: '★★★★☆',
        verdict: 'Gold Helper',
        mechanism: 'Demanding multi-joint motor pattern recruits frontal-striatal executive pathways, surging systemic BDNF and dopaminergic focus without long neuroinflammation.',
        clinicalPearl: 'The overhead press demands acute vestibular-proprioceptive grounding, piercing sluggish cognitive tempo.'
      },
      vascular: {
        rating: 3.8,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Axial loading and powerful gluteal-quadriceps contraction force splanchnic blood upward, strengthening endothelial shear compliance.',
        clinicalPearl: 'Avoid prolonged breath holding (Valsalva). Exhale through pursed lips on the ascent of every squat to prevent cranial pressure spikes.'
      },
      'slow-comt': {
        rating: 2.7,
        stars: '★★★☆☆',
        verdict: 'Caution',
        mechanism: 'Heavy overhead pressing and clean explosions trigger substantial central norepinephrine release, risking evening insomnia and resting tachycardia.',
        clinicalPearl: 'Schedule strictly before 2:00 PM. Take 300mg magnesium malate immediately post-workout to support COMT catechol breakdown.'
      },
      pelvic: {
        rating: 2.5,
        stars: '★★½☆☆',
        verdict: 'Caution',
        mechanism: 'Racked front squats place downward pressure directly on the pelvic floor. In hypertonic states, this mechanically compresses the pudendal canal (Alcock canal).',
        clinicalPearl: 'Keep squat depth above parallel (box squat variation) and actively inhale into pelvic floor on descent to prevent clenching.'
      }
    }
  },
  {
    id: 'zone-1-walking-recumbent',
    name: 'Zone 1 Walking & Supine / Recumbent Cycling',
    category: 'Physical Exercise',
    deliveryOrDosing: '20–35 minutes continuous, flat terrain or semi-recumbent ergometer',
    overallVerdict: 'Gold Helper',
    overallRating: 4.8,
    overallStars: '★★★★★',
    summary: 'The safest, most restorative circulatory modality across all 5 conditions. Maximizes peripheral capillary perfusion with zero catecholamine or mast cell cost.',
    exerciseLimits: {
      maxDuration: '25 to 40 minutes per session',
      exertionCeiling: 'RPE 2–3 (Zone 1, 100% conversational nasal breathing)',
      weeklyFrequency: '4 to 6 sessions / week',
      recoveryRest: 'Immediate seated or lying relaxation; zero post-exertional fatigue'
    },
    conditionImpacts: {
      mcas: {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Negligible core thermal stress and minimal tissue trauma avoid triggering mast cell degranulation, while promoting lymphatic clearance of inflammatory mediators.',
        clinicalPearl: 'Perform in cool, temperature-controlled air or during early morning to avoid environmental heat flares.'
      },
      'brain-fog': {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Gently increases cerebral blood flow velocity and oxygen delivery to the prefrontal cortex without depleting glycogen or generating lactic neuro-fatigue.',
        clinicalPearl: 'Pairs synergistically with quiet audiobooks or outdoor green-space exposure for vagal tone enrichment.'
      },
      vascular: {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Recumbent cycling completely eliminates hydrostatic gravitational blood pooling, allowing maximum stroke volume and endothelial shear signaling.',
        clinicalPearl: 'The premier cardiovascular training vehicle for dysautonomia and POTS-like orthostatic intolerance.'
      },
      'slow-comt': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Operates well beneath the sympathetic activation threshold, generating zero excess epinephrine or dopamine burden on sluggish COMT enzymes.',
        clinicalPearl: 'Can be utilized as an active cool-down to metabolize residual stress catecholamines.'
      },
      pelvic: {
        rating: 4.6,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Gentle alternating hip reciprocal motion mobilizes the obturator internus and piriformis muscles, relieving pudendal nerve entrapment without downward compression.',
        clinicalPearl: 'Focus on tall posture and soft pelvic relaxation with each heel strike.'
      }
    }
  },
  {
    id: 'somatic-pelvic-decompression',
    name: 'Somatic Diaphragmatic Pelvic Decompression (90/90 Position)',
    category: 'Physical Exercise',
    deliveryOrDosing: '10–15 minutes daily: supine on floor with calves resting on chair/box at 90-degree hip/knee angles',
    overallVerdict: 'Gold Helper',
    overallRating: 4.9,
    overallStars: '★★★★★',
    summary: 'Direct neuromodulatory intervention for pelvic hypertonia, vagal nerve reactivation, and pudendal nerve sensory unblocking.',
    exerciseLimits: {
      maxDuration: '12 to 20 minutes daily',
      exertionCeiling: 'RPE 1 (pure parasympathetic restorative state)',
      weeklyFrequency: 'Daily or twice daily',
      recoveryRest: 'Natural integration into daily routine before bedtime or post-training'
    },
    conditionImpacts: {
      mcas: {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Vagal nerve stimulation via extended diaphragmatic exhalation releases acetylcholine, which binds nicotinic receptors on gut mast cells to inhibit degranulation.',
        clinicalPearl: 'Inhale for 4 seconds, exhale slowly through pursed lips for 7 seconds to maximize cholinergic anti-inflammatory signaling.'
      },
      'brain-fog': {
        rating: 4.6,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Downregulates sympathetic hyperarousal, attenuating central microglial alarm states and restoring prefrontal working memory clarity.',
        clinicalPearl: 'Excellent mid-afternoon cognitive reboot when experiencing brain fog or executive burnout.'
      },
      vascular: {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Elevating the lower limbs above the torso instantly drains pooled splanchnic and femoral venous blood back to central circulation, elevating stroke volume.',
        clinicalPearl: 'Eliminates venous stasis and relieves heavy, restless legs resulting from orthostatic dysregulation.'
      },
      'slow-comt': {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Directly halts adrenal sympathetic drive, providing the Slow COMT enzyme breathing room to degrade accumulated norepinephrine and epinephrine.',
        clinicalPearl: 'The single most effective non-pharmacological technique to terminate adrenergic heart palpitations and chest tightness.'
      },
      pelvic: {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Mechanically opens the pelvic inlet, eliminates gravity on pelvic viscera, relieves pudendal canal compression, and desensitizes hyper-vigilant sacral S2–S4 reflex arcs.',
        clinicalPearl: 'Crucial lifelong foundation for restoring pudendal sensory conduction required for orgasmic contraction reflexes.'
      }
    }
  },
  {
    id: 'maximal-sprints-metcon',
    name: 'Maximal Anaerobic Sprinting / Metcon HIIT',
    category: 'Physical Exercise',
    deliveryOrDosing: 'All-out anaerobic bursts, HIIT tabatas, or failure-based metabolic conditioning',
    overallVerdict: 'Severe Hinder',
    overallRating: 1.1,
    overallStars: '★☆☆☆☆',
    summary: 'Universally contraindicated in this neuro-immune phenotype. Triggers massive mast cell degranulation, catecholamine flooding, and pelvic spasm.',
    exerciseLimits: {
      maxDuration: 'Strictly Contraindicated (0 minutes)',
      exertionCeiling: 'Do not exceed RPE 7',
      weeklyFrequency: '0 sessions / week',
      recoveryRest: 'Requires 48–72h recovery; causes multi-day post-exertional crash'
    },
    conditionImpacts: {
      mcas: {
        rating: 0.8,
        stars: '☆☆☆☆☆',
        verdict: 'Severe Hinder',
        mechanism: 'Rapid core hyperthermia, extreme lactate accumulation, and acute shear stress trigger catastrophic, multi-system mast cell degranulation.',
        clinicalPearl: 'Frequently misdiagnosed as "exercise asthma" or "lactic sensitivity"; represents pure mast cell mediator release.'
      },
      'brain-fog': {
        rating: 1.0,
        stars: '★☆☆☆☆',
        verdict: 'Severe Hinder',
        mechanism: 'Massive cytokine surge (TNF-α, IL-1β) breaches blood-brain barrier, locking microglia into the hyper-inflammatory M1 phenotype for days.',
        clinicalPearl: 'Produces crippling 48-hour brain fog, severe anhedonia, and profound executive paralysis.'
      },
      vascular: {
        rating: 1.5,
        stars: '★½☆☆☆',
        verdict: 'Severe Hinder',
        mechanism: 'Extreme peripheral vasodilation during recovery creates massive post-exercise splanchnic and femoral venous pooling with profound orthostatic collapse.',
        clinicalPearl: 'Triggers severe reflex tachycardia and dizziness that can take hours to stabilize.'
      },
      'slow-comt': {
        rating: 0.5,
        stars: '☆☆☆☆☆',
        verdict: 'Severe Hinder',
        mechanism: 'Pours massive concentrations of epinephrine into circulation that Slow COMT (Met/Met) cannot clear, causing nocturnal panic, PVCs, and tremors.',
        clinicalPearl: 'A single HIIT session can dysregulate sleep and heart rate variability for up to 96 hours.'
      },
      pelvic: {
        rating: 1.2,
        stars: '★☆☆☆☆',
        verdict: 'Severe Hinder',
        mechanism: 'Explosive pelvic floor guarding and extreme intra-abdominal valsalva contractions violently compress the pudendal nerve, shutting down genital sensory reflex arcs.',
        clinicalPearl: 'Severe trigger for worsening anorgasmia, chronic pelvic pain flares, and visceral urinary urgency.'
      }
    }
  },
  // ─────────────────────────────────────────────────────────────────────────────
  // 2. TARGETED EXERCISES: BRAIN, VAGAL & SOMATIC DRILLS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'dual-n-back',
    name: 'Dual N-Back Training (Working Memory & Executive Chaining)',
    category: 'Cognitive & Brain Exercises',
    deliveryOrDosing: '15–20 minutes daily, 4–5 days/week; start at 1-back/2-back; morning prefrontal peak',
    overallVerdict: 'Gold Helper',
    overallRating: 4.9,
    overallStars: '★★★★★',
    summary: 'Simultaneous visual-spatial and auditory working memory updating that expands prefrontal delay-period attractor buffers, directly halting the CDS phenomenon where "thoughts slip through fingers."',
    targetReceptors: ['DLPFC Recurrent Pyramidal Attractors', 'Fronto-Parietal Delay-Period Buffers', 'Central Executive Network (CEN)', 'Non-Adrenergic Plasticity'],
    clinicalConsiderations: [
      'Prefrontal Attractor Basin Fortification: Sluggish Cognitive Tempo is characterized by rapid decay of frontopolar goal representations. Dual N-Back specifically trains the recurrent pyramidal microcircuits in the DLPFC to sustain active representations across delay intervals.',
      'Completely Non-Adrenergic: Expands working memory capacity without stimulating dopamine/norepinephrine release, making it 100% safe for Slow COMT Met/Met genotypes.',
      'Zero Thermal or Mast Cell Load: Can be practiced during acute MCAS flares when cardiovascular exercise is contraindicated.'
    ],
    keyContraindications: [
      'Do not practice late in the evening (intense prefrontal cholinergic activity can delay sleep onset).',
      'Limit session duration to 20 minutes to prevent mental fatigue from inducing somatic tension.'
    ],
    conditionImpacts: {
      mcas: {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Zero physical exertion, zero thermal elevation, and zero mast cell shear stress; can be safely performed during acute allergy flares.',
        clinicalPearl: 'The ideal cognitive activity when systemic flares prevent physical movement.'
      },
      'brain-fog': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Strengthens recurrent delay-period pyramidal firing in the DLPFC, preventing prefrontal attractor basin flattening and word retrieval fade.',
        clinicalPearl: 'Directly counters the core pathology of Cognitive Disengagement Syndrome.'
      },
      vascular: {
        rating: 4.5,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Causes no orthostatic or splanchnic fluid shifts; maintains baseline cerebral perfusion pressure.',
        clinicalPearl: 'Perform seated with good ergonomic back support.'
      },
      'slow-comt': {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Improves executive function without elevating synaptic catecholamines or consuming hepatic SAMe methyl reserves.',
        clinicalPearl: '100% safe cognitive enhancer for Slow COMT.'
      },
      pelvic: {
        rating: 4.6,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Zero intra-abdominal pressure or Valsalva straining; leaves pelvic floor musculature completely unloaded.',
        clinicalPearl: 'Maintain mindful abdominal breathing while playing to avoid unconscious pelvic clenching.'
      }
    }
  },
  {
    id: 'drumming',
    name: 'Polyrhythmic Acoustic Drumming & Bilateral Entrainment',
    category: 'Cognitive & Brain Exercises',
    deliveryOrDosing: '15–25 minutes at 80–120 BPM, 3–5x weekly on acoustic djembe, congas, or practice pad',
    overallVerdict: 'Gold Helper',
    overallRating: 4.8,
    overallStars: '★★★★★',
    summary: 'Bilateral rhythmic upper-extremity motor entrainment that drives cerebellar-striatal temporal precision, synchronizes thalamocortical oscillations, and elevates dorsal striatal dopamine.',
    targetReceptors: ['Auditory-Motor Entrainment', 'Cerebellar-Striatal Circuits', 'Thalamocortical Gamma Oscillations', 'Dorsal Striatum'],
    clinicalConsiderations: [
      'Temporal Scaffolding for SCT: Sluggish internal timing in SCT impairs fluent thought sequencing; external rhythmic acoustic pulses provide an external clock that organizes cognitive and motor output.',
      'Non-Stimulant Striatal Dopamine Release: Alternating bilateral motor precision satisfies the subcortical dopamine appetite of ADHD brains without systemic adrenergic surges.',
      'Thoracic & Axillary Lymphatic Drainage: Rhythmic arm movements stimulate upper body lymph flow and venous return without lower extremity hydrostatic pooling.'
    ],
    keyContraindications: [
      'Avoid high acoustic volume without ear protection (loud sound can trigger acoustic startle sympathetic reflexes).',
      'Keep shoulder girdle relaxed to avoid cervical muscle guarding.'
    ],
    conditionImpacts: {
      mcas: {
        rating: 4.6,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Generates negligible metabolic heat (<0.1°C rise); releases calming endogenous endorphins that support mast cell stability.',
        clinicalPearl: 'Keep room cool and well-ventilated.'
      },
      'brain-fog': {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Synchronizes thalamocortical gamma oscillations, accelerating lexical retrieval and conversational initiation.',
        clinicalPearl: 'Excellent morning transition ritual to overcome executive inertia.'
      },
      vascular: {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Upper extremity rhythmic contractions promote venous return to the superior vena cava, lowering systemic vascular resistance.',
        clinicalPearl: 'Encourages gentle dynamic posture that relieves pelvic venous stagnation.'
      },
      'slow-comt': {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Stimulates dorsal striatal dopamine pathways without causing peripheral catecholamine accumulation or hypertensive spikes.',
        clinicalPearl: 'Channels ADHD motor agitation into constructive rhythmic flow.'
      },
      pelvic: {
        rating: 4.6,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Seated playing with alternating knee/hip angles prevents static pelvic floor contracture.',
        clinicalPearl: 'Sit on a firm, ergonomic drum stool rather than a soft couch.'
      }
    }
  },
  {
    id: 'singing-chanting',
    name: 'Vocal Chanting & Melodic Singing (Laryngeal Vagal CAIP)',
    category: 'Cognitive & Brain Exercises',
    deliveryOrDosing: '10–15 minutes daily (or 5 minutes before meals); low-pitch resonant humming with 8–12s extended exhalations',
    overallVerdict: 'Gold Helper',
    overallRating: 4.9,
    overallStars: '★★★★★',
    summary: 'Mechanical vibration of recurrent/superior laryngeal nerves activating the Cholinergic Anti-Inflammatory Pathway (α7-nAChR), elevating HRV, and quieting enteric mast cells.',
    targetReceptors: ['Vagus Nerve Cranial Nerve X', 'Alpha-7 Nicotinic (α7-nAChR)', 'Jak2-STAT3 Anti-Inflammatory Pathway', 'Respiratory Sinus Arrhythmia'],
    clinicalConsiderations: [
      'Direct Laryngeal Vagus Activation: The vocal cords are innervated by vagal branches (CN X); low-frequency phonation mechanically fires efferent vagal fibers to the celiac ganglion, releasing acetylcholine onto enteric mast cells.',
      'Reciprocal Vocal-Pelvic Diaphragm Relaxation: Open vocal cord phonation naturally relaxes the pelvic floor musculature due to shared embryonic fascial continuity.',
      'Respiratory Sinus Arrhythmia Amplification: Prolonged vocalized exhalation steepens HRV and quiets sympathetic tone.'
    ],
    keyContraindications: [
      'Avoid vocal straining or high-pitched shouting (straining engages Valsalva mechanics).',
      'If active sinonasal inflammation is present, use gentle chest humming rather than loud vocal projection.'
    ],
    conditionImpacts: {
      mcas: {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Efferent vagal acetylcholine binds α7-nAChR on enteric mast cells and macrophages, shutting down NF-κB and cytokine transcription.',
        clinicalPearl: 'Singing or humming for 3–5 minutes before meals prevents post-prandial splanchnic mast cell flares.'
      },
      'brain-fog': {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Dampens visceral insular sensory noise, freeing frontopolar working memory bandwidth for sustained conversational focus.',
        clinicalPearl: 'Clears mental fog by restoring parasympathetic ventral vagal dominance.'
      },
      vascular: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Amplifies Respiratory Sinus Arrhythmia and heart rate variability, stabilizing arterial baroreflex sensitivity.',
        clinicalPearl: 'Promotes microvascular flow-mediated dilation.'
      },
      'slow-comt': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Suppresses sympathetic outflow, lowering noradrenaline secretion without touching catecholamine clearance pathways.',
        clinicalPearl: 'A natural, non-pharmacological sedative for slow-COMT hyperarousal.'
      },
      pelvic: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Open-throat phonation induces reciprocal relaxation in the pelvic diaphragm (levator ani), relieving hypertonic contracture.',
        clinicalPearl: 'Pairs naturally with pelvic floor reverse kegel decompression.'
      }
    }
  },
  {
    id: 'resonance-breathing',
    name: '0.1 Hz Resonance Frequency Breathing (5.5 Breaths/Min)',
    category: 'Cognitive & Brain Exercises',
    deliveryOrDosing: '10–20 minutes twice daily; 5.5s smooth nasal inhale, 5.5s effortless exhale; 0 pauses',
    overallVerdict: 'Gold Helper',
    overallRating: 5.0,
    overallStars: '★★★★★',
    summary: 'Precision baroreflex resonance breathing at 5.5 breaths per minute that synchronizes HRV, Mayer blood pressure waves, and cerebral microvascular perfusion.',
    targetReceptors: ['Carotid & Aortic Baroreceptors', 'Respiratory Sinus Arrhythmia', 'Mayer Wave Alignment', 'Cholinergic Anti-Inflammatory Reflex'],
    clinicalConsiderations: [
      'Baroreflex Alignment at 0.1 Hz: Respiration at ~5.5 breaths/min matches the intrinsic rhythm of arterial baroreceptors, maximizing heart rate variability amplitude and cerebral blood flow.',
      'Clears Splanchnic Hypoperfusion: Increases left ventricular stroke volume and carotid flow, reversing postprandial desk-work brain fog.',
      'Slow COMT Autonomic Calming: Rapidly lowers sympathetic tone without pharmaceutical intervention.'
    ],
    keyContraindications: [
      'Do not hyperventilate (keep tidal volume normal; slow the frequency, do not gasp).',
      'Maintain upright or relaxed reclined posture with an uncompressed abdomen.'
    ],
    conditionImpacts: {
      mcas: {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Fires the cholinergic anti-inflammatory reflex, suppressing stress-induced mast cell degranulation and histamine release.',
        clinicalPearl: 'Use immediately upon sensing early warning signs of an autonomic flare.'
      },
      'brain-fog': {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Restores carotid pulsatile perfusion to frontopolar microvasculature, immediately resolving the "thoughts slipping through fingers" sensation.',
        clinicalPearl: 'The #1 non-pharmacological rescue drill for sudden cognitive fog.'
      },
      vascular: {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Maximizes baroreflex gain, stabilizes upright arterial blood pressure, and counteracts peripheral venous pooling.',
        clinicalPearl: 'Perform 10 minutes before getting out of bed or starting desk work.'
      },
      'slow-comt': {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Directly lowers central noradrenaline outflow from the locus coeruleus with zero metabolic burden on COMT.',
        clinicalPearl: 'Eliminates autonomic racing heart without causing sedation.'
      },
      pelvic: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Smooth diaphragmatic downward excursion rhythmically mobilizes the pelvic floor, preventing ischemic muscle contracture.',
        clinicalPearl: 'Encourages rhythmic sacral parasympathetic outflow.'
      }
    }
  },
  {
    id: 'soleus-pushups',
    name: 'Seated Soleus Calf Pushups & Venous Siphon Drill',
    category: 'Cognitive & Brain Exercises',
    deliveryOrDosing: '100–250 seated heel raises every 60–90 minutes of desk work; continuous ball-of-foot anchor at 90° knee flexion',
    overallVerdict: 'Gold Helper',
    overallRating: 4.9,
    overallStars: '★★★★★',
    summary: 'Cyclic contraction of the slow-twitch soleus muscle to empty deep calf venous sinusoids, pumping 500–1000 mL of pooled blood back to the heart with zero heat or fatigue.',
    targetReceptors: ['Soleus Intramuscular Venous Sinuses', 'Popliteal Vein Siphon', 'Frank-Starling Cardiac Preload', 'Type I Oxidative Muscle Fibers'],
    clinicalConsiderations: [
      'The Body’s Second Heart: The soleus muscle contains vast venous sinusoids; cyclic contraction while seated (knees at 90° to slacken gastrocnemius) ejects blood upward against gravity.',
      'Prevents Amlodipine Dependent Edema: Mechanically clears lower leg hydrostatic pressure before plasma leaks through capillary tight junctions, preventing sock marks.',
      'Zero Metabolic Acidosis or Heat: >85% Type I slow-twitch oxidative fibers burn local glycogen and lipids without lactate buildup or temperature elevation (<0.05°C).'
    ],
    keyContraindications: [
      'Must be performed seated (standing calf raises engage the gastrocnemius and generate unwanted heat and fatigue).',
      'Maintain flexible footwear or bare feet.'
    ],
    conditionImpacts: {
      mcas: {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Produces 0.0°C heat elevation and zero lactic acidosis; completely avoids thermal and acidic mast cell triggers.',
        clinicalPearl: 'The safest possible muscular activity during active MCAS flares.'
      },
      'brain-fog': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Maintains central venous return and cardiac output during prolonged sitting, preventing desk-work cerebral hypoperfusion.',
        clinicalPearl: 'Cures late-afternoon lexical retrieval blocks caused by gravity pooling.'
      },
      vascular: {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Directly resolves Amlodipine dependent edema and deep sock marks by mechanical venous siphoning.',
        clinicalPearl: 'Perform 150 reps every 90 minutes of seated computer work.'
      },
      'slow-comt': {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Requires zero catecholaminergic drive; provides a silent kinesthetic channel for ADHD restlessness.',
        clinicalPearl: 'Fidgeting with purpose: turns restless leg energy into cerebral perfusion.'
      },
      pelvic: {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Siphons stagnant venous blood away from the pelvic and pudendal venous plexus, reducing pelvic congestion.',
        clinicalPearl: 'Decreases dull aching pelvic heaviness after long periods of sitting.'
      }
    }
  },
  {
    id: 'juggling-gaze',
    name: 'Bilateral Gaze Tracking, Juggling & Saccadic Pacing (The EMDR Axis)',
    category: 'Cognitive & Brain Exercises',
    deliveryOrDosing: '5–15 minutes daily (or 2-min EMDR tracking snacks); smooth pursuit vs. saccadic lateral gaze; 2 to 3-ball juggling cascade',
    overallVerdict: 'Gold Helper',
    overallRating: 4.8,
    overallStars: '★★★★★',
    summary: 'Rhythmic bilateral horizontal eye movements and cross-body juggling. Activates superior colliculus to inhibit basolateral amygdala hyperarousal (the EMDR mechanism), taxes working memory to clear SCT daydreaming, and stimulates MT/V5 neuroplasticity.',
    targetReceptors: ['Superior Colliculus', 'Mediodorsal Thalamus', 'Basolateral Amygdala GABA', 'Area MT/V5', 'Corpus Callosum', 'Visuospatial Sketchpad'],
    clinicalConsiderations: [
      'The EMDR Amygdala Circuit: Alternating horizontal eye movements activate the superior colliculus, which projects to the mediodorsal thalamus to trigger potent GABAergic inhibition of the basolateral amygdala, extinguishing autonomic threat responses.',
      'Working Memory Taxation (Van den Hout): Bilateral ocular tracking heavily taxes the visuospatial sketchpad, disrupting intrusive internal thoughts and the glassy-eyed daydream trance of SCT.',
      'Optic Flow Locomotion: Horizontal retinal slip mimics forward physical locomotion, signaling to the brainstem to deactivate tonic freezing.',
      'Anatomical Neuroplasticity: 3-ball juggling induces structural gray matter expansion in motion-sensitive area MT/V5 within 7 days, enhancing visual-motor speed.'
    ],
    keyContraindications: [
      'Avoid if cervical spine or acute neck muscle spasm is present (keep head steady and move eyes only).',
      'Use smooth pursuit rather than rapid saccades during active vestibular dizziness.'
    ],
    conditionImpacts: {
      mcas: {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Rapid amygdalar quieting via superior colliculus reduces sympathetic neuropeptide Y and corticotropin-releasing hormone (CRH) surges, preventing stress-triggered mast cell degranulation.',
        clinicalPearl: 'A premier non-pharmacological stabilizer for acute neurogenic mast cell flares.'
      },
      'brain-fog': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Horizontal eye movements displace ruminative default mode network loops by taxing working memory, snapping the brain out of SCT sluggishness into crisp visual engagement.',
        clinicalPearl: 'Use the 60-second EMDR tracker before complex writing tasks to defog working memory.'
      },
      vascular: {
        rating: 4.5,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Maintains upright posture and gentle upper-body coordination without cardiovascular strain.',
        clinicalPearl: 'Promotes balanced spinal alignment.'
      },
      'slow-comt': {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Non-stimulant sensory-motor flow state that satisfies ADHD novelty-seeking without catecholamine crashes.',
        clinicalPearl: 'Provides clean alertness for Slow COMT.'
      },
      pelvic: {
        rating: 4.5,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Requires upright dynamic posture that relieves seated pelvic floor compression.',
        clinicalPearl: 'Keep knees soft and pelvis neutral while throwing.'
      }
    }
  },
  {
    id: 'mammalian-dive',
    name: 'Mammalian Dive Reflex / Cold Face Immersion',
    category: 'Cognitive & Brain Exercises',
    deliveryOrDosing: '15–30s facial immersion in cool water (10–15°C); repeat 1–2x during acute sensory overload or tachycardia',
    overallVerdict: 'Gold Helper',
    overallRating: 4.8,
    overallStars: '★★★★★',
    summary: 'Trigeminal-vagal sensory-motor reflex circuit breaker. Cool water immersion on forehead and eyes triggers immediate bradycardia, peripheral vasoconstriction, and parasympathetic dominance.',
    targetReceptors: ['Trigeminal Nerve CN V (V1/V2)', 'Dorsal Motor Nucleus of Vagus (CN X)', 'Arterial Blood Shunting', 'Sympathetic Locus Coeruleus Quenching'],
    clinicalConsiderations: [
      'Trigeminal-Vagal Reflex Arc: Cool water contacting V1/V2 trigeminal branches instantly excites the vagus nerve (CN X), dropping heart rate by 15–25 bpm in under 10 seconds.',
      'Arterial Shunting to Brain: Triggers selective peripheral vasoconstriction, shunting oxygenated blood away from limbs directly to cerebral and coronary circulations.',
      'Quenches Sympathetic Storms: Halts acute adrenal noradrenaline and CRH release, protecting mast cells from stress degranulation.'
    ],
    keyContraindications: [
      'Avoid ice water (<8°C) which triggers pain-induced sympathetic shock instead of the dive reflex.',
      'Contraindicated in severe cardiac conduction blocks (sick sinus syndrome, third-degree AV block).',
      'Never perform while standing in a slippery shower.'
    ],
    conditionImpacts: {
      mcas: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Instantly terminates acute sympathetic noradrenaline and CRH surges that trigger mast cell degranulation cascades during panic.',
        clinicalPearl: 'Emergency biological brake for sudden acute flare sensations.'
      },
      'brain-fog': {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Shunts oxygenated blood to carotid and cerebral vessels, breaking acute executive cognitive freeze.',
        clinicalPearl: 'Clears sensory overload and resets working memory.'
      },
      vascular: {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Triggers instant baroreflex reset and peripheral vascular redistribution, stabilizing orthostatic tachycardia.',
        clinicalPearl: 'Safe, natural, instantaneous bradycardic lever.'
      },
      'slow-comt': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Rapidly shuts down locus coeruleus noradrenaline firing without requiring enzymatic COMT degradation.',
        clinicalPearl: 'Cuts through slow-COMT adrenaline loops in seconds.'
      },
      pelvic: {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Uncouples the acute sympathetic pelvic guarding reflex, terminating acute myofascial spasm in the levator ani.',
        clinicalPearl: 'Breaks acute pelvic pain and urinary urgency spasms.'
      }
    }
  },
  {
    id: 'pelvic-reverse-kegel',
    name: 'Supine 90/90 Diaphragmatic Decompression & Reverse Kegels',
    category: 'Cognitive & Brain Exercises',
    deliveryOrDosing: '10–15 minutes daily (post-exercise or before bed); calves at 90/90 on chair; 4s belly inhale, 6s passive release; 0 Kegels',
    overallVerdict: 'Gold Helper',
    overallRating: 5.0,
    overallStars: '★★★★★',
    summary: 'Gravitational offloading and pudendal canal decompression. Lying supine with legs at 90/90 while performing diaphragmatic reverse kegels releases hypertonic levator ani contracture and restores orgasmic reflex arcs.',
    targetReceptors: ['Internal Pudendal Neurovascular Bundle', 'Alcock Canal Decompression', 'Pelvic Diaphragm (Levator Ani Eccentric Release)', 'Sacral Parasympathetic Outflow'],
    clinicalConsiderations: [
      'Alcock Canal & Pudendal Decompression: Supine 90/90 posture eliminates gravitational venous pooling; diaphragmatic downward excursion rhythmically stretches and eccentrically elongates the levator ani and obturator internus.',
      'Resolves Lifelong Anorgasmic Reflex Blocks: Relieves chronic ischemic compression on the internal pudendal nerve, restoring genital blood flow and sensory mechanoreceptor responsiveness.',
      'Venous Drainage of Lower Extremities: Elevated calves drain 500–1000 mL of stagnant venous and lymphatic fluid back into central circulation.'
    ],
    keyContraindications: [
      'Never perform active Kegel contractions (squeezing/tightening); this severely worsens pudendal entrapment and pelvic ischemia.',
      'Ensure lumbar spine is flat and supported.'
    ],
    conditionImpacts: {
      mcas: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Reduces pelvic mucosal mast cell shear stress and calms visceral hyperalgesia mediated by sensory C-fibers.',
        clinicalPearl: 'Calms gut and pelvic floor visceral hypersensitivity.'
      },
      'brain-fog': {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Eliminates chronic pelvic nociceptive signaling from consuming insular executive attention, freeing working memory capacity.',
        clinicalPearl: 'Releases the subconscious pelvic tension that clouds mental focus.'
      },
      vascular: {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Elevated lower legs use gravity to drain pooled splanchnic and femoral venous blood, decompressing lower extremity capillaries.',
        clinicalPearl: 'The ideal evening antidote for Amlodipine dependent edema and sock marks.'
      },
      'slow-comt': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Induces deep somatic and parasympathetic relaxation, relieving chronic unconscious muscular bracing.',
        clinicalPearl: 'Restores restful slow-wave sleep in slow-COMT individuals.'
      },
      pelvic: {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Decompresses the pudendal canal, restores arterial blood flow to the pudendal nerve, and unlocks orgasmic reflex arcs.',
        clinicalPearl: 'Foundational somatic exercise for hypertonic pelvic floor dysfunction and lifelong anorgasmia.'
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. VITAMINS & NUTRIENTS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'creatine',
    name: 'Creatine Monohydrate (Micronized Creapure®)',
    category: 'Vitamins & Nutrients',
    deliveryOrDosing: '2.5g to 3.0g daily dissolved in lukewarm water/tea with morning meal; NO loading phase; Creapure® certified',
    overallVerdict: 'Gold Helper',
    overallRating: 4.7,
    overallStars: '★★★★★',
    summary: 'High-energy phosphagen donor that dramatically boosts prefrontal brain ATP flux, relieves 40–50% of the daily methyl donor burden (SAMe sparing for Slow COMT), and supports intravascular hydration without catecholamine stimulation.',
    targetReceptors: ['Phosphocreatine Shuttle (Cr/PCr)', 'GAMT SAMe Methyl Group Sparing', 'Astrocyte-Neuronal Metabolic Coupling', 'Intracellular Hydration Gradient'],
    clinicalConsiderations: [
      'Slow COMT & Methylation Sparing (Crucial Mechanism): Endogenous synthesis of creatine consumes 40%–50% of the entire human body\'s S-adenosylmethionine (SAMe) methyl pool via the hepatic GAMT enzyme. Supplementing 2.5–3g of creatine directly spares this enormous methyl sink, preserving endogenous SAMe for catecholamine degradation (COMT), histamine clearance (HNMT), DNA methylation, and membrane phospholipid synthesis. It delivers the functional benefits of methylation support without the catastrophic anxiety or overmethylation crashes caused by exogenous methylfolate or SAMe supplements.',
      'Brain Fog & SCT Bioenergetics: Neurons and astrocytes rely on the phosphocreatine shuttle to regenerate ATP during heavy prefrontal executive processing. In Sluggish Cognitive Tempo (SCT) and chronic neuroinflammation, mitochondrial oxidative phosphorylation is impaired; supplemental creatine directly fuels synaptic ATPases, significantly accelerating working memory speed, lexical retrieval, and mental stamina.',
      'MCAS & Gut Mucosal Safeguards: Generic, cheap bulk creatine frequently contains industrial synthesis contaminants (dicyandiamide, dihydrotriazine, heavy metals) that trigger intestinal mast cell degranulation. Use exclusively pure German-synthesized Creapure® micronized powder. Strictly avoid high-dose loading phases (e.g. 20g/day), which cause intraluminal hyperosmotic fluid shifts, diarrhea, and mucosal mast cell activation. Start at 2.5g daily fully dissolved.',
      'Vascular & Plasma Volume Expansion in POTS: Creatine draws water into cellular and intravascular compartments (intracellular hyper-hydration), gently expanding effective circulating plasma volume over 2–4 weeks. This provides a natural hemodynamic buffer against orthostatic pooling and post-exercise cerebral hypoperfusion, provided concurrent dietary sodium and fluid intake are maintained.',
      'Pelvic Floor Myofascial Hydration: Optimizes high-energy phosphate availability and cellular hydration in deep pelvic floor musculature (levator ani, obturator internus), reducing ischemic cramping while avoiding the lower bowel osmotic distension that can reflexively aggravate pudendal nerve hypertonicity.'
    ],
    keyContraindications: [
      'Do not perform a 20g/day loading phase (triggers severe osmotic gut distress and mast cell histamine dumping).',
      'Do not ingest as undissolved crystalline powder or "dry scoop"; must be completely dissolved in warm liquid to prevent gastric mucosal irritation.',
      'Must maintain adequate sodium and electrolyte intake; failing to hydrate adequately can trigger transient intracellular/extracellular fluid imbalance.'
    ],
    conditionImpacts: {
      mcas: {
        rating: 4.5,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Sparing hepatic SAMe frees up vital methyl groups required by Histamine N-Methyltransferase (HNMT) to methylate and degrade intracellular histamine; cellular ATP buffering preserves mucosal epithelial barrier tight junctions.',
        clinicalPearl: 'Creapure® certification is non-negotiable; must be dissolved 100% transparently in warm liquid before drinking to eliminate gut mast cell shear.'
      },
      'brain-fog': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Accelerates ADP-to-ATP phosphorylation in cortical pyramidal neurons and astrocytic syncytia; overcomes mitochondrial bioenergetic sluggishness in SCT and neuroinflammation.',
        clinicalPearl: 'The single most effective non-stimulant neuro-energetic compound for eliminating afternoon cognitive crash and processing latency.'
      },
      vascular: {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Expands intracellular and intravascular hydration volume, stabilizing right atrial preload and counteracting splanchnic/femoral venous pooling in orthostatic dysregulation.',
        clinicalPearl: 'Pairs synergistically with morning hydration and sodium intake to stabilize upright blood pressure.'
      },
      'slow-comt': {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Cuts hepatic SAMe methyl consumption by nearly half via GAMT inhibition, preventing methyl exhaustion and stabilizing the SAMe/SAH ratio with zero adrenergic stimulation.',
        clinicalPearl: 'The definitive biohack for Slow COMT (Met/Met) genotypes who desperately need methylation support but cannot tolerate methyl-B12, methylfolate, or TMG.'
      },
      pelvic: {
        rating: 4.4,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Improves myofascial cellular hydration and reduces metabolic fatigue and ischemic contracture in hypertonic pelvic floor muscles.',
        clinicalPearl: 'Ensure complete fluid dissolution to prevent intestinal water draw from inducing lower abdominal bloating.'
      }
    }
  },
  {
    id: 'cdp-choline',
    name: "CDP Choline / Citicoline (Cytidine 5'-Diphosphocholine)",
    category: 'Vitamins & Nutrients',
    deliveryOrDosing: '250mg once daily in the morning with food; titrate to 250–500mg max if tolerated; strictly avoid evening dosing',
    overallVerdict: 'Gold Helper',
    overallRating: 4.8,
    overallStars: '★★★★★',
    summary: 'Dual donor of choline and cytidine that fires the vagal α7nAChR cholinergic anti-inflammatory reflex, restores prefrontal acetylcholine depleted by presynaptic H3 autoreceptor arrest, and synthesizes phosphatidylcholine via the Kennedy pathway to repair leaky microvascular endothelial tight junctions.',
    targetReceptors: ['Alpha-7 Nicotinic (α7nAChR)', 'Central Muscarinic (M1/M4)', 'Kennedy Pathway (CTP:Phosphocholine Cytidylyltransferase)', 'Presynaptic H3 Heteroreceptor Reversal'],
    clinicalConsiderations: [
      'Reversing H3-Mediated Cognitive Chaining Collapse: During allergic or splanchnic MCAS flares, high extracellular histamine binds presynaptic H3 heteroreceptors, halting acetylcholine exocytosis in the nucleus basalis of Meynert and dorsolateral prefrontal cortex (DLPFC). This flattens prefrontal attractor basins, causing verbal blocks and "thoughts slipping through fingers." CDP Choline directly boosts central acetylcholine synthesis, restoring signal-to-noise ratio in recurrent pyramidal circuits and rescuing word retrieval without catecholaminergic surges.',
      'Vagal Cholinergic Anti-Inflammatory Pathway (CAP): Choline generates acetylcholine, which efferent vagal fibers release onto Alpha-7 Nicotinic Acetylcholine Receptors (α7nAChR) on enteric mast cells and brain-resident microglia. Receptor activation recruits Jak2-STAT3 phosphorylation, powerfully suppressing NF-κB nuclear translocation and halting TNF-α, IL-1β, and histamine exocytosis at the genomic level.',
      'Endothelial & BBB Glycocalyx-Membrane Repair: Cytidine converts to uridine, crossing the blood-brain barrier where it combines with choline via the Kennedy biosynthetic pathway to produce phosphatidylcholine and phosphatidylethanolamine. This directly re-synthesizes degraded microvascular endothelial cell membranes and reseals tight junctions (Claudin-5, Occludin) cleaved by mast cell tryptase and matrix metalloproteinases.',
      'Slow COMT Safety Profile: Unlike quercetin, luteolin, or green tea catechins (EGCG) which possess catechol rings that competitively inhibit Catechol-O-Methyltransferase (provoking severe hypertensive neck stiffness and occipital headaches in Met/Met genotypes), CDP Choline has zero catechol structure and places zero clearance burden on COMT.',
      'Superiority Over Alpha-GPC: Alpha-GPC can cause excessive parasympathetic lower gut hypermotility, diarrhea, and elevated conversion to trimethylamine N-oxide (TMAO) by intestinal microflora. CDP Choline provides a steadier plasma choline curve and crucial cytidine/uridine moieties for membrane repair.'
    ],
    keyContraindications: [
      'Do not exceed 500mg daily; high doses can provoke mild acetylcholine excess (temporomandibular jaw tightness, stiff neck, or mild dysphoria).',
      'Do not take in late afternoon or evening, as heightened prefrontal cholinergic alertness can disrupt restorative slow-wave sleep.',
      'If mild jaw tightness occurs, titrate down to 250mg every other day or pair with dietary magnesium.'
    ],
    conditionImpacts: {
      mcas: {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Efferent vagal acetylcholine binds α7nAChR on mast cells, activating Jak2-STAT3 and inhibiting NF-κB transcription of TNF-α, IL-6, and degranulation.',
        clinicalPearl: 'Primary non-sedating biochemical lever to suppress enteric mast cell degranulation via parasympathetic activation.'
      },
      'brain-fog': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Restores prefrontal acetylcholine synthesis, bypassing H3 heteroreceptor presynaptic block and restabilizing DLPFC attractor networks for verbal fluency and lexical retrieval.',
        clinicalPearl: 'The definitive non-stimulant solution for "thoughts slipping through fingers" without adrenergic jitter.'
      },
      vascular: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Kennedy pathway cytidine-uridine conversion produces phosphatidylcholine to repair microvascular endothelial cell membranes and tighten the BBB against extravasation.',
        clinicalPearl: 'Essential co-factor alongside MPFF and Pycnogenol to prevent capillary fragility and plasma leakage.'
      },
      'slow-comt': {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Completely non-catechol structure; restores cognitive processing speed without synthesizing catecholamines or consuming SAMe methyl donors.',
        clinicalPearl: '100% safe for Met/Met genotypes who cannot tolerate dopaminergic stimulants, methyl donors, or catechol polyphenols.'
      },
      pelvic: {
        rating: 4.5,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Vagal α7nAChR anti-inflammatory signaling calms mucosal pelvic floor inflammation; balances autonomic sacral parasympathetic outflow without hyper-spasm.',
        clinicalPearl: 'Avoid doses >500mg to prevent excessive pelvic floor muscular acetylcholine tone.'
      }
    }
  },
  {
    id: 'vitamin-d3',
    name: 'Vitamin D3 (Cholecalciferol)',
    category: 'Vitamins & Nutrients',
    deliveryOrDosing: '2,000 to 5,000 IU daily in liquid lipid carrier (MCT/olive oil) with fatty breakfast',
    overallVerdict: 'Gold Helper',
    overallRating: 4.8,
    overallStars: '★★★★★',
    summary: 'Potent genomic steroid hormone acting on nuclear VDR receptors across mast cells, endothelium, and microglia. Foundational stabilizer.',
    targetReceptors: ['VDR (Vitamin D Receptor)', 'FcεRI (Downregulation)', 'eNOS (Gene Induction)'],
    conditionImpacts: {
      mcas: {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Binds nuclear VDR on mast cells, downregulating high-affinity IgE receptors (FcεRI) and physically stabilizing cellular membranes against degranulation.',
        clinicalPearl: 'Target serum 25-OH Vitamin D levels between 50–70 ng/mL for optimal mast cell quiescence.'
      },
      'brain-fog': {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Inhibits microglial NF-κB transcription, blunting pro-inflammatory cytokine cascades and protecting synaptic density from inflammatory pruning.',
        clinicalPearl: 'Liquid drops eliminate excipients, corn starch, or gelatin capsules that frequently trigger gut MCAS.'
      },
      vascular: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Directly upregulates endothelial nitric oxide synthase (eNOS) gene expression, restoring healthy vasodilation and blunting vascular wall calcification.',
        clinicalPearl: 'Must be co-administered with Vitamin K2 (MK-4) and Magnesium to ensure calcium travels into bone rather than arterial walls.'
      },
      'slow-comt': {
        rating: 4.6,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Possesses zero catecholamine-surging properties and does not consume SAMe methyl groups, completely safe for Met/Met genotypes.',
        clinicalPearl: 'Unlike methyl-B12 or methylfolate, Vitamin D3 never causes methyl-trap anxiety in slow COMT patients.'
      },
      pelvic: {
        rating: 4.5,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Suppresses inflammatory mucosal cytokine release in bladder and pelvic viscera; promotes pelvic muscle repair and peripheral nerve myelin integrity.',
        clinicalPearl: 'Essential baseline nutrient for mitigating chronic pelvic neuropathic irritation.'
      }
    }
  },
  {
    id: 'vitamin-k2-mk4',
    name: 'Vitamin K2 (MK-4 / Menatetrenone-4)',
    category: 'Vitamins & Nutrients',
    deliveryOrDosing: '500 mcg to 1,500 mcg daily in divided doses with meals (pure non-fermented synthetic)',
    overallVerdict: 'Gold Helper',
    overallRating: 4.8,
    overallStars: '★★★★★',
    summary: 'The safe, short half-life subtype of Vitamin K2. Crosses the blood-brain barrier, carboxylates Gas6 protein, and carries zero catecholamine strain.',
    targetReceptors: ['MGP (Matrix Gla Protein)', 'Gas6 (Growth Arrest-Specific 6)', 'VKORC1'],
    conditionImpacts: {
      mcas: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Pure synthetic/geraniol source contains zero fermentation metabolites, eliminating soy, natto, or biogenic histamine triggers.',
        clinicalPearl: 'Always verify the bottle specifies "MK-4" or "Menatetrenone" rather than generic K2 from natto.'
      },
      'brain-fog': {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Readily crosses the blood-brain barrier; carboxylates neural Gas6 protein to promote microglial phagocytosis of cellular debris and maintain myelin.',
        clinicalPearl: 'The only Vitamin K isomer actively concentrated in human cerebral tissue and cerebellar purkinje cells.'
      },
      vascular: {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Carboxylates Matrix Gla Protein (MGP) in arterial smooth muscle, clearing vascular micro-calcifications and improving arterial compliance.',
        clinicalPearl: 'Crucial companion for high-dose Vitamin D3 to ensure calcium is routed into bones and out of pelvic arteries.'
      },
      'slow-comt': {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Ultra-short biological half-life (~2–4 hours). Cleared smoothly without sustained adrenergic receptor sensitization or catecholamine accumulation.',
        clinicalPearl: 'Zero risk of triggering the refractory heart palpitations or insomnia caused by MK-7.'
      },
      pelvic: {
        rating: 4.5,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Preserves microvascular arterial elasticity in the internal pudendal artery and pelvic vasculature, ensuring optimal micro-perfusion.',
        clinicalPearl: 'Supports penile/clitoral and pudendal nerve sheath vascularization without vascular stiffening.'
      }
    }
  },
  {
    id: 'vitamin-k2-mk7',
    name: 'Vitamin K2 (MK-7 / Menaquinone-7)',
    category: 'Vitamins & Nutrients',
    deliveryOrDosing: 'Commonly found in commercial combo supplements (50–100 mcg); NOT RECOMMENDED',
    overallVerdict: 'Severe Hinder',
    overallRating: 1.5,
    overallStars: '★½☆☆☆',
    summary: 'Severe hazard in Slow COMT. Prolonged 72-hour half-life drives cardiac adrenergic hypersensitivity, refractory palpitations, and MCAS flares.',
    targetReceptors: ['Cardiac β1/β2 Adrenergic Sensitization (Accumulation)', 'Bacterial Histamine Content'],
    conditionImpacts: {
      mcas: {
        rating: 2.0,
        stars: '★★☆☆☆',
        verdict: 'Caution',
        mechanism: 'Bacterially fermented from natto (Bacillus subtilis var. natto); frequently contains trace soy proteins and biogenic amines that degranulate sensitive mast cells.',
        clinicalPearl: 'Check every multivitamin and Vitamin D complex label to purge hidden MK-7.'
      },
      'brain-fog': {
        rating: 2.2,
        stars: '★★☆☆☆',
        verdict: 'Caution',
        mechanism: 'Induces persistent sympathetic central nervous system agitation, resulting in non-restorative sleep, brain fatigue, and jittery cognitive hyper-focus.',
        clinicalPearl: 'Patients often assume brain fog is worsening when it is actually sleep deprivation induced by MK-7.'
      },
      vascular: {
        rating: 3.5,
        stars: '★★★½☆',
        verdict: 'Contextual / Neutral',
        mechanism: 'Effective peripheral MGP carboxylation, but severely undermined by cardiac dysrhythmias and adrenergic vasospasms in sensitive phenotypes.',
        clinicalPearl: 'Clinical benefits for bone/artery are completely matched by MK-4 without the cardiac hazard.'
      },
      'slow-comt': {
        rating: 0.6,
        stars: '☆☆☆☆☆',
        verdict: 'Severe Hinder',
        mechanism: 'Extremely prolonged 72-hour terminal half-life causes tissue accumulation; dramatically sensitizes cardiac β-receptors to circulating catecholamines, causing tachycardia and panic.',
        clinicalPearl: 'One of the most frequent unrecognized triggers of unexplained nocturnal arrhythmias in Slow COMT patients.'
      },
      pelvic: {
        rating: 2.0,
        stars: '★★☆☆☆',
        verdict: 'Caution',
        mechanism: 'Sustained sympathetic tone induces chronic involuntary pelvic floor muscle guarding, exacerbating pudendal nerve compression and anorgasmia.',
        clinicalPearl: 'Eliminating MK-7 frequently reduces unexplained pelvic floor clenching within 5–7 days.'
      }
    }
  },
  {
    id: 'magnesium-malate-bisglycinate',
    name: 'Magnesium Malate & Bisglycinate',
    category: 'Vitamins & Nutrients',
    deliveryOrDosing: '200–400 mg elemental magnesium daily (divided: Malate morning for ATP; Bisglycinate bedtime for sleep)',
    overallVerdict: 'Gold Helper',
    overallRating: 4.8,
    overallStars: '★★★★★',
    summary: 'Essential catalytic cofactor for COMT enzymatic activity. Blocks NMDA neurotoxicity, relaxes pelvic musculature, and stabilizes mast cells.',
    targetReceptors: ['COMT Catalytic Site (Mg2+ Dependent)', 'NMDA Receptor (Pore Block)', 'Voltage-Gated Calcium Channels'],
    conditionImpacts: {
      mcas: {
        rating: 4.6,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Inhibits calcium influx through voltage-gated calcium channels in mast cell membranes, blunting intracellular degranulation triggers.',
        clinicalPearl: 'Avoid magnesium citrate or oxide as they can irritate sensitive gut mucosa and cause osmotic diarrhea.'
      },
      'brain-fog': {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Physiological voltage-dependent blocker of NMDA receptors; prevents glutamate-driven excitotoxic neural burn-out and clarifies executive processing.',
        clinicalPearl: 'Malic acid component enters the Krebs cycle, supporting ATP generation in cerebral mitochondria.'
      },
      vascular: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Directly relaxes vascular smooth muscle cells and balances calcium dynamics in arterial walls, blunting vasospasms and microvascular tightness.',
        clinicalPearl: 'Supports healthy arterial baroreflex sensitivity in orthostatic dysregulation.'
      },
      'slow-comt': {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Magnesium (Mg2+) is the mandatory catalytic cofactor for the COMT enzyme. Deficiency drops COMT efficiency down to baseline; adequate levels maximize catechol breakdown.',
        clinicalPearl: 'The non-negotiable frontline nutritional intervention for Slow COMT Met/Met genotypes.'
      },
      pelvic: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Diffuses into pelvic floor myofascial trigger points, displacing excess calcium and facilitating involuntary smooth and skeletal muscle relaxation around the pudendal canal.',
        clinicalPearl: 'Take 200mg bisglycinate 45 minutes before sleep to prevent nocturnal pelvic floor hyper-clenching.'
      }
    }
  },
  {
    id: 'molybdenum-glycinate',
    name: 'Molybdenum Glycinate (SUOX Cofactor)',
    category: 'Vitamins & Nutrients',
    deliveryOrDosing: '150 to 500 mcg daily with breakfast or lunch',
    overallVerdict: 'Gold Helper',
    overallRating: 4.6,
    overallStars: '★★★★½',
    summary: 'Trace mineral cofactor for Sulfite Oxidase (SUOX) and Aldehyde Oxidase (AOX). Clears neurotoxic sulfites and environmental sulfur-induced histamine flares.',
    targetReceptors: ['SUOX (Sulfite Oxidase)', 'AOX (Aldehyde Oxidase)', 'XDH (Xanthine Dehydrogenase)'],
    conditionImpacts: {
      mcas: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Catalyzes Sulfite Oxidase conversion of toxic sulfites into inert sulfates. Sulfites are potent endogenous mast cell degranulation triggers.',
        clinicalPearl: 'Essential if you experience sudden flushing, brain fog, or palpitations after consuming wine, sulfur foods, or Epsom salts.'
      },
      'brain-fog': {
        rating: 4.6,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Sulfite accumulation directly impairs glutamate transport and cerebral mitochondrial respiration; molybdenum unblocks this metabolic stall.',
        clinicalPearl: 'Clears "toxic head fullness" and sulfur-induced cognitive lethargy.'
      },
      vascular: {
        rating: 4.4,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Prevents sulfite-mediated endothelial dysfunction and protects microvascular glycocalyx integrity from reactive sulfur species.',
        clinicalPearl: 'Maintains healthy capillary wall tone.'
      },
      'slow-comt': {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'SUOX clears cellular toxic roadblocks without demanding methyl donors or stimulating adrenergic pathways, providing safe enzymatic detoxification.',
        clinicalPearl: 'Safe for Slow COMT because it operates via molybdenum pterin cofactors rather than SAMe methylation.'
      },
      pelvic: {
        rating: 4.2,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Reduces urinary bladder mucosal irritation caused by excreted sulfites, calming pelvic visceral hypersensitivity.',
        clinicalPearl: 'Helps alleviate interstitial cystitis-like bladder urgency and perineal burning.'
      }
    }
  },
  {
    id: 'ascorbic-acid-p5p',
    name: 'Buffered Ascorbic Acid + P-5-P (Active B6)',
    category: 'Vitamins & Nutrients',
    deliveryOrDosing: '500 mg non-acidic buffered Vitamin C (calcium/magnesium ascorbate) + 20–30 mg Pyridoxal-5-Phosphate',
    overallVerdict: 'Gold Helper',
    overallRating: 4.6,
    overallStars: '★★★★½',
    summary: 'Direct enzymatic cofactor pair for Diamine Oxidase (DAO) and collagen matrix synthesis. Eliminates circulating histamine while protecting vascular walls.',
    targetReceptors: ['DAO (Diamine Oxidase Cofactor)', 'Endothelial Collagen Cross-linking'],
    conditionImpacts: {
      mcas: {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Vitamin C actively degrades circulating histamine molecules and accelerates DAO activity; P-5-P is the essential cofactor for DAO enzyme synthesis.',
        clinicalPearl: 'Must use buffered non-acidic ascorbate; standard acidic ascorbic acid can irritate sensitive gastric mast cells.'
      },
      'brain-fog': {
        rating: 4.5,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'P-5-P acts as cofactor for GABA and serotonin synthesis, counterbalancing excessive glutamate neurotoxicity and improving mental clarity.',
        clinicalPearl: 'Keep P-5-P dose under 50mg daily to avoid peripheral neuropathy liabilities.'
      },
      vascular: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Ascorbate recycles tetrahydrobiopterin (BH4), the vital cofactor that prevents eNOS uncoupling and maintains robust endothelial nitric oxide generation.',
        clinicalPearl: 'Strengthens microvascular basement membranes against orthostatic capillary fragility.'
      },
      'slow-comt': {
        rating: 4.4,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'P-5-P assists peripheral amino acid decarboxylation, but very high doses can stimulate dopamine synthesis; keep dosage modest.',
        clinicalPearl: 'Use modest daily doses (25mg P-5-P) to avoid surging catecholamine levels.'
      },
      pelvic: {
        rating: 4.3,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Maintains connective tissue integrity of the endopelvic fascia and pudendal nerve sheath, reducing mechanical compression vulnerabilities.',
        clinicalPearl: 'Supports healthy perineal pelvic fascia elasticity.'
      }
    }
  },
  {
    id: 'benfotiamine',
    name: 'Benfotiamine (Lipophilic Vitamin B1)',
    category: 'Vitamins & Nutrients',
    deliveryOrDosing: '150 to 300 mg daily with a fat-containing meal',
    overallVerdict: 'Gold Helper',
    overallRating: 4.5,
    overallStars: '★★★★½',
    summary: 'High-bioavailability lipophilic thiamine derivative. Activates transketolase, blocking advanced glycation end-products (AGEs) and neurovascular damage.',
    targetReceptors: ['Transketolase Activation', 'Endothelial Glycation Defense', 'Peripheral Nerve Myelin'],
    conditionImpacts: {
      mcas: {
        rating: 4.3,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Blunts vascular endothelial RAGE receptor signaling, reducing histamine-mediated capillary leakiness.',
        clinicalPearl: 'Zero histamine release risk compared to conventional yeast-derived thiamine.'
      },
      'brain-fog': {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Crosses lipid cellular membranes 5x more effectively than standard thiamine; accelerates neuronal mitochondrial pyruvate dehydrogenase for instant ATP output.',
        clinicalPearl: 'Directly attacks the sluggish metabolic pace characteristic of sluggish cognitive tempo.'
      },
      vascular: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Inhibits endothelial cellular apoptosis and suppresses hexosamine pathway flux, protecting microvascular compliance under orthostatic stress.',
        clinicalPearl: 'Shields delicate cerebral and pelvic micro-vessels from oxidative shear.'
      },
      'slow-comt': {
        rating: 4.5,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Non-stimulatory mitochondrial energizer that does not rely on adrenergic β-receptor pathways or drain methyl groups.',
        clinicalPearl: 'Provides clean cellular energy without the rapid heart rate or restlessness of caffeine.'
      },
      pelvic: {
        rating: 4.6,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Promotes peripheral axonal repair and myelin sheath preservation in the pudendal and pelvic splanchnic nerves, relieving chronic neurogenic numbness.',
        clinicalPearl: 'One of the few evidence-based micronutrients for peripheral pudendal sensory nerve recovery.'
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. PHARMACOTHERAPY & SMALL MOLECULES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'isrib',
    name: 'ISRIB / trans-ISRIB (Integrated Stress Response Inhibitor)',
    category: 'Pharmacotherapy',
    deliveryOrDosing: 'Investigational eIF2B activator; preclinical / translational research protocols (0.25–2.5 mg/kg in lipid/cyclodextrin formulations); next-gen pipeline: 2BAct',
    overallVerdict: 'Gold Helper',
    overallRating: 4.8,
    overallStars: '★★★★★',
    summary: 'Symmetric allosteric activator of eukaryotic initiation factor 2B (eIF2B) that overrides phosphorylated eIF2α translational arrest. Resets neuroinflammatory cognitive blockade, restores dendritic spine translation, and rejuvenates hippocampal memory with zero catecholamine load.',
    targetReceptors: ['eIF2B Allosteric Interface (Decamer Holoenzyme Stabilization)', 'p-eIF2α Resistance', 'ATF4 Downregulation', 'De Novo Dendritic Protein Synthesis'],
    clinicalConsiderations: [
      'Molecular Mechanism on eIF2B & ISR: Under conditions of chronic microglial neuroinflammation, systemic cytokine storms, or oxidative stress, four stress kinases (PERK, PKR, GCN2, HRI) phosphorylate eIF2α at Ser51. Phosphorylated eIF2α competitively locks eIF2B into an inactive configuration, shutting down global protein translation while aberrantly translating stress transcription factors (ATF4/CHOP). trans-ISRIB binds directly across the central symmetry axis of eIF2B, acting as a molecular staple that stabilizes the active decameric holoenzyme. This renders eIF2B completely resistant to inhibitory p-eIF2α, immediately restoring general translation and extinguishing pathological ATF4 expression.',
      'SCT & Neuroinflammatory Cognitive Reset: Unlike CNS stimulants (methylphenidate, amphetamines) that artificially elevate synaptic monoamines, ISRIB directly repairs the biochemical machinery required for long-term potentiation (LTP). In animal models of neuroinflammation, concussive brain injury, and aging, a brief regimen of ISRIB permanently restored prefrontal working memory, reversed dendritic spine pruning, and cleared profound executive processing latency within 24–48 hours.',
      'Slow COMT & Autonomic Freedom (Zero Catecholamines): ISRIB functions strictly at the level of ribosomal translation initiation and does not interact with dopamine, norepinephrine, epinephrine, serotonin, or adrenergic receptors. It produces zero tachycardia, zero blood pressure surges, and zero risk of catecholamine accumulation, making it the ideal theoretical cognitive enhancer for Slow COMT (Met/Met) individuals who cannot tolerate stimulant ADHD medications.',
      'MCAS & Immune Cell Considerations: Secretory immune cells (including mast cells and plasma B cells) utilize the physiological Integrated Stress Response (via PERK and PKR) to cope with high endoplasmic reticulum (ER) folding burdens during mass cytokine and immunoglobulin synthesis. While ISRIB restores neuronal protein translation, blunting the ISR during an acute anaphylactoid crisis or viral infection could theoretically reduce cellular stress tolerance. Therefore, ISRIB is indicated for chronic neuro-cognitive rehabilitation, not acute peripheral allergy rescue.',
      'Formulation & Bioavailability Reality: Pure crystalline trans-ISRIB has virtually zero aqueous solubility and poor oral bioavailability unless compounded in specialized lipid matrices, hydroxypropyl-β-cyclodextrin complexes, or advanced nano-dispersions. It remains an investigational chemical in translational neuroscience, with second-generation proprietary analogues (e.g. 2BAct) currently traversing clinical trials.'
    ],
    keyContraindications: [
      'Investigational compound: strictly for translational clinical research context; do not ingest raw, unformulated industrial chemical powders.',
      'Active acute viral illness or severe systemic infection (the physiological ISR is required for host antiviral defense and halting viral protein synthesis).',
      'Acute ischemic stroke or massive cellular trauma where temporary translational shutdown is cytoprotective.'
    ],
    conditionImpacts: {
      mcas: {
        rating: 4.2,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Protects hippocampal and cortical neurons from apoptosis and synaptic pruning driven by chronic mast cell cytokine bombardment (TNF-α, IL-1β, IL-6 crossing BBB); maintains microglial phenotypic balance.',
        clinicalPearl: 'Reserved for chronic neuro-cognitive recovery rather than acute peripheral mast cell degranulation flares.'
      },
      'brain-fog': {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Directly terminates the translational arrest imposed by phosphorylated eIF2α in hippocampal pyramidal neurons and prefrontal cortex, unlocking de novo synaptic protein synthesis and restoring LTP.',
        clinicalPearl: 'The most potent experimental agent known in translational neuroscience for reversing neuroinflammatory brain fog and sluggish processing speed.'
      },
      vascular: {
        rating: 4.6,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Protects cerebral and retinal microvascular endothelial cells from ER stress-induced apoptosis without causing vasoconstriction, tachycardia, or orthostatic blood pressure instability.',
        clinicalPearl: 'Shields the blood-brain barrier and neurovascular unit against chronic hypoperfusion shear stress.'
      },
      'slow-comt': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Completely devoid of dopaminergic, noradrenergic, or amphetamine-like sympathomimetic activity. Delivers intense pro-cognitive recovery with zero burden on catecholamine clearance pathways.',
        clinicalPearl: 'Provides the cognitive rejuvenation that ADHD patients seek without triggering the autonomic panic, racing heart, or insomnia associated with Slow COMT.'
      },
      pelvic: {
        rating: 4.5,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Reduces chronic central sensitization and neuropathic hypersensitivity in spinal and sacral reflex pathways without stimulating sympathetic tone or pelvic muscle guarding.',
        clinicalPearl: 'Calms central neurogenic pain pathways without affecting smooth or skeletal muscle tone.'
      }
    }
  },
  {
    id: 'tadalafil',
    name: 'Tadalafil (Cialis / Daily Low-Dose PDE5 Inhibitor)',
    category: 'Pharmacotherapy',
    deliveryOrDosing: '2.5mg to 5.0mg orally once daily at the same time each morning; maintain steady-state smooth muscle relaxation; avoid on-demand 20mg spikes',
    overallVerdict: 'Gold Helper',
    overallRating: 4.8,
    overallStars: '★★★★★',
    summary: 'Long-acting phosphodiesterase-5 (PDE5) inhibitor elevating cGMP. Relaxes pelvic floor and prostate smooth muscle, opens the internal pudendal arterial bed, promotes endothelial eNOS flow-mediated dilation, and enhances prefrontal microvascular perfusion with zero COMT burden.',
    targetReceptors: ['Phosphodiesterase-5 (PDE5 Enzyme)', 'Cyclic GMP (cGMP) Accumulation', 'Protein Kinase G (PKG)', 'Endothelial Nitric Oxide Synthase (eNOS)'],
    clinicalConsiderations: [
      'Pelvic Floor Hypertonicity & Pudendal Decompression: In chronic pelvic pain syndrome (CPPS) and hypertonic pelvic floor dysfunction, ischemic contracture of the levator ani, puborectalis, and obturator internus compresses the pudendal neurovascular bundle. Daily low-dose tadalafil (2.5–5mg) induces continuous vascular and smooth muscle relaxation in the internal pudendal arterial branches and bladder neck. This restores microcirculatory oxygenation to pelvic floor musculature, dampens ischemic spasm, and dramatically lowers the sensory biological threshold for sexual climax and orgasmic release.',
      'Lifelong Anorgasmia Breakthrough: Severe pelvic floor muscular tone and pudendal nerve entrapment restrict genital blood flow and blunt pudendal sensory afferent firing. By continuously upregulating nitric oxide / cGMP signaling, tadalafil restores robust genital engorgement, enhances sensory mechanoreceptor responsiveness, and facilitates spinal orgasmic reflex arcs without requiring adrenergic stimulation.',
      'Slow COMT Immunity (Zero Catecholamine Burden): Tadalafil has zero interaction with catecholamine synthesis, reuptake, or degradation. Unlike stimulants or dopaminergic agents that precipitate severe hypertensive headaches and neck stiffness in Slow COMT (Met/Met) genotypes, tadalafil works purely through the cyclic nucleotide cGMP pathway.',
      'Vascular Synergy with Telmisartan & Caution with Amlodipine: Tadalafil synergizes favorably with Telmisartan (ARB) by augmenting endothelial flow-mediated dilation and renal microvascular perfusion. However, because the patient takes Amlodipine (a dihydropyridine calcium channel blocker that dilates pre-capillary arterioles), initiating tadalafil at a conservative low dose (2.5mg daily) prevents excessive peripheral vasodilation and guards against orthostatic blood pressure drops or pedal edema.',
      'Prefrontal Neurovascular & Microglial Modulation: PDE5 is expressed in cerebral microvessels and hippocampus. By elevating cGMP and activating PKG, tadalafil promotes phosphorylation of CREB, upregulates Brain-Derived Neurotrophic Factor (BDNF), improves cerebral blood flow, and provides neuroprotection against splanchnic hypoperfusion after meals.'
    ],
    keyContraindications: [
      'Absolute Contraindication: Never combine with organic nitrates (nitroglycerin, isosorbide mononitrate) or soluble guanylate cyclase stimulators (riociguat) due to life-threatening refractory hypotension.',
      'Avoid initiating at high episodic doses (e.g. 20mg PRN); use strictly continuous low-dose daily therapy (2.5–5mg) to prevent sudden blood pressure fluctuations.',
      'Differentiate PDE5-induced nasal mucosal turbinate congestion from true MCAS allergic degranulation.'
    ],
    conditionImpacts: {
      mcas: {
        rating: 4.6,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Elevates intracellular cGMP, which exerts an inhibitory tone on store-operated calcium entry (SOCE) in mast cells, reducing mediator degranulation threshold.',
        clinicalPearl: 'Nasal stuffiness is a benign direct pharmacological venodilation of nasal turbinates, not an allergic mast cell flare.'
      },
      'brain-fog': {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Crosses blood-brain barrier; enhances cerebral microvascular blood flow, stimulates cGMP-PKG-CREB signaling in pyramidal neurons, and elevates BDNF.',
        clinicalPearl: 'Improves late-afternoon mental stamina by preventing cerebral microvascular hypoperfusion during seated work.'
      },
      vascular: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Potentiates endothelial nitric oxide signaling and flow-mediated dilation; works synergistically with Telmisartan to improve post-capillary capacitance.',
        clinicalPearl: 'Start at 2.5mg daily to assess blood pressure tolerance alongside Amlodipine; take at consistent morning time.'
      },
      'slow-comt': {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Completely devoid of adrenergic, dopaminergic, or catechol structures; places zero metabolic clearance burden on COMT or hepatic SAMe methyl reserves.',
        clinicalPearl: 'The safest non-stimulant pro-vascular and sexual health agent for homozygous Met/Met individuals.'
      },
      pelvic: {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Inhibits PDE5 in pelvic floor smooth muscle, prostate stroma, and internal pudendal arterial bed; restores microvascular perfusion to ischemic pelvic muscles and pudendal nerve.',
        clinicalPearl: 'First-line pharmacological anchor for hypertonic pelvic floor dysfunction and overcoming lifelong anorgasmic reflex blocks.'
      }
    }
  },
  {
    id: '5-meo-dmt',
    name: '5-MeO-DMT (Investigational Ultra-Rapid 5-HT1A Agonist)',
    category: 'Pharmacotherapy',
    deliveryOrDosing: 'Investigational clinical trial / specialized psychotherapy setting: 2–5mg vaporized freebase (low dose) up to 10–12mg (full mystical release); strictly supervised with continuous vital monitoring',
    overallVerdict: 'Caution',
    overallRating: 4.4,
    overallStars: '★★★★☆',
    summary: 'High-affinity full agonist at serotonin 5-HT1A receptors. Silences dorsal raphe firing, extinguishes Default Mode Network (DMN) hyper-connectivity, releases deeply stored somatic pelvic armoring, and triggers profound neuro-autonomic reset without COMT degradation.',
    targetReceptors: ['Serotonin 5-HT1A (High-Affinity Somatodendritic & Postsynaptic Agonist)', 'Dorsal Raphe Autoreceptors', 'Paraventricular Nucleus Oxytocin Circuits', 'Sigma-1 Receptors'],
    clinicalConsiderations: [
      '5-HT1A Agonism & Autoreceptor Silencing: Unlike classic psychedelics (psilocybin, LSD) that act primarily via 5-HT2A, 5-MeO-DMT has nanomolar affinity for 5-HT1A receptors. Somatodendritic 5-HT1A autoreceptor activation in the dorsal raphe nucleus (DRN) rapidly arrests serotonin neuron firing, collapsing Default Mode Network (DMN) hyperconnectivity and inducing total acute ego dissolution ("unitive state") within seconds.',
      'Somatic Pelvic Armoring & Anorgasmic Reflex Release: In patients with chronic pelvic floor hypertonicity and lifelong anorgasmia, chronic unconscious guarded contraction is maintained by hyperactive autonomic threat circuits. 5-HT1A agonism in the hypothalamus triggers an immediate surge of central oxytocin release while desensitizing spinal sexual inhibitory pathways. This frequently produces cathartic myofascial unwinding of the pelvic diaphragm and sacral plexus.',
      'Slow COMT Safety & Metabolic Clearance: 5-MeO-DMT is an indolethylamine that is cleared via Monoamine Oxidase-A (MAO-A) oxidative deamination and CYP2D6 O-demethylation (to bufotenin). It has no catechol ring and does not interact with COMT or dopamine transporters, creating zero catecholamine bottleneck for Slow COMT genotypes.',
      'Vascular Precautions & Transient Autonomic Spikes: During the acute 5–15 minute peak, acute psychological surrender and intense somatic release induce transient surges in mean arterial pressure and heart rate. In a patient on Amlodipine and Telmisartan, sessions must occur in a supine position under professional blood pressure monitoring.',
      'MCAS & Immunomodulatory Balance: 5-HT1A and Sig-1R stimulation quells microglial M1 pro-inflammatory cytokine expression. However, an acute panic reaction could trigger sympathetic CRH and mast cell degranulation. Comprehensive pre-session somatic preparation and peripheral mast cell stabilization are mandatory.'
    ],
    keyContraindications: [
      'Absolute Contraindication: Strictly prohibited with Monoamine Oxidase Inhibitors (MAOIs such as harmaline, Syrian rue, Ayahuasca, or phenelzine) due to fatal serotonin syndrome and hyperthermia.',
      'Uncontrolled severe cardiovascular disease or unstable cardiac arrhythmias.',
      'Must never be administered solo or in unmonitored recreational settings; requires trained medical or psychological supervision in a supine position.'
    ],
    conditionImpacts: {
      mcas: {
        rating: 4.4,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Stimulates 5-HT1A and Sigma-1 receptors, dampening microglial neuroinflammation; however, sympathetic emotional distress can transiently elevate peripheral mast cell risk.',
        clinicalPearl: 'Ensure mast cell baseline is well stabilized (Cromolyn/Ketotifen) and set/setting is calm before any therapeutic session.'
      },
      'brain-fog': {
        rating: 4.6,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Breaks rigid pathological frontoparietal attractor loops; induces massive dendritic spine plasticity and resets post-inflammatory cognitive exhaustion.',
        clinicalPearl: 'Acts as an existential circuit breaker for chronic neuro-cognitive freeze and hyper-analytical ruminative loops.'
      },
      vascular: {
        rating: 3.5,
        stars: '★★★½☆',
        verdict: 'Caution',
        mechanism: 'Induces transient acute elevations in heart rate and blood pressure during peak immersion; requires hemodynamic buffering and supine posturing.',
        clinicalPearl: 'Maintain baseline Telmisartan; ensure patient is positioned supine to avoid orthostatic dizziness upon return.'
      },
      'slow-comt': {
        rating: 4.6,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Cleared exclusively by MAO-A and CYP2D6; does not require COMT for degradation and produces zero catecholamine accumulation.',
        clinicalPearl: 'Completely avoids the severe stimulant-induced neck tension and dopamine pooling seen in Slow COMT.'
      },
      pelvic: {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Stimulates hypothalamic oxytocin release and silences descending sympathetic tone, unlocking deep somatic release of chronic pelvic floor muscular guarding.',
        clinicalPearl: 'A profound therapeutic catalyst for dissolving the chronic psychological and autonomic bracing underlying lifelong anorgasmia.'
      }
    }
  },
  {
    id: 'dmt',
    name: 'N,N-DMT (Investigational 5-HT2A & Sigma-1 Receptor Agonist)',
    category: 'Pharmacotherapy',
    deliveryOrDosing: 'Investigational translational research setting: 15–30mg vaporized pure synthetic freebase or 0.2–0.4 mg/kg intravenous infusion in clinical trial environments; zero botanical impurities',
    overallVerdict: 'Caution',
    overallRating: 4.5,
    overallStars: '★★★★½',
    summary: 'Endogenous indole alkaloid and rapid-acting psychedelic. Potent dual agonist at 5-HT2A and the endoplasmic reticulum Sigma-1 Receptor (Sig-1R). Promotes rapid cortical spinogenesis, protects against neuroinflammatory ER stress, and resets thalamocortical sensory gating.',
    targetReceptors: ['Serotonin 5-HT2A Receptor (Gq/11)', 'Sigma-1 Receptor (Endoplasmic Reticulum Chaperone)', '5-HT1A / 5-HT2C', 'TrkB-BDNF Neuroplasticity Cascade'],
    clinicalConsiderations: [
      'Sigma-1 Receptor (Sig-1R) Endoplasmic Reticulum Chaperoning: Beyond its classic 5-HT2A cortical effects, DMT is a natural ligand for the Sigma-1 Receptor (Sig-1R, Ki ~ 14 µM). In the presence of neuroinflammation, ischemia, or cellular stress, Sig-1R chaperones protect mitochondrial respiration, inhibit pro-inflammatory microglial cytokines (TNF-α, IL-1β, IL-6), and repress the Integrated Stress Response (complementing ISRIB mechanisms).',
      'Rapid Cortical Spinogenesis & Dendritic Arborization: DMT stimulates the TrkB-mTOR signaling cascade, triggering de novo dendritic spine growth and synaptic formation in the prefrontal cortex within hours. This physically rebuilds synaptic connectivity degraded by chronic mast cell cytokine storms and SCT cognitive deceleration.',
      'Slow COMT Genotypic Compatibility: DMT is a pure indolethylamine metabolized primarily by Monoamine Oxidase-A (MAO-A) into indole-3-acetic acid (3-IAA). It does not engage Catechol-O-Methyltransferase, avoids methyl donor exhaustion (SAMe sparing), and avoids adrenergic tachycardia.',
      'Strict MCAS Purity Warning (Synthetic vs. Plant Extract): Natural plant extracts (such as Ayahuasca or botanical bark extracts) contain complex plant tannins, terpenes, lipid contaminants, and solvent residues. When vaporized or ingested, these botanical contaminants act as potent secretagogues that provoke violent non-IgE mast cell degranulation, histamine dumping, and severe bronchospasm. Only pharmaceutical-grade synthetic DMT freebase or sterile IV formulations are clinically acceptable for this phenotype.',
      'Hemodynamic Dynamics: The intense 15–20 minute visionary experience induces transient increases in systolic blood pressure and heart rate. Safe under controlled settings, but contraindicated with concurrent MAO inhibitors without specialized medical protocols.'
    ],
    keyContraindications: [
      'Absolute Contraindication: Never combine with oral MAOIs (harmaline, Banisteriopsis caapi / Ayahuasca brew) outside of advanced clinical research trials, as MAO inhibition prolongs cardiovascular strain and heightens hypertensive vulnerability.',
      'Impure botanical preparations or unverified street extracts (extreme mast cell degranulation and bronchospasm hazard from plant lipids and solvents).',
      'Active psychotic illness, bipolar mania, or unstable severe cardiovascular disease.'
    ],
    conditionImpacts: {
      mcas: {
        rating: 4.3,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Sigma-1 receptor agonism suppresses microglial TLR4 signaling and macrophage TNF-α output; however, synthetic purity is non-negotiable to prevent airway mast cell irritation.',
        clinicalPearl: 'Strictly avoid botanical extracts or Ayahuasca brews containing plant tannins and biogenic amines that trigger massive histamine dumping.'
      },
      'brain-fog': {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Activates 5-HT2A and TrkB-mTOR to trigger rapid spinogenesis in prefrontal pyramidal neurons; breaks chronic SCT processing latency and cognitive freeze.',
        clinicalPearl: 'Unlocks a sustained 7–14 day "afterglow" window of heightened cognitive flexibility, rapid word retrieval, and neuroplastic receptivity.'
      },
      vascular: {
        rating: 3.8,
        stars: '★★★★☆',
        verdict: 'Contextual / Neutral',
        mechanism: 'Transient sympathomimetic blood pressure and pulse increase during the 15-minute active phase; well tolerated with baseline Telmisartan protection in a supine setting.',
        clinicalPearl: 'Perform strictly in a recumbent/supine position to prevent orthostatic instability upon re-emergence.'
      },
      'slow-comt': {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Metabolized cleanly via MAO-A into indole-3-acetic acid; zero catecholamine burden, zero COMT interaction, and zero depletion of hepatic methyl reserves.',
        clinicalPearl: 'Provides powerful consciousness and neuroplastic modulation without the dopaminergic overstimulation of classic ADHD stimulants.'
      },
      pelvic: {
        rating: 4.5,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Promotes deep somatic recalibration and downregulates spinal dorsal horn central sensitization, reducing chronic pudendal hypersensitivity.',
        clinicalPearl: 'Helps decouple chronic pelvic discomfort from autonomic threat responses.'
      }
    }
  },
  {
    id: 'oral-cromolyn',
    name: 'Oral Cromolyn Sodium (Gastrocrom)',
    category: 'Pharmacotherapy',
    deliveryOrDosing: '100–200 mg in 4 oz water, 3–4x daily, strictly 20–30 min prior to meals and before bed',
    overallVerdict: 'Gold Helper',
    overallRating: 4.9,
    overallStars: '★★★★★',
    summary: 'Unabsorbable gut-mucosal mast cell lock. Blocks splanchnic bacterial translocation and breaks the gut-brain-pelvic inflammatory cross-talk axis.',
    targetReceptors: ['Mucosal Mast Cell Membrane Stabilization', 'Chloride Channel Gating'],
    conditionImpacts: {
      mcas: {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Locks luminal mucosal mast cell membranes in GI tract, blocking local degranulation triggered by food peptides, temperature, or mechanical digestion.',
        clinicalPearl: 'Start slow (50mg 1x/day) and titrate up over 3 weeks to prevent paradoxical transient histamine flare.'
      },
      'brain-fog': {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Stops gut permeability (leaky gut), preventing bacterial endotoxin (LPS) from entering portal circulation and crossing to prime central microglia.',
        clinicalPearl: 'Eliminates severe post-prandial cognitive blunting ("food coma") within 14 days of optimal dosing.'
      },
      vascular: {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Halts histamine-driven splanchnic arteriolar vasodilation, preserving central blood pressure and preventing post-prandial orthostatic collapse.',
        clinicalPearl: 'Dramatically reduces after-meal lightheadedness and tachycardia.'
      },
      'slow-comt': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Negligible systemic absorption (<1%); operates entirely locally without liver metabolism or interaction with COMT enzymes.',
        clinicalPearl: 'Completely zero catecholamine stimulation; perfectly tolerated by Met/Met phenotypes.'
      },
      pelvic: {
        rating: 4.6,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Disrupts visceral organ cross-sensitization where gut mucosal inflammation triggers reflex hypertonicity in pelvic floor muscles via sacral cord loops.',
        clinicalPearl: 'Calms visceral gut-pelvic nerve cross-talk that exacerbates pudendal hypersensitivity.'
      }
    }
  },
  {
    id: 'ketotifen',
    name: 'Ketotifen (Compounded Oral)',
    category: 'Pharmacotherapy',
    deliveryOrDosing: '0.5 to 2 mg orally at bedtime (titrated slowly from 0.25mg)',
    overallVerdict: 'Gold Helper',
    overallRating: 4.8,
    overallStars: '★★★★★',
    summary: 'Dual systemic H1 receptor antagonist and potent mast cell membrane stabilizer. Crosses blood-brain barrier; provides profound nocturnal stabilization.',
    targetReceptors: ['H1 Receptor Antagonist', 'Mast Cell Membrane Stabilizer', 'Phosphodiesterase (Mild)'],
    conditionImpacts: {
      mcas: {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Stabilizes both mucosal and systemic/connective tissue mast cells while simultaneously blocking histamine at H1 receptors across the body.',
        clinicalPearl: 'Compounding in hypoallergenic capsules (e.g. microcrystalline cellulose or plain rice powder) is essential.'
      },
      'brain-fog': {
        rating: 4.6,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Suppresses nocturnal dural and central neuro-mast cell histamine release, enabling deep restorative slow-wave sleep and clearing daytime fog.',
        clinicalPearl: 'Causes sedation for first 5–7 days; dose strictly at bedtime to harness sedation for deep sleep.'
      },
      vascular: {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Blocks histamine-mediated capillary permeability and peripheral vasodilation, preventing morning orthostatic pooling.',
        clinicalPearl: 'Helps eliminate morning dizziness upon rolling out of bed.'
      },
      'slow-comt': {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Does not elevate dopamine or norepinephrine; eliminates nocturnal histamine surges that trigger reflex adrenal epinephrine release.',
        clinicalPearl: 'Terminates 3:00 AM histamine-wakefulness spikes with sudden rapid heart pounding.'
      },
      pelvic: {
        rating: 4.5,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Locks pelvic visceral and pudendal mast cells, decreasing local neurogenic inflammation and relaxing autonomic pelvic guarding.',
        clinicalPearl: 'Reduces chronic nocturia, pelvic burning, and perineal irritation.'
      }
    }
  },
  {
    id: 'low-dose-naltrexone',
    name: 'Low-Dose Naltrexone (LDN)',
    category: 'Pharmacotherapy',
    deliveryOrDosing: '1.5 to 4.5 mg orally at bedtime (titrated from 0.5mg over 4–8 weeks)',
    overallVerdict: 'Gold Helper',
    overallRating: 4.8,
    overallStars: '★★★★★',
    summary: 'Antagonist of microglial Toll-Like Receptor 4 (TLR4) and transient mu-opioid blocker. Reboots microglial priming and upregulates endogenous endorphins.',
    targetReceptors: ['Microglial TLR4 (Toll-Like Receptor 4)', 'Mu-Opioid Receptor (Transient)'],
    conditionImpacts: {
      mcas: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'TLR4 inhibition shuts down non-IgE mast cell triggering pathways; transient opioid blockade upregulates met-enkephalins which calm mast cells.',
        clinicalPearl: 'If sleep disturbances or vivid dreams occur, switch dosing to morning upon waking.'
      },
      'brain-fog': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Shuts down primed, neuro-toxic M1 microglia in the hippocampus and prefrontal cortex, transforming them into M2 reparative phenotype.',
        clinicalPearl: 'Foundational medication for reversing neuroinflammatory brain fog and sluggish cognitive tempo.'
      },
      vascular: {
        rating: 4.5,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Reduces systemic endothelial inflammatory cytokine burden (TNF-α, IL-6), preserving microvascular elasticity and capillary health.',
        clinicalPearl: 'Synergistic with eNOS upregulation protocols.'
      },
      'slow-comt': {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Bypasses catecholamine pathways entirely. Enhances endogenous opioid tone without surging epinephrine or dopamine.',
        clinicalPearl: 'Extremely well-tolerated by Met/Met patients when started at low doses (0.5mg–1.0mg).'
      },
      pelvic: {
        rating: 4.6,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Attenuates central sensitization and dorsal horn neuropathic wind-up, easing visceral hypersensitivity and pudendal pain gating.',
        clinicalPearl: 'Helps reset chronic pelvic neurogenic pain pathways without inducing sedation or dependence.'
      }
    }
  },
  {
    id: 'roflumilast',
    name: 'Roflumilast (Daliresp / Zunveyl)',
    category: 'Pharmacotherapy',
    deliveryOrDosing: '100–250 mcg orally daily (micro-dosed below standard COPD 500mcg dose)',
    overallVerdict: 'Gold Helper',
    overallRating: 4.5,
    overallStars: '★★★★½',
    summary: 'Highly selective, non-stimulant PDE4 inhibitor. Elevates intracellular cAMP, suppresses microglial neuroinflammation, and enhances CREB cognition.',
    targetReceptors: ['PDE4A/B/C/D Isoforms (Phosphodiesterase-4)', 'cAMP / PKA / CREB Pathway'],
    conditionImpacts: {
      mcas: {
        rating: 4.6,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Elevating intracellular cAMP in mast cells strongly inhibits degranulation and blunts downstream leukotriene and TNF-α transcription.',
        clinicalPearl: 'Requires micro-dosing (100–250mcg) to prevent gastrointestinal nausea that occurs at full 500mcg COPD doses.'
      },
      'brain-fog': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Elevates hippocampal and prefrontal cAMP, triggering CREB phosphorylation. Enhances synaptic plasticity and working memory speed without adrenergic stimulation.',
        clinicalPearl: 'The premier non-stimulant cognitive enhancer for sluggish cognitive tempo with inflammatory origin.'
      },
      vascular: {
        rating: 4.4,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Suppresses inflammatory leukocyte-endothelial adhesion, maintaining smooth blood flow through cerebral micro-vessels.',
        clinicalPearl: 'Promotes microvascular endothelial health.'
      },
      'slow-comt': {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Enhances cognitive clarity via the cAMP/CREB cascade rather than blocking dopamine reuptake or releasing norepinephrine. Zero COMT load.',
        clinicalPearl: 'Safe, jitter-free cognitive alternative to contraindicated stimulants like Modafinil or amphetamines.'
      },
      pelvic: {
        rating: 4.1,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Anti-inflammatory action reduces pelvic nerve inflammation; cAMP elevation promotes peripheral smooth muscle relaxation.',
        clinicalPearl: 'Non-irritating to pelvic and pudendal nerve structures.'
      }
    }
  },
  {
    id: 'pitolisant',
    name: 'Pitolisant (Wakix)',
    category: 'Pharmacotherapy',
    deliveryOrDosing: '4.45 to 17.8 mg orally once daily in the morning upon waking',
    overallVerdict: 'Moderate Helper',
    overallRating: 4.0,
    overallStars: '★★★★☆',
    summary: 'First-in-class Histamine H3 receptor inverse agonist. Surges central acetylcholine and dopamine exclusively in cortex without peripheral mast cell activation.',
    targetReceptors: ['Central Histamine H3 Auto/Hetero-Receptors', 'Cortical Acetylcholine Disinhibition'],
    conditionImpacts: {
      mcas: {
        rating: 3.8,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Acts strictly on central H3 auto-receptors in the brain; does NOT bind or stimulate peripheral H1/H2 receptors on mast cells.',
        clinicalPearl: 'Does not trigger peripheral mast cell flares despite involving histamine pathways.'
      },
      'brain-fog': {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Blocks H3 auto-inhibitory receptors, unleashing a surge of prefrontal acetylcholine and dopamine. Directly restores verbal fluency and processing speed.',
        clinicalPearl: 'Exceptional evidence in clinical narcolepsy and sluggish cognitive tempo.'
      },
      vascular: {
        rating: 3.9,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Mild central sympathetic tone support without peripheral vasoconstrictive spikes.',
        clinicalPearl: 'Monitors ECG for minor QTc prolongation; standard clinical check.'
      },
      'slow-comt': {
        rating: 3.7,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Increases central acetylcholine predominantly rather than dumping massive norepinephrine; far better tolerated than sympathomimetics.',
        clinicalPearl: 'Start at the lowest pediatric/starter dose (4.45mg) and titrate conservatively.'
      },
      pelvic: {
        rating: 4.2,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Cortical acetylcholine and dopamine disinhibition can assist in overcoming central orgasmic sensory inhibition, supporting sexual sensory transmission.',
        clinicalPearl: 'Promotes central executive disinhibition that assists lifelong anorgasmic reflex pathways.'
      }
    }
  },
  {
    id: 'pentoxifylline',
    name: 'Pentoxifylline (Trental)',
    category: 'Pharmacotherapy',
    deliveryOrDosing: '400 mg orally 2 to 3 times daily, strictly with substantial meals',
    overallVerdict: 'Gold Helper',
    overallRating: 4.6,
    overallStars: '★★★★½',
    summary: 'Hemorheologic agent and non-selective phosphodiesterase inhibitor. Enhances erythrocyte deformability, drops blood viscosity, and lowers TNF-α.',
    targetReceptors: ['Erythrocyte Flexibility / Hemorheology', 'TNF-α Transcription Inhibition'],
    conditionImpacts: {
      mcas: {
        rating: 4.4,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Inhibits TNF-α transcription from inflammatory cells and blunts mast cell cytokine output through PDE inhibition.',
        clinicalPearl: 'Take strictly with full meals to eliminate potential gastric upset.'
      },
      'brain-fog': {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Allows red blood cells to deform and squeeze through narrowed cerebral capillaries, dramatically increasing oxygen delivery to sluggish brain tissue.',
        clinicalPearl: 'Pierces microvascular hypoperfusion that standard vasodilators cannot address.'
      },
      vascular: {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Reduces plasma fibrinogen concentration, decreases platelet aggregation, and optimizes laminar endothelial shear stress.',
        clinicalPearl: 'Superb medication for microvascular claudication and cold extremities.'
      },
      'slow-comt': {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Operates entirely through rheological and anti-inflammatory pathways with zero catecholamine surge or adrenergic burden.',
        clinicalPearl: 'Well-tolerated by Met/Met patients with zero jitteriness.'
      },
      pelvic: {
        rating: 4.6,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Dramatically improves capillary blood supply to the pudendal nerve sheath and erectile/pelvic cavernous tissue, restoring sensory transmission.',
        clinicalPearl: 'Supports penile/clitoral and pudendal nerve sheath vascularization without vascular stiffening.'
      }
    }
  },
  {
    id: 'telmisartan',
    name: 'Telmisartan (Micardis)',
    category: 'Pharmacotherapy',
    deliveryOrDosing: '20 to 40 mg orally once daily in morning',
    overallVerdict: 'Gold Helper',
    overallRating: 4.5,
    overallStars: '★★★★½',
    summary: 'Angiotensin II Type 1 (AT1) receptor blocker with unique partial PPAR-γ agonism. Crosses BBB, prevents microvascular remodeling, and calms microglia.',
    targetReceptors: ['Angiotensin II AT1 Receptor', 'PPAR-γ Nuclear Receptor', 'Microglial AT1'],
    conditionImpacts: {
      mcas: {
        rating: 4.5,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Angiotensin II triggers mast cell degranulation via AT1 receptors; Telmisartan blocks this axis and downregulates mast cell cytokine release.',
        clinicalPearl: 'The only ARB with dual AT1 blockade and high-affinity PPAR-γ activation.'
      },
      'brain-fog': {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'High lipophilicity allows it to cross the blood-brain barrier; activates microglial PPAR-γ to quench neuroinflammation and protect hippocampal neurons.',
        clinicalPearl: 'Proven in clinical trials to enhance cognitive processing and executive speed.'
      },
      vascular: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Reverses arterial stiffness and endothelial remodeling; balances central hemodynamics without causing reflex orthostatic pooling at 20–40mg.',
        clinicalPearl: 'Check blood pressure to ensure resting systolic BP stays >95 mmHg.'
      },
      'slow-comt': {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Attenuates central sympathetic outflow and blunts the pressor response to circulating catecholamines without interfering with COMT degradation.',
        clinicalPearl: 'Buffers cardiovascular system against epinephrine-driven blood pressure spikes.'
      },
      pelvic: {
        rating: 4.4,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'PPAR-γ activation lowers pelvic visceral inflammation and reduces local microvascular resistance in the deep pelvic arterial bed.',
        clinicalPearl: 'Promotes pelvic vascular elasticity and reduces visceral spasms.'
      }
    }
  },
  {
    id: 'pea-palmitoylethanolamide',
    name: 'Palmitoylethanolamide (PEA - Micronized)',
    category: 'Pharmacotherapy',
    deliveryOrDosing: '400 to 1,200 mg daily in divided doses with lipid-containing meals',
    overallVerdict: 'Gold Helper',
    overallRating: 4.8,
    overallStars: '★★★★★',
    summary: 'Endogenous bioactive lipid amide. Activates nuclear PPAR-α; silences mast cells and gates visceral pelvic pain with ZERO CB1 receptor downregulation.',
    targetReceptors: ['PPAR-α (Peroxisome Proliferator-Activated Receptor Alpha)', 'GPR55', 'GPR119', 'ALIAmide Mechanism'],
    conditionImpacts: {
      mcas: {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'The classic endogenous ALIAmide (Autacoid Local Inflammation Antagonist); downregulates mast cell activation and reduces histamine and PGD2 release.',
        clinicalPearl: 'Must be ultra-micronized or micronized form for systemic bioavailability.'
      },
      'brain-fog': {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Binds nuclear PPAR-α in microglia and astrocytes, shutting down pro-inflammatory gene expression without touching CB1 receptors or clouding memory.',
        clinicalPearl: 'The non-impairing physiological alternative to exogenous cannabis.'
      },
      vascular: {
        rating: 4.5,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Protects endothelial cell barriers against oxidative injury and preserves microvascular autoregulation.',
        clinicalPearl: 'Zero orthostatic vasodilation or postural dizziness.'
      },
      'slow-comt': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'No dopamine D2 receptor surges and no catecholamine release; completely inert regarding the COMT enzyme.',
        clinicalPearl: 'Can be taken day or night with zero adrenergic agitation.'
      },
      pelvic: {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Specifically gates visceral nociceptive transmission through sacral cord pathways; relieves pudendal hyperalgesia and restores sensory clarity without receptor tolerance.',
        clinicalPearl: 'Premier medical-grade nutritional approach for chronic pelvic pain and visceral hypersensitivity.'
      }
    }
  },
  {
    id: 'modafinil-armodafinil',
    name: 'Modafinil / Armodafinil (Provigil / Nuvigil)',
    category: 'Pharmacotherapy',
    deliveryOrDosing: '100–200 mg daily; STRICTLY CONTRAINDICATED in this phenotype',
    overallVerdict: 'Severe Hinder',
    overallRating: 0.5,
    overallStars: '☆☆☆☆☆',
    summary: 'Severe hazard. Elevates hypothalamic histamine and surges synaptic dopamine/norepinephrine, overwhelming Slow COMT and igniting MCAS flares.',
    targetReceptors: ['Dopamine Active Transporter (DAT Blockade)', 'Hypothalamic Histamine Neurons', 'Orexin / Hypocretin'],
    conditionImpacts: {
      mcas: {
        rating: 0.6,
        stars: '☆☆☆☆☆',
        verdict: 'Severe Hinder',
        mechanism: 'Mechanistically elevates hypothalamic histamine neurotransmission to promote wakefulness, triggering a massive downstream mast cell flare in MCAS patients.',
        clinicalPearl: 'Patients frequently report severe skin burning, sinus inflammation, and gut cramps.'
      },
      'brain-fog': {
        rating: 1.2,
        stars: '★☆☆☆☆',
        verdict: 'Severe Hinder',
        mechanism: 'Provides temporary artificial focus followed by severe neuro-inflammatory collapse, microglial priming, and multi-day cognitive paralysis.',
        clinicalPearl: 'Causes high-arousal tunnel vision that worsens sluggish cognitive tempo.'
      },
      vascular: {
        rating: 1.0,
        stars: '★☆☆☆☆',
        verdict: 'Severe Hinder',
        mechanism: 'Spikes peripheral adrenergic tone, increasing central blood pressure while causing intense peripheral vasoconstriction and subsequent orthostatic crashes.',
        clinicalPearl: 'Induces severe resting tachycardia and cardiac palpitations.'
      },
      'slow-comt': {
        rating: 0.2,
        stars: '☆☆☆☆☆',
        verdict: 'Severe Hinder',
        mechanism: 'Blocks dopamine reuptake transporter (DAT), flooding synaptic clefts with dopamine and norepinephrine that Slow COMT cannot degrade, provoking panic and tremors.',
        clinicalPearl: 'Strictly contraindicated in Val158Met Met/Met Slow COMT genotypes.'
      },
      pelvic: {
        rating: 0.8,
        stars: '☆☆☆☆☆',
        verdict: 'Severe Hinder',
        mechanism: 'Extreme sympathetic hyperactivity triggers severe involuntary tonic spasms of the pubococcygeus and levator ani, pinching the pudendal nerve.',
        clinicalPearl: 'Directly paralyzes orgasmic reflex pathways and worsens chronic pelvic floor hypertonia.'
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. BOTANICALS, CANNABINOIDS & SUBSTANCES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'thc-cannabis',
    name: 'THC / Exogenous Cannabinoids (Short vs Long-Term Paradox)',
    category: 'Botanicals & Cannabinoids',
    deliveryOrDosing: 'Inhaled or edible Delta-9-THC; HIGH CAUTION / PARADOXICAL TRAP',
    overallVerdict: 'Caution',
    overallRating: 2.2,
    overallStars: '★★☆☆☆',
    summary: 'The Cannabinoid Paradox: Provides powerful acute pelvic analgesia and mast cell dampening, but chronic use causes severe hippocampal blunting, memory loss, and visceral hyperalgesia rebound.',
    targetReceptors: ['CB1 Receptor (Downregulation Risk)', 'CB2 Receptor', 'Hippocampal Synapses', 'Visceral Afferents'],
    conditionImpacts: {
      mcas: {
        rating: 2.8,
        stars: '★★★☆☆',
        verdict: 'Caution',
        mechanism: 'Short-term: CB2 activation dampens mast cell degranulation. Long-term: CB2 downregulation leaves mast cells hyper-excitable, leading to rebound histamine attacks upon cessation.',
        clinicalPearl: 'Acute symptom relief masks an escalating baseline vulnerability.'
      },
      'brain-fog': {
        rating: 1.2,
        stars: '★☆☆☆☆',
        verdict: 'Severe Hinder',
        mechanism: 'Chronic CB1 activation causes massive internalization and downregulation of hippocampal CB1 receptors, impairing short-term working memory, verbal retrieval, and executive sequencing.',
        clinicalPearl: 'Directly exacerbates sluggish cognitive tempo into severe brain fog.'
      },
      vascular: {
        rating: 2.1,
        stars: '★★☆☆☆',
        verdict: 'Caution',
        mechanism: 'Triggers potent acute peripheral vasodilation, resulting in severe orthostatic blood pooling in splanchnic and lower limb beds with reflex tachycardia.',
        clinicalPearl: 'Frequently causes dizziness upon standing and sudden drops in cerebral perfusion.'
      },
      'slow-comt': {
        rating: 2.3,
        stars: '★★½☆☆',
        verdict: 'Caution',
        mechanism: 'Acute dopamine release temporarily elevates mood, but subsequent receptor desensitization and erratic catecholamine release stress slow COMT clearance.',
        clinicalPearl: 'Can trigger acute paranoia, nocturnal racing heart, and restless anxiety in slow metabolizers.'
      },
      pelvic: {
        rating: 1.8,
        stars: '★½☆☆☆',
        verdict: 'Severe Hinder',
        mechanism: 'Short-term: Eases pelvic muscle spasm and blunts pelvic pain. Long-term: Visceral hypersensitivity rebound (loss of endogenous anandamide gating), prolactin elevation, and dopamine D2 blunting that deepens lifelong anorgasmia.',
        clinicalPearl: 'The classic clinical trap: patients use it for pelvic pain relief, unaware that chronic use reinforces visceral hyperalgesia and blocks orgasmic reflexes.'
      }
    }
  },
  {
    id: 'quercetin-phytosome',
    name: 'Quercetin Phytosome',
    category: 'Botanicals & Cannabinoids',
    deliveryOrDosing: '250 to 500 mg orally twice daily with meals (sunflower lecithin phytosome form)',
    overallVerdict: 'Gold Helper',
    overallRating: 4.7,
    overallStars: '★★★★★',
    summary: 'Natural plant bioflavonoid. Blocks calcium influx in mast cells, quenches lipid peroxidation, and protects endothelial wall integrity.',
    targetReceptors: ['Mast Cell Calcium Channels', 'NF-κB / AP-1 Transcription Factors', 'eNOS Activation'],
    conditionImpacts: {
      mcas: {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Directly stabilizes mast cell membranes by blocking calcium channels and preventing histamine, tryptase, and leukotriene discharge.',
        clinicalPearl: 'Standard quercetin has poor bioavailability (~2%); phytosome delivery enhances absorption 20-fold.'
      },
      'brain-fog': {
        rating: 4.6,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Crosses blood-brain barrier in phytosomal form; suppresses microglial neuroinflammation and shields hippocampal neurons from cytokine damage.',
        clinicalPearl: 'Supports clear cognitive processing during seasonal pollen or food flares.'
      },
      vascular: {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Stimulates endothelial nitric oxide synthase and inhibits platelet aggregation, preserving healthy microvascular elasticity.',
        clinicalPearl: 'Provides robust capillary protection across all vascular beds.'
      },
      'slow-comt': {
        rating: 4.3,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'High-dose raw flavonoids can weakly compete for COMT degradation; keep doses moderate (250–500mg) to enjoy massive MCAS benefits without COMT slowdown.',
        clinicalPearl: 'Stick to phytosomal forms to achieve clinical efficacy at low milligram doses.'
      },
      pelvic: {
        rating: 4.6,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Extensively documented in clinical urology to relieve chronic pelvic floor inflammation, interstitial cystitis, and pudendal nerve sheath irritation.',
        clinicalPearl: 'Gold-standard non-prescription bioflavonoid for chronic pelvic discomfort.'
      }
    }
  },
  {
    id: 'pycnogenol',
    name: 'Pycnogenol (French Maritime Pine Bark Extract)',
    category: 'Botanicals & Cannabinoids',
    deliveryOrDosing: '50 to 100 mg orally twice daily with breakfast and lunch',
    overallVerdict: 'Gold Helper',
    overallRating: 4.7,
    overallStars: '★★★★★',
    summary: 'Standardized proanthocyanidin bioflavonoid complex. Upregulates eNOS, tightens microvascular endothelial junctions, and reduces systemic histamine.',
    targetReceptors: ['eNOS (Endothelial Nitric Oxide Synthase)', 'Endothelial Tight Junctions', 'Mast Cell Histamine Output'],
    conditionImpacts: {
      mcas: {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Inhibits 5-lipoxygenase and cyclooxygenase; significantly attenuates allergen-induced mast cell histamine discharge.',
        clinicalPearl: 'Gentle on digestion and free of fermentation allergens.'
      },
      'brain-fog': {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Improves cerebral perfusion velocity and working memory speed in clinical trials; protects neural microvasculature from oxidative breakdown.',
        clinicalPearl: 'Synergistic with Benfotiamine for neurovascular oxygenation.'
      },
      vascular: {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Premier natural inducer of endothelial nitric oxide synthase (eNOS); reduces capillary leakiness and improves microvascular compliance.',
        clinicalPearl: 'Remarkable for resolving orthostatic leg heaviness and peripheral pooling.'
      },
      'slow-comt': {
        rating: 4.6,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Does not elevate adrenal catecholamines or deplete SAMe; safe, non-stimulant cardiovascular support for Slow COMT.',
        clinicalPearl: 'Provides cardiovascular stamina without resting tachycardia.'
      },
      pelvic: {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Promotes microvascular blood delivery into the internal pudendal artery and pelvic floor, relieving ischemia in chronically tight muscles.',
        clinicalPearl: 'Improves genital blood flow and sensory nerve conduction.'
      }
    }
  },
  {
    id: 'perilla-frutescens',
    name: 'Perilla Frutescens Extract (Luteolin Rich)',
    category: 'Botanicals & Cannabinoids',
    deliveryOrDosing: '100 to 300 mg daily with meals (standardized to high luteolin / rosmarinic acid content)',
    overallVerdict: 'Gold Helper',
    overallRating: 4.7,
    overallStars: '★★★★★',
    summary: 'Potent botanical source of luteolin and rosmarinic acid. Highly permeable across the blood-brain barrier; shuts down microglial and dural mast cell activation.',
    targetReceptors: ['Microglial NF-κB', 'Dural Mast Cell Receptors', 'Rosmarinic Acid COX-2 Inhibition'],
    conditionImpacts: {
      mcas: {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Luteolin is one of the most potent natural mast cell membrane stabilizers, blocking degranulation at nanomolar concentrations.',
        clinicalPearl: 'Particularly effective for calming sinus, cranial, and facial flushing symptoms.'
      },
      'brain-fog': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Rapidly penetrates the blood-brain barrier; silences primed microglia in the hippocampus and protects prefrontal neurons from neuroinflammatory blunting.',
        clinicalPearl: 'Demonstrated in research by Dr. Theoharides to reverse inflammation-induced cognitive fog.'
      },
      vascular: {
        rating: 4.5,
        stars: '★★★★½',
        verdict: 'Gold Helper',
        mechanism: 'Rosmarinic acid protects microvascular endothelial cells from oxidative injury and prevents leukocyte rolling along vessel walls.',
        clinicalPearl: 'Supports clean microvascular flow.'
      },
      'slow-comt': {
        rating: 4.6,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Non-stimulatory botanical profile; calms autonomic irritability without elevating synaptic epinephrine.',
        clinicalPearl: 'Can be taken in the afternoon without disrupting sleep architecture.'
      },
      pelvic: {
        rating: 4.4,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Suppresses inflammatory mucosal cytokine release in pelvic viscera and bladder; calms neurogenic pudendal irritation.',
        clinicalPearl: 'Alleviates visceral hyperalgesia and pelvic discomfort.'
      }
    }
  },
  {
    id: 'caffeine-coffee',
    name: 'High-Dose Caffeine / Unfiltered Coffee',
    category: 'Botanicals & Cannabinoids',
    deliveryOrDosing: 'Standard coffee or caffeinated energy drinks (>100 mg caffeine)',
    overallVerdict: 'Severe Hinder',
    overallRating: 1.8,
    overallStars: '★★☆☆☆',
    summary: 'Double-Edged Sword: Constricts splanchnic circulation (helping orthostatic pooling), but severely overloads Slow COMT with catecholamines and degranulates sensitive mast cells.',
    targetReceptors: ['Adenosine A1 / A2A Receptors (Antagonist)', 'Adrenal Medullary Epinephrine Release', 'Mast Cell Histamine Liberator'],
    conditionImpacts: {
      mcas: {
        rating: 1.8,
        stars: '★½☆☆☆',
        verdict: 'Severe Hinder',
        mechanism: 'Coffee beans contain mold/mycotoxins and act as direct mast cell histamine liberators; unbuffered caffeine triggers gastric acid and mucosal degranulation.',
        clinicalPearl: 'Common cause of morning gastrointestinal cramping, nausea, and histamine hives.'
      },
      'brain-fog': {
        rating: 2.4,
        stars: '★★½☆☆',
        verdict: 'Caution',
        mechanism: 'Transient adenosine antagonism provides brief artificial alertness, quickly followed by prefrontal dopamine depletion and exacerbated executive crash.',
        clinicalPearl: 'Creates artificial nervous energy without genuine working memory improvement.'
      },
      vascular: {
        rating: 3.5,
        stars: '★★★½☆',
        verdict: 'Contextual / Neutral',
        mechanism: 'Physiologically constricts the splanchnic vascular bed, reducing post-prandial blood pooling; however, triggers severe reflex cardiac arrhythmias.',
        clinicalPearl: 'The splanchnic benefit is completely overshadowed by adrenergic tachycardia in Slow COMT.'
      },
      'slow-comt': {
        rating: 0.7,
        stars: '☆☆☆☆☆',
        verdict: 'Severe Hinder',
        mechanism: 'Directly stimulates the adrenal medulla to release high concentrations of epinephrine. In Slow COMT (Met/Met), clearance is paralyzed, causing hours of tremors, palpitations, and panic.',
        clinicalPearl: 'One of the primary drivers of refractory adrenergic jitter and nocturnal insomnia in Met/Met patients.'
      },
      pelvic: {
        rating: 1.6,
        stars: '★½☆☆☆',
        verdict: 'Severe Hinder',
        mechanism: 'Stimulates the sympathetic nervous system and irritates the bladder urothelium, causing involuntary hypertonic pelvic floor guarding and worsening anorgasmic sensory gating.',
        clinicalPearl: 'Direct contributor to pelvic muscle tightness, urinary urgency, and genital sensory numbness.'
      }
    }
  },
  {
    id: 'methylene-blue-usp',
    name: 'Methylene Blue (USP Grade / Low-Dose 15–30 mg)',
    category: 'Pharmacotherapy',
    deliveryOrDosing: '15–30 mg orally once daily in morning (diluted in water with Vitamin C via glass straw)',
    overallVerdict: 'Gold Helper',
    overallRating: 4.9,
    overallStars: '★★★★★',
    summary: 'Alternative mitochondrial Complex I–IV electron cycler and direct Soluble Guanylyl Cyclase (sGC) inhibitor. Reverses Amlodipine-induced vasoplegic pooling and sock marks while elevating prefrontal CMRO2 for CDS/SCT.',
    clinicalConsiderations: [
      'Vascular SGC Inhibition: Competitively inhibits Soluble Guanylyl Cyclase (sGC) to curb excess cGMP, specifically tightening dilated lower-extremity venules and reversing sock marks without hypertensive spikes.',
      'Mitochondrial Respiration Bypass: Directly accepts electrons from NADH dehydrogenase (Complex I) and transfers them to Cytochrome C (Complex IV), maintaining prefrontal ATP synthesis during neuroinflammatory flares.',
      'Safety Screening: Absolutely contraindicated with serotonergic agents (SSRIs/SNRIs) due to mild MAO-A inhibition; must screen for G6PD deficiency before use.',
      'Administration Nuance: Dilute in water with 100–250mg Vitamin C to reduce the chromophore to clear leucomethylene blue, preventing oral staining; drink with a glass straw.'
    ],
    keyContraindications: [
      'Concurrent SSRIs, SNRIs, tricyclic antidepressants, or MDMA (severe risk of Serotonin Syndrome).',
      'Confirmed Glucose-6-Phosphate Dehydrogenase (G6PD) deficiency (hemolytic anemia risk).'
    ],
    conditionImpacts: {
      mcas: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Downregulates iNOS and inhibits Soluble Guanylyl Cyclase, cutting off the cGMP-dependent second messenger cascade required for non-IgE mast cell degranulation.',
        clinicalPearl: 'Acts as an effective non-antihistaminic mast cell and microvascular stabilizer.'
      },
      'brain-fog': {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Elevates cerebral metabolic rate of oxygen (CMRO2) and accelerates Complex IV flux, directly ending prefrontal energetic stupor in Cognitive Disengagement Syndrome.',
        clinicalPearl: 'The definitive bioenergetic rescue when prefrontal neurons fail to sustain delay-period firing.'
      },
      vascular: {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Reverses smooth muscle vasoplegia by preventing excess cGMP accumulation, restoring post-capillary venular tone and siphoning pooled blood away from dependent ankles.',
        clinicalPearl: 'The direct biochemical countermeasure for Amlodipine-induced sock marks and orthostatic cerebral hypoperfusion.'
      },
      'slow-comt': {
        rating: 4.6,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Zero catecholamine structure; mild reversible MAO-A inhibition slightly raises tonic dopamine/norepinephrine without generating toxic catechol quinones.',
        clinicalPearl: 'Provides clean alertness and executive stamina without the adrenergic jitter of amphetamines or high-dose methyl donors.'
      },
      pelvic: {
        rating: 4.4,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Relieves pelvic venous congestion and stasis; improves oxygenation to pelvic floor ischemic tissue.',
        clinicalPearl: 'Pair with supine 90/90 decompression to accelerate venous clearance.'
      }
    }
  },
  {
    id: 'agmatine-sulfate',
    name: 'Agmatine Sulfate (Endogenous Imidazoline / α2A Neuromodulator)',
    category: 'Vitamins & Nutrients',
    deliveryOrDosing: '500–1,000 mg orally once or twice daily on an empty stomach',
    overallVerdict: 'Gold Helper',
    overallRating: 4.9,
    overallStars: '★★★★★',
    summary: 'Endogenous neurotransmitter synthesized from L-arginine. Acts as an endogenous Guanfacine/Clonidine at I1 and α2A receptors, blocks NMDA excitotoxicity, protects eNOS while halting iNOS, and soothes pudendal hypertonicity.',
    clinicalConsiderations: [
      'Prefrontal Network Tuning: High-affinity agonist at I1 and α2A receptors, closing HCN channels on prefrontal dendritic spines to solidify working memory in CDS and ADHD.',
      'Dual Nitric Oxide Divergence: Selectively inhibits inflammatory iNOS while upregulating endothelial eNOS, maintaining capillary blood flow without allergic mast cell extravasation.',
      'Pudendal Pain Gating: Suppresses sacral dorsal horn nociception and allodynia, providing rapid relaxation for hypertonic pelvic floors and CPPS.',
      'Empty Stomach Requirement: Absorbed via the basic amino acid (y+) transporter; must be taken away from dietary protein.'
    ],
    keyContraindications: [
      'Severe active peptic ulcer disease (can mildly increase gastric acid secretion).',
      'Co-ingestion with large amounts of dietary protein (reduces systemic bioavailability).'
    ],
    conditionImpacts: {
      mcas: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Potently inhibits inducible Nitric Oxide Synthase (iNOS), preventing peroxynitrite formation and blocking sensory nerve C-fiber mast cell degranulation.',
        clinicalPearl: 'Blocks the neuro-immune inflammatory loop that turns minor stress into systemic histamine flares.'
      },
      'brain-fog': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Selective open-channel blocker of NR2B NMDA receptors; halts glutamate spillover and sensory overload while strengthening prefrontal delay-period firing.',
        clinicalPearl: 'Acts as an endogenous brain fog silencer, protecting working memory from sensory distraction.'
      },
      vascular: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Stimulates endothelial eNOS to promote laminar microvascular flow while central I1/α2A agonism reduces peripheral sympathetic vasoconstrictive clamping.',
        clinicalPearl: 'Improves microvascular cerebral perfusion without causing dependent edema.'
      },
      'slow-comt': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Non-catechol structure that downregulates hyperadrenergic sympathetic drive at central α2A/I1 autoreceptors, providing calm focus for Met/Met genotypes.',
        clinicalPearl: 'The ultimate non-stimulant focus agent for Slow COMT minds overwhelmed by typical nootropics.'
      },
      pelvic: {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Modulates spinal cord dorsal horn imidazoline and delta-opioid receptors, interrupting chronic pelvic floor muscle guarding and pudendal nerve hypersensitivity.',
        clinicalPearl: 'The premier oral supplement for hypertonic pelvic floor dysfunction and pudendal neuralgia.'
      }
    }
  },
  {
    id: 'tudca-chaperone',
    name: 'Tauroursodeoxycholic Acid (TUDCA / ER Stress Chaperone)',
    category: 'Vitamins & Nutrients',
    deliveryOrDosing: '250–500 mg orally once or twice daily with meals',
    overallVerdict: 'Gold Helper',
    overallRating: 4.8,
    overallStars: '★★★★★',
    summary: 'Hydrophilic chemical chaperone that crosses the blood-brain barrier. Prevents Endoplasmic Reticulum (ER) stress, halts non-IgE mast cell degranulation, protects capillary tight junctions (claudin-5), and quenches microglial priming.',
    clinicalConsiderations: [
      'Master ER Stress Stopper: Prevents BiP/GRP78 dissociation from PERK, IRE1α, and ATF6, terminating the apoptotic Unfolded Protein Response (UPR) and halting CHOP activation.',
      'Capillary Endothelial Armor: Stabilizes endothelial claudin-5 and occludin tight junctions, halting the microvascular hyperpermeability that produces ankle sock marks.',
      'Non-IgE Mast Cell Calmer: Preserves SERCA pump function to keep calcium locked in the endoplasmic reticulum, preventing spontaneous degranulation.',
      'Zero Catechol Interaction: Safe for Slow COMT (Met/Met), operating strictly on proteostasis and organelle integrity.'
    ],
    keyContraindications: [
      'Biliary tract obstruction or acute cholecystitis.',
      'Initial GI sensitivity (titrate from 250mg daily with food).'
    ],
    conditionImpacts: {
      mcas: {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Inhibits ER stress-induced store-operated calcium entry (SOCE), stabilizing mast cell membranes against non-IgE degranulation and proteotoxic chemical triggers.',
        clinicalPearl: 'The molecular gold standard for terminating chronic, treatment-resistant mast cell flare loops.'
      },
      'brain-fog': {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Crosses the BBB to quench reactive oxygen species in primed microglia, shifting them from neurotoxic M1 to neuroprotective M2 phenotypes to clear brain fog.',
        clinicalPearl: 'Protects hippocampal and prefrontal synapses from inflammatory cytokine damage.'
      },
      vascular: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Preserves endothelial glycocalyx thickness and seals tight junction claudin-5, preventing fluid third-spacing and ankle edema.',
        clinicalPearl: 'Directly reinforces microvascular barrier integrity against Amlodipine-exacerbated fluid filtration.'
      },
      'slow-comt': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Protects neurons from dopamine quinone and catechol oxidation products without placing any demands on COMT enzymatic clearance.',
        clinicalPearl: 'Shields prefrontal neurons from the metabolic exhaust of high tonic catecholamines.'
      },
      pelvic: {
        rating: 4.3,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Reduces mucosal neurogenic inflammation and visceral bladder/pelvic mast cell degranulation.',
        clinicalPearl: 'Provides deep mucosal barrier protection for pelvic visceral nerves.'
      }
    }
  },
  {
    id: 'transcranial-photobiomodulation',
    name: 'Transcranial Near-Infrared Photobiomodulation (tPBM: 810 nm / 1064 nm)',
    category: 'Cognitive & Brain Exercises',
    deliveryOrDosing: '10–15 min per session, 3–4 days/week; 15–30 J/cm² of 810 nm or 1064 nm light to prefrontal (F3/F4) & suboccipital regions',
    overallVerdict: 'Gold Helper',
    overallRating: 4.9,
    overallStars: '★★★★★',
    summary: 'Non-thermal photonic excitation of Cytochrome c Oxidase. Photons penetrate the cranium to dislodge inhibitory nitric oxide from Complex IV, surging prefrontal ATP, pulsed cerebral blood flow (CBF), and dural lymphatic drainage.',
    clinicalConsiderations: [
      'Cytochrome C Oxidase Photo-Excitation: Photons at 810 nm and 1064 nm excite CuA/CuB centers in Complex IV, dissociating inhibitory NO and boosting ATP production by up to 140%.',
      'Pulsatile Frontal Hemodynamics: Locally liberated NO activates soluble guanylyl cyclase in prefrontal microvessels, restoring cerebral perfusion in hypoactive CDS/ADHD circuits.',
      'Meningeal Glymphatic Cleansing: Suboccipital light pulses drive contractile lymphatic pumping in the dura mater, flushing neuroinflammatory debris into deep cervical nodes.',
      'Dural Mast Cell Calming: Near-infrared wavelengths downregulate calcium oscillations and TRPV4 in meningeal mast cells, silencing neurovascular head pain.'
    ],
    keyContraindications: [
      'Direct unshielded eye exposure to Class 3B/4 laser diodes (always wear certified wavelength-specific eye protection).',
      'Active malignant cerebral neoplasms.'
    ],
    conditionImpacts: {
      mcas: {
        rating: 4.7,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Modulates TRPV4 channel activation and stabilizes intracellular calcium oscillations in cranial dural mast cells, suppressing neurogenic inflammation.',
        clinicalPearl: 'Provides non-pharmacological soothing for refractory "burning scalp" and meningeal histamine flares.'
      },
      'brain-fog': {
        rating: 5.0,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Physically surges prefrontal ATP and re-establishes high-frequency gamma neural oscillations, completely lifting the sluggish inertia of Cognitive Disengagement Syndrome.',
        clinicalPearl: 'The premier biophysical tool for waking up hypoaroused frontoparietal attentional networks.'
      },
      vascular: {
        rating: 4.8,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Selectively restores localized pulsatile cerebral blood flow (CBF) via transient microvascular NO release without causing splanchnic stealing or dependent pooling.',
        clinicalPearl: 'Directly treats the orthostatic cerebral hypoperfusion that occurs when blood pools in the legs.'
      },
      'slow-comt': {
        rating: 4.9,
        stars: '★★★★★',
        verdict: 'Gold Helper',
        mechanism: 'Elevates cortical alertness purely through mitochondrial bioenergetics and light physics—zero catecholamine stimulation, zero adrenal burden.',
        clinicalPearl: 'Delivers the cognitive lift of a stimulant without triggering Slow COMT adrenergic tachycardia or insomnia.'
      },
      pelvic: {
        rating: 4.2,
        stars: '★★★★☆',
        verdict: 'Moderate Helper',
        mechanism: 'Suboccipital irradiation calms sympathetic outflow from the brainstem, reducing reflexive pelvic floor ischemic guarding.',
        clinicalPearl: 'Use in supine decompression posture to combine cranial photonic stimulation with pelvic drainage.'
      }
    }
  }
];

export const ELEMENT_CATEGORIES = [
  'All Categories',
  'Physical Exercise',
  'Cognitive & Brain Exercises',
  'Vitamins & Nutrients',
  'Pharmacotherapy',
  'Botanicals & Cannabinoids'
] as const;

export const IMPACT_VERDICT_OPTIONS = [
  'All Impacts',
  'Gold Helpers (4.5★ - 5.0★)',
  'Moderate Helpers (3.5★ - 4.4★)',
  'Cautions (2.0★ - 3.4★)',
  'Severe Hinders (0.0★ - 1.9★)'
] as const;

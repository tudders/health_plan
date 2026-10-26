import { OffLabelPharma } from '../types';

export const OFF_LABEL_PHARMA_LIST: OffLabelPharma[] = [
  {
    id: 'isrib',
    genericName: 'ISRIB (Integrated Stress Response Inhibitor / trans-ISRIB)',
    brandNames: 'Investigational Small Molecule (Pipeline analogues: 2BAct, DNL343)',
    drugClass: 'Selective Allosteric eIF2B Activator / Translation Initiation Restorer',
    primaryMechanism:
      'Allosterically stabilizes the decameric holoenzyme of eukaryotic translation initiation factor 2B (eIF2B). Renders eIF2B completely resistant to inhibitory phosphorylated eIF2α (p-eIF2α), reversing the Integrated Stress Response (ISR) shutoff of ribosomal translation initiation and rapidly downregulating pathological ATF4/CHOP transcription.',
    mcasStabilizationEffect:
      'Protects central neurons and neurovascular endothelium against the chronic inflammatory cytokine deluge discharged by activated mast cells (TNF-α, IL-6, IL-1β). While mast cells require basal ER stress buffering for mass secretory load during acute flares, ISRIB selectively restores microglial and neuronal translational resilience outside of acute allergic crises.',
    cognitiveImpact:
      'Profound pro-cognitive and neuro-reparative efficacy in preclinical models: reverses cognitive deficits, spatial memory impairment, and sluggish processing speed resulting from chronic neuroinflammation, concussion, or traumatic brain injury. Unlocks de novo hippocampal synaptic protein synthesis (Arc, BDNF, PSD-95) required for long-term potentiation (LTP).',
    typicalDosageRange:
      'Investigational translational research models: 0.25 mg/kg to 2.5 mg/kg (administered in advanced lipid nano-emulsions or hydroxypropyl-beta-cyclodextrin due to negligible aqueous solubility). Next-gen bioavailable analogues (e.g. 2BAct) dosed in nanomolar affinity ranges.',
    sedationLiability: 'None',
    bbbPenetration: 'High',
    clinicalPearls: [
      'The "Zero-Catecholamine Miracle": Delivers rapid cognitive rejuvenation, memory formation, and mental endurance without stimulating dopamine, norepinephrine, or serotonin receptors—completely zero adrenergic load for Slow COMT (Met/Met) genotypes.',
      'Translational Reversal: Preclinical studies demonstrate that even a brief 3-day treatment window can induce long-lasting structural and synaptic recovery in previously stalled neuronal networks.',
      'Formulation Challenge: Pure raw trans-ISRIB is practically insoluble in water; requires pharmaceutical carrier systems (cyclodextrins, lipid formulations) to achieve systemic bio-absorption.',
      'Clinical Context: Currently strictly an investigational compound; human applications focus on ALS, neurodegenerative diseases, and TBI cognitive recovery.'
    ],
    cautionWarnings: [
      'Investigational status: lacks complete Phase III human clinical trial safety profiles; not an approved prescription or OTC pharmaceutical.',
      'Crucial physiological ISR role: The Integrated Stress Response is an essential defense during acute viral infections, severe ischemic stroke, or heavy intracellular protein misfolding. Over-inhibiting ISR during acute systemic infection could impair antiviral host defense.',
      'Do not consume unverified raw laboratory synthesis powders; requires pharmaceutical purity testing and specialized solubilization chemistry.'
    ],
    helpRating: 4.8,
    helpStars: '★★★★★',
    helpVerdict: 'Investigational Gold Standard (eIF2B Translation Reset)',
    ratingRationale:
      'Reverses chronic neuroinflammatory translational arrest in hippocampus/PFC via eIF2B allosteric rescue; zero burden on Slow COMT catecholamine pathways.'
  },
  {
    id: 'tadalafil',
    genericName: 'Tadalafil (Cialis / Daily Low-Dose PDE5 Inhibitor)',
    brandNames: 'Cialis, Adcirca',
    drugClass: 'Selective Phosphodiesterase-5 (PDE5) Inhibitor',
    primaryMechanism:
      'Selectively and competitively inhibits phosphodiesterase type 5 (PDE5), preventing the enzymatic breakdown of cyclic guanosine monophosphate (cGMP). Elevated cGMP activates Protein Kinase G (PKG), promoting intracellular calcium efflux and continuous smooth muscle relaxation in the internal pudendal arterial bed, bladder neck, prostate stroma, and pelvic floor musculature (levator ani, puborectalis). Concurrently stimulates endothelial nitric oxide synthase (eNOS) and flow-mediated dilation.',
    mcasStabilizationEffect:
      'Elevated cGMP modulates store-operated calcium entry (SOCE) in mast cells, conferring a gentle stabilizing threshold on degranulation. Note: Local nasal mucosal turbinate venodilation (mild stuffy nose) is a direct pharmacological vasodilation, not an allergic mast cell flare.',
    cognitiveImpact:
      'Crosses the blood-brain barrier: PDE5 inhibition in cerebral microvasculature elevates brain cGMP, activating the PKG-CREB pathway to upregulate BDNF and enhance hippocampal and prefrontal neurovascular perfusion. Counteracts splanchnic/orthostatic cerebral hypoperfusion without catecholamine stimulation.',
    typicalDosageRange:
      '2.5 mg to 5.0 mg orally once daily in the morning at the same time each day (daily low-dose regimen preferred over episodic 20mg PRN to maintain steady-state smooth muscle relaxation without hemodynamic swings).',
    sedationLiability: 'None',
    bbbPenetration: 'Moderate',
    clinicalPearls: [
      'Pelvic Hypertonicity & Anorgasmia Breakthrough: Continuous pelvic floor smooth muscle relaxation and internal pudendal arterial perfusion relieve ischemic nerve compression, lowering the threshold for sexual climax and orgasmic release.',
      'Slow COMT Safe: 100% non-catechol structure with zero COMT degradation pathway; causes zero hypertensive neck spasms or dopamine pooling.',
      'Synergizes with Telmisartan: Augments post-capillary venodilation and renal hemodynamics.',
      'Amlodipine Caution: Initiating at 2.5mg daily prevents excessive peripheral vasodilation or additive orthostatic drops alongside dihydropyridine CCBs.'
    ],
    cautionWarnings: [
      'Absolute Contraindication: Strictly prohibited with organic nitrates (nitroglycerin, isosorbide mononitrate) or soluble guanylate cyclase stimulators (riociguat) due to severe, potentially fatal refractory hypotension.',
      'Avoid episodic high doses (20mg PRN) which cause abrupt blood pressure fluctuations; stick to low-dose daily administration (2.5–5mg).',
      'Mild transient dyspepsia, backache, or nasal stuffiness can occur during initial days.'
    ],
    helpRating: 4.8,
    helpStars: '★★★★★',
    helpVerdict: 'Gold Standard (Pelvic Perfusion & Neurovascular cGMP Enhancer)',
    ratingRationale:
      'Resolves pelvic floor hypertonicity, CPPS, and anorgasmic reflex blocks via internal pudendal vasodilation and cGMP elevation; zero Slow COMT burden.'
  },
  {
    id: '5-meo-dmt',
    genericName: '5-MeO-DMT (5-Methoxy-N,N-dimethyltryptamine)',
    brandNames: 'Investigational Compound (Synthetic Freebase / GHB O-4366)',
    drugClass: 'Ultra-Rapid Tryptamine / High-Affinity Serotonin 5-HT1A Agonist',
    primaryMechanism:
      'Nanomolar full agonist at somatodendritic and postsynaptic serotonin 5-HT1A receptors (Ki ~ 1–10 nM) with secondary 5-HT2A activity. Somatodendritic 5-HT1A activation in the dorsal raphe nucleus (DRN) rapidly arrests serotonin neuron firing, collapsing hyperactive Default Mode Network (DMN) connectivity, inducing profound acute ego dissolution, and releasing deep subconscious autonomic and pelvic trauma loops.',
    mcasStabilizationEffect:
      'Agonism at 5-HT1A and Sigma-1 receptors exerts neuro-immunomodulatory effects, suppressing microglial M1 pro-inflammatory cytokines (TNF-α, IL-1β). However, sympathetic distress during induction can trigger acute CRH/mast cell degranulation if somatic set and setting are unprepared. Requires pre-stabilized peripheral mast cells.',
    cognitiveImpact:
      'Breaks pathological frontoparietal cognitive loops and chronic "cognitive freeze"; triggers rapid neuroplastic dendritic remodeling and resets post-inflammatory exhaustion in Sluggish Cognitive Tempo.',
    typicalDosageRange:
      'Investigational clinical trial context: 2 mg to 5 mg vaporized pure synthetic freebase (low/handshake dose) up to 10–12 mg (full mystical dose); strictly supervised by qualified clinical facilitators with continuous vital monitoring.',
    sedationLiability: 'High',
    bbbPenetration: 'High',
    clinicalPearls: [
      'Somatic Pelvic Release: 5-HT1A stimulation triggers massive hypothalamic oxytocin release while desensitizing spinal sexual inhibitory pathways, frequently releasing chronic pelvic floor "armoring" and resolving anorgasmic blocks.',
      'Metabolized by MAO-A: Cleared by Monoamine Oxidase-A and CYP2D6 (O-demethylation); zero engagement with COMT or dopamine pathways.',
      'Ultra-Short Duration: Peak experience lasts 10–15 minutes, with full cognitive recovery within 45–60 minutes and lasting positive afterglow.',
      'Supine Positioning Required: Patient must remain fully reclined/supine to ensure physical safety and mitigate transient blood pressure shifts.'
    ],
    cautionWarnings: [
      'Absolute Contraindication: Strictly prohibited with Monoamine Oxidase Inhibitors (MAOIs such as harmaline, Syrian rue, Ayahuasca, or moclobemide) due to fatal hyperthermia and serotonin toxicity.',
      'Transient acute surge in blood pressure and heart rate during peak immersion; requires baseline cardiovascular screening.',
      'Never use without trained medical/therapeutic supervision; not an OTC or casual substance.'
    ],
    helpRating: 4.4,
    helpStars: '★★★★☆',
    helpVerdict: 'Specialist Investigational Catalyst (5-HT1A Autonomic & Pelvic Reset)',
    ratingRationale:
      'High-affinity 5-HT1A agonism resets DMN hyper-connectivity and unlocks profound somatic release of chronic pelvic floor muscular guarding without COMT load.'
  },
  {
    id: 'dmt',
    genericName: 'N,N-DMT (N,N-Dimethyltryptamine)',
    brandNames: 'Investigational Indole Alkaloid (Synthetic Freebase / SPL026)',
    drugClass: 'Short-Acting Tryptamine / 5-HT2A & Sigma-1 Receptor (Sig-1R) Agonist',
    primaryMechanism:
      'Acts as a potent agonist at serotonin 5-HT2A, 5-HT2C, and 5-HT1A receptors, coupled with high-affinity agonism at the endoplasmic reticulum Sigma-1 Receptor (Sig-1R, Ki ~ 14 µM). Stimulates TrkB-mTOR signaling to induce rapid cortical spinogenesis and synaptic plasticity, while Sig-1R chaperoning protects against hypoxia, mitochondrial oxidative stress, and neuroinflammatory ER protein misfolding.',
    mcasStabilizationEffect:
      'Sig-1R activation on microglia and macrophages inhibits NF-κB nuclear translocation and suppresses pro-inflammatory cytokines (IL-6, TNF-α). CRITICAL WARNING: Botanical preparations (Ayahuasca, plant bark extracts) contain tannins, terpenes, and solvents that trigger severe mast cell degranulation and wheezing. Only pharmaceutical-grade synthetic DMT freebase or sterile IV formulations are clinically acceptable.',
    cognitiveImpact:
      'Produces rapid cortical desynchronization followed by a sustained 7–14 day window of heightened synaptic plasticity and cognitive flexibility; eliminates SCT processing latency and rumination traps.',
    typicalDosageRange:
      'Investigational translational research context: 15 mg to 30 mg vaporized pure synthetic freebase, or 0.2–0.4 mg/kg IV infusion in clinical trial settings.',
    sedationLiability: 'Moderate',
    bbbPenetration: 'High',
    clinicalPearls: [
      'Sigma-1 Receptor Chaperone: Beyond 5-HT2A visions, Sig-1R activation quells endoplasmic reticulum stress and neuroinflammation, complementing ISRIB.',
      'Rapid TrkB Spinogenesis: Restores prefrontal dendritic spine density degraded by chronic neuroinflammation.',
      'Slow COMT Safe: Cleared by MAO-A into indole-3-acetic acid; zero catecholamine burden or SAMe depletion.',
      'Synthetic Purity Imperative: Must be free of plant lipids to avoid airway mast cell activation.'
    ],
    cautionWarnings: [
      'Absolute Contraindication: Avoid oral combinations with non-selective MAOIs outside regulated clinical trials due to extended hypertensive vulnerability.',
      'Severe MCAS Risk with botanical brews (Ayahuasca): Contains biogenic amines and plant resins that provoke massive histamine dumping.',
      'Contraindicated in unstable cardiovascular disease or personal/family history of psychosis.'
    ],
    helpRating: 4.5,
    helpStars: '★★★★½',
    helpVerdict: 'Specialist Investigational Agent (5-HT2A / Sigma-1 Receptor Neuroplasticity)',
    ratingRationale:
      'Sig-1R chaperone protection quells neuroinflammatory ER stress and drives rapid prefrontal spinogenesis with zero COMT degradation burden.'
  },
  {
    id: 'roflumilast',
    genericName: 'Roflumilast',
    brandNames: 'Daliresp, Daxas',
    drugClass: 'Selective Phosphodiesterase-4 (PDE4) Inhibitor',
    primaryMechanism:
      'Selectively inhibits PDE4, preventing intracellular breakdown of cyclic adenosine monophosphate (cAMP). High cAMP activates Protein Kinase A (PKA) and Epac pathways, which potently suppresses mast cell degranulation, NF-κB transcription, and microglial M1 pro-inflammatory activation.',
    mcasStabilizationEffect:
      'Profound inhibition of mast cell mediator release (TNF-α, leukotrienes, IL-6). Blocks both IgE- and non-IgE-mediated degranulation cascades.',
    cognitiveImpact:
      'Investigated as a potent pro-cognitive / nootropic candidate: cAMP/PKA signaling phosphorylates CREB, stimulating Brain-Derived Neurotrophic Factor (BDNF) synthesis and strengthening synaptic plasticity in prefrontal pyramidal neurons and hippocampus.',
    typicalDosageRange:
      'Off-label translational research: 100 mcg to 250 mcg daily (titrated very slowly; standard COPD dose is 500 mcg once daily).',
    sedationLiability: 'None',
    bbbPenetration: 'High',
    clinicalPearls: [
      'Dual neuro-immune action: stabilizes mast cells/microglia while directly stimulating prefrontal synaptic plasticity.',
      'Unlike antihistamines, does not touch H1 or acetylcholine receptors—causes zero drowsiness or cognitive slowing.',
      'Investigated in translational neuroscience for reversing memory deficits, cognitive slowing, and neuroinflammation.',
      'Patients must titrate up slowly from micro-doses (e.g. 100-250 mcg) to avoid gastrointestinal side effects.'
    ],
    cautionWarnings: [
      'Frequent initial GI intolerance: nausea, loose stools, abdominal cramping (often subsides after 1-2 weeks).',
      'Unintended weight loss and decreased appetite.',
      'Black-box warning for psychiatric effects: insomnia, anxiety, or depressive mood changes in susceptible individuals.',
      'Requires strict medical oversight and regular monitoring of liver enzymes and mood.'
    ],
    helpRating: 4.7,
    helpStars: '★★★★★',
    helpVerdict: 'Gold Standard Helper (PDE4 cAMP Brake)',
    ratingRationale: 'Selectively silences microglial M1 pro-inflammatory activation and mast cell degranulation via intracellular cAMP surge; zero catechol/COMT load.'
  },
  {
    id: 'ketotifen',
    genericName: 'Ketotifen Fumarate',
    brandNames: 'Zaditen, Zaditor',
    drugClass: 'Second-Generation-Derived H1 Antihistamine & Mast Cell Stabilizer',
    primaryMechanism:
      'Inhibits mast cell degranulation by stabilizing cell membranes and blocking calcium influx. Simultaneously acts as a high-affinity non-competitive H1-receptor antagonist. Possesses high lipophilicity, penetrating the blood-brain barrier.',
    mcasStabilizationEffect:
      'Gold standard mast cell stabilizer for systemic and meningeal mast cell activation. Quenches acute flares within 48 to 72 hours.',
    cognitiveImpact:
      'The "Ketotifen Dilemma": While clearing allergy-driven brain fog by quenching the mast cell storm, its central H1 blockade and anticholinergic activity induces sedation, psychomotor slowing, and cognitive blunting after 5-7 days of daily use.',
    typicalDosageRange:
      '0.5 mg to 2.0 mg daily (500 mcg to 2000 mcg). [Note: 500 mcg = 0.5 mg. A dose of 500 mg is 250x-500x the maximum therapeutic range!]',
    sedationLiability: 'High',
    bbbPenetration: 'High',
    clinicalPearls: [
      'Explains your experience: calms the MCAS storm for ~7 days, but then cumulative central H1 blockade creates secondary cognitive slowing where you "cannot think".',
      'Dosing Strategy: Administer strictly at bedtime (0.5 mg - 1 mg) to allow central sedation to clear by morning.',
      'Pulse / Cycling Protocol: Use as a 5-7 day acute flare buster, then bridge to non-sedating stabilizers (Oral Cromolyn, PEA, Quercetin) for baseline maintenance.',
      'Compounding Note: Available in pure dye-free capsules without excipients that frequently trigger MCAS flares.'
    ],
    cautionWarnings: [
      'Pronounced somnolence, heavy drowsiness, and dry mouth during initial weeks.',
      'Increased appetite and carbohydrate cravings leading to weight gain.',
      'Abrupt discontinuation can cause rebound mast cell degranulation.'
    ],
    helpRating: 4.5,
    helpStars: '★★★★½',
    helpVerdict: 'High-Efficacy Helper (Bedtime Dosing Required)',
    ratingRationale: 'Gold standard mast cell stabilizer that crosses the BBB; must be dosed strictly at bedtime to clear daytime H1 sedative blunting.'
  },
  {
    id: 'ebastine',
    genericName: 'Ebastine',
    brandNames: 'Kestine, Ebastel',
    drugClass: 'Long-Acting Second-Generation H1 Antihistamine',
    primaryMechanism:
      'Prodrug rapidly converted to the active metabolite Carebastine. Highly selective peripheral H1 receptor antagonist with minimal affinity for central muscarinic, adrenergic, or serotonergic receptors.',
    mcasStabilizationEffect:
      'Long duration of action (>24 hours). Provides strong peripheral antihistaminic protection against flushing, sinus congestion, and urticaria.',
    cognitiveImpact:
      'Minimal cognitive impairment at standard doses (10-20 mg). At high off-label doses (40 mg daily), mild central spillover or hepatic metabolic competition can contribute to subtle mental fatigue.',
    typicalDosageRange:
      'Standard: 10 mg to 20 mg once daily. Severe MCAS / Urticaria off-label: Up to 40 mg daily (often divided 20 mg BID).',
    sedationLiability: 'Low',
    bbbPenetration: 'Low',
    clinicalPearls: [
      'Metabolized via cytochrome P450 3A4 (CYP3A4) to Carebastine.',
      'Does not typically penetrate the blood-brain barrier at normal doses, making it far less sedating than Ketotifen.',
      'Taking 40 mg during a flare provides powerful peripheral suppression without the immediate central shutdown of first-gen antihistamines.'
    ],
    cautionWarnings: [
      'High-dose caution: At 40 mg daily, watch for QT-interval elongation if combined with CYP3A4 inhibitors (e.g., ketoconazole, erythromycin).',
      'Mild dry mouth, headache, or occasional drowsiness at supra-therapeutic doses.'
    ],
    helpRating: 4.3,
    helpStars: '★★★★☆',
    helpVerdict: 'Safe Non-Sedating Daytime Helper',
    ratingRationale: 'Long-acting peripheral H1 antihistamine with zero anticholinergic load and minimal BBB penetration; excellent daytime anchor.'
  },
  {
    id: 'pitolisant',
    genericName: 'Pitolisant',
    brandNames: 'Wakix',
    drugClass: 'Selective Histamine H3 Receptor Antagonist / Inverse Agonist',
    primaryMechanism:
      'Selectively blocks presynaptic H3 autoreceptors and heteroreceptors in the brain. Directly disinhibits the release of acetylcholine, dopamine, norepinephrine, and histamine throughout the prefrontal cortex and hippocampus.',
    mcasStabilizationEffect:
      'Does not directly stabilize mast cells; acts as a central neurochemical disinhibitor targeting the downstream cognitive consequences of histamine saturation.',
    cognitiveImpact:
      'Directly reverses the "H3 Presynaptic Autoreceptor Paradox"! Restores acetylcholine for verbal fluency and lexical retrieval, restores dopamine for executive motivation, and eliminates SCT hypoarousal.',
    typicalDosageRange:
      'Off-label titration: 4.5 mg to 17.8 mg once daily in the morning (approved for narcolepsy/cataplexy).',
    sedationLiability: 'None',
    bbbPenetration: 'High',
    clinicalPearls: [
      'The exact pharmacological antidote to the H3 shutdown mechanism causing your brain fog and word retrieval blocks.',
      'Profound wakefulness- and alertness-promoting properties without the sympathomimetic crash of amphetamines.',
      'Translational use in cognitive disorders and refractory brain fog is an active area of neuropharmacology research.'
    ],
    cautionWarnings: [
      'MCAS Caution: Because it increases central histamine release, it must only be used in patients whose peripheral mast cells are firmly stabilized with Cromolyn or H1/H2 blockers.',
      'Insomnia if taken in the afternoon or evening; transient headache, nausea.',
      'QTc prolongation risk at high doses.'
    ],
    helpRating: 4.2,
    helpStars: '★★★★☆',
    helpVerdict: 'High-Value Specialist Helper',
    ratingRationale: 'Disinhibits presynaptic H3 autoreceptors to surge central acetylcholine and histamine for alertness; lacks stimulant crash, but requires specialist prescription.'
  },
  {
    id: 'ldn',
    genericName: 'Low-Dose Naltrexone (LDN)',
    brandNames: 'Compounded Naltrexone',
    drugClass: 'Toll-Like Receptor 4 (TLR4) Antagonist & Microglial Modulator',
    primaryMechanism:
      'At micro-doses (1.5 - 4.5 mg), naltrexone stereoisomerically antagonizes TLR4 receptors on microglia and mast cells. Suppresses the NF-κB cascade, blunts nitric oxide synthase, and halts pro-inflammatory cytokine production (TNF-α, IL-6).',
    mcasStabilizationEffect:
      'Dampens neuro-immune crosstalk; downregulates mast cell degranulation via non-opioid glial pathways.',
    cognitiveImpact:
      'Significantly reduces neuroinflammatory brain fog, mental exhaustion, and cognitive friction without inducing any drowsiness, psychomotor slowing, or tolerance.',
    typicalDosageRange:
      '1.5 mg titrated by 0.5-1.0 mg every 2-4 weeks up to 4.5 mg taken at bedtime or morning.',
    sedationLiability: 'None',
    bbbPenetration: 'High',
    clinicalPearls: [
      'Non-sedating cornerstone therapy for neuroinflammation, MCAS brain fog, and chronic fatigue overlap.',
      'Transient vivid dreams during the first 1-2 weeks of titration (can be mitigated by shifting to morning dosing).',
      'Allows prefrontal neurons to recover mitochondrial ATP efficiency by removing microglial cytokine pressure.'
    ],
    cautionWarnings: [
      'Must not be taken with prescription opioid medications (blocks opioid receptors).',
      'Temporary sleep disturbance or vivid dreams during initiation.',
      'Requires compounding pharmacy with hypoallergenic fillers (avoid lactose/microcrystalline cellulose triggers).'
    ],
    helpRating: 4.8,
    helpStars: '★★★★★',
    helpVerdict: 'Foundational Glial Reset Helper',
    ratingRationale: 'Stereoisomerically blocks microglial TLR4 signaling, quenching chronic neuroinflammation and post-exertional malaise with zero tolerance.'
  },
  {
    id: 'guanfacine',
    genericName: 'Guanfacine',
    brandNames: 'Tenex, Intuniv',
    drugClass: 'Selective Alpha-2A Adrenoceptor Agonist',
    primaryMechanism:
      'Stimulates post-synaptic α2A receptors on dendritic spines of prefrontal cortical pyramidal neurons. Closes hyperpolarization-activated cyclic nucleotide-gated (HCN) channels, strengthening synaptic connections and delay-period recurrent firing.',
    mcasStabilizationEffect:
      'Suppresses peripheral sympathetic outflow from the locus coeruleus, reducing systemic noradrenaline and adrenaline that trigger adrenergic mast cell degranulation.',
    cognitiveImpact:
      'Directly stabilizes prefrontal working memory buffers ("stopping thoughts from slipping through fingers"). Sharpens executive focus and situational emotional regulation without stimulant jitteriness.',
    typicalDosageRange:
      '0.5 mg to 2.0 mg daily (usually taken at bedtime due to mild initial somnolence, or extended-release Intuniv).',
    sedationLiability: 'Low',
    bbbPenetration: 'High',
    clinicalPearls: [
      'The ideal cognitive stabilizer for ADHD + MCAS overlap: strengthens prefrontal focus while dampening sympathetic mast cell activation.',
      'Unlike stimulants (which release norepinephrine and trigger mast cells), Guanfacine calms systemic sympathetic firing.',
      'Researched at Yale (Arnsten et al.) for restoring prefrontal network connectivity damaged by systemic inflammation.'
    ],
    cautionWarnings: [
      'Can lower blood pressure and heart rate; monitor in patients with POTS / dysautonomia (though often beneficial for hyperadrenergic POTS).',
      'Mild drowsiness or dry mouth during first 10 days of titration.',
      'Must be tapered gradually to avoid rebound hypertension.'
    ],
    helpRating: 4.7,
    helpStars: '★★★★★',
    helpVerdict: 'Prefrontal Connectivity Anchor',
    ratingRationale: 'Selectively closes hyperpolarizing cAMP-gated HCN channels on prefrontal pyramidal spines, stabilizing working memory without stimulant jitters.'
  },
  {
    id: 'cromolyn-sodium',
    genericName: 'Cromolyn Sodium (Oral & Nasal)',
    brandNames: 'Gastrocrom, Nasalcrom',
    drugClass: 'Pure Non-Systemic Mast Cell Membrane Stabilizer',
    primaryMechanism:
      'Blocks chloride channels and prevents intracellular calcium flux into mast cells upon antigen exposure. Zero central nervous system penetration (<1% systemic absorption).',
    mcasStabilizationEffect:
      'The foundational non-sedating mast cell stabilizer. Oral form quenches gut mucosal degranulation; Nasal form quenches sphenoethmoidal sinus mast cells at the cribriform plate.',
    cognitiveImpact:
      'Provides pure mast cell stabilization with ZERO cognitive blunting, ZERO sedation, and ZERO anticholinergic baggage. Frees up cognitive bandwidth by stopping the gut and sinus afferent barrage.',
    typicalDosageRange:
      'Oral: 100 mg - 200 mg dissolved in warm water 4x daily 20-30 min before meals. Nasal: 1-2 sprays per nostril 3-4x daily.',
    sedationLiability: 'None',
    bbbPenetration: 'Negligible (Peripheral)',
    clinicalPearls: [
      'The ideal long-term alternative when Ketotifen causes too much brain fog: Cromolyn cannot cause drowsiness because it cannot cross into the brain.',
      'Nasal Cromolyn directly blocks the cribriform cytokine diffusion responsible for "thoughts slipping through fingers."',
      'Must be titrated slowly to avoid initial mast cell flares (start with 1/2 ampule once daily and titrate up).'
    ],
    cautionWarnings: [
      'Initial paradoxical flare if started at full dose; requires gradual titration.',
      'Inconvenient dosing schedule (requires taking 4x daily in liquid form before meals).',
      'Does not cross the BBB, so cannot directly treat intracranial meningeal mast cells (complements Ketotifen or PEA).'
    ],
    helpRating: 4.9,
    helpStars: '★★★★★',
    helpVerdict: 'Pure Non-Systemic Gold Standard',
    ratingRationale: 'Zero systemic absorption, pure membrane barrier protection coating mucosal gut/sinus mast cells; zero brain fog liability.'
  },
  {
    id: 'pentoxifylline',
    genericName: 'Pentoxifylline',
    brandNames: 'Trental',
    drugClass: 'Non-Selective Phosphodiesterase Inhibitor & Hemorheologic Agent',
    primaryMechanism:
      'Inhibits cellular phosphodiesterases, increasing cAMP in leukocytes and vascular endothelium. Potently suppresses gene transcription of Tumor Necrosis Factor-alpha (TNF-α) and reduces blood viscosity by enhancing erythrocyte deformability.',
    mcasStabilizationEffect:
      'Blocks TNF-α mediated vascular permeability and inhibits leukocyte-endothelial adhesion along cerebral microvessels.',
    cognitiveImpact:
      'Enhances microvascular capillary perfusion to prefrontal cortex and temporal language areas, reversing cerebral hypoperfusion and clearing cytokine-induced mental haze.',
    typicalDosageRange:
      '400 mg once to three times daily taken with meals.',
    sedationLiability: 'None',
    bbbPenetration: 'Moderate',
    clinicalPearls: [
      'Non-sedating TNF-α inhibitor and microvascular optimizer.',
      'Frequently used in neuro-immune research for microvascular endothelial inflammation and cerebral hypoperfusion.',
      'Enhances oxygen and glucose delivery to energy-starved prefrontal pyramidal neurons.'
    ],
    cautionWarnings: [
      'Mild gastrointestinal upset or nausea (take strictly with food).',
      'Mild anti-platelet effect; caution in patients on anticoagulants or with active bleeding disorders.'
    ],
    helpRating: 4.0,
    helpStars: '★★★★☆',
    helpVerdict: 'Microvascular Perfusion & TNF-α Helper',
    ratingRationale: 'Selectively blocks TNF-alpha gene transcription and increases erythrocyte deformability, boosting cerebral and microvascular capillary perfusion.'
  },
  {
    id: 'pea',
    genericName: 'Palmitoylethanolamide (PEA - Micronized)',
    brandNames: 'Normast, PeaPure, Mirica',
    drugClass: 'Endogenous ALIAmide & Nuclear Receptor PPAR-α Agonist',
    primaryMechanism:
      'Acts via Autacoid Local Injury Antagonism (ALIA). Binds peroxisome proliferator-activated receptor-alpha (PPAR-α) to shut down mast cell degranulation, NF-κB, and microglial activation in both the periphery and CNS.',
    mcasStabilizationEffect:
      'Potent endogenous lipid mediator that calms hyperactive mast cells and modulates CB1/CB2 endocannabinoid tone.',
    cognitiveImpact:
      'Neuroprotective and microglial-dampening without any sedation or cognitive slowing. Helps restore axonal conduction velocity and supports prefrontal working memory.',
    typicalDosageRange:
      '600 mg to 1200 mg daily in divided doses (micronized or ultramicronized formulation for bioavailability).',
    sedationLiability: 'None',
    bbbPenetration: 'High',
    clinicalPearls: [
      'Zero sedation, zero anticholinergic load, and outstanding safety profile.',
      'Crosses the blood-brain barrier to calm central meningeal mast cells without the cognitive blunting of Ketotifen.',
      'Synergizes exceptionally well with Luteolin (often co-formulated as PEALut).'
    ],
    cautionWarnings: [
      'Requires 3-6 weeks of consistent daily use to reach steady-state tissue levels.',
      'Must use micronized or ultramicronized formulations (standard unmicronized PEA has poor bioavailability).'
    ],
    helpRating: 4.8,
    helpStars: '★★★★★',
    helpVerdict: 'Slow-COMT Safe Endogenous Helper',
    ratingRationale: 'Endogenous ALIAmide PPAR-alpha agonist quenching meningeal mast cells and microglia without BBB sedation or COMT catechol clearance burden.'
  },
  {
    id: 'telmisartan',
    genericName: 'Telmisartan',
    brandNames: 'Micardis',
    drugClass: 'Angiotensin II Receptor Blocker (ARB) & Partial PPAR-γ Agonist',
    primaryMechanism:
      'Dual mechanism: High-affinity blockade of Angiotensin II Type 1 (AT1) receptors combined with potent partial agonism of Peroxisome Proliferator-Activated Receptor Gamma (PPAR-γ). Downregulates NF-κB, inhibits microglial M1 pro-inflammatory activation, protects blood-brain barrier tight junctions (claudin-5), and enhances cerebral microvascular blood flow.',
    mcasStabilizationEffect:
      'Angiotensin II stimulates mast cell degranulation via AT1 receptors. Telmisartan blocks this pathway, reducing vascular permeability and blunting histamine-induced microvascular leakage. PPAR-γ activation directly suppresses mast cell cytokine transcription.',
    cognitiveImpact:
      'Considered one of the most neuroprotective cardiovascular agents in translational neuroscience: enhances cognitive processing, increases Brain-Derived Neurotrophic Factor (BDNF), attenuates LPS-induced neuroinflammation, and improves prefrontal cerebral perfusion without sedation.',
    typicalDosageRange:
      '20 mg to 80 mg once daily (standard cardiovascular / off-label neuro-immune dosing).',
    sedationLiability: 'None',
    bbbPenetration: 'High',
    clinicalPearls: [
      'Unique among ARBs for its high lipophilicity and blood-brain barrier penetration, directly acting on central microglia and cerebrovascular endothelium.',
      'PPAR-γ agonism provides systemic metabolic and anti-inflammatory benefits similar to pioglitazone, but without fluid retention.',
      'Exercise Synergy: Dilates renal and splanchnic vascular beds, helping protect gut barrier perfusion during moderate exercise.',
      'Counters the peripheral ankle edema often caused by amlodipine by promoting balanced post-capillary venodilation.'
    ],
    cautionWarnings: [
      'Monitor blood pressure and serum potassium (especially if combined with potassium supplements).',
      'Hydration vigilance during exercise: combined vasodilation can increase orthostatic drop if exercising in extreme heat or dehydrated.'
    ],
    helpRating: 4.6,
    helpStars: '★★★★★',
    helpVerdict: 'Capillary Balancer & Neuroprotective Helper',
    ratingRationale: 'High-affinity AT1 blocker plus partial PPAR-gamma agonist; crosses BBB, promotes post-capillary venular drainage to neutralize Amlodipine capillary pooling.'
  },
  {
    id: 'amlodipine',
    genericName: 'Amlodipine Besylate',
    brandNames: 'Norvasc',
    drugClass: 'Dihydropyridine L-Type Calcium Channel Blocker (CCB)',
    primaryMechanism:
      'Inhibits transmembrane influx of extracellular calcium ions through voltage-dependent L-type calcium channels in vascular smooth muscle and myocardial cells. Promotes robust peripheral and coronary arteriolar dilation.',
    mcasStabilizationEffect:
      'Mast cell degranulation requires calcium influx. While mast cells primarily utilize Store-Operated Calcium Entry (SOCE via ORAI1), L-type channel blockade provides secondary dampening of calcium signaling in vascular and perivascular mast cells.',
    cognitiveImpact:
      'Neutral to mildly positive on baseline cognition via blood pressure stabilization and microvascular flow. However, during upright exercise or heat, excessive peripheral pooling can cause transient cerebral hypoperfusion ("empty head" feeling).',
    typicalDosageRange:
      '2.5 mg to 10 mg once daily.',
    sedationLiability: 'None',
    bbbPenetration: 'Moderate',
    clinicalPearls: [
      'The "Sock Marks for as Long as I Can Remember" Revelation: Having sock marks at the end of the day lifelong indicates pre-existing baseline microvascular hyperpermeability (mast cell VEGF, histamine, and tryptase loosening endothelial VE-cadherin junctions) and/or venous wall/valve laxity (hypermobility spectrum) that predates medication.',
      'The Starling Equation Hydraulic Trap: Amlodipine selectively dilates PRE-capillary arterioles with virtually zero post-capillary venodilation. This transmits systemic arterial pressure straight into the capillary bed, spiking capillary hydrostatic pressure (Pc). When superimposed on pre-existing leaky vessels, fluid is forcibly extravasated, severely deepening lifelong sock marks.',
      'The Link to "Thoughts Slipping Through Fingers": Trapping 0.5 to 1.0+ liters of fluid in dependent lower extremities by the end of the day reduces central effective circulating volume and cardiac stroke volume. In the upright position, this creates subtle frontopolar cerebral hypoperfusion, starving prefrontal BA 10 circuits of ATP and making thought chains dissolve by late afternoon!',
      'Why Diuretics Fail: CCB edema is purely hemodynamic (intracapillary hydrostatic pressure spike), NOT generalized plasma volume overload. Diuretics (furosemide/HCTZ) cause intravascular volume contraction and worsening fatigue without resolving the local capillary leak.',
      'The 3rd-Generation Alternative (Lercanidipine): 3rd-generation lipophilic CCBs like Lercanidipine dilate BOTH pre-capillary arterioles and post-capillary venules equally, cutting dependent edema by 60-70% while maintaining identical blood pressure control.',
      'Farmer\'s Walks & Calf Pump Antidote: Heavy carries and rhythmic walking activate the gastrocnemius/soleus muscle pump (generating up to 200 mmHg intramuscular pressure), mechanically squeezing pooled venous blood and interstitial lymph back to the heart!'
    ],
    cautionWarnings: [
      'Peripheral dependent edema (swollen ankles/feet); severely exacerbated in patients with baseline microvascular hyperpermeability or chronic sitting.',
      'Potential reflex sympathetic activation if blood pressure drops too rapidly.',
      'End-of-day orthostatic cerebral hypoperfusion: Avoid sudden standstill after exercise; use graduated compression socks during desk work.'
    ],
    helpRating: 2.8,
    helpStars: '★★½☆☆',
    helpVerdict: 'Mixed Helper / Edema Aggravator (Pre-Capillary Bias)',
    ratingRationale: 'Potent arterial antihypertensive, but causes selective pre-capillary vasodilation without venodilation, spiking capillary hydrostatic pressure (Pc) and worsening lifelong sock marks and upright pooling.'
  },
  {
    id: 'lercanidipine',
    genericName: 'Lercanidipine',
    brandNames: 'Zanidip, Lerdip',
    drugClass: '3rd-Generation Lipophilic Calcium Channel Blocker (Balanced Arteriolar-Venular Dilator)',
    primaryMechanism:
      'Highly lipophilic, membrane-controlled dihydropyridine calcium channel blocker. Unlike Amlodipine (which selectively dilates pre-capillary arterioles), Lercanidipine exerts dual balanced vasodilation of BOTH pre-capillary arterioles AND post-capillary venules by blocking both L-type and T-type calcium channels in microvascular beds. This prevents the intracapillary hydrostatic pressure spike (Pc) that drives fluid extravasation into the tissues.',
    mcasStabilizationEffect:
      'Provides smooth vascular smooth muscle tone modulation without mechanically forcing plasma through histamine-permeabilized endothelial junctions. High vascular selectivity minimizes systemic sympathetic reflex discharge.',
    cognitiveImpact:
      'Significantly superior to Amlodipine for patients prone to brain fog and dependent pooling: By avoiding lower-extremity fluid sequestration, it preserves central venous return, stroke volume, and upright prefrontal cerebral perfusion throughout the workday.',
    typicalDosageRange:
      '10 mg to 20 mg once daily (taken 15 minutes before breakfast).',
    sedationLiability: 'None',
    bbbPenetration: 'Moderate',
    clinicalPearls: [
      'The Clinical Upgrade for Amlodipine Edema: Meta-analyses demonstrate Lercanidipine reduces peripheral edema and "sock mark" severity by 60% to 70% compared to Amlodipine while achieving identical 24-hour blood pressure reduction.',
      'Maintains Post-Capillary Drainage: By dilating post-capillary venules in tandem with arterioles, microvascular pressure across the capillary bed remains normal, neutralizing the Starling fluid leak.',
      'Perfect Companion to Telmisartan: When combined with Telmisartan, provides comprehensive renin-angiotensin and calcium channel blockade with virtually zero lower-extremity fluid pooling.',
      'Physician Discussion Point: An ideal alternative to evaluate with your prescribing doctor if Amlodipine-induced dependent edema compromises comfort or upright cognitive stamina.'
    ],
    cautionWarnings: [
      'Must be taken before meals (high-fat meals significantly increase absorption).',
      'Mild headache or facial flushing during initial 3-5 days of initiation.',
      'Requires prescription and physician transition management from Amlodipine.'
    ],
    helpRating: 4.5,
    helpStars: '★★★★½',
    helpVerdict: 'Balanced Microvascular Upgrade for Amlodipine',
    ratingRationale: '3rd-generation lipophilic CCB that dilates both pre-capillary arterioles AND post-capillary venules equally, cutting peripheral edema by 60-70% while preserving blood pressure control.'
  },
  {
    id: 'budesonide-rinse',
    genericName: 'Budesonide Sinus Rinse (Pulmicort Respules)',
    brandNames: 'Pulmicort Respules (0.25mg - 0.5mg/2mL in saline)',
    drugClass: 'Topical High-Volume Glucocorticoid Sinus Lavage',
    primaryMechanism:
      'High-volume, low-pressure mechanical irrigation (240 mL buffered saline) delivering micronized budesonide directly to the superior ethmoid sinuses and cribriform plate. Glucocorticoid receptor activation trans-represses NF-κB, downregulates Stem Cell Factor (SCF), depletes mucosal mast cell population over time, and inhibits histidine decarboxylase (the enzyme synthesizing histamine).',
    mcasStabilizationEffect:
      'Dual mechanism: High-volume saline physically washes out luminal histamine, leukotrienes, and antigens before cribriform diffusion. Over 1-2 weeks, budesonide reduces mucosal mast cell density by 50-80% and halts eosinophilic/neutrophilic recruitment.',
    cognitiveImpact:
      'Long-term prevention of teleological cognitive chaining failure: By clearing chronic mucosal inflammation and depleting mast cells at the cribriform boundary, it prevents the H3 autoreceptor saturation that breaks thought chains. (Note: Does not immediately block histamine receptors in an acute flare; requires 3-7 days for genomic onset).',
    typicalDosageRange:
      '0.25 mg to 0.5 mg (one respule) mixed into 240 mL NeilMed buffered saline rinse once or twice daily.',
    sedationLiability: 'None',
    bbbPenetration: 'Low',
    clinicalPearls: [
      'Anatomical Superiority over Nasal Sprays: Standard nasal sprays (Flonase, Nasacort) only coat the inferior and middle turbinates (under 20% reach the ethmoid sinuses). High-volume low-pressure rinses (240 mL) flood the sphenoethmoidal recess and cribriform plate.',
      'Acute vs. Preventive Nuance: Pulmicort does NOT acutely block histamine receptors or halt active degranulation within minutes. For an acute flare, pair with an immediate H1/stabilizer (Azelastine or Nasal Cromolyn).',
      'The Compounded Triple Rinse: ENT specialists frequently compound Budesonide + Azelastine or Cromolyn directly into the saline bottle to achieve instant mast cell stabilization + deep steroid anti-inflammatory action simultaneously.',
      'Zero Cognitive Sedation: Extremely low systemic bioavailability (<10% due to high first-pass hepatic metabolism of swallowed fraction).'
    ],
    cautionWarnings: [
      'Must use distilled, sterile, or previously boiled water for sinus rinses (never unboiled tap water).',
      'Potential local mucosal dryness or mild epistaxis (nosebleeds) if overused; alternate with plain saline.',
      'Rinse mouth if post-nasal drainage occurs to prevent local candida (rare with nasal irrigation).'
    ],
    helpRating: 4.4,
    helpStars: '★★★★☆',
    helpVerdict: 'Cribriform Mucosal Mast Cell Depletion Rinse',
    ratingRationale: 'High-volume lavage delivers glucocorticoid directly to the sphenoethmoidal recess and cribriform plate with <10% systemic bioavailability, halting sinus cytokine leakage into frontal lobes.'
  },
  {
    id: 'perilla-extract',
    genericName: 'Perilla frutescens Extract (Rosmarinic Acid + Luteolin + Apigenin)',
    brandNames: 'Standardized Perilla Seed/Leaf Extract, Benegut, Allercetin',
    drugClass: 'Natural Polyphenolic Mast Cell Stabilizer, Complement C3/C5 Blocker & Microglial Quencher',
    primaryMechanism:
      'Perilla frutescens is the richest botanical source of Rosmarinic Acid, Luteolin, and Apigenin. Rosmarinic acid directly inhibits Complement C3 convertase and prevents C3b/C5a anaphylatoxin formation (a major non-IgE trigger of mast cell degranulation). Dual-inhibits 5-Lipoxygenase (5-LOX) and Cyclooxygenase-2 (COX-2), halting the prolonged synthesis of leukotrienes (LTC4, LTD4) and prostaglandins (PGD2) that cause protracted weeks-long tissue edema and vascular leakiness. Luteolin and Apigenin cross the BBB, repressing microglial NF-κB, activating Nrf2/HO-1 antioxidant defenses, and restoring zonula occludens (ZO-1) tight junctions.',
    mcasStabilizationEffect:
      'Profound, multi-target stabilization of enteric, sinonasal, and perivascular mast cells. Unlike single-target antihistamines, Perilla extinguishes both complement-driven and cytokine-driven chronicity cycles, explaining why it acts as a decisive "circuit breaker" for flares lasting weeks.',
    cognitiveImpact:
      'Potent rescue of frontopolar cognitive chaining: By suppressing microglial M1 polarization and halting the chronic release of IL-6/TNF-α, it allows prefrontal attractor basins to re-stabilize. Completely non-sedating; zero anticholinergic activity.',
    typicalDosageRange:
      '150 mg to 500 mg standardized Perilla extract (standardized to ≥10-20% Rosmarinic Acid) taken 1 to 2 times daily; often combined with micronized PEA (600 mg) and Luteolin (100 mg).',
    sedationLiability: 'None',
    bbbPenetration: 'Moderate',
    clinicalPearls: [
      'The "Circuit Breaker" Molecule: Explains your observation that a Perilla combo breaks multi-week flares. Rosmarinic acid inhibits complement C3/C5—which standard H1 blockers and Ketotifen completely ignore.',
      'Gut Barrier Sealing: Rosmarinic acid upregulates Claudin-1 and ZO-1 proteins in intestinal epithelial cells, stopping the paracellular leakage of bacterial LPS endotoxin into portal circulation.',
      'Synergistic Stacking: Stacks safely and powerfully with Telmisartan, Amlodipine, and Ebastine; does not lower systemic blood pressure.',
      'No Tachyphylaxis or Cognitive Blunting: Can be taken daily without inducing the 7-day cognitive slowing typical of Ketotifen.'
    ],
    cautionWarnings: [
      'Ensure source is standardized to rosmarinic acid (raw perilla culinary oil has lower polyphenol density than seed/leaf extract).',
      'Mild anti-platelet / anti-aggregatory activity at very high doses (caution with prescription anticoagulants).',
      'Extremely well tolerated with virtually no reports of sedation or metabolic disturbance.'
    ],
    helpRating: 4.8,
    helpStars: '★★★★★',
    helpVerdict: 'Complement C3/C5 Flare Circuit Breaker',
    ratingRationale: 'Rosmarinic acid, luteolin, and apigenin directly extinguish complement anaphylatoxins (C3a/C5a) and dual-inhibit 5-LOX/COX-2 without COMT inhibition or sedation.'
  },
  {
    id: 'rifaximin',
    genericName: 'Rifaximin',
    brandNames: 'Xifaxan, Targaxan',
    drugClass: 'Non-Systemic Gut-Targeted Antimicrobial & Pregnane X Receptor (PXR) Agonist',
    primaryMechanism:
      'Minimally absorbed oral rifamycin antibiotic (<0.4% systemic bioavailability) that stays strictly in the gastrointestinal lumen. Rapidly suppresses small intestinal bacterial overgrowth (SIBO), reducing Gram-negative bacterial density and eliminating the continuous generation of Lipopolysaccharide (LPS endotoxin). Beyond its antimicrobial action, Rifaximin functions as a direct gut-lumen agonist of the Pregnane X Receptor (PXR), which actively represses mucosal NF-κB, repairs epithelial tight junctions, and halts enteric mast cell degranulation.',
    mcasStabilizationEffect:
      'Eliminates the primary chronic antigenic driver of systemic and enteric MCAS. In SIBO-driven MCAS, bacterial LPS continuously stimulates Toll-Like Receptor 4 (TLR4) on mucosal mast cells, locking them into an unceasing weeks-long degranulation loop. By eradicating the bacterial fuel, Rifaximin breaks the vicious cycle.',
    cognitiveImpact:
      'Dramatic resolution of refractory chronic brain fog ("the locked flare"). By halting endotoxemia (LPS leaking across a permeable gut barrier into systemic circulation), it relieves microglial TLR4 stimulation in the brain, restoring prefrontal processing speed and cognitive chaining.',
    typicalDosageRange:
      '550 mg orally two to three times daily for 14 days (standard SIBO protocol).',
    sedationLiability: 'None',
    bbbPenetration: 'Negligible (Peripheral)',
    clinicalPearls: [
      'Explains why antibiotics shift your weeks-long flare: If a flare lasts for weeks, it is often fueled by small bowel bacterial translocation (SIBO / leaky gut). Antibiotics eradicate the bacterial LPS trigger that was continuously restimulating mast cells.',
      'PXR Agonism: Even independent of bacterial killing, Rifaximin directly dampens intestinal inflammatory cascades and tightens mucosal junctions.',
      'Zero Cognitive or CNS Sedation: Because systemic absorption is <0.4%, it has zero brain-penetrating toxicity or sedative side effects.',
      'Post-Treatment Motility: Pairing with a gentle prokinetic (ginger extract, low-dose naltrexone) prevents SIBO relapse.'
    ],
    cautionWarnings: [
      'Prescription-only; standard SIBO diagnosis typically confirmed via Lactulose Hydrogen/Methane Breath Test.',
      'Requires full 14-day completion to avoid incomplete bacterial eradication.',
      'Relatively high financial cost if not covered by insurance for IBS-D/SIBO.'
    ],
    helpRating: 4.5,
    helpStars: '★★★★½',
    helpVerdict: 'Gut-Lumen Endotoxin Eliminator (<0.4% absorbed)',
    ratingRationale: 'Erradicates SIBO bacterial endotoxin (LPS) that fuels systemic and microglial TLR4 activation; PXR agonism repairs gut tight junctions with zero systemic sedation.'
  },
  {
    id: 'minocycline-doxycycline',
    genericName: 'Minocycline / Doxycycline (Low-Dose Microglial Inhibitors)',
    brandNames: 'Minocin, Vibramycin, Oracea',
    drugClass: 'Central Blood-Brain Barrier Penetrating Microglial M1 Quenchers',
    primaryMechanism:
      'Second-generation lipophilic tetracyclines with extraordinary CNS penetration. Beyond broad-spectrum antimicrobial activity, they exert potent non-antimicrobial neuro-immunological effects: directly inhibiting Poly(ADP-ribose) Polymerase-1 (PARP-1), downregulating p38 MAPK phosphorylation, inhibiting inducible nitric oxide synthase (iNOS), and forcing activated M1 microglia back into the resting M0 surveilling state.',
    mcasStabilizationEffect:
      'Blocks matrix metalloproteinases (MMP-2 and MMP-9) released by mast cells, preventing the breakdown of the blood-brain barrier. Extinguishes microglial-mast cell crosstalk in the meninges and choroid plexus.',
    cognitiveImpact:
      'Investigated in translational neuropsychiatry for treatment-resistant cognitive fatigue and neuroinflammation. Rescues dendritic spine loss and prefrontal processing speed by arresting microglial synaptic pruning and cytokine neurotoxicity.',
    typicalDosageRange:
      '50 mg to 100 mg once or twice daily (or sub-antimicrobial dose 40 mg daily for pure anti-inflammatory effect).',
    sedationLiability: 'None',
    bbbPenetration: 'High',
    clinicalPearls: [
      'The Second Antibiotic Mechanism: If systemic antibiotics (such as doxycycline/minocycline or macrolides) broke your weeks-long flare, their efficacy was likely mediated by direct microglial quiescence and BBB stabilization rather than mere bacterial killing.',
      'Anti-Biofilm Activity: Disrupts persistent bacterial and staphylococcal biofilms in the sinuses or gut that act as continuous mast cell superantigens.',
      'Non-Sedating: Does not cause antihistaminic drowsiness or cholinergic depletion.'
    ],
    cautionWarnings: [
      'Photosensitivity (increased sunburn risk).',
      'Potential GI upset or candidiasis if taken long-term without probiotic support.',
      'Vestibular dizziness with higher-dose minocycline (doxycycline is typically preferred).'
    ],
    helpRating: 4.1,
    helpStars: '★★★★☆',
    helpVerdict: 'Sub-Antimicrobial Microglial M1 Quencher',
    ratingRationale: 'Lipophilic tetracyclines enter CNS to inhibit PARP-1, MMP-9, and p38 MAPK, shifting microglia from neurotoxic M1 to resting M0.'
  },
  {
    id: 'diosmin-hesperidin-mpff',
    genericName: 'Micronized Purified Flavonoid Fraction (MPFF: 90% Diosmin / 10% Hesperidin)',
    brandNames: 'Daflon, Vasculera, Detralex',
    drugClass: 'Phlebotropic Bioflavonoid & Venous Tone / Lymphatic Regulator',
    primaryMechanism:
      'Increases venous parietal tone by prolonging noradrenaline-induced venous contraction (inhibits Catechol-O-Methyltransferase in venous walls). Downregulates endothelial adhesion molecules (ICAM-1, VCAM-1), protects endothelial VE-cadherin adherens junctions from leukocyte migration, and directly stimulates lymphatic drainage by increasing lymphatic capillary contraction frequency and amplitude.',
    mcasStabilizationEffect:
      'Dampens mast cell-mediated microvascular hyperpermeability. Inhibits inflammatory prostaglandins (PGE2, PGF2α) and thromboxane B2 in venous walls, preventing histamine- and VEGF-induced transudation.',
    cognitiveImpact:
      'Prevents late-afternoon orthostatic cerebral hypoperfusion: By restoring venous return and preventing the sequestration of 0.5-1.0L of blood in the lower limbs, it maintains cardiac preload, systemic stroke volume, and frontal lobe oxygenation throughout upright desk work.',
    typicalDosageRange:
      '500 mg twice daily with meals (or 1,000 mg once daily micronized formulation).',
    sedationLiability: 'None',
    bbbPenetration: 'Low',
    clinicalPearls: [
      'The Gold Standard for Dependent Edema & Sock Marks: Meta-analyses of clinical trials demonstrate MPFF significantly reduces ankle circumference, edema volume, and heavy-leg sensations within 4 to 8 weeks.',
      'Neutralizes the Amlodipine Capillary Trap: While Amlodipine dilates pre-capillary arterioles and raises intracapillary pressure, MPFF increases post-capillary venular tone and decreases capillary filtration (Kf), directly counteracting the Starling equation fluid shift.',
      'Lymphatic Accelerator: The only agent proven to accelerate lymphatic micro-drainage, physically clearing trapped interstitial protein and fluid from subcutaneous ankle tissues.',
      'Non-Sedating & Non-Hypotensive: Does not lower systemic blood pressure or cause drowsiness; purely improves venous capacitance and endothelial integrity.'
    ],
    cautionWarnings: [
      'Mild gastrointestinal symptoms (nausea, dyspepsia) in rare cases; mitigated by taking strictly with meals.',
      'Full clinical benefit on chronic tissue remodeling typically requires 4 to 8 weeks of daily use.'
    ],
    helpRating: 4.9,
    helpStars: '★★★★★',
    helpVerdict: 'Gold Standard Phlebotropic Venular Balancer',
    ratingRationale: 'Increases post-capillary venular tone, stimulates lymphatic micro-pumping, and repairs endothelial VE-cadherin junctions, neutralizing the Amlodipine capillary trap.'
  },
  {
    id: 'pycnogenol-pine-bark',
    genericName: 'French Maritime Pine Bark Extract (Pycnogenol® / Standardized OPCs)',
    brandNames: 'Pycnogenol, Oligopin',
    drugClass: 'Endothelial Glycocalyx Protector & Microvascular Permeability Reducer',
    primaryMechanism:
      'Standardized to 70% procyanidins (flavonols, bioflavonoids, taxifolin, and phenolic acids). Binds tightly to vascular collagen and elastin, protecting the capillary basement membrane against enzymatic breakdown by matrix metalloproteinases (MMP-1, MMP-9) and elastase. Enhances endothelial nitric oxide synthase (eNOS) uncoupling defense while reducing capillary leakage.',
    mcasStabilizationEffect:
      'Potent free-radical scavenger that inhibits mast cell histamine degranulation and blocks inflammatory 5-LOX and COX-2 enzymes. Reduces endothelial permeability factor (VEGF) signaling in microvascular endothelium.',
    cognitiveImpact:
      'Proven pro-cognitive and nootropic actions in clinical trials: improves executive function, mental working memory, and sustained processing speed by boosting microvascular endothelial perfusion and protecting prefrontal neurons from oxidative stress.',
    typicalDosageRange:
      '100 mg to 150 mg once daily (or 50 mg twice daily) with food.',
    sedationLiability: 'None',
    bbbPenetration: 'Moderate',
    clinicalPearls: [
      'Directly Proven Against Calcium Channel Blocker (Amlodipine) Edema: Double-blind clinical trials in hypertensive patients on CCBs demonstrated that adding Pycnogenol (100 mg/day) reduced Amlodipine-induced ankle swelling and sock marks by over 35-40% within 8 weeks.',
      'Glycocalyx Reinforcement: Restores the microscopic endothelial glycocalyx barrier that coats the inside of blood vessels, drastically lowering capillary filtration coefficient (Kf).',
      'Dual Action on Brain and Legs: Clears lower-limb dependent fluid pooling while simultaneously enhancing cerebral microcirculation, directly supporting prefrontal cognitive chaining.',
      'Synergizes with Telmisartan: Both agents exert antioxidant and endothelial-protective effects on microvascular networks without causing unwanted hypotension.'
    ],
    cautionWarnings: [
      'Take with meals to avoid minor gastric discomfort.',
      'Mild natural anti-platelet aggregation effect; consult physician if taking prescription anticoagulants.'
    ],
    helpRating: 4.7,
    helpStars: '★★★★★',
    helpVerdict: 'Endothelial Glycocalyx & Microvascular Shield',
    ratingRationale: 'Standardized OPCs bind vascular collagen and elastin; proven in trials to reduce Amlodipine-induced edema by 35-40% while boosting prefrontal microcirculation.'
  },
  {
    id: 'quercetin-phytosome',
    genericName: 'Quercetin Phytosome (Quercefit®) / Water-Soluble Bioflavonoid',
    brandNames: 'Quercefit, EMIQ, Isoquercitrin',
    drugClass: 'Mast Cell Membrane Stabilizer & Anti-Permeability Bioflavonoid',
    primaryMechanism:
      'Standard quercetin has notoriously low oral bioavailability (<2%); phytosome phospholipid complexation increases bioavailability up to 20-fold. Blocks calcium influx into mast cells and basophils, suppressing IgE- and non-IgE-mediated degranulation. Inhibits Phospholipase A2, 5-LOX, and COX-2.',
    mcasStabilizationEffect:
      'Downregulates mast cell release of histamine, leukotrienes (LTC4/LTD4), and Vascular Endothelial Growth Factor (VEGF). Because VEGF is up to 50,000 times more potent than histamine at causing microvascular leakage, quenching VEGF directly prevents vascular extravasation.',
    cognitiveImpact:
      'Neuroprotective and non-sedating. Crosses into the central nervous system to dampen microglial reactive oxygen species, protecting prefrontal synaptic signaling and working memory from neuroinflammatory fatigue.',
    typicalDosageRange:
      '250 mg to 500 mg twice daily with food (phytosome formulation equivalent to 1000-2000 mg standard quercetin).',
    sedationLiability: 'None',
    bbbPenetration: 'Moderate',
    clinicalPearls: [
      'Direct VEGF Inhibition: Blocks the primary mast cell mediator causing endothelial gap formation and plasma extravasation into ankle tissues.',
      'CRITICAL COMT INHIBITION ALERT (Stiff Neck & Headaches): Quercetin possesses a catechol ring structure that acts as a potent competitive inhibitor of Catechol-O-Methyltransferase (COMT). In patients with slow-COMT activity (Met/Met or slow methylation), quercetin causes acute noradrenaline pooling, triggering severe trapezius/suboccipital muscular spasm ("stiff neck") and vascular headaches!',
      'THE SAMe-SINK DANGER: Quercetin clearance requires O-methylation, consuming vast quantities of S-Adenosylmethionine (SAMe). This strips SAMe away from Histamine N-Methyltransferase (HNMT), paralyzing central histamine breakdown and triggering meningeal/dural histamine release.',
      'PATIENT DIRECTIVE: If you experience stiff neck or headaches from Quercetin or EGCG, permanently eliminate both agents! Rely strictly on Micronized PEA, Perilla (rosmarinic acid), and Gotu Kola triterpenes, which do NOT block COMT or drain SAMe.'
    ],
    cautionWarnings: [
      'CONTRAINDICATED IN SLOW-COMT / HEADACHE-PRONE INDIVIDUALS: Causes acute suboccipital myofascial spasm ("stiff neck") and throbbing vascular headaches due to noradrenaline pooling.',
      'Acts as a metabolic "SAMe sink", indirectly paralyzing HNMT histamine clearance in the brain.',
      'Phytosome formulation preferred due to standard quercetin poor gut absorption.',
      'Mild inhibitor of CYP3A4 and P-glycoprotein at very high doses (review with physician for medication clearance).'
    ],
    helpRating: 1.5,
    helpStars: '★½☆☆☆',
    helpVerdict: 'Severe Hinder for Slow-COMT / Headache Prone',
    ratingRationale: 'Competitive catechol inhibitor of COMT causing noradrenaline pooling, severe neck stiffness, and vascular headaches; acts as a SAMe sink that paralyzes brain HNMT histamine clearance.'
  },
  {
    id: 'ascorbic-acid-p5p-complex',
    genericName: 'Buffered Vitamin C + Pyridoxal-5\'-Phosphate (P5P / Active B6)',
    brandNames: 'Liposomal Vitamin C + Coenzymated B6 (P5P)',
    drugClass: 'Vascular Basement Membrane Cofactor & Enzymatic Histamine Clearance Catalyst',
    primaryMechanism:
      'Vitamin C is the obligate enzymatic cofactor for prolyl 4-hydroxylase and lysyl hydroxylase, which catalyze the cross-linking of triple-helix collagen fibers in capillary basement membranes and venous valves. In addition, Vitamin C degrades circulating histamine non-enzymatically. Pyridoxal-5\'-Phosphate (P5P) is the required prosthetic cofactor for Diamine Oxidase (DAO, gut/serum histamine clearance) and Histamine N-Methyltransferase (HNMT, CNS histamine clearance).',
    mcasStabilizationEffect:
      'Lowers circulating serum histamine: Clinical trials confirm that 1,000 mg/day of ascorbic acid reduces blood histamine levels by 30-40% within days. P5P prevents cofactor exhaustion in DAO and HNMT, accelerating the metabolic degradation of free histamine before it can act on vascular H1/H2 receptors.',
    cognitiveImpact:
      'Relieves central H3 autoreceptor saturation: P5P is a cofactor for aromatic L-amino acid decarboxylase, supporting the synthesis of dopamine, norepinephrine, and serotonin. By accelerating HNMT clearance of central histamine, it lifts histamine-mediated cognitive suppression.',
    typicalDosageRange:
      '500 mg to 1,000 mg buffered/liposomal Vitamin C twice daily + 25 mg to 50 mg P5P daily with breakfast.',
    sedationLiability: 'None',
    bbbPenetration: 'High',
    clinicalPearls: [
      'Fixes the Structural Basement Membrane: If sock marks have been present "for as long as you can remember", your vascular basement membrane may have constitutive collagen laxity. Vitamin C is mandatory for endothelial wall collagen synthesis.',
      'The Dual Histamine Scavenger: Vitamin C destroys histamine in the blood, while P5P accelerates enzymatic breakdown in the gut (DAO) and brain (HNMT).',
      'eNOS Recoupling: Vitamin C prevents the oxidation of tetrahydrobiopterin (BH4), ensuring endothelial cells produce protective nitric oxide rather than damaging peroxynitrite radicals.',
      'Use Buffered or Liposomal Forms: Standard ascorbic acid can irritate the stomach lining; buffered calcium/magnesium ascorbate or liposomal Vitamin C is gentle on sensitive MCAS digestive tracts.'
    ],
    cautionWarnings: [
      'Avoid mega-doses (>3,000 mg/day Vitamin C) to prevent gastrointestinal loose stools or oxalate stone risk in susceptible individuals.',
      'Do not exceed 100 mg/day of Vitamin B6 (even as P5P) long-term to prevent peripheral sensory neuropathy.'
    ],
    helpRating: 4.6,
    helpStars: '★★★★★',
    helpVerdict: 'Collagen Basement Membrane & Histamine Scavenger',
    ratingRationale: 'Vitamin C is the obligate cofactor for collagen triple-helix cross-linking in vessels and non-enzymatically degrades blood histamine; P5P catalyzes DAO and HNMT clearance.'
  },
  {
    id: 'gotu-kola-triterpenes',
    genericName: 'Gotu Kola (Centella asiatica - Standardized Triterpenic Fraction)',
    brandNames: 'Total Triterpenic Fraction of Centella Asiatica (TTFCA), Madecassoside',
    drugClass: 'Perivascular Connective Tissue Stabilizer & Microcirculatory Modulator',
    primaryMechanism:
      'Stimulates fibroblasts in the perivenous connective tissue, selectively upregulating type I collagen synthesis without excessive fibrotic scarring. Improves venous wall elasticity, lowers excessive microcirculatory filtration rate (capillary transudation), and protects the perivascular cuff surrounding microvessels.',
    mcasStabilizationEffect:
      'Dampens local mast cell degranulation in subcutaneous perivascular spaces and protects microvascular walls from elastase and collagenase degradation.',
    cognitiveImpact:
      'Traditional nootropic ("Brahmi") with modern translational evidence: enhances dendritic arborization in hippocampal neurons, protects prefrontal synaptic plasticity, and improves cerebral microcirculatory perfusion.',
    typicalDosageRange:
      '60 mg to 120 mg standardized extract (standardized to 40% triterpenes / asiaticoside) once or twice daily.',
    sedationLiability: 'None',
    bbbPenetration: 'Moderate',
    clinicalPearls: [
      'Clinically Validated in Microangiopathy & Venous Insufficiency: Multiple European double-blind trials show TTFCA reduces capillary filtration rate (rate of fluid leaking out of ankle capillaries) and prevents flight-induced ankle edema.',
      'Perivascular Cuff Reinforcement: Strengthens the collagen sheath surrounding fragile capillaries, providing external physical resistance against Amlodipine-induced hydrostatic ballooning.',
      'Dual Brain and Vascular Action: Simultaneously enhances microvascular integrity in the lower limbs and supports neuronal processing speed in the prefrontal cortex.',
      'Non-Hypotensive: Does not cause systemic vasodilation or drop systemic blood pressure, making it safe to pair with Telmisartan and Amlodipine.'
    ],
    cautionWarnings: [
      'Take with food to optimize absorption.',
      'Rare mild contact dermatitis or digestive upset in sensitive individuals.'
    ],
    helpRating: 4.5,
    helpStars: '★★★★½',
    helpVerdict: 'Perivascular Cuff Reinforcement & Microangiopathy Shield',
    ratingRationale: 'Stimulates perivenous Type I collagen without fibrosis, lowers capillary filtration rate, and provides physical resistance against hydrostatic ballooning.'
  },
  {
    id: 'molybdenum-glycinate-suox',
    genericName: 'Molybdenum (as Molybdenum Glycinate / Sodium Molybdate)',
    brandNames: 'Mo-Zyme, Thorne Molybdenum, Seeking Health Molybdenum',
    drugClass: 'Essential Trace Mineral & Sulfite Oxidase (SUOX) Enzymatic Catalyst',
    primaryMechanism:
      'Molybdenum is the obligate rate-limiting cofactor for Sulfite Oxidase (SUOX), the mitochondrial enzyme responsible for transforming toxic, bronchoconstrictive sulfite (SO3(2-)) into inert, excretable sulfate (SO4(2-)). Also serves as catalytic center for Aldehyde Oxidase (AOX) and Xanthine Oxidase.',
    mcasStabilizationEffect:
      'Extinguishes sulfite-triggered mast cell and basophil degranulation. Unoxidized sulfites directly provoke non-IgE-mediated release of cysteinyl leukotrienes (LTC4, LTD4, LTE4) and histamine. Restoring SUOX activity eliminates the biochemical driver of sulfite-induced wheezing and airway constriction.',
    cognitiveImpact:
      'Prevents sulfite-driven mitochondrial neurotoxicity and protects Vitamin B1 (thiamine) stores from chemical cleavage, restoring pyruvate dehydrogenase activity and aerobic glucose oxidation in prefrontal cortical circuits.',
    typicalDosageRange:
      '150 mcg to 300 mcg daily (taken with breakfast or divided doses). Short-term titration up to 500 mcg under clinical supervision during active exposure.',
    sedationLiability: 'None',
    bbbPenetration: 'High',
    clinicalPearls: [
      'The Definitive Enzymatic Antidote to Sulfite Wheezing: In confirmed sulfite sensitivity (wheezing triggered by wine, cider, sausages), SUOX enzyme kinetics are overloaded or sluggish. Molybdenum supplementation rapidly restores molybdopterin cofactor availability, clearing sulfites to sulfate.',
      'Prevents Thiamine (B1) Cleavage: Sulfites chemically cleave thiamine at its methylene bridge. Supplementing molybdenum halts endogenous and dietary sulfite accumulation, safeguarding vital thiamine reserves.',
      'Enables Safe Transsulfuration: Allows individuals to tolerate sulfur-containing foods and amino acids without building up toxic intermediary sulfite metabolites.',
      'Non-Sedating & Highly Bioavailable: Chelation with glycine (molybdenum glycinate) avoids gastrointestinal irritation and provides superior cellular uptake.'
    ],
    cautionWarnings: [
      'Do not exceed 500-1,000 mcg/day long-term without monitoring uric acid and copper levels, as very high molybdenum can increase copper excretion.',
      'Patients with gout or hyperuricemia should monitor serum uric acid (xanthine oxidase cofactor).'
    ],
    helpRating: 4.9,
    helpStars: '★★★★★',
    helpVerdict: 'Sulfite Oxidase (SUOX) Enzymatic Antidote',
    ratingRationale: 'Obligate catalytic cofactor for SUOX, converting toxic wheezing sulfites into inert sulfate and halting sulfite-mediated destruction of Vitamin B1.'
  },
  {
    id: 'benfotiamine-thiamine-b1',
    genericName: 'Benfotiamine / Thiamine Pyrophosphate (Lipid-Soluble Vitamin B1)',
    brandNames: 'Mega Benfotiamine, Allithiamine, TTFD',
    drugClass: 'Mitochondrial Bioenergetic Cofactor & Sulfite-Cleavage Repair Agent',
    primaryMechanism:
      'Lipid-soluble S-acyl thiamine derivative with 5x greater bioavailability and tissue penetration than standard water-soluble thiamine HCl. Rapidly converted to thiamine pyrophosphate (TPP), the essential prosthetic cofactor for Pyruvate Dehydrogenase (PDH), Alpha-Ketoglutarate Dehydrogenase (KGDH), and Transketolase.',
    mcasStabilizationEffect:
      'Restores autonomic nervous system tone and vagal cholinergic anti-inflammatory reflex. Thiamine deficiency causes dysautonomia, orthostatic intolerance, and gastrointestinal dysmotility (promoting SIBO and enteric mast cell activation).',
    cognitiveImpact:
      'Restores prefrontal cortical bioenergetics: Overcomes the mitochondrial glucose hypometabolism and lactic acid pooling caused by chronic sulfite-mediated thiamine cleavage. Directly addresses the "thoughts slipping through fingers" fatigue syndrome by ensuring efficient ATP production in pyramidal neurons.',
    typicalDosageRange:
      '100 mg to 250 mg once or twice daily with meals.',
    sedationLiability: 'None',
    bbbPenetration: 'High',
    clinicalPearls: [
      'Reverses the Sulfite-Induced Thiamine Drain: Because dietary sulfites chemically cleave thiamine at the methylene bridge, anyone with lifelong or severe sulfite intolerance has functional intracellular thiamine depletion.',
      'Restores Pyruvate Dehydrogenase: Converts glucose into acetyl-CoA for acetylcholine synthesis—the exact neurotransmitter depleted in verbal fluency blocks and executive freezing.',
      'Autonomic & Venous Protection: Thiamine deficiency damages unmyelinated autonomic fibers, aggravating postural venous pooling and sock marks. Benfotiamine reinforces peripheral nerve and vascular sheath resilience.',
      'Synergizes with Molybdenum: Molybdenum prevents ongoing sulfite-mediated cleavage, while Benfotiamine refills the depleted mitochondrial thiamine pool.'
    ],
    cautionWarnings: [
      'Very safe and well-tolerated with wide therapeutic window.',
      'Pair with active magnesium (e.g. magnesium glycinate), as magnesium is the required cofactor for thiamine pyrophosphokinase to convert thiamine into active TPP.'
    ],
    helpRating: 4.8,
    helpStars: '★★★★★',
    helpVerdict: 'Bioenergetic Prefrontal & Endothelial Transketolase Shield',
    ratingRationale: 'Lipid-soluble B1 refills mitochondrial thiamine pools drained by sulfites, boosting Pyruvate Dehydrogenase, acetylcholine synthesis, and autonomic nerve sheaths.'
  },
  {
    id: 'methylene-blue-usp',
    genericName: 'Methylene Blue (USP Grade / Low-Dose 15–30 mg)',
    brandNames: 'Provayblue, Compounded USP 1% Aqueous Solution',
    drugClass: 'Alternative Mitochondrial Electron Cycler & Direct Soluble Guanylyl Cyclase (sGC) Inhibitor',
    primaryMechanism:
      'At nanomolar to low micromolar concentrations (15–30 mg or ~0.25–0.5 mg/kg), Methylene Blue acts as a high-affinity alternative electron carrier in the mitochondrial electron transport chain. It directly accepts electrons from NADH dehydrogenase (Complex I) and transfers them to Cytochrome C (Complex IV), bypassing damaged or inhibited Complexes I, II, and III. This surges prefrontal cerebral metabolic rate of oxygen (CMRO2) and restores neuronal ATP synthesis. Concurrently, it binds the heme iron moiety of Soluble Guanylyl Cyclase (sGC), competitively inhibiting the enzyme and halting excess cGMP accumulation in vascular smooth muscle. This selectively reverses splanchnic and lower-extremity vasoplegic pooling (such as Amlodipine-induced pre-capillary hyperperfusion and sock marks) and restores central venous return without elevating systemic blood pressure to hypertensive levels.',
    mcasStabilizationEffect:
      'Nitric oxide is an obligate second messenger for non-IgE mast cell degranulation. By downregulating inducible Nitric Oxide Synthase (iNOS) and competitively inhibiting Soluble Guanylyl Cyclase (sGC), Methylene Blue terminates the intracellular cGMP/PKG signaling loop that triggers mast cell exocytosis, reducing tissue flushing and mucosal edema.',
    cognitiveImpact:
      'Reverses the profound hypoarousal and sluggish thalamocortical rhythms of Cognitive Disengagement Syndrome (CDS/SCT). By elevating neuronal mitochondrial ATP flux and acting as a mild, reversible MAO-A inhibitor, it selectively raises synaptic concentrations of tonic dopamine, norepinephrine, and acetylcholine in the prefrontal cortex—enhancing executive chaining, verbal fluency, and working memory retention with zero jitter.',
    typicalDosageRange:
      '15 mg to 30 mg orally once daily in the morning (approx. 1.5 to 3.0 mL of verified USP 1% Pharmaceutical Solution diluted in a full glass of water with 100–250mg Vitamin C or lemon juice to prevent teeth staining). Always ingest with a glass straw.',
    sedationLiability: 'None',
    bbbPenetration: 'High',
    clinicalPearls: [
      'The Orthostatic / Amlodipine Antidote: SGC inhibition directly constricts pathologically dilated venules, siphoning pooled blood out of lower-extremity capillaries and splanchnic beds back to the right atrium—rapidly resolving sock marks and postural lightheadedness.',
      'Mitochondrial Complex Bypass: In chronic neuroinflammation or sulfite-induced metabolic fatigue, Methylene Blue keeps prefrontal ATP synthesis running even if Complexes I–III are stalled.',
      'Must be 100% USP / Pharmaceutical Grade: Industrial, textile, or aquarium grade methylene blue contains toxic heavy metals (lead, arsenic, mercury, cadmium). Only use verified USP Grade with a third-party certificate of analysis.',
      'Teeth Staining Prevention: Dilute in water, add 100–250mg Vitamin C (which reduces blue chromophore to clear leucomethylene blue), and drink with a straw followed by a quick water rinse. Urine will turn a harmless vivid green/blue.'
    ],
    cautionWarnings: [
      'STRICT CONTRAINDICATION WITH SSRIs / SNRIs / MDMA: Methylene Blue is a reversible MAO-A inhibitor. Concomitant use with serotonergic pharmaceuticals poses a severe risk of fatal Serotonin Syndrome.',
      'Contraindicated in G6PD Deficiency: Patients with glucose-6-phosphate dehydrogenase deficiency risk acute hemolytic anemia; screen for G6PD before initiating high doses.',
      'Never exceed 2.0 mg/kg: At higher doses (>2 mg/kg), methylene blue becomes a pro-oxidant that can oxidize hemoglobin to methemoglobin.'
    ],
    helpRating: 4.9,
    helpStars: '★★★★★',
    helpVerdict: 'Esoteric Gold Standard (sGC Vasotone & Cytochrome C Bypass)',
    ratingRationale: 'Nanomolar sGC inhibition halts splanchnic/Amlodipine venous pooling and sock marks, while mitochondrial Complex I–IV bypassing energizes prefrontal circuits for CDS/SCT.'
  },
  {
    id: 'agmatine-sulfate',
    genericName: 'Agmatine Sulfate ("Clonidine\'s Endogenous Twin" / Decarboxylated L-Arginine)',
    brandNames: 'Endogenous Neuromodulator, Agmatine Sulfate',
    drugClass: 'Endogenous Imidazoline-1 (I1) / α2A-Adrenoreceptor Agonist & Selective NMDA Receptor Blocker',
    primaryMechanism:
      'Synthesized endogenously in the mammalian brain from L-arginine via arginine decarboxylase (ADC) and stored in synaptic vesicles. Agmatine acts as a high-affinity endogenous agonist at Imidazoline-1 (I1) receptors and α2A-adrenergic receptors—mirroring the exact prefrontal network-tuning actions of Guanfacine and Clonidine. This closes hyperpolarization-activated cyclic nucleotide-gated (HCN) channels on prefrontal dendritic spines, fortifying working memory delay-period firing in CDS/SCT and ADHD while suppressing central sympathetic hyper-reactivity. Concurrently, it acts as an open-channel blocker of NMDA receptors with strong selectivity for the NR2B subunit, preventing glutamate excitotoxicity without causing dissociative deficits. Uniquely, it potently inhibits inducible Nitric Oxide Synthase (iNOS) while upregulating endothelial Nitric Oxide Synthase (eNOS).',
    mcasStabilizationEffect:
      'By selectively suppressing iNOS and microglial/perivascular macrophage inflammatory signaling, Agmatine shuts down the production of peroxynitrite and inflammatory nitric oxide that triggers mast cell degranulation. It also reduces histamine-induced sensory nerve sensitization.',
    cognitiveImpact:
      'Stabilizes prefrontal cortex attentional gating and working memory buffers. By protecting pyramidal neuron dendritic spines from glutamate excitotoxicity and tuning α2A/I1 receptors, it prevents the cognitive fragmentation and sensory overwhelm common to ADHD and CDS.',
    typicalDosageRange:
      '500 mg to 1,000 mg orally once or twice daily on an empty stomach (morning and/or late afternoon).',
    sedationLiability: 'Low',
    bbbPenetration: 'High',
    clinicalPearls: [
      'The Endogenous Guanfacine Equivalent: For individuals seeking non-prescription α2A agonists, agmatine provides natural I1/α2A agonism that quiets sympathetic agitation and centers attention.',
      'Dual NOS Divergence: Most nitric oxide boosters increase inflammatory iNOS, which flares MCAS. Agmatine is one of the few molecules in pharmacology that downregulates toxic iNOS while preserving cardioprotective eNOS.',
      'Pudendal & Pelvic Nerve Desensitization: Directly dampens sacral dorsal horn nociceptive transmission through spinal imidazoline and delta-opioid receptor modulation, providing profound relief for hypertonic pelvic pain and pudendal neuralgia.',
      'Prevents Stimulant Tolerance: Co-administration with stimulants or dopaminergic agents prevents receptor downregulation and preserves therapeutic efficacy.'
    ],
    cautionWarnings: [
      'Do not take simultaneously with dietary protein or other basic amino acids (like L-arginine or L-citrulline), as they compete for the same basic amino acid transporter (y+ system). Take on an empty stomach.',
      'May slightly increase gastric acid secretion in sensitive individuals; discontinue if burning dyspepsia occurs.'
    ],
    helpRating: 4.9,
    helpStars: '★★★★★',
    helpVerdict: 'Endogenous I1/α2A Neuromodulator & NMDA/iNOS Shield',
    ratingRationale: 'Acts as endogenous Guanfacine/Clonidine tuning prefrontal delay-period circuits, blocks NMDA excitotoxicity, protects eNOS while halting iNOS, and soothes pudendal hypertonicity.'
  },
  {
    id: 'tudca-chaperone',
    genericName: 'Tauroursodeoxycholic Acid (TUDCA / Taurine-Conjugated Hydrophilic Bile Acid)',
    brandNames: 'TUDCA, Tudcabil, Taurolite',
    drugClass: 'Hydrophilic Chemical Chaperone & Endoplasmic Reticulum (ER) Stress Inhibitor',
    primaryMechanism:
      'Taurine-conjugated hydrophilic bile acid that readily crosses the blood-brain barrier. Operates as a master chemical chaperone, preventing protein misfolding and suppressing the Unfolded Protein Response (UPR). Specifically, TUDCA prevents the dissociation of master chaperone BiP/GRP78 from the three transmembrane ER stress sensors: PERK, IRE1α, and ATF6. By halting downstream phosphorylated eIF2α and CHOP transcription, it prevents ER-stress-induced apoptosis and suppresses the release of reactive oxygen species (ROS). In the vascular endothelium, TUDCA stabilizes tight junction proteins (claudin-5 and occludin), preserving glycocalyx thickness and stopping microvascular hyperpermeability (resolving lower-extremity sock marks and fluid extravasation).',
    mcasStabilizationEffect:
      'Long-lived tissue mast cells undergo intense endoplasmic reticulum stress during sustained degranulation cycles. ER stress directly opens store-operated calcium entry (SOCE) channels (ORAI1/STIM1), triggering spontaneous non-IgE mast cell degranulation. TUDCA stabilizes the sarcoplasmic/endoplasmic reticulum calcium ATPase (SERCA), maintaining intra-ER calcium stores and silencing ER-stress-mediated mast cell reactivity.',
    cognitiveImpact:
      'Directly neuroprotective: clears sluggish cognitive tempo (CDS) brain fog resulting from chronic neuroinflammatory microglial priming. Inhibits caspase-3 activation and preserves hippocampal and prefrontal dendritic arborization against proteotoxic and cytokine assault.',
    typicalDosageRange:
      '250 mg to 500 mg orally once or twice daily with meals.',
    sedationLiability: 'None',
    bbbPenetration: 'High',
    clinicalPearls: [
      'The Gold Standard Molecular Chaperone: Extensively utilized in biomedical research to rescue cells from proteotoxic collapse; now translated into clinical neurology for ALS, Alzheimer’s, and neurovascular inflammation.',
      'Zero Catecholamine Burden: Perfect for Slow COMT (Met/Met), as it modulates proteostasis without interacting with dopamine, adrenaline, or noradrenaline pathways.',
      'Endothelial Glycocalyx Armor: Preserves capillary barrier function against histamine and bradykinin, halting third-spacing of fluid that causes severe ankle sock marks.',
      'Synergizes with Oral Cromolyn: Protects the enterocyte barrier from inflammatory detachment while Cromolyn locks mucosal mast cells.'
    ],
    cautionWarnings: [
      'Mild loose stools or mild GI acceleration may occur during the first 3–5 days as the bile acid pool adjusts.',
      'Take with food to optimize emulsification and intestinal transit.'
    ],
    helpRating: 4.8,
    helpStars: '★★★★★',
    helpVerdict: 'Master Endoplasmic Reticulum (ER) Chaperone & Glycocalyx Armor',
    ratingRationale: 'Halts ER stress and UPR-mediated mast cell degranulation, crosses BBB to silence microglial priming in CDS, and fortifies capillary tight junctions against sock-mark edema.'
  }
];

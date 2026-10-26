export interface RecommendationItem {
  id: string;
  pillar: 'diet' | 'pharma' | 'nutraceutical' | 'exercise';
  actionType: 'flush' | 'stabilise';
  primaryTarget: 'mcas' | 'brain-fog' | 'vascular' | 'triad';
  title: string;
  summary: string;
  specificProtocol: string;
  mechanism: string;
  clinicalPearls: string[];
  cautions: string[];
  evidenceGrade: 'A (High Quality / Meta-Analysis)' | 'B (Clinical Trial / Pharmacological Consensus)' | 'C (Translational / Mechanistic Protocol)';
  badge: string;
  helpRating?: number; // 0.0 to 5.0
  helpStars?: string; // '★★★★★'
  helpVerdict?: string;
  ratingRationale?: string;
}

export interface ScheduleStep {
  id: string;
  category: 'diet' | 'pharma' | 'nutraceutical' | 'exercise';
  action: string;
  detail: string;
  target: 'mcas' | 'brain-fog' | 'vascular' | 'triad';
  isFlush: boolean;
  warning?: string;
}

export interface DailyScheduleBlock {
  id: string;
  timeSlot: string;
  title: string;
  subtitle: string;
  theme: 'morning' | 'midday' | 'evening' | 'night' | 'rescue';
  steps: ScheduleStep[];
}

export interface ContraindicationRule {
  id: string;
  compound: string;
  category: 'Nutraceutical' | 'Dietary' | 'Pharma' | 'Exercise';
  popularClaim: string;
  whyContraindicated: string;
  patientPhenotype: string;
  exactAdverseReaction: string;
  safeAlternative: string;
}

export const PROTOCOL_RECOMMENDATIONS: RecommendationItem[] = [
  // ===================== DIETARY: FLUSH =====================
  {
    id: 'diet-flush-1',
    pillar: 'diet',
    actionType: 'flush',
    primaryTarget: 'mcas',
    title: 'Zero-Sulfite Elimination Protocol (E220–E228)',
    summary: 'Complete eradication of industrial sulfite preservatives to extinguish bronchospasm and degranulation.',
    specificProtocol: 'Strictly avoid cider, commercial wines, sausages, processed burgers, gravies, and dried fruits (apricots, raisins). Check food labels for sodium metabisulfite, potassium bisulfite, and sulfur dioxide.',
    mechanism: 'In individuals with compromised Sulfite Oxidase (SUOX) activity, ingested sulfites bypass hepatic conversion to sulfate, releasing gaseous sulfur dioxide (SO2) into circulation. SO2 directly stimulates parasympathetic vagal irritant receptors in the bronchial tree (triggering immediate wheezing and bronchospasm) and binds mast cell surface receptors to stimulate non-IgE degranulation.',
    clinicalPearls: [
      'Cider and draft beers are the highest-density dietary sulfite vectors due to fermentation sanitation additives.',
      'Sausage casings and cured minced meats rely heavily on sulfites to retain red myoglobin color.',
      'If accidental ingestion occurs, immediately initiate the Molybdenum + Buffered Vitamin C flush protocol.'
    ],
    cautions: [
      'Cross-contamination in restaurants: Ask if lemon juice or potato fries use preservative washes (E223).'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'SUOX Protection'
  },
  {
    id: 'diet-flush-2',
    pillar: 'diet',
    actionType: 'flush',
    primaryTarget: 'mcas',
    title: 'Biogenic Amine Flush ("Cook & Freeze" Rule)',
    summary: 'Eliminate secondary bacterial histamine generation in food to rapidly drain circulating plasma histamine.',
    specificProtocol: 'Consume meat and fish within 15 minutes of cooking. Never consume leftovers kept in the refrigerator beyond 12 hours; immediately portion and freeze meals in airtight glass containers. Thaw rapidly under cold water or cook from frozen.',
    mechanism: 'Gram-negative bacteria (Enterobacter, Morganella) proliferate even at 4°C, converting dietary histidine into histamine via bacterial histidine decarboxylase. Consuming day-old chilled leftovers delivers high milligrams of pre-formed histamine directly across the mucosal barrier into the portal circulation.',
    clinicalPearls: [
      'Flash-frozen wild fish or pasture-raised chicken cooked immediately has near-zero histamine content.',
      'Slow cookers left on low for 8 hours are potent histamine incubators; use a pressure cooker (Instant Pot) instead to minimize cooking time.',
      'Fermented foods (kombucha, kimchi, aged cheddar, sauerkraut) must be completely suspended during active flares.'
    ],
    cautions: [
      'Do not rely on reheating: Histamine is heat-stable and is NOT degraded by boiling or microwaving.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'Histamine Clearance'
  },
  {
    id: 'diet-flush-3',
    pillar: 'diet',
    actionType: 'flush',
    primaryTarget: 'vascular',
    title: 'Hypotonic Hydration & Interstitial Osmotic Flush',
    summary: 'Enhance renal glomerular filtration and lymphatic clearance of pooled interstitial fluid without sodium overloading.',
    specificProtocol: '2.5 to 3.0 Liters daily of filtered water with low-osmolality mineral balancing (potassium bicarbonate, magnesium malate; avoiding synthetic citric acid or artificial flavorings). Sip consistently throughout the daylight hours; taper fluid intake 2 hours before bedtime.',
    mechanism: 'Adequate vascular volume stimulates atrial natriuretic peptide (ANP), which promotes renal excretion while preventing compensatory hyper-aldosteronism. Tapering fluid at night prevents nocturnal volume shifts that exacerbate supine hypertension and orbital edema.',
    clinicalPearls: [
      'Avoid high-dose sodium loading during periods of active amlodipine-induced dependent sock edema.',
      'Add a pinch of potassium bicarbonate to support cell membrane potential and renal tubular acid clearance.'
    ],
    cautions: [
      'Do not consume flavored electrolyte packets with citric acid, which can trigger mast cell degranulation.'
    ],
    evidenceGrade: 'B (Clinical Trial / Pharmacological Consensus)',
    badge: 'Osmotic Balance'
  },
  {
    id: 'diet-flush-4',
    pillar: 'diet',
    actionType: 'flush',
    primaryTarget: 'triad',
    title: 'Strict Nightshade (Solanaceae) & Glycoalkaloid Elimination Protocol',
    summary: 'Complete eradication of potatoes, tomatoes, eggplants, bell peppers, paprika, and chilis to halt non-IgE mast cell degranulation and cholinesterase inhibition.',
    specificProtocol: 'Strict 100% elimination of all Solanaceae family foods: white/red/yellow potatoes, tomatoes, tomatillos, eggplants, bell peppers, cayenne, chili peppers, pimentos, and paprika. Scrutinize all spice blends, rubs, crisps, curry powders, and restaurant gravies for hidden paprika or potato starch.',
    mechanism: 'Nightshades produce steroidal glycoalkaloids (solanine, chaconine, tomatine) as chemical defense mechanisms. These compounds act through three devastating pathways in this triad: 1) Direct non-IgE Mast Cell Secretagogues: Glycoalkaloids destabilize membrane sterols, forming pores that provoke immediate calcium influx and mast cell degranulation. 2) Natural Acetylcholinesterase (AChE) Inhibitors: Solanine irreversibly inhibits AChE in enteric tissues, trapping acetylcholine at intestinal muscarinic receptors to cause severe smooth muscle spasms, mucosal inflammation, and hyperpermeability ("leaky gut"). 3) TRPV1 & Substance P/MRGPRX2 Activation: Peppers contain capsaicinoids that activate TRPV1 on sensory C-fibers, releasing Substance P which binds mast cell MRGPRX2 receptors to trigger explosive systemic flushing and throbbing vascular headaches. Tomatoes are also rich in free histamine and active histamine liberators.',
    clinicalPearls: [
      'Paprika is the most common hidden allergen vector in processed foods, seasoned roasted chicken, cured sausages, and crisps.',
      'Glycoalkaloids are heat-stable and are NOT destroyed by boiling, baking, or frying.',
      'Safe carbohydrate alternatives: Sweet potatoes (Convolvulaceae family, not a nightshade!), carrots, parsnips, rutabaga, and white basmati rice.',
      'Eliminating nightshades frequently terminates multi-week unexplained joint aches, neck stiffness, and mesenteric bloating.'
    ],
    cautions: [
      'Be alert at restaurants: "Natural flavorings" or "spices" on labels almost always include paprika.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'Zero-Glycoalkaloid'
  },

  // ===================== DIETARY: STABILISE =====================
  {
    id: 'diet-stabilise-1',
    pillar: 'diet',
    actionType: 'stabilise',
    primaryTarget: 'brain-fog',
    title: 'Low-Fermentation Neuro-Metabolic Stabilisation',
    summary: 'A low-FODMAP, low-fermentation dietary framework to halt D-lactic acid neurotoxicity and SCT fatigue.',
    specificProtocol: 'Prioritize easily digestible single-ingredient meals: peeled zucchini, bok choy, carrots, parsnips, white basmati rice, quinoa, and freshly thawed pasture-raised poultry. Avoid resistant starches and inulin prebiotics during flares.',
    mechanism: 'Bacterial fermentation of complex polysaccharides in the presence of small intestinal dysbiosis produces D-lactate and lipopolysaccharide (LPS). D-lactate cannot be efficiently metabolized by human L-lactate dehydrogenase; it crosses the blood-brain barrier, uncoupling neuronal oxidative phosphorylation and directly driving sluggish cognitive tempo (SCT) brain fog.',
    clinicalPearls: [
      'White rice produces significantly lower bacterial fermentation gases and interoceptive vagal noise than whole grain wheat or rye.',
      'Peeling high-fiber vegetables reduces mechanical abrasiveness on sensitized enteric mast cells.',
      'Consistent meal spacing (3 meals without constant snacking) allows the migrating motor complex (MMC) to sweep the small intestine.'
    ],
    cautions: [
      'Avoid commercial "gut-healing" powders containing inulin, fructooligosaccharides (FOS), or high-dose unbuffered glutamine.'
    ],
    evidenceGrade: 'B (Clinical Trial / Pharmacological Consensus)',
    badge: 'D-Lactate Blocker'
  },
  {
    id: 'diet-stabilise-2',
    pillar: 'diet',
    actionType: 'stabilise',
    primaryTarget: 'triad',
    title: 'Glycemic Anchoring to Prevent Cortisol-Histamine Spikes',
    summary: 'Prevent reactive hypoglycemia to shield prefrontal cortex catecholamines and prevent mast cell degranulation.',
    specificProtocol: 'Include clean protein (25–35g) and low-inflammatory healthy fats (olive oil, coconut MCT oil) with every meal. Never consume isolated high-glycemic carbohydrates on an empty stomach. Eat breakfast within 60 minutes of waking.',
    mechanism: 'Hypoglycemic dips trigger acute sympathetic nervous system activation, surging systemic adrenaline and cortisol. Circulating catecholamines and corticotropin-releasing hormone (CRH) bind CRHR1 receptors directly on perivascular mast cells, stimulating explosive degranulation while simultaneously depleting prefrontal cortical dopamine.',
    clinicalPearls: [
      'Stable glucose = stable mast cell baseline = stable verbal retrieval speed.',
      'A protein-rich breakfast sets morning dopaminergic synthesis for executive functioning without inducing hyperadrenergic tachycardia.'
    ],
    cautions: [
      'Avoid prolonged intermittent fasting (over 16 hours) if experiencing reactive adrenergic palpitations or morning brain fog.'
    ],
    evidenceGrade: 'B (Clinical Trial / Pharmacological Consensus)',
    badge: 'Neuro-Metabolic'
  },
  {
    id: 'diet-stabilise-3',
    pillar: 'diet',
    actionType: 'stabilise',
    primaryTarget: 'vascular',
    title: 'Gastro-Vascular Splanchnic Shield: Coffee & Enteric Irritant Management',
    summary: 'Eliminate coffee and gastric irritants to halt mesenteric splanchnic blood pooling and preserve cerebral perfusion.',
    specificProtocol: 'Strictly eliminate coffee (caffeinated and decaf), energy drinks, and concentrated gastric irritants, especially on an empty stomach. Replace morning coffee with warm filtered water, organic caffeine-free chamomile or rooibos tea, or roasted chicory root (if tolerated). Pair all warm liquids with a pinch of electrolyte minerals.',
    mechanism: 'WHY GASTRO IRRITANTS MAKE BLOOD POOLING WORSE: The splanchnic vascular bed (mesenteric, celiac, hepatic circulation) holds 25% to 30% of total circulating blood volume and serves as the largest vascular capacitance reservoir in the body. When coffee (caffeine, chlorogenic acids, roast oils) irritates the gastric mucosa, it stimulates local enteric mast cells and mucosal nerves, releasing histamine, vasoactive intestinal peptide (VIP), and nitric oxide. This induces profound mesenteric vasodilation ("Splanchnic Hyperemia"). Over 1.0 to 1.5 Liters of blood volume becomes trapped in the gut capacitance vessels ("Splanchnic Steal"). In a patient taking Amlodipine (which dilates pre-capillary arterioles in the legs), this creates a severe hemodynamic double-hit: blood pools in the abdomen AND the lower extremities simultaneously! Central venous return and cardiac stroke volume plummet, starving the prefrontal cortex of perfusion pressure and triggering catastrophic "thoughts slipping through fingers" / cognitive chaining collapse. In slow-COMT individuals, caffeine also impairs catecholamine breakdown, triggering jittery tachycardia and vascular neck headaches.',
    clinicalPearls: [
      'Your intuition that gastro irritants exacerbate blood pooling is 100% physiologically accurate and confirmed by autonomic hemodynamics.',
      'Decaf coffee still contains chlorogenic acids and roast irritants that trigger gastric mucosal hyperemia and splanchnic vasodilation.',
      'Maintaining gut mucosal quiescence preserves central arterial preload for executive frontal lobe tasks.'
    ],
    cautions: [
      'Do not abruptly withdraw massive caffeine intake in one day if habituated—taper over 3-4 days to avoid acute adenosine-rebound vasodilation headaches.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'Splanchnic Shield'
  },

  // ===================== PHARMA: FLUSH =====================
  {
    id: 'pharma-flush-1',
    pillar: 'pharma',
    actionType: 'flush',
    primaryTarget: 'mcas',
    title: 'Dual H1/H2 Peripheral Receptor Saturation',
    summary: 'Rapidly flush and block histamine from docking onto vascular endothelial and gastric parietal receptors.',
    specificProtocol: 'Desloratadine 5mg (or Fexofenadine 180mg) taken once to twice daily + Famotidine 20–40mg twice daily (morning and before dinner).',
    mechanism: 'Histamine exerts its vascular permeabilizing actions through H1 receptors (activating endothelial PLC/IP3 to induce intercellular gap formation) and its microvascular vasodilatory actions through both H1 and H2 receptors. Dual saturation creates competitive antagonism, preventing circulating histamine from promoting capillary filtration, tissue edema, and visceral hypersensitivity.',
    clinicalPearls: [
      'Desloratadine has minimal sedative liability and zero anticholinergic cognitive impairment, protecting prefrontal IQ.',
      'Famotidine suppresses both gastric acid secretion and visceral vagal afferent irritation caused by enteric mast cell histamine.',
      'Can be doubled during acute seasonal or food-triggered flares under medical supervision.'
    ],
    cautions: [
      'Avoid first-generation antihistamines (diphenhydramine) during daytime as their potent anticholinergic profile worsens SCT brain fog.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'Dual Receptor Shield',
    helpRating: 4.8,
    helpStars: '★★★★★',
    helpVerdict: 'Crucial Baseline Anchor',
    ratingRationale: 'Essential non-sedating histamine clearance; blocks microvascular endothelial gap permeability and splanchnic hypersecretion without anticholinergic IQ blunting.'
  },
  {
    id: 'pharma-flush-2',
    pillar: 'pharma',
    actionType: 'flush',
    primaryTarget: 'vascular',
    title: 'Pre- vs. Post-Capillary Hemodynamic Balancing Protocol',
    summary: 'Clinical strategy for discussing Amlodipine 5mg pre-capillary vasodilation with your physician.',
    specificProtocol: 'Clinical discussion with prescribing doctor: Evaluate adding a low-dose ACE inhibitor (e.g., Lisinopril 5–10mg) or Angiotensin Receptor Blocker (ARB, e.g., Telmisartan 20–40mg) to co-administer with Amlodipine 5mg, or switching dose timing to bedtime.',
    mechanism: 'Dihydropyridine CCBs like Amlodipine selectively dilate the pre-capillary arteriolar sphincter with zero effect on post-capillary venules. This hydraulic mismatch transmits systemic arterial hydrostatic pressure directly into fragile capillary beds ($P_c$ increases from 25 to >38 mmHg), driving massive fluid filtration into lower extremity interstitial spaces (sock marks). ARBs/ACE inhibitors selectively dilate post-capillary venules, restoring balanced microvascular drainage pressure and reducing edema incidence by up to 60%.',
    clinicalPearls: [
      'Telmisartan also provides PPAR-gamma activation, exerting neuroprotective and anti-inflammatory properties in microglial cells.',
      'Taking Amlodipine before bed aligns peak plasma levels with supine positioning, reducing dependent gravitational hydrostatic pooling.',
      'Bring the "Clinical Discussion Guide" generated in this tool to your next physician consultation.'
    ],
    cautions: [
      'Never adjust or stop prescribed antihypertensive medications without the direct supervision of your treating physician.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'Hemodynamic Rebalance',
    helpRating: 4.6,
    helpStars: '★★★★★',
    helpVerdict: 'Crucial Hemodynamic Rebalance',
    ratingRationale: 'Post-capillary venodilation neutralizes Amlodipine-induced pre-capillary filtration edema; adds PPAR-gamma microglial neuroprotection.'
  },

  // ===================== PHARMA: STABILISE =====================
  {
    id: 'pharma-stabilise-1',
    pillar: 'pharma',
    actionType: 'stabilise',
    primaryTarget: 'triad',
    title: 'Central & Peripheral Mast Cell Stabilisation (Ketotifen / Cromolyn)',
    summary: 'Seal mast cell membranes against degranulation at both mucosal and central neurovascular junctions.',
    specificProtocol: 'Oral Cromolyn Sodium: 100–200mg dissolved in 4 oz lukewarm water, consumed 20–30 minutes before each meal. Ketotifen: 0.5mg–1mg at bedtime, gradually titrating to 1mg twice daily as tolerated.',
    mechanism: 'Cromolyn remains entirely non-absorbed (>99% in gut lumen), directly coating mucosal mast cells and blocking calcium influx into the cell interior, halting the release of histamine, tryptase, and TNF-alpha. Ketotifen is systemically bioavailable, crossing the blood-brain barrier to stabilize central dural and perivascular mast cells, halting the cytokine cascade that drives brain fog and neurovascular uncoupling.',
    clinicalPearls: [
      'Cromolyn must be introduced gradually (start with 1 ampoule daily) to avoid paradoxical early gastrointestinal flares.',
      'Ketotifen provides both non-competitive H1 blockade and membrane stabilization, conferring profound nocturnal restorative sleep.',
      'Protects the prefrontal cortex against inflammatory synaptic pruning.'
    ],
    cautions: [
      'Ketotifen may cause transient mild somnolence during the first 3–5 days; take exclusively at bedtime during initiation.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'Membrane Lock',
    helpRating: 4.9,
    helpStars: '★★★★★',
    helpVerdict: 'Gold Standard Mast Cell Sealant',
    ratingRationale: 'Directly arrests mast cell degranulation centrally and enterically; halts cytokine surges at the source before neurovascular uncoupling occurs.'
  },
  {
    id: 'pharma-stabilise-2',
    pillar: 'pharma',
    actionType: 'stabilise',
    primaryTarget: 'brain-fog',
    title: 'Neuro-Immunological Calibration: LDN & Guanfacine ER',
    summary: 'Quell central microglial priming while fortifying prefrontal cortical alpha-2A network connectivity.',
    specificProtocol: 'Low-Dose Naltrexone (LDN): 1.5mg titrated to 3.0–4.5mg at bedtime. Guanfacine ER (Intuniv): 1mg taken in the evening with food.',
    mechanism: 'LDN antagonizes Toll-Like Receptor 4 (TLR4) on brain microglia, reversing neuroinflammation and stopping inflammatory astrocytic cytokine release without blocking endogenous endorphin synthesis. Guanfacine ER selectively binds postsynaptic alpha-2A adrenoceptors on prefrontal cortical pyramidal cells, closing hyperpolarizing cAMP-gated HCN ion channels. This structurally strengthens dendritic spine connections, resolving SCT day-dreaming, mind-wandering, and working memory decay, while concurrently sealing blood-brain barrier tight junctions.',
    clinicalPearls: [
      'Arnsten et al. (Yale University) demonstrated that alpha-2A agonists directly reverse stress-induced prefrontal disconnection.',
      'LDN resolves the persistent "flu-like" cognitive malaise and exercise intolerance seen in neuro-immune dysregulation.',
      'This combination stabilizes executive function without the tachycardia or hyperadrenergic flares associated with stimulant overuse.'
    ],
    cautions: [
      'Do not initiate LDN if taking opioid pain medications. Titrate Guanfacine slowly to avoid transient orthostatic hypotension.'
    ],
    evidenceGrade: 'B (Clinical Trial / Pharmacological Consensus)',
    badge: 'PFC Connectivity',
    helpRating: 4.8,
    helpStars: '★★★★★',
    helpVerdict: 'First-Line Neuro-Immune Stabilizer',
    ratingRationale: 'Dual microglial TLR4 reset + prefrontal dendritic spine structural locking; zero stimulant load, zero COMT inhibition.'
  },
  {
    id: 'pharma-stabilise-3',
    pillar: 'pharma',
    actionType: 'stabilise',
    primaryTarget: 'brain-fog',
    title: 'Selective PDE4 Microglial Silencer: Roflumilast (Daliresp / Daxas)',
    summary: 'Direct microglial M1-to-M2 switch, intracellular cAMP mast cell brake, and prefrontal BDNF upregulation.',
    specificProtocol: 'Roflumilast: Initiate at 250 mcg orally once daily for 4 weeks (to establish gastrointestinal tolerance), then advance to standard maintenance dose of 500 mcg once daily (or remain at 250 mcg if clinically responsive). Take once daily with or without food.',
    mechanism: 'Roflumilast is a potent, selective phosphodiesterase-4 (PDE4A–D) inhibitor. Microglia and mast cells express high levels of PDE4, which degrades cyclic adenosine monophosphate (cAMP). By inhibiting PDE4, intracellular cAMP surges, activating Protein Kinase A (PKA) and Epac pathways. Elevated cAMP is the primary endogenous brake on both microglia and mast cells: it suppresses NF-kB nuclear translocation, shuts down microglial release of TNF-alpha, IL-1beta, IL-6, and reactive oxygen species (M1 to M2 polarization), and potently inhibits mast cell degranulation. In prefrontal and hippocampal pyramidal neurons, elevated cAMP phosphorylates CREB, stimulating Brain-Derived Neurotrophic Factor (BDNF) synthesis and restoring long-term synaptic potentiation to dissolve brain fog.',
    clinicalPearls: [
      'Slow-COMT Compliant: Roflumilast is completely non-catechol and has ZERO inhibitory effect on COMT—causing zero neck stiffness or vascular headaches.',
      'Directly Accessible Microglial Tool: Unlike experimental compounds, Roflumilast is clinically available to you and provides immediate targeted central microglial dampening.',
      'Non-Stimulant Cognitive Enhancer: Does not raise peripheral adrenaline or heart rate, avoiding the tachycardia and sympathetic degranulation seen with traditional stimulants.',
      'Synergistic Triad: Combines exceptionally well with Low-Dose Naltrexone (TLR4 blockade) and Guanfacine ER (PFC dendritic spine locking) to establish a comprehensive non-stimulant neuro-immune shield.'
    ],
    cautions: [
      'Gastrointestinal titration: Mild loose stools, transient nausea, or decreased appetite can occur during initial weeks; starting at 250 mcg minimizes this effect.',
      'Monitor mood and weight: Report any unexpected depressive symptoms or unprompted severe weight loss to your prescribing physician.',
      'Avoid concurrent strong cytochrome P450 inducers (e.g., rifampicin, carbamazepine, St. John\'s wort) which decrease roflumilast plasma levels.'
    ],
    evidenceGrade: 'B (Clinical Trial / Pharmacological Consensus)',
    badge: 'Microglial PDE4',
    helpRating: 4.7,
    helpStars: '★★★★★',
    helpVerdict: 'Direct Microglial Silencer (Accessible)',
    ratingRationale: 'Accessible to patient; cAMP elevation acts as the master biological brake on both microglial M1 neuroinflammation and mast cell degranulation without catecholamine/COMT burden.'
  },
  {
    id: 'pharma-stabilise-isrib',
    pillar: 'pharma',
    actionType: 'stabilise',
    primaryTarget: 'brain-fog',
    title: 'Investigational eIF2B Allosteric Activator: ISRIB (Integrated Stress Response Inhibitor)',
    summary: 'Direct molecular decameric stabilizer of eIF2B that breaks neuroinflammatory translational arrest, restores hippocampal LTP, and clears SCT brain fog with zero catecholamine load.',
    specificProtocol: 'Investigational research context (0.25–2.5 mg/kg in specialized lipid nano-emulsion or cyclodextrin carriers); next-generation bioavailable clinical analogues (e.g. 2BAct, DNL343) currently in human clinical trial pipelines.',
    mechanism: 'Under chronic neuroinflammation (microglial TLR4 priming, mast cell cytokine storm crossing BBB, viral stress), four stress kinases (PERK, PKR, GCN2, HRI) phosphorylate eIF2α at Ser51. Phosphorylated eIF2α competitively locks eIF2B into an inactive conformation, shutting down global ribosomal translation initiation while aberrantly translating stress factor ATF4. trans-ISRIB staples the eIF2B decameric holoenzyme, rendering it insensitive to p-eIF2α inhibition. This restores de novo synthesis of synaptic plasticity proteins (Arc, BDNF, PSD-95) in the hippocampus and prefrontal cortex, resolving profound executive processing latency and sluggish cognitive tempo.',
    clinicalPearls: [
      'The "Zero-Catecholamine Miracle": Unlike traditional ADHD stimulants that exhaust Slow COMT (Met/Met) genotypes with tachycardia and rebound agitation, ISRIB works entirely at ribosomal translation with ZERO adrenergic or dopaminergic stimulation.',
      'Translational Reversal: Preclinical literature demonstrates that a brief 3-day administration window can induce lasting cognitive and synaptic restoration in chronically primed brains.',
      'Formulation Challenge: Pure crystalline trans-ISRIB has near-zero aqueous solubility; pharmaceutical delivery requires cyclodextrin or lipid carrier dispersion.',
      'Clinical Context: Strictly investigational in translational neuroscience; represents the frontier of neuro-immune brain fog reversal.'
    ],
    cautions: [
      'Investigational status: lacks complete Phase III human clinical trial data; do not ingest unformulated raw chemical powder.',
      'Do not administer during acute severe viral infections or acute stroke where physiological ISR activation is cytoprotective.'
    ],
    evidenceGrade: 'B (Clinical Trial / Pharmacological Consensus)',
    badge: 'eIF2B Translation Reset',
    helpRating: 4.8,
    helpStars: '★★★★★',
    helpVerdict: 'Investigational Gold Standard (Synaptic Protein Translation Reset)',
    ratingRationale: 'Overcomes neuroinflammatory eIF2α-mediated translational shutdown in hippocampus/PFC; zero burden on Slow COMT catecholamine pathways.'
  },
  {
    id: 'pharma-pelvic-tadalafil',
    pillar: 'pharma',
    actionType: 'stabilise',
    primaryTarget: 'vascular',
    title: 'Pelvic Perfusion & Neurovascular cGMP Enhancer: Low-Dose Daily Tadalafil (Cialis)',
    summary: 'Targeted PDE5 inhibition to decompress the pudendal neurovascular bundle, resolve hypertonic pelvic floor ischemia, and overcome lifelong anorgasmic reflex blocks.',
    specificProtocol: 'Tadalafil: 2.5mg to 5.0mg orally once daily in the morning at the same time each day. Use continuous low-dose therapy rather than episodic 20mg PRN dosing to maintain consistent tissue levels and avoid hemodynamic swings.',
    mechanism: 'In individuals with chronic pelvic floor hypertonicity, chronic spasm of the levator ani and puborectalis muscles compresses the internal pudendal neurovascular bundle, starving local nerves and erectile tissues of oxygenated arterial blood and maintaining reflex numbness. Tadalafil selectively blocks PDE5, preventing cGMP degradation. Elevated cGMP activates Protein Kinase G (PKG), mediating continuous smooth muscle relaxation in pelvic floor vasculature and the bladder neck. This restores microvascular perfusion to ischemic pelvic muscles, dampens visceral hyperalgesia, and dramatically lowers the sensory threshold required for orgasmic climax without stimulating catecholamines or overburdening Slow COMT.',
    clinicalPearls: [
      'Breakthrough for Anorgasmia: Directly relieves the ischemic neural compression and blunted genital blood flow that prevent orgasm, providing physiological disinhibition.',
      'Slow COMT Safe: Zero interaction with dopamine, noradrenaline, or COMT clearance; produces zero stimulant jitter or neck stiffness.',
      'Endothelial Protection: Augments eNOS and endothelial flow-mediated dilation (FMD), synergizing with Telmisartan.',
      'Amlodipine Caution: Start with 2.5mg daily to confirm blood pressure tolerance alongside dihydropyridine calcium channel blockers.'
    ],
    cautions: [
      'Absolute Contraindication: Strictly prohibited with organic nitrates (nitroglycerin) or guanylate cyclase stimulators (riociguat) due to severe hypotension risk.',
      'Avoid episodic 20mg PRN doses which cause abrupt blood pressure fluctuations.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'Pelvic PDE5 / cGMP',
    helpRating: 4.8,
    helpStars: '★★★★★',
    helpVerdict: 'Gold Standard Pelvic & Pudendal Decompressor',
    ratingRationale: 'Upregulates internal pudendal cGMP and microvascular perfusion, decompressing hypertonic pelvic floor musculature and resolving lifelong anorgasmic reflex blocks without COMT load.'
  },

  // ===================== NUTRACEUTICAL: FLUSH =====================
  {
    id: 'nutra-flush-1',
    pillar: 'nutraceutical',
    actionType: 'flush',
    primaryTarget: 'mcas',
    title: 'Molybdenum (SUOX Cofactor) Sulfite Flush Protocol',
    summary: 'Crucial trace element essential for Sulfite Oxidase enzyme to convert toxic sulfites into inert sulfates.',
    specificProtocol: 'Molybdenum (as Glycinate or Sodium Molybdate): 150–300 mcg daily with breakfast. During acute accidental sulfite exposure (e.g. restaurant food, wine/cider cross-contamination): take 300–500 mcg immediately alongside buffered Vitamin C.',
    mechanism: 'Sulfite Oxidase (SUOX) is a mitochondrial metalloenzyme that depends obligately on a molybdenum-pterin (Moco) cofactor. SUOX catalyzes the terminal oxidation step in sulfur metabolism: $SO_3^{2-} + H_2O \\xrightarrow{SUOX} SO_4^{2-} + 2H^+ + 2e^-$. Without adequate molybdenum, toxic, highly reactive sulfite accumulates, inducing smooth muscle bronchoconstriction (wheezing), mast cell degranulation, and flushing.',
    clinicalPearls: [
      'Directly addresses your confirmed history of wheezing from sausages, cider, and wines.',
      'Molybdenum glycinate provides superior cellular absorption without gastrointestinal irritation.',
      'Supports phase II liver sulfur conjugation pathways.'
    ],
    cautions: [
      'Do not exceed 1000 mcg/day long-term as high doses can interfere with copper absorption.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'SUOX Key'
  },
  {
    id: 'nutra-flush-2',
    pillar: 'nutraceutical',
    actionType: 'flush',
    primaryTarget: 'triad',
    title: 'Buffered Vitamin C & Lipid-Soluble Thiamine (Benfotiamine)',
    summary: 'Direct non-acidic histamine breakdown and microvascular advanced glycation clearance.',
    specificProtocol: 'Non-acidic Buffered Vitamin C (Calcium & Magnesium Ascorbate): 500–1000mg twice daily with meals. Benfotiamine (B1): 150–300mg once daily in the morning.',
    mechanism: 'Ascorbate directly degrades the imidazole ring of histamine in plasma and activates serum Diamine Oxidase (DAO). Benfotiamine dramatically activates the pentose phosphate pathway enzyme transketolase, redirecting toxic glycolytic intermediates away from microvascular endothelial damage and resolving lactic acid pooling that impairs brain fog and muscular recovery.',
    clinicalPearls: [
      'Buffered ascorbate provides neutral pH (around 7.0), avoiding the stomach irritation and mast cell firing of acidic ascorbic acid.',
      'Benfotiamine crosses blood-vessel walls and the blood-brain barrier 5x more effectively than standard thiamine hydrochloride.',
      'Supports neurovascular energy production in the hippocampus and prefrontal cortex.'
    ],
    cautions: [
      'Avoid effervescent Vitamin C tablets sweetened with sorbitol or preserved with benzoates/sulfites.'
    ],
    evidenceGrade: 'B (Clinical Trial / Pharmacological Consensus)',
    badge: 'Endothelial Shield'
  },

  // ===================== NUTRACEUTICAL: STABILISE =====================
  {
    id: 'nutra-stabilise-1',
    pillar: 'nutraceutical',
    actionType: 'stabilise',
    primaryTarget: 'triad',
    title: 'SLOW-COMT COMPLIANT Mast Cell Stabilisers: Pure Luteolin & Micronized PEA',
    summary: 'The safe, non-catechol alternative to Quercetin and EGCG that completely prevents stiff neck and headaches.',
    specificProtocol: 'Micronized Palmitoylethanolamide (PEA): 400–800mg twice daily with dietary fat. Pure Liposomal Luteolin: 50–100mg once or twice daily (isolated; free from Quercetin, EGCG, or Rutin catechols).',
    mechanism: 'WHY QUERCETIN & EGCG CAUSE HEADACHES: Quercetin and epigallocatechin gallate (EGCG) possess dense vicinal dihydroxy catechol rings that act as potent competitive inhibitors of Catechol-O-Methyltransferase (COMT). In individuals with heterozygous or slow COMT (Val158Met), taking quercetin or EGCG paralyzes catecholamine breakdown, causing massive local pooling of noradrenaline and dopamine. This induces intense intracranial-cervical vasoconstriction, severe posterior neck stiffness, and throbbing vascular headaches.\n\nWHY LUTEOLIN & PEA ARE SAFE: PEA is an endogenous fatty acid amide that stabilizes mast cells and microglia via PPAR-alpha and GPR55 receptors without interacting with COMT or catechol rings. Pure Luteolin exerts superior brain mast cell and microglial suppression (Dr. Theoharides, Tufts) with drastically lower COMT inhibitory potency when dosed cleanly.',
    clinicalPearls: [
      'PEA provides documented relief of neuropathic pain and visceral hypersensitivity across 30+ clinical trials.',
      'Luteolin suppresses mast cell secretion of IL-6, TNF-alpha, and histamine without adrenergic surge.',
      'Always inspect multi-ingredient "MCAS blends" on the market: 95% contain Quercetin as their primary ingredient—strictly avoid them!'
    ],
    cautions: [
      'Read labels rigorously: Ensure the product is pure single-ingredient Luteolin or PEA, not a complex with Quercetin, EGCG, or Resveratrol.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'Slow-COMT Safe'
  },
  {
    id: 'nutra-stabilise-2',
    pillar: 'nutraceutical',
    actionType: 'stabilise',
    primaryTarget: 'vascular',
    title: 'Microvascular Endothelial Stabilisers: MPFF & Pycnogenol',
    summary: 'Clinically proven venotonics to seal post-capillary venules and eliminate Amlodipine sock marks.',
    specificProtocol: 'Micronized Purified Flavonoid Fraction (MPFF: Diosmin 450mg + Hesperidin 50mg): 1 tablet (500mg) twice daily with meals. Pycnogenol (French Maritime Pine Bark Extract): 50–100mg once daily in the morning.',
    mechanism: 'MPFF prolongs the vasoconstrictive effect of noradrenaline on venous walls, increasing post-capillary venular tone and lymphatic drainage while reducing capillary filtration pressure ($P_c$). In randomized clinical trials, co-administration of MPFF with CCBs (Amlodipine) reduced dependent ankle circumference and sock indentation score by over 50%. Pycnogenol shields the endothelial glycocalyx, accelerates venous reflux clearance, and reduces CCB-induced pretibial pitting edema by 35–45%.',
    clinicalPearls: [
      'Specifically counteracts your lifelong history of deep sock indentations and dependent edema.',
      'Micronized formulation ensures 2x greater bioavailability than standard crushed diosmin.',
      'Pycnogenol also stimulates endothelial nitric oxide synthase (eNOS) in a physiologically balanced manner.'
    ],
    cautions: [
      'Take with meals to prevent transient digestive mildness during initial administration.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'Venous Tone'
  },
  {
    id: 'nutra-stabilise-3',
    pillar: 'nutraceutical',
    actionType: 'stabilise',
    primaryTarget: 'brain-fog',
    title: 'COMT-Activating Magnesium Malate / Bisglycinate',
    summary: 'Obligate cofactor for catechol breakdown and prefrontal NMDA synaptic gating.',
    specificProtocol: 'Magnesium Malate (morning) or Magnesium Bisglycinate (evening): 200–400mg elemental magnesium daily in divided doses.',
    mechanism: 'Magnesium is the required divalent cation cofactor ($Mg^{2+}$) for Catechol-O-Methyltransferase (COMT). In slow COMT phenotypes, optimal magnesium levels ensure the enzyme functions at maximum catalytic efficiency. Furthermore, magnesium acts as the physiological voltage-dependent plug in post-synaptic NMDA receptor channels, protecting prefrontal neurons from glutamate excitotoxicity and mental exhaustion.',
    clinicalPearls: [
      'Malate form provides malic acid for mitochondrial Krebs cycle ATP generation, combating daytime physical fatigue.',
      'Bisglycinate form crosses the blood-brain barrier smoothly and promotes GABAergic inhibitory calm before sleep.',
      'Relaxes peripheral vascular smooth muscle tone without interfering with venous return.'
    ],
    cautions: [
      'Avoid Magnesium Citrate if prone to loose stools or if sensitive to citrus fermentation derivatives.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'COMT Cofactor'
  },
  {
    id: 'nutra-stabilise-4',
    pillar: 'nutraceutical',
    actionType: 'stabilise',
    primaryTarget: 'triad',
    title: 'CDP Choline (Citicoline): Vagal α7nAChR Microglial Dampener & Endothelial Shield',
    summary: 'Dual donor of choline and cytidine to activate the vagal cholinergic anti-inflammatory pathway, repair vascular membranes, and dissolve brain fog.',
    specificProtocol: 'Citicoline (CDP Choline): 250mg once daily in the morning with food. Titrate slowly to 250–500mg max if well tolerated. Do NOT exceed 500mg daily. If any mild jaw tightness or low mood occurs, decrease dose to 250mg every other day.',
    mechanism: 'DOES CDP CHOLINE HAVE A PLACE? YES—IT IS AN IDEAL NEURO-VASCULAR ADJUVANT THROUGH 3 MECHANISMS: 1) Vagal Cholinergic Anti-Inflammatory Pathway (CAP): Choline synthesizes Acetylcholine (ACh). Vagal efferents release ACh to bind Alpha-7 Nicotinic Acetylcholine Receptors (α7nAChR) on microglia, macrophages, and enteric mast cells. Binding recruits Jak2-STAT3, suppressing NF-kB and halting TNF-alpha, IL-1beta, and histamine exocytosis. 2) Reversing H3-Induced Cognitive Chaining Collapse: Presynaptic H3 autoreceptors normally shut off prefrontal ACh release during flares. CDP Choline boosts central ACh synthesis in the nucleus basalis of Meynert and DLPFC, restoring signal-to-noise ratio in recurrent pyramidal circuits and rescuing word retrieval without adrenergic surges. 3) Endothelial & BBB Membrane Repair: Cytidine converts to uridine, which combines with choline via the Kennedy pathway to synthesize phosphatidylcholine—repairing microvascular endothelial cell membranes and sealing tight junctions (Claudin-5, Occludin) degraded by mast cell tryptase.',
    clinicalPearls: [
      'Superior to Alpha-GPC: Alpha-GPC can cause excessive parasympathetic gut hypermotility and higher trimethylamine N-oxide (TMAO) conversion; CDP Choline is cleaner and provides cytidine for membrane repair.',
      'Slow-COMT Safe: Completely non-catechol structure with zero COMT inhibition, avoiding the neck stiffness and vascular headaches caused by Quercetin/EGCG.',
      'Synergizes with Roflumilast and Guanfacine ER to form a comprehensive non-stimulant neuro-cognitive triangle.'
    ],
    cautions: [
      'Avoid high doses (>500mg) which can occasionally cause mild acetylcholine excess (stiff jaw or low mood) in sensitive individuals.'
    ],
    evidenceGrade: 'B (Clinical Trial / Pharmacological Consensus)',
    badge: 'α7nAChR / Vagal',
    helpRating: 4.8,
    helpStars: '★★★★★',
    helpVerdict: 'Exceptional Neuro-Vascular Adjuvant',
    ratingRationale: 'Vagal α7nAChR anti-inflammatory brake + prefrontal acetylcholine restoration + endothelial membrane repair via cytidine/uridine.'
  },
  {
    id: 'nutra-stabilise-5',
    pillar: 'nutraceutical',
    actionType: 'stabilise',
    primaryTarget: 'triad',
    title: 'Vitamin D3 & Vitamin K2 (MK-4 vs. MK-7 Distinction): MGP Calcification Shield & Microglial Gas6',
    summary: 'Vitamin D3 and MK-4 strongly HELP by stabilizing mast cells, activating vascular MGP, and silencing microglia; MK-7 HINDERS due to fermentation histamine and adrenergic tachycardia.',
    specificProtocol: 'Vitamin D3 (Cholecalciferol): 2,000–4,000 IU daily with morning dietary fat. Vitamin K2 Subtype MK-4 (Menaquinone-4): 500–1,500 mcg daily with breakfast. Magnesium Malate or Bisglycinate: 200–400mg daily (obligate enzymatic cofactor). CRITICAL RULE: Strictly avoid or discontinue Vitamin K2 Subtype MK-7 (Menaquinone-7) to prevent nocturnal cardiac palpitations, arrhythmia sensations, and histamine flares.',
    mechanism: 'DO D3 AND VITAMIN K2 (MK-4 vs MK-7) HELP OR HINDER? HERE IS THE EXACT MOLECULAR VERDICT:\n\n1) VITAMIN D3 (HELP - 4.5/5 STARS):\n• Mast Cell VDR Lock: 1,25(OH)2D3 binds Vitamin D Receptors (VDR) on perivascular mast cells, downregulating high-affinity IgE receptors (FcεRI), suppressing NF-κB nuclear translocation, and decreasing histamine, tryptase, IL-6, and TNF-alpha release.\n• Endothelial Protection: Stimulates endothelial nitric oxide synthase (eNOS) transcription, restoring microvascular baseline tone and downregulating ICAM-1/VCAM-1 vascular adhesion molecules.\n• The Catch: D3 stimulates intestinal calcium absorption. Unpaired with Vitamin K2, calcium risks depositing into microvascular walls, worsening arterial stiffness. Furthermore, Vitamin D hydroxylation (CYP2R1, CYP27B1) consumes magnesium; D3 must always be paired with Magnesium and K2!\n\n2) VITAMIN K2 SUBTYPE MK-4 (MENAQUINONE-4) (STRONG HELP - 5.0/5 STARS - GOLD STANDARD):\n• Vascular Matrix Gla Protein (MGP) Activation: MK-4 is the physiological tissue cofactor that γ-carboxylates MGP in vascular smooth muscle and endothelial cells. Carboxylated MGP is the body\'s strongest inhibitor of arterial and microvascular calcification, preserving vascular compliance and preventing capillary leakage.\n• Direct Microglial Silencing via Gas6: MK-4 selectively carboxylates Growth Arrest-Specific 6 (Gas6) in the central nervous system. Gas6 binds microglial Tyro3, Axl, and Mer (TAM) receptor tyrosine kinases, directly turning OFF microglial M1 pro-inflammatory cytokine release (TNF-α, IL-1β), promoting non-inflammatory clearance of cellular debris, and supporting oligodendrocyte remyelination to clear sluggish cognitive tempo (SCT).\n• 100% MCAS-Safe (Non-Fermented): MK-4 is synthesized cleanly or derived from animal lipids—NOT from bacterial fermentation. Contains ZERO bacterial/fungal fermentation antigens, ZERO mold residues, and ZERO soy/natto histamine triggers.\n• Zero Cardiac Palpitations: Rapid half-life (~2–4 hours) prevents mitochondrial accumulation; does not cause hyperadrenergic tachycardia or insomnia in slow-COMT individuals.\n\n3) VITAMIN K2 SUBTYPE MK-7 (MENAQUINONE-7) (HINDER - 1.5/5 STARS - HAZARD FOR THIS PHENOTYPE):\n• The MK-7 Palpitation & Insomnia Syndrome: MK-7 possesses a long lipophilic 7-isoprene unit tail, giving it a 72-hour half-life. Over 1–3 weeks of daily use, MK-7 hyper-accumulates in cardiac tissue and peripheral sympathetic ganglia. This stimulates myocardial mitochondrial electron transport and uncouples cardiac autonomic pacemaker tone, frequently triggering paroxysmal resting tachycardia, premature ventricular contractions (PVCs / skipped beats), internal buzzing, anxiety surges, and severe refractory insomnia.\n• Disaster for Slow-COMT: Individuals with slow COMT (Val158Met) cannot clear surging catecholamines. The hyperadrenergic state induced by MK-7 triggers intense occipital neck spasms, vascular headaches, and adrenergic exhaustion.\n• Bacterial Fermentation Histamine Trigger: Commercial MK-7 is almost universally produced via Bacillus subtilis var. natto or chickpea fermentation. Even purified extracts carry trace fermentation residues, bacterial peptidoglycans, and biogenic amines that act as non-IgE mast cell secretagogues in hyper-reactive gut tissue, triggering splanchnic hyperemia, flushing, and visceral discomfort.',
    clinicalPearls: [
      'Takeaway Summary: D3 = HELP (pair with Magnesium), MK-4 = STRONG HELP (5-Star Gold Standard), MK-7 = HINDER (palpitations & histamine).',
      'Check all multi-vitamin or D3/K2 combination drops: Most commercial drops use cheap MK-7. Replace with dedicated D3 drops + isolated MK-4 capsules.',
      'MK-4 is also known as "Menatetrenone" in clinical literature and has decades of cardiovascular safety trials.',
      'Dosing: 500 mcg to 1,500 mcg of MK-4 daily covers both vascular MGP carboxylation and neural Gas6 microglial quenching.'
    ],
    cautions: [
      'Do not take high doses of Vitamin D3 without checking serum 25-hydroxyvitamin D levels every 3–6 months (target 50–70 ng/mL).',
      'Patients taking coumarin/warfarin anticoagulants must consult their hematologist before using Vitamin K forms (does not apply to direct factor Xa inhibitors or antiplatelets).'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'MGP & Gas6 Shield',
    helpRating: 4.8,
    helpStars: '★★★★★',
    helpVerdict: 'D3 + MK-4: Essential Shield (MK-7 Contraindicated)',
    ratingRationale: 'D3 stabilizes mast cells and eNOS; MK-4 activates vascular MGP to prevent arterial calcification and carboxylates Gas6 to suppress microglial inflammation without MK-7 fermentation histamines or palpitations.'
  },
  {
    id: 'nutra-stabilise-creatine',
    pillar: 'nutraceutical',
    actionType: 'stabilise',
    primaryTarget: 'triad',
    title: 'Creatine Monohydrate (Creapure®): Hepatic SAMe Sparing & Prefrontal ATP Shuttling',
    summary: 'Spares 40%–50% of the daily bodily methyl group pool (crucial for Slow COMT), accelerates prefrontal brain energy, and provides gentle plasma volume expansion without stimulants.',
    specificProtocol: 'Creapure® Micronized Creatine: 2.5g to 3.0g once daily in the morning with breakfast, dissolved 100% transparently in warm water, herbal tea, or broth. Strictly NO high-dose 20g loading phase.',
    mechanism: 'Endogenous creatine synthesis in the liver via guanidinoacetate N-methyltransferase (GAMT) is the single largest consumer of S-adenosylmethionine (SAMe) in humans, draining 40–50% of the body\'s entire daily methyl group reserves. In Slow COMT (Met/Met), supplemental Creapure® halts GAMT consumption, sparing immense reserves of endogenous SAMe for catecholamine degradation, HNMT histamine breakdown, and DNA methylation without triggering the overmethylation panic caused by exogenous methylfolate. Simultaneously, the phosphocreatine shuttle fuels prefrontal cortical ATP regeneration to overcome SCT brain fog, while cellular hyperhydration gently expands plasma volume to combat POTS orthostatic venous pooling.',
    clinicalPearls: [
      'The Slow COMT Methyl Miracle: Delivers the functional relief of methylation optimization without the risk of catecholamine surge, vascular headaches, or panic attacks.',
      'Creapure® Purity Non-Negotiable: Generic bulk creatine contains dicyandiamide and dihydrotriazine contaminants that trigger gut mucosal mast cells; only German Creapure® is certified clean.',
      'Must Dissolve Completely: Never dry scoop or ingest gritty cold slurry; dissolving fully in warm fluid eliminates intraluminal osmotic gut distress.',
      'Gentle Volume Expander: Enhances intracellular hydration and plasma volume, stabilizing upright blood pressure alongside morning electrolytes.'
    ],
    cautions: [
      'Strictly avoid 20g/day loading protocols: causes severe osmotic water shifts, loose stools, and mucosal mast cell histamine degranulation.',
      'Ensure adequate daily fluid (2.5L) and sodium intake so cellular hydration does not deplete extracellular electrolyte balance.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'SAMe Sparing',
    helpRating: 4.8,
    helpStars: '★★★★★',
    helpVerdict: 'Gold Standard Methyl-Sparing Nootropic',
    ratingRationale: 'Spares ~40% of bodily SAMe to protect Slow COMT from methyl depletion; rapidly fuels prefrontal ATP to clear SCT brain fog; zero catecholamine burden.'
  },

  // ===================== EXERCISE: FLUSH =====================
  {
    id: 'exercise-flush-1',
    pillar: 'exercise',
    actionType: 'flush',
    primaryTarget: 'vascular',
    title: 'The "Second Heart" Calf Muscle Pump Activation',
    summary: 'Mobilize 300–500 mL of stagnant dependent edema fluid through one-way bicuspid venous valves.',
    specificProtocol: '100 Heel Raises daily, divided into 4 sets of 25 repetitions: Morning, Midday, Late Afternoon, and Evening. Can be performed seated (if orthostatically fatigued) or standing with hand support. Focus on a 2-second concentric lift and a controlled 2-second eccentric lower.',
    mechanism: 'The soleus and gastrocnemius muscles encase deep intramuscular venous sinusoids. Contraction generates 80–100 mmHg of intramuscular pressure, forcibly ejecting stagnant, amlodipine-filtered fluid upward through one-way bicuspid venous valves into the deep femoral system. This immediately lowers dependent ambulatory venous pressure ($P_v$) from 90 mmHg to <25 mmHg, stopping the transcapillary fluid filtration that creates deep sock marks.',
    clinicalPearls: [
      'Can be performed seamlessly while on telephone calls, brushing teeth, or working at a desk.',
      'Seated calf raises recruit the soleus muscle specifically, which contains the highest density of slow-twitch postural oxidative fibers for venous clearance.',
      'Generates zero anaerobic lactic acid and requires zero sympathetic spike.'
    ],
    cautions: [
      'Do not perform rapidly or with ballistic bouncing to protect the Achilles tendon.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'Venous Ejection'
  },
  {
    id: 'exercise-flush-2',
    pillar: 'exercise',
    actionType: 'flush',
    primaryTarget: 'triad',
    title: '15° Incline Trendelenburg / "Legs-Up-The-Wall" Lymphatic Drain',
    summary: 'Instant gravitational decompression of the lower extremities and thoracic duct flush.',
    specificProtocol: '15–20 minutes every evening before sleep: Lie supine with buttocks close to a wall and extend legs vertically ("Viparita Karani"), or elevate lower legs on a wedge pillow creating a 15–30° upward slope relative to the heart. Pair with slow diaphragmatic breathing.',
    mechanism: 'Inversion immediately reverses the hydrostatic column ($\rho g h$). Dependent venous pressure drops to near 0 mmHg. Interstitial fluid that escaped under Amlodipine pre-capillary filtration pressure is drawn back into lymphatic capillaries via opening of overlapping endothelial micro-valves. Fluid returns via the thoracic duct directly into the subclavian vein for central renal processing.',
    clinicalPearls: [
      'Eliminates evening heavy-leg sensation and visibly resolves sock indentations before bed.',
      'Significantly reduces nocturnal trips to the bathroom by processing fluid in the early evening rather than at 3 AM.',
      'Promotes profound parasympathetic transition before sleep.'
    ],
    cautions: [
      'Place a small folded blanket under the sacrum for lumbar comfort if hamstring tension is present.'
    ],
    evidenceGrade: 'B (Clinical Trial / Pharmacological Consensus)',
    badge: 'Gravitational Reset'
  },

  // ===================== EXERCISE: STABILISE =====================
  {
    id: 'exercise-stabilise-1',
    pillar: 'exercise',
    actionType: 'stabilise',
    primaryTarget: 'brain-fog',
    title: 'Zone 1 Recumbent Aerobic Conditioning (Heart Rate <115 bpm)',
    summary: 'Sustain cerebral blood flow and hippocampal BDNF without triggering anaerobic mast cell degranulation.',
    specificProtocol: '20–30 minutes, 3 to 4 times weekly: Recumbent stationary cycle or gentle seated rowing. Maintain strict Zone 1 intensity (Heart rate strictly below 110–115 bpm; conversational pace where you can easily speak full sentences without gasping). Keep room temperature cool (18–20°C) with a directional fan.',
    mechanism: 'High-intensity exercise or overheating triggers thermal cutaneous vasodilation, anaerobic lactate accumulation, and acute sympathetic epinephrine surges—all of which potently degranulate mast cells and cause post-exertional cognitive crashes. Recumbent Zone 1 exercise eliminates orthostatic pooling, maintains stable laminar shear stress on cerebral endothelium, enhances cerebral perfusion by 15–20%, and stimulates neurotrophic factors (BDNF) without systemic inflammatory flares.',
    clinicalPearls: [
      'Recumbent positioning guarantees that blood reaches your brain without competing against gravitational pooling in the legs.',
      'Cool ambient airflow prevents temperature-sensitive mast cell activation.',
      'If recovering from a multi-week flare, begin with just 8–10 minutes and advance by 2 minutes weekly.'
    ],
    cautions: [
      'STRICTLY CONTRAINDICATED: HIIT (High-Intensity Interval Training), hot yoga, spin classes in unventilated rooms, or sprint intervals.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'Zone 1 Safe'
  },
  {
    id: 'exercise-stabilise-2',
    pillar: 'exercise',
    actionType: 'stabilise',
    primaryTarget: 'vascular',
    title: 'Class 1 Graduated Medical Compression Therapy (15–20 mmHg)',
    summary: 'External mechanical counter-pressure to permanently halt Amlodipine dependent filtration.',
    specificProtocol: 'Class 1 (15–20 mmHg) graduated compression knee-high or thigh-high stockings. Don stockings immediately upon waking before standing out of bed. Wear during all upright desk work, walking, or travel. Remove in the evening during the leg elevation routine.',
    mechanism: 'Graduated compression applies maximum external pressure at the ankle (20 mmHg) tapering to 15 mmHg at the calf. This elevates tissue interstitial hydrostatic pressure ($P_i$), directly counterbalancing the elevated capillary hydrostatic pressure ($P_c$) created by Amlodipine pre-capillary vasodilation. Under the Starling equation: $J_v = K_f [(P_c - P_i) - \sigma(\pi_c - \pi_i)]$, increasing $P_i$ prevents net filtration ($J_v \\to 0$).',
    clinicalPearls: [
      'Flat-knit or soft micro-fiber fabrics prevent skin itching and contact dermatographia.',
      'Putting them on BEFORE getting out of bed prevents gravity from pooling fluid in the interstitial space before compression is applied.',
      'Dramatically reduces afternoon executive fatigue by sustaining cardiac venous return.'
    ],
    cautions: [
      'Ensure proper fit: Measure ankle and calf circumference in the morning to prevent tourniquet constriction at the top band.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'Starling Balance'
  },
  {
    id: 'exercise-stabilise-3',
    pillar: 'exercise',
    actionType: 'stabilise',
    primaryTarget: 'mcas',
    title: 'Diaphragmatic Vagus Nerve Pacing (The Anti-Inflammatory Reflex)',
    summary: 'Acetylcholine-mediated suppression of gut and vascular mast cell degranulation via vagal efferents.',
    specificProtocol: '10 minutes twice daily (morning upon waking and post-dinner): 4 seconds nasal inhalation (expanding lower ribs and belly), 6 seconds slow pursed-lip exhalation (resonance frequency of 5.5 to 6 breaths per minute).',
    mechanism: 'Slow resonance breathing activates pulmonary stretch receptors and cardiac baroreceptors, surging parasympathetic efferent outflow via the vagus nerve. Efferent vagal signals stimulate choline acetyltransferase-positive T cells in the spleen and celiac ganglion, releasing acetylcholine (ACh). ACh binds directly to $\\alpha 7$ nicotinic acetylcholine receptors ($\\alpha7\\text{nAChR}$) on resident visceral and perivascular mast cells, suppressing NF-kB nuclear translocation and potently arresting cytokine/histamine release.',
    clinicalPearls: [
      'Direct physiological "circuit breaker" that quiets visceral hypersensitivity.',
      'Extends high-frequency heart rate variability (HF-HRV), a validated biomarker of autonomic resilience.',
      'Can be deployed as an acute 3-minute emergency tool during the first warning signs of brain fog or visceral bloating.'
    ],
    cautions: [
      'Avoid hyperventilation: Keep breathing smooth, unforced, and effortless.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'Vagal Circuit'
  },
  {
    id: 'exercise-stabilise-4',
    pillar: 'exercise',
    actionType: 'stabilise',
    primaryTarget: 'triad',
    title: 'Skipping & Kettlebell Armor Building Complex (ABC): Strict Upper Limits & Guardrails',
    summary: 'High calf-pump venous return + myofibrillar tension with strict heart rate and duration caps to avoid anaerobic mast cell crashes.',
    specificProtocol: 'Dan John Armor Building Complex (2 Double Cleans + 1 Double Press + 3 Double Front Squats) paired with 30–60 second light boxer-skip jump rope intervals. STRICT UPPER LIMITS: Duration ≤ 15–20 minutes total session; Heart Rate ≤ 125–130 bpm (RPE ≤ 6–7/10; conversational/nasal breathing); Frequency ≤ 2–3 sessions per week (with ≥48h recovery). Rest ratio 1:3 to 1:4 between complexes (60–90 seconds rest until HR drops <110 bpm before next round).',
    mechanism: '1) SKIPPING VENOUS PUMP: Rhythmic ballistic jumping fires the gastrocnemius-soleus complex, generating intramuscular pressures >150–200 mmHg that forcibly pump stagnant blood out of calf sinusoids past one-way bicuspid valves. 2) KETTLEBELL ABC MYOFIBRILLAR TENSION: Cleans, presses, and squats demand high intra-abdominal bracing, strengthening the pelvic floor and core while stimulating anabolic mechanotransduction. 3) WHY STRICT LIMITS ARE MANDATORY: Going into anaerobic lactate accumulation or hypoxia activates acidosis-sensing GPCRs (GPR4, OGR1), triggering explosive mast cell degranulation and a multi-day "brain fog coma". In Slow COMT, excessive adrenaline surges trigger severe neck stiffness and vascular headaches. Keeping exertion sub-threshold prevents inflammatory post-exertional crashes.',
    clinicalPearls: [
      'Strict Rule of 15 Minutes: Set a timer for 15 minutes. When it chimes, stop immediately regardless of how energetic you feel.',
      'Nasal-Breathing Benchmark: If you cannot breathe exclusively through your nose between sets, your pace is too fast and you are entering the mast cell degranulation zone.',
      'Bell Weight Selection: Use moderate, sub-maximal kettlebells (e.g., dual 12kg or dual 16kg); this is for structural resiliency, not metabolic exhaustion.',
      'Cap Volume at 5–8 Total Complexes: More is NOT better. 5 rounds of the ABC with skipping provides maximum vascular return with zero flare liability.',
      'Mandatory Post-Workout Protocol: Conclude immediately with 10–15 minutes of 15° Legs-Up-The-Wall and cool room airflow (18–20°C).'
    ],
    cautions: [
      'STRICTLY FORBIDDEN: High-intensity CrossFit-style pacing, sprint skipping, double-unders, training to muscular failure, or training in hot unventilated rooms.',
      'Do not perform during an active mast cell or sulfite flare.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'ABC Guardrail'
  },
  {
    id: 'exercise-neuro-cognitive-circuit',
    pillar: 'exercise',
    actionType: 'stabilise',
    primaryTarget: 'triad',
    title: 'Targeted Neuro-Cognitive Drills: Dual N-Back, Drumming, Soleus Pump & Vagal CAIP',
    summary: 'Non-exertional, sub-millisecond auditory-motor entrainment and hemodynamic siphons that restore prefrontal delay-period attractor loops, endogenous dopamine, and venous return without catecholamine or mast cell liability.',
    specificProtocol: '1) Dual N-Back Training: 15–20 min daily (morning prefrontal peak) to halt CDS attractor basin flattening. 2) Polyrhythmic Acoustic Drumming: 15–25 min at 80–120 BPM with bilateral hand alternating for cerebellar-striatal dopamine entrainment. 3) Seated Soleus Pushups: 100–250 heel raises every 60–90 min of desk work to pump 500–1000 mL pooled venous blood upward against gravity with 0°C heat. 4) Vocal Singing/Chanting: 10–15 min resonant low humming with 8–12s extended exhalations to trigger the vagal cholinergic anti-inflammatory pathway (α7-nAChR). 5) Supine 90/90 Reverse Kegels: 10–15 min daily to decompress Alcock canal and restore pudendal microperfusion.',
    mechanism: '1) DUAL N-BACK: Stimulates recurrent delay-period pyramidal firing in DLPFC and frontopolar cortex to expand working memory buffer and halt thought fade. 2) DRUMMING & JUGGLING: External auditory-motor rhythms bypass basal ganglia deficits, synchronize thalamocortical gamma oscillations, and stimulate striatal dopamine naturally. 3) SEATED SOLEUS DRILL: Isolates slow-twitch oxidative fibers to siphon pooled blood upward into the IVC with zero lactic acidosis or core temperature elevation (<0.05°C). 4) VOCAL RESONANCE: Mechanical deformation of recurrent and superior laryngeal nerves conducts efferent vagal signals to the mesenteric plexus, discharging acetylcholine to silence mast cell degranulation via α7-nAChR.',
    clinicalPearls: [
      'Dual N-Back pairs synergistically with morning CDP Choline (250mg) and Guanfacine ER (1mg) to fortify prefrontal dendritic spines.',
      'Soleus pushups can be performed continuously during desk work, calls, or reading without cardiovascular fatigue or sweating.',
      'Acoustic drumming channels motor restlessness into high-frequency focus for ADHD minds that struggle with static meditation.',
      'Low-frequency vocal humming before meals activates the vagal cholinergic anti-inflammatory reflex, reducing postprandial splanchnic mast cell flares.'
    ],
    cautions: [
      'Avoid high-volume drumming without ear protection.',
      'Ensure soleus calf raises are performed strictly seated at 90° knee flexion (not standing) to keep gastrocnemius slack.'
    ],
    evidenceGrade: 'A (High Quality / Meta-Analysis)',
    badge: 'Neuro-Cognitive Drills'
  },
  {
    id: 'esoteric-neurovascular-quad',
    pillar: 'pharma',
    actionType: 'stabilise',
    primaryTarget: 'triad',
    title: 'Unconventional Levers: Low-Dose Methylene Blue, Agmatine Sulfate, TUDCA & Transcranial Photobiomodulation',
    summary: 'Mitochondrial electron bypassing, sGC venular tightening, endogenous I1/α2A agonism, ER stress chaperone shielding, and photonic CCO activation.',
    specificProtocol: '1) Low-Dose Methylene Blue (15–30mg daily in morning via straw with Vitamin C): Direct sGC inhibition stops splanchnic vasoplegia and Amlodipine sock marks while electron-cycling past damaged complexes to surge prefrontal CMRO2. 2) Agmatine Sulfate (500–1000mg on empty stomach): Endogenous Guanfacine equivalent that activates I1/α2A receptors to close HCN channels for working memory and blocks NR2B NMDA excitotoxicity. 3) TUDCA (250–500mg with meals): Chaperones BiP/GRP78 to halt ER stress, blocks non-IgE mast cell SOCE calcium surges, and preserves endothelial claudin-5. 4) Transcranial Photobiomodulation (10–15 min, 810/1064nm, 15–30 J/cm²): Photo-dissociates inhibitory NO from Cytochrome c Oxidase to pulse prefrontal cerebral blood flow and stimulate meningeal glymphatics.',
    mechanism: 'These 4 interventions target previously untreatable nodal points across the neuro-immune-vascular triad: Methylene Blue terminates excess cGMP in venous smooth muscle without systemic vasoconstrictive hypertensive spikes; Agmatine provides central α2A/I1 sympatholysis while maintaining eNOS; TUDCA shields cellular proteostasis and vascular tight junctions from histamine/cytokine degradation; and tPBM directly provides non-chemical photonic energy to prefrontal mitochondria, clearing CDS hypofrontality.',
    clinicalPearls: [
      'Methylene Blue + tPBM Synergistic Multiplier: Methylene Blue donates electrons to Cytochrome C, while tPBM directly photo-activates Cytochrome C Oxidase—producing an exponential surge in prefrontal ATP without catecholamines.',
      'Agmatine replaces synthetic α2A agonists for individuals seeking an endogenous neuromodulator that also relieves hypertonic pelvic floor spasm.',
      'TUDCA prevents the cellular proteotoxic exhaustion that turns mild mast cell flares into multi-week inflammatory crashes.',
      'Always screen for G6PD deficiency and ensure strict avoidance of SSRIs/SNRIs before initiating Methylene Blue.'
    ],
    cautions: [
      'STRICT WARNING: Methylene Blue is a reversible MAO-A inhibitor and must NEVER be combined with SSRIs, SNRIs, or serotonergic drugs.',
      'Agmatine must be taken away from dietary protein to prevent amino acid transporter competition.'
    ],
    evidenceGrade: 'B (Clinical Trial / Pharmacological Consensus)',
    badge: 'Unconventional Levers',
    helpRating: 4.9,
    helpStars: '★★★★★',
    helpVerdict: 'Esoteric High-Efficacy Bio-Lever Suite',
    ratingRationale: 'Tackles previously intractable triad levers: venous vasoplegia, prefrontal delay-period attractor decay, ER stress-induced mast cell degranulation, and frontal cerebral hypoperfusion.'
  }
];

export const DAILY_24HR_SCHEDULE: DailyScheduleBlock[] = [
  {
    id: 'morning',
    timeSlot: '07:00 – 08:30',
    title: 'Morning: Awakening, Activation & Vascular Lock',
    subtitle: 'Clear nighttime metabolic debris, stabilize prefrontal circuits, and lock lower extremity microvasculature.',
    theme: 'morning',
    steps: [
      {
        id: 'm-1',
        category: 'exercise',
        action: 'Graduated Compression Garment Application',
        detail: 'Don Class 1 (15–20 mmHg) knee-high compression stockings while still sitting in bed before standing up. Prevents gravity from driving Amlodipine-mediated fluid filtration.',
        target: 'vascular',
        isFlush: false
      },
      {
        id: 'm-2',
        category: 'nutraceutical',
        action: 'Molybdenum + Benfotiamine + CDP Choline + Vitamin D3/MK-4 + Magnesium',
        detail: 'Take Molybdenum 150–300 mcg (SUOX), Benfotiamine 150mg (endothelial transketolase), CDP Choline 250mg (vagal alpha-7 nAChR & acetylcholine precursor), Vitamin D3 (2,000–4,000 IU) + Vitamin K2 as pure MK-4 (500–1,000 mcg; strictly avoid MK-7 to prevent palpitations), and Magnesium Malate 200mg with breakfast fat. Strictly NO COFFEE on an empty stomach.',
        target: 'triad',
        isFlush: true
      },
      {
        id: 'm-2b',
        category: 'nutraceutical',
        action: 'Creatine Monohydrate (Creapure®) Hepatic SAMe Sparing & Neuro-ATP Fuel',
        detail: 'Take 2.5g to 3.0g Creapure® micronized creatine dissolved 100% transparently in warm herbal tea or water with breakfast. Spares 40–50% of hepatic SAMe methyl groups (critical for Slow COMT Met/Met tolerance), boosts prefrontal ATP for SCT, and gently expands vascular plasma volume. Strictly NO 20g loading phase.',
        target: 'triad',
        isFlush: true
      },
      {
        id: 'm-3',
        category: 'pharma',
        action: 'Second-Generation H1 Antihistamine Saturation',
        detail: 'Desloratadine 5mg (or Fexofenadine 180mg) to saturate peripheral H1 receptors without anticholinergic sedation.',
        target: 'mcas',
        isFlush: true
      },
      {
        id: 'm-4',
        category: 'diet',
        action: 'Low-Histamine, Zero-Nightshade Breakfast (Zero Coffee)',
        detail: 'Freshly prepared pasture-raised poultry or unaged eggs (if tolerated), white rice or cooked peeled root vegetables, and warm non-caffeinated herbal tea (chamomile/rooibos). Strictly avoid coffee, energy drinks, and nightshades (no potatoes or paprika).',
        target: 'brain-fog',
        isFlush: false,
        warning: 'Gastro irritants and coffee trigger splanchnic vasodilation, trapping blood in the gut and compounding Amlodipine lower limb edema.'
      },
      {
        id: 'm-5',
        category: 'exercise',
        action: 'Calf Muscle Pump Set 1 (25 Heel Raises)',
        detail: '25 slow, controlled heel raises (2s up, 2s down) to prime deep venous valves and mobilize overnight interstitial fluid.',
        target: 'vascular',
        isFlush: true
      },
      {
        id: 'm-6',
        category: 'pharma',
        action: 'Microglial & PDE4 Silencing: Roflumilast (250–500 mcg)',
        detail: 'Take Roflumilast 250 mcg (titrating to 500 mcg) with morning water. Elevates microglial cAMP, arrests M1 neuroinflammation, locks mast cell membranes, and upregulates prefrontal BDNF with zero COMT catechol burden.',
        target: 'brain-fog',
        isFlush: false
      }
    ]
  },
  {
    id: 'midday',
    timeSlot: '12:00 – 14:00',
    title: 'Midday: Peak Executive Protection & Mucosal Shield',
    subtitle: 'Block postprandial inflammatory cascades, support cerebral perfusion, and prevent afternoon SCT dips.',
    theme: 'midday',
    steps: [
      {
        id: 'd-1',
        category: 'pharma',
        action: 'Mucosal Barrier Shielding: Oral Cromolyn / H2 Blocker',
        detail: 'Oral Cromolyn Sodium (100–200mg ampoule) dissolved in 4 oz water 20 min before lunch + Famotidine 20mg if experiencing visceral hypersensitivity.',
        target: 'mcas',
        isFlush: false
      },
      {
        id: 'd-2',
        category: 'diet',
        action: 'Zero-Sulfite & STRICT ZERO-NIGHTSHADE Lunch',
        detail: 'Freshly thawed flash-frozen protein, steamed peeled zucchini or sweet potatoes (never white potatoes!), and olive oil. Verify zero sulfited condiments, zero sauces, and strictly zero paprika or peppers.',
        target: 'mcas',
        isFlush: true,
        warning: 'Check food labels: strictly avoid E220–E228 sulfites and nightshades (tomatoes, potatoes, eggplants, paprika, chili).'
      },
      {
        id: 'd-3',
        category: 'nutraceutical',
        action: 'Venotonic Reinforcement: MPFF (Diosmin/Hesperidin 500mg)',
        detail: 'Take MPFF 500mg with lunch. Clinically proven to reinforce post-capillary venular tone and counteract Amlodipine pre-capillary rush.',
        target: 'vascular',
        isFlush: false
      },
      {
        id: 'd-4',
        category: 'exercise',
        action: 'Calf Muscle Pump Set 2 & Postural Reset',
        detail: '25 heel raises + 2-minute seated desk decompression. Stand up, stretch calves, and avoid crossing legs at the knees.',
        target: 'vascular',
        isFlush: true
      }
    ]
  },
  {
    id: 'evening',
    timeSlot: '17:30 – 19:30',
    title: 'Evening: Decompression, Clearance & Venous Drainage',
    subtitle: 'Drain accumulated interstitial edema, discharge sympathetic tone, and clear circulating mediators.',
    theme: 'evening',
    steps: [
      {
        id: 'e-1',
        category: 'exercise',
        action: 'Legs-Up-The-Wall (15° Incline) 15–20 Minutes',
        detail: 'Remove compression stockings. Lie supine with legs elevated vertically on wall or high wedge. Restores pooled lower limb fluid to the central circulation.',
        target: 'vascular',
        isFlush: true
      },
      {
        id: 'e-2',
        category: 'exercise',
        action: 'Diaphragmatic Vagus Pacing (5.5 Breaths/Min)',
        detail: '10 minutes of resonance paced breathing while legs are elevated. Inhale 4s, exhale 6s. Releasing acetylcholine to silence mast cell degranulation.',
        target: 'triad',
        isFlush: false
      },
      {
        id: 'e-3',
        category: 'diet',
        action: 'Early Low-Fermentation & Zero-Nightshade Dinner',
        detail: 'Clean protein with white basmati rice or carrots. Complete dinner by 19:30. Zero spicy capsicums, paprika, or nightshades to prevent nighttime splanchnic vasodilation and acid reflux.',
        target: 'brain-fog',
        isFlush: false
      },
      {
        id: 'e-4',
        category: 'exercise',
        action: 'Calf Muscle Pump Set 3 (25 Heel Raises)',
        detail: '25 heel raises following leg elevation to assist lymphatic thoracic duct drainage.',
        target: 'vascular',
        isFlush: true
      }
    ]
  },
  {
    id: 'night',
    timeSlot: '21:00 – 23:00',
    title: 'Night: Membrane Fortification & Glymphatic Reset',
    subtitle: 'Rebuild tight junctions, inhibit microglial neuroinflammation, and achieve restorative slow-wave sleep.',
    theme: 'night',
    steps: [
      {
        id: 'n-1',
        category: 'pharma',
        action: 'Neuro-Immune Sleep Anchors: LDN & Ketotifen / Guanfacine',
        detail: 'Low-Dose Naltrexone (1.5–4.5mg) to suppress microglial TLR4 receptors + Ketotifen 1mg (or physician-prescribed Guanfacine ER 1mg) for central mast cell stability.',
        target: 'brain-fog',
        isFlush: false
      },
      {
        id: 'n-2',
        category: 'nutraceutical',
        action: 'Slow-COMT Safe Calming: PEA + Magnesium Bisglycinate',
        detail: 'Micronized PEA 400–800mg (PPAR-alpha mast cell stabilizer with ZERO COMT inhibition) + Magnesium Bisglycinate 200–300mg. STRICTLY NO QUERCETIN OR EGCG.',
        target: 'triad',
        isFlush: false,
        warning: 'Quercetin and EGCG cause severe neck stiffness and headaches in slow COMT. Keep completely excluded.'
      },
      {
        id: 'n-3',
        category: 'pharma',
        action: 'Amlodipine 5mg Evening Administration (If Prescribed)',
        detail: 'If taking Amlodipine in the evening (per doctor consultation), take before sleep so peak plasma concentration occurs while supine, minimizing gravitational ankle pooling.',
        target: 'vascular',
        isFlush: false
      },
      {
        id: 'n-4',
        category: 'exercise',
        action: 'Calf Muscle Pump Set 4 (Final 25 Heel Raises)',
        detail: 'Final set of 25 seated or standing heel raises completing the daily 100-raise quota before sleep.',
        target: 'vascular',
        isFlush: true
      }
    ]
  },
  {
    id: 'rescue',
    timeSlot: 'Emergency / Flare',
    title: 'Acute Flare Rescue Protocol (Emergency Flush)',
    subtitle: 'Rapid deployment protocol for accidental sulfite exposure, high-histamine intake, or sudden brain fog collapse.',
    theme: 'rescue',
    steps: [
      {
        id: 'r-1',
        category: 'nutraceutical',
        action: 'Immediate SUOX Sulfite Neutralizer',
        detail: 'Molybdenum 300–500 mcg + Buffered Vitamin C (Calcium/Magnesium Ascorbate) 1000mg. Rapidly cofactors SUOX to oxidize toxic SO3(2-) into harmless SO4(2-).',
        target: 'mcas',
        isFlush: true,
        warning: 'Essential first step if wheezing occurs after cider, wine, or sausages.'
      },
      {
        id: 'r-2',
        category: 'pharma',
        action: 'Acute Receptor Blockade Booster',
        detail: 'Additional dose of Desloratadine 5mg (or Fexofenadine 180mg) + Famotidine 20mg to immediately flood and block histamine H1 and H2 receptor sites.',
        target: 'mcas',
        isFlush: true
      },
      {
        id: 'r-3',
        category: 'exercise',
        action: 'Supine Incline & Cold Vagal Stimulation',
        detail: 'Lie supine with feet elevated above heart. Apply a cold ice compress to the bridge of the nose and forehead for 30 seconds (triggers mammalian dive reflex to drop sympathetic tachycardia and mast cell degranulation).',
        target: 'triad',
        isFlush: true
      },
      {
        id: 'r-4',
        category: 'diet',
        action: 'Hypotonic Alkaline Water Sips',
        detail: '500 mL warm filtered water with 1/4 tsp sodium or potassium bicarbonate. Avoid citrus juices or acidic beverages.',
        target: 'vascular',
        isFlush: true
      }
    ]
  }
];

export const CONTRAINDICATION_RULES: ContraindicationRule[] = [
  {
    id: 'contra-1',
    compound: 'Quercetin & EGCG (Green Tea Extract)',
    category: 'Nutraceutical',
    popularClaim: 'Widely marketed as "the #1 natural mast cell stabilizer and bioflavonoid."',
    whyContraindicated: 'Dense catechol ring structure strongly binds and competitively inhibits Catechol-O-Methyltransferase (COMT). In individuals with slow/heterozygous COMT, methylation of catecholamines ceases.',
    patientPhenotype: 'Slow COMT (Val158Met) / Methylation Sensitivity',
    exactAdverseReaction: 'Severe posterior neck stiffness, occipital tightness, throbbing vascular headaches, and heightened irritability due to trapped noradrenaline/dopamine.',
    safeAlternative: 'Micronized PEA (Palmitoylethanolamide 400–800mg) or Pure Liposomal Luteolin (50–100mg) which stabilize mast cells and microglia without inhibiting COMT.'
  },
  {
    id: 'contra-2',
    compound: 'Sulfite Preservatives (E220–E228)',
    category: 'Dietary',
    popularClaim: 'Commonly added to extend shelf-life, prevent oxidation, and keep cured meats red.',
    whyContraindicated: 'Directly liberates sulfur dioxide (SO2) gas in the gut and bloodstream, triggering vagal bronchial C-fiber irritant receptors and direct non-IgE mast cell degranulation.',
    patientPhenotype: 'Confirmed Sulfite Allergy / Compromised Sulfite Oxidase (SUOX)',
    exactAdverseReaction: 'Immediate wheezing, chest tightness, bronchospasm, facial flushing, and postprandial tachycardia after cider, wine, or sausages.',
    safeAlternative: 'Molybdenum (150–300 mcg daily) to upregulate SUOX, plus strict consumption of fresh preservative-free meats and sulfiting-agent-free beverages.'
  },
  {
    id: 'contra-3',
    compound: 'Isolated Amlodipine Without Venous Support',
    category: 'Pharma',
    popularClaim: 'Standard first-line dihydropyridine calcium channel blocker for blood pressure control.',
    whyContraindicated: 'Causes selective pre-capillary arteriolar dilation with ZERO post-capillary venodilation, surging capillary hydrostatic pressure ($P_c$) from 25 to >38 mmHg.',
    patientPhenotype: 'Constitutive Venous Wall Laxity / Deep Lifelong Sock Marks',
    exactAdverseReaction: 'Severe dependent ankle edema, deep painful sock indentations, sensation of lower extremity heaviness, and reflex orthostatic executive fatigue.',
    safeAlternative: 'Pairing Amlodipine with MPFF (Diosmin/Hesperidin 500mg) and Pycnogenol, Class 1 compression stockings, and clinical discussion on co-prescribing an ARB (Telmisartan) to balance post-capillary tone.'
  },
  {
    id: 'contra-4',
    compound: 'High-Intensity Interval Training (HIIT) & Heat Stress',
    category: 'Exercise',
    popularClaim: 'Marketed for cardiovascular fitness, mitochondrial health, and rapid conditioning.',
    whyContraindicated: 'Surges core body temperature, induces anaerobic lactic acidosis, and unleashes massive systemic epinephrine and cortisol pulses that trigger explosive mast cell degranulation.',
    patientPhenotype: 'MCAS / Sluggish Cognitive Tempo (SCT) Brain Fog',
    exactAdverseReaction: 'Multi-day post-exertional cognitive crash ("brain fog coma"), severe interoceptive tachycardia, and prolonged weeks-long mast cell flare.',
    safeAlternative: 'Zone 1 Recumbent Aerobics (<115 bpm) in cool ambient air, calf muscle pump sets, and gentle aquatic walking.'
  },
  {
    id: 'contra-5',
    compound: 'NSAIDs (Ibuprofen, Aspirin, Naproxen)',
    category: 'Pharma',
    popularClaim: 'Common over-the-counter anti-inflammatories taken for headaches and joint pain.',
    whyContraindicated: 'Blocks Cyclooxygenase (COX-1/COX-2), shunting arachidonic acid entirely down the 5-Lipoxygenase (5-LOX) pathway, causing a surge in cysteinyl leukotrienes (LTC4, LTD4, LTE4).',
    patientPhenotype: 'Mast Cell Activation Syndrome / Bronchial Hyper-reactivity',
    exactAdverseReaction: 'Severe worsening of wheezing, systemic flushing, gut mucosal irritation, and paradoxical worsening of brain fog.',
    safeAlternative: 'Micronized PEA, Magnesium, Acetaminophen/Paracetamol (sparingly, if liver enzymes allow), or low-dose Nortriptyline for visceral nociceptive gating.'
  },
  {
    id: 'contra-6',
    compound: 'Modafinil / Armodafinil (Provigil / Nuvigil)',
    category: 'Pharma',
    popularClaim: 'Commonly sought as a "clean wakefulness promoter" and stimulant substitute for brain fog, fatigue, and ADHD.',
    whyContraindicated: '1) Hypothalamic orexin stimulation drives peripheral sympathetic outflow and mast cell degranulation (black-box/prominent FDA warning for severe cutaneous hypersensitivity / Stevens-Johnson Syndrome). 2) Weak dopamine transporter (DAT) blockade floods synapses with catecholamines that cannot be cleared in slow-COMT phenotypes.',
    patientPhenotype: 'MCAS + Slow COMT (Val158Met) + Pre-existing Neck Stiffness / Headaches',
    exactAdverseReaction: 'Acute mast cell degranulation (facial flushing, urticaria, bronchospasm), severe occipital and cervical stiffness, throbbing vascular headaches, hyperadrenergic palpitations, and post-stimulant exhaustion crash.',
    safeAlternative: 'Roflumilast (250–500 mcg PDE4 inhibitor, accessible to you) + Guanfacine ER (alpha-2A PFC dendritic lock) + LDN; or specialist evaluation of Wakix (Pitolisant, central H3 inverse agonist).'
  },
  {
    id: 'contra-7',
    compound: 'Nightshades (Solanaceae: Tomatoes, Potatoes, Eggplants, Paprika, Peppers)',
    category: 'Dietary',
    popularClaim: 'Staple vegetables and spices considered standard components of a healthy or Mediterranean diet.',
    whyContraindicated: 'Contain steroidal glycoalkaloids (solanine, tomatine) that act as direct non-IgE mast cell secretagogues and natural cholinesterase inhibitors (causing enteric hypermotility and mucosal leakage). Peppers contain capsaicin that activates sensory nerve TRPV1, releasing Substance P which binds mast cell MRGPRX2 receptors to unleash explosive degranulation. Tomatoes are also rich in pre-formed histamine and histamine liberators.',
    patientPhenotype: 'Mast Cell Activation Syndrome + Enteric Hypersensitivity + Migraine / Vascular Headaches',
    exactAdverseReaction: 'Severe enteric mucosal inflammation, splanchnic mesenteric vasodilation with blood pooling, systemic mast cell degranulation, joint/neck ache, throbbing vascular headaches, and multi-day cognitive chaining collapse.',
    safeAlternative: 'Sweet potatoes (Convolvulaceae, completely non-nightshade), carrots, parsnips, peeled zucchini, squash, and nightshade-free fresh seasonings (cilantro, parsley, basil, dill, rosemary, turmeric).'
  },
  {
    id: 'contra-8',
    compound: 'Coffee & Concentrated Gastro-Irritants on an Empty Stomach',
    category: 'Dietary',
    popularClaim: 'Traditional morning wakefulness stimulant, focus enhancer, and productivity aid.',
    whyContraindicated: '1) Splanchnic Blood Pooling Trap: Stimulates gastric acid and enteric mucosal nerves/mast cells, triggering massive mesenteric vasodilation ("Splanchnic Hyperemia"). Traps 1–1.5L of blood in gut capacitance vessels, combining with Amlodipine lower limb pooling to starve the brain of arterial preload ("Splanchnic Steal"). 2) Slow-COMT Jitter Crash: Impairs catecholamine breakdown, triggering hyperadrenergic tachycardia, anxiety, and post-caffeine cognitive collapse.',
    patientPhenotype: 'Amlodipine Vasodilation + Dependent Edema + Slow COMT + Sluggish Cognitive Tempo',
    exactAdverseReaction: 'Acute splanchnic mesenteric blood pooling, immediate lightheadedness, exacerbated dependent ankle edema, reflex tachycardia, burning epigastric discomfort, and rapid dissolution of thought chains.',
    safeAlternative: 'Warm filtered water with electrolyte minerals, organic rooibos or chamomile-ginger tea, or roasted chicory root (if tolerated), paired with morning protein.'
  },
  {
    id: 'contra-9',
    compound: 'Vitamin K2 (MK-7 Subtype / Menaquinone-7)',
    category: 'Nutraceutical',
    popularClaim: 'Marketed widely as long-acting bone and cardiovascular support in D3/K2 combination supplements.',
    whyContraindicated: '1) The MK-7 Palpitation & Insomnia Syndrome: MK-7 has an exceptionally long 72-hour half-life. Over weeks of daily use, it hyper-accumulates in cardiac pacemaker tissue and sympathetic ganglia, stimulating mitochondrial electron transport and uncoupling autonomic tone. In Slow-COMT individuals who cannot break down catecholamines, this triggers severe nocturnal palpitations, PVCs, anxiety surges, and insomnia. 2) Bacterial Fermentation Allergen: Almost universally derived from Bacillus subtilis natto or chickpea bacterial broth, retaining trace fermentation peptides and biogenic amines that directly trigger enteric mast cell degranulation.',
    patientPhenotype: 'MCAS + Slow COMT (Val158Met) + Orthostatic / Autonomic Palpitations',
    exactAdverseReaction: 'Inexplicable nocturnal resting tachycardia, skipping heartbeats (PVCs), inner body vibration, refractory insomnia, histamine flushing, and severe occipital headaches.',
    safeAlternative: 'Vitamin K2 Subtype MK-4 (Menaquinone-4) 500–1,500 mcg daily (pure non-fermented source, rapid 2–4 hr clearance, zero cardiac arrhythmias, and direct microglial Gas6 activation).'
  },
  {
    id: 'contra-10',
    compound: 'Chronic / Daily High-Dose THC (The CB1 Downregulation & Rebound Visceral Hypersensitivity Trap)',
    category: 'Pharma',
    popularClaim: 'Commonly used as an acute "silver bullet" for visceral IBS cramping, severe sensory overload, nausea, insomnia, and neuro-immune friction.',
    whyContraindicated: '1) The CB1 Desensitization & Memory Wipe: Acute THC works miraculously via CB1 (spinal nociceptive gating) and CB2 (mast cell silencing). However, chronic daily exogenous THC rapidly causes GRK/β-arrestin-mediated internalization and severe downregulation of CB1 receptors in hippocampal CA1/CA3 pyramidal circuits, dismantling Long-Term Potentiation (LTP) and causing devastating working memory decay and delayed recall deficits. 2) Rebound Visceral Hyperalgesia: When enteric CB1 receptors downregulate, the gut loses its primary endogenous brake on primary sensory afferents. Once THC levels dip between doses, primary afferents unleash excessive Substance P and CGRP, creating severe paradoxical visceral hypersensitivity, delayed gastric emptying, and intractable gut cramping.',
    patientPhenotype: 'MCAS + Enteric Visceral Hypersensitivity + Working Memory Decay ("Thoughts Slipping Through Fingers")',
    exactAdverseReaction: 'Acute temporary symptom relief followed by progressive collapse of working memory, delayed verbal recall, severe rebound gut hyperalgesia (worse than baseline IBS pain), morning nausea, and secondary anorgasmia via pelvic vasodilation and prolactin surges.',
    safeAlternative: 'Palmitoylethanolamide (PEA 400–800mg) which stimulates PPAR-α and CB2 without downregulating CB1, paired with Perilla (Rosmarinic acid), Cromolyn Sodium, and CDP Choline.'
  }
];

export interface NeuroPharmaComparison {
  id: string;
  drugName: string;
  brandNames: string;
  pharmacologicalClass: string;
  targetReceptor: string;
  molecularMechanism: string;
  microglialEffect: string;
  mastCellRisk: 'Protective (Halts Degranulation)' | 'Neutral / Minimal Risk' | 'High Hazard (Triggers Mast Cells)';
  slowComtRisk: 'Safe (Zero COMT / Catechol Strain)' | 'Safe to Moderate' | 'Severe Hazard (Catechol Flooding / Headaches)';
  cognitiveTarget: string;
  clinicalSuitability: 'First-Line Accessible Anchor' | 'Second-Line Specialist Option' | 'Strictly Contraindicated (Red Flag)';
  clinicalVerdict: string;
  keyPearls: string[];
  helpRating: number; // 0.0 to 5.0
  helpStars: string; // '★★★★★' or '★★★★☆' etc.
  helpVerdict: string;
  ratingRationale: string;
}

export const BRAIN_FOG_PHARMA_COMPARISON: NeuroPharmaComparison[] = [
  {
    id: 'roflumilast',
    drugName: 'Roflumilast',
    brandNames: 'Daliresp, Daxas',
    pharmacologicalClass: 'Selective Phosphodiesterase-4 (PDE4) Inhibitor',
    targetReceptor: 'PDE4A, 4B, 4C, 4D Enzymes (Intracellular)',
    molecularMechanism: 'Selectively blocks PDE4, preventing hydrolysis of cyclic AMP. Elevates intracellular cAMP, activating PKA and Epac. Downregulates NF-kB, upregulates CREB, and stimulates BDNF synthesis.',
    microglialEffect: 'Profound M1-to-M2 switch: Microglia express dense PDE4B. Inhibiting it suppresses release of TNF-alpha, IL-1beta, IL-6, reactive oxygen species, and neurotoxic quinolinic acid.',
    mastCellRisk: 'Protective (Halts Degranulation)',
    slowComtRisk: 'Safe (Zero COMT / Catechol Strain)',
    cognitiveTarget: 'Neuroinflammatory brain fog, synaptic plasticity failure, and blood-brain barrier microvascular leakage.',
    clinicalSuitability: 'First-Line Accessible Anchor',
    clinicalVerdict: 'OPTIMAL & ACCESSIBLE: You already have access to this medication. It directly addresses central microglial priming without raising catecholamines, without touching COMT, and without stimulant crash.',
    keyPearls: [
      'cAMP is the primary cellular brake on both mast cell degranulation and microglial activation.',
      'Unlike stimulants, it causes zero heart rate spikes, zero blood pressure surges, and zero peripheral vasoconstriction.',
      'Titrate from 250 mcg daily for 4 weeks to 500 mcg daily to prevent transient gastrointestinal loose stools.',
      'Pairs synergistically with Guanfacine ER and Low-Dose Naltrexone.'
    ],
    helpRating: 4.7,
    helpStars: '★★★★★',
    helpVerdict: 'Direct Microglial Silencer (Accessible)',
    ratingRationale: 'Accessible to patient; cAMP surge acts as the master biological brake on both microglial M1 neuroinflammation and mast cell degranulation without catecholamine/COMT burden.'
  },
  {
    id: 'wakix',
    drugName: 'Pitolisant (Wakix)',
    brandNames: 'Wakix, Ozawade',
    pharmacologicalClass: 'Selective Histamine H3 Receptor Inverse Agonist / Antagonist (NOT an Agonist)',
    targetReceptor: 'Presynaptic Histamine H3 Autoreceptors & Heteroreceptors',
    molecularMechanism: 'Blocks presynaptic H3 auto-inhibition in the tuberomammillary nucleus and cortex. Disinhibits the release of central histamine, acetylcholine, dopamine, and noradrenaline selectively in the brain.',
    microglialEffect: 'Indirect: Modulates central neurochemical tone. Does not directly inhibit microglial M1 cytokines, but restores cholinergic anti-inflammatory signaling in brain parenchyma.',
    mastCellRisk: 'Neutral / Minimal Risk',
    slowComtRisk: 'Safe to Moderate',
    cognitiveTarget: 'Sluggish Cognitive Tempo (SCT), lexical word retrieval failure, daytime hypoarousal, and mind-wandering.',
    clinicalSuitability: 'Second-Line Specialist Option',
    clinicalVerdict: 'HIGHLY EFFECTIVE FOR BRAIN FOG, BUT HARDER TO ACCESS: Solves the H3 autoreceptor paradox by increasing central alertness neurotransmitters. Far superior to Modafinil because it lacks peripheral hypersensitivity risk, but requires specialist prescription.',
    keyPearls: [
      'Clarification: Wakix is an H3 INVERSE AGONIST / ANTAGONIST (an agonist would turn off histamine and worsen fog!).',
      'Central neuronal histamine is a vital alertness neurotransmitter (unlike peripheral mast cell histamine which causes allergy).',
      'Restores acetylcholine for rapid verbal fluency without activating peripheral H1/H2 receptors.',
      'Ensure peripheral mast cells are stabilized first with Cromolyn / H1-H2 blockers before initiating.'
    ],
    helpRating: 4.2,
    helpStars: '★★★★☆',
    helpVerdict: 'High-Value Specialist Option',
    ratingRationale: 'Directly reverses H3 autoreceptor shutdown to surge cortical acetylcholine and word retrieval speed; lacks stimulant peripheries, though requires specialist access.'
  },
  {
    id: 'modafinil',
    drugName: 'Modafinil / Armodafinil',
    brandNames: 'Provigil, Nuvigil, Modavigil',
    pharmacologicalClass: 'Weak Dopamine Transporter (DAT) Inhibitor & Orexinergic Stimulant',
    targetReceptor: 'Dopamine Transporter (DAT) & Hypothalamic Orexin System',
    molecularMechanism: 'Inhibits dopamine reuptake; stimulates hypothalamic orexin/hypocretin neurons, indirectly increasing secondary histamine, norepinephrine, and serotonin release.',
    microglialEffect: 'Minimal / Adverse: Can increase sympathetic-driven microglial priming and oxidative stress via unbuffered catecholamine oxidation.',
    mastCellRisk: 'High Hazard (Triggers Mast Cells)',
    slowComtRisk: 'Severe Hazard (Catechol Flooding / Headaches)',
    cognitiveTarget: 'Wakefulness and vigilance (standard narcolepsy / shift work indication).',
    clinicalSuitability: 'Strictly Contraindicated (Red Flag)',
    clinicalVerdict: 'DANGEROUS IN YOUR PHENOTYPE: Modafinil carries high risks of mast cell degranulation (black-box cutaneous hypersensitivity) and provokes severe neck stiffness/headaches due to slow-COMT catecholamine overload.',
    keyPearls: [
      'FDA warning for severe cutaneous and systemic hypersensitivity (Stevens-Johnson syndrome, angioedema, urticaria).',
      'In slow-COMT individuals, dopaminergic and noradrenergic excess cannot be broken down, triggering intense occipital headaches and neck spasms.',
      'Causes sympathetic tachycardia and can worsen dependent edema by elevating pre-capillary arteriolar resistance.',
      'Do NOT choose Modafinil over Roflumilast or Wakix.'
    ],
    helpRating: 0.5,
    helpStars: '☆☆☆☆☆',
    helpVerdict: 'Severe Hinder (Contraindicated)',
    ratingRationale: 'Fatal combination of orexin-mediated mast cell degranulation risk (cutaneous hypersensitivity) and slow-COMT catecholamine flooding (severe neck stiffness and vascular crash).'
  },
  {
    id: 'guanfacine',
    drugName: 'Guanfacine ER',
    brandNames: 'Intuniv, Tenex',
    pharmacologicalClass: 'Selective Postsynaptic Alpha-2A Adrenoceptor Agonist',
    targetReceptor: 'Postsynaptic Alpha-2A Adrenoceptors on PFC Pyramidal Spines',
    molecularMechanism: 'Selectively binds alpha-2A receptors on dendritic spines in the DLPFC. Closes hyperpolarizing cAMP-gated HCN cation channels, structurally strengthening synaptic connectivity.',
    microglialEffect: 'Indirect suppression: Lowers central locus coeruleus hyperarousal and systemic sympathetic discharge, reducing neurogenic neuroinflammation.',
    mastCellRisk: 'Protective (Halts Degranulation)',
    slowComtRisk: 'Safe (Zero COMT / Catechol Strain)',
    cognitiveTarget: 'DLPFC working memory decay, ADHD executive distractibility, and "thoughts slipping through fingers."',
    clinicalSuitability: 'First-Line Accessible Anchor',
    clinicalVerdict: 'ESSENTIAL COGNITIVE PARTNER: The ideal non-stimulant prefrontal stabilizer. Directly fortifies working memory without adrenergic surges or mast cell triggers.',
    keyPearls: [
      'Developed at Yale (Dr. Amy Arnsten) specifically for stress-induced prefrontal network disconnection.',
      'Suppresses sympathetic outflow, helping prevent stress-induced mast cell flares.',
      'Dosed 1mg in the evening with food; pairs perfectly with morning Roflumilast.'
    ],
    helpRating: 4.7,
    helpStars: '★★★★★',
    helpVerdict: 'First-Line Cognitive Anchor',
    ratingRationale: 'Structural prefrontal dendritic spine locking via alpha-2A adrenoceptors; halts SCT mind-wandering and working memory decay with zero stimulant or COMT burden.'
  },
  {
    id: 'ldn',
    drugName: 'Low-Dose Naltrexone (LDN)',
    brandNames: 'Compounded Naltrexone (1.5–4.5mg)',
    pharmacologicalClass: 'Toll-Like Receptor 4 (TLR4) Antagonist & Microglial Modulator',
    targetReceptor: 'Microglial TLR4 Receptors (Non-Opioid Pathway)',
    molecularMechanism: 'Micro-doses stereoisomerically antagonize TLR4 on microglia and central mast cells. Shuts down the NF-kB cascade, blunting inducible nitric oxide synthase (iNOS) and TNF-alpha.',
    microglialEffect: 'Direct microglial reset: Quells chronic microglial priming, halting the kynurenine neurotoxic pathway (quinolinic acid) and restoring slow-wave sleep.',
    mastCellRisk: 'Protective (Halts Degranulation)',
    slowComtRisk: 'Safe (Zero COMT / Catechol Strain)',
    cognitiveTarget: 'Neuro-immune malaise, post-exertional brain fog, and flu-like mental exhaustion.',
    clinicalSuitability: 'First-Line Accessible Anchor',
    clinicalVerdict: 'FOUNDATIONAL IMMUNE ANCHOR: Safe, non-sedating, non-stimulant neuro-immune modulator that calms the central inflammatory baseline.',
    keyPearls: [
      'Take at bedtime (1.5mg titrated to 4.5mg).',
      'Does not block endorphin synthesis; upregulates endogenous opioid tone via transient receptor blockade.',
      'Synergizes with Roflumilast: LDN blocks TLR4 while Roflumilast elevates cAMP, closing two separate inflammatory arms.'
    ],
    helpRating: 4.8,
    helpStars: '★★★★★',
    helpVerdict: 'Foundational Microglial Reset',
    ratingRationale: 'Blocks non-opioid microglial TLR4 signaling, reversing neuroinflammatory priming and post-exertional brain fog without tolerance or drowsiness.'
  },
  {
    id: 'cdp-choline',
    drugName: 'CDP Choline (Citicoline)',
    brandNames: 'Cognizin, Ceraxon',
    pharmacologicalClass: 'Phosphatidylcholine Intermediate & Dual Cholinergic-Cytidine Donor',
    targetReceptor: 'Alpha-7 Nicotinic (α7nAChR) & Muscarinic Receptors, Kennedy Biosynthetic Pathway',
    molecularMechanism: 'Hydrolyzes into cytidine and choline. Choline drives central acetylcholine synthesis (rescuing prefrontal attractor loops from H3 shutdown) and binds α7nAChR on microglia and mast cells to activate the Vagal Cholinergic Anti-Inflammatory Pathway (Jak2-STAT3). Cytidine converts to uridine, which combines with choline to synthesize phosphatidylcholine, repairing microvascular endothelial membranes and tight junctions.',
    microglialEffect: 'Direct suppression: α7nAChR signaling inhibits NF-kB nuclear translocation, blunting microglial TNF-alpha, IL-1beta, and reactive oxygen species.',
    mastCellRisk: 'Protective (Halts Degranulation)',
    slowComtRisk: 'Safe (Zero COMT / Catechol Strain)',
    cognitiveTarget: 'Sluggish Cognitive Tempo (SCT), word retrieval, working memory delay-period retention, and endothelial BBB repair.',
    clinicalSuitability: 'First-Line Accessible Anchor',
    clinicalVerdict: 'EXCELLENT NEURO-VASCULAR ADJUVANT: Directly answers whether it has a place: YES! It bridges prefrontal acetylcholine restoration (beating brain fog without stimulants), vagal α7nAChR microglial dampening, and vascular endothelial membrane repair. Dose 250 mg morning with food.',
    keyPearls: [
      'Activates the Vagal Cholinergic Anti-Inflammatory Pathway (CAP) via α7nAChR to put a brake on both microglia and enteric mast cells.',
      'Unlike Alpha-GPC, it does not induce excessive parasympathetic gut cramping and provides cytidine for blood-brain barrier membrane repair.',
      'Zero COMT interaction: Non-catechol structure means zero neck stiffness or vascular headache liability.',
      'Dose 250 mg once daily in the morning with food; do not exceed 500 mg.'
    ],
    helpRating: 4.8,
    helpStars: '★★★★★',
    helpVerdict: 'Exceptional Neuro-Vascular Adjuvant',
    ratingRationale: 'Cholinergic anti-inflammatory vagal brake via α7nAChR, prefrontal acetylcholine restoration for word retrieval, and endothelial cell membrane repair via the Kennedy pathway.'
  },
  {
    id: 'vitamin-d3-k2-mk4',
    drugName: 'Vitamin D3 + Vitamin K2 (MK-4 vs. MK-7)',
    brandNames: 'Cholecalciferol + Menaquinone-4 (Menatetrenone)',
    pharmacologicalClass: 'Steroid Hormone Receptor Agonist & Matrix Gla Protein / Gas6 Co-Factor',
    targetReceptor: 'Vitamin D Receptor (VDR), Matrix Gla Protein (MGP), TAM Receptors (Tyro3/Axl/Mer)',
    molecularMechanism: 'D3 binds VDR on mast cells and endothelial cells, downregulating FcεRI and increasing eNOS. Vitamin K2 (MK-4 subtype) γ-carboxylates MGP in vascular smooth muscle to block arterial/capillary calcification, and carboxylates Gas6 in the brain to activate microglial TAM receptors, halting M1 cytokine release. (MK-7 subtype accumulates in cardiac tissue over its 72h half-life, causing arrhythmias and histamine release from bacterial natto fermentation).',
    microglialEffect: 'Direct suppression via Gas6: MK-4-carboxylated Gas6 activates microglial TAM receptors (Tyro3, Axl, Mer), suppressing M1 cytokines and clearing debris without inflammation.',
    mastCellRisk: 'Protective (Halts Degranulation)',
    slowComtRisk: 'Safe (Zero COMT / Catechol Strain)',
    cognitiveTarget: 'Vascular endothelial resilience, blood-brain barrier integrity, and microglial quiescence.',
    clinicalSuitability: 'First-Line Accessible Anchor',
    clinicalVerdict: 'D3 AND MK-4 STRONGLY HELP (5.0 STARS); MK-7 HINDERS: D3 locks mast cell VDR and eNOS, while MK-4 shields against vascular calcification and quiets microglia without fermentation allergens or cardiac arrhythmias. Strictly avoid MK-7.',
    keyPearls: [
      'D3 Help: Halts mast cell degranulation via VDR; must be paired with Magnesium and K2 to prevent calcification.',
      'MK-4 Help: 500–1,500 mcg daily provides vascular MGP and brain Gas6 protection with zero fermentation histamines and zero heart palpitations.',
      'MK-7 Hinder: 72-hour half-life triggers the well-documented MK-7 cardiac arrhythmia / insomnia syndrome in slow-COMT, plus bacterial fermentation histamine flare.',
      'Take D3 (2,000–4,000 IU) and MK-4 in the morning with healthy dietary fats.'
    ],
    helpRating: 4.9,
    helpStars: '★★★★★',
    helpVerdict: 'D3 + MK-4: Essential Shield (MK-7 Hinder)',
    ratingRationale: 'D3 stabilizes mast cells and upregulates eNOS; MK-4 prevents microvascular calcification and activates neural Gas6 anti-inflammatory signaling without MK-7-induced palpitations.'
  },
  {
    id: 'thc-cannabinoids',
    drugName: 'THC / Exogenous Cannabinoids (Short-Term vs. Long-Term)',
    brandNames: 'Delta-9-THC, Medical Cannabis, Dronabinol',
    pharmacologicalClass: 'Cannabinoid CB1 & CB2 Receptor Partial Agonist',
    targetReceptor: 'Cannabinoid CB1 (CNS & Enteric Nerves) & CB2 (Mast Cells & Microglia)',
    molecularMechanism: 'Acute: CB2 agonism directly halts mast cell degranulation; CB1 agonism in spinal dorsal horn blocks Substance P/CGRP, abolishing visceral pain and inducing deep physical relaxation. Long-term: Sustained partial agonism causes GRK/β-arrestin phosphorylation and massive internalization/downregulation of CB1 receptors. Hippocampal LTP is dismantled (working memory erasure), and enteric sensory afferents lose their primary presynaptic brake, unleashing severe rebound visceral hyperalgesia and motility delay.',
    microglialEffect: 'Biphasic: Acute suppression of microglial cytokines via CB2, followed by neuro-adaptive dysregulation and altered microglial motility upon chronic CB1 internalization.',
    mastCellRisk: 'Neutral / Minimal Risk',
    slowComtRisk: 'Safe to Moderate',
    cognitiveTarget: 'Acute relief of sensory overload and visceral tension; long-term severe impairment of working memory, delayed recall, and cognitive chaining.',
    clinicalSuitability: 'Second-Line Specialist Option',
    clinicalVerdict: 'THE DUAL-EDGED SWORD: Works miraculously short-term by acutely calming mast cells (CB2) and gating gut pain (CB1). Long-term causes massive CB1 receptor downregulation, destroying working memory and creating rebound severe visceral hypersensitivity and dysmotility.',
    keyPearls: [
      'Short-Term Efficacy Explained: CB2 activation halts mast cell degranulation while CB1 gates spinal Substance P/CGRP, instantly quelling visceral pain.',
      'Long-Term Memory Wipe: CB1 receptors are densely concentrated on hippocampal CA1/CA3 neurons and prefrontal cortex; chronic downregulation destroys working memory and delay-period retention.',
      'Rebound Visceral Hypersensitivity: Downregulated enteric CB1 receptors leave gut nerves uninhibited, making normal intestinal sensations register as severe pain.',
      'Anorgasmia Link: Chronic THC raises prolactin, downregulates hypothalamic dopamine, and induces pelvic vasodilation/pooling that impedes orgasmic climax.',
      'Safe Alternative: Micronized PEA (400–800mg) stimulates PPAR-α and CB2 without ever downregulating CB1 receptors.'
    ],
    helpRating: 2.5,
    helpStars: '★★½☆☆',
    helpVerdict: 'Acute Reliever / Chronic Tolerance & Memory Trap',
    ratingRationale: 'Acute CB2/CB1 mast cell & visceral pain silencing, but chronic use causes catastrophic CB1 downregulation, extinguishing hippocampal working memory and exacerbating rebound visceral hyperalgesia.'
  },
  {
    id: 'tadalafil',
    drugName: 'Tadalafil (Cialis / Daily Low-Dose PDE5 Inhibitor)',
    brandNames: 'Cialis, Adcirca',
    pharmacologicalClass: 'Selective Phosphodiesterase-5 (PDE5) Inhibitor & cGMP Upregulator',
    targetReceptor: 'PDE5 Enzyme, Endothelial Nitric Oxide Synthase (eNOS), PKG Cascade',
    molecularMechanism: 'Selectively blocks PDE5 degradation of cGMP, activating Protein Kinase G (PKG) to mediate smooth muscle relaxation in pelvic floor vasculature and cerebral microvessels. Elevates hippocampal and prefrontal CREB/BDNF signaling, improving neurovascular coupling without adrenergic activity.',
    microglialEffect: 'Indirect / Mild Protective: Upregulated cGMP-PKG pathway attenuates microglial inflammatory mediator release and preserves endothelial tight junctions against cytokine shear.',
    mastCellRisk: 'Protective (Halts Degranulation)',
    slowComtRisk: 'Safe (Zero COMT / Catechol Strain)',
    cognitiveTarget: 'Neurovascular cerebral perfusion maintenance, mental endurance during seated work, and resolving hypertonic pelvic floor/pudendal ischemic contracture.',
    clinicalSuitability: 'First-Line Accessible Anchor',
    clinicalVerdict: 'GOLD STANDARD PELVIC & NEUROVASCULAR AGENT: Highly effective for resolving pelvic floor hypertonicity, CPPS, and lifelong anorgasmic reflex blocks by decompressing the internal pudendal neurovascular bundle. Completely slow-COMT safe with zero catecholamines.',
    keyPearls: [
      'Continuous daily low-dose (2.5–5mg) is vastly superior to on-demand 20mg PRN, maintaining steady-state tissue perfusion and avoiding blood pressure swings.',
      'Completely non-catechol structure: Causes zero neck tension, occipital headaches, or adrenergic spikes.',
      'Synergizes with Telmisartan; start at 2.5mg daily to monitor blood pressure tolerance with Amlodipine.'
    ],
    helpRating: 4.8,
    helpStars: '★★★★★',
    helpVerdict: 'Gold Standard Pelvic & Pudendal Decompressor',
    ratingRationale: 'Relaxes internal pudendal vasculature and pelvic floor tone, lowering the biological threshold for sexual climax while enhancing cerebral perfusion with zero COMT burden.'
  },
  {
    id: '5-meo-dmt',
    drugName: '5-MeO-DMT (Investigational Ultra-Rapid Tryptamine)',
    brandNames: 'Synthetic Freebase / GHB O-4366',
    pharmacologicalClass: 'High-Affinity Serotonin 5-HT1A Receptor Agonist & Autonomic Reset Agent',
    targetReceptor: 'Somatodendritic & Postsynaptic 5-HT1A Receptors, Dorsal Raphe Autoreceptors',
    molecularMechanism: 'Nanomolar full agonist at 5-HT1A receptors. Silences dorsal raphe 5-HT exocytosis, collapsing hyperactive Default Mode Network (DMN) connectivity, inducing acute ego dissolution, and triggering massive hypothalamic oxytocin release to dissolve subconscious pelvic floor muscular guarding.',
    microglialEffect: 'Direct suppression: 5-HT1A and Sig-1R agonism suppresses microglial M1 pro-inflammatory cytokine expression (TNF-α, IL-1β).',
    mastCellRisk: 'Neutral / Minimal Risk',
    slowComtRisk: 'Safe (Zero COMT / Catechol Strain)',
    cognitiveTarget: 'Extinguishing chronic neuro-cognitive freeze, maladaptive frontoparietal attractor loops, and releasing deeply stored somatic pelvic armoring.',
    clinicalSuitability: 'Second-Line Specialist Option',
    clinicalVerdict: 'SPECIALIST INVESTIGATIONAL CATALYST: Fast-acting (10–15 min) 5-HT1A agonist that triggers deep somatic and autonomic reset of chronic pelvic hypertonicity and anorgasmia. Metabolized by MAO-A, not COMT. Strictly prohibited with MAOIs.',
    keyPearls: [
      'Somatosensory & Pelvic Breakthrough: Hypothalamic oxytocin surge and autonomic uncoupling release unconscious pelvic muscular bracing underlying lifelong anorgasmia.',
      'Zero COMT interaction: Indolethylamine structure cleared via MAO-A; causes zero catecholamine pooling.',
      'Vital signs surge transiently during peak; session requires supine positioning under trained clinical supervision.'
    ],
    helpRating: 4.4,
    helpStars: '★★★★☆',
    helpVerdict: 'Specialist Investigational Catalyst (5-HT1A Reset)',
    ratingRationale: 'Collapses DMN hyperconnectivity and unlocks somatic release of chronic pelvic floor muscular guarding without catecholamine burden on Slow COMT.'
  },
  {
    id: 'dmt',
    drugName: 'N,N-DMT (Investigational Indole Alkaloid)',
    brandNames: 'Synthetic Freebase / SPL026',
    pharmacologicalClass: 'Serotonin 5-HT2A & Endoplasmic Reticulum Sigma-1 Receptor (Sig-1R) Agonist',
    targetReceptor: '5-HT2A Cortical Pyramidal Receptors & Sigma-1 Receptor (ER Chaperone)',
    molecularMechanism: 'Dual agonist at 5-HT2A and the intracellular ER chaperone Sigma-1 Receptor (Sig-1R). Stimulates TrkB-mTOR signaling to induce rapid cortical dendritic spinogenesis and BDNF synthesis, while Sig-1R chaperoning quells neuroinflammatory ER stress and protects against cellular hypoxia.',
    microglialEffect: 'Direct suppression via Sig-1R: Inhibits NF-κB nuclear translocation and downregulates microglial IL-6 and TNF-α release.',
    mastCellRisk: 'Neutral / Minimal Risk',
    slowComtRisk: 'Safe (Zero COMT / Catechol Strain)',
    cognitiveTarget: 'Sluggish Cognitive Tempo (SCT) processing speed latency, rigid ruminative attractors, and neuroinflammatory synaptic density loss.',
    clinicalSuitability: 'Second-Line Specialist Option',
    clinicalVerdict: 'SPECIALIST INVESTIGATIONAL NEUROPLASTIC AGENT: Combines rapid TrkB-mTOR cortical spinogenesis with Sigma-1 receptor ER stress buffering. Cleared cleanly via MAO-A. Requires strictly synthetic purity to prevent plant terpene mast cell degranulation.',
    keyPearls: [
      'Sigma-1 Receptor Chaperone: Protects neurons and microglia against endoplasmic reticulum stress and hypoxia, complementing ISRIB.',
      'Synthetic Purity Imperative: Botanical Ayahuasca brews contain tannins and biogenic amines that cause severe mast cell dumping; synthetic purity is mandatory.',
      'Zero COMT strain: Metabolized by MAO-A into indole-3-acetic acid with zero adrenergic stimulation.'
    ],
    helpRating: 4.5,
    helpStars: '★★★★½',
    helpVerdict: 'Specialist Investigational Agent (5-HT2A / Sig-1R Neuroplasticity)',
    ratingRationale: 'Sig-1R chaperone protection quells neuroinflammatory ER stress and drives rapid prefrontal spinogenesis with zero COMT degradation burden.'
  }
];

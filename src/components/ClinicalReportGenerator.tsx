import React, { useState } from 'react';
import { FileText, Copy, Check, Printer, Sparkles, Stethoscope, AlertTriangle, ShieldCheck } from 'lucide-react';

export const ClinicalReportGenerator: React.FC = () => {
  const [sctChecked, setSctChecked] = useState<string[]>([
    'Prominent "tip-of-the-tongue" states and slow word retrieval in conversation',
    'IQ Discrepancy: Superior subtests (125-140) vs 108 Processing Speed with "started fast, but faded" test behavior',
    'Subjective feeling of mental tempo operating at 0.5x speed'
  ]);

  const [adhdChecked, setAdhdChecked] = useState<string[]>([
    'Working memory buffers clearing out mid-sentence when interrupted',
    'Difficulty initiating or sequencing multi-step tasks'
  ]);

  const [mcasChecked, setMcasChecked] = useState<string[]>([
    'Sinonasal histamine flare: "thoughts slipping through fingers" (inability to follow a chain of thoughts to a conclusion)',
    'Sudden brain fog or cognitive decline 30-60 minutes after meals or heat exposure',
    'Paradoxical worsening of mental clarity or agitation from standard stimulants'
  ]);

  const [visceralChecked, setVisceralChecked] = useState<string[]>([
    'Abdominal bloating, pain, or nausea that coincides with inability to track conversation',
    'Freezing or going non-verbal in high-stimulation or noisy environments',
    'Intense internal sensory awareness (feeling heart rate, intestinal transit)'
  ]);

  const [copied, setCopied] = useState(false);

  const toggleItem = (list: string[], setList: (l: string[]) => void, item: string) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const sctOptions = [
    'IQ Discrepancy: Superior subtests (125-140) vs 108 Processing Speed with "started fast, but faded" test behavior',
    'Prominent "tip-of-the-tongue" states and slow word retrieval in conversation',
    'Subjective feeling of mental tempo operating at 0.5x speed',
    'Excessive internal daydreaming / staring blankly into space',
    'Lethargy and hypoarousal unimproved by standard nighttime sleep',
    'Slow reaction time during fast-moving social banter or multi-speaker meetings'
  ];

  const adhdOptions = [
    'Working memory buffers clearing out mid-sentence when interrupted',
    'Difficulty initiating or sequencing multi-step tasks',
    'Hyperfocus on novel/urgent topics followed by severe executive fatigue',
    'Restlessness, impulse-driven conversational interruptions, or fidgeting',
    'Time blindness and organizational disarray'
  ];

  const mcasOptions = [
    'Confirmed sulphite preservative allergy: acute wheezing and airway bronchospasm after cider, wine, or sausages (SUOX hypofunction)',
    'Sinonasal histamine flare: "thoughts slipping through fingers" (inability to follow a chain of thoughts to a conclusion)',
    'Sudden brain fog or cognitive decline 30-60 minutes after meals or heat exposure',
    'Episodic flushing, sinus congestion, or dermographia alongside cognitive drops',
    'Throbbing occipital/temporal pressure headaches with photophobia',
    'Paradoxical worsening of mental clarity or agitation from standard stimulants',
    'Extreme sensitivity to medications, dyes, environmental fragrances, or temperature shifts'
  ];

  const visceralOptions = [
    'Abdominal bloating, pain, or nausea that coincides with inability to track conversation',
    'Freezing or going non-verbal in high-stimulation or noisy environments',
    'Intense internal sensory awareness (feeling heart rate, intestinal transit)',
    'Postprandial lethargy where situational responsiveness drops by >50%',
    'Heightened somatic pain when experiencing social stress or sensory overload'
  ];

  const handleCopyReport = () => {
    const text = `
CLINICAL CONSULTATION BRIEF: NEUROIMMUNE AXIS PROFILE
Intersection of SCT / ADHD / MCAS / Visceral Hypersensitivity

I. REPORTED PHENOTYPIC PRESENTATION:
------------------------------------
A. Sluggish Cognitive Tempo (CDS) Features:
${sctChecked.map((i) => ` • ${i}`).join('\n') || ' None selected'}

B. ADHD / Executive Function Features:
${adhdChecked.map((i) => ` • ${i}`).join('\n') || ' None selected'}

C. Mast Cell Activation / Immune Features:
${mcasChecked.map((i) => ` • ${i}`).join('\n') || ' None selected'}

D. Visceral Hypersensitivity & Interoception:
${visceralChecked.map((i) => ` • ${i}`).join('\n') || ' None selected'}

II. PATHOPHYSIOLOGICAL MECHANISMS TO EVALUATE:
---------------------------------------------
1. Cognitive Fatigability & Prefrontal Energetics (IQ 125-140 vs. 108 PSI Split):
   Evaluate whether the "started very fast, but faded" pattern reflects rapid prefrontal ATP exhaustion and microglial cytokine interference under sustained cognitive demand, rather than a static speed deficit.

2. Sinonasal-Cranial Mast Cell Axis & Working Memory Dissolution:
   Evaluate whether sinus histamine release triggers direct frontal lobe neuro-inflammation via the porous cribriform plate and trigemino-vascular reflex (CGRP/Substance P), causing active thoughts to "slip through fingers."

3. Histamine H3 Presynaptic Autoreceptor Paradox:
   Consider whether excessive central histamine is downregulating acetylcholine (causing verbal fluency and lexical retrieval block) and catecholamines (mimicking SCT hypoarousal).

4. Enteric Mast Cell Activation & Visceral Interoceptive Load:
   Address whether ascending C-fiber/vagal afferents are overwhelming anterior insular gating, resulting in situational freezing and social exhaustion.

III. CROSS-SPECIALTY DIFFERENTIAL INQUIRIES:
-------------------------------------------
• For Allergy/Immunology & ENT:
  - Evaluation for MCAS and sinonasal mast cell activation via 24-hour urine mediators (N-methylhistamine, 11-β-PGF2α) or baseline/flare tryptase.
  - Trial of topical Nasal Cromolyn Sodium (Nasalcrom) and Azelastine spray to block cribriform cytokine diffusion.
  - Evaluation of high-volume low-pressure Budesonide sinus rinse (Pulmicort respules 0.25-0.5mg in 240mL saline, or compounded with Azelastine/Cromolyn) for cribriform plate lavage and long-term mucosal mast cell depletion.
  - Evaluation of multi-week flare circuit breakers: Trial of standardized Perilla frutescens extract (Rosmarinic Acid, Luteolin) + Micronized PEA to inhibit Complement C3/C5 and 5-LOX leukotrienes without sedation.
  - Trial of gut-directed (Oral Cromolyn) and systemic mast cell stabilizers (Ebastine 40mg, Ketotifen cycling).

• For Psychiatry / Neuropsychology:
  - Recognize that high baseline capability (IQ 125-140) masks executive fatigue until sustained processing speed collapses (108 PSI).
  - Differentiate ADHD executive disinhibition from Cognitive Disengagement Syndrome (CDS).
  - Consider Alpha-2A adrenoceptor agonist (Guanfacine) to strengthen prefrontal network connectivity while dampening sympathetic mast cell activation.
  - Caution with stimulant monotherapy due to adrenergic mast-cell degranulation risk.

• For Gastroenterology:
  - Evaluation for Small Intestinal Bacterial Overgrowth (SIBO) via 3-gas Lactulose Breath Test, noting patient's clinical history that antibiotic courses reliably break multi-week cognitive flares (SIBO-mediated LPS endotoxin driving TLR4 mast cell activation).
  - Consideration of 14-day trial of non-absorbable Rifaximin (550mg tid) as a targeted SIBO clearance and enteric Pregnane X Receptor (PXR) agonist to reseal tight junctions and halt endotoxemia.
  - Evaluation for visceral hypersensitivity and enteric mast cell infiltration.
  - Trial of low-dose visceral neuromodulator (e.g., low-dose TCA 10-25mg) to gate ascending nociceptive noise.

• For Cardiology & Primary Care:
  - Evaluation of lifelong dependent edema ("sock marks for as long as I can remember"): Recognition of baseline microvascular hyperpermeability (mast cell VEGF/histamine) and connective tissue/venous wall laxity exacerbated by Amlodipine's selective pre-capillary arteriolar dilation (Starling intracapillary hydrostatic pressure spike).
  - Consideration of transitioning from Amlodipine to a balanced 3rd-generation lipophilic CCB with dual pre- and post-capillary venodilation (e.g., Lercanidipine 10-20 mg), or optimizing Telmisartan monotherapy (40-80 mg), to reduce dependent fluid sequestration and eliminate late-afternoon orthostatic cerebral hypoperfusion.
  - Prescription of 20-30 mmHg graduated medical compression socks for seated desk hours.
  - Evidence-Based Vascular & Histamine Clearance Supplement Regimen:
    * Phlebotropic Bioflavonoids: Micronized Purified Flavonoid Fraction (MPFF: Diosmin 90% / Hesperidin 10%, 500 mg bid) to increase venous tone, tighten VE-cadherin junctions, and accelerate lymphatic micro-drainage.
    * Vascular Glycocalyx Protector: French Maritime Pine Bark Extract (Pycnogenol 100-150 mg daily), clinically validated in randomized trials to reduce Amlodipine-induced ankle edema by 35-40%.
    * Histamine & Collagen Cofactor Complex: Buffered Vitamin C (500-1000 mg bid) for collagen basement membrane synthesis and direct non-enzymatic histamine destruction, paired with Pyridoxal-5'-Phosphate (P5P 25-50 mg daily) to activate DAO and HNMT histamine degradation enzymes.
    * Endothelial Barrier & Non-Catechol Mast Cell Shield: Standardized Perilla frutescens extract (Rosmarinic Acid) + Micronized PEA (600 mg bid, dual PPAR partner with Telmisartan) + Gotu Kola triterpenes (60-120 mg bid) to block mast cell VEGF and leukotriene-induced capillary transudation without inhibiting COMT.
    * PATIENT INTOLERANCE ALERT (Avoid Quercetin & EGCG): Patient experiences severe occipital headaches and acute cervical muscle rigidity ("stiff neck") from Quercetin and EGCG. Indicates marked competitive COMT inhibition (noradrenaline pooling in trapezius/cranial vasculature) and a "SAMe sink" that starves HNMT. Quercetin and high-catechol green tea extracts are strictly contraindicated; rely exclusively on non-catechol agents (PEA, Perilla, Gotu Kola).
    * CRITICAL ALLERGY ALERT: CONFIRMED SULPHITE PRESERVATIVE ALLERGY (Bronchospasm / Wheezing):
      - Severe wheezing triggered by metabisulfites in cider, wine, sausages, and preserved meats. Indicates Sulfite Oxidase (SUOX) hypofunction, sensory vagal C-fiber activation, and non-IgE mast cell leukotriene release.
      - Medical & Dental Directive: Strictly avoid sodium metabisulfite preservatives (E220-E228) in foods AND in local anesthetics (e.g., dental lidocaine with epinephrine; use sulfite-free plain local anesthetics).
      - SUOX Enzymatic & Thiamine Recovery Stack: Molybdenum Glycinate (150-300 mcg daily) as obligate cofactor for Sulfite Oxidase + Benfotiamine (100-250 mg daily) to repair thiamine stores destroyed by sulfite cleavage + Hydroxocobalamin as chemical sulfite scavenger.
    * Preload & Circadian Osmotics: Morning electrolyte hydration (500-1000 mg sodium) to protect cardiac preload against vasodilation; nighttime Magnesium Glycinate (200-300 mg) for NMDA and microglial calming.
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          <FileText className="w-3.5 h-3.5" />
          <span>Clinical Self-Advocacy & Provider Communication</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Symptom Phenotyper & Clinical Consultation Brief
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-4xl">
          Construct an objective, cross-specialty clinical summary mapping your unique intersection of SCT, ADHD, mast cell activation, and visceral hypersensitivity to share with your immunologist, psychiatrist, or gastroenterologist.
        </p>
      </div>

      {/* Symptom Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* SCT Panel */}
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-cyan-300">
              1. Sluggish Cognitive Tempo / CDS Domain
            </h3>
            <span className="text-[11px] font-mono text-slate-500">
              {sctChecked.length} selected
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Slow mental tempo, internal absorption, lexical retrieval latencies.
          </p>
          <div className="space-y-2 pt-1">
            {sctOptions.map((opt) => (
              <label
                key={opt}
                className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer hover:text-white"
              >
                <input
                  type="checkbox"
                  checked={sctChecked.includes(opt)}
                  onChange={() => toggleItem(sctChecked, setSctChecked, opt)}
                  className="mt-0.5 rounded bg-slate-800 border-slate-700 text-cyan-500 focus:ring-0"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ADHD Panel */}
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-200">
              2. ADHD & Executive Dysfunction Domain
            </h3>
            <span className="text-[11px] font-mono text-slate-500">
              {adhdChecked.length} selected
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Working memory slips, stimulus distractibility, task switching difficulties.
          </p>
          <div className="space-y-2 pt-1">
            {adhdOptions.map((opt) => (
              <label
                key={opt}
                className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer hover:text-white"
              >
                <input
                  type="checkbox"
                  checked={adhdChecked.includes(opt)}
                  onChange={() => toggleItem(adhdChecked, setAdhdChecked, opt)}
                  className="mt-0.5 rounded bg-slate-800 border-slate-700 text-cyan-500 focus:ring-0"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* MCAS Panel */}
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-rose-300">
              3. Mast Cell Activation & Neuro-Immune Domain
            </h3>
            <span className="text-[11px] font-mono text-slate-500">
              {mcasChecked.length} selected
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Post-meal brain fog, flushing, medication intolerance, neuroinflammatory drops.
          </p>
          <div className="space-y-2 pt-1">
            {mcasOptions.map((opt) => (
              <label
                key={opt}
                className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer hover:text-white"
              >
                <input
                  type="checkbox"
                  checked={mcasChecked.includes(opt)}
                  onChange={() => toggleItem(mcasChecked, setMcasChecked, opt)}
                  className="mt-0.5 rounded bg-slate-800 border-slate-700 text-rose-500 focus:ring-0"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Visceral Panel */}
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-amber-300">
              4. Visceral Hypersensitivity & Interoception
            </h3>
            <span className="text-[11px] font-mono text-slate-500">
              {visceralChecked.length} selected
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Gut discomfort, interoceptive cognitive drain, situational freeze in loud environments.
          </p>
          <div className="space-y-2 pt-1">
            {visceralOptions.map((opt) => (
              <label
                key={opt}
                className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer hover:text-white"
              >
                <input
                  type="checkbox"
                  checked={visceralChecked.includes(opt)}
                  onChange={() => toggleItem(visceralChecked, setVisceralChecked, opt)}
                  className="mt-0.5 rounded bg-slate-800 border-slate-700 text-amber-500 focus:ring-0"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Generated Clinical Consultation Document */}
      <div className="p-6 md:p-8 rounded-xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider block">
              Generated Clinical Summary
            </span>
            <h3 className="text-lg font-bold text-white">
              Physician Consultation Brief
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyReport}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied Brief</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Clinical Brief</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Clinical Discussion Prompts by Specialty */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80 space-y-2">
            <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5" />
              Allergy / Immunology
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4 leading-relaxed">
              <li>Evaluation for MCAS via 24-hr urine histamine/leukotriene metabolites and serum tryptase.</li>
              <li>Trial of enteric (Oral Cromolyn Sodium) and central-penetrating (Ketotifen) stabilizers.</li>
              <li>Dual H1/H2 blocker regimen (e.g. Fexofenadine + Famotidine).</li>
              <li>Address confirmed sulfite allergy (wheezing): SUOX hypofunction & 5-LOX leukotriene dumping.</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80 space-y-2">
            <div className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Psychiatry / Neurology
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4 leading-relaxed">
              <li>Differentiate Cognitive Disengagement Syndrome (CDS/SCT) from ADHD inattention.</li>
              <li>Consider Alpha-2A agonist (Guanfacine) for prefrontal network strengthening without adrenergic mast cell triggers.</li>
              <li>Explore Low-Dose Naltrexone (LDN) to dampen microglial priming and kynurenine neurotoxicity.</li>
              <li>Note slow COMT: Quercetin/EGCG trigger severe neck spasm and headaches (noradrenaline pooling).</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80 space-y-2">
            <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              Gastroenterology
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4 leading-relaxed">
              <li>Assess visceral hypersensitivity and enteric mast cell density.</li>
              <li>Investigate SIBO / LPS endotoxin leaks with Lactulose Breath Test (antibiotics reliably shift flares).</li>
              <li>Trial of non-absorbable Rifaximin (550 mg tid) to reseal gut barrier and downregulate TLR4.</li>
              <li>Low-dose visceral neuromodulator to gate ascending C-fiber noise to insula.</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80 space-y-2">
            <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Cardiology & Nutrition
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4 leading-relaxed">
              <li>Lifelong sock marks: consider switching Amlodipine to Lercanidipine or optimizing Telmisartan.</li>
              <li>20-30 mmHg compression socks + Farmer's walks (calf pump) to preserve upright cerebral perfusion.</li>
              <li>Deploy MPFF (Diosmin) & Pycnogenol for venous tone and capillary basement membrane.</li>
              <li>Molybdenum (150-300 mcg) + Benfotiamine (100-250 mg) for SUOX catalysis & sulfite B1 cleavage repair.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export type ActiveTab = 
  | 'overview' 
  | 'pathology' 
  | 'matrix' 
  | 'iq-fatigue' 
  | 'pharmacy' 
  | 'exercise' 
  | 'exercises' 
  | 'deep-dive' 
  | 'simulator' 
  | 'vascular' 
  | 'protocol' 
  | 'condition-matrix' 
  | 'catalog' 
  | 'report' 
  | 'evidence';

export type ConditionProfileKey = 'mcas' | 'brain-fog' | 'vascular' | 'slow-comt' | 'pelvic';

export type ImpactVerdict = 
  | 'Gold Helper' 
  | 'Moderate Helper' 
  | 'Contextual / Neutral' 
  | 'Caution' 
  | 'Severe Hinder';

export type ElementCategory = 
  | 'Physical Exercise'
  | 'Cognitive & Brain Exercises'
  | 'Exercise & Physical' 
  | 'Vitamins & Nutrients' 
  | 'Pharmacotherapy' 
  | 'Botanicals & Cannabinoids';

export interface ConditionImpact {
  rating: number; // 0.0 to 5.0
  stars: string; // e.g. '★★★★★'
  verdict: ImpactVerdict;
  mechanism: string; // concise molecular/cellular rationale
  clinicalPearl: string; // actionable protocol advice
}

export interface NeuroCognitiveExercise {
  id: string;
  name: string;
  domain: 'Cognitive & Working Memory' | 'Rhythmic & Auditory' | 'Vagal & Autonomic' | 'Vascular & Hemodynamic' | 'Somato-Pelvic';
  primaryTarget: 'CDS / SCT' | 'ADHD' | 'Vascular Tone' | 'Vagal CAIP' | 'Pelvic / Pudendal';
  verdict: 'Gold Standard / High Efficacy' | 'Therapeutic / Moderate' | 'Caution / Strict Bounds';
  overallRating: number;
  overallStars: string;
  summary: string;
  primaryMechanism: string;
  prescribedProtocol: string;
  cdsSctImpact: string;
  adhdImpact: string;
  vascularImpact: string;
  mcasImpact: string;
  pelvicImpact: string;
  contraindications: string[];
  clinicalPearls: string[];
  interactiveToolType?: 'breathing' | 'metronome' | 'soleus-timer' | 'dual-n-back' | 'pelvic-pacer' | 'emdr-gaze';
}

export interface ExerciseLimits {
  maxDuration: string; // e.g. "3–5 min interval bouts"
  exertionCeiling: string; // e.g. "RPE 4–5 (Zone 2, strictly nasal breathing)"
  weeklyFrequency: string; // e.g. "1–2 sessions / week maximum"
  recoveryRest: string; // e.g. "Supine 90/90 pelvic decompression post-round"
}

export interface MatrixElement {
  id: string;
  name: string;
  category: ElementCategory;
  deliveryOrDosing: string;
  overallVerdict: ImpactVerdict;
  overallRating: number;
  overallStars: string;
  summary: string;
  targetReceptors?: string[];
  exerciseLimits?: ExerciseLimits;
  clinicalConsiderations?: string[];
  keyContraindications?: string[];
  conditionImpacts: Record<ConditionProfileKey, ConditionImpact>;
}

export interface ExerciseModality {
  id: string;
  name: string;
  intensityCategory: 'Ultra-Gentle / Zone 1' | 'High-Intensity / Anaerobic' | 'Moderate Aerobic' | 'Controlled Resistance' | 'Somatic / Restorative';
  verdict: 'Gold Standard (Therapeutic)' | 'Contraindicated (High Flare Risk)' | 'Caution / Modified Only' | 'Beneficial If Controlled';
  executiveImpact: string;
  mcasDegranulationRisk: 'Negligible' | 'Extreme' | 'High' | 'Low-Moderate';
  visceralGutImpact: string;
  mechanisms: {
    thermalStress: string;
    sympatheticLoad: string;
    splanchnicPerfusion: string;
    rhythmicNeuromodulation: string;
  };
  protocolRecommendation: string;
  clinicalPearls: string[];
}

export interface OffLabelPharma {
  id: string;
  genericName: string;
  brandNames: string;
  drugClass: string;
  primaryMechanism: string;
  mcasStabilizationEffect: string;
  cognitiveImpact: string;
  typicalDosageRange: string;
  clinicalPearls: string[];
  sedationLiability: 'None' | 'Low' | 'Moderate' | 'High';
  bbbPenetration: 'High' | 'Moderate' | 'Low' | 'Negligible (Peripheral)';
  cautionWarnings: string[];
  helpRating?: number; // 0.0 to 5.0
  helpStars?: string; // e.g. '★★★★★' or '★★★★☆'
  helpVerdict?: string; // e.g. 'Gold Standard Helper' | 'High-Value Specialist Option' | 'Mixed / Cautious' | 'Severe Hinder'
  ratingRationale?: string;
}

export interface PathologyNode {
  id: string;
  tier: 'visceral' | 'neurovascular' | 'neurochemical' | 'cognitive' | 'sinocranial';
  tierLabel: string;
  title: string;
  subtitle: string;
  primaryMediators: string[];
  anatomicalLocation: string;
  mechanism: string;
  cognitiveImpact: string;
  clinicalSigns: string[];
  interventions: string[];
}


export interface CognitiveDomainComparison {
  domain: string;
  sct: {
    presentation: string;
    mechanism: string;
    severity: 'Mild' | 'Moderate' | 'Severe' | 'Variable';
  };
  adhd: {
    presentation: string;
    mechanism: string;
    severity: 'Mild' | 'Moderate' | 'Severe' | 'Variable';
  };
  mcasBrainFog: {
    presentation: string;
    mechanism: string;
    severity: 'Mild' | 'Moderate' | 'Severe' | 'Variable';
  };
  visceralSensitivity: {
    presentation: string;
    mechanism: string;
    severity: 'Mild' | 'Moderate' | 'Severe' | 'Variable';
  };
}

export interface DeepDiveChapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  readTime: string;
  summary: string;
  pathways: string[];
  sections: {
    heading: string;
    content: string[];
    callout?: {
      title: string;
      text: string;
      type: 'warning' | 'insight' | 'clinical';
    };
  }[];
  clinicalTakeaway: string;
}

export interface SimulationStep {
  timeOffset: string;
  phaseName: string;
  biologicalEvent: string;
  neurochemicalState: string;
  cognitiveSymptom: string;
  verbalFluencyScore: number; // 0-100
  processingSpeedScore: number; // 0-100
  situationalFluencyScore: number; // 0-100
  visceralNoiseScore: number; // 0-100
}

export interface SimulationScenario {
  id: string;
  name: string;
  triggerType: string;
  description: string;
  initialCascade: string;
  steps: SimulationStep[];
  mitigationStrategies: string[];
}

export interface EvidenceCitation {
  id: string;
  authors: string;
  year: number;
  title: string;
  journal: string;
  doi?: string;
  category: 'SCT / CDS' | 'ADHD' | 'MCAS & Neuroinflammation' | 'Gut-Brain & Visceral' | 'Verbal & Cognitive Processing';
  coreFinding: string;
  clinicalRelevance: string;
}

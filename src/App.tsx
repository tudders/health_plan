import React, { useState } from 'react';
import { ActiveTab } from './types';
import { Header } from './components/Header';
import { OverviewSection } from './components/OverviewSection';
import { PathophysiologyExplorer } from './components/PathophysiologyExplorer';
import { ComparativeMatrix } from './components/ComparativeMatrix';
import { IQFatigueAnalyzer } from './components/IQFatigueAnalyzer';
import { PharmacotherapyMatrix } from './components/PharmacotherapyMatrix';
import { ExercisePacingEngine } from './components/ExercisePacingEngine';
import { DeepDiveSection } from './components/DeepDiveSection';
import { TriggerSimulator } from './components/TriggerSimulator';
import { ClinicalReportGenerator } from './components/ClinicalReportGenerator';
import { EvidenceCompendium } from './components/EvidenceCompendium';
import { VascularHealthSection } from './components/VascularHealthSection';
import { UnifiedProtocolSection } from './components/UnifiedProtocolSection';
import { ConditionElementMatrix } from './components/ConditionElementMatrix';
import { MasterInventorySection } from './components/MasterInventorySection';
import { ExercisesSection } from './components/ExercisesSection';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');

  const handleOpenReport = () => {
    setActiveTab('report');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Bar adhering to 3-Zone Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenReport={handleOpenReport}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        {activeTab === 'overview' && (
          <OverviewSection
            setActiveTab={setActiveTab}
            onOpenReport={handleOpenReport}
          />
        )}

        {activeTab === 'pathology' && <PathophysiologyExplorer />}

        {activeTab === 'matrix' && <ComparativeMatrix />}

        {activeTab === 'iq-fatigue' && <IQFatigueAnalyzer />}

        {activeTab === 'pharmacy' && <PharmacotherapyMatrix />}

        {activeTab === 'exercise' && <ExercisePacingEngine onNavigateToTab={setActiveTab} />}
        
        {activeTab === 'exercises' && <ExercisesSection onNavigateToTab={setActiveTab} />}

        {activeTab === 'deep-dive' && <DeepDiveSection />}

        {activeTab === 'simulator' && <TriggerSimulator />}

        {activeTab === 'vascular' && <VascularHealthSection setActiveTab={setActiveTab} />}

        {activeTab === 'protocol' && <UnifiedProtocolSection setActiveTab={setActiveTab} />}

        {activeTab === 'condition-matrix' && <ConditionElementMatrix onNavigateToTab={setActiveTab} />}
        
        {activeTab === 'catalog' && <MasterInventorySection onNavigateToTab={setActiveTab} />}

        {activeTab === 'report' && <ClinicalReportGenerator />}

        {activeTab === 'evidence' && <EvidenceCompendium />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="font-semibold text-slate-300">NeuroImmune Axis</span>
            <span>·</span>
            <span>Translational Neuro-Immunology & Neuropsychiatry Explorer</span>
          </div>

          <div className="text-slate-500 text-center sm:text-right text-[11px] max-w-md">
            For clinical research, educational synthesis, and patient self-advocacy. Synthesizes findings from Barkley, Theoharides, Afrin, Mayer, and Arnsten.
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState } from 'react';
import { DEEP_DIVE_CHAPTERS } from '../data/clinicalData';
import { BookOpen, AlertCircle, Sparkles, Stethoscope, ChevronRight, Share2, Check } from 'lucide-react';

export const DeepDiveSection: React.FC = () => {
  const [activeChapterId, setActiveChapterId] = useState<string>(DEEP_DIVE_CHAPTERS[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeChapter =
    DEEP_DIVE_CHAPTERS.find((c) => c.id === activeChapterId) || DEEP_DIVE_CHAPTERS[0];

  const handleCopySummary = (chapter: typeof activeChapter) => {
    navigator.clipboard.writeText(
      `${chapter.title}\n${chapter.subtitle}\n\nKey Takeaway: ${chapter.clinicalTakeaway}`
    );
    setCopiedId(chapter.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Mechanistic Whitepaper Series</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Biochemical Cascades & Cognitive Processing Deficits
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-4xl">
          Exhaustive clinical syntheses exploring the presynaptic H3 paradox, microglial kynurenine neurotoxicity, Broca’s lexical access blocks, and insular interoceptive resource drain.
        </p>
      </div>

      {/* Main Chapter Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {DEEP_DIVE_CHAPTERS.map((chap) => {
          const isActive = chap.id === activeChapter.id;
          return (
            <button
              key={chap.id}
              onClick={() => setActiveChapterId(chap.id)}
              className={`p-3 text-left rounded-lg border transition-all ${
                isActive
                  ? 'bg-slate-900 border-cyan-500 shadow-md shadow-cyan-950/40 ring-1 ring-cyan-500/20'
                  : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              <div className="text-[10px] font-mono uppercase text-slate-500 mb-1 flex items-center justify-between">
                <span>Chapter {chap.number}</span>
                <span className="text-slate-400">{chap.readTime}</span>
              </div>
              <h4 className={`text-xs font-semibold leading-tight line-clamp-2 ${isActive ? 'text-cyan-300' : 'text-slate-200'}`}>
                {chap.title.split(':')[0]}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Chapter Reader Container */}
      <article className="p-6 md:p-8 rounded-xl bg-slate-900/70 border border-slate-800 shadow-2xl space-y-8">
        {/* Chapter Header */}
        <div className="border-b border-slate-800 pb-6 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 text-slate-400 font-mono">
              <span className="text-cyan-400 font-bold">Chapter {activeChapter.number}</span>
              <span>·</span>
              <span>{activeChapter.readTime}</span>
            </div>

            <button
              onClick={() => handleCopySummary(activeChapter)}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 transition-colors"
            >
              {copiedId === activeChapter.id ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied Summary</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Clinical Takeaway</span>
                </>
              )}
            </button>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {activeChapter.title}
          </h1>
          <p className="text-base text-cyan-200/90 font-medium leading-relaxed max-w-4xl">
            {activeChapter.subtitle}
          </p>

          {/* Involved Biological Pathways */}
          <div className="pt-2 flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider mr-1">
              Pathways:
            </span>
            {activeChapter.pathways.map((path, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/80"
              >
                {path}
              </span>
            ))}
          </div>
        </div>

        {/* Executive Summary Card */}
        <div className="p-4 bg-slate-950/80 rounded-lg border border-slate-800/80 border-l-4 border-l-cyan-500">
          <span className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider block mb-1">
            Mechanistic Abstract
          </span>
          <p className="text-sm text-slate-300 leading-relaxed">
            {activeChapter.summary}
          </p>
        </div>

        {/* Sections Content */}
        <div className="space-y-8">
          {activeChapter.sections.map((sec, sIdx) => (
            <div key={sIdx} className="space-y-4">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-4 bg-cyan-500 rounded-full" />
                {sec.heading}
              </h3>

              <div className="space-y-3.5 text-sm leading-relaxed text-slate-300">
                {sec.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Callout Card (if present) */}
              {sec.callout && (
                <div
                  className={`p-4 rounded-lg border my-4 ${
                    sec.callout.type === 'warning'
                      ? 'bg-amber-950/20 border-amber-500/40 text-amber-200'
                      : sec.callout.type === 'clinical'
                      ? 'bg-rose-950/20 border-rose-500/40 text-rose-200'
                      : 'bg-cyan-950/20 border-cyan-500/40 text-cyan-200'
                  }`}
                >
                  <div className="flex items-center gap-2 font-semibold text-xs uppercase tracking-wider mb-1.5">
                    {sec.callout.type === 'warning' ? (
                      <AlertCircle className="w-4 h-4 text-amber-400" />
                    ) : sec.callout.type === 'clinical' ? (
                      <Stethoscope className="w-4 h-4 text-rose-400" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                    )}
                    <span>{sec.callout.title}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {sec.callout.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Clinical Takeaway */}
        <div className="p-5 bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 rounded-xl border border-cyan-800/40 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
            <Stethoscope className="w-4 h-4" />
            <span>Essential Clinical Rule</span>
          </div>
          <p className="text-sm font-semibold text-white leading-relaxed">
            {activeChapter.clinicalTakeaway}
          </p>
        </div>
      </article>
    </div>
  );
};

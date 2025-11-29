import React, { useEffect } from 'react';
import { X, ArrowUpRight, FileText } from 'lucide-react';
import RansomText from './RansomText';

const DetailModal = ({ isOpen, onClose, assignment }) => {
    if (!isOpen || !assignment) return null;

    // Prevent background scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Side Panel - Slides in from right */}
            <div className="relative w-full max-w-2xl h-full bg-[#0a0a0a] shadow-2xl flex flex-col animate-slide-in-right border-l border-[#333] overflow-y-auto">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Visual Header */}
                <div className="relative min-h-[300px] p-12 overflow-hidden" style={{ backgroundColor: assignment.color || '#222' }}>
                    <div className="absolute inset-0 paper-texture opacity-20"></div>

                    {/* Decorative Elements */}
                    <div className="absolute top-10 left-10 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-black opacity-20 rotate-12"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                        <div className="bg-white p-4 rotate-[-2deg] shadow-lg mb-6 transform scale-125">
                            <div className="border-2 border-black p-6 bg-[#f0f0f0]">
                                <FileText size={64} color="black" />
                            </div>
                        </div>
                        <RansomText text={`ASSIGNMENT #${assignment.id}`} className="text-3xl mb-2" />
                    </div>
                </div>

                {/* Info Section */}
                <div className="flex-1 p-12 bg-[#0a0a0a]">
                    <div className="mb-3">
                        <span className="text-[#666] font-mono uppercase tracking-widest text-sm">Overview</span>
                    </div>

                    <h2 className="text-5xl font-display mb-6 text-white uppercase tracking-tight leading-none">
                        {assignment.title}
                    </h2>

                    <div className="flex gap-2 mb-8 flex-wrap">
                        {assignment.tags.map((tag, i) => (
                            <span key={i} className="text-xs font-bold px-3 py-1.5 bg-[#1a1a1a] text-[#999] rounded uppercase tracking-wider border border-[#333]">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-[#bbb] text-lg leading-relaxed mb-10 font-light border-l-2 border-[#333] pl-6">
                        {assignment.description}
                    </p>

                    <a
                        href={assignment.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary self-start no-underline group inline-flex"
                    >
                        View Document
                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DetailModal;

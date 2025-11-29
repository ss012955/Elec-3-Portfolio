import React from 'react';
import { FileText } from 'lucide-react';
import RansomText from './RansomText';

const CreativeCard = ({ title, assignmentNumber, color, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="relative w-full aspect-square bg-[#111] overflow-hidden rounded-xl border border-[#333] hover:border-[#fff] transition-all duration-300 group cursor-pointer hover:scale-[1.02] hover:shadow-2xl"
        >
            <div className="absolute inset-0 p-8 overflow-hidden" style={{ backgroundColor: color || '#222' }}>
                <div className="absolute inset-0 paper-texture opacity-20"></div>

                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-24 h-24 bg-white opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-black opacity-20 rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                    <div className="bg-white p-2 rotate-[-2deg] shadow-lg mb-4 group-hover:rotate-2 transition-transform duration-300">
                        <div className="border-2 border-black p-4 bg-[#f0f0f0]">
                            <FileText size={48} color="black" />
                        </div>
                    </div>
                    <RansomText text={`#${assignmentNumber}`} className="text-4xl mb-2" />
                    <h3 className="font-display text-2xl uppercase text-black/80 mt-2 bg-white/50 px-2 backdrop-blur-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default CreativeCard;

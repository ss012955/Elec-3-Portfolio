import React from 'react';

const colors = ['#facc15', '#f472b6', '#00f0ff', '#ffffff', '#a3e635'];
const rotations = ['-5deg', '3deg', '-2deg', '5deg', '0deg'];
const fonts = ['Anton', 'Permanent Marker', 'Inter'];

const RansomText = ({ text, className = '' }) => {
    return (
        <div className={`flex flex-wrap gap-1 justify-center ${className}`}>
            {text.split('').map((char, i) => {
                if (char === ' ') return <span key={i} className="w-4"></span>;

                const style = {
                    backgroundColor: colors[i % colors.length],
                    color: '#000',
                    transform: `rotate(${rotations[i % rotations.length]})`,
                    fontFamily: fonts[i % fonts.length],
                    padding: '0.1rem 0.4rem',
                    fontSize: 'inherit',
                    lineHeight: '1',
                    boxShadow: '2px 2px 0px rgba(0,0,0,0.3)'
                };

                return (
                    <span key={i} style={style} className="inline-block">
                        {char}
                    </span>
                );
            })}
        </div>
    );
};

export default RansomText;

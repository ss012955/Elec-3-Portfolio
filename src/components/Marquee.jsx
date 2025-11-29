import React from 'react';

const Marquee = ({ text, repeat = 10 }) => {
  return (
    <div className="relative w-full overflow-hidden bg-yellow-400 py-4 border-y-4 border-black" style={{ backgroundColor: '#facc15', color: 'black' }}>
      <div className="flex whitespace-nowrap animate-marquee">
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={i} className="mx-8 text-4xl font-display uppercase tracking-wider">
           • {text} •
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

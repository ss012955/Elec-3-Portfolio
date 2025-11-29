import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ slides, options = { loop: true } }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ delay: 4000, stopOnInteraction: true })
    ]);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
        <div className="relative max-w-6xl mx-auto px-4 py-12">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-6 pl-6 pr-6">
                    {slides.map((slide, index) => (
                        <div className="flex-shrink-0" key={index}>
                            {slide}
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="absolute top-1/2 left-2 md:-left-12 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
                onClick={scrollPrev}
            >
                <ChevronLeft size={24} />
            </button>

            <button
                className="absolute top-1/2 right-2 md:-right-12 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
                onClick={scrollNext}
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default Carousel;

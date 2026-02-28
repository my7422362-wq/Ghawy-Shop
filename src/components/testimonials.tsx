import { useEffect, useRef, useState, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex M.',
    role: 'Verified Buyer',
    avatar: 'AM',
    quote: 'The quality is unmatched. Every piece feels premium and the attention to detail is incredible. This is now my go-to brand.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah K.',
    role: 'Fashion Influencer',
    avatar: 'SK',
    quote: 'Finally, streetwear that actually stands out. Love the neon aesthetic and the unique designs. My followers always ask where I shop!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mike T.',
    role: 'Verified Buyer',
    avatar: 'MT',
    quote: 'Fast shipping and the packaging is incredible. It feels like receiving a gift every time. The clothes fit perfectly too.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Jessica L.',
    role: 'Stylist',
    avatar: 'JL',
    quote: 'I recommend SR to all my clients. The versatility of their pieces is amazing - you can dress them up or down effortlessly.',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-dark-bg overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            What Our{' '}
            <span className="gradient-text">Community</span>{' '}
            Says
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Real reviews from real customers. Join the movement.
          </p>
        </div>

        <div className={`relative transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-3xl mx-auto">
                    <div className="relative p-8 sm:p-12 rounded-3xl glass-card text-center">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-neon-pink to-neon-cyan flex items-center justify-center">
                        <Quote className="w-5 h-5 text-white" />
                      </div>

                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-neon-pink text-neon-pink" />
                        ))}
                      </div>

                      <blockquote className="text-xl sm:text-2xl font-medium mb-8 leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>

                      <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center font-bold">
                          {testimonial.avatar}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-white/60 text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-neon-pink to-neon-cyan'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

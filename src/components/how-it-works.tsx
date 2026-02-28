import { useEffect, useRef, useState } from 'react';
import { Search, Palette, Truck } from 'lucide-react';

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Browse',
    description: 'Explore our curated collections of streetwear. Find styles that speak to you.',
    icon: Search,
  },
  {
    id: 2,
    number: '02',
    title: 'Customize',
    description: 'Choose sizes, colors, and add personal touches to make it yours.',
    icon: Palette,
  },
  {
    id: 3,
    number: '03',
    title: 'Receive',
    description: 'Fast shipping with premium packaging straight to your doorstep.',
    icon: Truck,
  },
];

export function HowItWorks() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [lineProgress, setLineProgress] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
            if (index === 0) {
              setTimeout(() => setLineProgress(100), 500);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-dark-bg">
      <div className="container-custom mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            How It{' '}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Getting your hands on premium streetwear has never been easier.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-[2px]">
            <div className="absolute inset-0 bg-white/10" />
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-purple transition-all duration-1000 ease-out"
              style={{ width: `${lineProgress}%` }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  ref={(el) => { itemRefs.current[index] = el; }}
                  data-index={index}
                  className={`relative text-center transition-all duration-700 ${
                    visibleItems.has(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-neon-cyan" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-neon-cyan/20 blur-xl" />
                    
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-neon-pink flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/60 max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '50K+', label: 'Happy Customers' },
            { value: '200+', label: 'Products' },
            { value: '24h', label: 'Fast Shipping' },
            { value: '4.9', label: 'Average Rating' },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                visibleItems.has(0)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

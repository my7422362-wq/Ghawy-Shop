import { useEffect, useRef, useState } from 'react';
import { Gem, Leaf, Sparkles, Globe } from 'lucide-react';

const values = [
  {
    id: 1,
    title: 'Premium Quality',
    description: 'Materials sourced from the finest suppliers. Every stitch matters.',
    icon: Gem,
    gradient: 'from-neon-pink to-neon-purple',
  },
  {
    id: 2,
    title: 'Sustainable',
    description: 'Eco-friendly production processes. Fashion that cares for the planet.',
    icon: Leaf,
    gradient: 'from-neon-cyan to-neon-pink',
  },
  {
    id: 3,
    title: 'Exclusive Drops',
    description: 'Limited quantities, unique designs. Own something truly special.',
    icon: Sparkles,
    gradient: 'from-neon-purple to-neon-cyan',
  },
  {
    id: 4,
    title: 'Global Shipping',
    description: 'Delivered to your door worldwide. No borders, just style.',
    icon: Globe,
    gradient: 'from-neon-cyan to-neon-purple',
  },
];

export function BrandValues() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-dark-secondary">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Why Choose{' '}
            <span className="gradient-text">GHAWY</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            We&apos;re not just another streetwear brand. Here&apos;s what sets us apart.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.id}
                ref={(el) => { itemRefs.current[index] = el; }}
                data-index={index}
                className={`group relative p-6 rounded-2xl glass-card hover:bg-white/5 transition-all duration-500 ${
                  visibleItems.has(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-pink transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { ShoppingBag, Heart, ArrowLeft, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Cyber T-Shirt',
    price: 29,
    image: '/images/1.jpeg',
    isNew: true,
  },
  {
    id: 2,
    name: 'Neon Hoodie',
    price: 49,
    image: '/images/5.jpeg',
    isNew: true,
  },
  {
    id: 3,
    name: 'Urban Jacket',
    price: 79,
    image: '/images/14.jpeg',
    isNew: true,
  },
  {
    id: 4,
    name: 'Cyber T-Shirt',
    price: 59,
    image: '/images/2.jpeg',
    isNew: true,
  },
  {
    id: 5,
    name: 'Cyber T-Shirt',
    price: 34,
    image: '/images/3.jpeg',
    isNew: true,
  },
  {
    id: 6,
    name: 'Cyber T-Shirt',
    price: 54,
    image: '/images/4.jpeg',
    isNew: true,
  },
  {
    id: 7,
    name: 'Neon Jacket',
    price: 89,
    image: '/images/6.jpeg',
    isNew: true,
  },
  {
    id: 8,
    name: 'Cyber T-Shirt',
    price: 64,
    image: '/images/7.jpeg',
    isNew: true,
  },
  {
    id: 9,
    name: 'Neon Hoodie',
    price: 39,
    image: '/images/8.jpeg',
    isNew: true,
  },
  {
    id: 10,
    name: 'Street Jacket',
    price: 59,
    image: '/images/11.jpeg',
    isNew: true,
  },
  {
    id: 11,
    name: 'Street Jacket',
    price: 84,
    image: '/images/12.jpeg',
    isNew: true,
  },
  {
    id: 12,
    name: 'Neon Hoodie',
    price: 69,
    image: '/images/13.jpeg',
    isNew: true,
  },
];

export function FeaturedCollections() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newPosition = direction === 'left'
        ? scrollPosition - scrollAmount
        : scrollPosition + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section id="featured-products" className="pt-20 md:pt-28 lg:pt-32 pb-2 md:pb-4 lg:pb-8 px-4 sm:px-6 lg:px-8 xl:px-12 bg-dark-secondary">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-12">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Featured{' '}
              <span className="gradient-text">Products</span>
            </h2>
            <p className="text-white/60 text-lg">
              Curated drops for every style. Explore our latest products designed for the bold.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => { itemRefs.current[index] = el; }}
              data-index={index}
              className={`group flex-shrink-0 w-72 snap-start transition-all duration-700 ${
                visibleItems.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Product Card */}
              <div className="relative rounded-2xl overflow-hidden glass-card hover:border-white/20 transition-all duration-300">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {product.isNew && (
                      <Badge className="bg-neon-pink text-white border-0">
                        New
                      </Badge>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-neon-pink/20 transition-colors duration-300"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quick Add Button */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Link to="/register">
                      <button className="w-full py-3 rounded-xl bg-white text-dark-bg font-semibold flex items-center justify-center gap-2 hover:bg-neon-cyan transition-colors duration-300">
                        <ShoppingBag className="w-4 h-4" />
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-neon-pink transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold gradient-text">
                    ${product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 link-underline"
          >

          </a>
        </div>
      </div>
    </section>
  );
}

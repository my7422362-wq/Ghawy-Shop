import { useState, useEffect, useRef } from 'react';
import { Send, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-dark-bg to-neon-cyan/10 animate-gradient-shift bg-[length:200%_200%]" />
      
      <div className="absolute top-0 left-0 w-64 h-64 bg-neon-pink/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[100px]" />

      <div className="relative container-custom mx-auto">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" />
            <span className="text-sm font-medium text-white/80">Join 50,000+ subscribers</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Join the{' '}
            <span className="gradient-text">Movement</span>
          </h2>

          <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto">
            Get exclusive access to drops, sales, and behind-the-scenes content. 
            Be the first to know.
          </p>

          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            <div className="relative flex items-center">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitted}
                className="w-full h-14 pl-6 pr-36 rounded-full bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-neon-pink focus:ring-neon-pink/20 transition-all duration-300"
              />
              <button
                type="submit"
                disabled={isSubmitted || !email}
                className={`absolute right-2 h-10 px-6 rounded-full font-medium flex items-center gap-2 transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-neon-pink to-neon-purple text-white hover:opacity-90 disabled:opacity-50'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    Subscribed
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/40 text-sm">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-neon-cyan" />
              No spam, ever
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-neon-cyan" />
              Unsubscribe anytime
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-neon-cyan" />
              Exclusive deals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

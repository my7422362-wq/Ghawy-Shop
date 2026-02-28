import { useEffect, useRef, useState } from 'react';
import { Heart, MessageCircle, Camera, Share2 } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px] animate-pulse-glow animation-delay-500" />
        
        <div className="absolute top-20 left-0 w-64 h-1 bg-gradient-to-r from-neon-pink to-transparent rotate-12 opacity-60 blur-sm" />
        <div className="absolute top-40 right-0 w-48 h-1 bg-gradient-to-l from-neon-cyan to-transparent -rotate-12 opacity-60 blur-sm" />
        <div className="absolute bottom-32 left-10 w-56 h-1 bg-gradient-to-r from-neon-purple to-transparent rotate-6 opacity-50 blur-sm" />
        <div className="absolute bottom-20 right-20 w-40 h-1 bg-gradient-to-l from-neon-pink to-transparent -rotate-6 opacity-50 blur-sm" />
        
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <h1 
              className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-6 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="block">GHAWY</span>
              <span className="block gradient-text">SHOP</span>
            </h1>
            
            <p 
              className={`text-lg sm:text-xl text-white/70 max-w-md mb-8 transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Designed for the next generation of streetwear. 
              Bold designs, premium quality, unmatched style.
            </p>

            <div 
              className={`transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a href="#featured-products" className="group relative inline-block px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105">
                <span className="absolute inset-0 gradient-border rounded-full" />
                <span className="absolute inset-[2px] bg-dark-bg rounded-full" />
                <span className="relative z-10 flex items-center gap-2">
                  Shop Now
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 neon-glow -z-10" />
              </a>
            </div>

            <div 
              className={`flex items-center gap-6 mt-12 transition-all duration-700 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center gap-2 text-white/60">
                <Heart className="w-5 h-5 fill-neon-pink text-neon-pink" />
                <span className="font-semibold">217</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">48</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Share2 className="w-5 h-5" />
                <span className="font-semibold">12</span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center order-1 lg:order-2">
            <div 
              ref={productRef}
              className={`relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] perspective-1000 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 sm:w-64 sm:h-64 bg-neon-pink/30 rounded-full blur-[80px] animate-pulse-glow" />
                <div className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-neon-cyan/30 rounded-full blur-[80px] animate-pulse-glow animation-delay-500" />
              </div>
              
              <div className="relative w-full h-full preserve-3d animate-rotate-slow hover:[animation-play-state:paused] transition-all duration-500 group">
                <img
                  src="/images/hero-tshirt.png"
                  alt="SR Streetwear T-Shirt"
                  className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-2xl flex items-center justify-center animate-float">
                <span className="text-2xl font-bold gradient-text">GHAWY</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 px-4 py-2 glass-card rounded-full flex items-center gap-2 animate-float animation-delay-300">
                <Camera className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm text-white/80">Find similar</span>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[120%] h-[120%] border border-neon-pink/20 rounded-full animate-pulse-glow" />
              <div className="absolute w-[140%] h-[140%] border border-neon-cyan/10 rounded-full animate-pulse-glow animation-delay-300" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none" />
    </section>
  );
}

import { useState, useEffect } from 'react';
import { Menu, Search, ShoppingBag, User } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { name: 'Home', href: '#home' },
   { name: 'Collections', href: '#featured-products' },
  { name: 'Shop', href: '#shop' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                className="w-full h-full transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  d="M20 5L25 15H15L20 5Z"
                  fill="url(#gradient1)"
                />
                <path
                  d="M10 20L15 30H5L10 20Z"
                  fill="url(#gradient2)"
                />
                <path
                  d="M30 20L35 30H25L30 20Z"
                  fill="url(#gradient3)"
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff2d95" />
                    <stop offset="100%" stopColor="#00f0ff" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="100%" stopColor="#b829dd" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#b829dd" />
                    <stop offset="100%" stopColor="#ff2d95" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">
              GHAWY
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 link-underline"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              className="p-2 text-white/70 hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-white/70 hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-neon-pink rounded-full text-[10px] flex items-center justify-center font-medium">
                3
              </span>
            </button>
            <button
              className="p-2 text-white/70 hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 text-white hover:bg-white/5 rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-80 bg-dark-bg/95 backdrop-blur-xl border-l border-white/10"
            >
              <div className="flex flex-col h-full pt-12">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-medium text-white/80 hover:text-white transition-colors duration-300"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <div className="mt-auto pb-8 flex items-center gap-6">
                  <button
                    className="p-3 text-white/70 hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full"
                    aria-label="Search"
                  >
                    <Search className="w-6 h-6" />
                  </button>
                  <button
                    className="p-3 text-white/70 hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full relative"
                    aria-label="Cart"
                  >
                    <ShoppingBag className="w-6 h-6" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-neon-pink rounded-full text-xs flex items-center justify-center font-medium">
                      3
                    </span>
                  </button>
                  <button
                    className="p-3 text-white/70 hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full"
                    aria-label="Account"
                  >
                    <User className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

import { Instagram, Linkedin, Phone, Globe } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/muhammed-youssif-48b799369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/invites/contact/?igsh=6l92bqcu25kl&utm_content=8sokzj5' },
  { name: 'WhatsApp', icon: Phone, href: 'https://wa.me/201013556821' },
  { name: 'Portfolio', icon: Globe, href: 'https://my7422362-wq.github.io/portfolio/' },
];

export function Footer() {
  return (
    <footer id="contact" className="relative bg-dark-bg">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-purple" />

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Brand Column */}
          <div className="max-w-md">
            <a href="#home" className="flex items-center justify-center gap-2 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  className="w-full h-full"
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
              <span className="text-xl font-bold">GHAWY</span>
            </a>
            <p className="text-white/60 text-sm mb-6 max-w-xs mx-auto">
              Fashion forward streetwear for the next generation. Designed for those who dare to stand out.
            </p>
            {/* Social Links */}
            <div className="flex justify-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-white hover:bg-neon-pink/20 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © By Muhammed Yousef. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}

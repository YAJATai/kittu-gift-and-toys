import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#010828]/80 backdrop-blur-md text-cream px-4 sm:px-6 md:px-8 py-4 sm:py-6 border-b border-cream/10">
        <div className="max-w-[1831px] mx-auto flex justify-between items-center">
          <a href="#" className="font-grotesk text-2xl uppercase tracking-wider relative group">
            KITTU
            <span className="font-condiment text-neon text-2xl lowercase absolute -bottom-3 -right-6 -rotate-6 opacity-0 group-hover:opacity-100 transition-opacity">toys</span>
          </a>
          <div className="hidden md:flex gap-8 font-mono text-sm uppercase">
            <a href="#collections" className="hover:text-neon transition-colors">Collections</a>
            <a href="#arrivals" className="hover:text-neon transition-colors">New Arrivals</a>
            <a href="#gallery" className="hover:text-neon transition-colors">Gallery</a>
            <a href="#visit" className="hover:text-neon transition-colors">Visit Us</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
              <a href="#visit" className="font-mono text-sm uppercase hover:text-neon transition-colors border border-cream/20 px-4 py-2 flex items-center gap-2">
                Find Us
              </a>
          </div>
          <div className="md:hidden flex items-center gap-4">
             <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="font-mono text-xs uppercase flex items-center justify-center p-1.5 border border-cream/20 hover:border-neon hover:text-neon transition-colors"
                aria-label="Open Menu"
             >
                <Menu size={20} />
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-[#010828] flex flex-col transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 py-4 sm:py-6 border-b border-cream/10">
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="font-grotesk text-2xl uppercase tracking-wider text-cream">
            KITTU<span className="font-condiment text-neon text-2xl lowercase relative -top-1 -right-1 -rotate-6 inline-block">toys</span>
          </a>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-cream hover:text-neon transition-colors p-1"
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>
        </div>
        
        <div className="flex flex-col flex-1 justify-center items-center gap-10 p-8 font-grotesk text-4xl uppercase text-cream/80">
          <a href="#collections" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-neon transition-all hover:scale-110 hover:-rotate-2">Collections</a>
          <a href="#arrivals" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-neon transition-all hover:scale-110 hover:rotate-2">New Arrivals</a>
          <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-neon transition-all hover:scale-110 hover:-rotate-2">Gallery</a>
          <a href="#visit" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-neon transition-all hover:scale-110 hover:-rotate-2">Visit Us</a>
        </div>
        
        <div className="p-8 border-t border-cream/10 text-center font-mono text-xs uppercase text-cream/50 mb-4 tracking-wider">
           <p className="mb-2 opacity-80">Jaipur's Most Loved Toy Store</p>
           <p className="text-neon/80">+91 98765 43210</p>
        </div>
      </div>
    </>
  );
}

export default function Footer() {
    return (
        <footer className="pt-24 pb-12 px-4 sm:px-6 md:px-8 border-t border-cream/10 bg-[#050b24] text-cream">
            <div className="max-w-[1831px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
                    <div>
                        <h2 className="font-grotesk text-4xl sm:text-6xl uppercase leading-[0.9] mb-4">
                            Kittu Gift<br />& Toys
                        </h2>
                        <p className="font-mono text-xs uppercase opacity-50 tracking-wider">Setting the standard since 2020.</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-12 sm:gap-24 font-mono text-xs uppercase tracking-wider">
                        <div className="flex flex-col gap-4">
                            <span className="text-neon mb-2">Menu</span>
                            <a href="#collections" className="hover:text-neon transition-colors">Collections</a>
                            <a href="#arrivals" className="hover:text-neon transition-colors">New Arrivals</a>
                            <a href="#visit" className="hover:text-neon transition-colors">Visit Us</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-neon mb-2">Connect</span>
                            <a href="#" className="hover:text-neon transition-colors">Instagram</a>
                            <a href="#" className="hover:text-neon transition-colors">Facebook</a>
                            <a href="#" className="hover:text-neon transition-colors">WhatsApp</a>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row border-t border-cream/10 pt-8 justify-between items-center gap-4 font-mono text-[10px] sm:text-xs uppercase opacity-40">
                    <p>&copy; 2026 Kittu Gift & Toys. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

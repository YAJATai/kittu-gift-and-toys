export default function VisitUsSection() {
    return (
        <section id="visit" className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 max-w-[1831px] mx-auto text-cream">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="order-2 lg:order-1">
                    <h3 className="font-mono text-neon text-sm mb-6 uppercase flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-neon inline-block"></span>
                        Why Visit Us
                    </h3>
                    <h2 className="font-grotesk text-5xl md:text-7xl lg:text-8xl uppercase mb-8 leading-[0.9]">
                        Great Toys.<br/>
                        <span className="text-neon">Friendly Staff.</span>
                    </h2>
                    <p className="font-mono leading-relaxed opacity-80 mb-12 max-w-md text-sm sm:text-base">
                        We believe in excellent service. With over 909 happy families served in Jaipur, Kittu Gift & Toys is your one-stop destination for joy. No stress—just the best toys for your kids.
                    </p>
                    <div className="font-mono text-xs sm:text-sm uppercase flex flex-col gap-6 max-w-md">
                        <div className="flex flex-col sm:flex-row sm:justify-between border-b border-cream/10 pb-6 gap-2">
                            <span className="opacity-50 tracking-wider">Location</span>
                            <span className="text-left sm:text-right text-neon max-w-[280px] leading-relaxed normal-case tracking-normal">84/64-65, Madhyam Marg, opp. Mansarovar Plaza, Mansarovar Sector 7, Agarwal Farm, Mansarovar Sector 8, Mansarovar, Jaipur, Rajasthan 302020</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between border-b border-cream/10 pb-6 gap-2">
                            <span className="opacity-50 tracking-wider">Store Hours</span>
                            <span className="text-left sm:text-right">Mon - Sun: <span className="text-neon">10 AM - 9 PM</span></span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between border-b border-cream/10 pb-6 gap-2">
                            <span className="opacity-50 tracking-wider">Contact</span>
                            <span className="text-left sm:text-right">+91 98765 43210</span>
                        </div>
                    </div>
                </div>
                
                <div className="order-1 lg:order-2 bg-[#050b24] aspect-square flex flex-col justify-center items-center text-center p-8 relative overflow-hidden border border-cream/10">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#010828] to-transparent z-0"></div>
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon/5 blur-[100px] rounded-full point-events-none"></div>
                    
                    <h3 className="font-condiment text-7xl md:text-9xl text-cream/5 rotate-[15deg] absolute whitespace-nowrap z-0 scale-150">Kittu Toys Kittu Toys</h3>
                    <h3 className="font-condiment text-7xl md:text-9xl text-cream/5 -rotate-[15deg] absolute whitespace-nowrap z-0 scale-150">Jaipur Jaipur Jaipur</h3>
                    
                    <div className="relative z-10 w-full h-full max-w-[400px] max-h-[400px] border border-neon/20 flex flex-col items-center justify-center p-10 bg-[#010828]/50 backdrop-blur-md">
                        <svg className="w-12 h-12 text-neon mb-6 mx-auto animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h4 className="font-grotesk text-3xl uppercase mb-2">Get Directions</h4>
                        <p className="font-mono text-xs opacity-70 mb-8 max-w-[200px] normal-case tracking-normal">Find us easily in Mansarovar.</p>
                        <button className="font-mono text-xs uppercase px-6 py-3 border border-neon text-neon hover:bg-neon hover:text-[#010828] transition-colors w-full">Open in Maps</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

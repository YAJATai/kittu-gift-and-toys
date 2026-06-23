export default function FeaturedProductsSection() {
    const products = [
        { name: "HW Custom Mustang", category: "Hot Wheels", image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=600&q=80" },
        { name: "Monster Truck X", category: "RC Cars", image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=600&q=80&hue=180" },
        { name: "Mini Studio Mic", category: "Karaoke", image: "https://images.unsplash.com/photo-1516280440502-6c2e39fcad23?auto=format&fit=crop&w=600&q=80" },
        { name: "Birthday Blast Box", category: "Gift Hampers", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80" },
        { name: "HW Track Builder", category: "Hot Wheels", image: "https://images.unsplash.com/photo-1581557991964-198650b86a11?auto=format&fit=crop&w=600&q=80" },
        { name: "Speedster RC 2000", category: "RC Cars", image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=600&q=80&saturation=200" },
        { name: "Party Speaker Pro", category: "Karaoke", image: "https://images.unsplash.com/photo-1516280440502-6c2e39fcad23?auto=format&fit=crop&w=600&q=80&brightness=60" },
        { name: "Newborn Essentials", category: "Gift Hampers", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80&contrast=120" },
    ];

    return (
        <section id="arrivals" className="py-24 px-4 sm:px-6 md:px-8 max-w-[1831px] mx-auto text-cream">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6">
                <div>
                    <h3 className="font-mono text-neon text-sm mb-4 uppercase flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-neon inline-block"></span>
                        New Arrivals
                    </h3>
                    <h2 className="font-grotesk text-5xl md:text-7xl lg:text-8xl uppercase">Fresh In-Store</h2>
                </div>
                <button className="font-mono uppercase text-sm border border-cream/20 px-6 py-4 hover:bg-cream hover:text-[#010828] transition-colors w-full md:w-auto text-center">
                    View Entire Catalog
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                {products.map((product, idx) => (
                    <div key={idx} className="group cursor-pointer flex flex-col">
                        <div className="aspect-square bg-[#050b24] mb-6 flex items-center justify-center relative overflow-hidden border border-cream/5">
                            {/* Instead of direct image, lets use an abstract representation for layout consistency assuming the store doesn't have hi-res pics for everything */}
                            <div className="absolute inset-0 bg-[#0a112c] flex items-center justify-center p-8">
                                <h1 className="font-grotesk text-5xl sm:text-7xl text-cream/5 text-center leading-none">{product.category}</h1>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#010828]/60 backdrop-blur-sm z-10 duration-300">
                                <button className="bg-neon text-[#010828] font-mono text-xs uppercase px-6 py-3 flex items-center gap-3 hover:bg-white transition-colors tracking-wider">
                                    View Details
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-start gap-4 flex-grow">
                            <div>
                                <p className="font-mono text-[10px] sm:text-xs text-cream/50 uppercase mb-2 tracking-wider">{product.category}</p>
                                <h4 className="font-mono text-sm sm:text-base uppercase leading-tight group-hover:text-neon transition-colors">{product.name}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 sm:mt-24 text-center">
                 <h3 className="font-condiment text-4xl sm:text-5xl text-cream/40 -rotate-2">Plus 1,000+ more items in store...</h3>
            </div>
        </section>
    )
}

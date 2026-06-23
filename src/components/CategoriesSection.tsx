export default function CategoriesSection() {
  const categories = [
    { name: "Hot Wheels & Diecast", id: "01", image: "/categories/hot_wheels.png" },
    { name: "RC Cars & Vehicles", id: "02", image: "/categories/rc_cars.png" },
    { name: "Karaoke & Musical", id: "03", image: "/categories/karaoke.png" },
    { name: "Gift Hampers & Boxes", id: "04", image: "/categories/gift_hampers.png" },
    { name: "Soft & Plush Toys", id: "05", image: "/categories/plush_toys.png" },
    { name: "Educational & Learning", id: "06", image: "/categories/educational.png" },
    { name: "Baby Strollers & Prams", id: "07", image: "/categories/baby_strollers.png" },
    { name: "Action Figures & Robots", id: "08", image: "/categories/action_figures.png" },
    { name: "Board Games & Puzzles", id: "09", image: "/categories/board_games.png" },
  ];

  return (
    <section id="collections" className="py-24 px-4 sm:px-6 md:px-8 max-w-[1831px] mx-auto text-cream">
        <h3 className="font-mono text-neon text-sm mb-4 uppercase flex items-center gap-4">
            <span className="w-8 h-[1px] bg-neon inline-block"></span>
            Explore Our Aisles
        </h3>
        <h2 className="font-grotesk text-5xl md:text-7xl lg:text-8xl uppercase mb-12 sm:mb-16">Collections</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(cat => (
                <div key={cat.id} className="relative group overflow-hidden bg-[#050b24] aspect-[3/4] cursor-pointer">
                    <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-t from-[#010828] via-transparent to-transparent">
                        <span className="font-mono text-sm opacity-50 transition-opacity group-hover:opacity-100 group-hover:text-neon">/{cat.id}</span>
                        <div>
                            <h4 className="font-grotesk text-3xl uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{cat.name}</h4>
                            <p className="font-mono text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2 text-neon">Browse Collection &rarr;</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

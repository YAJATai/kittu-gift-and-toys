export default function CategoriesSection() {
  const categories = [
    { name: "Baby Bath Tub", id: "01", image: "/categories/baby_bath_tub.png" },
    { name: "Baby Strollers & Prams", id: "02", image: "/categories/baby_strollers.png" },
    { name: "Baby Walkers", id: "03", image: "/categories/baby_walkers.png" },
    { name: "Cradles & Rockers", id: "04", image: "/categories/cradles_rockers.png" },
    { name: "Baby Carry Cots", id: "05", image: "/categories/baby_carry_cots.png" },
    { name: "Feeding Bottles & Accessories", id: "06", image: "/categories/feeding_bottles.png" },
    { name: "Baby Chairs & Booster Seats", id: "07", image: "/categories/baby_chairs.png" },
    { name: "Baby Swings", id: "08", image: "/categories/baby_swings.png" },
    { name: "Baby Mats & Play Gyms", id: "09", image: "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?auto=format&fit=crop&q=80&w=800" },
    { name: "Rattles & Musical Toys", id: "10", image: "/categories/karaoke.png" },
    { name: "Soft Toys & Plush Toys", id: "11", image: "/categories/plush_toys.png" },
    { name: "Teethers", id: "12", image: "https://images.unsplash.com/photo-1596461422482-33f2181e5f29?auto=format&fit=crop&q=80&w=800" },
    { name: "Educational & Learning Toys", id: "13", image: "/categories/educational.png" },
    { name: "Baby Grooming & Care Products", id: "14", image: "https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&q=80&w=800" },
    { name: "Baby Bedding Sets", id: "15", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800" },
    { name: "Baby Blankets & Pillows", id: "16", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800" },
    { name: "Mosquito Nets", id: "17", image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80&w=800" },
    { name: "Diaper Bags", id: "18", image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?auto=format&fit=crop&q=80&w=800" },
    { name: "Colour Pencils", id: "19", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800" },
    { name: "Sketch Pens & Crayons", id: "20", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=800" },
    { name: "Notebooks & Diaries", id: "21", image: "https://images.unsplash.com/photo-1498075702571-ecb018f37596?auto=format&fit=crop&q=80&w=800" },
    { name: "Pens & Pencils", id: "22", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=800" },
    { name: "Erasers & Sharpeners", id: "23", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=800" },
    { name: "Geometry Boxes", id: "24", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=800" },
    { name: "School Bags & Trolley Bags", id: "25", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800" },
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
                <div 
                  key={cat.id} 
                  className="relative group overflow-hidden bg-[#050b24] aspect-[3/4] cursor-pointer"
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                >
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

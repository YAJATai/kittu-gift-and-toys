export default function GallerySection() {
  const images = [
    { src: "/assets/gallery-1.jpeg", alt: "Gallery 1" },
    { src: "/assets/gallery-2.jpeg", alt: "Gallery 2" },
    { src: "/assets/gallery-3.jpeg", alt: "Gallery 3" },
    { src: "/assets/gallery-4.jpeg", alt: "Gallery 4" },
    { src: "/assets/gallery-5.jpeg", alt: "Gallery 5" },
    { src: "/assets/gallery-6.jpeg", alt: "Gallery 6" },
    { src: "/assets/gallery-7.jpeg", alt: "Gallery 7" },
  ];

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 md:px-8 max-w-[1831px] mx-auto text-cream">
      <h3 className="font-mono text-neon text-sm mb-4 uppercase flex items-center gap-4">
        <span className="w-8 h-[1px] bg-neon inline-block"></span>
        Our Store
      </h3>
      <h2 className="font-grotesk text-5xl md:text-7xl lg:text-8xl uppercase mb-12 sm:mb-16">Gallery</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="aspect-square bg-[#050b24] overflow-hidden border border-cream/10 group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

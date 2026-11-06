function Hero() {
  return (
    <section
      id="home"
      className="bg-[#F8EDE8] px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center min-h-[620px]">

        <div className="py-16 md:py-20 md:pr-12">
          <p className="text-[#B77D73] text-xs font-semibold tracking-[0.3em] mb-7">
            THE ART OF EVERYDAY SKINCARE
          </p>

          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-[#49332F]">
            Your skin,
            <br />
            your kind of
            <br />
            <span className="italic text-[#B77D73]">beautiful.</span>
          </h1>

          <p className="text-[#806D67] text-base leading-8 max-w-md mt-7">
            Thoughtfully crafted skincare that celebrates your
            natural beauty. Simple rituals, gentle ingredients,
            and a little love for your skin.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#shop"
              className="bg-[#49332F] text-white px-9 py-4 text-sm tracking-widest hover:bg-[#B77D73] transition"
            >
              SHOP NOW ↗
            </a>

            <a
              href="#about"
              className="border border-[#49332F] text-[#49332F] px-9 py-4 text-sm tracking-widest hover:bg-white transition"
            >
              OUR STORY
            </a>
          </div>

          <div className="flex items-center gap-4 mt-14">
            <div className="flex -space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#D8B6A7] border-2 border-[#F8EDE8]" />
              <div className="w-9 h-9 rounded-full bg-[#B88B79] border-2 border-[#F8EDE8]" />
              <div className="w-9 h-9 rounded-full bg-[#E6C9BB] border-2 border-[#F8EDE8]" />
            </div>
            <p className="text-xs text-[#806D67]">
              Made with care. Loved by skin.
            </p>
          </div>
        </div>

        <div className="relative py-10 md:py-14">
          <img
            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1200&q=85"
            alt="Elegant skincare products"
            className="w-full h-[420px] md:h-[540px] object-cover"
          />

          <div className="absolute bottom-5 left-0 md:-left-10 bg-[#FFFAF7] px-6 py-5 shadow-sm">
            <p className="text-[#B77D73] text-xs tracking-widest">
              A LITTLE SELF-LOVE
            </p>
            <p className="font-serif text-xl text-[#49332F] mt-1">
              Starts with your skin.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;

function About() {
  return (
    <section id="about" className="bg-[#FFFAF7] px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1000&q=85"
            alt="Élora skincare products"
            className="w-full h-[420px] md:h-[550px] object-cover"
          />

          <div className="absolute bottom-6 right-0 md:-right-8 bg-[#F8EDE8] p-6 max-w-[190px]">
            <p className="font-serif text-3xl text-[#49332F]">100%</p>
            <p className="text-xs text-[#806D67] leading-5 mt-2">
              A little more love in every skincare ritual.
            </p>
          </div>
        </div>

        <div className="md:pl-10">
          <p className="text-[#B77D73] text-xs tracking-[0.3em] font-semibold mb-6">
            THE ÉLORA PHILOSOPHY
          </p>

          <h2 className="font-serif text-4xl md:text-6xl text-[#49332F] leading-tight">
            Beauty begins
            <br />
            with <span className="italic text-[#B77D73]">feeling good.</span>
          </h2>

          <p className="text-[#806D67] leading-8 mt-7">
            We believe skincare should feel less like a routine
            and more like a moment of self-love. That's why
            ÉLORA is built around simple rituals, thoughtful
            choices and the beauty of being yourself.
          </p>

          <p className="text-[#806D67] leading-8 mt-4">
            From your first cleanse to your final moisturising
            step, we're here to make every little moment count.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10 border-t border-[#E8D9D3] pt-7">
            <div>
              <p className="font-serif text-xl text-[#49332F]">
                Thoughtful
              </p>
              <p className="text-xs text-[#806D67] mt-2">
                Carefully considered skincare.
              </p>
            </div>

            <div>
              <p className="font-serif text-xl text-[#49332F]">
                Beautiful
              </p>
              <p className="text-xs text-[#806D67] mt-2">
                Everyday moments of self-care.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;

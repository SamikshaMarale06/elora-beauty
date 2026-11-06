function PromoBanner() {
  return (
    <section className="bg-[#49332F] px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">

        <div className="text-white">
          <p className="text-[#E7B8A9] text-xs tracking-[0.3em] font-semibold mb-6">
            A LITTLE SOMETHING FOR YOU
          </p>

          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Your glow deserves
            <br />
            <span className="italic text-[#E7B8A9]">a little extra.</span>
          </h2>

          <p className="text-[#E8D9D3] text-sm leading-7 mt-6 max-w-md">
            Make your everyday skincare ritual more special.
            Enjoy a little treat on your next beauty purchase.
          </p>

          <div className="mt-8 flex items-center gap-5">
            <div className="border border-[#E7B8A9] px-6 py-4">
              <p className="text-[10px] tracking-widest text-[#E7B8A9]">
                USE CODE
              </p>
              <p className="text-2xl font-serif tracking-widest mt-1">
                GLOW15
              </p>
            </div>

            <p className="text-sm text-[#E8D9D3]">
              Get 15% OFF
              <br />
              your first order
            </p>
          </div>

          <a
            href="#shop"
            className="inline-block bg-[#F8EDE8] text-[#49332F] px-8 py-4 text-xs tracking-widest mt-9 hover:bg-[#E7B8A9] transition"
          >
            SHOP THE COLLECTION ↗
          </a>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1100&q=85"
            alt="Skincare collection"
            className="w-full h-[350px] md:h-[460px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default PromoBanner;

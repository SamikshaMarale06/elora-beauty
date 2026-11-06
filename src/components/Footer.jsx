function Footer() {
  return (
    <footer id="contact" className="bg-[#49332F] text-white px-6 md:px-12 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">

          <div className="lg:col-span-2">
            <h2 className="font-serif text-4xl tracking-widest">
              ÉLORA<span className="text-[#E7B8A9]">.</span>
            </h2>

            <p className="text-[#E8D9D3] text-sm leading-7 max-w-sm mt-5">
              Thoughtfully crafted beauty for your everyday
              rituals. Celebrate your natural beauty, one
              little moment at a time.
            </p>

            <p className="text-[#E7B8A9] text-sm mt-6">
              hello@elorabeauty.com
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-6">EXPLORE</h3>
            <div className="flex flex-col gap-4 text-sm text-[#E8D9D3]">
              <a href="#home" className="hover:text-[#E7B8A9]">Home</a>
              <a href="#collections" className="hover:text-[#E7B8A9]">Collections</a>
              <a href="#shop" className="hover:text-[#E7B8A9]">Shop</a>
              <a href="#about" className="hover:text-[#E7B8A9]">Our Story</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-6">FOLLOW US</h3>
            <div className="flex flex-col gap-4 text-sm text-[#E8D9D3]">
              <span>Instagram</span>
              <span>Pinterest</span>
              <span>Facebook</span>
            </div>
          </div>

        </div>

        <div className="border-t border-white/20 pt-7 flex flex-col md:flex-row justify-between gap-4 text-xs text-[#D8C5BE]">
          <p>© 2026 ÉLORA BEAUTY. All rights reserved.</p>
          <p>Made with love for your everyday beauty. ♡</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

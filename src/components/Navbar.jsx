import { useState } from "react";

function Navbar({
  searchQuery,
  setSearchQuery,
  cartCount,
  onOpenCart,
}) {
  const [showSearch, setShowSearch] = useState(false);

  function closeSearch() {
    setShowSearch(false);
    setSearchQuery("");
  }

  function handleSearch(e) {
    e.preventDefault();

    document.getElementById("shop")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <>
  

      <nav className="bg-[#FFFAF7] px-6 md:px-12 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          <a href="#home" className="text-3xl font-serif tracking-widest text-[#49332F] shrink-0">
            ÉLORA<span className="text-[#C58D83]">.</span>
          </a>

          <div className="hidden md:flex items-center gap-9 text-sm text-[#49332F]">
            <a href="#home" className="hover:text-[#C58D83]">Home</a>
            <a href="#shop" className="hover:text-[#C58D83]">Shop</a>
            <a href="#collections" className="hover:text-[#C58D83]">Collections</a>
            <a href="#about" className="hover:text-[#C58D83]">Our Story</a>
            <a href="#contact" className="hover:text-[#C58D83]">Contact</a>
          </div>

          <div className="flex items-center gap-5 text-[#49332F]">

            <button
              type="button"
              onClick={() => setShowSearch(!showSearch)}
              className="text-2xl hover:text-[#C58D83]"
              aria-label="Open search"
            >
              ⌕
            </button>

            <span className="text-xl cursor-pointer">♡</span>

            <button
              type="button"
              onClick={onOpenCart}
              aria-label="Open shopping bag"
              className="relative text-xl hover:text-[#C58D83]"
            >
              ♧

              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 bg-[#B77D73] text-white text-[9px] w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

          </div>
        </div>

        {showSearch && (
          <form onSubmit={handleSearch} className="max-w-7xl mx-auto mt-5">
            <div className="flex items-center border-b border-[#D8B6A7] py-3 gap-3">

              <span className="text-xl text-[#B77D73]">⌕</span>

              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skincare products..."
                autoFocus
                className="flex-1 min-w-0 bg-transparent outline-none text-sm text-[#49332F] placeholder:text-[#A9958D]"
              />

              <button
                type="submit"
                className="text-xs tracking-widest text-[#B77D73] hover:text-[#49332F]"
              >
                SEARCH
              </button>

              <button
                type="button"
                onClick={closeSearch}
                className="text-xs tracking-widest text-[#806D67] hover:text-[#B77D73]"
              >
                CLOSE ✕
              </button>

            </div>
          </form>
        )}
      </nav>
    </>
  );
}

export default Navbar;

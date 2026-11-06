function BestSellers({ products, searchQuery, onAddToCart }) {
  const filteredProducts = products.filter((product) => {
    const search = searchQuery.trim().toLowerCase();

    return (
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.tag.toLowerCase().includes(search)
    );
  });

  return (
    <section id="shop" className="bg-[#F8EDE8] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-[#B77D73] text-xs font-semibold tracking-[0.3em] mb-4">
            YOUR SKIN WILL LOVE THESE
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-[#49332F]">
            Our best sellers
          </h2>

          <p className="text-[#806D67] text-sm mt-4">
            {searchQuery.trim()
              ? `Search results for "${searchQuery}"`
              : "Little favourites that make a big difference."}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">

                <div className="relative overflow-hidden bg-[#F2DFD7]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 md:h-80 object-cover group-hover:scale-105 transition duration-500"
                  />

                  <span className="absolute top-3 left-3 bg-white text-[#49332F] text-[9px] tracking-widest px-3 py-2">
                    {product.tag}
                  </span>
                </div>

                <div className="pt-5">
                  <p className="text-[10px] tracking-widest text-[#B77D73] font-semibold">
                    {product.category}
                  </p>

                  <h3 className="font-serif text-lg md:text-xl text-[#49332F] mt-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm font-semibold text-[#49332F]">
                      ₹{product.price}
                    </span>

                    <span className="text-xs text-[#9B8982] line-through">
                      ₹{product.oldPrice}
                    </span>

                    <span className="text-xs text-[#B77D73] ml-auto">
                      ★ {product.rating}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onAddToCart(product)}
                    className="w-full mt-5 border border-[#49332F] py-3 text-xs tracking-widest text-[#49332F] hover:bg-[#49332F] hover:text-white transition"
                  >
                    ADD TO BAG +
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="font-serif text-2xl text-[#49332F]">
              No products found ♡
            </p>

            <p className="text-sm text-[#806D67] mt-3">
              Try searching for serum, moisturizer, cleanser or body.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default BestSellers;

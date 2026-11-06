const categories = [
  {
    name: "Face Care",
    subtitle: "Nourish your natural glow",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Serums",
    subtitle: "A little extra care",
    image:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Body Care",
    subtitle: "Love every inch of you",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Sun Care",
    subtitle: "Your daily sunshine shield",
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Self Care",
    subtitle: "Make time for yourself",
    image:
      "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=700&q=85",
  },
];

function Categories() {
  return (
    <section id="collections" className="bg-[#FFFAF7] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-[#B77D73] text-xs font-semibold tracking-[0.3em] mb-4">
            FIND YOUR FAVOURITES
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-[#49332F]">
            Shop by category
          </h2>

          <p className="text-[#806D67] mt-4 text-sm">
            Everything your skin needs, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories.map((category) => (
            <div key={category.name} className="group cursor-pointer">

              <div className="overflow-hidden bg-[#F8EDE8]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-56 md:h-72 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="text-center pt-5">
                <h3 className="font-serif text-xl text-[#49332F]">
                  {category.name}
                </h3>

                <p className="text-xs text-[#806D67] mt-2">
                  {category.subtitle}
                </p>

                <p className="text-[10px] tracking-widest text-[#B77D73] mt-4 font-semibold">
                  EXPLORE ↗
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;

const reviews = [
  {
    name: "Aarohi Sharma",
    location: "Mumbai",
    review:
      "The products feel so gentle on my skin. My skincare routine has become my favourite part of the day!",
    rating: "★★★★★",
  },
  {
    name: "Riya Mehta",
    location: "Pune",
    review:
      "I absolutely love the packaging and the overall experience. Everything feels thoughtful and beautiful.",
    rating: "★★★★★",
  },
  {
    name: "Ananya Patil",
    location: "Nashik",
    review:
      "Beautiful products and such a lovely shopping experience. Definitely coming back for more!",
    rating: "★★★★★",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#F8EDE8] px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-[#B77D73] text-xs tracking-[0.3em] font-semibold mb-4">
            KIND WORDS
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-[#49332F]">
            Love notes from you
          </h2>

          <p className="text-sm text-[#806D67] mt-4">
            A little happiness shared by our community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-[#FFFAF7] p-8 md:p-10"
            >
              <p className="text-[#B77D73] tracking-widest text-sm">
                {review.rating}
              </p>

              <p className="font-serif text-xl text-[#49332F] leading-8 mt-7">
                "{review.review}"
              </p>

              <div className="border-t border-[#E8D9D3] mt-8 pt-5">
                <p className="text-sm font-semibold text-[#49332F]">
                  {review.name}
                </p>
                <p className="text-xs text-[#806D67] mt-1">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;

import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <section className="bg-[#FFFAF7] px-6 md:px-12 py-20">
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-[#B77D73] text-xs tracking-[0.3em] font-semibold mb-5">
          A LITTLE LOVE IN YOUR INBOX
        </p>

        <h2 className="font-serif text-4xl md:text-5xl text-[#49332F]">
          Let's stay in touch.
        </h2>

        <p className="text-sm text-[#806D67] leading-7 mt-5 max-w-lg mx-auto">
          Subscribe to our newsletter for skincare tips,
          new launches and little surprises.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 mt-9 max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSubscribed(false);
            }}
            placeholder="Enter your email address"
            className="flex-1 bg-white border border-[#E8D9D3] px-5 py-4 text-sm outline-none focus:border-[#B77D73]"
          />

          <button
            type="submit"
            className="bg-[#49332F] text-white px-8 py-4 text-xs tracking-widest hover:bg-[#B77D73] transition"
          >
            SUBSCRIBE ↗
          </button>
        </form>

        {subscribed && (
          <p className="text-sm text-[#806D67] mt-5">
            Thank you for subscribing! ♡
          </p>
        )}

      </div>
    </section>
  );
}

export default Newsletter;

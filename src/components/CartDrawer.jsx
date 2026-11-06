function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Background overlay */}
      <button
        type="button"
        aria-label="Close shopping bag"
        onClick={onClose}
        className="absolute inset-0 bg-black/40 cursor-default"
      />

      {/* Shopping bag panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#FFFAF7] shadow-xl flex flex-col">

        <div className="flex items-center justify-between px-6 py-6 border-b border-[#E8D9D3]">
          <div>
            <h2 className="font-serif text-2xl text-[#49332F]">
              Your Shopping Bag
            </h2>
            <p className="text-xs text-[#806D67] mt-1">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xl text-[#49332F] hover:text-[#B77D73]"
          >
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <p className="text-5xl text-[#B77D73]">♡</p>
            <h3 className="font-serif text-2xl text-[#49332F] mt-5">
              Your bag is empty
            </h3>
            <p className="text-sm text-[#806D67] mt-3">
              Looks like you haven't added anything yet.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="bg-[#49332F] text-white px-7 py-3 text-xs tracking-widest mt-7 hover:bg-[#B77D73]"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 py-5 border-b border-[#E8D9D3]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-28 object-cover bg-[#F2DFD7]"
                  />

                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-[#49332F]">
                      {item.name}
                    </h3>

                    <p className="text-sm text-[#806D67] mt-2">
                      ₹{item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                      <button
                        type="button"
                        onClick={() => onDecrease(item.id)}
                        className="w-7 h-7 border border-[#D8B6A7] text-[#49332F]"
                      >
                        −
                      </button>

                      <span className="text-sm text-[#49332F]">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => onIncrease(item.id)}
                        className="w-7 h-7 border border-[#D8B6A7] text-[#49332F]"
                      >
                        +
                      </button>

                      <button
                        type="button"
                        onClick={() => onRemove(item.id)}
                        className="text-xs text-[#B77D73] ml-auto hover:text-[#49332F]"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#E8D9D3] px-6 py-6">
              <div className="flex justify-between text-[#49332F] mb-5">
                <span className="text-sm">Subtotal</span>
                <span className="font-semibold">₹{total}</span>
              </div>

              <p className="text-xs text-[#806D67] mb-5">
                Shipping and taxes can be calculated at checkout.
              </p>

              <button
                type="button"
                onClick={() => window.alert("Checkout is a demo feature and is not connected yet.")}
                className="w-full bg-[#49332F] text-white py-4 text-xs tracking-widest hover:bg-[#B77D73] transition"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;

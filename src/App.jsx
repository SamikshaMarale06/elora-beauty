import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import BestSellers from "./components/BestSellers";
import PromoBanner from "./components/PromoBanner";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

const products = [
  {
    id: 1,
    name: "Hydrating Face Serum",
    category: "FACE SERUM",
    price: 599,
    oldPrice: 799,
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=85",
    tag: "BESTSELLER",
  },
  {
    id: 2,
    name: "Daily Glow Moisturizer",
    category: "MOISTURIZER",
    price: 749,
    oldPrice: 899,
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85",
    tag: "POPULAR",
  },
  {
    id: 3,
    name: "Gentle Face Cleanser",
    category: "FACE WASH",
    price: 399,
    oldPrice: 499,
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=85",
    tag: "EVERYDAY CARE",
  },
  {
    id: 4,
    name: "Nourishing Body Lotion",
    category: "BODY CARE",
    price: 549,
    oldPrice: 699,
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=85",
    tag: "CUSTOMER FAVOURITE",
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function addToCart(product) {
    setCartItems((previous) => {
      const existing = previous.find((item) => item.id === product.id);

      if (existing) {
        return previous.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previous, { ...product, quantity: 1 }];
    });
  }

  function increaseQuantity(id) {
    setCartItems((previous) =>
      previous.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCartItems((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCartItems((previous) =>
      previous.filter((item) => item.id !== id)
    );
  }

  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
        <Hero />
        <Categories />
        <BestSellers
          products={products}
          searchQuery={searchQuery}
          onAddToCart={addToCart}
        />
        <PromoBanner />
        <About />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeFromCart}
      />
    </>
  );
}

export default App;

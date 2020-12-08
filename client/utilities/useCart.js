import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

export default function useCart() {
  const [cart, setCart] = useContext(CartContext);
  const { products, isCartOpen } = cart;
  const toggleCartOpen = () =>
    setCart((prev) => ({ ...prev, isCartOpen: !isCartOpen }));
  return {
    products,
    isCartOpen,
    toggleCartOpen,
  };
}

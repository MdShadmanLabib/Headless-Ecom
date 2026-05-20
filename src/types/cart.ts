export interface CartItem {
  id: string;
  productId: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  maxQuantity: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  itemCount: number;
}

export interface CartAction {
  type: "add" | "remove" | "update" | "clear";
  productId: string;
  quantity?: number;
}

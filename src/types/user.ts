export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  avatar?: string;
  addresses: Address[];
  defaultAddressId?: string;
  createdAt: string;
}

export interface Address {
  id: string;
  label: string;
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  district: string;
  postalCode: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
  timeline: OrderTimeline[];
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "returned";

export interface OrderItem {
  productId: string;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  image: string;
}

export interface OrderTimeline {
  status: OrderStatus;
  timestamp: string;
  note?: string;
}

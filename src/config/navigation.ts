export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  featured?: boolean;
  icon?: string;
}

export interface MegaMenuPromo {
  title: string;
  description: string;
  href: string;
  badge?: string;
}

export interface MegaMenuItem extends NavItem {
  columns?: NavItem[][];
  promo?: MegaMenuPromo;
}

export const mainNavigation: MegaMenuItem[] = [
  {
    label: "Laptop",
    href: "/categories/laptop",
    children: [
      { label: "All Laptop", href: "/categories/laptop" },
      { label: "Gaming Laptop", href: "/categories/laptop/gaming" },
      { label: "Ultrabook", href: "/categories/laptop/ultrabook" },
      { label: "OLED Laptop", href: "/categories/laptop/oled" },
      { label: "Laptop Accessories", href: "/categories/laptop/accessories" },
    ],
    promo: {
      title: "Gaming Laptops",
      description: "RTX 50 Series now available",
      href: "/categories/laptop/gaming",
      badge: "New",
    },
  },
  {
    label: "Desktop",
    href: "/categories/desktop",
    children: [
      { label: "Desktop PC", href: "/categories/desktop/pc" },
      { label: "Gaming PC", href: "/categories/desktop/gaming" },
      { label: "Brand PC", href: "/categories/desktop/brand" },
      { label: "All-in-One PC", href: "/categories/desktop/aio" },
      { label: "Mini PC", href: "/categories/desktop/mini" },
    ],
    promo: {
      title: "Custom Build PCs",
      description: "Build your dream machine",
      href: "/pc-builder",
      badge: "Popular",
    },
  },
  {
    label: "Components",
    href: "/categories/components",
    columns: [
      [
        { label: "Processor", href: "/categories/components/processor" },
        { label: "Motherboard", href: "/categories/components/motherboard" },
        { label: "Graphics Card", href: "/categories/components/graphics-card" },
      ],
      [
        { label: "RAM", href: "/categories/components/ram" },
        { label: "SSD", href: "/categories/components/ssd" },
        { label: "HDD", href: "/categories/components/hdd" },
      ],
      [
        { label: "Power Supply", href: "/categories/components/psu" },
        { label: "Casing", href: "/categories/components/casing" },
        { label: "CPU Cooler", href: "/categories/components/cpu-cooler" },
      ],
    ],
    children: [
      { label: "Processor", href: "/categories/components/processor" },
      { label: "Motherboard", href: "/categories/components/motherboard" },
      { label: "Graphics Card", href: "/categories/components/graphics-card" },
      { label: "RAM", href: "/categories/components/ram" },
      { label: "SSD", href: "/categories/components/ssd" },
      { label: "HDD", href: "/categories/components/hdd" },
      { label: "Power Supply", href: "/categories/components/psu" },
      { label: "Casing", href: "/categories/components/casing" },
      { label: "CPU Cooler", href: "/categories/components/cpu-cooler" },
    ],
    promo: {
      title: "RTX 5090 Ti",
      description: "Next-gen performance is here",
      href: "/categories/components/graphics-card",
      badge: "Hot",
    },
  },
  {
    label: "Monitor",
    href: "/categories/monitor",
    children: [
      { label: "All Monitor", href: "/categories/monitor" },
      { label: "Gaming Monitor", href: "/categories/monitor/gaming" },
      { label: "4K Monitor", href: "/categories/monitor/4k" },
      { label: "Curved Monitor", href: "/categories/monitor/curved" },
      { label: "Portable Monitor", href: "/categories/monitor/portable" },
    ],
  },
  {
    label: "Networking",
    href: "/categories/networking",
    children: [
      { label: "Router", href: "/categories/networking/router" },
      { label: "Switch", href: "/categories/networking/switch" },
      { label: "Wi-Fi Adapter", href: "/categories/networking/wifi-adapter" },
      { label: "Access Point", href: "/categories/networking/access-point" },
    ],
  },
  {
    label: "Accessories",
    href: "/categories/accessories",
    columns: [
      [
        { label: "Keyboard", href: "/categories/accessories/keyboard" },
        { label: "Mouse", href: "/categories/accessories/mouse" },
        { label: "Headset", href: "/categories/accessories/headset" },
      ],
      [
        { label: "Webcam", href: "/categories/accessories/webcam" },
        { label: "Speaker", href: "/categories/accessories/speaker" },
        { label: "Mousepad", href: "/categories/accessories/mousepad" },
      ],
    ],
    children: [
      { label: "Keyboard", href: "/categories/accessories/keyboard" },
      { label: "Mouse", href: "/categories/accessories/mouse" },
      { label: "Headset", href: "/categories/accessories/headset" },
      { label: "Webcam", href: "/categories/accessories/webcam" },
      { label: "Speaker", href: "/categories/accessories/speaker" },
      { label: "Mousepad", href: "/categories/accessories/mousepad" },
    ],
  },
  {
    label: "Gaming",
    href: "/categories/gaming",
    children: [
      { label: "Gaming Console", href: "/categories/gaming/console" },
      { label: "Gaming Chair", href: "/categories/gaming/chair" },
      { label: "Gaming Desk", href: "/categories/gaming/desk" },
      { label: "VR Headset", href: "/categories/gaming/vr" },
    ],
  },
  {
    label: "Office Equipment",
    href: "/categories/office",
    children: [
      { label: "Printer", href: "/categories/office/printer" },
      { label: "Scanner", href: "/categories/office/scanner" },
      { label: "Projector", href: "/categories/office/projector" },
      { label: "UPS/IPS", href: "/categories/office/ups" },
    ],
  },
];

export const quickLinks: NavItem[] = [
  { label: "Deals", href: "/deals", featured: true },
  { label: "PC Builder", href: "/pc-builder", featured: true },
  { label: "Compare", href: "/compare" },
  { label: "Order Tracking", href: "/order-tracking" },
];

export const footerNavigation = {
  about: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Branches", href: "/branches" },
    { label: "Careers", href: "/careers" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Return Policy", href: "/return-policy" },
    { label: "Warranty Policy", href: "/warranty-policy" },
  ],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "Service Center", href: "/service-center" },
    { label: "Raise a Complaint", href: "/complaint" },
    { label: "Home Service", href: "/home-service" },
  ],
} as const;

export const announcementMessages = [
  "Free shipping on orders over ৳5,000",
  "Up to 30% off on Gaming Laptops — Limited Time",
  "New RTX 50 Series GPUs now in stock",
] as const;

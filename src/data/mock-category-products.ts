import type { Product } from "@/types";

function createCategoryProduct(
  overrides: Partial<Product> & {
    id: string;
    name: string;
    slug: string;
    price: number;
  },
): Product {
  return {
    description: "",
    sku: `SKU-${overrides.id}`,
    currency: "BDT",
    images: [
      {
        id: `img-${overrides.id}`,
        url: `/placeholder/${overrides.slug}.webp`,
        alt: overrides.name,
        width: 600,
        height: 600,
        isPrimary: true,
      },
    ],
    category: { id: "cat-1", slug: "components", name: "Components" },
    brand: { id: "brand-1", slug: "generic", name: "Generic" },
    specifications: [],
    inStock: true,
    tags: [],
    badges: [],
    createdAt: "2026-01-15T10:00:00Z",
    updatedAt: "2026-05-10T10:00:00Z",
    ...overrides,
  };
}

const gpuCategory = { id: "cat-gpu", slug: "graphics-card", name: "Graphics Card" };
const cpuCategory = { id: "cat-cpu", slug: "processor", name: "Processor" };
const monitorCategory = { id: "cat-monitor", slug: "monitor", name: "Monitor" };
const laptopCategory = { id: "cat-laptop", slug: "laptop", name: "Laptop" };
const ramCategory = { id: "cat-ram", slug: "ram", name: "RAM" };
const ssdCategory = { id: "cat-ssd", slug: "ssd", name: "SSD" };
const mbCategory = { id: "cat-mb", slug: "motherboard", name: "Motherboard" };
const kbCategory = { id: "cat-kb", slug: "keyboard", name: "Keyboard" };

const brandNvidia = { id: "brand-nvidia", slug: "nvidia", name: "NVIDIA" };
const brandAmd = { id: "brand-amd", slug: "amd", name: "AMD" };
const brandIntel = { id: "brand-intel", slug: "intel", name: "Intel" };
const brandAsus = { id: "brand-asus", slug: "asus", name: "ASUS" };
const brandMsi = { id: "brand-msi", slug: "msi", name: "MSI" };
const brandCorsair = { id: "brand-corsair", slug: "corsair", name: "Corsair" };
const brandSamsung = { id: "brand-samsung", slug: "samsung", name: "Samsung" };
const brandLg = { id: "brand-lg", slug: "lg", name: "LG" };
const brandGigabyte = { id: "brand-gigabyte", slug: "gigabyte", name: "Gigabyte" };
const brandRazer = { id: "brand-razer", slug: "razer", name: "Razer" };
const brandLogitech = { id: "brand-logitech", slug: "logitech", name: "Logitech" };
const brandDell = { id: "brand-dell", slug: "dell", name: "Dell" };
const brandLenovo = { id: "brand-lenovo", slug: "lenovo", name: "Lenovo" };
const brandApple = { id: "brand-apple", slug: "apple", name: "Apple" };
const brandKingston = { id: "brand-kingston", slug: "kingston", name: "Kingston" };
const brandGskill = { id: "brand-gskill", slug: "g-skill", name: "G.Skill" };

export const allCategoryProducts: Product[] = [
  // GPUs
  createCategoryProduct({
    id: "cat-p1",
    name: "NVIDIA GeForce RTX 5090 Ti 24GB GDDR7",
    slug: "rtx-5090-ti",
    price: 289999,
    originalPrice: 319999,
    category: gpuCategory,
    brand: brandNvidia,
    badges: [{ type: "new", label: "New" }],
    rating: 4.9,
    reviewCount: 128,
    stockCount: 5,
  }),
  createCategoryProduct({
    id: "cat-p2",
    name: "NVIDIA GeForce RTX 5080 16GB GDDR7",
    slug: "rtx-5080",
    price: 159999,
    originalPrice: 179999,
    category: gpuCategory,
    brand: brandNvidia,
    badges: [{ type: "hot", label: "Hot" }],
    rating: 4.8,
    reviewCount: 256,
    stockCount: 12,
  }),
  createCategoryProduct({
    id: "cat-p3",
    name: "AMD Radeon RX 9070 XT 16GB",
    slug: "rx-9070-xt",
    price: 89999,
    category: gpuCategory,
    brand: brandAmd,
    rating: 4.6,
    reviewCount: 189,
  }),
  createCategoryProduct({
    id: "cat-p4",
    name: "ASUS ROG Strix RTX 5090 OC 24GB",
    slug: "rog-strix-rtx-5090",
    price: 329999,
    category: gpuCategory,
    brand: brandAsus,
    badges: [{ type: "new", label: "New" }],
    rating: 4.9,
    reviewCount: 67,
    stockCount: 2,
  }),
  createCategoryProduct({
    id: "cat-p5",
    name: "MSI GeForce RTX 5070 Ti GAMING X 12GB",
    slug: "msi-rtx-5070-ti",
    price: 109999,
    originalPrice: 124999,
    category: gpuCategory,
    brand: brandMsi,
    badges: [{ type: "sale", label: "-12%" }],
    rating: 4.5,
    reviewCount: 98,
  }),
  createCategoryProduct({
    id: "cat-p6",
    name: "Gigabyte AORUS RTX 5080 MASTER 16GB",
    slug: "aorus-rtx-5080-master",
    price: 174999,
    category: gpuCategory,
    brand: brandGigabyte,
    rating: 4.7,
    reviewCount: 134,
    stockCount: 8,
  }),

  // CPUs
  createCategoryProduct({
    id: "cat-p7",
    name: "AMD Ryzen 9 9950X Processor",
    slug: "ryzen-9-9950x",
    price: 89999,
    originalPrice: 99999,
    category: cpuCategory,
    brand: brandAmd,
    badges: [{ type: "hot", label: "Hot" }],
    rating: 4.8,
    reviewCount: 312,
  }),
  createCategoryProduct({
    id: "cat-p8",
    name: "Intel Core Ultra 9 285K Processor",
    slug: "core-ultra-9-285k",
    price: 79999,
    category: cpuCategory,
    brand: brandIntel,
    badges: [{ type: "new", label: "New" }],
    rating: 4.7,
    reviewCount: 187,
    stockCount: 15,
  }),
  createCategoryProduct({
    id: "cat-p9",
    name: "AMD Ryzen 7 9700X Processor",
    slug: "ryzen-7-9700x",
    price: 49999,
    originalPrice: 54999,
    category: cpuCategory,
    brand: brandAmd,
    rating: 4.6,
    reviewCount: 445,
  }),
  createCategoryProduct({
    id: "cat-p10",
    name: "Intel Core Ultra 7 265K Processor",
    slug: "core-ultra-7-265k",
    price: 54999,
    category: cpuCategory,
    brand: brandIntel,
    rating: 4.5,
    reviewCount: 223,
  }),
  createCategoryProduct({
    id: "cat-p11",
    name: "AMD Ryzen 5 9600X Processor",
    slug: "ryzen-5-9600x",
    price: 34999,
    category: cpuCategory,
    brand: brandAmd,
    badges: [{ type: "hot", label: "Best Value" }],
    rating: 4.7,
    reviewCount: 678,
  }),

  // Monitors
  createCategoryProduct({
    id: "cat-p12",
    name: 'ASUS ROG Swift OLED PG32UCDM 32" 4K 240Hz',
    slug: "rog-swift-oled-32",
    price: 159999,
    category: monitorCategory,
    brand: brandAsus,
    badges: [{ type: "new", label: "New" }],
    rating: 4.9,
    reviewCount: 87,
    stockCount: 4,
  }),
  createCategoryProduct({
    id: "cat-p13",
    name: 'LG UltraGear 27" 4K 160Hz IPS Gaming Monitor',
    slug: "lg-ultragear-27gp950",
    price: 54999,
    originalPrice: 72999,
    discountPercentage: 25,
    category: monitorCategory,
    brand: brandLg,
    badges: [{ type: "sale", label: "-25%" }],
    rating: 4.6,
    reviewCount: 234,
  }),
  createCategoryProduct({
    id: "cat-p14",
    name: 'Samsung Odyssey OLED G8 34" WQHD 175Hz',
    slug: "odyssey-oled-g8",
    price: 119999,
    originalPrice: 139999,
    category: monitorCategory,
    brand: brandSamsung,
    rating: 4.8,
    reviewCount: 156,
    stockCount: 6,
  }),
  createCategoryProduct({
    id: "cat-p15",
    name: 'Dell UltraSharp U2724D 27" 4K IPS Hub Monitor',
    slug: "dell-u2724d",
    price: 69999,
    category: monitorCategory,
    brand: brandDell,
    rating: 4.7,
    reviewCount: 312,
  }),
  createCategoryProduct({
    id: "cat-p16",
    name: 'MSI MEG 342C QD-OLED 34" UWQHD 175Hz',
    slug: "msi-meg-342c",
    price: 134999,
    category: monitorCategory,
    brand: brandMsi,
    badges: [{ type: "hot", label: "Popular" }],
    rating: 4.7,
    reviewCount: 89,
  }),

  // Laptops
  createCategoryProduct({
    id: "cat-p17",
    name: 'MacBook Pro 16" M4 Max 48GB 1TB',
    slug: "macbook-pro-16-m4-max",
    price: 449999,
    category: laptopCategory,
    brand: brandApple,
    badges: [{ type: "new", label: "New" }],
    rating: 4.9,
    reviewCount: 567,
  }),
  createCategoryProduct({
    id: "cat-p18",
    name: "ASUS ROG Strix G16 RTX 4070 Gaming Laptop",
    slug: "rog-strix-g16-rtx4070",
    price: 179999,
    originalPrice: 199999,
    category: laptopCategory,
    brand: brandAsus,
    badges: [{ type: "sale", label: "-10%" }],
    rating: 4.7,
    reviewCount: 312,
  }),
  createCategoryProduct({
    id: "cat-p19",
    name: 'Lenovo ThinkPad X1 Carbon Gen 12 14"',
    slug: "thinkpad-x1-carbon-gen12",
    price: 219999,
    originalPrice: 249999,
    category: laptopCategory,
    brand: brandLenovo,
    rating: 4.7,
    reviewCount: 234,
  }),
  createCategoryProduct({
    id: "cat-p20",
    name: 'Dell XPS 15 OLED 15.6" i9 32GB',
    slug: "dell-xps-15-oled",
    price: 279999,
    category: laptopCategory,
    brand: brandDell,
    rating: 4.8,
    reviewCount: 178,
    inStock: false,
  }),
  createCategoryProduct({
    id: "cat-p21",
    name: "MSI Raider GE78 HX RTX 4090 Gaming Laptop",
    slug: "msi-raider-ge78-rtx4090",
    price: 389999,
    originalPrice: 429999,
    category: laptopCategory,
    brand: brandMsi,
    badges: [{ type: "hot", label: "Hot" }],
    rating: 4.6,
    reviewCount: 143,
    stockCount: 3,
  }),

  // RAM
  createCategoryProduct({
    id: "cat-p22",
    name: "Corsair Dominator Titanium 64GB DDR5-6400 RGB",
    slug: "corsair-dominator-titanium-64gb",
    price: 42999,
    originalPrice: 49999,
    category: ramCategory,
    brand: brandCorsair,
    badges: [{ type: "sale", label: "-14%" }],
    rating: 4.7,
    reviewCount: 189,
  }),
  createCategoryProduct({
    id: "cat-p23",
    name: "G.Skill Trident Z5 Royal 32GB DDR5-6000 CL30",
    slug: "trident-z5-royal-32gb",
    price: 22999,
    category: ramCategory,
    brand: brandGskill,
    rating: 4.8,
    reviewCount: 312,
  }),
  createCategoryProduct({
    id: "cat-p24",
    name: "Kingston Fury Beast 32GB DDR5-5600",
    slug: "fury-beast-32gb-ddr5",
    price: 14999,
    category: ramCategory,
    brand: brandKingston,
    badges: [{ type: "hot", label: "Best Value" }],
    rating: 4.6,
    reviewCount: 567,
  }),

  // SSDs
  createCategoryProduct({
    id: "cat-p25",
    name: "Samsung 990 EVO Plus 2TB NVMe M.2 SSD",
    slug: "samsung-990-evo-plus-2tb",
    price: 18999,
    originalPrice: 22999,
    category: ssdCategory,
    brand: brandSamsung,
    rating: 4.8,
    reviewCount: 445,
  }),
  createCategoryProduct({
    id: "cat-p26",
    name: "Samsung 990 Pro 4TB NVMe M.2 SSD",
    slug: "samsung-990-pro-4tb",
    price: 42999,
    category: ssdCategory,
    brand: brandSamsung,
    badges: [{ type: "new", label: "New" }],
    rating: 4.9,
    reviewCount: 123,
    stockCount: 7,
  }),
  createCategoryProduct({
    id: "cat-p27",
    name: "Kingston KC3000 2TB NVMe M.2 SSD",
    slug: "kingston-kc3000-2tb",
    price: 16999,
    originalPrice: 19999,
    category: ssdCategory,
    brand: brandKingston,
    rating: 4.7,
    reviewCount: 289,
  }),

  // Motherboards
  createCategoryProduct({
    id: "cat-p28",
    name: "ASUS ROG Crosshair X870E Hero AM5",
    slug: "rog-crosshair-x870e",
    price: 89999,
    category: mbCategory,
    brand: brandAsus,
    badges: [{ type: "new", label: "New" }],
    rating: 4.8,
    reviewCount: 76,
    stockCount: 4,
  }),
  createCategoryProduct({
    id: "cat-p29",
    name: "MSI MEG Z890 ACE Motherboard",
    slug: "msi-meg-z890-ace",
    price: 74999,
    category: mbCategory,
    brand: brandMsi,
    rating: 4.7,
    reviewCount: 134,
  }),
  createCategoryProduct({
    id: "cat-p30",
    name: "Gigabyte X870E AORUS MASTER AM5",
    slug: "gigabyte-x870e-aorus-master",
    price: 69999,
    originalPrice: 79999,
    category: mbCategory,
    brand: brandGigabyte,
    badges: [{ type: "sale", label: "-13%" }],
    rating: 4.6,
    reviewCount: 98,
  }),

  // Keyboards
  createCategoryProduct({
    id: "cat-p31",
    name: "Razer BlackWidow V4 Pro Mechanical Keyboard",
    slug: "razer-blackwidow-v4-pro",
    price: 22999,
    originalPrice: 29999,
    discountPercentage: 23,
    category: kbCategory,
    brand: brandRazer,
    badges: [{ type: "sale", label: "-23%" }],
    rating: 4.5,
    reviewCount: 223,
    stockCount: 8,
  }),
  createCategoryProduct({
    id: "cat-p32",
    name: "Logitech G Pro X TKL Wireless Keyboard",
    slug: "logitech-g-pro-x-tkl",
    price: 18999,
    category: kbCategory,
    brand: brandLogitech,
    rating: 4.6,
    reviewCount: 345,
  }),
  createCategoryProduct({
    id: "cat-p33",
    name: "Corsair K100 RGB Mechanical Gaming Keyboard",
    slug: "corsair-k100-rgb",
    price: 24999,
    category: kbCategory,
    brand: brandCorsair,
    badges: [{ type: "hot", label: "Popular" }],
    rating: 4.7,
    reviewCount: 412,
    inStock: false,
  }),

  // Additional GPUs for pagination testing
  createCategoryProduct({
    id: "cat-p34",
    name: "NVIDIA GeForce RTX 5070 12GB GDDR7",
    slug: "rtx-5070",
    price: 79999,
    category: gpuCategory,
    brand: brandNvidia,
    rating: 4.5,
    reviewCount: 234,
  }),
  createCategoryProduct({
    id: "cat-p35",
    name: "AMD Radeon RX 9060 XT 8GB",
    slug: "rx-9060-xt",
    price: 44999,
    category: gpuCategory,
    brand: brandAmd,
    badges: [{ type: "hot", label: "Best Value" }],
    rating: 4.4,
    reviewCount: 567,
  }),
  createCategoryProduct({
    id: "cat-p36",
    name: "ASUS TUF Gaming RTX 5080 OC 16GB",
    slug: "asus-tuf-rtx-5080",
    price: 169999,
    originalPrice: 184999,
    category: gpuCategory,
    brand: brandAsus,
    rating: 4.6,
    reviewCount: 145,
    stockCount: 9,
  }),
];

export interface CategoryInfo {
  slug: string;
  name: string;
  description: string;
  productCount: number;
  parentSlug?: string;
  parentName?: string;
}

export const categoryInfoMap: Record<string, CategoryInfo> = {
  "graphics-card": {
    slug: "graphics-card",
    name: "Graphics Card",
    description: "High-performance graphics cards for gaming, content creation, and AI workloads.",
    productCount: 156,
  },
  processor: {
    slug: "processor",
    name: "Processor",
    description: "Desktop and laptop processors from AMD and Intel for every use case.",
    productCount: 89,
    parentSlug: "components",
    parentName: "Components",
  },
  monitor: {
    slug: "monitor",
    name: "Monitor",
    description: "Gaming, professional, and everyday monitors with the latest display tech.",
    productCount: 234,
  },
  laptop: {
    slug: "laptop",
    name: "Laptop",
    description: "Gaming laptops, ultrabooks, and workstations for every budget.",
    productCount: 312,
  },
  ram: {
    slug: "ram",
    name: "RAM",
    description: "DDR4 and DDR5 memory modules for desktops and laptops.",
    productCount: 78,
    parentSlug: "components",
    parentName: "Components",
  },
  ssd: {
    slug: "ssd",
    name: "SSD",
    description: "NVMe and SATA solid-state drives for blazing-fast storage.",
    productCount: 112,
    parentSlug: "components",
    parentName: "Components",
  },
  motherboard: {
    slug: "motherboard",
    name: "Motherboard",
    description: "AM5 and LGA1851 motherboards for the latest processors.",
    productCount: 145,
    parentSlug: "components",
    parentName: "Components",
  },
  keyboard: {
    slug: "keyboard",
    name: "Keyboard",
    description: "Mechanical, membrane, and wireless keyboards for gaming and productivity.",
    productCount: 167,
  },
  components: {
    slug: "components",
    name: "Components",
    description: "PC components including processors, graphics cards, RAM, storage, and more.",
    productCount: 1250,
  },
};

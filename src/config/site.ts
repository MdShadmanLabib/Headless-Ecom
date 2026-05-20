export const siteConfig = {
  name: "TechVault",
  description:
    "Premium computer, laptop & gaming hardware store. Shop the latest tech with confidence.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/og-image.png",
  links: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
  contact: {
    phone: "+880-XXX-XXXXXXX",
    email: "support@techvault.com",
    address: "Dhaka, Bangladesh",
  },
  currency: {
    code: "BDT",
    symbol: "৳",
    locale: "en-BD",
  },
} as const;

export type SiteConfig = typeof siteConfig;

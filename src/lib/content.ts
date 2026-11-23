/**
 * Central content for Carpet One of Livermore.
 * Edit copy, contact details, and media here — components read from this file.
 */

export const site = {
  name: "Carpet One of Livermore",
  shortName: "Carpet One",
  location: "Livermore, California",
  phone: "(925) 238-3127",
  phoneHref: "tel:+19252383127",
  email: "sales@carpetonel.com",
  emailHref: "mailto:sales@carpetonel.com",
  /** Placeholder — replace with real street address */
  address: "[Add address]",
  /** Placeholder — replace with real business hours */
  hours: "[Add business hours]",
  url: "https://carpetonel.com",
  tagline: "Floors that feel as good as they look.",
};

export const seo = {
  title: "Carpet & Flooring in Livermore, CA | Carpet One of Livermore",
  description:
    "Carpet One of Livermore offers Bioplanks, carpet tile, and quality flooring for homes and businesses in Livermore, California. Request a free quote today.",
  ogImage: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=80",
};

export const nav = [
  { label: "Home", href: "#main" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const about = {
  eyebrow: "About us",
  title: "Floors chosen with care — for Livermore homes and spaces.",
  lead:
    "A local Carpet One store where texture, tone, and everyday living guide every recommendation.",
  paragraphs: [
    "From Bioplanks and carpet tile to classic carpet and flooring, we help you find surfaces that feel right underfoot and look considered in every room.",
    "Explore samples at your pace, ask honest questions, and leave with a clear path from selection to installation — without the big-box rush.",
  ],
  pullQuote: "Warm tones. Honest guidance. Floors meant to be lived on.",
  highlights: [
    { label: "Bioplanks", detail: "Natural plank character for rooms that need quiet polish" },
    { label: "Carpet tile", detail: "Modular texture with flexible style for busy spaces" },
    { label: "Local showroom", detail: "Neighborhood service rooted in Livermore, California" },
  ],
  images: {
    primary: {
      src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
      alt: "Bright living room with warm wood-look flooring and soft natural light",
    },
    secondary: {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      alt: "Modern interior living space with refined flooring detail",
    },
  },
};

export const testimonials = {
  eyebrow: "Reviews",
  title: "Stories from Livermore floors.",
  subtitle:
    "Placeholder quotes for design — swap in real customer feedback anytime.",
  items: [
    {
      quote:
        "They slowed the process down in the best way — helping us feel the difference between options until the floor finally felt like ours.",
      name: "[Customer name]",
      detail: "Livermore homeowner",
      focus: "Bioplanks",
      initials: "CL",
    },
    {
      quote:
        "Clear guidance on carpet tile versus carpet — we left confident, not overwhelmed.",
      name: "[Customer name]",
      detail: "Livermore, CA",
      focus: "Carpet Tile",
      initials: "JR",
    },
    {
      quote:
        "Local, personal, and thoughtful from the first visit through installation. The showroom made choosing feel simple.",
      name: "[Customer name]",
      detail: "Local customer",
      focus: "Carpet & flooring",
      initials: "AM",
    },
  ],
};

export const hero = {
  headline: "Floors that feel as good as they look.",
  support:
    "Thoughtful flooring for Livermore homes and spaces — Bioplanks, carpet tile, and classic carpet from your local Carpet One store.",
  primaryCta: { label: "Request a Free Quote", href: "#contact" },
  secondaryCta: { label: "Explore Our Floors", href: "#showcase" },
  trustItems: ["Bioplanks", "Carpet Tile", "Local Livermore Showroom"],
  images: {
    primary: {
      src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=80",
      alt: "Bright living room with warm wood-look flooring and natural light",
    },
    secondary: {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      alt: "Modern interior with layered textiles and refined flooring detail",
    },
  },
};

export const services = [
  {
    id: "bioplanks",
    title: "Bioplanks",
    motif: "plank" as const,
    description:
      "Plank-style flooring with a natural, tactile presence — designed for everyday living and lasting beauty underfoot.",
    benefits: ["Durable", "Easy to maintain", "Stylish"],
    cta: { label: "Learn more / Get a quote", href: "#contact" },
    image: {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1000&q=80",
      alt: "Close view of warm plank flooring in a contemporary living space",
    },
  },
  {
    id: "carpet-tile",
    title: "Carpet Tile",
    motif: "tile" as const,
    description:
      "Modular carpet tiles that bring texture, pattern, and practical flexibility to rooms that work as hard as they look.",
    benefits: ["Durable", "Easy to maintain", "Stylish"],
    cta: { label: "Learn more / Get a quote", href: "#contact" },
    image: {
      src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1000&q=80",
      alt: "Soft carpeted seating area with layered texture and calm neutrals",
    },
  },
];

export const showcaseIntro = {
  title: "Showcase",
  subtitle:
    "A glimpse of how flooring shapes a room — filter by Bioplanks or Carpet Tile to explore.",
};

export type ShowcaseCategory = "all" | "bioplanks" | "carpet-tile";

export const showcaseFilters: { id: ShowcaseCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "bioplanks", label: "Bioplanks" },
  { id: "carpet-tile", label: "Carpet Tile" },
];

export const galleryItems = [
  {
    id: "g1",
    category: "bioplanks" as const,
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80",
    alt: "Open living room with continuous plank flooring and soft seating",
  },
  {
    id: "g2",
    category: "carpet-tile" as const,
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80",
    alt: "Cozy lounge corner with textured carpet underfoot",
  },
  {
    id: "g3",
    category: "bioplanks" as const,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
    alt: "Sunlit hallway with warm plank flooring running lengthwise",
  },
  {
    id: "g4",
    category: "carpet-tile" as const,
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80",
    alt: "Bedroom interior with soft floor covering and layered linens",
  },
  {
    id: "g5",
    category: "bioplanks" as const,
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
    alt: "Kitchen and dining space with durable plank-look flooring",
  },
  {
    id: "g6",
    category: "carpet-tile" as const,
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    alt: "Modern office nook with modular carpet tile flooring",
  },
];

export const whyUs = {
  title: "Why Choose Us",
  subtitle:
    "A local Carpet One store focused on guidance, quality products, and a personal experience — from first visit to finished floor.",
  items: [
    {
      title: "Expert guidance",
      description:
        "Help choosing the right flooring for your space, lifestyle, and preferences — without the pressure.",
      icon: "compass" as const,
    },
    {
      title: "Quality products",
      description:
        "Bioplanks, carpet tile, and classic carpet and flooring options selected for performance and design.",
      icon: "sparkles" as const,
    },
    {
      title: "Professional installation",
      description:
        "Coordinated installation support so your new floors are set with care and attention to detail.",
      icon: "hammer" as const,
    },
    {
      title: "Local & personal service",
      description:
        "A Livermore-based Carpet One store that treats every project as a conversation, not a transaction.",
      icon: "heart" as const,
    },
  ],
};

export const process = {
  title: "How It Works",
  subtitle: "A clear path from first conversation to floors you love coming home to.",
  steps: [
    {
      title: "Consult",
      description: "Share your space, goals, and style. We’ll help narrow the right options.",
    },
    {
      title: "Choose",
      description: "Explore Bioplanks, carpet tile, and other flooring until the fit feels right.",
    },
    {
      title: "Install",
      description: "Professional installation coordinated around your timeline and space.",
    },
    {
      title: "Enjoy",
      description: "Settle in and enjoy floors that feel as good as they look — every day.",
    },
  ],
};

export const contact = {
  title: "Request a Free Quote",
  subtitle:
    "Tell us a little about your project. We’ll follow up to talk flooring options for your Livermore space.",
  form: {
    serviceOptions: [
      { value: "", label: "Select a service" },
      { value: "bioplanks", label: "Bioplanks" },
      { value: "carpet-tile", label: "Carpet Tile" },
      { value: "other", label: "Other / General flooring" },
    ],
    successTitle: "Thank you — we’ve received your request.",
    successMessage:
      "We’ll be in touch soon. Prefer to talk now? Call us at (925) 238-3127.",
  },
};

export const footer = {
  blurb:
    "Carpet and flooring for Livermore — Bioplanks, carpet tile, and more from your local Carpet One store.",
};

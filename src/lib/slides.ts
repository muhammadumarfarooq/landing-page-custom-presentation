export type Slide = {
  id: number;
  title: string;
  description: string;
  backgroundColor: string;
  image: string;
};

export const slides: Slide[] = [
  {
    id: 1,
    title: "What is Next.js?",
    description:
      "Next.js is a powerful React framework for building full-stack web applications with hybrid rendering and seamless deployment.",
    backgroundColor: "bg-white dark:bg-neutral-900",
    image: "/images/Icon.jpeg",
  },
  {
    id: 2,
    title: "Key Features",
    description:
      "File-based Routing, API Routes, Server Components, Edge Functions, and flexible rendering—all in one framework.",
    backgroundColor: "bg-blue-50 dark:bg-blue-900",
    image: "/images/20892632.jpg",
  },
  {
    id: 3,
    title: "Rendering Made Easy",
    description:
      "Choose from SSR, SSG, ISR, or Client-side Rendering to optimize performance and scalability in Next.js.",
    backgroundColor: "bg-purple-50 dark:bg-purple-900",
    image: "/images/19289.jpg",
  },
  {
    id: 4,
    title: "Performance & SEO",
    description:
      "Next.js boosts performance with image optimization, metadata handling, prefetching, and SEO-friendly architecture.",
    backgroundColor: "bg-indigo-50 dark:bg-indigo-900",
    image: "/images/7155205.jpg",
  },
  {
    id: 5,
    title: "Seamless Deployment",
    description:
      "Deploy your app globally with Vercel—serverless, edge-ready, with preview environments and automatic scaling.",
    backgroundColor: "bg-green-50 dark:bg-green-900",
    image: "/images/7456408.jpg",
  },
];

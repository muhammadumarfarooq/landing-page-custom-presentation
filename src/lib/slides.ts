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
    title: "Welcome to My Presentation",
    description: "This is a stunning Next.js + Shadcn powered presentation.",
    backgroundColor: "bg-white dark:bg-neutral-900",
    image: "/images/2672335.jpg",
  },
  {
    id: 2,
    title: "About This Project",
    description:
      "A smooth, responsive, and modern slide deck built with Next.js.",
    backgroundColor: "bg-blue-50 dark:bg-blue-900",
    image: "/images/about-as-service-contact-information-concept.jpg",
  },
  {
    id: 3,
    title: "Features Included",
    description:
      "Framer Motion animations, Dark Mode support, and Tailwind CSS.",
    backgroundColor: "bg-purple-50 dark:bg-purple-900",
    image: "/images/pexels-luis-gomes-166706-546819.jpg",
  },
  {
    id: 4,
    title: "Thank You",
    description: "Thanks for viewing! Let's connect and collaborate.",
    backgroundColor: "bg-green-50 dark:bg-green-900",
    image: "/images/3700396.jpg",
  },
];

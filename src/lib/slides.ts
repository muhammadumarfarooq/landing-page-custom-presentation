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
    title: "Tech Stack",
    description:
      "Built with Next.js 15, Tailwind CSS, Framer Motion, and Shadcn UI.",
    backgroundColor: "bg-indigo-50 dark:bg-indigo-900",
    image: "/images/pexels-divinetechygirl-1181675.jpg",
  },
  {
    id: 5,
    title: "Design Philosophy",
    description:
      "Clean, accessible, responsive UI with focus on user experience.",
    backgroundColor: "bg-pink-50 dark:bg-pink-900",
    image: "/images/pexels-pixabay-355952.jpg",
  },
  {
    id: 6,
    title: "Animation & Interaction",
    description:
      "Smooth transitions, staggered animations, and keyboard navigation.",
    backgroundColor: "bg-orange-50 dark:bg-orange-900",
    image: "/images/pexels-googledeepmind-18069694.jpg",
  },
  {
    id: 7,
    title: "Dark Mode Support",
    description:
      "Seamless light and dark mode toggle with smooth background transitions.",
    backgroundColor: "bg-slate-50 dark:bg-slate-900",
    image: "/images/pexels-harold-vasquez-853421-2653362.jpg",
  },
  {
    id: 8,
    title: "Extensibility",
    description:
      "Easily extendable with support for adding forms, charts, or API data.",
    backgroundColor: "bg-yellow-50 dark:bg-yellow-900",
    image: "/images/pexels-ofspace-16323581.jpg",
  },
  {
    id: 9,
    title: "Future Improvements",
    description:
      "PDF export, multi-user collaboration, and backend integration planned.",
    backgroundColor: "bg-emerald-50 dark:bg-emerald-900",
    image: "/images/pexels-rdne-7948041.jpg",
  },
  {
    id: 10,
    title: "Thank You",
    description: "Thanks for viewing! Let's connect and collaborate.",
    backgroundColor: "bg-green-50 dark:bg-green-900",
    image: "/images/3700396.jpg",
  },
];

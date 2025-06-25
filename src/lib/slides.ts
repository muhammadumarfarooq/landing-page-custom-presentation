export type Slide = {
  id: number;
  title: string;
  description: string;
  backgroundColor: string;
};

export const slides: Slide[] = [
  {
    id: 1,
    title: "Welcome to My Presentation",
    description: "This is an awesome Next.js + Shadcn powered presentation.",
    backgroundColor: "bg-teal-600",
  },
  {
    id: 2,
    title: "Page 2",
    description: "Here's some more information on page two.",
    backgroundColor: "bg-rose-500",
  },
  {
    id: 3,
    title: "Page 3",
    description: "Let's continue learning and building together.",
    backgroundColor: "bg-emerald-600",
  },
  {
    id: 4,
    title: "Thank You",
    description: "Thanks for viewing this presentation. Let's connect!",
    backgroundColor: "bg-purple-700",
  },
];

import { slides } from "@/lib/slides";
import SlideLayout from "@/components/SlideLayout";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import SlideContent from "@/components/SlideContent";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = Number(params.id);
  const slide = slides.find((s) => s.id === id);

  if (!slide) {
    return {
      title: "Slide Not Found | Presentation",
      description: "The slide you are looking for does not exist.",
    };
  }

  return {
    title: `${slide.title} | Presentation`,
    description: slide.description,
  };
}

export async function generateStaticParams() {
  return slides.map((slide) => ({
    id: slide.id.toString(),
  }));
}

export default function SlidePage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const slide = slides.find((s) => s.id === id);

  if (!slide) return notFound();

  return (
    <SlideLayout className={slide.backgroundColor}>
      <SlideContent slide={slide} total={slides.length} />
    </SlideLayout>
  );
}

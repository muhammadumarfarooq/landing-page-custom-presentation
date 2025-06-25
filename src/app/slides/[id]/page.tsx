export const dynamic = "force-static";

import { slides } from "@/lib/slides";
import SlideLayout from "@/components/SlideLayout";
import SlideContent from "@/components/SlideContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = Number((await params).id);
  const slide = slides.find((s) => s.id === id);

  if (!slide) {
    return {
      title: "Slide Not Found",
    };
  }

  return {
    title: slide.title,
    description: slide.description,
  };
}

export async function generateStaticParams() {
  return slides.map((slide) => ({
    id: slide.id.toString(),
  }));
}

export default async function SlidePage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number((await params).id);
  const slide = slides.find((s) => s.id === id);

  if (!slide) return notFound();

  return (
    <SlideLayout className={slide.backgroundColor}>
      <SlideContent slide={slide} />
    </SlideLayout>
  );
}

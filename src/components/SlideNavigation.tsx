"use client";

import { Button } from "@/components/ui/button";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";
import { useRouter } from "next/navigation";

export default function SlideNavigation({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const router = useRouter();

  const goPrev = () => {
    if (current > 1) router.push(`/slides/${current - 1}`);
  };

  const goNext = () => {
    if (current < total) router.push(`/slides/${current + 1}`);
  };

  useKeyboardNavigation(current, total);

  return (
    <div className="mt-6 flex gap-4">
      {current > 1 && (
        <Button variant="secondary" onClick={goPrev}>
          Previous
        </Button>
      )}
      {current < total && <Button onClick={goNext}>Next</Button>}
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SlideNavigation({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {current > 1 && (
        <Button
          variant="secondary"
          onClick={() => router.push(`/slides/${current - 1}`)}
        >
          Previous
        </Button>
      )}
      {current < total && (
        <Button
          onClick={() => router.push(`/slides/${current + 1}`)}
          className="w-full sm:w-auto"
        >
          Next
        </Button>
      )}
    </div>
  );
}

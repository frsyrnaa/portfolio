"use client";

import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";
import { toast } from "sonner";

export function LinkShare() {
  const handleShare = async () => {
    const url = window.location.href;

    try {
      await navigator.clipboard.writeText(url);

      toast.success("Link copied!", {
        description: url,
      });
    } catch (err) {
      toast.error(`Failed to copy link: ${err}`, {
        description: "Please try again",
      });
    }
  };

  return (
    <Button size="icon-lg" onClick={handleShare}>
      <Share />
    </Button>
  );
}

"use client";

import { buttonVariants } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function CallToAction() {
  const url = "https://www.linkedin.com/in/farsya-runa-52bb74373";

  return (
    <section className="w-full bg-background space-y-4 p-6 border border-border rounded-2xl">
      <div className="text-center w-full">
        <h2 className="text-3xl font-semibold tracking-tight text-balance">
          Let&apos;s Work Together
        </h2>

        <p className="mx-auto mt-4 text-sm/6 text-pretty text-muted-foreground">
          Connect with me on LinkedIn to see my experience, projects, and
          professional journey in the tech world.
        </p>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({ size: "lg", className: "w-full" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
        Connect LinkedIn
      </a>
      <a
        href="mailto:farsyaruna998@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({ variant: "outline", size: "lg", className: "w-full" })}
      >
        <Mail />
        Contact Email
      </a>
    </section>
  );
}

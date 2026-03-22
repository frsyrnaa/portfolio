import pfp from "@/assets/images/pfp.jpeg";
import { LinkShare } from "../link-share";
import { ButtonGreeting } from "../button-greeting";
import { ThemeToggle } from "../theme-toggle";
import { Briefcase, User } from "lucide-react";
import { buttonVariants } from "../ui/button";

const items = [
  {
    label: "Developer",
    icon: <User className="size-4" />,
  },
  {
    label: "Indonesia",
    icon: (
      <img
        src="https://www.svgrepo.com/show/401654/flag-for-indonesia.svg"
        alt="Indonesia"
        className="size-4"
      />
    ),
  },
  {
    label: "Freelancer",
    icon: <Briefcase className="size-4" />,
  },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/farsya-runa-52bb74373",
    svg: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/frsyrna",
    svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    name: "GitHub",
    href: "https://github.com/frsyrnaa",
    svg: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
];

export function Heading() {
  return (
    <header
      id="base-heading"
      className="flow-root space-y-4 px-4 sm:px-6 lg:px-0"
    >
      <div className="group size-28 mx-auto p-1.5 rounded-full border border-base-200 shadow-xs sm:size-32">
        <div className="relative size-full rounded-full overflow-hidden shadow-2xl">
          <img
            src={pfp}
            alt="My profile picture"
            className="size-full object-cover group-hover:scale-125 group-hover:rotate-12"
            loading="lazy"
          />
        </div>
      </div>

      <div className="w-full text-center space-y-3">
        <div className="relative w-max mx-auto">
          <h1 className="scroll-m-20 text-base-foreground-100 text-center text-2xl font-bold tracking-tight text-balance sm:text-3xl">
            Farsya Runa S.
          </h1>
          <IconVerified />
        </div>

        <div className="flex justify-center items-center gap-x-2 text-base-foreground-300 mt-1 mb-2 sm:gap-x-2.5">
          {items.map((item, i) => (
            <div
              key={item.label}
              className="flex items-center gap-x-1 sm:gap-x-2"
            >
              {i > 0 && <span className="text-[0.5rem]">&bull;</span>}

              {item.icon}
              <p className="text-sm sm:text-base">{item.label}</p>
            </div>
          ))}
        </div>

        <p className="text-base-foreground-300 leading-7 max-w-xl mx-auto">
          Informatics Student & Lab Assistant | ML & UI/UX | Bridging
          Data-Driven Logic with Intuitive Human-Centered Solutions.
        </p>

        <div className="flex justify-center items-center gap-x-2">
          {socials.map((item, i) => (
            <div key={item.name} className="flex items-center">
              {i > 0 && <span className="text-[0.5rem] mr-2">&bull;</span>}

              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: "gap-x-1.5",
                })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-icon="inline-start"
                  className="fill-foreground size-3.5"
                >
                  {item.svg && <path d={item.svg} />}
                </svg>
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-x-3 w-full">
        <LinkShare />
        <div className="flex-1">
          <ButtonGreeting />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}

function IconVerified() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className="absolute top-1/2 -right-7 -translate-y-1/2 size-5 sm:size-6 sm:-right-9"
    >
      <polygon
        fill="#42a5f5"
        points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
      />
      <polygon
        fill="#fff"
        points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
      />
    </svg>
  );
}

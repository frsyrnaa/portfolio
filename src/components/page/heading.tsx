import pfp from "@/assets/images/pfp.jpeg";
import { LinkShare } from "../link-share";

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

      <div className="w-full text-center">
        <div className="relative w-max mx-auto">
          <h1 className="scroll-m-20 text-base-foreground-100 text-center text-2xl font-bold tracking-tight text-balance sm:text-3xl">
            Farsya Runa S.
          </h1>
          <IconVerified />
        </div>

        <p className="text-base-foreground-300 leading-7 max-w-xl mx-auto">
          Informatics Student & Lab Assistant | ML & UI/UX | Bridging Data-Driven Logic with Intuitive Human-Centered Solutions.
        </p>
      </div>

      <div className="flex justify-center items-center gap-x-3 w-full">
        <LinkShare />
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

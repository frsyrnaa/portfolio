export function Footer() {
  const year = new Date().getFullYear();
  const username = "frsyrnaa";
  const license = "MIT";
  const url = `https://github.com/${username}`;

  return (
    <footer className="flex flex-col justify-center items-center gap-y-2.5 text-muted-foreground text-sm/6 text-center w-full pt-10">
      <p>&copy; {year} Farsya Runa S. All rights reserved.</p>

      <div className="flex flex-col items-center gap-x-3 gap-y-1 sm:flex-row">
        <p>
          Designed by{" "}
          <a href={url} target="_blank" rel="noopener noreferrer" className="capitalize">
            {username}
          </a>
        </p>

        <svg
          viewBox="0 0 3 3"
          width="3"
          height="3"
          aria-hidden="true"
          className="hidden fill-muted-foreground sm:block"
        >
          <circle r="1" cx="1" cy="1" />
        </svg>

        <p>Powered by {license} License</p>
      </div>
    </footer>
  );
}
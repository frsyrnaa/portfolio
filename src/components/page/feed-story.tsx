import { STORIES, type FeedStory } from "@/feeds/story";
import { useEffect, useRef, useState } from "react";

export function FeedStory() {
  const [selectedStory, setSelectedStory] = useState<FeedStory | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const [isSwiping, setIsSwiping] = useState(false);
  const [offset, setOffset] = useState(0);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const dragging = useRef(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const STORY_DURATION = 5000;
  const SWIPE_THRESHOLD = 50;

  const openStory = (story: FeedStory) => {
    setSelectedStory(story);
    setCurrentIndex(0);
    setProgress(0);
    document.body.classList.add("overflow-hidden");

    setTimeout(() => {
      setIsOpen(true);
      startTimer();
    }, 10);
  };

  const closeStory = () => {
    document.body.classList.remove("overflow-hidden");
    setIsOpen(false);
    stopTimer();

    setTimeout(() => {
      setSelectedStory(null);
      setCurrentIndex(0);
      setProgress(0);
      setOffset(0);
    }, 300);
  };

  const next = () => {
    if (!selectedStory) return;

    if (currentIndex < selectedStory.images.length - 1) {
      setCurrentIndex((i) => i + 1);
      setProgress(0);
      restartTimer();
    } else {
      closeStory();
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setProgress(0);
      restartTimer();
    }
  };

  const startTimer = () => {
    stopTimer();
    const start = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = (elapsed / STORY_DURATION) * 100;

      if (percent >= 100) {
        next();
      } else {
        setProgress(percent);
      }
    }, 50);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const restartTimer = () => {
    stopTimer();
    startTimer();
  };

  useEffect(() => {
    return () => stopTimer();
  }, []);

  const start = (x: number, y: number) => {
    stopTimer();
    touchStartX.current = x;
    touchStartY.current = y;
    dragging.current = true;
  };

  const move = (x: number, y: number) => {
    if (!dragging.current) return;

    const dx = x - touchStartX.current;
    const dy = Math.abs(y - touchStartY.current);

    if (dy < 20) {
      setIsSwiping(true);
      setOffset(dx);
    }
  };

  const end = () => {
    if (!dragging.current) return;

    dragging.current = false;
    setIsSwiping(false);

    if (Math.abs(offset) > SWIPE_THRESHOLD) {
      offset < 0 ? next() : prev();
    }

    setOffset(0);
    startTimer();
  };

  return (
    <>
      <div className="flex gap-3 overflow-x-auto my-5 pb-3">
        {STORIES.map((story) => (
          <figure className="relative group text-center w-max space-y-2 bg-transparent cursor-pointer">
            <div className="flex justify-center items-center size-16 mx-auto bg-linear-to-tr from-yellow-500 via-red-500 to-fuchsia-500 p-0.5 rounded-full sm:size-20">
              <div className="size-full p-0.5 bg-background rounded-full">
                <div className="relative size-full overflow-hidden rounded-full bg-base-50">
                  <img
                    src={story.images[0]}
                    alt={story.label}
                    loading="lazy"
                    className="object-cover group-hover:scale-125 rounded-full"
                  />
                </div>
              </div>
            </div>
            <figcaption className="text-[0.55rem] text-base-foreground-300 sm:text-xs">
              <button
                type="button"
                onClick={() => openStory(story)}
                className="absolute inset-0"
              >
                <span hidden>Show {story.label} story</span>
              </button>
              {story.label}
            </figcaption>
          </figure>
        ))}
      </div>

      {selectedStory && (
        <div
          onClick={closeStory}
          className={`fixed inset-0 z-50 min-h-dvh flex items-center justify-center bg-black/40 backdrop-blur transition ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md h-[90vh] rounded-xl overflow-hidden"
          >
            <div className="absolute top-4 inset-x-4 flex gap-1 z-20">
              {selectedStory.images.map((_, i) => (
                <div key={i} className="flex-1 h-1 bg-white/30 rounded-full">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{
                      width:
                        i < currentIndex
                          ? "100%"
                          : i === currentIndex
                            ? `${progress}%`
                            : "0%",
                    }}
                  />
                </div>
              ))}
            </div>

            <img
              src={selectedStory.images[currentIndex]}
              className="size-full object-cover"
              style={{
                transform: `translateX(${offset}px)`,
                transition: isSwiping ? "none" : "transform 0.3s",
              }}
              onTouchStart={(e) =>
                start(e.touches[0].clientX, e.touches[0].clientY)
              }
              onTouchMove={(e) =>
                move(e.touches[0].clientX, e.touches[0].clientY)
              }
              onTouchEnd={end}
              onMouseDown={(e) => start(e.clientX, e.clientY)}
              onMouseMove={(e) => move(e.clientX, e.clientY)}
              onMouseUp={end}
              onMouseLeave={end}
              loading="lazy"
            />

            {!isSwiping && (
              <div className="absolute inset-0 flex">
                <div className="w-1/2" onClick={prev} />
                <div className="w-1/2" onClick={next} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

"use client";

interface ScrollButtonProps {
  targetId: string;
  copy: string;
  variant?: "primary" | "secondary";
  showArrow?: boolean;
}

export default function ScrollButton({ targetId, copy, variant = "primary", showArrow = true }: ScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const baseClasses = "inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 font-bold uppercase tracking-wider rounded-sm transition-all duration-300 active:scale-95 hover:scale-105 touch-manipulation min-h-[48px] text-sm sm:text-base";
  const primaryClasses = "bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:shadow-2xl hover:shadow-gray-700/50";
  const secondaryClasses = "border-2 border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white";

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variant === "primary" ? primaryClasses : secondaryClasses}`}
    >
      <span>{copy}</span>
      {showArrow && (
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      )}
    </button>
  );
}


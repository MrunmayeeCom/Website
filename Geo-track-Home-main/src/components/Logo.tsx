export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="100" height="100" rx="20" fill="url(#gradient)" />
      <path
        d="M50 25C50 22.2386 52.2386 20 55 20H75C77.7614 20 80 22.2386 80 25V45C80 47.7614 77.7614 50 75 50H55C52.2386 50 50 47.7614 50 45V25Z"
        fill="white"
        fillOpacity="0.9"
      />
      <path
        d="M20 25C20 22.2386 22.2386 20 25 20H45C47.7614 20 50 22.2386 50 25V45C50 47.7614 47.7614 50 45 50H25C22.2386 50 20 47.7614 20 45V25Z"
        fill="white"
        fillOpacity="0.7"
      />
      <path
        d="M20 55C20 52.2386 22.2386 50 25 50H45C47.7614 50 50 52.2386 50 55V75C50 77.7614 47.7614 80 45 80H25C22.2386 80 20 77.7614 20 75V55Z"
        fill="white"
        fillOpacity="0.9"
      />
      <circle cx="65" cy="65" r="12" fill="white" fillOpacity="0.9" />
      <circle cx="65" cy="65" r="6" fill="url(#gradient2)" />
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient
          id="gradient2"
          x1="53"
          y1="53"
          x2="77"
          y2="77"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

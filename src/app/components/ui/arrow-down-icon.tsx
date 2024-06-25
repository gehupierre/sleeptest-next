export function ArrowDownIcon({ className = "", ...props }) {
  return (
    <svg
      className={`w-3 h-3 ms-1 ${className}`}
      aria-hidden="true"
      fill="none"
      viewBox="0 0 10 6"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  );
}

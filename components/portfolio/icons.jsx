export const Arrow = ({ diagonal = false, ...props }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    {...props}
  >
    {diagonal ? (
      <path d="M6 18 18 6M6 6h12v12" />
    ) : (
      <path d="M4 12h15m-6-6 6 6-6 6" />
    )}
  </svg>
);
export const Star = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 80 80"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="m40 0 8 25L69 11 55 32l25 8-25 8 14 21-21-14-8 25-8-25-21 14 14-21L0 40l25-8L11 11l21 14Z" />
  </svg>
);

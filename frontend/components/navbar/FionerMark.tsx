type Props = {
  className?: string;
  /** Height in px; the mark keeps its aspect ratio. */
  size?: number;
};

/** Compact carQconnect brand mark - a road-like C flowing into a connected node. */
export default function CarQMark({ className, size = 26 }: Props) {
  return (
    <svg
      className={className}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="carQconnect"
    >
      <path d="M28.8 9.1A12.5 12.5 0 1 0 29 26.7" stroke="#131316" strokeWidth="5" strokeLinecap="round" />
      <path d="M20 18h12" stroke="#ff4d0d" strokeWidth="4" strokeLinecap="round" />
      <circle cx="30.5" cy="18" r="3.5" fill="#ff4d0d" />
    </svg>
  );
}

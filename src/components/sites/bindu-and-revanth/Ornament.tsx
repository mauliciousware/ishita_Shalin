interface OrnamentProps {
  drawn: boolean;
  className?: string;
}

/** Hand-drawn temple arch and lotus, revealed with a stroke-draw animation. */
export function Ornament({ drawn, className = "" }: OrnamentProps) {
  return (
    <svg
      className={`ornament ${className}`}
      data-drawn={drawn}
      viewBox="0 0 120 168"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="o-line o-draw"
        pathLength={1}
        d="M14 164 V78 C14 46 44 38 60 10 C76 38 106 46 106 78 V164"
      />
      <path className="o-line o-draw" pathLength={1} d="M60 10 V5" />
      <path className="o-line o-draw" pathLength={1} d="M4 164 H116" />
      <path
        className="o-line o-draw o-draw--motif"
        pathLength={1}
        d="M26 164 V82 C26 58 48 50 60 28 C72 50 94 58 94 82 V164"
      />
      <path
        className="o-line o-draw o-draw--motif"
        pathLength={1}
        d="M60 98 C53 108 53 121 60 132 C67 121 67 108 60 98 Z"
      />
      <path
        className="o-line o-draw o-draw--motif"
        pathLength={1}
        d="M60 132 C49 132 41 124 38 112 C49 113 57 120 60 132 Z"
      />
      <path
        className="o-line o-draw o-draw--motif"
        pathLength={1}
        d="M60 132 C71 132 79 124 82 112 C71 113 63 120 60 132 Z"
      />
      <path
        className="o-line o-draw o-draw--motif"
        pathLength={1}
        d="M44 138 C52 143 68 143 76 138"
      />
      <path
        className="o-flame"
        d="M60 5 C57.4 3.2 57.3 0.6 60 -3.6 C62.7 0.6 62.6 3.2 60 5 Z"
      />
    </svg>
  );
}

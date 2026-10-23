export default function App() {
  return (
    <svg
      aria-labelledby="banner-title banner-description"
      className="banner"
      role="img"
      viewBox="0 0 1200 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="banner-title">Technology growth profile banner</title>
      <desc id="banner-description">
        Sola's connected visual journey through coding, the web, system
        security, and visual design.
      </desc>

      <rect width="1200" height="300" fill="#102134" />

      {/* Architectural backdrop */}
      <path
        d="M0 46H344L455 157H744L869 32H1200V0H0Z"
        fill="#1a293f"
      />
      <path
        d="M0 300V236H280L366 150H631L735 254H1200V300Z"
        fill="#1a293f"
      />
      <path
        d="M66 0L0 66V0ZM1130 300L1200 230V300Z"
        fill="#404751"
        opacity=".38"
      />

      {/* Identity */}
      <g className="identity" textAnchor="middle">
        <text
          className="identity-name"
          x="600"
          y="61"
          fill="#896f3d"
          fontFamily="Inter, sans-serif"
          fontSize="36"
          fontWeight="700"
          letterSpacing=".15"
        >
          Sola (서라)
        </text>
        <text
          className="identity-tagline"
          x="600"
          y="88"
          fill="#404751"
          fontFamily="Inter, sans-serif"
          fontSize="13"
          fontWeight="600"
          letterSpacing="2"
        >
          CODE · DESIGN · SECURITY · ALWAYS EVOLVING
        </text>
      </g>

      {/* Coding */}
      <g
        className="discipline discipline-coding"
        fill="none"
        stroke="#404751"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      >
        <rect x="70" y="82" width="210" height="137" rx="12" />
        <path d="M70 115H280" />
        <path d="M92 99h1M112 99h1M132 99h1" strokeWidth="5" />
        <path d="m112 151-16 16 16 16M159 151l16 16-16 16M143 143l-17 48" />
        <path d="M207 151h43M207 168h28M207 185h36" opacity=".65" />
      </g>

      {/* Web */}
      <g
        className="discipline discipline-web"
        fill="none"
        stroke="#404751"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      >
        <circle cx="431" cy="150" r="68" />
        <path d="M363 150h136M431 82c24 22 37 45 37 68s-13 46-37 68c-24-22-37-45-37-68s13-46 37-68Z" />
        <path d="M377 109c16 10 34 15 54 15s38-5 54-15M377 191c16-10 34-15 54-15s38 5 54 15" />
      </g>

      {/* Security */}
      <g
        className="discipline discipline-security"
        fill="none"
        stroke="#404751"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      >
        <path d="M638 78c25 18 50 25 75 25v48c0 37-25 61-75 78-50-17-75-41-75-78v-48c25 0 50-7 75-25Z" />
        <rect x="614" y="139" width="48" height="38" rx="7" />
        <path d="M623 139v-11c0-20 30-20 30 0v11M638 153v10" />
      </g>

      {/* Visual design */}
      <g
        className="discipline discipline-design"
        fill="none"
        stroke="#404751"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      >
        <path d="M866 203c-21-62 4-107 67-113M866 203c66 7 106-25 117-88" />
        <path d="M875 203h-18v-18h18v18ZM942 99h-18V81h18v18ZM992 124h-18v-18h18v18Z" />
        <path d="M866 185v-53M857 132h18M933 90h50M983 106v-16" opacity=".65" />
        <path d="m1026 69 42 17-42 17 9-17-9-17Z" />
      </g>

      {/* A single path ties the disciplines into forward growth. */}
      <path
        className="journey-underlay"
        d="M96 244C225 269 299 239 353 214C423 182 472 196 529 215C606 241 679 251 739 211C810 164 840 109 923 90C987 75 1037 87 1108 54"
        fill="none"
        stroke="#102134"
        strokeLinecap="round"
        strokeWidth="12"
      />
      <path
        className="journey-line"
        d="M96 244C225 269 299 239 353 214C423 182 472 196 529 215C606 241 679 251 739 211C810 164 840 109 923 90C987 75 1037 87 1108 54"
        fill="none"
        stroke="#896f3d"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <path
        className="journey-arrow"
        d="m1082 45 30 8-20 24"
        fill="none"
        stroke="#896f3d"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />

      <g
        className="journey-nodes"
        fill="#896f3d"
        stroke="#102134"
        strokeWidth="7"
      >
        <circle className="node node-one" cx="96" cy="244" r="8" />
        <circle className="node node-two" cx="353" cy="214" r="8" />
        <circle className="node node-three" cx="529" cy="215" r="8" />
        <circle className="node node-four" cx="739" cy="211" r="8" />
        <circle className="node node-five" cx="923" cy="90" r="8" />
      </g>
    </svg>
  );
}

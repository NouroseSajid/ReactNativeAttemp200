import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

const VacanciesIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = "#706f6f", // Main body stroke
  strokeWidth = 5, // Main and shadow stroke width (same for both)
}) => (
  <Svg
    viewBox="0 0 106.97 109.76"
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid meet" // Ensure it fits inside the given size
  >
    {/* Shadow rectangle (same stroke width, positioned behind) */}
    <Rect
      x="23.07"
      y="13.03"
      width="61.32"
      height="88.57"
      rx="2.83"
      transform="translate(-24.67 32.73) rotate(-30)" // Positioning offset for shadow
      fill={fill}
      stroke={stroke} // Same stroke color as main body
      strokeWidth={strokeWidth} // Same stroke width
    />
    {/* Shadow path (same stroke width, positioned behind) */}
    <Path
      d="M68.48,21.5h36.33a3.87,3.87,0,0,1,3.87,3.87v80.84a3.86,3.86,0,0,1-3.87,3.86H51.22a3.82,3.82,0,0,1-3-1.38"
      transform="translate(-3.21 -1.81)" // Positioning offset for shadow
      fill={fill}
      stroke={stroke} // Same stroke color as main body
      strokeWidth={strokeWidth} // Same stroke width
    />
    {/* Main body rectangle */}
    <Rect
      x="21.71"
      y="11.67"
      width="61.32"
      height="88.57"
      rx="2.83"
      transform="translate(-24.17 31.87) rotate(-30)" // Same stroke width, positioned on top
      fill={fill}
      stroke={stroke} // Same stroke color as main body
      strokeWidth={strokeWidth} // Same stroke width
    />
    {/* Main body path */}
    <Path
      d="M67.13.86,3.86,0,0,1-3.86,3.86H49.86a3.89,3.89,0,0,1-3-1.38"
      transform="translate(-3.21 -1.81)" // Same stroke width, positioned on top
      fill={fill}
      stroke={stroke} // Same stroke color as main body
      strokeWidth={strokeWidth} // Same stroke width
    />
  </Svg>
);

export default VacanciesIcon;

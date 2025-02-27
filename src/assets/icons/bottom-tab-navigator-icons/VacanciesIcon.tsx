import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const VacatureIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = "#706f6f",
  strokeWidth = 3,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 106.97 109.76"
    width={width}
    height={height}
  >
    <Rect
      x="21.71"
      y="11.67"
      width="61.32"
      height="88.57"
      rx="2.83"
      transform="rotate(-30 47.385 61.037)"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Path
      d="M63.91 18.33h36.33a3.86 3.86 0 0 1 3.86 3.86v80.85a3.86 3.86 0 0 1-3.86 3.86H46.65a3.89 3.89 0 0 1-3-1.38"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

export default VacatureIcon;
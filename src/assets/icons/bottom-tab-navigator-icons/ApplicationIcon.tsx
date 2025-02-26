import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const ApplicationIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = "#706f6f",
  strokeWidth = 3,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100.04 109.64"
    width={width}
    height={height}
  >
    <Path
      d="M60.33 19.07h30.28a7.86 7.86 0 0 1 7.93 7.78v73.51a7.85 7.85 0 0 1-7.93 7.78h-47a7.85 7.85 0 0 1-7.93-7.78V76.87"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Path
      d="M60.33 11.09c.57 31.87-36.66 36.54-47.17 14a31.6 31.6 0 0 1-2.72-14Z"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Path
      d="M60.33 68.64c.57-31.86-36.66-36.53-47.17-14a31.5 31.5 0 0 0-2.72 14Z"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Rect
      x="2.9"
      y="2.87"
      width="65.62"
      height="8.22"
      rx="2.83"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

export default ApplicationIcon;
import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

const PlanningIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = "#706f6f",
  strokeWidth = 3,
}) => (
  <Svg
    viewBox="0 0 109.78 95.27"
    width={width}
    height={height}
  >
    <Path
      d="M2.5 39h105.78v51.93a2.83 2.83 0 0 1-2.83 2.83H5.33a2.83 2.83 0 0 1-2.83-2.83V39Z"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Path
      d="M91 2.5h2.5a2 2 0 0 1 2 2v6.58H89V4.5a2 2 0 0 1 2-2ZM15.54 2.5h1.72a2 2 0 0 1 2 2v6.58h-5.72V4.5a2 2 0 0 1 2-2Z"
      fill={stroke}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Path
      d="M2.5 39.04V17.76a4.05 4.05 0 0 1 4.05-4.05h97.73a4.05 4.05 0 0 1 4 4.05v21.28"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

export default PlanningIcon;
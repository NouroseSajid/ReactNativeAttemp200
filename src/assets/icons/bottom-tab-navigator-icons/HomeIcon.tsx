import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeSecondary?: string;
  strokeWidth?: number;
}

const HomeIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = "#706f6f",
  strokeSecondary = "#1d1d1b",
  strokeWidth = 3,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 105.68 111.56"
    width={width}
    height={height}
  >
    {/* Primary stroke elements */}
    <Path
      d="M14.16 56.75h78.48v50.47a2.83 2.83 0 0 1-2.83 2.83H17a2.83 2.83 0 0 1-2.83-2.83V56.75Z"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeMiterlimit={10}
    />
    <Path
      d="M55.36 4.41 7.42 52.87a2.83 2.83 0 0 0 2 4.82h95.87a2.83 2.83 0 0 0 2-4.82L59.39 4.41a2.84 2.84 0 0 0-4.03 0Z"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <Path
      d="M49.3 81.92h8.21A5.52 5.52 0 0 1 63 87.44v21.13H43.78V87.44a5.52 5.52 0 0 1 5.52-5.52Z"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeMiterlimit={10}
    />

    {/* Secondary stroke elements */}
    <Path
      d="M13 55.62h78.51v50.47a2.83 2.83 0 0 1-2.83 2.83H15.87a2.83 2.83 0 0 1-2.87-2.83V55.62Z"
      fill={fill}
      stroke={strokeSecondary}
      strokeWidth={strokeWidth}
      strokeMiterlimit={10}
    />
    <Path
      d="M54.23 3.29 6.29 51.74a2.83 2.83 0 0 0 2 4.82h95.87a2.83 2.83 0 0 0 2-4.82L58.26 3.29a2.82 2.82 0 0 0-4.03 0Z"
      fill={fill}
      stroke={strokeSecondary}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <Path
      d="M48.17 80.79h8.21a5.52 5.52 0 0 1 5.52 5.52v21.13H42.65V86.31a5.52 5.52 0 0 1 5.52-5.52Z"
      fill={fill}
      stroke={strokeSecondary}
      strokeWidth={strokeWidth}
      strokeMiterlimit={10}
    />
  </Svg>
);

export default HomeIcon;
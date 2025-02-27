import * as React from "react";
import Svg, { Path } from "react-native-svg";

type IconProps = {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
};

const ChatIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = "#706f6f",
  strokeWidth = 3,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 108.28 102.87"
    width={width}
    height={height}
  >
    <Path
      d="M85.02 23.38c0 11.53-18.48 20.86-41.26 20.86a73.6 73.6 0 0 1-21.23-3c-1.82-.56-3.55-1.18-5.17-1.86s-18 13.44-4.82-2.4a30.4 30.4 0 0 1-4-2.78c-3.83-3.17-6-6.89-6-10.87C2.54 11.8 21.01 2.45 43.8 2.45s41.22 9.4 41.22 20.93ZM24.26 80.24c0 11.53 18.48 20.88 41.26 20.88a73.6 73.6 0 0 0 21.23-3 52 52 0 0 0 5.18-1.88c1.73-.73 18 13.44 4.81-2.39a30.4 30.4 0 0 0 4-2.78c3.83-3.17 6-6.89 6-10.87 0-11.53-18.47-20.87-41.26-20.87s-41.22 9.33-41.22 20.91Z"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

export default ChatIcon;
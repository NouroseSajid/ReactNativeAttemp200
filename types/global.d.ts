// types/global.d.ts

declare global {
  type Route = {
    key: string;
    name: string;
    params?: object;
  };
  
  type IconProps = {
    width: number;
    height: number;
    fill: string;
    stroke?: string;
    shadowStroke?: string;
    strokeWidth?: number;

  };

  declare module '@react-navigation/bottom-tabs' {
    interface BottomTabNavigationOptions {
      lazy?: boolean;
      unmountOnBlur?: boolean;
      detachInactiveScreens?: boolean;
      animationEnabled?: boolean;
      route?: Route;
      tabBarIcon?: (props: IconProps) => React.ReactNode; // Use IconProps here
      tabBarActiveTintColor?: string;
      tabBarInactiveTintColor?: string;
    }
  }
}

export {};

import { Appearance, StyleSheet } from 'react-native';

// Define your color schemes
export const COLOR_SCHEMES = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type ColorScheme = typeof COLOR_SCHEMES[keyof typeof COLOR_SCHEMES];

// theme.js (updated color schemes)
export const COLORS = {
  light: {
    // Core colors
    primary: '#2A6EF0',       // Vibrant blue
    secondary: '#4ECDC4',     // Refreshing teal
    background: '#F9FAFC',    // Soft off-white
    surface: '#FFFFFF',       // Pure white
    error: '#E74C3C',         // Alert red
    
    // Text & borders
    textPrimary: '#1A1F36',   // Deep navy
    textSecondary: '#4A5568', // Medium gray
    border: '#E2E8F0',        // Light gray
    
    // Specials
    accent: '#FF6B6B',        // Warm coral
    success: '#10B981',       // Emerald green
    warning: '#F59E0B',       // Amber
    
    // Navigation
    tabActive: '#2A6EF0',     // Match primary
    tabInactive: '#94A3B8',   // Cool gray
    headerBg: '#FFFFFF',      // Match surface

    // Secondary properties
    secondaryFill: '#E0F7FA', // Light cyan
    secondaryStroke: '#B2EBF2', // Cyan
    secondaryStrokeWidth: 2,
    secondaryWidth: 100,
    secondaryHeight: 50,
  },
  dark: {
    // Core colors
    primary: '#4ECDC4',       // Teal from light secondary
    secondary: '#2A6EF0',     // Blue from light primary
    background: '#1A1F36',    // Deep navy
    surface: '#2D3748',       // Dark slate
    error: '#EF4444',         // Bright red
    
    // Text & borders
    textPrimary: '#F8FAFC',    // Off-white
    textSecondary: '#CBD5E0',  // Light gray
    border: '#475569',         // Medium slate
    
    // Specials
    accent: '#FF6B6B',         // Same coral for consistency
    success: '#10B981',        // Same emerald
    warning: '#F59E0B',        // Same amber
    
    // Navigation
    tabActive: '#4ECDC4',      // Match primary
    tabInactive: '#64748B',    // Medium gray
    headerBg: '#2D3748',       // Match surface

    // Secondary properties
    secondaryFill: '#004D40', // Dark teal
    secondaryStroke: '#00796B', // Teal
    secondaryStrokeWidth: 2,
    secondaryWidth: 100,
    secondaryHeight: 50,
  },
};

// Theme context setup
import React from 'react';
type ThemeContextType = {
  isDark: boolean;
  colors: typeof COLORS.light;
  setScheme: (scheme: ColorScheme) => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  isDark: false,
  colors: COLORS.light,
  setScheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>(
    Appearance.getColorScheme() || COLOR_SCHEMES.LIGHT
  );

  const setScheme = (scheme: ColorScheme) => {
    setColorScheme(scheme);
  };

  const isDark = colorScheme === COLOR_SCHEMES.DARK;
  const colors = isDark ? COLORS.dark : COLORS.light;

  return (
    <ThemeContext.Provider value={{ isDark, colors, setScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for easy theme access
export const useTheme = () => React.useContext(ThemeContext);

// Dynamic styling utility
export const dynamicStyles = (colors: typeof COLORS.light) => 
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    card: {
      backgroundColor: colors.cardBackground,
      borderColor: colors.border,
    },
    text: {
      color: colors.text,
    },
    // Add other common styles here
  });
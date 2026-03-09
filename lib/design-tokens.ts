// Design tokens for Yuanta Rewards
export const colors = {
  // Primary Brand Colors
  primary: {
    DEFAULT: '#005bac',
    light: '#00a2d9',
    dark: '#095ec4',
    accent: '#0a6ee7',
  },
  
  // Brown/Tan Colors (Points Card)
  bronze: {
    DEFAULT: '#8c4f34',
    light: '#b0643d',
    medium: '#d78c6b',
    pale: '#fdddd0',
    lighter: '#ffece5',
    lightest: '#fff3ed',
  },
  
  // Background Colors
  background: {
    DEFAULT: '#ffffff',
    secondary: '#f9f9f9',
    tertiary: '#f3f8fe',
    cyan: '#b3e8f9',
  },
  
  // Text Colors
  text: {
    primary: '#101828',
    secondary: '#6a7282',
    tertiary: '#4a5565',
    muted: '#404040',
  },
  
  // Accent Colors
  accent: {
    yellow: '#fdc024',
    yellowLight: '#fef7d3',
    red: '#fb2c36',
  },
  
  // Utility
  white: '#ffffff',
  black: '#000000',
} as const;

export type ColorToken = typeof colors;

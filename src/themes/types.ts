export interface Status {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  light: string;
  dark: string;
}

export type Theme = "default" | "dark";

export interface ThemeModes {
  theme: Theme;
  backgroundColor?: string;
}

export interface ThemeOptions {
  name?: Theme;
  graphy?: any;
  status?: any;
  font?: any;
  bg?: any;
  color?: any;
  visually?: any;
  round?: any;
  border?: any;
}

/**
 * FastAPI SaaS Boilerplate - Brand Theme Tokens & Static Types
 * Enforces strict TypeScript autocomplete and synchronization across the UI.
 */

export const DARK_THEME_PALETTE = {
  POSTES_BLACK: "#111111",
  ACID_YELLOW: "#D7FF00",
  HOT_ORANGE: "#FF6A00",
  FLASH_WHITE: "#FFFFFF",
  CONCRETE_GRAY: "#5A5A5A",
} as const;

export const WHITE_THEME_PALETTE = {
  OFF_WHITE: "#F4F6EC",
  SMOKE_GRAY: "#A6AF68",
  CHARCOAL: "#171A16",
  NEON_LIME: "#9EFF00",
  ACID_GREEN: "#C6FF00",
} as const;

export const BRAND_TOKENS = {
  dark: DARK_THEME_PALETTE,
  white: WHITE_THEME_PALETTE,
} as const;

export type DarkColorKey = keyof typeof DARK_THEME_PALETTE;
export type WhiteColorKey = keyof typeof WHITE_THEME_PALETTE;
export type ThemeMode = "light" | "dark" | "system";

/**
 * Semantic mapping helper for design tokens
 */
export const SEMANTIC_PALETTE = {
  light: {
    background: WHITE_THEME_PALETTE.OFF_WHITE,
    foreground: WHITE_THEME_PALETTE.CHARCOAL,
    primary: WHITE_THEME_PALETTE.CHARCOAL,
    primaryForeground: WHITE_THEME_PALETTE.NEON_LIME,
    accent: WHITE_THEME_PALETTE.NEON_LIME,
    accentSecondary: WHITE_THEME_PALETTE.ACID_GREEN,
    border: "#D8DFCA",
    destructive: DARK_THEME_PALETTE.HOT_ORANGE,
  },
  dark: {
    background: DARK_THEME_PALETTE.POSTES_BLACK,
    foreground: DARK_THEME_PALETTE.FLASH_WHITE,
    primary: DARK_THEME_PALETTE.ACID_YELLOW,
    primaryForeground: DARK_THEME_PALETTE.POSTES_BLACK,
    accent: DARK_THEME_PALETTE.ACID_YELLOW,
    accentSecondary: DARK_THEME_PALETTE.HOT_ORANGE,
    border: "#2B2B2B",
    destructive: DARK_THEME_PALETTE.HOT_ORANGE,
  },
} as const;

// @ts-check

/**
 * @typedef {import('./tailwind/types').TailwindThemeConfig} TailwindThemeConfig
 */

/**
 * Primitive colors mostly support opacity modifier (<token>/<opacity-value>).
 * @satisfies {TailwindThemeConfig['colors']}
 */
export const primitiveColors = {
  base: {
    black: "var(--color-base-black)",
    white: "var(--color-base-white)",
  },
  neutral: {
    50: "var(--color-neutral-50)",
    100: "var(--color-neutral-100)",
    200: "var(--color-neutral-200)",
    300: "var(--color-neutral-300)",
    400: "var(--color-neutral-400)",
    500: "var(--color-neutral-500)",
    600: "var(--color-neutral-600)",
    700: "var(--color-neutral-700)",
    800: "var(--color-neutral-800)",
    900: "var(--color-neutral-900)",
    950: "var(--color-neutral-950)",
  },
  amber: {
    50: "var(--color-amber-50)",
    100: "var(--color-amber-100)",
    200: "var(--color-amber-200)",
    300: "var(--color-amber-300)",
    400: "var(--color-amber-400)",
    500: "var(--color-amber-500)",
    600: "var(--color-amber-600)",
    700: "var(--color-amber-700)",
    800: "var(--color-amber-800)",
    900: "var(--color-amber-900)",
    950: "var(--color-amber-950)",
  },
  pink: {
    50: "var(--color-pink-50)",
    100: "var(--color-pink-100)",
    200: "var(--color-pink-200)",
    300: "var(--color-pink-300)",
    400: "var(--color-pink-400)",
    500: "var(--color-pink-500)",
    600: "var(--color-pink-600)",
    700: "var(--color-pink-700)",
    800: "var(--color-pink-800)",
    900: "var(--color-pink-900)",
    950: "var(--color-pink-950)",
  },
};

/**
 * @satisfies {TailwindThemeConfig['colors']}
 */
export const semanticColors = {
  foreground: {
    primary: "var(--color-foreground-primary)",
    secondary: "var(--color-foreground-secondary)",
    tertiary: "var(--color-foreground-tertiary)",
    interactive: {
      disabled: "var(--color-foreground-interactive-disabled)",
      enable: "var(--color-foreground-interactive-enable)",
      hover: "var(--color-foreground-interactive-hover)",
    },
  },
  background: {
    primary: "var(--color-background-primary)",
    secondary: "var(--color-background-secondary)",
    tertiary: "var(--color-background-tertiary)",
    interactive: {
      disabled: "var(--color-background-interactive-disabled)",
      enable: "var(--color-background-interactive-enable)",
      hover: "var(--color-background-interactive-hover)",
    },
  },
  brand: {
    primary: "var(--color-brand-primary)",
    secondary: "var(--color-brand-secondary)",
    tertiary: "var(--color-brand-tertiary)",
  },
};

/**
 * Design system border colors
 * @satisfies {TailwindThemeConfig['borderColor']}
 */

export const borderColors = {
  light: "var(--color-border-light)",
  medium: "var(--color-border-medium)",
  strong: "var(--color-border-strong)",
  focus: "var(--color-border-focus)",
  interactive: {
    enable: "var(--color-border-interactive-enable)",
    hover: "var(--color-border-interactive-hover)",
    press: "var(--color-border-interactive-press)",
  },
};

/**
 * Additional colors.
 * Note: this config does not support nested object, it could break the doc page.
 * @satisfies {Record<string, string>}
 */
export const additionalColors = {
  // For blur fill color
  "blur-fill": "var(--color-blur-fill)",
  transparent: "transparent",
};

/**
 * Design system colors
 * @satisfies {TailwindThemeConfig['colors']}
 */
export const colors = {
  ...semanticColors,
  ...primitiveColors,
  // Make border specific colors available in global color with prefix 'border'
  ...borderColors,
};

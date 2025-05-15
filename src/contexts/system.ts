import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import { animationStyles } from "./animations";

const varRoot = ":host";

const config = defineConfig({
  cssVarsRoot: varRoot,
  conditions: {
    light: `${varRoot} &, .light &`,
  },
  preflight: { scope: varRoot },
  globalCss: {
    [varRoot]: {
      ...defaultConfig.globalCss?.html,
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: "11px",
    },
  },
  theme: {
    animationStyles,
    tokens: {
      colors: {
        primary: { value: "#333780" },
        secondary: { value: "#8055A4" },
        foreground: { value: "#F8F8F8" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);

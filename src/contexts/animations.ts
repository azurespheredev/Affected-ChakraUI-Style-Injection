import { defineAnimationStyles } from "@chakra-ui/react";

export const animationStyles = defineAnimationStyles({
  slide_to_top: {
    value: {
      animationName: "slide-from-bottom, fade-in",
      animationDuration: "0.5s",
      animationTimingFunction: "ease-in",
    },
  },
});

export const fadeScaleInAnimationProps = {
  "data-state": "open",
  animationDuration: "slow",
  animationStyle: {
    _open: "scale-fade-in",
    _closed: "scale-fade-out",
  },
};

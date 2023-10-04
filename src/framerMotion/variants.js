export const vrPhNavCont = {
  init: {
    x: "80vw",
  },
  anim: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

export const vrPhHeroText = (yVh = "10vh") => ({
  init: { y: yVh, opacity: 0 },
  anim: {
    y: "0vh",
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.5,
    },
  },
});

export const vrPhHeroImg = {
  init: { x: "10vw", opacity: 0 },
  anim: {
    x: "0",
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const vrPhCards = (rt = "90deg") => ({
  init: { scale: 0.1, rotate: rt },
  anim: {
    scale: 1,
    rotate: "0deg",
    transition: {
      delay: 0.1,
      type: "spring",
      mass: 0.5,
    },
  },
});

export const vrAboutCard = {
  init: {
    y: "50vh",
  },
  anim: {
    y: 0,
    transition: {
      delay: 0.1,
      type: "spring",
      mass: 0.5,
    },
  },
};

export const vrMySkillsLabel = {
  init: {
    transform: "translate(30%, 200%)",
    opacity: 0,
  },
  anim: {
    transform: "translate(30%, -52%)",
    opacity: 1,
    transition: { type: "spring", mass: 0.5, delay: 0.1 },
  },
};

export const vrProjectCtaBtn = (levizja = "10vw") => ({
  init: { x: levizja },
  anim: {
    x: 0,
    transition: {
      delay: 0.2,
    },
  },
});

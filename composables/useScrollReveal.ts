import gsap from "gsap";

export const useScrollReval = (element: any, duration: number) => {
  gsap.to(element, {
    duration: duration,
    y: 0,
    scrollTrigger: {
      trigger: element,
  /*     start: "top bottom",
      end: "bottom center", */
    },
  });
};

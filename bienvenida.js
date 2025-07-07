console.log("GSAP is loaded:", gsap);
const tl = gsap.timeline();
gsap.to("#sun-ring-2", {
    opacity: 0.1,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
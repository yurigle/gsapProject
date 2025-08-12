document.addEventListener("DOMContentLoaded", (event) => {

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollSmoother.create({
        smooth: 1,
        effects: true,
    });
});
document.addEventListener('DOMContentLoaded', () => {
    console.log("GSAP is loaded:", gsap);
const sunCore = document.getElementById("sun-core");
const sunRing1 = document.getElementById("sun-ring-1");
const sunRing2 = document.getElementById("sun-ring-2");
const aura = document.getElementById("aura");

const sunIntroTl = gsap.timeline({ paused:true, defaults: {duration: 0.6, ease: "power2.out"}});

sunIntroTl.fromTo(sunCore, { r: 0, opacity: 0 }, { r: 60, opacity: 1})
    .fromTo(sunRing1, { r: 0, opacity: 0 }, { r: 70, opacity: 0.3}, "-=0.3") 
    .fromTo(sunRing2, { r: 0, opacity: 0 }, { r: 85, opacity: 0.1}, "-=0.3") 
    .fromTo(aura, { r: 0, opacity: 0 }, { r: 150, opacity: 0.1}, "-=0.3");

    sunIntroTl.then(() => { // .then() se ejecuta cuando la línea de tiempo ha completado su ejecución
        // Animación de parpadeo para el primer anillo
        gsap.to(sunRing1, {
            opacity: 0.3,
            scale: 1.05,
            transformOrigin: "center center",
            duration: 1.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 0.2 
        });

        // Animación de parpadeo para el segundo anillo
        gsap.to(sunRing2, {
            opacity: 0.2,
            scale: 1.08, 
            transformOrigin: "center center",
            duration: 1.8,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 0.5
        });

        gsap.to(sunCore, {
            opacity: 0.9,
            scale: 1.02,
            transformOrigin: "center center",
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });

        gsap.to(aura, {
            opacity: 0.9,
            scale: 1.02,
            transformOrigin: "center center",
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });
    });

sunIntroTl.play();
})

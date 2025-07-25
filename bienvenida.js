document.addEventListener('DOMContentLoaded', () => {
    console.log("GSAP is loaded:", gsap);
    //Ref elementos sol
    const sunCore = document.getElementById("sun-core");
    const sunRing1 = document.getElementById("sun-ring-1");
    const sunRing2 = document.getElementById("sun-ring-2");
    const aura = document.getElementById("aura");

    //Ref elementos nubes
    const cloud1 = document.getElementById('cloud-svg-1');
    const cloud2 = document.getElementById('cloud-svg-2');
    const cloud3 = document.getElementById('cloud-svg-3');
    const cloud4 = document.getElementById('cloud-svg-4');

    //Ref elementos del pasto
    // const grassLayer1 = document.querySelector('grass.layer1');
    const grassLayer1 = document.getElementById('grass-layer-1');
    const grassLayer2 = document.getElementById('grass-layer-2');
    const grassLayer3 = document.getElementById('grass-layer-3');
    const grassLayer4 = document.getElementById('grass-layer-4');
    const grassLayer5 = document.getElementById('grass-layer-5');


    const mainAnimationTl = gsap.timeline({ paused: true, defaults: { duration: 1.2, ease: "power2.out" } });

    mainAnimationTl
        .fromTo(grassLayer5, { y: 100, opacity: 0 }, { y: 0, opacity: 1, ease: "power2.out" }, "start")
        .fromTo(grassLayer4, { y: 100, opacity: 0 }, { y: 0, opacity: 1, ease: "power2.out" }, "start+=0.2")
        .fromTo(grassLayer3, { y: 100, opacity: 0 }, { y: 0, opacity: 1, ease: "power2.out" }, "start+=0.4")
        .fromTo(grassLayer2, { y: 100, opacity: 0 }, { y: 0, opacity: 1, ease: "power2.out" }, "start+=0.6")
        .fromTo(grassLayer1, { y: 100, opacity: 0 }, { y: 0, opacity: 1, ease: "power2.out" }, "start+=0.8")
        .fromTo(sunCore, { r: 0, opacity: 0, y: 100 }, { y: 0, r: 85, opacity: 1  })
        .fromTo(sunRing1, { r: 0, opacity: 0 }, { r: 90, duration: 0.7, opacity: 0.3 }, "-=0.3")
        .fromTo(sunRing2, { r: 0, opacity: 0 }, { r: 98, duration: 0.8, opacity: 0.1 }, "-=0.3")
        .fromTo(aura, { r: 0, opacity: 0 }, { r: 300, duration: 1, opacity: 1 });

    mainAnimationTl.then(() => { // .then() se ejecuta cuando la línea de tiempo ha completado su ejecución
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

    mainAnimationTl.play();
    
    console.log("cloud1 ancho nube | inicio | fin: ", cloud1.clientWidth, (window.innerWidth - cloud1.clientWidth), (window.innerWidth + cloud1.clientWidth));
    console.log("cloud3 ancho nube | inicio | fin: ", cloud3.clientWidth, (-cloud3.clientWidth), (window.innerWidth + cloud3.clientWidth));
    console.log("window innerwidth: ", window.innerWidth);


    gsap.fromTo(cloud1,
        { x: -window.innerWidth + cloud1.clientWidth, opacity: 0 },
        {
            x: window.innerWidth + cloud1.clientWidth,
            opacity: 1,
            duration: 30,
            ease: "none",
            repeat: -1,
            delay: 1
        }
    );

    gsap.fromTo(cloud2,
        { x: window.innerWidth + cloud2.clientWidth, opacity: 0 },
        {
            x: -window.innerWidth,
            opacity: 1,
            duration: 30,
            ease: "none",
            repeat: -1,
            delay: 3
        }
    );

    gsap.fromTo(cloud3,
        { x: - window.innerWidth + cloud3.clientWidth, opacity: 0 },
        {
            x: window.innerWidth + cloud3.clientWidth,
            opacity: 1,
            duration: 40,
            ease: "none",
            repeat: -1,
            delay: 2
        }
    );

    gsap.fromTo(cloud4,
        { x: window.innerWidth + cloud4.clientWidth, opacity: 0 },
        {
            x: -window.innerWidth,
            opacity: 1,
            duration: 40,
            ease: "none",
            repeat: -1,
            delay: 2 
        }
    );
})

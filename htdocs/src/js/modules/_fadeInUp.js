export const fadeInUp = () => {
    gsap.defaults({ easeEach: "sine" });
    gsap.set(".fadeInUp", { y: 50 });

    if (window.innerWidth > 768) {
        ScrollTrigger.batch(".fadeInUp", {
            interval: 0.7, // time window (in seconds) for batching to occur.
            // batchMax: 3,   // maximum batch size (targets)
            onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.23 }),
            // also onLeave, onEnterBack, and onLeaveBack
            // also most normal ScrollTrigger values like start, end, etc.
        });
    } else {
        ScrollTrigger.batch(".fadeInUp", {
            interval: 0.5, // time window (in seconds) for batching to occur.
            // batchMax: 3,   // maximum batch size (targets)
            onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.2 }),
            // also onLeave, onEnterBack, and onLeaveBack
            // also most normal ScrollTrigger values like start, end, etc.
        });
    }
}
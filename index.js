// intro animation
// slogan
var intro = gsap.timeline({repeat: 0});
intro.to(".slogan", {autoAlpha: 1, duration: 2});
intro.to(".developer", {autoAlpha: 1, duration: 2, delay: -2});
intro.to(".slogan", {autoAlpha: 0, duration: 1});
intro.to(".developer", {autoAlpha: 0, duration: 1});
intro.to(".moon", {autoAlpha: 1, duration: 5});
intro.to(".smokeRight", {autoAlpha: 1, duration: 3, ease: "power4", delay: -4.5});
intro.to(".smokeRight", {duration: 30, left: "10rem", top: "-10rem", delay: -4.5});
intro.to(".container", {autoAlpha: 1, duration: 1, delay: -29.8});
intro.to(".smokeBottom", {autoAlpha: 1, duration: 3, delay: -30});
intro.to(".smokeBottom", {duration: 30, left: "-10rem", delay: -27});
intro.to("#title", {autoAlpha: 1, duration: 2, delay: -33});
intro.to(".liOne", {opacity: 1, right: "20vw", duration: 1, delay: -32});
intro.to(".liTwo", {opacity: 1, right: "17vw", duration: 1, delay: -31.5});
intro.to(".liThree", {opacity: 1, right: "14vw", duration: 1, delay: -31});
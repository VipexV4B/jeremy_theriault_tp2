import { animate, irregular, utils } from 'animejs';

animate('.balai', {
  rotate: 360,
  loop: true,
  duration: 1000 * 5,
  ease: "linear",
});

animate(".onde", {
    scale: [0, 1],
    duration: 1000 * 3,
    loop: true
})
animate(".obj", {
    x: [10, 50, 4, 10, 100, 70,-70, 0],
    y: [10, -50, 4, -100, 4, 50,0],
    opacity: [0, 1, 0.5, 1, 0],
    delay: () => utils.random(100, 200, 10),
    ease: irregular(6,3),
    duration: 3000,
    loop:true,
})

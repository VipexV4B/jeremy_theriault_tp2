import { animate } from "animejs";

animate(".dot", {
  x: [200, -200, 100, -200],
  y: [50, -50,],
  scale: [1, 1.5, 0.7, 1.5],
  loop: true,
  alternate: true, // Effet ping-pong (aller-retour)
});

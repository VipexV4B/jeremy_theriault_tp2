import { animate } from "animejs";

animate(".dot", {
  x: [200, -200],
  loop: true,
  alternate: true, // Effet ping-pong (aller-retour)
});

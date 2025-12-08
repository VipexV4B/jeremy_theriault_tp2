import Zdog from "zzz";

const illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  resize: true
});

const circ = new Zdog.Ellipse({
  addTo: illo,
  diameter: 270,
  stroke: 50,
  color: "rgba(20, 20, 191, 0.27)"
});

function animate() {
  illo.rotate.y += 0.03;
  illo.rotate.x += 0.03;

  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();

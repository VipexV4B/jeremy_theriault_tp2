import Zdog from "https://esm.sh/zdog";

const illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  resize: true
});

const circ = new Zdog.Ellipse({
  addTo: illo,
  diameter: 100,
  stroke: 30,
  color: "rgba(0, 77, 100, 1)"
});

function animate() {
  illo.rotate.y += 0.03;
  illo.rotate.x += 0.03;

  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();



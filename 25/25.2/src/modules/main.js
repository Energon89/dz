const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let circles = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

addEventListener("mousedown", event => {
  const x = event.clientX;
  const y = event.clientY;
  const radius = Math.random() * 5;
  const grad = ctx.createLinearGradient(0, 0, 1000, 0);
  grad.addColorStop("0", "magenta");
  grad.addColorStop(".50", "blue");
  grad.addColorStop("1", "red");
  const color = grad;
  circles.push(new Circle(x, y, radius, color));
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.velocity = {
    x: Math.random() - 0.5,
    y: Math.random() - 0.5
  };
}

Circle.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.closePath();
};

Object.prototype.update = function() {
  this.draw();
  this.x += this.velocity.x;
  this.y += this.velocity.y;
};

function init() {
  for (let i = 0; i < 800; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 5;
    const grad = ctx.createLinearGradient(0, 0, 1000, 0);
    grad.addColorStop("0", "magenta");
    grad.addColorStop(".50", "blue");
    grad.addColorStop("1", "red");
    const color = grad;
    circles.push(new Circle(x, y, radius, color));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach(circle => {
    circle.update();
  });
}
init();
animate();

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min - 1)) + min;
}

function init() {
  const canvas = document.getElementById('app');
  if (canvas && canvas.getContext) {
    const ratio = window.devicePixelRatio;
    const width = (canvas.width = document.body.clientWidth);
    const height = (canvas.height = document.body.clientHeight);
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const context = canvas.getContext('2d');
    const depth = Math.min(width, height) / 2;
    const speed = 1;
    const number = Math.floor((width * height) / (400 * ratio));
    const stars = new Array(number)
      .fill(void 0)
      .map(p => [
        randomInRange(-width, width),
        randomInRange(-height, height),
        randomInRange(speed, depth),
      ]);

    function loop() {
      context.fillStyle = 'rgba(0, 0, 0, .5)';
      context.fillRect(0, 0, width, height);

      for (let i = 0; i < number; i++) {
        stars[i][2] -= speed;

        if (stars[i][2] < 0) {
          stars[i][0] = randomInRange(-width, width);
          stars[i][1] = randomInRange(-height, height);
          stars[i][2] = depth;
        }

        const speedfactor = 64 / stars[i][2];
        const x = stars[i][0] * speedfactor + halfWidth;
        const y = stars[i][1] * speedfactor + halfHeight;

        if (x >= 0 && x <= width && y >= 0 && y <= height) {
          const depthFactor = 1 - stars[i][2] / depth;
          const size = depthFactor * ratio;
          const shade = ~~(depthFactor * 255);
          context.fillStyle = `rgb(${shade}, ${shade}, ${shade})`;
          context.fillRect(x, y, size, size);
        }
      }
      window.requestAnimationFrame(loop);
    }
    loop();
  }
}

init();

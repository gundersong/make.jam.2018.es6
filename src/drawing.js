function drawing(p5) {
  const canvasWidth = p5.windowWidth;
  const canvasHeight = p5.windowHeight;

  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight);
  };

  p5.draw = () => {
    p5.background(255);
    p5.ellipse(
        p5.mouseX,
        p5.mouseY,
        100,
        100
    );
  };
}

export default drawing;

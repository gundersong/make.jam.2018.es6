import { planets } from './planets';
import { getRandomMoon } from './utils';

const twoPi = 6.175;

const sun = {
  position: {
    x: 0,
    y: 0,
    z: 0,
  },
  size: 20,
};

let sunTexture;
let moonTexture;
let bg;
let sunRotation = 0;

export default function solarSystem(p5) {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    sunTexture = p5.loadImage('./src/assets/sun.jpg');
    moonTexture = p5.loadImage('./src/assets/earthMoon.jpg');
    bg = p5.loadImage('./src/assets/background.png');

    Object.keys(planets).forEach((planetName) => {
      planets[planetName].texture = p5.loadImage(`./src/assets/${planetName}.jpg`);
    });
  };

  p5.draw = () => {
    p5.camera(0, 250, -125, 0, 0, 0, 0, 1, 0);
    p5.pointLight(255, 255, 255, 0, 0, 0);
    p5.background(0);

    // drag to move the world.
    p5.orbitControl();

    // Draw the sun in the middle
    p5.push();
    p5.translate(sun.position.x, sun.position.y, sun.position.z);
    p5.texture(sunTexture);
    p5.rotateZ(sunRotation);
    p5.sphere(sun.size);
    p5.pop();

    sunRotation += 0.005;

    // Draw Planets
    Object.keys(planets).forEach((planetName) => {
      const {
        distanceFromSun,
        sizeComparedToSun,
        angleToSun,
        orbitSpeed,
        moons,
        texture: planetTexture,
      } = planets[planetName];

      planets[planetName].angleToSun += orbitSpeed;
      if (planets[planetName].angleToSun >= twoPi) {
        planets[planetName].angleToSun = twoPi - planets[planetName].angleToSun;
      }

      p5.push();
      p5.rotateZ(angleToSun);
      p5.rotateX(90);
      p5.translate(sun.position.x + distanceFromSun, 0);
      p5.texture(planetTexture);
      p5.sphere(sun.size * sizeComparedToSun);

      if (moons) {
        moons.forEach((moon) => {
          moon.angleToPlanet += moon.orbitSpeed;
          if (moon.angleToPlanet >= twoPi) {
            moon.angleToPlanet = twoPi - moon.angleToPlanet;
          }

          p5.push();
          p5.rotateY(moon.angleToPlanet);
          p5.translate(moon.distanceToPlanet, moon.YMovement);
          p5.texture(moonTexture);
          p5.sphere((sun.size * sizeComparedToSun) * moon.sizeComparedToPlanet);
          p5.pop();
        });
      }
      p5.pop();
    });
  };
}

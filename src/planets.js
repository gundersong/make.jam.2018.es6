import { getRandomOrbitSpeed, getRandomMoon } from './utils';

const minPlanetOrbitSpeed = 0.01;
const maxPlanetOrbitSpeed = 0.02;

export const planets = {
  mercury: {
    distanceFromSun: 25,
    sizeComparedToSun: 0.1,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
  },
  venus: {
    distanceFromSun: 35,
    sizeComparedToSun: 0.2,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
  },
  earth: {
    distanceFromSun: 50,
    sizeComparedToSun: 0.3,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    moons: [getRandomMoon()],
  },
  mars: {
    distanceFromSun: 70,
    sizeComparedToSun: 0.25,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    moons: [getRandomMoon(), getRandomMoon()],
  },
  jupiter: {
    distanceFromSun: 90,
    sizeComparedToSun: 0.5,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    moons: [
      getRandomMoon(), getRandomMoon(), getRandomMoon(), getRandomMoon(),
    ],
  },
  saturn: {
    distanceFromSun: 120,
    sizeComparedToSun: 0.2,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    moons: [getRandomMoon(), getRandomMoon(), getRandomMoon()],
  },
  uranus: {
    distanceFromSun: 135,
    sizeComparedToSun: 0.35,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    moons: [getRandomMoon(), getRandomMoon(), getRandomMoon(), getRandomMoon(), getRandomMoon()],
  },
  neptune: {
    distanceFromSun: 155,
    sizeComparedToSun: 0.35,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    moons: [getRandomMoon()],
  },
};

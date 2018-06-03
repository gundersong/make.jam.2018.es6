import { getRandomOrbitSpeed, getRandomMoon } from './utils';

const minPlanetOrbitSpeed = 0.01;
const maxPlanetOrbitSpeed = 0.02;
const spaceBetweenPlanets = 12;

export const planets = {
  mercury: {
    distanceFromSun: spaceBetweenPlanets * 2.5,
    sizeComparedToSun: 0.1,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
  },
  venus: {
    distanceFromSun: spaceBetweenPlanets * 3.5,
    sizeComparedToSun: 0.2,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
  },
  earth: {
    distanceFromSun: spaceBetweenPlanets * 5.5,
    sizeComparedToSun: 0.3,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    moons: [getRandomMoon()],
  },
  mars: {
    distanceFromSun: spaceBetweenPlanets * 7,
    sizeComparedToSun: 0.25,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    moons: [getRandomMoon(), getRandomMoon()],
  },
  jupiter: {
    distanceFromSun: spaceBetweenPlanets * 9,
    sizeComparedToSun: 0.5,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    moons: [
      getRandomMoon(), getRandomMoon(), getRandomMoon(), getRandomMoon(),
    ],
  },
  saturn: {
    distanceFromSun: spaceBetweenPlanets * 12,
    sizeComparedToSun: 0.2,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    moons: [getRandomMoon(), getRandomMoon(), getRandomMoon()],
  },
  uranus: {
    distanceFromSun: spaceBetweenPlanets * 13.5,
    sizeComparedToSun: 0.35,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    moons: [getRandomMoon(), getRandomMoon(), getRandomMoon(), getRandomMoon(), getRandomMoon()],
  },
  neptune: {
    distanceFromSun: spaceBetweenPlanets * 15.5,
    sizeComparedToSun: 0.35,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    moons: [getRandomMoon()],
  },
};

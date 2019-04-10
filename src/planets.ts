import { getRandomMoon, getRandomOrbitSpeed } from './utils';

import { EPlanets, IPlanet } from './types';

const minPlanetOrbitSpeed = 0.01;
const maxPlanetOrbitSpeed = 0.02;
const spaceBetweenPlanets = 12;

export const planets: { [Key in EPlanets]: IPlanet } = {
  [EPlanets.mercury]: {
    angleToSun: (Math.random() * 100),
    distanceFromSun: spaceBetweenPlanets * 2.5,
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    sizeComparedToSun: 0.1,
  },
  [EPlanets.venus]: {
    angleToSun: (Math.random() * 100),
    distanceFromSun: spaceBetweenPlanets * 3.5,
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    sizeComparedToSun: 0.2,
  },
  [EPlanets.earth]: {
    angleToSun: (Math.random() * 100),
    distanceFromSun: spaceBetweenPlanets * 5.5,
    moons: [getRandomMoon()],
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    sizeComparedToSun: 0.3,
  },
  [EPlanets.mars]: {
    angleToSun: (Math.random() * 100),
    distanceFromSun: spaceBetweenPlanets * 7,
    moons: [getRandomMoon(), getRandomMoon()],
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    sizeComparedToSun: 0.25,
  },
  [EPlanets.jupiter]: {
    angleToSun: (Math.random() * 100),
    distanceFromSun: spaceBetweenPlanets * 9,
    moons: [
      getRandomMoon(), getRandomMoon(), getRandomMoon(), getRandomMoon(),
    ],
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    sizeComparedToSun: 0.5,
  },
  [EPlanets.saturn]: {
    angleToSun: (Math.random() * 100),
    distanceFromSun: spaceBetweenPlanets * 12,
    moons: [getRandomMoon(), getRandomMoon(), getRandomMoon()],
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    sizeComparedToSun: 0.2,
  },
  [EPlanets.uranus]: {
    angleToSun: (Math.random() * 100),
    distanceFromSun: spaceBetweenPlanets * 13.5,
    moons: [getRandomMoon(), getRandomMoon(), getRandomMoon(), getRandomMoon(), getRandomMoon()],
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    sizeComparedToSun: 0.35,
  },
  [EPlanets.neptune]: {
    angleToSun: (Math.random() * 100),
    distanceFromSun: spaceBetweenPlanets * 15.5,
    moons: [getRandomMoon()],
    orbitSpeed: getRandomOrbitSpeed(minPlanetOrbitSpeed, maxPlanetOrbitSpeed),
    sizeComparedToSun: 0.35,
  },
};

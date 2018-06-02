import { getRandomOrbitSpeed } from './utils';

const minOrbitSpeed = 0.01;
const maxOrbitSpeed = 0.02;

export const planets = {
  mercury: {
    distanceFromSun: 25,
    sizeComparedToSun: 0.1,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minOrbitSpeed, maxOrbitSpeed),
  },
  venus: {
    distanceFromSun: 35,
    sizeComparedToSun: 0.2,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minOrbitSpeed, maxOrbitSpeed),
  },
  earth: {
    distanceFromSun: 50,
    sizeComparedToSun: 0.3,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minOrbitSpeed, maxOrbitSpeed),
    moons: [
      {
        angleToPlanet: (Math.random() * 100),
        distanceToPlanet: 10,
        sizeComparedToPlanet: 0.2,
        orbitSpeed: getRandomOrbitSpeed(minOrbitSpeed, maxOrbitSpeed),
        YMovement: -Math.random() * 10,
      },
    ],
  },
  mars: {
    distanceFromSun: 70,
    sizeComparedToSun: 0.25,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minOrbitSpeed, maxOrbitSpeed),
  },
  jupiter: {
    distanceFromSun: 90,
    sizeComparedToSun: 0.5,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minOrbitSpeed, maxOrbitSpeed),
    moons: [
      {
        angleToPlanet: (Math.random() * 100),
        distanceToPlanet: 15,
        sizeComparedToPlanet: 0.15,
        orbitSpeed: getRandomOrbitSpeed(minOrbitSpeed, maxOrbitSpeed),
        YMovement: -Math.random() * 10,
      },
      {
        angleToPlanet: (Math.random() * 100),
        distanceToPlanet: 12,
        sizeComparedToPlanet: 0.12,
        orbitSpeed: getRandomOrbitSpeed(minOrbitSpeed, maxOrbitSpeed),
        YMovement: -Math.random() * 10,
      },
    ],
  },
  saturn: {
    distanceFromSun: 120,
    sizeComparedToSun: 0.2,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minOrbitSpeed, maxOrbitSpeed),
  },
  uranus: {
    distanceFromSun: 135,
    sizeComparedToSun: 0.35,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minOrbitSpeed, maxOrbitSpeed),
  },
  neptune: {
    distanceFromSun: 155,
    sizeComparedToSun: 0.35,
    angleToSun: (Math.random() * 100),
    orbitSpeed: getRandomOrbitSpeed(minOrbitSpeed, maxOrbitSpeed),
  },
};

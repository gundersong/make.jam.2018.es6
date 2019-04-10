import { IMoon } from './types'

export const getRandomOrbitSpeed = (min: number, max: number): number => ((Math.random() * (min - max)) + max);

export const getRandomYMovement = (maxRange: number): number => {
  const randomFloat = Math.random();

  if (randomFloat < 0.5) {
    return randomFloat * -maxRange;
  }

  return randomFloat * maxRange;
};

export const getRandomMoon = (): IMoon => {
  const minMoonOrbitSpeed = 0.005;
  const maxMoonOrbitSpeed = 0.02;
  const maxYMovementRange = 5;

  return {
    angleToPlanet: (Math.random() * 100),
    distanceToPlanet: Math.floor(Math.random() * 8) + 10,
    sizeComparedToPlanet: (Math.random() * 0.1) + 0.1,
    orbitSpeed: getRandomOrbitSpeed(minMoonOrbitSpeed, maxMoonOrbitSpeed),
    YMovement: getRandomYMovement(maxYMovementRange),
  };
};

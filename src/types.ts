import { Image } from "p5";

export enum EPlanets {
    mercury = 'mercury',
    venus = 'venus',
    earth = 'earth',
    mars = 'mars',
    jupiter = 'jupiter',
    saturn = 'saturn',
    uranus = 'uranus',
    neptune = 'neptune'
}

export interface IPlanet {
    angleToSun: number,
    distanceFromSun: number,
    moons?: IMoon[],
    orbitSpeed: number,
    sizeComparedToSun: number,
    texture?: Image;
}

export interface IMoon {
    angleToPlanet: number,
    distanceToPlanet: number,
    sizeComparedToPlanet: number,
    orbitSpeed: number,
    YMovement: number,
}
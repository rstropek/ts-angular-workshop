export type Wheel = {
  manufacturer: string,
  weight: number,
  tuebless: boolean
}

export enum FrameMaterial {
  Steel,
  Aluminum,
  CarbonFiber
}

export enum BrakeType {
  Disc,
  Rim
}

export type Groupset = {
  manufacturer: string,
  weight: number,
}

export type Bike = {
  wheels: [Wheel, Wheel],
  frameMaterial: FrameMaterial,
  weight: number,
  hasSuspension: [boolean, boolean],
  brakeType: BrakeType,
  groupset: Groupset,
  productionPrice: number,
  retailPrice: number,
}

export const sampleBikes: Bike[] = [
  {
    wheels: [ { manufacturer: 'Shimano', weight: 1000, tuebless: true }, { manufacturer: 'Shimano', weight: 1000, tuebless: true } ],
    frameMaterial: FrameMaterial.Aluminum,
    weight: 10000,
    hasSuspension: [false, false],
    brakeType: BrakeType.Disc,
    groupset: { manufacturer: 'Shimano', weight: 2000 },
    productionPrice: 1000,
    retailPrice: 2000
  },
  {
    wheels: [ { manufacturer: 'Shimano', weight: 1000, tuebless: false }, { manufacturer: 'Shimano', weight: 1000, tuebless: false } ],
    frameMaterial: FrameMaterial.CarbonFiber,
    weight: 8000,
    hasSuspension: [true, true],
    brakeType: BrakeType.Rim,
    groupset: { manufacturer: 'Shimano', weight: 1500 },
    productionPrice: 2000,
    retailPrice: 4000
  }
];

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

const pepsi: [string, boolean, number] = ['brown', true, 40];

//Using type
type Drink = [string, boolean, number];
const coca: Drink = ['brown', true, 40];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};

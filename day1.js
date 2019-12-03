/*
--- Day 1: The Tyranny of the Rocket Equation ---
Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For example:

For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
For a mass of 1969, the fuel required is 654.
For a mass of 100756, the fuel required is 33583.
The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

What is the sum of the fuel requirements for all of the modules on your spacecraft?
*/
// shift + alt + I --> select end of lines

// part 2
const puzzleInput = [
  89122,
  141123,
  91549,
  66506,
  53504,
  56517,
  77050,
  92298,
  84853,
  141828,
  86739,
  126125,
  82793,
  113761,
  68961,
  132576,
  61718,
  64498,
  110415,
  134867,
  102449,
  107364,
  88491,
  120584,
  52192,
  130494,
  121583,
  132166,
  111339,
  68715,
  104966,
  117227,
  58921,
  83909,
  70626,
  141637,
  95127,
  72029,
  136121,
  136915,
  74312,
  54863,
  53547,
  149493,
  78528,
  132289,
  148754,
  133905,
  135357,
  58483,
  62214,
  124684,
  118590,
  107087,
  95768,
  86835,
  122277,
  126183,
  108546,
  75212,
  62280,
  76039,
  135743,
  86133,
  111613,
  139477,
  65930,
  106225,
  101531,
  96501,
  66844,
  114158,
  137091,
  138143,
  102083,
  69857,
  59372,
  137605,
  108135,
  96365,
  94851,
  104414,
  74194,
  74188,
  131888,
  75910,
  78279,
  93285,
  53597,
  82705,
  119360,
  149274,
  92510,
  95490,
  54087,
  97695,
  94753,
  80493,
  101173,
  51906
];
const fuelRequirement = mass => Math.floor(mass / 3) - 2;

const recursiveFuelReq = mass => {
  const massValue = fuelRequirement(mass);
  if (massValue <= 0) return 0
  return massValue + recursiveFuelReq(massValue);
};

const getSum = arr => arr.reduce((acc, mass) => acc + recursiveFuelReq(mass), 0);

console.log(getSum(puzzleInput));
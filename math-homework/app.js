const { perimeter, area, volume } = require('geometry-formulas')

const perimeterProblem = (formula, side1, side2, side3) => {
  console.log(`The perimeter of this ${formula.name} is ${formula(side1, side2, side3).toFixed(2)}`);
}

perimeterProblem(perimeter.square, 2);

perimeterProblem(perimeter.rectangle, 2, 3);

perimeterProblem(perimeter.parallelogram, 2, 3);

perimeterProblem(perimeter.triangle, 2, 3, 4);

perimeterProblem(perimeter.regularNPolygon, 2, 3);

perimeterProblem(perimeter.trapezoid, 2, 3, 4);

perimeterProblem(perimeter.circle, 2);

const areaProblem = (formula, side1, side2, side3) => {
  console.log(`The area of this ${formula.name} is ${formula(side1, side2, side3).toFixed(2)}`);
}

areaProblem(area.square, 2);

areaProblem(area.rectangle, 2, 3);

areaProblem(area.parallelogram, 2, 3);

areaProblem(area.triangle, 2, 3);

areaProblem(area.trapezoid, 2, 3, 4);

areaProblem(area.circle, 2);

areaProblem(area.ellipse, 2, 3);

areaProblem(area.cube, 2);

areaProblem(area.sphere, 2);

areaProblem(area.cylinder, 2, 3);

areaProblem(area.cone, 2, 3);

const volumeProblem = (formula, side1, side2, side3) => {
  console.log(`The volume of this ${formula.name} is ${formula(side1, side2, side3).toFixed(2)}`);
}

volumeProblem(volume.cube, 2);

volumeProblem(volume.rectangularPrism, 2, 3, 4);

volumeProblem(volume.sphere, 2);

volumeProblem(volume.cylinder, 2, 3);

volumeProblem(volume.cone, 2, 3);

volumeProblem(volume.pyramid, 2, 3);
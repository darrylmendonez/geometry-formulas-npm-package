A collection of basic and common geometry formulas.

## Browser support
Chrome, Safari, Firefox, Opera, IE9+

## Installation
```
npm install geometry-formulas
```

## Usage
```
const { perimeter } = require('geometry-formulas')

const perimeterProblem = (formula, side1, side2, side3) => {
  console.log(`The perimeter of this ${formula.name} is ${formula(side1, side2, side3).toFixed(2)}`);
  return formula(side1, side2, side3).toFixed(2);
}

perimeterProblem(perimeter.triangle, 2, 3, 4);
```

## License
geometry-formulas is freely distributable under the terms of the [ISC license](https://opensource.org/licenses/ISC)

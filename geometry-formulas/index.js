module.exports.perimeter = {
  square: side => 4 * side,
  rectangle: (length, width) => 2 * (length + width),
  parallelogram: (side1, side2) => 2 * (side1 + side2),
  triangle: (side1, side2, side3) => side1 + side2 + side3,
  regularNPolygon: (length, numberOfSides) => length * numberOfSides,
  trapezoid: (height, base1, base2) => height * ( (base1 + base2) / 2 ),
  circle: radius => 2 * Math.PI * radius
}

module.exports.area = {
  square: side => Math.pow(side, 2),
  rectangle: (length, width) => length * width,
  parallelogram: (base, height) => base * height,
  triangle: (base, height) => (base * height) / 2,
  trapezoid: (height, base1, base2) => height * ( (base1 + base2) / 2 ),
  circle: radius => Math.PI * Math.pow(radius, 2),
  ellipse: (radius1, radius2) => Math.PI * radius1 * radius2,
  cube: side => 6 * Math.pow(side, 2),
  sphere: radius => 4 * Math.PI * Math.pow(radius, 2),
  cylinder: (radius, height) => ( 2 * (Math.PI * Math.pow(radius, 2) ) + ( 2 * Math.PI * radius * height)),
  cone: (radius, side) => Math.PI * radius * side
}

module.exports.volume = {
  cube: side => Math.pow(side, 3),
  rectangularPrism: (side1, side2, side3) => side1 * side2 * side3,
  sphere: radius => (4 / 3) * Math.PI * Math.pow(radius, 3),
  cylinder: (radius, height) => Math.PI * Math.pow(radius, 2) * height,
  cone: (radius, height) => (1 / 3) * Math.PI * Math.pow(radius, 2)  * height,
  pyramid: (baseArea, height) => (1 / 3) * baseArea * height
}
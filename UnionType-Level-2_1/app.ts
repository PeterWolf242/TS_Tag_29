import { TRectangle, TCircle, TSquare, TTriangle } from "./shapes";

type AllShapes = TCircle | TSquare | TTriangle | TRectangle | undefined;

function calculateArea(Shape: AllShapes): number | undefined {
  let result;
  if (!Shape) {
    throw new Error("No suitable shape found.")
  }

  if (Shape.shape === "circle") {
    return result = Math.PI * Math.pow(Shape.radius, 2);
  }

  if (Shape.shape === "square") {
    return result = Shape.sideLength * Shape.sideLength;
  }

  if (Shape.shape === "triangle") {
    return result = 0.5 * Shape.base * Shape.height;
  }

  if (Shape.shape === "rectangle") {
    return result = Shape.width * Shape.height;
  }

  return result;
}

const myCircle: TCircle = {
  radius: 10,
  shape: "circle"
}

const mySquare: TSquare = {
  shape: "square",
  sideLength: 24
}

const myTriangle: TTriangle = {
  shape: "triangle",
  base: 8,
  height: 6
}

const myRectangle: TRectangle = {
  shape: "rectangle",
  width: 12,
  height: 10
}

const output = document.querySelector<HTMLDivElement>("#output");

if (output) {
  output.innerHTML = `<p><span>Fläche Kreis: </span> ${calculateArea(myCircle)?.toFixed(2)} m<sup>2</sup></p>`;

  output.innerHTML += `<p><span>Fläche Quadrat: </span> ${calculateArea(mySquare)?.toFixed(2)} m<sup>2</sup></p>`;

  output.innerHTML += `<p><span>Fläche Dreieck: </span> ${calculateArea(myTriangle)?.toFixed(2)} m<sup>2</sup></p>`;

  output.innerHTML += `<p><span>Fläche Rechteck: </span> ${calculateArea(myRectangle)?.toFixed(2)} m<sup>2</sup></p>`;

  output.innerHTML += `<p><span>Fläche Dreieck: </span> ${calculateArea(undefined)?.toFixed(2)} m<sup>2</sup></p>`;
}

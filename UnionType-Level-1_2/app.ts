type NumericString = string | number | null;

let newImplement: NumericString = 2;

function isNumber(newImplement: NumericString) {
  if (typeof newImplement === "number") {
    console.log("Input ist eine Zahl");
  } else {
    console.log("Input ist keine Zahl");
  }
  return newImplement;
}

isNumber("Zeichenkette");
isNumber(12);
isNumber(newImplement);

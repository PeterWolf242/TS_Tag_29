export type Alcohol = {
  name: string,
  percentage: number,
  type: string
}

export type Mixer = {
  name: string,
  type: string,
  // * Kohlensäure enthalten ?
  carbonated: boolean
}

export type Cocktail = Alcohol & Mixer;

let MyCocktail: Cocktail = {
  name: "Blue Banana",
  percentage: 25,
  type: "Cocktail",
  carbonated: false
}

// const output = document.querySelector<HTMLDivElement>("#output");

let bubbleCocktail: string = "";

if (MyCocktail.carbonated === true) {
  bubbleCocktail = "Ja"
} else {
  bubbleCocktail = "Nein"
}

// if (output) {
//   output.innerHTML =
//     `<p>
//     Mein Cocktail: <span>${MyCocktail.name}</span><br><br>
//     Alkoholgehalt: <span>${MyCocktail.percentage} %</span> <br><br>
//     Typ: <span>${MyCocktail.type}</span> <br><br>
//     Kohlensäure enthalten: <span>${bubbleCocktail}</span>
//     </p>`
// }

// console.log(MyCocktail);

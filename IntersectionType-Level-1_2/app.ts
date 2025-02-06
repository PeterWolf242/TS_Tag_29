import { Alcohol, Mixer, Cocktail } from "./alcohol.ts";

function mixCocktail(alcohol: Alcohol, mixer: Mixer): Cocktail {
  return {
    name: `${alcohol.name} ${mixer.name}`,
    percentage: alcohol.percentage,
    type: `${alcohol.type} ${mixer.type}`,
    carbonated: mixer.carbonated
  }
}

const Schnaps1: Alcohol = {
  name: "Wodka",
  percentage: 80,
  type: "Rum"
}

const Cocktail1: Mixer = {
  name: "Lemon",
  type: "Juice",
  carbonated: false
}

console.log("Cocktail 1: ", mixCocktail(Schnaps1, Cocktail1));

const Schnaps2: Alcohol = {
  name: "Gartenkräuter",
  percentage: 32,
  type: "Kräuter"
}

const Cocktail2: Mixer = {
  name: "Gurkensaft",
  type: "Juice",
  carbonated: false
}

console.log("Cocktail 2: ", mixCocktail(Schnaps2, Cocktail2));

const output = document.querySelector<HTMLDivElement>("#output")!;

const meinCocktail = mixCocktail(Schnaps2, Cocktail2);

// const meinCocktail: string = JSON.stringify(Cocktail1);

output.innerHTML = `<p>${JSON.stringify(meinCocktail.name)}</p>`;

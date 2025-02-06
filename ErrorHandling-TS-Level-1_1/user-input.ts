// * Elemente aus dem HTML holen
const container = document.querySelector<HTMLElement>("#container");
const userInput = document.querySelector<HTMLInputElement>("#userInput");

function greetUser() {
  const userName = userInput?.value;

}

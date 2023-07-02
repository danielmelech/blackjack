import { values } from "./card";
import { suites } from "./suites";

function generateDeck() {
  const cards = [];
  suites.forEach((suite) => {
    values.forEach((value) => {
      cards.push({ value, suite });
    });
  });
  return cards;
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(deck) {
  const newDeck = [...deck];
  deck.forEach((card, index) => {
    const randomIndex = getRandom(deck.length);
    const temp = newDeck[index];
    newDeck[index] = newDeck[randomIndex];
    newDeck[randomIndex] = temp;
  });
  return newDeck;
}

function generateDeckAndShufle() {
  const deck = generateDeck();
  return shuffle(deck);
}

export { generateDeck, generateDeckAndShufle };

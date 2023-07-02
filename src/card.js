import { getCharacterMapBySuite } from "./suites";

const values = [
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Jack",
  "Queen",
  "King",
  "Ace"
];

function getCardCharacter(card) {
  const map = getCharacterMapBySuite(card.suite);
  return map.get(card.value);
}

export { values, getCardCharacter };


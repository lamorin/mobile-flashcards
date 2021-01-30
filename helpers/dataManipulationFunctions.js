import DATA from "./DATA";

export function createNewDeck(name) {
  return {
    id: `${DATA.length}`,
    title: name,
    cards: [],
  };
}

export function createNewCard(quesitonText, answerText) {
  return {
    timestamp: Date.now(),
    faceText: quesitonText,
    backText: answerText,
  };
}

export function saveDeck(deck) {
  DATA.push(deck);
}

export function saveCard(card, deck) {
  DATA[parseInt(deck.id)].cards.push(card);
}

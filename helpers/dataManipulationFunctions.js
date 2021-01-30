import DATA from "./DATA";

export function createNewDeck(name) {
  const newDeck = {
    id: `${DATA.length}`,
    title: name,
    cards: [],
  };

  return newDeck;
}

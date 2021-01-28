import { CurrentRenderContext } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, Pressable, View, StyleSheet, Text } from "react-native";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

import DATA from "../helpers/DATA";
import Decks from "./Decks";

export default function Deck({ data, navigation, route }) {
  const DECK_STARTED = "DECK_STARTED";
  const DECK_FINISHED = "DECK_FINISHED";

  const { index } = route.params;

  let [isFront, setIsFront] = useState(true);

  let [currentCardIndex, setCurrentCardIndex] = useState(0);
  let [deckState, setDeckState] = useState(DECK_STARTED);

  const deck = DATA[index];

  let card = deck.cards[currentCardIndex || 0];

  const lastIndex = deck.cards.length - 1;

  const pressHandler = () => {
    if (isFront) {
      setIsFront(!isFront);
    }
  };

  const correctAnswerHandler = () => {
    currentCardIndex === deck.cards.length - 1 && setDeckState(DECK_FINISHED);
    deckState !== DECK_FINISHED &&
      setIsFront(true) &&
      setCurrentCardIndex(currentCardIndex + 1);
    setIsFront(true);
  };

  const wrongAnswerHandler = () => {
    currentCardIndex === deck.cards.length - 1 && setDeckState(DECK_FINISHED);
    deckState !== DECK_FINISHED &&
      setIsFront(true) &&
      setCurrentCardIndex(currentCardIndex + 1);
  };

  const restartHandler = () => {
    setCurrentCardIndex(0);
    setDeckState(DECK_STARTED);
    setIsFront(true);
  };

  if (deck.cards.length === 0) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>No cards</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionsNumber}>
        Question: {currentCardIndex + 1}
      </Text>
      <View style={styles.cardContainer}>
        <Pressable style={styles.card} onPress={pressHandler}>
          {deckState === DECK_STARTED && (
            <Text style={styles.title}>
              {isFront ? card.faceText : card.backText}
            </Text>
          )}

          {deckState === DECK_FINISHED && (
            <Button
              style={styles.button}
              title={"Restart"}
              onPress={restartHandler}
            >
              Restart
            </Button>
          )}
        </Pressable>
      </View>
      <View style={styles.buttonsContainerRow}>
        <Button
          style={styles.button}
          title={"Correct"}
          disabled={isFront || deckState === DECK_FINISHED}
          onPress={correctAnswerHandler}
        >
          Correct
        </Button>
        <Button
          style={styles.button}
          title={"Wrong"}
          disabled={isFront || deckState === DECK_FINISHED}
          onPress={wrongAnswerHandler}
        >
          Wrong
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
  },
  questionsNumber: {
    textAlign: "right",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dddddd",
    borderRadius: 10,
    height: 500,
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 18,
    borderWidth: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
  },
  buttonsContainerRow: {
    borderWidth: 5,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderWidth: 5,
    borderColor: "black",
  },
});

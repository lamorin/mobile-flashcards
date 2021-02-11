import { CurrentRenderContext } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Button,
  Pressable,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
import buttonsStyleObject from "../componentStyles/Buttons";

import theme from "../componentStyles/colors";

import DATA from "../helpers/DATA";
import Decks from "./Decks";

export default function Deck({ data, navigation, route }) {
  const DECK_STARTED = "DECK_STARTED";
  const DECK_FINISHED = "DECK_FINISHED";

  const { deck } = route.params;

  let [isFront, setIsFront] = useState(true);

  let [currentCardIndex, setCurrentCardIndex] = useState(0);
  let [deckState, setDeckState] = useState(DECK_STARTED);
  let [correct, setCorrect] = useState(0);
  let [wrong, setWrong] = useState(0);

  let card = deck.cards[currentCardIndex];

  const lastIndex = deck.cards.length - 1;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      restartHandler();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  const correctAnswerHandler = () => {
    setCorrect(correct + 1);
    currentCardIndex === deck.cards.length - 1 && setDeckState(DECK_FINISHED);
    deckState !== DECK_FINISHED && setIsFront(true);
    deckState !== DECK_FINISHED && setCurrentCardIndex(currentCardIndex + 1);
  };

  const wrongAnswerHandler = () => {
    setWrong(wrong + 1);
    currentCardIndex === deck.cards.length - 1 && setDeckState(DECK_FINISHED);
    deckState !== DECK_FINISHED && setIsFront(true);
    deckState !== DECK_FINISHED && setCurrentCardIndex(currentCardIndex + 1);
  };

  const restartHandler = () => {
    setCurrentCardIndex(0);
    setDeckState(DECK_STARTED);
    setIsFront(true);
    setCorrect(0);
    setWrong(0);
  };

  const showAnswerHandler = () => {
    setIsFront(!isFront);
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
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 50,
        }}
      >
        <Text style={[styles.questionsNumber]}>
          Questions remaining:{" "}
          {deckState === DECK_FINISHED
            ? 0
            : deck.cards.length - currentCardIndex}
        </Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          {deckState === DECK_STARTED && (
            <Text style={styles.title}>
              {isFront ? card.faceText : card.backText}
            </Text>
          )}

          {deckState === DECK_FINISHED && (
            <View>
              <Text>Correct answers: {correct}</Text>
              <Text>Wrong answers: {wrong}</Text>

              <Button
                style={styles.button}
                title={"Restart"}
                onPress={restartHandler}
              />
            </View>
          )}
        </View>
      </View>
      {isFront && (
        <TouchableOpacity
          style={[buttonStyle.touchable, { width: 200 }]}
          title={"Show Answer"}
          disabled={deckState === DECK_FINISHED}
          onPress={showAnswerHandler}
        >
          <Text style={buttonStyle.touchableText}>SHOW ANSWER</Text>
        </TouchableOpacity>
      )}
      {!isFront && (
        <View style={buttonStyle.buttonsContainerRow}>
          <TouchableOpacity
            style={[buttonStyle.touchable, { width: 120 }]}
            title={"Correct"}
            disabled={isFront || deckState === DECK_FINISHED}
            onPress={correctAnswerHandler}
          >
            <Text style={buttonStyle.touchableText}>Correct</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[buttonStyle.touchable, { width: 120 }]}
            onPress={wrongAnswerHandler}
          >
            <Text style={buttonStyle.touchableText}>Wrong</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    paddingBottom: 50,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
  },
  questionsNumber: {
    textAlign: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.secondary,
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
    color: theme.whiteDark,
  },
  subtitle: {
    fontSize: 16,
    color: theme.whiteDark,
  },
});

const buttonStyle = StyleSheet.create(buttonsStyleObject);

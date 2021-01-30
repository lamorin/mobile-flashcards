import React, { useState } from "react";
import { Button, Pressable, View, StyleSheet, Text } from "react-native";

import Decks from "./Decks";

export default function StartQuiz({ navigation, route }) {
  const { title, deck } = route.params;

  let [isFront, setIsFront] = useState(true);
  let card = deck.cards[0];

  const pressHandler = () => {
    //setIsFront(!isFront);
    navigation.navigate("Quiz", { index, title });
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
        Number of questions: {deck.cards.length}
      </Text>
      <View style={styles.cardContainer}>
        <Pressable style={styles.card} onPress={pressHandler}>
          <Text style={styles.title}>Start a Quiz</Text>
        </Pressable>
      </View>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} title={"Add Card"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    paddingBottom: 30,
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
  buttonsContainer: {
    borderWidth: 5,
    padding: 20,
  },
  button: {
    alignSelf: "flex-end",
  },
});

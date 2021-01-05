import React, { useState } from "react";
import { Button, Pressable, View, StyleSheet, Text } from "react-native";

import DATA from "../helpers/DATA";
import Decks from "./Decks";

export default function Deck({ data, navigation, route }) {
  const { index } = route.params;

  let [isFront, setIsFront] = useState(true);

  const deck = DATA[index];

  let card = deck.cards[0];

  const pressHandler = () => {
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
      <View style={styles.cardContainer}>
        <Pressable style={styles.card} onPress={pressHandler}>
          <Text style={styles.title}>
            {isFront ? card.faceText : card.backText}
          </Text>
        </Pressable>
      </View>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} title={"Add"}>
          Bouton
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

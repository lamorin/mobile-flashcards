import React, { useState } from "react";
import {
  Button,
  Pressable,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { saveCard } from "../helpers/dataManipulationFunctions";

import buttonsStyleObject from "../componentStyles/Buttons";

import theme from "../componentStyles/colors";

export default function StartQuiz({ navigation, route }) {
  const { title, deck } = route.params;

  let [isFront, setIsFront] = useState(true);
  const [deckState, setDeckState] = useState(deck);

  let card = deckState.cards[0];

  React.useEffect(() => {
    if (route.params?.newCard) {
      saveCard(route.params.newCard, deck);
      setDeckState({ ...deck });
    }
  }, [route.params?.newCard]);

  const pressHandler = () => {
    //setIsFront(!isFront);
    navigation.navigate("Quiz", { deck, title });
  };

  const newCardHandler = () => {
    //const newDeck = createNewDeck(deckName);
    navigation.navigate("NewCard", { deck });
  };

  const buttonStyle = StyleSheet.create(buttonsStyleObject);

  if (deckState.cards.length === 0) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>No cards</Text>
        <TouchableOpacity
          style={[buttonStyle.touchable, { width: 150 }]}
          onPress={newCardHandler}
        >
          <Text style={buttonStyle.touchableText}>Create New Card</Text>
        </TouchableOpacity>
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
          Number of questions: {deckState.cards.length}
        </Text>
      </View>
      <View style={styles.cardContainer}>
        <Pressable style={styles.card} onPress={pressHandler}>
          <Text style={styles.title}>Start a Quiz</Text>
        </Pressable>
      </View>
      <TouchableOpacity
        style={[buttonStyle.touchable, { width: 200 }]}
        onPress={newCardHandler}
      >
        <Text style={buttonStyle.touchableText}>Create New Card</Text>
      </TouchableOpacity>
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
    textAlign: "right",
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

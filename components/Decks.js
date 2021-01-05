import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StatusBar,
  StyleSheet,
  Pressable,
} from "react-native";

import DATA from "../helpers/DATA";

export default function Decks({ navigation }) {
  const deck = ({ item, index }) => (
    <DeckItem
      title={item.title}
      navigation={navigation}
      deckId={item.id}
      index={index}
    ></DeckItem>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={deck}
        keyExtractor={(deck) => deck.id}
      />
    </SafeAreaView>
  );
}

function DeckItem(props) {
  const { index } = props;
  const deck = DATA[index];
  const title = deck.title;

  const onDeckPress = () => {
    props.navigation.navigate("Deck", { index, title });
  };

  return (
    <Pressable style={styles.deck} onPress={onDeckPress}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.subtitle}>Questions: {deck.cards.length || 0}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  deck: {
    borderWidth: 5,
    borderColor: "#dddddd",
    borderRadius: 5,
    padding: 10,
    marginTop: StatusBar.currentHeight || 0,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "right",
  },
});

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
*/

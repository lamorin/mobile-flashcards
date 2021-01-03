import React from "react";
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from "react-native";

import Deck from "./Deck";

export default function ScreenDecks({ data, navigation }) {
  const deck = ({ item }) => (
    <Deck
      deckId={item.id}
      navigation={navigation}
      title={item.title}
      numberOfQuestions={item.numberOfQuestions || 0}
    ></Deck>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={deck}
        keyExtractor={(deck) => deck.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

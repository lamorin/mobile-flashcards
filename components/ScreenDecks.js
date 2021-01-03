import React from "react";
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from "react-native";

export default function ScreenDecks({ data, deck }) {
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

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Deck({ title, numberOfQuestions }) {
  numberOfQuestions = 0;
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Questions: {numberOfQuestions}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#0371fc",
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 18,
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
});

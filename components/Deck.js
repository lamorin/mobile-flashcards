import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

export default function Deck({ title, numberOfQuestions, navigation }) {
  const onPresHandler = () => {
    alert("ALERT");
    navigation.navigate("Deck");
  };

  return (
    <TouchableWithoutFeedback onPress={onPresHandler}>
      <View
        style={styles.item}
        onPress={() => {
          navigation;
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Questions: {numberOfQuestions}</Text>
      </View>
    </TouchableWithoutFeedback>
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

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";

export default function Card(props) {
  const { faceText, backText } = props;

  const pressHandler = () => {
    alert("TEST");
  };

  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.item}>
        <Text style={styles.title}>{faceText}</Text>
        <Text style={styles.subtitle}>Questions: Number</Text>
      </View>
    </Pressable>
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

import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";

export default function NewDeck(props) {
  const { faceText, backText } = props;

  const [questionText, setQuestionText] = useState("");

  const [answerText, setAnswerText] = useState("");

  const onChangeQuestionText = (text) => {
    setQuestionText(text);
  };

  const onChangeAnswerText = (text) => {
    setAnswerText(text);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text>Question: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangeQuestionText(text)}
          value={questionText}
        />
        <Text style={styles.label}>Answer: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangeAnswerText(text)}
          value={answerText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginTop: 50,
  },
});

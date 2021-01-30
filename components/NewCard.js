import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";

import buttonsStyleObject from "../componentStyles/Buttons";

import { createNewCard } from "../helpers/dataManipulationFunctions";

const buttonStyle = StyleSheet.create(buttonsStyleObject);

export default function NewCard({ navigation }) {
  const [questionText, setQuestionText] = useState("");

  const [answerText, setAnswerText] = useState("");

  const onChangeQuestionText = (text) => {
    setQuestionText(text);
  };

  const onChangeAnswerText = (text) => {
    setAnswerText(text);
  };

  const saveHandler = () => {
    const newCard = createNewCard(questionText, answerText);
    navigation.navigate("StartQuiz", { newCard });
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
      <TouchableOpacity
        style={buttonStyle.touchable}
        title="Save"
        onPress={saveHandler}
      >
        <Text style={buttonStyle.touchableText}>Save</Text>
      </TouchableOpacity>
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

import { ThemeProvider } from "@react-navigation/native";
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
import theme from "../componentStyles/colors";

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
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>QUESTION: </Text>
        <TextInput
          style={{
            height: 50,
            fontSize: 16,
            backgroundColor: theme.whiteLight,
            borderColor: theme.whiteDark,
            borderRadius: 5,
            borderWidth: 1,
            paddingLeft: 5,
            borderColor: theme.primary,
            borderWidth: 3,
          }}
          onChangeText={(text) => onChangeQuestionText(text)}
          value={questionText}
        />
        <Text style={styles.label}>ANSWER: </Text>
        <TextInput
          style={{
            height: 50,
            fontSize: 16,
            backgroundColor: theme.whiteLight,
            borderColor: theme.whiteDark,
            borderRadius: 5,
            borderWidth: 1,
            paddingLeft: 5,
            borderColor: theme.primary,
            borderWidth: 3,
          }}
          onChangeText={(text) => onChangeAnswerText(text)}
          value={answerText}
        />
      </View>
      <TouchableOpacity
        style={[
          buttonStyle.touchable,
          { width: 150, marginBotton: 50, borderWidth: 1 },
        ]}
        title="save"
        onPress={saveHandler}
      >
        <Text style={buttonStyle.touchableText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 50,

    flex: 1,
  },
  label: {
    marginTop: 50,
  },
});

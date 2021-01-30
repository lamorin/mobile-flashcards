import React from "react";
import { useState } from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Pressable,
  setParams,
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import buttonsStyleObject from "../componentStyles/Buttons";
import DATA from "../helpers/DATA";

import { createNewDeck } from "../helpers/dataManipulationFunctions";

export default function NewDeck({ navigation }) {
  const [deckName, setDeckName] = useState("");

  const onChangeDeckName = (text) => {
    setDeckName(text);
  };

  const saveHandler = () => {
    const newDeck = createNewDeck(deckName);
    navigation.navigate("Decks", { newDeck });
  };

  return (
    <View style={styles.container}>
      <Text>Deck Name: </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          paddingLeft: 5,
          marginBottom: 20,
        }}
        onChangeText={(text) => onChangeDeckName(text)}
        value={deckName}
      />

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
    alignItems: "stretch",
  },
  label: {
    marginTop: 50,
  },
});

const buttonStyle = StyleSheet.create(buttonsStyleObject);

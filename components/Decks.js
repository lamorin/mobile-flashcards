import React, { useState } from "react";
import buttonsStyleObject from "../componentStyles/Buttons";
import {
  Button,
  SafeAreaView,
  View,
  Text,
  FlatList,
  StatusBar,
  StyleSheet,
  Pressable,
} from "react-native";

import DATA from "../helpers/DATA";

import { saveDeck } from "../helpers/dataManipulationFunctions";

export default function Decks({ navigation, route }) {
  const { newDeckName } = route.params;
  const [decks, setDecks] = useState(DATA);

  React.useEffect(() => {
    if (route.params?.newDeck) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      saveDeck(route.params.newDeck);
      setDecks([...decks]);
    }
  }, [route.params?.newDeck]);

  const deck = ({ item, index }) => (
    <DeckItem
      title={item.title}
      navigation={navigation}
      deckId={item.id}
      index={index}
      decks={decks}
    ></DeckItem>
  );

  const addDeckHandler = () => {
    navigation.navigate("NewDeck");
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={decks}
        renderItem={deck}
        keyExtractor={(deck) => deck.id}
      />
      <View style={buttonStyle.buttonsContainerColumn}>
        <Button
          title="Add deck"
          onPress={addDeckHandler}
          style={buttonStyle.button}
        />
      </View>
    </SafeAreaView>
  );
}

function DeckItem(props) {
  const { index, decks } = props;
  const deck = decks[index];
  const title = deck.title;

  const onDeckPress = () => {
    props.navigation.navigate("StartQuiz", { deck: decks[index], title });
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

const buttonStyle = StyleSheet.create(buttonsStyleObject);

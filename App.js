import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Decks from "./components/Decks";
import Deck from "./components/Deck";
import StartQuiz from "./components/StartQuiz";
import NewDeck from "./components/NewDeck";
import NewCard from "./components/NewCard";

import DATA from "./helpers/DATA";
import { setLocalNotification } from "./helpers/helpers";

const Stack = createStackNavigator();

const App = () => {
  setLocalNotification();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Decks"
          component={Decks}
          initialParams={{ newDeckName: "" }}
        />
        <Stack.Screen name="NewDeck" component={NewDeck} />
        <Stack.Screen
          name="StartQuiz"
          component={StartQuiz}
          options={({ route }) => ({
            title: route.params.title,
            deckId: route.params.index,
          })}
        />
        <Stack.Screen name="NewCard" component={NewCard} />
        <Stack.Screen
          name="Quiz"
          component={Deck}
          options={({ route }) => ({
            title: route.params.title,
            deckId: route.params.index,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

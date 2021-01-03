import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ScreenDecks from "./components/ScreenDecks";
import ScreenDeck from "./components/ScreenDeck";
import Deck from "./components/Deck";

import DATA from "./helpers/DATA";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Decks" options={{ title: "Decks" }}>
          {(props) => <ScreenDecks {...props} data={DATA} />}
        </Stack.Screen>
        <Stack.Screen name="Deck" options={{ title: "Deck" }}>
          {(props) => <ScreenDeck {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

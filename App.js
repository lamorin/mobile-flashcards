import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ScreenDecks from "./components/ScreenDecks";
import Deck from "./components/Deck";

import DATA from "./helpers/DATA";

const Stack = createStackNavigator();

const App = () => {
  const deck = ({ item }) => <Deck title={item.title}></Deck>;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Decks" options={{ title: "Decks" }}>
          {(props) => <ScreenDecks {...props} data={DATA} deck={deck} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

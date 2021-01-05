import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Decks from "./components/Decks";
import Deck from "./components/Deck";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Decks" component={Decks} />
        <Stack.Screen
          name="Deck"
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

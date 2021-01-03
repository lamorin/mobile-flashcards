import React from "react";
import { SafeAreaView, Text } from "react-native";

import Deck from "./Deck";

export default function ScreenDeck({ data, navigation, route }) {
  const { deckId, otherParam } = route.params;

  return (
    <SafeAreaView>
      <Text>
        Deck: {deckId} | {otherParam}
      </Text>
    </SafeAreaView>
  );
}

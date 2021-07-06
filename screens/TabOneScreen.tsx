import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Pressable,
  Text,
  Platform,
} from "react-native";
import Field from "../components/Field";
import TeamStats from "../components/TeamStats";

export default function TabOneScreen() {
  const viewPlayers = () => {
    console.warn("View Players");
  };
  return (
    <SafeAreaView style={styles.container}>
      <TeamStats />
      <Field />
      <Pressable onPress={viewPlayers} style={styles.bottomContainer}>
        <Text>View Players</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 70 : 0,
    backgroundColor: "#72cc52",
  },
  bottomContainer: {
    backgroundColor: "orange",
    width: "90%",
    margin: 20,
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    marginTop: "auto",
  },
});

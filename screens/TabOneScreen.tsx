import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import * as React from "react";
import { useRef } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Pressable,
  Text,
  Platform,
  View,
} from "react-native";
import Field from "../components/Field";
import Filters from "../components/Filters";
import PlayersList from "../components/PlayersList";
import TeamStats from "../components/TeamStats";

export default function TabOneScreen() {
  const playersBottomSheet = useRef<BottomSheet>(null);
  const filterBottomSheet = useRef<BottomSheet>(null);

  const viewPlayers = () => {
    playersBottomSheet.current?.expand();
  };

  const snapPoints = [0, "50%"];
  return (
    <SafeAreaView style={styles.container}>
      <TeamStats />
      <Field />
      <Pressable onPress={viewPlayers} style={styles.bottomContainer}>
        <Text>View Players</Text>
      </Pressable>
      <BottomSheet ref={playersBottomSheet} index={0} snapPoints={snapPoints}>
        <Pressable
          onPress={() => filterBottomSheet.current?.expand()}
          style={[styles.bottomContainer, { marginTop: 10 }]}
        >
          <Text>Filters</Text>
        </Pressable>
        <React.Suspense fallback={<Text>Loading</Text>}>
          <PlayersList />
        </React.Suspense>
      </BottomSheet>
      <BottomSheet ref={filterBottomSheet} index={0} snapPoints={snapPoints}>
        <Filters />
      </BottomSheet>
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
  contentContainer: {},
});

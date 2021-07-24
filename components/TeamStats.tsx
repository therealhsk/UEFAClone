import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { numberOfPlayers, valueOfPlayers } from "../atoms/MyTeam";

const TeamStats = () => {
  const noOfPlayers = useRecoilValue(numberOfPlayers);
  const value = useRecoilValue(valueOfPlayers);
  return (
    <View style={styles.contianer}>
      <View style={styles.valueContainer}>
        <Text style={styles.label}>Players</Text>
        <Text style={styles.value}>{noOfPlayers} / 15</Text>
      </View>

      <View style={styles.valueContainer}>
        <Text style={styles.label}>Remaining</Text>
        <Text style={styles.value}>
          ${((100000000 - value) / 1000000).toFixed(1)}m
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: "white",
    width: "90%",
    borderWidth: 4,
    borderColor: "#38abd1",
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
  },
  valueContainer: {
    marginRight: 10,
  },
  label: {
    color: "#333",
  },
  value: { fontSize: 18, fontWeight: "bold" },
});

export default TeamStats;

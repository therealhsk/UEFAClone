import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React from "react";
import PlayerListItem from "./PlayerListItem";

import { useRecoilState, useRecoilValue } from "recoil";
import { allPlayersState, filteredPlayers } from "../atoms/Players";

const PlayersList = () => {
  const players = useRecoilValue(filteredPlayers);

  return (
    <BottomSheetFlatList
      data={players}
      renderItem={({ item }) => <PlayerListItem player={item} />}
    />
  );
};

export default PlayersList;

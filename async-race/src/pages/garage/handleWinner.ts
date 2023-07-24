import { createWinner } from "../../api/createWinner";
import { getWinners } from "../../api/getWinners";
import { IWinner } from "../../interfaces/IWinner";
import { createWinnersStorage } from "../../utils/createWinnersStorage";
import { updateWinnersStorage } from "../../utils/createWinnersStorage";
import { updateWinner } from "../../api/updateWinner";
import { addWinMessage } from "./addWinMessage";

export const handleWinner = async (
  id: number,
  duration: number,
  wins: number
) => {
  const time = duration / 1000;
  const newWinnerData = {
    id: id,
    wins: wins,
    time: time,
  };

  const winnersObj = await getWinners();

  const isIdExist = winnersObj.winners.every(
    (winner: IWinner) => winner.id !== id
  );

  if (isIdExist) {
    await createWinner(newWinnerData);

    createWinnersStorage();
  } else {
    updateWinner(newWinnerData);
    updateWinnersStorage(newWinnerData);
  }

  addWinMessage(id, time);
};

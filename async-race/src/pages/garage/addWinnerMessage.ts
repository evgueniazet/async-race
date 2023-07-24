import { createWinner } from "../../api/createWinner";
import { getWinners } from "../../api/getWinners";
import { IWinner } from "../../interfaces/IWinner";
import { createWinnersStorage } from "../../utils/createWinnersStorage";
import { updateWinnersStorage } from "../../utils/createWinnersStorage";
import { updateWinner } from "../../api/updateWinner";

export const addWinnerMessage = async (
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

  console.log("winnersObj , id", winnersObj, id);

  const isIdExist = winnersObj.winners.every(
    (winner: IWinner) => winner.id !== id
  );

  console.log("isIdExist", isIdExist);

  if (isIdExist) {
    const createdWinner = await createWinner(newWinnerData);
    // console.log("createdWinner", createdWinner);
    createWinnersStorage();
  } else {
    updateWinner(newWinnerData);
    updateWinnersStorage(newWinnerData);
  }
};

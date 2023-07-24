import { getWinners } from "../api/getWinners";
import { IWinner } from "../interfaces/IWinner";

export const createWinnersStorage = async () => {
  const winnersStorage = (await getWinners()).winners;
  return winnersStorage;
};

export const updateWinnersStorage = async (newWinnerData: {
  id: number;
  wins: number;
  time: number;
}) => {
  console.log("1");

  const winnersStorage = await createWinnersStorage();

  winnersStorage.forEach((winner: IWinner) => {
    if (winner.id === newWinnerData.id) {
      winner.time = newWinnerData.time;
      winner.wins = winner.wins + 1;
    }
  });

  console.log("winnersStorage после обновления", winnersStorage);
};

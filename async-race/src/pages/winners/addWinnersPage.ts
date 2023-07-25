import { createElement } from "../../utils/createElement";
import { getWinners } from "../../api/getWinners";
import { IWinner } from "../../interfaces/IWinner";
import { getWinner } from "../../api/getWinner";
import { getCar } from "../../api/getCar";
import { carIcon } from "../../icons/carIcon";

export const addWinnersPage = async () => {
  const main: HTMLElement | null = document.querySelector("main");

  const winners = await getWinners();

  const title: HTMLElement = createElement("h2", "winners-title");
  main?.appendChild(title);
  title.innerText = `Winners(${winners.winners.length})`;

  const subtitle: HTMLElement = createElement("h2", "winners-subtitle");
  main?.appendChild(subtitle);
  subtitle.innerText = "Page #1";

  const table = createElement("table", "table");
  main?.appendChild(table);

  const headerTable = createElement("thead", "table-header");
  table.appendChild(headerTable);

  const headerTableRow = createElement("tr", "table-header-row");
  headerTable.appendChild(headerTableRow);

  const headerNumber = createElement("th", "table-header-number");
  headerTableRow.appendChild(headerNumber);
  headerNumber.innerHTML = "Number";

  const headerCar = createElement("th", "table-header-car");
  headerTableRow.appendChild(headerCar);
  headerCar.innerHTML = "Car";

  const headerName = createElement("th", "table-header-name");
  headerTableRow.appendChild(headerName);
  headerName.innerHTML = "Name";

  const headerWins = createElement("th", "table-header-wins");
  headerTableRow.appendChild(headerWins);
  headerWins.innerHTML = "Wins";

  const headerTime = createElement("th", "table-header-time");
  headerTableRow.appendChild(headerTime);
  headerWins.innerHTML = "Best time(sec)";

  const tableBody = createElement("tbody", "table-body");
  table.appendChild(tableBody);

  let number = 1;

  await Promise.all(
    winners.winners.map(async (winner: IWinner) => {
      const winnerData = await getWinner(winner.id);

      const carData = await getCar(winnerData.id);

      const tableRow = createElement("tr", "table-row");
      tableBody.appendChild(tableRow);

      const carNumber = createElement("td", "table-item-number");
      tableRow.appendChild(carNumber);
      carNumber.innerHTML = String(number);
      number++;

      const carIconElement = createElement("td", "table-item-icon");
      tableRow.appendChild(carIconElement);
      carIconElement.innerHTML = carIcon;
      carIconElement.style.fill = carData.color;

      const carName = createElement("td", "table-item-name");
      tableRow.appendChild(carName);
      carName.innerHTML = carData.name;

      const carTime = createElement("td", "table-item-time");
      tableRow.appendChild(carTime);
      const roundedNumber = winner.time.toFixed(2);
      carTime.innerHTML = String(roundedNumber);
    })
  );
};

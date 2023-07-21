import { drawCarsOnPage } from "../utils/drawCarsOnPage";
import { ICar } from "../interfaces/ICar";

export const pagination = (cars: ICar[][], racesField: HTMLElement) => {
  const nextButton = document.querySelectorAll(".garage-button")[1];
  const prevButton = document.querySelectorAll(".garage-button")[0];
  const pageNumber = document.querySelector(".garage-subtitle");

  const handleNextPage = () => {
    const page = localStorage.getItem("page");

    if (Number(page) < cars.length) {
      const newPage = Number(page) + 1;
      localStorage.setItem("page", String(newPage));
      racesField.innerHTML = "";

      if (pageNumber) {
        const pageNumberString = pageNumber.innerHTML;
        const nextPageNumber = pageNumberString.replace(/\d+/, String(newPage));
        pageNumber.innerHTML = nextPageNumber;
      }

      drawCarsOnPage(cars, newPage, racesField);
    }
  };

  const handlePrevButton = () => {
    const page = localStorage.getItem("page");

    if (Number(page) > 1) {
      const newPage = Number(page) - 1;
      localStorage.setItem("page", String(newPage));
      racesField.innerHTML = "";

      if (pageNumber) {
        const pageNumberString = pageNumber.innerHTML;
        const nextPageNumber = pageNumberString.replace(/\d+/, String(newPage));
        pageNumber.innerHTML = nextPageNumber;
      }

      drawCarsOnPage(cars, newPage, racesField);
    }
  };

  prevButton.addEventListener("click", handlePrevButton);
  nextButton.addEventListener("click", handleNextPage);
};

import { deleteCar } from "../api/deleteCar";

export const removeCar = (removeButton: HTMLElement) => {
  const handleRemoveButtonClick = (event: Event) => {
    if (event.target instanceof Element) {
      const race = event.target.closest(".race");
      if (race) {
        const carId = race.querySelector(".car-wrapper")?.id;

        deleteCar(Number(carId));
        race.remove();
      }
    }
  };

  removeButton.addEventListener("click", handleRemoveButtonClick);
};

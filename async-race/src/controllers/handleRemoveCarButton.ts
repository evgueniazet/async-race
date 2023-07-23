import { deleteCar } from "../api/deleteCar";
import { createCarStorage } from "../utils/createCarStorage";
import { createRaceField } from "../pages/garage/createRaceField";

export const handleRemoveCarButton = (removeButton: HTMLElement) => {
  const handleRemoveButtonClick = async (event: Event) => {
    if (event.target instanceof Element) {
      const race = event.target.closest(".race");
      const garageTitle = document.querySelector(".garage-title");
      const racesField = document.querySelector(".races-field");

      if (race) {
        const carId = race.querySelector(".car-wrapper")?.id;

        await deleteCar(Number(carId));
        race.remove();
        if (garageTitle && racesField) {
          const cars = await createCarStorage();
          racesField.innerHTML = "";
          createRaceField(racesField as HTMLElement);
          const carsFlattenedArr = cars.flat();
          garageTitle.innerHTML = `Garage(${carsFlattenedArr.length})`;
        }
      }
    }
  };

  removeButton.addEventListener("click", handleRemoveButtonClick);
};

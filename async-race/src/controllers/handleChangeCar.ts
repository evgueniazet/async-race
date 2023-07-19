import { getInputsData } from "../utils/getInputsData";
import { updateCar } from "../api/updateCar";
import { ICarParams } from "../interfaces/ICar";

export const handleChangeCar = (selectButton: HTMLElement) => {
  const handleSelectButtonClick = (event: Event) => {
    selectButton.classList.add("race-header-button-active");
    const updateField = document.querySelector(".update-field") as HTMLElement;

    if (!updateField) {
      return;
    }

    if (event.target instanceof Element) {
      const race = event.target.closest(".race");
      if (race) {
        const carWrapper = race.querySelector<SVGElement>(".car-wrapper");
        const updateButton = document.querySelectorAll(".field-button")[1];
        const carName = race.querySelector(".race-header-title");

        const handleUpdateButtonClick = () => {
          const inputsData = getInputsData(updateField);

          updateCar(Number(carWrapper?.id), inputsData as ICarParams);

          selectButton.classList.remove("race-header-button-active");

          if (carWrapper) {
            const car = carWrapper.querySelector(".car");
            if (car instanceof SVGElement) {
              car.style.fill = inputsData?.color || "defaultColor";
              if (carName) {
                carName.innerHTML = inputsData?.name || "Default Name";
              }
            }
          }
        };

        updateButton.addEventListener("click", handleUpdateButtonClick);
      }
    }
  };

  selectButton.addEventListener("click", handleSelectButtonClick);
};

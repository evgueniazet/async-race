import { getInputsData } from "../utils/getInputsData";
import { updateCar } from "../api/updateCar";
import { ICarParams } from "../interfaces/ICar";
import { getCar } from "../api/getCar";

export const handleChangeCar = (selectButton: HTMLElement) => {
  const handleSelectButtonClick = async (event: Event) => {
    if (event.target instanceof Element) {
      const race = event.target.closest(".race");
      if (race) {
        const carName = race.querySelector(".race-header-title");
        const car = race.querySelector(".car");
        const carWrapper = race.querySelector<SVGElement>(".car-wrapper");
        const updateButton = document.querySelectorAll(".field-button")[1];
        const updateField = document.querySelector(
          ".update-field"
        ) as HTMLElement;
        const nameInput = updateField?.querySelector(".combobox-input");

        if (carWrapper) {
          try {
            const currentCar = await getCar(Number(carWrapper.id));
            const colorInput = updateField?.querySelector(".field-input");
            (colorInput as HTMLInputElement).value = currentCar.color;
            (nameInput as HTMLInputElement).value = currentCar.name || "";
          } catch (error) {
            console.error("Error fetching car:", error);
          }
        }

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

    selectButton.classList.add("race-header-button-active");
  };

  selectButton.addEventListener("click", handleSelectButtonClick);
};

import { createButton } from "../../pages/components/createButton";
import { handleGenerateCars } from "../../controllers/handleGenerateCars";

export const addButtonsSettings = (
  main: HTMLElement | null,
  buttonsWrapper: HTMLElement
) => {
  main?.appendChild(buttonsWrapper);

  const buttonRace = createButton("button-race", "Race");
  buttonsWrapper.appendChild(buttonRace);

  const buttonReset = createButton("button-reset", "Reset");
  buttonsWrapper.appendChild(buttonReset);

  const buttonGenerateCars = createButton("button-generate", "Generate Cars");
  buttonsWrapper.appendChild(buttonGenerateCars);

  handleGenerateCars();
};

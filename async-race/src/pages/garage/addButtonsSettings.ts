import { createButton } from "../../pages/components/createButton";

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

  console.log("buttonsWrapper", buttonsWrapper);
};

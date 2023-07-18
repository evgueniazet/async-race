import { addGaragePage } from "../pages/garage/addGaragePage";

export const renderMain = (content: string): HTMLElement => {
  const main: HTMLElement = document.createElement("main");
  addGaragePage();

  return main;
};

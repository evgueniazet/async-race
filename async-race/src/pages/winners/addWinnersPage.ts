import { createElement } from "../../utils/createElement";

export const addWinnersPage = () => {
  const main: HTMLElement | null = document.querySelector("main");

  const title: HTMLElement = createElement("h2", "winners-title");
  main?.appendChild(title);
  title.innerText = "Winners(5)";

  
  const subtitle: HTMLElement = createElement("h2", "winners-subtitle");
  main?.appendChild(subtitle);
  subtitle.innerText = "Page #1";
};

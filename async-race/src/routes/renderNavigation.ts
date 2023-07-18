import { createElement } from "../utils/createElement";

export const renderNavigation = (): HTMLElement => {
  const nav: HTMLElement = createElement("nav", "navigation");

  const garageLink: HTMLElement = createElement("a", "navigation-link");
  garageLink.setAttribute("href", "/");
  garageLink.textContent = "To Garage";
  nav.appendChild(garageLink);

  const winnersLink: HTMLElement = createElement("a", "navigation-link");
  winnersLink.setAttribute("href", "/winners");
  winnersLink.textContent = "To Winners";
  nav.appendChild(winnersLink);

  return nav;
};

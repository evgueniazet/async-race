export const renderNavigation = (): HTMLElement => {
  const nav: HTMLElement = document.createElement("nav");

  const garageLink: HTMLElement = document.createElement("a");
  garageLink.setAttribute("href", "/");
  garageLink.textContent = "To Garage";
  nav.appendChild(garageLink);

  const winnersLink: HTMLElement = document.createElement("a");
  winnersLink.setAttribute("href", "/winners");
  winnersLink.textContent = "To Winners";
  nav.appendChild(winnersLink);

  return nav;
};

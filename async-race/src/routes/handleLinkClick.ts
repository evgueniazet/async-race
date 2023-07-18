import { addGaragePage } from "../pages/garage/addGaragePage";
import { addWinnersPage } from "../pages/winners/addWinnersPage";

const routes: Record<string, Function> = {
  "/": addGaragePage,
  "/winners": addWinnersPage,
};

export const handleLinkClick = (event: Event) => {
  const main: HTMLElement | null = document.querySelector("main");

  event.preventDefault();
  const link = event.target as HTMLAnchorElement | null;
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href) return;

  if (main) {
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
  }

  const pageFunction = routes[href];

  if (pageFunction) {
    pageFunction();
  }
};

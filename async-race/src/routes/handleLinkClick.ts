import { renderMain } from "./renderMain";
import { addGaragePage } from "../pages/garage/addGaragePage";
import { addWinnersPage } from "../pages/winners/addWinnersPage";

const routes: Record<string, Function> = {
  "/": addGaragePage,
  "/winners": addWinnersPage,
};

export const handleLinkClick = (event: Event) => {
  event.preventDefault();
  const link = event.target as HTMLAnchorElement | null;
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href) return;

  const pageFunction = routes[href];

  if (pageFunction) {
    pageFunction();
  }
};
import { renderNavigation } from "./renderNavigation";
import { renderMain } from "./renderMain";
import { handleLinkClick } from "./handleLinkClick";

export const initRouting = () => {
  const body: HTMLElement | null = document.querySelector("body");
  if (!body) return;

  const navigation = renderNavigation();
  body.appendChild(navigation);

  const main = renderMain("This is the garage page");
  body.appendChild(main);

  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", handleLinkClick);
  });
};

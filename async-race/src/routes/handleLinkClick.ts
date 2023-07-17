import { renderMain } from "./renderMain";

const routes: Record<string, string> = {
  "/": "This is the garage page",
  "/winners": "This is the winners page",
};

export const handleLinkClick = (event: Event) => {
  event.preventDefault();
  const link = event.target as HTMLAnchorElement | null;
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href) return;

  const content = routes[href];

  if (content) {
    const main: HTMLElement | null = document.querySelector("main");
    if (!main) return;

    main.textContent = "";
    main.appendChild(renderMain(content));
  }
};

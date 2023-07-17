export const renderMain = (content: string): HTMLElement => {
  const main: HTMLElement = document.createElement("main");
  main.textContent = content;

  return main;
};

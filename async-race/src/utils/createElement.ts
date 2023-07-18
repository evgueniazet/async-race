export const createElement = <T extends HTMLElement>(
  tag: string,
  className: string
): T => {
  const element = document.createElement(tag) as T;
  element.className = className;

  return element;
};

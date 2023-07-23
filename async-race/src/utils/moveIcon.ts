export const moveIcon = (
  icon: HTMLElement,
  targetX: number,
  duration: number
) => {
  const startX = icon.getBoundingClientRect().left;
  const distance = targetX - startX;
  const startTime = performance.now();

  function animate(time: number) {
    const elapsedTime = time - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const newPosition = startX + distance * progress;
    icon.style.transform = `translateX(${newPosition}px)`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
};

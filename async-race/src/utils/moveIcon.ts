let animationId: number | null = null;
let isFirstCarReached = false;

export const moveIcon = (
  icon: HTMLElement,
  startX: number,
  finishX: number,
  duration: number
) => {
  const distance = finishX - startX;
  const startTime = performance.now();

  const animate = (time: number) => {
    const elapsedTime = time - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const newPosition = (distance - startX) * progress;
    const buttonStartRace = document.querySelector(".button-race");

    icon.style.transform = `translateX(${newPosition}px)`;

    if (progress < 1) {
      animationId = requestAnimationFrame(animate);
    } else {
      if (
        !isFirstCarReached &&
        buttonStartRace &&
        buttonStartRace.classList.contains("button-race-active")
      ) {
        isFirstCarReached = true;
      }
    }
  };

  animationId = requestAnimationFrame(animate);
};

export const stopIconAnimation = () => {
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
};

export const resetIconPosition = (icon: HTMLElement) => {
  stopIconAnimation();
  icon.style.transform = "translateX(0)";
};

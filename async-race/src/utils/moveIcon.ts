let animationId: number | null = null;

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

    icon.style.transform = `translateX(${newPosition}px)`;

    if (progress < 1) {
      animationId = requestAnimationFrame(animate);
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

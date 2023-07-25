export const addWinMessage = (id: number, time: number) => {
  const cars = document.querySelectorAll(".car-wrapper");

  const winMessage = document.querySelector(".win-message") as HTMLElement;

  const timeRound = time.toFixed(2);

  cars.forEach((car) => {
    if (Number(car.id) === id) {
      const race = car.closest(".race");
      const carName = race?.querySelector(".race-header-title");

      winMessage.innerHTML = `${carName?.innerHTML} went first (${timeRound}s)`;
    }
  });
};

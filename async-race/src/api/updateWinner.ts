export const updateWinner = async (newWinnerData: {
  id: number;
  wins: number;
  time: number;
}) => {
  const url = `http://127.0.0.1:3000/winners/${newWinnerData.id}`;
  const headers = {
    "Content-Type": "application/json",
  };

  const data = {
    wins: newWinnerData.wins,
    time: newWinnerData.time,
  };

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Winner not found");
      } else {
        throw new Error("Failed to update winner");
      }
    }

    const updatedWinner = await response.json();
    return updatedWinner;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
      return null;
    }
  }
};

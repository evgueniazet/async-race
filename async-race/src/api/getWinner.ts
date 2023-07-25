export const getWinner = async (id: number) => {
  const url = `http://127.0.0.1:3000/winners/${id}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("No winner with the specified id was found");
        }
        throw new Error("An error occurred while executing the request.");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
};

export const getCars = () => {
  return fetch("http://localhost:3000/garage")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

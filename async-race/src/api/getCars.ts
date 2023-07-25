export const getCars = () => {
  return fetch("http://127.0.0.1:3000/garage")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

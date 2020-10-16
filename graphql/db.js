export const people = [
  {
    id: "1",
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: "2",
    name: "jsiub",
    age: 18,
    gender: "female",
  },
  {
    id: "3",
    name: "yura",
    age: 18,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredMovies = movies.filter((person) => id === people.id);
  return filteredMovies[0];
};

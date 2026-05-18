export function getAllData(database) {
  return Promise.all([
    new Promise((resolve) => {
      setTimeout(() => resolve(database), 1000);
    }),
  ]).then((results) => results[0]);
}
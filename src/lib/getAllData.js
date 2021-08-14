export function getAllData() {
  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: "Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y",
  });

  return fetch("https://spe-academy.spesolution.net/api/recruitment", {
    method: "GET",
    headers: myHeaders,
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Something went wrong on api server!");
      }
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
}

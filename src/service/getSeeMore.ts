export function getSeeMore() {
  return fetch(`${process.env.BASE_URL}/home/seemore`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
}
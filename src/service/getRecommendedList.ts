export function getRecommendedList() {
  return fetch(`${process.env.BASE_URL}/Content/SearchRecommendedList`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
}
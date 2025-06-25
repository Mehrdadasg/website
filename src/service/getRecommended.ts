export function getRecommended(slug:string) {
  return fetch(`${process.env.BASE_URL}/Content/RecommendedList?Slug=${slug}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
}
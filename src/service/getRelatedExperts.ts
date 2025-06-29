export function getRelatedExperts(slug: string) {
  return fetch(`${process.env.BASE_URL}/expert/RelatedList?Slug=${slug}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );
}

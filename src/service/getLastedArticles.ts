export function getLastedArticles() {
  return fetch(`${process.env.BASE_URL}/home/newcontents`,{
    next:{revalidate:10}
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
}
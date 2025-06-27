export function getContact() {
  return fetch(`${process.env.BASE_URL}/page/contact`).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

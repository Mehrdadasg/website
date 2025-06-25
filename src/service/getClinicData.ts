export function getClinicData() {
  return fetch(`${process.env.BASE_URL}/home/clinic`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
}

type DataType={
    Slug:string;
    Rate:number;
}

export async function addRate(data:DataType) {
  const formData = new FormData();
  formData.append('Slug', data.Slug);
  formData.append('Rate', data.Rate.toString());

  const response = await fetch(`${process.env.BASE_URL}/content/RateAdd`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}
import { AddComment } from "@/shared/types/type";

export async function addComment(data: AddComment) {
  const formData = new FormData();
  formData.append('Slug', data.Slug);
  formData.append('Name', data.Name);
  formData.append('Text', data.Text);
  formData.append('Email', data.Email);

  const response = await fetch(`${process.env.BASE_URL}/Content/CommentAdd`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}
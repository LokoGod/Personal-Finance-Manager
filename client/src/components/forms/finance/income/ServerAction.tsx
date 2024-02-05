"use server";

export async function action() {
  const response = await fetch(
    "https://demo-api-4n3l.onrender.com/api/v1/income/",
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    throw new Error("failed to get data");
  }
  const data = await response.json();
  return data.income;
}

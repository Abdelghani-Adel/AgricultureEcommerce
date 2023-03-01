export async function fetchPagesTemplate() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/GetPagesTemplate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mainParentId: 85 }),
    }
  );

  const data = await res.json();
  return data;
}

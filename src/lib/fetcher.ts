export async function fetcher(url: string, options?: RequestInit) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Fetcher error: ${response.statusText}`);
  }

  return response.json();
}

export const getFromAPI = async <T>(slug: string): Promise<T> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/${slug}`);
  return response.json();
};

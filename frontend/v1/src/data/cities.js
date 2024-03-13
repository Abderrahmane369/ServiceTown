export const _cities = async () => {
  const response = await fetch('http://localhost:3000/api/v1/cities');
  const data = await response.json();
  return data;
}
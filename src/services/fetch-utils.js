import { client, checkError } from './client';

export async function getMovies() {
  const response = await client.from('movies').select('*');

  return checkError(response);
}
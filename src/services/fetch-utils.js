import { client } from './client';

export async function getMovies() {
  const response = await client.from('movies').select('*');

  return response.body;
}

export async function signUp(email, password) {
  const { user, error } = await client.auth.signUp({ email: email, password: password });
  if (error) {
    console.error(error);
    throw error;
  } else return user;
}

export async function signIn(email, password) {
  const { user, error } = await client.auth.signIn({ email: email, password: password });
  if (error) {
    console.error(error);
    throw error;
  } else return user;
}

export async function logOut() {
  const { error } = await client.auth.signOut();
}

export async function createMovie(movie) {
  const { data, error } = await client.from('movies').insert(movie).single();

  return data;
}

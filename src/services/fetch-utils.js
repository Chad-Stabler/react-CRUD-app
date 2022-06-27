import { client } from './client';

export async function getMovies() {
  const response = await client.from('movies').select('*');

  return response.body;
}

export async function signUp(email, password) {
  const { user, error } = await client.auth.signUp({ email: email, password: password });
  if (error) {
    throw error;
  } else return user;
}

export async function signIn(email, password) {
  const { user, error } = await client.auth.signIn({ email: email, password: password });
  if (error) {
    throw error;
  } else return user;
}

export async function logOut() {
  const { error } = await client.auth.signOut();
  if (error) {
    throw error;
  }
}

export async function createMovie(movie) {
  const { data, error } = await client.from('movies').insert(movie).single();

  if (error) {
    throw error;
  } else return data;
}

export async function getMovieByID(id) {
  const { data, error } = await client.from('movies').select('*').match({ id }).single();

  if (error) {
    throw error;
  } else return data;
}

export async function deleteMovie(id) {
  const { data, error } = await client.from('movies').delete().match({ id }).single();

  if (error) {
    throw error;
  } else return data;
}

export async function updateMovie(movie, id) {
  const { data, error } = await client.from('movies').update(movie).match({ id }).single();

  if (error) {
    throw error;
  } else return data;
}

// set up local storage for token storage

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
}
const USERNAME_KEY = 'simplechat-username';
const MESSAGES_KEY = 'simplechat-messages';


export const getUsername = () => {
  const result = localStorage.getItem(USERNAME_KEY);
  return (result !== null) ? result : '';
}

export const getMessages = () => {
  const result = localStorage.getItem(MESSAGES_KEY);
  return (result !== null) ? JSON.parse(result) : [];
}

export const storeUsername = (username) => {
  localStorage.setItem(USERNAME_KEY, username);
}

export const storeMessages = (messages) => {
  localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
}

export const clearStorage = () => {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(MESSAGES_KEY);
}

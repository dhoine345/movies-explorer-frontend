export const apiConfig = {
  baseUrl: 'https://api.fproject.nomoredomains.xyz',
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  }
};

export const baseUrl = 'https://api.nomoreparties.co';

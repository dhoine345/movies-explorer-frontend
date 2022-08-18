const getResponseData = (res) => {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

export const getAllMovies = () => {
  return fetch('https://api.nomoreparties.co/beatfilm-movies', {
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => getResponseData(res))
}

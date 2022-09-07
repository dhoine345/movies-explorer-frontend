import { apiConfig } from "./constants";

class Api {
  constructor(config) {
    this._header = config.headers;
    this._baseUrl = config.baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  register(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password, name})
    })
      .then(res => this._getResponseData(res));
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
      .then(res => this._getResponseData(res));
  }

  getUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => this._getResponseData(res));
  }

  updateProfile(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._header,
      body: JSON.stringify({
        name,
        email
      })
    })
      .then(res => this._getResponseData(res))
  }

  addMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailerLink: movie.trailerLink,
        thumbnail: movie.thumbnail,
        movieId: movie.movieId,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN
      })
    })
      .then(res => this._getResponseData(res))
  }

  removeMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._header,
    })
      .then(res => this._getResponseData(res))
  }

  getFavoriteMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(res => this._getResponseData(res))
  }
}

export const api = new Api(apiConfig);

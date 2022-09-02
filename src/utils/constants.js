export const apiConfig = {
  baseUrl: 'https://api.fproject.nomoredomains.xyz',
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  }
};

export const baseUrl = 'https://api.nomoreparties.co';

export const windowSize = {
  large: 950,
  small: 500
};

export const messages = {
  profileSuccessSubmit: 'Данные изменены',
  somthingWrong: 'Что-то пошло не так',
  emailExistError: 'Указанный E-mail уже занят',
  notFound: 'Ничего не найдено',
  missingWord: 'Нужно ввести ключевое слово'
};

export const arrayLength = {
  large: 15,
  medium: 8,
  small: 5
};

export const numberToAdd = {
  large: 3,
  medium: 2,
  small: 1
};

export const lengthOfShortMovie = 40;

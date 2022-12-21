export class User {
  userName: string
  avatarUrl: string

  constructor(userName: string, avatarUrl: string) {
    this.userName = userName
    this.avatarUrl = avatarUrl
  }
}
const user = {
  id: 1,
  userName: 'Marina', 
  avatarUrl: 'https://abrakadabra.fun/uploads/posts/2022-03/1647809364_1-abrakadabra-fun-p-milie-avatarki-na-vatsap-2.jpg'
};
const favoritesAmount = 10;

localStorage.setItem('user', JSON.stringify(user));
localStorage.setItem('favoritesAmount', favoritesAmount.toString());

/** Функция 
 * @param key {string} - получение данных из localStorage по ключу
 * @returns данные пользователя или null
 */

export function getUserData(key: string) {
  const user: unknown = JSON.parse(window.localStorage.getItem(key));
  Object.setPrototypeOf(user, User.prototype);
  if (user instanceof User) {
    return user;
  } else {
    throw Error('user field is empty.')
  }

}

/** 
 * @param key {string} - получение данных из localStorage по ключу
 * @returns количество элементов в списке желаемого или null
 */

export function getFavoritesAmount(key: string) {
  const item: unknown = localStorage.getItem(key);
  if (item === null) {
    throw Error('favoritesAmount field is empty.')
  }
  return item;
}

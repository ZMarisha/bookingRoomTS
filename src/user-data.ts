export class User {
  constructor(
    public readonly id: number, 
    public readonly userName: string, 
    public readonly avatarUrl: string
  ) {}
}

const user = {
  id: 1,
  userName: 'Marina', 
  avatarUrl: 'https://abrakadabra.fun/uploads/posts/2022-03/1647809364_1-abrakadabra-fun-p-milie-avatarki-na-vatsap-2.jpg'
};

typeof window !== 'undefined' ? localStorage.setItem('user', JSON.stringify(user)) : null


/** Функция 
 * @param key {string} - получение данных из localStorage по ключу
 * @returns данные пользователя или null
 */

export function getUserData(key: string) {
  const data: string | null = window.localStorage.getItem(key)
  if (data) {
    const user: User = JSON.parse(data);
    Object.setPrototypeOf(user, User.prototype);
    return user
  } else {
    throw Error('user field is empty.')
  }
}

/** 
 * @param key {string} - получение данных из localStorage по ключу(favoriteItems)
 * @returns массив rooms из избранного или empty []
 */

export function getFavoritesAmount(key: string) {
  const data = localStorage.getItem(key)
  let amount:[] = []
  if (data) {
    amount = JSON.parse(data);
  }
  if (amount) {
    return amount;
  } else {
    return amount = []
  }
}

import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js';
import { getUserData, getFavoritesAmount, User } from './userData.js';
import {getBookingRooms} from './services/index.js';


/*eslint-env browser*/
console.log('Hello!');

export const rerenderUserBlock = () => {
  const userData: User= getUserData('user');
  const amountItems = getFavoritesAmount('favoriteItems');
  const amount = amountItems.length
  renderUserBlock(userData.userName, userData.avatarUrl, amount)
}

/*global*/
window.addEventListener('DOMContentLoaded', () => {
  rerenderUserBlock()
  getBookingRooms()
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})



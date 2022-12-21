import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js';
import { getUserData, getFavoritesAmount, User } from './userData.js';


/*eslint-env browser*/
console.log('Hello!');

/*global*/
window.addEventListener('DOMContentLoaded', () => {
  const userData: User= getUserData('user');
  const amount= Number(getFavoritesAmount('favoritesAmount'));
  renderUserBlock(userData.userName, userData.avatarUrl, amount)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})



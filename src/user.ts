import { renderBlock } from './lib.js';
import { getModalView } from './modal-view.js';

/** Функция рентерит пользователя
 * @param userName {string} - имя пользователя
 * @param avatarka {string} - ссылка на аватарку
 * @param favoriteItemsAmount {number} - количество элементов в списке желаемого
 */


export function renderUserBlock (userName: string, avatarka: string, favoriteItemsAmount?: number): void {
  if (favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount >= 1 ? favoriteItemsAmount : 'ничего нет'
    const hasFavoriteItems = favoriteItemsAmount ? true : false
  
  
    renderBlock(
      'user-block',
      `
      <div class="header-container">
        <img class="avatar" src=${avatarka} />
        <div class="info">
            <p class="name">${userName}</p>
            <p class="fav">
              <i class="heart-icon ${hasFavoriteItems ? 'active' : ''}"></i>${favoritesCaption}
            </p>
        </div>
      </div>
      `
    )
    const blockEl: Element | null = document.querySelector('.info');
    if (blockEl) {
      const iconEl: Element | null = blockEl.querySelector('.fav');
      iconEl?.addEventListener('click', () => getModalView())
    }
  }
}

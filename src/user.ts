import { renderBlock } from './lib.js'

export function renderUserBlock (userName: string, avatarka: string, favoriteItemsAmount: number): void {
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
}
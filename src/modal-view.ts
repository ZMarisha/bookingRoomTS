import { Room } from './store/domain/room';
import { renderBlock } from './lib.js';
import { rerenderUserBlock } from './index.js';

type ModalView = Pick<Room, 'id' | 'name' | 'image'>

export function getModalView () {
  const data: string | null = window.localStorage.getItem('favoriteItems')
  if (data) {
    const favoriteData:ModalView[] = JSON.parse(data);
    renderBlock(
      'user-block', 
      `<div class="css-modal-view">
        <div class="favorite_data">
          <p class="heading_text">Favorites</p>
          <ul class="parent">
            ${favoriteData.map(el => {
              return `
                <li class="list">
                  <img class="result-img" src="${el.image}" alt="">
                  <p>${el.name}</p>
                </li>
              `
            })
            }
          </ul>
        </div>
        <button class="btn_modal">X</button>
      </div>` 
    )
  
    const modalViewEl = document.querySelector('.css-modal-view');
    if (modalViewEl) {
      const btnEl = modalViewEl.querySelector('.btn_modal');
      btnEl?.addEventListener('click', () => {
        modalViewEl.classList.add('toggle')
        rerenderUserBlock();
      })
    }
  }
}



import { writeState, removeState } from './favoriteItem.js';
import { renderBlock } from './lib.js';
import { bookRoom } from './bookingRooms.js';
import { data } from './services.js';


export function renderSearchStubBlock () {
  renderBlock(
    'search-results-block',
    `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `
  )
}

export function renderEmptyOrErrorSearchBlock (reasonMessage) {
  renderBlock(
    'search-results-block',
    `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `
  )
}


export function renderSearchResultsBlock () {
  renderBlock(
    'search-results-block',
    `
    <div class="search-results-header">
      <p>Результаты поиска</p>
      <div class="search-results-filter">
        <span><i class="icon icon-filter"></i> Сортировать:</span>
          <select>
            <option selected="">Сначала дешёвые</option>
            <option selected="">Сначала дорогие</option>
            <option>Сначала ближе</option>
          </select>
      </div>
    </div>
    <ul class="results-list">
    ${data.map(el => {
          return `
            <li class="result">
              <div class="result-container">
                <div class="result-img-container">
                  <div class="favorites" id="${el.id}"></div>
                  <img class="result-img" src="${el.image}" alt="">
                </div>	
                <div class="result-info">
                  <div class="result-info--header">
                    <p>${el.name}</p>
                    <p class="price">${el.price}&#8381;</p>
                  </div>
                  <div class="result-info--map"><i class="map-icon"></i> ${el.remoteness}км от вас</div>
                  <div class="result-info--descr">${el.description}</div>
                  <div class="result-info--footer">
                    <div>
                      <button type='submit' class="submit" id="${el.id}">Забронировать</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>`
      })
    }
    </ul>
    `
  )
  const ulEl = document.querySelectorAll('.result');
  ulEl.forEach(element => {
    const iconEl = element.querySelector('.favorites');
    const btn = element.querySelector('.submit');

    iconEl.addEventListener('click', () => {
      const id:string = iconEl.id
      iconEl.classList.toggle('active');
  
      if (iconEl.classList.contains('active')) {
        writeState(id)
      }
      if (iconEl.classList.contains('active') === false) {
        removeState(id)
      }
    });

    btn.addEventListener('click', () => {
      const btnId:string= btn.id;
      bookRoom(btnId)
    });
  });
}





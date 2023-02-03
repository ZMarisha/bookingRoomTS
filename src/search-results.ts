import { Room } from './store/domain/room';
import { writeState, removeState } from './favorite-items.js';
import { renderBlock } from './lib.js';
import { bookRoom } from './booking-rooms.js';
import { sortByCheapPrice, sortByExpensivePrice, sortByRemoteness } from './sort-fns.js';


export function renderSearchStubBlock ():void {
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

export function renderEmptyOrErrorSearchBlock (reasonMessage:string):void {
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


export function renderSearchResultsBlock (result:Room[]):void {
  renderBlock(
    'search-results-block',
    `
    <div class="search-results-header">
      <p>Результаты поиска</p>
      <div class="search-results-filter">
        <span><i class="icon icon-filter"></i> Сортировать:</span>
          <select>
            <option value="cheap" selected>Сначала дешёвые</option>
            <option value="expensive">Сначала дорогие</option>
            <option value="near"> Сначала ближе</option>
          </select>
      </div>
    </div>`
  )
  renderResultBlock(result)
  const selectEl = document.querySelector('select');
  selectEl.addEventListener('change', () => {
    const value = selectEl.value;
    const text = selectEl.options[selectEl.selectedIndex].text;
    console.log(value, text);
    if (value === 'cheap') {
      const sortPrice = result.sort(sortByCheapPrice);
      console.log(1)
      renderResultBlock(sortPrice)
    }
    else if (value === 'near') {
      const sortRemoteness = result.sort(sortByRemoteness);
      renderResultBlock(sortRemoteness)
      console.log(2)
    }
    else if (value === 'expensive') {
      const sortPriceExpensive = result.sort(sortByExpensivePrice);
      renderResultBlock(sortPriceExpensive);
      console.log(3)
    }
  })
}


function renderResultBlock (result:Room[]):void {
  renderBlock(
    'result',
  `<ul class="results-list">
  ${result.map(el => {
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
      </li>
      `
    })
  }
  </ul>`
 )
 const ulEl = document.querySelectorAll('.result');
  ulEl.forEach(element => {
    const iconEl = element.querySelector('.favorites');
    const btn = element.querySelector('.submit');

    iconEl.addEventListener('click', () => {
      const id:string = iconEl.id
      iconEl.classList.toggle('active');
  
      if (iconEl.classList.contains('active')) {
        writeState(id, result)
      }
      if (iconEl.classList.contains('active') === false) {
        removeState(id)
      }
    });

    btn.addEventListener('click', () => {
      const btnId:string= btn.id;
      bookRoom(btnId, result)
    });
  });
}





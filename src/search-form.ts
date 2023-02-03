import { ISearchFormData } from './ISearchFormData.js';
import { searchFormFunc } from './services.js';
import { renderBlock } from './lib.js';
import { getDateDeparture, getDateArrival, minDate, maxDate } from './date.js';



type namesType = 'checkin' | 'checkout' | 'price';


const dateDeparture = getDateDeparture();
const dateArrival = getDateArrival();


export function renderSearchFormBlock ( dateArrivalDefault: string = dateArrival, dateDepartureDefault: string = dateDeparture): void {
  const mindate: string = minDate();
  const maxdate: string = maxDate();

  /** Функция собирает данные из формы
   */
  function search(event, providers:string[]) {
    console.log(providers)
    const formData = new FormData(event.target as HTMLFormElement);
    const arrayNames:namesType[] = ['checkin','checkout','price']
    const formDataEntries: ISearchFormData = {};
    arrayNames.forEach(key => {
      formDataEntries[key] = <namesType>formData.get(key)
    })
    //создаю новый ключ и добавляю провайдеров
    formDataEntries['provider'] = providers;
    console.log(formDataEntries)
    //Запросы на сервер
    searchFormFunc(formDataEntries);
  }

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked/> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked/> FlatRent</label>
          </div>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${dateArrivalDefault}"  min="${mindate}" max="${maxdate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${dateDepartureDefault}" min="${mindate}" max="${maxdate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button type='submit'>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )

  const form = document.querySelector('form')
  form.addEventListener('submit', (event) => { 
    event.preventDefault();
    const checkedProviders:string[] = [];
    (event.target as Element)
    .querySelectorAll('input[name="provider"]:checked')
    .forEach(el => checkedProviders.push(el.getAttribute("value")));
    search(event, checkedProviders);
  });
}



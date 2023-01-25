import { selectedDates } from './services.js';
import { renderToast } from './lib.js';
import { data } from './services.js'
import { IDataServices } from './IDataServices.js';


const bookingRooms:IDataServices[] = [];
const message = {
  type: 'successfully',
  text: 'Бронирование прошло успешно'
}

/**
 * функция фильтрует массив и записывает в localStorage
 * @param selectedDates - выбранные даты; 
 */
export function bookRoom (id:string) {
  const filterPlace = data.find(item => (item.id).toString() === id);
  delete selectedDates.price;
  delete selectedDates.provider
  filterPlace.bookedDates = selectedDates;
  renderToast(message, null);
  bookingRooms.push(filterPlace);
  console.log(bookingRooms)
  localStorage.setItem('bookedRooms', JSON.stringify(bookingRooms));
}

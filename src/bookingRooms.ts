import { Place } from './ISearchResult';
import { selectedDates } from './ISearchFormData.js';
import { BookingRooms } from './ISearchResult.js';
import { renderToast } from './lib.js';

const places:Place[] = [];
let bookingRooms:Place[] = [];
const message = {
  type: 'successfully',
  text: 'Бронирование прошло успешно'
}


function getAllPlaces () {
  const bookingRooms = JSON.parse(window.localStorage.getItem('places'));
  Object.setPrototypeOf(bookingRooms, BookingRooms.prototype);
  
  Object.keys(bookingRooms.places).forEach(key => {
    places.push(bookingRooms.places[key])
  })
};


/**
 * функция фильтрует массив и записывает в localStorage
 * @param selectedDates - выбранные даты; 
 */
export function bookRoom (id:number) {
  getAllPlaces();
  const filterPlace = places.find(item => item.id === id);
  delete selectedDates.price;
  filterPlace.bookedDates = selectedDates;
  renderToast(message, null);
  bookingRooms.push(filterPlace);
  console.log(bookingRooms)
  localStorage.setItem('bookedRooms', JSON.stringify(bookingRooms));
}

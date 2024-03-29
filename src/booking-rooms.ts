import { selectedDates } from './services.js';
import { renderToast } from './lib.js';
import { IBookedPlaces } from './IBookedPlaces.js';
import { Room } from './store/domain/room.js';


const bookingRooms:IBookedPlaces[] = [];
const message = {
  type: 'successfully',
  text: 'Бронирование прошло успешно'
}

/**
 * функция фильтрует массив и записывает в localStorage
 * @param selectedDates - выбранные даты; 
 */
export function bookRoom (id:string, data:Room[]) {
  const filterPlace:Room | undefined = data.find(item => (item.id).toString() === id);
  console.log(data)
  if (filterPlace) {
    const obj = {
      id: filterPlace.id,
      name: filterPlace.name,
      price: filterPlace.price,
      description: filterPlace.description,
      bookedDates: selectedDates
    }
    delete obj.bookedDates.price;
    delete obj.bookedDates.provider;
    bookingRooms.push(obj);
  }
  
  renderToast(message, null);
  console.log(bookingRooms)
  localStorage.setItem('bookedRooms', JSON.stringify(bookingRooms));
}

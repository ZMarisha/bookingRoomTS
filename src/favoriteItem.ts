import { Place } from './ISearchResult';
import { rerenderUserBlock } from "./index.js";
import { arrayBookingRooms } from './search-results.js';


type FavoriteItems = Pick<Place, 'id' | 'name' | 'image'>

let favoriteItems:FavoriteItems[] = [];

export function writeState (id: string) {
  const filterItem:Place = arrayBookingRooms.find(item => item.id === Number(id));
  delete filterItem.description;
  delete filterItem.remoteness;
  delete filterItem.bookedDates;
  delete filterItem.price;
  favoriteItems.push(filterItem);
  console.log( favoriteItems);
  localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  //перерендеривает(запускает) renderUserBlock
  rerenderUserBlock();
}

export function removeState (id: string) {
  const filterItem = favoriteItems.filter(item => item.id !== Number(id));
  favoriteItems = filterItem;
  localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))
  console.log(favoriteItems);
  //перерендеривает(запускает) renderUserBlock
  rerenderUserBlock();
}

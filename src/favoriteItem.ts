import { rerenderUserBlock } from "./index.js";
import { data } from './services.js';
import { IDataServices } from './IDataServices';


type FavoriteItems = Pick<IDataServices, 'id' | 'name' | 'image'>

let favoriteItems:FavoriteItems[] = [];

export function writeState (id: string) {
  const filterItem = data.find(item => (item.id).toString() === id);
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
  const filterItem = favoriteItems.filter(item => (item.id).toString() !== id);
  favoriteItems = filterItem;
  localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))
  console.log(favoriteItems);
  //перерендеривает(запускает) renderUserBlock
  rerenderUserBlock();
}

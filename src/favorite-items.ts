import { Room } from './store/domain/room.js';
import { rerenderUserBlock } from './index.js';



type FavoriteItems = Pick<Room, 'id' | 'name' | 'image'>

let favoriteItems:FavoriteItems[] = [];

export function writeState (id: string, result:Room[]) {
  console.log(result)
  const filterItem: Room | undefined= result.find(item => item.id === id);
  if  (filterItem) {
    const obj:FavoriteItems = {
      id: filterItem.id,
      name: filterItem.name,
      image: filterItem.image
    }
    favoriteItems.push(obj)
  }

  console.log(favoriteItems);
  localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  //перерендеривает(запускает) renderUserBlock
  rerenderUserBlock();
}

export function removeState (id: string) {
  const filterItem = favoriteItems.filter(item => item.id !== id);
  favoriteItems = filterItem;
  localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))
  console.log(favoriteItems);
  //перерендеривает(запускает) renderUserBlock
  rerenderUserBlock();
}

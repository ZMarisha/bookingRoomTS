import { Room } from './store/domain/room.js';

export function sortByCheapPrice(one: Room, two: Room) {
  if (one.price > two.price) {
    return 1;
  } else if (one.price < two.price) {
    return -1;
  } else {
    return 0;
  }
}

export function sortByRemoteness(one: Room, two: Room) {
  if (one.remoteness > two.remoteness) {
    return 1;
  } else if (one.remoteness < two.remoteness) {
    return -1;
  } else {
    return 0;
  }
}

export function sortByExpensivePrice(one: Room, two: Room) {
  if (one.price < two.price) {
    return 1;
  } else if (one.price > two.price) {
    return -1;
  } else {
    return 0;
  }
}

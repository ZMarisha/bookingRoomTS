import { Provider } from "../../domain/provider.js";
import { Room } from "../../domain/room.js";
import { SearchFilter } from "../../domain/search-filter.js";
import { FlatRentSdk } from "../../../flat-rent-sdk.js";
import { FRRoom } from "./response-flat-rent.js";

export class FlatRentProvider implements Provider {
  getById(id: string): Promise<Room> {
    throw new Error(`Method not implemented. ${id}`);
  }

  public static provider = "FlatRent";

  public find(filter: SearchFilter): Promise<Room[]> {
    const frs = new FlatRentSdk();

    const parameters = {
      city: "Санкт-Петербург",
      checkInDate: new Date(filter.dateArrival),
      checkOutDate: new Date(filter.dateDepature),
      priceLimit: filter.maxPrice,
    };

    return new Promise((resolve) => {
      const response = frs.search(parameters);
      resolve(response);
    }).then((result: any) => {
      const data = [];

      if (result) {
        result.forEach((el) => {
          data.push({
            id: el['id'],
            name: el['title'],
            image: el['photos'][0],
            description: el['details'],
            bookedDates: [],
            price: el['totalPrice'] / 2,
            remoteness: 5,
          })
        });
      }

      return this.convertPlaceListResponse(data);
    });
  }

  private convertPlaceListResponse(response: FRRoom[]): Room[] {
    const placesList: Room[] = [];
    for (const key in response) {
      placesList.push(this.convertPlaceResponse(response[key]));
    }
    return placesList;
  }

  private convertPlaceResponse(item): Room {
    return new Room(
      FlatRentProvider.provider,
      String(item.id),
      item.name,
      item.image,
      item.description,
      item.bookedDates,
      item.price,
      item.remoteness
    );
  }
}

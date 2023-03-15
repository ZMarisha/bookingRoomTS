import { Room } from './../../domain/room.js';
import { Provider } from '../../domain/provider.js';
import { SearchFilter } from '../../domain/search-filter.js';
import { HttpHelper } from '../../utils/http-helper.js';
import { HomyRoomListResponse, HomyRoomResponse, HomyRoom } from './response-homy.js';




export class HomyProvider implements Provider {
  public static provider = 'Homy';

  private static LOCALHOST_PATH = 'http://localhost:3030';

  public find(filter: SearchFilter): Promise<Room[]> {
    return HttpHelper.fetchAsJson<HomyRoomListResponse>(
      HomyProvider.LOCALHOST_PATH + '/places?' + this.convertFilterToQueryString(filter))
      .then((response) => {
        // проверим, что с ответ корректный
        this.assertIsValidResponse(response)
        // сконвертируем JSON-ответ
        return this.convertPlaceListResponse(response)
      })
  }

  private assertIsValidResponse(response: HomyRoomListResponse | HomyRoomResponse): void {
    if (response.errorMessage != null) {
      throw new Error(response.errorMessage)
    }
  }

  public getById(id: string): Promise<Room> {
    return HttpHelper.fetchAsJson<HomyRoomResponse>(
      HomyProvider.LOCALHOST_PATH + '/place/' + id
    ).then((response) => {
      this.assertIsValidResponse(response);
      return this.convertPlaceResponse(response.item);
    });
  }

  private convertFilterToQueryString(filter: SearchFilter): string {
    return (
      `checkInDate=${filter.dateArrival}&coordinates=59.9386,30.3141` +
      `&checkOutDate=${filter.dateDepature}&maxPrice=${filter.maxPrice}`
    );
  }

  /**
   * Проходимся по каждому объекту и конвертируем его в экземпляр Room
   */
  private convertPlaceListResponse(response:HomyRoomListResponse): Room[] {
    const placesList: Room[] = [];
    // response.map(el => placesList.push(this.convertPlaceResponse(el)))
    console.log(response)
    const res: any = response
    for (const key in response) {
      placesList.push(this.convertPlaceResponse(res[key]));
    }
    return placesList;
  }
  
  private convertPlaceResponse(item: HomyRoom): Room {
    return new Room(
      HomyProvider.provider,
      String(item.id),
      item.name,
      item.image,
      item.description,
      item.bookedDates,
      item.price,
      item.remoteness,
    )
  }
}



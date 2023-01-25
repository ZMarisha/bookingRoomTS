import { FlatRentSdk } from './flat-rent-sdk.js';
import { Place } from './ISearchResult.js';
import { ISearchFormData } from './ISearchFormData.js';
import { BookingRooms } from './ISearchResult.js';
import { IDataServices } from './IDataServices.js';


export let selectedDates:ISearchFormData = {};
export const data:IDataServices[] = [];
const LOCALHOST_PATH = 'http://localhost:8000/'
const BOOKING_ROOMS_PATH = `${LOCALHOST_PATH}db.backup.json`;

export const searchFormFunc = async(formData: ISearchFormData) => {
  selectedDates = formData;
  const dateIn = new Date(formData["checkin"]).getTime();
  const dateOut = new Date(formData["checkout"]).getTime();

  if (formData['provider'].find(el => el === 'flat-rent')) {
    const flatRentSDK = new FlatRentSdk();
    const parameters = {
      city: 'Санкт-Петербург',
      checkInDate: new Date(formData.checkin),
      checkOutDate: new Date(formData.checkout),
      priceLimit: Number(formData.price)
    }
   const getResponse = await flatRentSDK.search(parameters)
   getResponse.forEach(el => {
    data.push({
      id: el['id'],
      name: el['title'],
      description: el['details'],
      image: el['photos'][0],
      price: el['totalPrice'] / 2,
      coordinates: el['coordinates'],
      remoteness: el['remoteness'],
      bookedDates: [],
    })
   })
  }
  
  if (formData['provider'].find(el => el === 'homy')) {
    fetch(BOOKING_ROOMS_PATH)
    .then((res) => {
      return res.text()
    })
    .then<Place>((response) => {
      return JSON.parse(response)
    })
    .then((data) => {
      localStorage.setItem('places', JSON.stringify(data))
    })
    addPlaces (formData.price)
  }
  console.log(data)
}


export function addPlaces (result) {
  const arrayBookingRooms:Place[] = [];
  const bookingRooms = JSON.parse(window.localStorage.getItem('places'));
  Object.setPrototypeOf(bookingRooms, BookingRooms.prototype);
  
  Object.keys(bookingRooms.places).forEach(key => {
    arrayBookingRooms.push(bookingRooms.places[key])
  })
  arrayBookingRooms.map(el => {
    if (el.price <= Number(result)) {
      data.push(el)
    }
  })
};

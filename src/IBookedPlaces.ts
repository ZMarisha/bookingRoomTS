import {  ISearchFormData } from './ISearchFormData.js'

export interface IBookedPlaces {
  id: string
  name: string
  price: number
  description: string
  bookedDates: ISearchFormData
}

/**
 * class BookingRooms - если будет необходимо получить данные по бронированию из localStorage
 */
export class BookingRooms {
  constructor(
    public readonly id: string, 
    public readonly name: string, 
    public readonly price: number, 
    public readonly description: string, 
    public readonly bookedDates: ISearchFormData 
  ) {}
}

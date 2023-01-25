import { ISearchFormData } from './ISearchFormData.js'

export interface Place {
  id: number
  name: string
  description: string
  image: string
  remoteness: number
  bookedDates: [] | ISearchFormData
  price: number
}

export class BookingRooms {
  constructor(readonly id: number | string, readonly name: string, readonly description: string, readonly image: string, readonly remoteness: number, 
    readonly bookedDates: [], readonly price: number) {}
}



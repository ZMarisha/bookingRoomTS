export interface Place {
  id: number
  name: string
  description: string
  image: string
  remoteness: number
  bookedDates: [] | any //не хватает знаний, как указать что в массиве есть объект с данными по датам бронирования
  price: number
}

export class BookingRooms {
  constructor(readonly id: number, readonly name: string, readonly description: string, readonly image: string, readonly remoteness: number, 
    readonly bookedDates: [], readonly price: number) {}
}



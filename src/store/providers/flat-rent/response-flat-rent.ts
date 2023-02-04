/**
 * Ответ с несколькими номерами
 */
export interface FRRoomListResponse {
  errorMessage?: string
  items: FRRoom[]
}

/**
 * Ответ с одним номером
 */
export interface FRRoomResponse {
  errorMessage?: string
  item: FRRoom
}

/**
 * Структура номера
 */
export interface FRRoom {
  id: string
  title: string
  photos: string[]
  totalPrice: number
  coordinates: number[]
  details: string
  bookedDates: []
}

export interface FlatRent {
  id: string,
  name: string,
  image: string,
  description: string,
  bookedDates: [],
  price: number,
  remoteness: number,
}

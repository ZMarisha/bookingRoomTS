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
  price: number
  coordinates: number[]
  details: string
  bookedDates: []
}

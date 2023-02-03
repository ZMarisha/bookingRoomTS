/**
 * Ответ с несколькими номерами
 */
 export interface HomyRoomListResponse {
  errorMessage?: string
  items: HomyRoom[]
}

/**
 * Ответ с одним номером
 */
export interface HomyRoomResponse {
  errorMessage?: string
  item: HomyRoom
}

/**
 * Структура номера
 */
export interface HomyRoom {
  id: number
  name: string
  image: string
  price: number
  remoteness: number
  description: string
  bookedDates: []
}

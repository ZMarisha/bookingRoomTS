/**
 * Протокол фильтра, с которым должен работать каждый провайдер
 */
 export interface SearchFilter {
  dateArrival: number
  dateDepature: number
  maxPrice: number
}

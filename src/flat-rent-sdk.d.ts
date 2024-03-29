export function cloneDate(date: any): Date;
  
export function addDays(date: Date, days: number): Date;
  
export const backendPort: number
export const localStorageKey: string

export class FlatRentSdk {
  constructor()
  /**
    * Get flat by ID.
    *
    * @param {string} id Flat ID.
    * @returns {Promise<Object|null>} Flat.
    */
   
  get(id:string):Promise<Object | null>;

  /**
   * Search for flats.
   *
   * @param {Object} parameters Search parameters
   * @param {string}parameters.city City name
   * @param {Date} parameters.checkInDate Check-in date
   * @param {Date} parameters.checkOutDate Check-out date
   * @param {number} [parameters.priceLimit] Max price for a night
   * @returns {Object[]} List of suitable flats.
   */

  search(parameters: {
    city: string,
    checkInDate: Date,
    checkOutDate: Date,
    priceLimit?: number
  }):Promise<Object[] | null>;

  /**
   * Book flat.
   *
   * @param {number} flatId
   * @param {Date} checkInDate
   * @param {Date} checkOutDate
   * @returns {number}
   */

  book(flatId: number, checkInDate: Date, checkOutDate: Date): number;
  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void;
  _resetTime(date: any): void;
  _calculateDifferenceInDays(startDate: Date, endDate: Date): number;
  _generateDateRange(from: Date, to: Date): Date[];
  _generateTransactionId: () => number;
  _areAllDatesAvailable(flat: any, dateRange: any): any;
  _formatFlatObject(flat: Object, nightNumber: number): Object;
  _readDatabase(): Object[]
  _writeDatabase(database: Object[] ):void
  _syncDatabase(database: Object[] ):void
}

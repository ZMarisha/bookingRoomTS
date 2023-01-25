import {  ISearchFormData } from './ISearchFormData.js'

export interface IDataServices {
  id: string | number
  name: string
  description: string
  image: string
  coordinates?: number[]
  remoteness?: number | null;
  bookedDates: [] |  ISearchFormData
  price: number
}

export interface ISearchFormData {
  checkin?: string;
  checkout?: string;
  price?: string;
}

export let selectedDates:ISearchFormData = {};

export const searchFormFunc = (formData: ISearchFormData) => {
  console.log(formData)
  selectedDates = formData;
  return selectedDates
}


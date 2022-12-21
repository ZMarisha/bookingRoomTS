export interface ISearchFormData {
  checkin?: string;
  checkout?: string;
  price?: string;
}

export const searchFormFunc = (formData: ISearchFormData): void => {
  console.log(formData)
}

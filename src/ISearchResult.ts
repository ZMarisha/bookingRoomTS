export interface Place {}
export const searchResult: Place[] | Place = null;
export function getSearchReasult(result: Place[] | Place) {
  setTimeout(() => {
    if (result === null) {
      throw Error('No data')
    }
    return console.log(result)
  }, 1500)
}

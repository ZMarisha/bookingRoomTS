import { Room } from './store/domain/room';
import { FlatRentSdk } from './flat-rent-sdk.js';
import { ISearchFormData } from './ISearchFormData.js';
import { SearchFilter } from './store/domain/search-filter.js';
import { HomyProvider } from './store/providers/homy/homy-provider.js';
import { FlatRentProvider } from './store/providers/flat-rent/flat-rent-provider.js';
import { getSearchReasult } from './render-search-result.js';
import { sortByCheapPrice } from './sort-fns.js'


export let selectedDates:ISearchFormData = {};
const Homy = new HomyProvider();
const FlatRent = new FlatRentProvider();

export const searchFormFunc = async(formData: ISearchFormData) => {
  selectedDates = formData;
  const dateIn = new Date(formData["checkin"]).getTime();
  const dateOut = new Date(formData["checkout"]).getTime();

  const flatRentSDK = new FlatRentSdk();
  const filter:SearchFilter = {
    dateArrival: dateIn,
    dateDepature: dateOut,
    maxPrice: Number(formData.price)
  }
 
  
  if (formData['provider'].find(el => el === 'flat-rent') && formData['provider'].find(el => el === 'homy')) {
      Promise.all([Homy.find(filter), FlatRent.find(filter)]).then((results) => {
        console.log(results)
        let allResult:Room[] = [].concat(results[0], results[1]);
        console.log(allResult)
        const sort = allResult.sort(sortByCheapPrice);
        getSearchReasult(sort)
      })
  }
  else if (formData['provider'].find(el => el === 'homy')) {
    Promise.all([Homy.find(filter)]).then((res) => {
      const result: Room[] = [].concat(res[0]);
      const sort = result.sort(sortByCheapPrice);
      getSearchReasult(sort)
    })
  } 
  else if (formData['provider'].find(el => el === 'flat-rent')) {
    Promise.all([FlatRent.find(filter)]).then((res) => {
      const result: Room[] = [].concat(res[0]);
      console.log(result)
      const sort = result.sort(sortByCheapPrice);
      getSearchReasult(sort)
    })
  }
}


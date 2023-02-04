import { Room } from './store/domain/room';
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
  const dateIn = new Date(formData['checkin'] ?? '').getTime();
  const dateOut = new Date(formData['checkout']?? '').getTime();

  const filter:SearchFilter = {
    dateArrival: dateIn,
    dateDepature: dateOut,
    maxPrice: Number(formData.price)
  }
  
  if ( formData['provider'] || formData['provider']) {
    if (formData['provider'].find(el => el === 'flat-rent') && (formData['provider']).find(el => el === 'homy')) {
      Promise.all([Homy.find(filter), FlatRent.find(filter)]).then((results) => {
        console.log(results)
        const allResult:Room[] = [].concat(<never>results[0], <never>results[1]);
        console.log(allResult)
        const sort = allResult.sort(sortByCheapPrice);
        getSearchReasult(sort)
      })
    }
    else if (formData['provider'].find(el => el === 'homy')) {
      Promise.all([Homy.find(filter)]).then((res) => {
        const result: Room[] = [].concat(<never>res[0]);
        const sort = result.sort(sortByCheapPrice);
        getSearchReasult(sort)
      })
    } 
    else if (formData['provider'].find(el => el === 'flat-rent')) {
      Promise.all([FlatRent.find(filter)]).then((res) => {
        const result: Room[] = [].concat(<never>res[0]);
        console.log(result)
        const sort = result.sort(sortByCheapPrice);
        getSearchReasult(sort)
      })
    }
  }
}


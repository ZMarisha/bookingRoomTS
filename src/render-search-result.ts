import { renderSearchResultsBlock, renderEmptyOrErrorSearchBlock } from './search-results.js';
import { Room } from './store/domain/room.js';

/**
 * @param data - массив с отфильтрованными данными(номера)
 */ 
 export function getSearchReasult(data:Room[]):void {
  console.log(data)
  setTimeout(() => {
    if ( data.length === 0 || data[0].price === undefined) {
      return renderEmptyOrErrorSearchBlock('No Data')
    } else {
      return renderSearchResultsBlock(data);
    }
  }, 1500)
}

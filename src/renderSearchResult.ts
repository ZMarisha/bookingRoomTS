import { renderSearchResultsBlock, renderEmptyOrErrorSearchBlock } from './search-results.js';

/**
 * @param result - цена за сутки
 */ 
 export function getSearchReasult(result:string) {
  setTimeout(() => {
    if (result === '') {
      return renderEmptyOrErrorSearchBlock('No Data')
    }
    return renderSearchResultsBlock(result);
  }, 1500)
}

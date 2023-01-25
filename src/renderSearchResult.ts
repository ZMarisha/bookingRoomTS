import { renderSearchResultsBlock, renderEmptyOrErrorSearchBlock } from './search-results.js';

/**
 * @param result - цена за сутки
 */ 
 export function getSearchReasult(data) {
  setTimeout(() => {
    if (data.length === 0) {
      return renderEmptyOrErrorSearchBlock('No Data')
    }
    return renderSearchResultsBlock();
  }, 1500)
}

import {
  cusRequest
} from "./index";

export function getSearchHot() {
  return cusRequest.get('/search/hot')
}

export function getSearchSuggest(keywords) {
  return cusRequest.get('/search/suggest', {
    keywords,
    type: 'mobile'
  })
}

export function getSearchResult(keywords) {
  return cusRequest.get('/search', {
    keywords
  })
}
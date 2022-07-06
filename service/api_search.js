import {
  cusRequest
} from "./index";

export function getSearchHot() {
  return cusRequest.get('/search/hot')
}
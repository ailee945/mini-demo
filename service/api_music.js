import {
  cusRequest
} from "./index";

export function getBanner() {
  return cusRequest.get('/banner', {
    type: 2
  })
}
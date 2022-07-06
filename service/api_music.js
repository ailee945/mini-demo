import {
  cusRequest
} from "./index";

export function getBanner() {
  return cusRequest.get('/banner', {
    type: 2
  })
}

export function getRanking(idx) {
  return cusRequest.get('/top/list', {
    idx
  })
}

export function getSongMenu(cat = "全部", limit = 6, offset = 0) {
  return cusRequest.get('/top/playlist', {
    cat,
    limit,
    offset
  })
}

export function getSongMenuDetail(id) {
  return cusRequest.get('/playlist/detail/dynamic', {
    id
  })
}
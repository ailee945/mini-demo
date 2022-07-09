import {
  cusRequest
} from './index'

export function getSongDetail(ids) {
  return cusRequest.get("/song/detail", {
    ids
  })
}
export function getSongLyric(id) {
  return cusRequest.get("/lyric", {
    id
  })
}
import {
  cusRequest
} from './index'

export function getTopMVs(offset, limit = 10) {
  return cusRequest.get('/top/mv', {
    offset,
    limit
  })
}

/**
 * 请求mv播放地址
 * @param {number} id mv的id
 */
export function getMVURL(id) {
  return cusRequest.get('/mv/url', {
    id
  })
}

/**
 * 请求mv详情
 * @param {number} id 
 */
export function getMVDetail(mvid) {
  return cusRequest.get('/mv/detail', {
    mvid
  })
}

/**
 * mv推荐
 * @param {number} id 
 */
export function getRelatedVideos(id) {
  return cusRequest.get('/related/allvideo', {
    id
  })
}
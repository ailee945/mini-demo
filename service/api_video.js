import { cusRequest } from './index'

export function getTopMVs(offset, limit = 11){
  return cusRequest.get('/top/mv', { offset,limit })
}
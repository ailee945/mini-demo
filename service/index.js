const BASE_URL = 'http://123.207.32.32:9001'

class CusRequest {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        method: method,
        data: params,
        success(res) {
          resolve(res.data)
        },
        fail: reject
      })
    })
  }
  get(url, params) {
    return this.request(url, 'GET', params)
  }
  post(url, params) {
    return this.request(url, 'POST', params)
  }
}

export const cusRequest = new CusRequest()
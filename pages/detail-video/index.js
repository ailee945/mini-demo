// pages/detail-video/index.js
import {
  getMVURL,
  getMVDetail,
  getRelatedVideos
} from '../../service/api_video'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvURLInfo: {},
    mvDetail: {},
    relatedVideos: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const id = options.id
    getMVURL(id).then(res => {
      this.setData({
        mvURLInfo: res.data
      })
    })
    getMVDetail(id).then(res => {
      this.setData({
        mvDetail: res.data
      })
    })
    getRelatedVideos(id).then(res => {
      this.setData({
        relatedVideos: res.data
      })
    })
  },
})
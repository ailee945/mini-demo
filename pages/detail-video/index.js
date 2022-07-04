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
    // 获取 id
    const id = options.id
    // 获取页面数据
    this.getPageData(id)
  },
  getPageData(id) {
    // 请求 mv url
    getMVURL(id).then(res => {
      this.setData({
        mvURLInfo: res.data
      })
    })
    // 请求 mv 详情
    getMVDetail(id).then(res => {
      this.setData({
        mvDetail: res.data
      })
    })
    // 请求相关推荐
    getRelatedVideos(id).then(res => {
      this.setData({
        relatedVideos: res.data
      })
    })

  }
})
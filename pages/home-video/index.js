// pages/home-video/index.js
import {
  getTopMVs
} from '../../service/api_video'

Page({
  data: {
    topMVs: {},
    hasMore: true
  },

  async onLoad() {
    const res = await getTopMVs(0)
    this.setData({
      topMVs: res.data
    })
  },

  // 处理item的tap事件
  handleVideoItemClick(e) {
    var id = e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: '/pages/detail-video/index?id=' + id,
    })
  },

  // 其他生命周期
  async onPullDownRefresh() {
    const res = await getTopMVs(0)
    this.setData({
      topMVs: res.data
    })
  },
  async onReachBottom() {
    if (!this.data.hasMore) return
    const res = await getTopMVs(this.data.topMVs.length)
    this.setData({
      topMVs: this.data.topMVs.concat(res.data)
    })
    this.setData({
      hasMore: res.hasMore
    })
  }
})
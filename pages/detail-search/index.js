// pages/detail-search/index.js
import {
  getSearchHot
} from '../../service/api_search'

Page({
  data: {
    hotKeywords: []
  },
  onLoad() {
    // 获取页面的数据
    this.getPageData()
  },

  getPageData() {
    getSearchHot().then(res => {
      this.setData({
        hotKeywords: res.result.hots
      })
    })
  }
})
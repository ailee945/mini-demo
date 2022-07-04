// pages/main-music/index.js
import {
  getBanner
} from "../../service/api_music";
import queryRect from '../../utils/query-rect'
import throttle from '../../utils/throttle'

const throttltQueryRect = throttle(queryRect)

Page({
  data: {
    swiperHeight: 0,
    banners: []
  },
  onLoad(options) {
    this.getPageData()
  },
  // 获取页面数据
  getPageData() {
    getBanner().then(res => {
      this.setData({
        banners: res.banners
      })
    })
  },
  // 事件处理
  handleSearchClick() {
    wx.navigateTo({
      url: '/pages/detail-search/index',
    })
  },
  // 动态获取图片组件高度
  handleSwiperImgLoaded() {
    throttltQueryRect('.swiper-image').then(res => {
      const rect = res[0]
      this.setData({
        swiperHeight: rect.height
      })
    })
  }
})
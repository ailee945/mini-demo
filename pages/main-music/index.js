// pages/main-music/index.js
import {
  getBanner,
  getSongMenu
} from "../../service/api_music";
import queryRect from '../../utils/query-rect'
import throttle from '../../utils/throttle'
import {
  rankingStore
} from "../../store/index";

const throttltQueryRect = throttle(queryRect)

Page({
  data: {
    swiperHeight: 0,
    banners: [],
    recommendSongs: [],
    hotSongMenu: [],
    recommendSongMenu: []
  },
  onLoad(options) {
    // 获取页面数据
    this.getPageData()
    // 发起获取推荐请求
    // rankingStore.dispatch('getRankingDataAction')
    // 从store获取共享的数据
    // rankingStore.onState('hotRanking', (res) => {
    //     if (!res.tracks) return
    //     const recommendSongs = res.tracks.slice(0, 6)
    //     this.setData({
    //         recommendSongs
    //     })
    // })
  },
  // 获取页面数据
  getPageData() {
    getBanner().then(res => {
        this.setData({
          banners: res.banners
        })
      }),
      getSongMenu().then(res => {
        this.setData({
          hotSongMenu: res.playlists
        })
      }),
      getSongMenu('华语').then(res => {
        this.setData({
          recommendSongMenu: res.playlists
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
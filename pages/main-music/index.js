// pages/main-music/index.js
import {
  getBanner,
  getSongMenu
} from "../../service/api_music";
import queryRect from '../../utils/query-rect'
import throttle from '../../utils/throttle'
import {
  rankingStore,
  rankingMap
} from "../../store/index";

const throttltQueryRect = throttle(queryRect, 300, {
  // fix: 无法正确获取轮播图高度问题
  leading: true,
  trailing: true
})

Page({
  data: {
    swiperHeight: 0,
    banners: [],
    recommendSongs: [],
    hotSongMenu: [],
    recommendSongMenu: [],
    rankings: {
      0: {},
      2: {},
      3: {}
    }
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

    // 榜单数据
    rankingStore.onState('newRanking', this.getRankingHandler(0))
    rankingStore.onState('originRanking', this.getRankingHandler(2))
    rankingStore.onState('upRanking', this.getRankingHandler(3))
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
  handleMoreClick() {
    this.navigateToDetailSongsPage('hotRanking')
  },
  handleRankingItemClick(e) {
    const idx = e.currentTarget.dataset.idx
    const rankingName = rankingMap[idx]
    this.navigateToDetailSongsPage(rankingName)
  },

  // 封装跳转函数
  navigateToDetailSongsPage(rankingName) {
    wx.navigateTo({
      url: `/pages/detail-songs/index?ranking=${rankingName}&type=rank`,
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
  },

  // 获取榜单数据
  getRankingHandler() {
    return res => {
      if (Object.keys(res).length === 0) return
      const name = res.name
      const coverImgUrl = res.coverImgUrl
      const playCount = res.playCount
      const songList = res.tracks.slice(0, 3)
      const rankingObj = {
        name,
        coverImgUrl,
        playCount,
        songList
      }
      const newRankings = {
        ...this.data.rankings,
        [idx]: rankingObj
      }
      this.setData({
        rankings: newRankings
      })
    }
  },
})
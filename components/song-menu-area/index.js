// components/song-menu-area/index.js
// const app = getApp()

Component({
  properties: {
    title: {
      type: String,
      value: '热门'
    },
    songMenu: {
      type: Array,
      value: []
    }
  },
  data: {
    // screenWidth: app.globalData.screenWidth
  },
  methods: {
    handleMenuItemClick(e) {
      const item = e.currentTarget.dataset.item
      wx.navigateTo({
        url: `/pages/detail-songs/index?id=${item.id}&type=menu`,
      })
    }
  }
})
// components/song-item-v2/index.js
import {
  playerStore
} from '../../store/index'

Component({
  properties: {
    index: {
      type: Number,
      value: 0
    },
    item: {
      type: Object,
      value: {}
    }
  },
  data: {

  },
  methods: {
    handleSongItemClick() {
      const id = this.properties.item.id
      wx.navigateTo({
        url: '/pages/music-player/index?id=' + id,
      })
      // 获取页面信息并播放歌曲
      playerStore.dispatch('playMusicWithSongIdAction')
    }
  }
})
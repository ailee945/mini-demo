import {
  HYEventStore
} from 'hy-event-store'

import {
  getRanking
} from '../service/api_music'

export const rankingMap = {
  0: 'newRanking',
  1: 'hotRanking',
  2: 'originRanking',
  3: 'upRanking'
}

export const rankingStore = new HYEventStore({
  state: {
    newRanking: {},
    hotRanking: {},
    originRanking: {},
    upRanking: {},
  },
  actions: {
    // 0: 新歌；1: 热歌；2: 原创；3: 飙升
    async getRankingDataAction(ctx) {
      for (let i = 0; i < 4; i++) {
        getRanking(i).then(res => {
          const rankingName = rankingMap[i]
          ctx[rankingName] = res.playlist
          // switch (i) {
          //   case 0:
          //     ctx.hotRanking = res.playlist
          //     break
          //   case 1:
          //     ctx.newRanking = res.playlist
          //     break
          //   case 2:
          //     ctx.originRanking = res.playlist
          //     break
          //   case 3:
          //     ctx.upRanking = res.playlist
          //     break
          // }
        })
      }
    }
  }
})
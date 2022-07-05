import {
    HYEventStore
} from 'hy-event-store'

import {
    getRanking
} from '../service/api_music'

export const rankingStore = new HYEventStore({
    state: {
        hotRanking: {}
    },
    actions: {
        async getRankingDataAction(ctx) {
            getRanking(1).then(res => {
                ctx.hotRanking = res.playlist
            })
        }
    }
})
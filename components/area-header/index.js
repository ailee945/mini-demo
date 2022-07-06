// components/area-header/index.js
Component({
  properties: {
    title: {
      type: String,
      value: '热门'
    },
    rightText: {
      type: String,
      value: '更多'
    },
    // 控制right部分的显示隐藏
    showDefault: {
      type: Boolean,
      value: true
    }
  },
  data: {},
  methods: {
    handleRightClick() {
      this.triggerEvent('click')
    }
  }
})
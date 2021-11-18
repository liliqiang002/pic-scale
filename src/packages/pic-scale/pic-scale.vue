<template>
  <div class="pic-zoom">
    <div @mouseenter="startHandle($event)" @mousemove="moveHandle($event)" @mouseleave="leaveHandle" class="small">
      <img :src="url" alt="">
      <div v-show="isShow" :style="maskStyle" class="mask"></div>
    </div>
    <div v-show="isShow" class="big" :style="{...bigStyle, backgroundImage: 'url('+url+')'}"></div>
  </div>
</template>
<script>
export default {
  name: 'picScale',
  props: {
    url: {
      type: String,
      require: true
    },
    scale: {
      type: Number,
      require: false,
      default: 1
    }
  },
  data () {
    return {
      isShow: false,
      maskStyle: {
        width: '40%',
        height: '40%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        top: 0,
        left: 0
      },
      bigStyle: {
        backgroundSize: 100 * this.scale + '%',
        bckgroundPosition: '0 0',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#ffffff'
      },
      config: {
        smallX: null,
        smallY: null,
        smallWidth: null,
        smallHeight: null,
        maskWidth: null,
        maskHeight: null
      }
    }
  },
  methods: {
    startHandle () {
      this.isShow = true
      const self = this
      setTimeout(() => {
        self.init()
      })
    },
    init () {
      if (!this.config.smallElement || !this.config.maskElement) {
        // 获取图片容器的坐标位置和宽高
        const smallElement = document.querySelector('.small')
        this.config.smallX = smallElement.getBoundingClientRect().left
        this.config.smallY = smallElement.getBoundingClientRect().top
        this.config.smallWidth = smallElement.offsetWidth
        this.config.smallHeight = smallElement.offsetHeight
        // 获取遮罩的宽高
        const maskElement = document.querySelector('.mask')
        this.config.maskWidth = maskElement.offsetWidth
        this.config.maskHeight = maskElement.offsetHeight
      }
    },
    moveHandle (e) {
      // 获取光标的坐标
      const clientX = e.clientX,
      clientY = e.clientY
      console.log(1)
      // // 获取图片容器的坐标位置和宽高
      // const smallElement = document.querySelector('.small')
      // const smallX = smallElement.getBoundingClientRect().left
      // const smallY = smallElement.getBoundingClientRect().top
      // const smallWidth = smallElement.offsetWidth
      // const smallHeight = smallElement.offsetHeight
      // console.log(smallX, smallY, smallWidth, smallHeight)
      // // 获取遮罩的宽高
      // const maskElement = document.querySelector('.mask')
      // const maskWidth = maskElement.offsetWidth
      // const maskHeight = maskElement.offsetHeight
      // console.log(maskWidth, maskHeight)
      // 计算遮罩坐标
      let maskX = clientX - this.config.smallX - this.config.maskWidth / 2
      maskX = maskX < 0 ? 0 : maskX
      if (maskX + this.config.maskWidth > this.config.smallWidth) {
        maskX = this.config.smallWidth - this.config.maskWidth
      }
      let maskY = clientY - this.config.smallY - this.config.maskHeight / 2
      maskY = maskY < 0 ? 0 : maskY
      if (maskY + this.config.maskHeight > this.config.smallHeight) {
        maskY = this.config.smallHeight - this.config.maskHeight
      }
      console.log(maskX, maskY)
      this.maskStyle.top = maskY + 'px'
      this.maskStyle.left = maskX + 'px'
      this.bigStyle.backgroundPosition = -maskX * this.scale + 'px ' + -maskY * this.scale + 'px'
    },
    leaveHandle () {
      this.isShow = false
    }
  }
}
</script>
<style scoped>
.pic-zoom {
  width: 100%;
  height: 100%;
  position: relative;
}
.pic-zoom .big {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #DFDFDF;
    top: 0;
    transform: translateX(100%);
    margin-left: 10px;
    z-index: 999
  }
.pic-zoom .small {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: move;
}
.pic-zoom .small img {
  max-width: 100%;
  max-height: 100%;
}
.pic-zoom .small .mask {
  position: absolute;
}
</style>
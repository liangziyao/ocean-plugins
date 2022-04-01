<template>
  <!-- 轮播图 -->
  <oc-swiper
    class="shop"
    :imgArr="config.imgArr"
    @onSlideChange="config.onSlideChange"
    @getSwiperInstance="config.getSwiperInstance"
  ></oc-swiper>
  <!-- FB公共主页 -->
  <oc-fbfans
    class="fb"
    :fanSrc="'https://www.facebook.com/facebook'"
    :appId="'4938830502830980'"
  ></oc-fbfans>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  setup() {
    const config = {
      imgArr: [
        "https://events.gm99.com/sgbyyy/img/01.jpg?15948c6f",
        "https://events.gm99.com/sgbyyy/img/02.jpg?7991568c",
        "https://events.gm99.com/sgbyyy/img/03.jpg?e49ee72d",
        "https://events.gm99.com/sgbyyy/img/04.jpg?c1e775cb",
        "https://events.gm99.com/sgbyyy/img/05.jpg?4306d1c1",
      ],
      onSlideChange: (activeIndex) => {
        console.log(activeIndex);
      },
      getSwiperInstance: (swiper) => {
        console.log(swiper);
        swiper.update();
      },
    };
    return {
      config,
    };
  },
};
</script>

<style scoped>
.shop {
  width: 600px;
  height: auto;
  margin: auto;
}
.fb {
  width: 340px;
  height: 500px;
  margin: auto;
}
</style>

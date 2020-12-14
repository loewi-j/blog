<template>
  <div class="next">
    <img :src=img alt="">
  </div>
</template>

<script>
import top from 'assets/img/common/next.png';

export default {
  name: "Next",
  data() {
    return {
      img: top
    }
  }
}
</script>

<style scoped>
  .next {
    position: fixed;
    right: 25px;
    bottom: 55px;
  }

  .next img {
    width: 43px;
    height: 43px;
  }
</style>

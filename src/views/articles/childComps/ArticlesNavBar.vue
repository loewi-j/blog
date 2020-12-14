<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg">
    </div>
    <div slot="center" class="title">
      <div class="title-item">
        {{title}}
      </div>
    </div>
  </nav-bar>
</template>

<script>

import NavBar from "../../../components/common/navbar/NavBar";

export default {
  name: "ArticlesNavBar",
  components: {
    NavBar
  },
  props: {
    title: {
      type: String,
    }
  },
  data() {
    return {

    }
  },
  methods: {
    backClick() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 18px;
    font-weight: 550;
    color: var(--color-high-text);
  }

  .title-item {
    flex: 1;
  }

  .back img {
    margin-top: 11px;
  }
</style>

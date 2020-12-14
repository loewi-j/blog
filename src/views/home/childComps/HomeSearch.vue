<template>
  <div class="home-search bar7">
    <div class="box">
      <input type="text" placeholder="关键词" ref="searchInput">
      <button @click="searchClick"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSearch",

  methods: {
    searchClick() {
      this.$emit("searchClick", this.$refs.searchInput.value)
    }
  }
}
</script>

<style scoped>
.home-search {
  padding: 10px 0;
  font-size: 15px;
}

.box {
  position: relative;
  width: 88%;
  margin: 0 auto;
  height: 42px;
}

input, button {
  border: none;
  outline: none;
}

input {
  width: 100%;
  height: 42px;
  padding-left: 13px;
}

button {
  height: 42px;
  width: 42px;
  cursor: pointer;
  position: absolute;
  background: none;
  right: 12px;
}

.home-search input {
  width: 50%;
  border-radius: 42px;
  border: 2px solid var(--color-tint);
  transition: .3s linear;
  float: right;
}

.home-search input:focus {
  width: 100%;
}

.home-search button:before {
  content: "搜索";
  color: #324b4e;
}

</style>

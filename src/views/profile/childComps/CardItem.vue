<template>
  <div>
    <li >
      <p>{{item}}</p>
      <span>{{item}}</span>
    </li>
    <span class="right-lines"></span>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
li {
  margin-left: 15px;
  line-height: 25px;
  text-align: center;
}

li:last-child {
  border-right: none;
}

li p {
  color: var(--color-high-text);
  font-size: 15px;
}

li span {
  /*color: var(--color-tint);*/
  font-size: 15px;
}

.right-lines{
  height: 18px;
  margin-top: 13px;
  margin-left: 23px;
  border: 0.01rem solid var(--color-tint);
}
</style>

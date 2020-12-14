<template>
  <div class="info-card">
    <ul>
      <li >
        <p>{{infos.博客数}}</p>
        <span>博客数</span>
      </li>
      <span class="right-lines"></span>
      <li >
        <p>{{infos.今日浏览量}}</p>
        <span>今日浏览量</span>
      </li>
      <span class="right-lines"></span>
      <li >
        <p>{{infos.垃圾数}}</p>
        <span>垃圾数</span>
      </li>
    </ul>
  </div>
</template>

<script>
import CardItem from "./CardItem";
export default {
  name: "InfoCard",
  components: {CardItem},
  props: {
    infos: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>

.info-card{
  position: relative;
  top: -70px;
  width: 85%;
  margin: 0 auto;
  padding: 20px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(88, 99, 148, 0.3);
}

ul{
  list-style:none;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: center;
  margin-top: 5%;
}

ul li {
  margin-left: 15px;
  line-height: 25px;
  text-align: center;
}

ul li:last-child {
  border-right: none;
}

ul li p {
  color: var(--color-high-text);
  font-size: 15px;
}

ul li span {
  /*color: var(--color-tint);*/
  font-size: 15px;
}

.right-lines{
  height: 25px;
  margin-top: 13px;
  margin-left: 23px;
  border: 0.03rem solid var(--color-tint);
}

</style>

<template>
  <div>
    <span v-for="(item, index) in getTagList" :class="index%2===0?'even':'odd'" >{{item}}</span>
  </div>
</template>

<script>
export default {
  name: 'ArticleTags',
  props: {
    tags: {
      type: String,
      default() {
        return ""
      }
    }
  },
  data() {
    return {
      tagList: []
    }
  },
  computed: {
    getTagList() {
      return this.tagList = this.tags.split(' ')
    }
  }
}
</script>

<style>

  .odd, .even {
    font-size: 11px;
    margin-left: 5px;
    border-radius: 5px;
    padding: 5px;
  }

  .odd {
    background-color: rgba(113, 168, 225, 0.4);
  }
  .even {
    background-color: rgba(40, 124, 225, 0.4);
  }

</style>

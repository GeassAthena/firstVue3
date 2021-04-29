<template>
  <div class="hello">Hello World VUE3</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // 已启用类型推断
  created () {
    console.log('created....')
  }
})
</script>

<style scoped lang="less">
.hello {
  color: red;
}
</style>
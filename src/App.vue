<script setup>
import { ref } from 'vue'
const title = ref('Hello World')

// const obj = {
//   foo: { bar: '哈哈' },
// }
// console.log(obj.foo?.bar)
</script>

<script>
/* eslint-disable vue/one-component-per-file */
// import { defineComponent } from 'vue'

// const Child = defineComponent({
//   name: 'Child',
//   render() {
//     return <h1>JSX Component</h1>
//   },
// })

// export default defineComponent({
//   components: { Child },
// })
</script>

<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <div class="text">text</div>
  </div>
</template>

<style lang="scss" scoped>
$text-color: blue;
.text {
  color: $text-color;
}
</style>

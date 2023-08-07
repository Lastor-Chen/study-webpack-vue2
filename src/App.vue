<script setup>
import { ref } from 'vue'
import mySvg from '@/assets/file-svg.svg'
import testImg from '@/assets/test.png'

const title = ref('Hello World')

// use js ES6+
const obj = {
  foo: 'bar',
}
console.log(null ?? obj?.foo)
</script>

<script>
import { defineComponent } from 'vue'

// use JSX
const JsxEl = defineComponent({
  name: 'Child',
  render() {
    return <h1>JSX Component</h1>
  },
})

export default defineComponent({
  components: { JsxEl },
})
</script>

<template>
  <div class="container">
    <h1 class="title">
      {{ title }}
      <img :src="mySvg" alt="" />
    </h1>
    <div>
      <span class="text">text</span>
      <img :src="testImg" alt="" />
    </div>
    <JsxEl />
  </div>
</template>

<style lang="scss" scoped>
$text-color: blue;
.text {
  color: $text-color;
}
</style>

<template>
  <ul>
    <li v-for="article in articles" :key="article.id">あ</li>
  </ul>
</template>

<script>
export default {
  props:[
    'articles'
  ]
}
</script>
<template>
  <layout>
    <article-list :articles="[]"></article-list>
  </layout>
</template>

<script>
import Layout from "@/layouts/Layout";
import ArticleList from "@/components/ArticleList"
export default {
  data() {
    return {
      articles: []
    }
  },
  components: {
    Layout,
    ArticleList
  },
  created(){
    this.fetchData()
  },
  methods: {
    fetchData(){
      this.$http.get('/timeline')
      .then(function(res){
        console.log(res)
        this.articles = res.data
      }.bind(this))
    }
  },
};
</script>
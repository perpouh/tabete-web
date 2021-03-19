<template>
  <div>
    <input type="text" placeholder="メールアドレスもしくはユーザー名" class="input" v-model="email">
    <input type="password" placeholder="パスワード" class="input" v-model="password">
    <button class="button is-plain is-primary is-0 is-angle-right is-strong" @click="signin">送信</button>
  </div>
</template>

<script>
// import Layout from "./layouts/NoSignLayout";
export default {
  data() {
    return {
        email: "",
        password: ""
    };
  },
  components: {
    // Layout,
  },
  methods: {
    signin() {
      this.$http.post(`/auth/sign_in`, {email: this.email, password: this.password})
      .then(function(res){
        this.login(res.headers)
        this.$router.push('/')
      }.bind(this))
      .catch(function (error) {
        console.log(error)
      }.bind(this))
    }
  },
};
</script>
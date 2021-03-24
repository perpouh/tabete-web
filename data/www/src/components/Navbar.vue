<template>
  <ul class="navbar">
    <li class="navbar__item">
      <a href="#">
        <span class="navbar__item__icon"><font-awesome-icon icon="home"/></span><br class="sp-only"><span class="navbar__item__text">ホーム</span>
      </a>
    </li>
    <li class="navbar__item">
      <a href="#">
        <span class="navbar__item__icon"><font-awesome-icon icon="search"/></span><br class="sp-only"><span class="navbar__item__text">検索</span>
      </a>
    </li>
    <li class="navbar__item">
      <a href="#">
        <span class="navbar__item__icon"><font-awesome-icon icon="edit"/></span><br class="sp-only"><span class="navbar__item__text">投稿</span>
      </a>
    </li>
    <li class="navbar__item">
      <a href="#">
        <span class="navbar__item__icon"><font-awesome-icon icon="bell"/></span><br class="sp-only"><span class="navbar__item__text">通知</span>
      </a>
    </li>
    <li class="navbar__item">
      <a href="#">
        <span class="navbar__item__icon"><font-awesome-icon icon="cog"/></span><br class="sp-only"><span class="navbar__item__text">設定</span>
      </a>
    </li>
  </ul>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'Navbar',
  components:{
    FontAwesomeIcon
  }
}
</script>
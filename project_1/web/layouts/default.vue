<template>
  <v-app app>
    <main-menu/>
    <alt/>
    <!-- <transition name="component-fade" mode="out-in"> -->
    <v-main>
      <menu-history class="mt-3 ml-4"/>
      <nuxt/>
    </v-main>
    <!-- </transition> -->
    <bottom-nav/>
  </v-app>
</template>

<script>
import mainMenu from '~/components/mainMenu'
import bottomNav from '~/components/bottom'
import alt from '~/components/cmn/alert'
import menuHistory from '~/components/menuHistory'
import { alert_mixin } from '~/components/mixin/alert_store'
export default {
  mixins: [alert_mixin],
  components:{
   mainMenu, alt, bottomNav, menuHistory,
  },
  data() {
    return {
      aaa: 'aaa',
      bbb: 'bbb',
    }
  },
  created() {
    //-------S
    // console.log('layout/default env : ', process.env.mode);
    // console.log('layout/default env : ', this.$config.mode);
    //nuxt.config.js랑 api/index.js는 env 값 제대로 읽는데 여기는 왜 .env로만 읽는지 모르겠다.
    //-------E

    const theme = localStorage.getItem('theme');
    if (theme === null) {
      this.$vuetify.theme.dark = true;
      localStorage.setItem('theme', 'light');
    } else {
      this.$vuetify.theme.dark = (theme === 'dark' ? true : false);
    }
  }
}
</script>

<style>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .5s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}

/* ======== 스크롤바 CSS =========== */
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
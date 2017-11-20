<template>
  <div id="app">
    <!-- <Loading></Loading> -->
    <NavHeader></NavHeader>
    <router-view></router-view>
    <NavFooter v-show="Footer"></NavFooter>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue'
import NavFooter from './components/Footer.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'build',
  computed:mapGetters([
    'Footer'
  ]),
  watch: {
    $route(to,from){
      console.log(to.path)
      if (to.path==='/Parks'){
        this.$store.dispatch('HideFoot')
      } else {
        this.$store.dispatch('ShowFoot')
      }
    }
  },
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style>
#app {
  font-family: Matterhorn, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  font-weight: normal;
  position: relative;
}
a{
  color: #fff;
}
u{
  text-decoration: none;
}
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>

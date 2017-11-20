<template>
    <div class="GMenu" v-show="!Login">
        <MGMenuBody></MGMenuBody>
        <div class="menu">
            <button class="MGMenuBtn" @click="MGMenuBodyToggle()"></button>                    
            <ul class="global_menu">
                <span class="menu_bar_left">
                    <router-link class="SG" to="/SG" tag="li" active-class="active">
                        <a href="javascript:;">Singapore</a>
                    </router-link>
                    <router-link to="/Movies" tag="li" active-class="active">
                        <a href="javascript:;">Movies</a>
                    </router-link>
                    <router-link to="/Video" tag="li" active-class="active">
                        <a href="javascript:;">Video</a>
                    </router-link>
                </span>
                <span class="menu_bar_right">
                    <router-link to="/TV" tag="li" active-class="active">
                        <a href="javascript:;">TV</a>
                    </router-link>
                    <router-link to="/Characters" tag="li" active-class="active">
                        <a href="javascript:;">Characters</a>
                    </router-link>
                    <router-link to="/Games" tag="li" active-class="active">
                        <a href="javascript:;">Games</a>
                    </router-link>
                    <router-link to="/Apps" tag="li" active-class="active">
                        <a href="javascript:;">Apps</a>
                    </router-link>
                    <router-link to="/Products" tag="li" active-class="active">
                        <a href="javascript:;">Products</a>
                    </router-link>
                    <router-link to="/Events" tag="li" active-class="active">
                        <a href="javascript:;">Events</a>
                    </router-link>
                    <router-link to="/Parks" tag="li" active-class="active">
                        <a href="javascript:;">Parks</a>
                    </router-link>
                </span>
            </ul>
            <ul class="user">
                    <router-link to="/Login" tag="li" active-class="active" class="login" >
                        <a href="/Login">Login</a>
                    </router-link>
            </ul>
            <form action="" class="search" method="get">
                <input type="text" placeholder="Search">
            </form>
            <button @click="searchBtnToggle=!searchBtnToggle" class="searchToggle" v-show="!searchBtnToggle">
                <i class="icon-search"></i>
            </button>
            <div class="mobile_wrap" v-show="searchBtnToggle">
                <form action="" class="mobile-search" method="get">
                    <input type="text" placeholder="Search" class="searchContent">
                    <button @click="searchBtnToggle=!searchBtnToggle" class="cancelBtn">CANCEL</button>
                </form>
                <div class="search-mark" v-show="searchBtnToggle" @click="searchBtnToggle=!searchBtnToggle"></div>
            </div>
        </div>
    </div>
</template>
<script>
import MGMenuBody from './MobileGlobalMenuBody'
import {mapGetters} from 'vuex'

export default {
    data(){
        return {
            searchBtnToggle:false
        }
    },
    computed:mapGetters([
        'Login'
    ]),
    methods: {
        MGMenuBodyToggle(){
            this.$store.dispatch('MGMenuBodyToggleBtn')
        },
        LoginToggle(){
            this.$store.dispatch('LoginToggleBtn')
        }
    },
    components: {
        MGMenuBody
    }
}
</script>
<style scoped>
.GMenu {
    width: 100%;
    overflow: hidden;
}
 .MGMenuBtn{
     padding:1px 6px;
     background: transparent;
     background-image: url(../../assets/images/MToggleBtn.png);
     background-repeat: no-repeat;
     background-position: center center;
     width: 60px;
     height: 60px;
     display: block;
     box-shadow: 1px 0 rgba(255,255,255,0.1);
     position: relative;
     border: none;
     display: none;
 }
 .MGMenuBtn>button::after{
     content: "";
     display: block;
     width: 1px;
     height: 100%;
     border-right: 1px solid black;
     position: absolute;
     right: 0;
     top: 0;
 }
 .global_menu>.menu_bar_left>li.SG {
     display: none;
 }
 .global_menu>.menu_bar_left>li.SG>a {
     padding: 7px 20px 10px 68px;
     font-size: 20px;
     line-height: 36px;
     background-image: url(../../assets/images/SG-logo.png);
     background-position: 0px 12px;
     background-size: 69px;
     background-repeat: no-repeat;
  }
 .menu {
    background: #232b2d;
    display: flex;
    padding: 0 24px;
    line-height: 16px;
  }
  .global_menu {
    display: flex;
    flex: 1 1 auto;
    padding-left: 129px;

  }
  .global_menu>.menu_bar_left {
    display: flex;
    padding-left: 4px;
    flex: 1 1 auto;
  }
  .global_menu>.menu_bar_left>li {
  }
  .global_menu>.menu_bar_left a {
    padding-left:20px;
    display: block;
    font-weight: 400;
    font-size:15.4px;
    color: #fff;
    padding:12px 12px 10px 39px;
    background-size: 17px;
    background-repeat: no-repeat;
    background-position: 12px center;
  }
  .global_menu>.menu_bar_left>li:nth-last-of-type(2)>a{
    background-image: url(../../assets/images/light-movies-small.png);
      
  }
  .global_menu>.menu_bar_left>li:nth-last-of-type(2)>a:hover{
    background-color: #fff;
    background-image: url(../../assets/images/dark-movies-small.png);
    color: #232b2d;
  }
  .global_menu>.menu_bar_left>li:nth-last-of-type(1)>a{
    background-image: url(../../assets/images/light-video-small.png);

  }
  .global_menu>.menu_bar_right {
    width: 100%;
    display: flex;
    padding-right: 14px;
    flex: 1 1 0;
  }
  .global_menu>.menu_bar_right>li {

  }
  .global_menu>.menu_bar_right>li a {
    display: block;
    font-size: 15.4px;
    font-weight: 400;
    line-height: 16.94px;
    padding: 12px 14px 10px;
  }
  .user {

  }
  .user>li {
      
  }
  .user>li>a {
    display: block;
    font-size: 15.4px;
    font-weight: 400;
    padding: 12px 22px 10px;
    text-decoration: none;
    position: relative;
  }
  .user>li>a::after {
      content: "";
      display: block;
      height: 100%;
      width: 1px;
      border-left: 1px solid #606060;
      position: absolute;
      left: 0;
      top: 0;
      transform: scaleX(.5);
  }
  .search {
      line-height: 15.4px;
  }
  .search>input {
    padding:5px 32px 4px 11px;
    margin-top:6px;
    margin-bottom: 1px;
    border:none;
    line-height: 16px;
    border-radius: 3px;
    background-image: url(../../assets/images/search.png);
    background-repeat: no-repeat;
    background-position: 192px 4px; 
    background-size: 16px;
  }
  .mobile_wrap {
      display: none;
  }
@media screen and (max-width: 1024px) {
  .menu {
      padding-left: 0px;
  }
  .MGMenuBtn {
      display: block;
  }
  .global_menu>.menu_bar_left>li,.global_menu>.menu_bar_right,.user,.search {
      display: none;
  }
  .global_menu>.menu_bar_left>li.SG {
      display: block;
  }
  .global_menu {
      padding-left: 30px;
  }
  .searchToggle {
    width: 60px;
    height: 60px;
    padding: 19px;
    position: relative;
    background: rgb(35, 43, 45);
    border:none;
    margin-right: -24px;
  }
  .searchToggle::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
    border-left: 1px solid #000;
    transform: scaleX(.5);
  }
  .searchToggle>.icon-search {
    background-image: url(../../assets/images/icon-search.png);
    background-position: 0px 0px;
    background-size: 22px;
    background-repeat: no-repeat;
    width: 22px;
    height: 22px;
    display: block;
  }
  .mobile_wrap {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(35, 43, 45, .5);
    z-index: 10003;
  }
  .mobile_wrap>.mobile-search {
      padding: 10px;
      background-color: RGB(64,72,75);
      display: flex;
  }

  .mobile_wrap>.mobile-search>.searchContent {
      flex: 1 1 auto;
      padding: 12px 84px 8px 38px;
      font-size: 19.2px;
      color: rgba(0,0,0,0.7);
      box-shadow: none;
      font-weight: 400;
      width: 100%;
      height: 2em;
      border-radius: 2px;
      border-width: none;
      background-image: url(../../assets/images/icon-search.png);
      background-position: 7px -24px;
      background-repeat: no-repeat;
      background-size: 26px;
  }
  .mobile_wrap>.mobile-search>.cancelBtn {
    vertical-align: top;
    padding: 10px 20px;
    color: #fff;
    font-size: 1em;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  .mobile_wrap>.search-mark {
    width: 100%;
    height: 100%;
    background: RGB(25,28,30);
    z-index: 10002;
  }
}
</style>
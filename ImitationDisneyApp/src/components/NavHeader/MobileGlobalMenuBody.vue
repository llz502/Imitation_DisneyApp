<template>
    <div class="MGMenuBody" v-show="Mmenubody"> 
        <div class="MenuBodyInner">
            <div class="search_wrap">
                <form action="method" class="search">
                    <input type="text" placeholder="Search">
                </form>
            </div>
            <ul class="mobile_menu_body">
                <dl>
                    <router-link to="/Login" tag="dt" active-class="active" class="Login" >
                        <a href="javascript:;">Login</a>
                    </router-link>
                    <router-link to="/SG" tag="dt" active-class="active" class="home" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Disney.sg</a>
                    </router-link>
                    <router-link to="/Video" tag="dt" active-class="active" class="video" @click.native="video=!video">
                        <a href="javascript:;">Video</a>
                    </router-link>
                    <router-link to="/Video" tag="dd" active-class="active" v-show="video" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Movies</a>
                    </router-link>
                    <router-link to="/Video" tag="dd" active-class="active" v-show="video" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">TV</a>
                    </router-link>
                    <router-link to="/Movies" tag="dt" active-class="active" class="movies" @click.native="movies=!movies">
                        <a href="javascript:;">Movies</a>
                    </router-link>
                    <router-link to="/Movies" tag="dd" active-class="active" v-show="movies" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">In Cinemas</a>
                    </router-link>
                    <router-link to="/Movies" tag="dd" active-class="active" v-show="movies" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">At Home</a>
                    </router-link>
                    <router-link to="/Movies" tag="dd" active-class="active" v-show="movies" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">On Demand</a>
                    </router-link>
                    <router-link to="/Movies" tag="dd" active-class="active" v-show="movies" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">All Movies</a>
                    </router-link>
                </dl>
                <dl>
                    <router-link to="/TV" tag="dt" active-class="active" class="tv" @click.native="tv=!tv">
                        <a href="javascript:;">TV</a>
                    </router-link>
                    <router-link to="/TV" tag="dd" active-class="active" v-show="tv" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Disney Channel</a>
                    </router-link>
                    <router-link to="/TV" tag="dd" active-class="active" v-show="tv" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Disney XD</a>
                    </router-link>
                    <router-link to="/TV" tag="dd" active-class="active" v-show="tv" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Disney Junior</a>
                    </router-link>
                    <router-link to="/Characters" tag="dt" active-class="active" class="characters" @click.native="characters=!characters">
                        <a href="javascript:;">Characters</a>
                    </router-link>
                    <router-link to="/Characters" tag="dd" active-class="active" v-show="characters" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Mickey & Friends</a>
                    </router-link>
                    <router-link to="/Characters" tag="dd" active-class="active" v-show="characters" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Disney Princess</a>
                    </router-link>
                    <router-link to="/Characters" tag="dd" active-class="active" v-show="characters" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Winnie the Pooh</a>
                    </router-link>
                    <router-link to="/Characters" tag="dd" active-class="active" v-show="characters" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Cars</a>
                    </router-link>
                    <router-link to="/Characters" tag="dd" active-class="active" v-show="characters" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Frozen</a>
                    </router-link>
                </dl>
                <dl>
                    <router-link to="/Games" tag="dt" active-class="active" class="games" @click.native="games=!games">
                        <a href="javascript:;">Games</a>
                    </router-link>
                    <router-link to="/Games" tag="dd" active-class="active" v-show="games" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Online Games</a>
                    </router-link>
                    <router-link to="/Games" tag="dd" active-class="active" v-show="games" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Moblie Apps</a>
                    </router-link>
                    <router-link to="/Apps" tag="dt" active-class="active" class="apps" @click.native="apps=!apps">
                        <a href="javascript:;">Apps</a>
                    </router-link>
                    <router-link to="/Apps" tag="dd" active-class="active" v-show="apps" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Games</a>
                    </router-link>
                    <router-link to="/Apps" tag="dd" active-class="active" v-show="apps" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Stories & Puzzles</a>
                    </router-link>
                </dl>
                <dl>
                    <router-link to="/Products" tag="dt" active-class="active" class="products" @click.native="products=!products">
                        <a href="javascript:;">Products</a>
                    </router-link>
                    <router-link to="/Products" tag="dd" active-class="active" v-show="products" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">New!</a>
                    </router-link>
                    <router-link to="/Products" tag="dd" active-class="active" v-show="products" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Clothing</a>
                    </router-link>
                    <router-link to="/Products" tag="dd" active-class="active" v-show="products" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Toys</a>
                    </router-link>
                    <router-link to="/Products" tag="dd" active-class="active" v-show="products" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Tsum Tsum</a>
                    </router-link>
                    <router-link to="/Events" tag="dt" active-class="active" class="events" @click.native="events=!events">
                        <a href="javascript:;">Events</a>
                    </router-link>
                    <router-link to="/Events" tag="dd" active-class="active" v-show="events" @click.native="MGMenuBodyToggle()">
                        <a href="javascript:;">Parks & Travel</a>
                    </router-link>
                </dl>
            </ul>
        </div>
        <div class="MenuBody_Mask" @click="MGMenuBodyToggle()"></div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  data(){
      return {
        video:false,
        movies:false,
        tv:false,
        characters:false,
        games:false,
        apps:false,
        products:false,
        events:false
      }
  },
  methods: {
    MGMenuBodyToggle(){
        this.$store.dispatch('MGMenuBodyToggleBtn')
    }
  },
  computed:mapGetters([
    'Mmenubody'
  ])
}
</script>
<style scoped>
.MGMenuBody,.MenuBodyInner,.MenuBody_Mask {
    float: left;
}
.MGMenuBody {
    position: relative;
    width: 260px;
    z-index: 999;
    background: #fff;
}
.MGMenuBody::after {
    content: "";
    display: block;
    clear: both;
}
.MenuBodyInner {
}
.MenuBodyInner>.search_wrap {
    
}
.MenuBodyInner>.search_wrap>.search {
    padding: 10px 42px 18px 5px;
    background: #1f2124;
    background: linear-gradient(to bottom, #2a2f32, #131315);
}
.MenuBodyInner>.search_wrap>.search>input {
    padding: 5px 32px 4px 11px;
    margin-top:6px;
    margin-bottom: 1px;
    font-size: 14px;
    color: #222;
    line-height: 16.8px;
    border-radius: 3px;
    background: url(../../assets/images/search.png) 194px 4px no-repeat;
    background-color: #fff;
    background-size: 16px;
    border:none;
}
.MenuBody_Mask {
    position: absolute;
    left: 100%;
    top: 0;
    width: 100%;
    width:-moz-calc(100vw - (260px)); 
    width:-webkit-calc(100vw - (260px)); 
    width: calc(100vw - (260px));
    height: 100%;
    background: rgba(0, 0, 0,.5);
}
.menuToggle {
}
.mobile_menu_body {

}
.mobile_menu_body>dl {

}
.mobile_menu_body>dl>dt {
    
}
.mobile_menu_body>dl>dt>a {
    text-align: left;
    display: block;
    font-size: 17.6px;
    line-height: 19.36px;
    color: #303030;
    padding: 20px 18px 20px 46px;
    position: relative;
    border-top: 1px solid rgba(255,255,255,0.25);
    border-bottom: 1px solid rgba(0,0,0,0.1);
}
.mobile_menu_body>dl>dd {

}
.mobile_menu_body>dl>dd>a {
    display: block;
    font-size: 15.4px;
    text-align: left;
    padding: 10px 18px 10px 46px;
    color: #252525;
}
.mobile_menu_body .Login {
    background: rgba(44, 5, 107, 0.9);
}
.mobile_menu_body .Login a{
    color: #fff;
    font-weight: 600;
}
/* 图标 */
.mobile_menu_body .home {
    background-image: url(../../assets/images/home.png);
    background-repeat: no-repeat;
    background-position: 12px center;
}
.mobile_menu_body .video {
    background-image: url(../../assets/images/dark-video-small.png);
    background-repeat: no-repeat;
    background-position: 12px center;
}
.mobile_menu_body .movies {
    background-image: url(../../assets/images/dark-movies-small.png);
    background-repeat: no-repeat;
    background-position: 19px center;
}
.mobile_menu_body .tv {
    background-image: url(../../assets/images/TV.png);
    background-repeat: no-repeat;
    background-position: 12px center;
}
.mobile_menu_body .characters {
    background-image: url(../../assets/images/characters.png);
    background-repeat: no-repeat;
    background-position: 12px center;
}
.mobile_menu_body .games {
    background-image: url(../../assets/images/games.png);
    background-repeat: no-repeat;
    background-position: 12px center;
}
.mobile_menu_body .apps {
    background-image: url(../../assets/images/Apps.png);
    background-repeat: no-repeat;
    background-position: 12px center;
}
.mobile_menu_body .products {
    background-image: url(../../assets/images/products.png);
    background-repeat: no-repeat;
    background-position: 12px center;
}
.mobile_menu_body .events {
    background-image: url(../../assets/images/events.png);
    background-repeat: no-repeat;
    background-position: 12px center;
}
</style>
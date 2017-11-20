<template>
    <div class="NavWrap" v-show="!Login">
        <div class="mobile_menu_mask"></div>   
        <transition name="fade">
            <ul class="menu_body" v-show="menuBtn" @click="activeBtn()">
                <dl>
                    <router-link to="/SG" tag="dt" active-class="active" class="home">
                        <a href="javascript:;">Disney.sg</a>
                    </router-link>
                    <router-link to="/Video" tag="dt" active-class="active" class="video">
                        <a href="javascript:;">Video</a>
                    </router-link>
                    <router-link to="/Video" tag="dd" active-class="active">
                        <a href="javascript:;">Movies</a>
                    </router-link>
                    <router-link to="/Video" tag="dd" active-class="active">
                        <a href="javascript:;">TV</a>
                    </router-link>
                    <router-link to="/Movies" tag="dt" active-class="active" class="movies">
                        <a href="javascript:;">Movies</a>
                    </router-link>
                    <router-link to="/Movies" tag="dd" active-class="active">
                        <a href="javascript:;">In Cinemas</a>
                    </router-link>
                    <router-link to="/Movies" tag="dd" active-class="active">
                        <a href="javascript:;">At Home</a>
                    </router-link>
                    <router-link to="/Movies" tag="dd" active-class="active">
                        <a href="javascript:;">On Demand</a>
                    </router-link>
                    <router-link to="/Movies" tag="dd" active-class="active">
                        <a href="javascript:;">All Movies</a>
                    </router-link>
                </dl>
                <dl>
                    <router-link to="/TV" tag="dt" active-class="active" class="tv">
                        <a href="javascript:;">TV</a>
                    </router-link>
                    <router-link to="/TV" tag="dd" active-class="active">
                        <a href="javascript:;">Disney Channel</a>
                    </router-link>
                    <router-link to="/TV" tag="dd" active-class="active">
                        <a href="javascript:;">Disney XD</a>
                    </router-link>
                    <router-link to="/TV" tag="dd" active-class="active">
                        <a href="javascript:;">Disney Junior</a>
                    </router-link>
                    <router-link to="/Characters" tag="dt" active-class="active" class="characters">
                        <a href="javascript:;">Characters</a>
                    </router-link>
                    <router-link to="/Characters" tag="dd" active-class="active">
                        <a href="javascript:;">Mickey & Friends</a>
                    </router-link>
                    <router-link to="/Characters" tag="dd" active-class="active">
                        <a href="javascript:;">Disney Princess</a>
                    </router-link>
                    <router-link to="/Characters" tag="dd" active-class="active">
                        <a href="javascript:;">Winnie the Pooh</a>
                    </router-link>
                    <router-link to="/Characters" tag="dd" active-class="active">
                        <a href="javascript:;">Cars</a>
                    </router-link>
                    <router-link to="/Characters" tag="dd" active-class="active">
                        <a href="javascript:;">Frozen</a>
                    </router-link>
                </dl>
                <dl>
                    <router-link to="/Games" tag="dt" active-class="active" class="games">
                        <a href="javascript:;">Games</a>
                    </router-link>
                    <router-link to="/Games" tag="dd" active-class="active">
                        <a href="javascript:;">Online Games</a>
                    </router-link>
                    <router-link to="/Games" tag="dd" active-class="active">
                        <a href="javascript:;">Moblie Apps</a>
                    </router-link>
                    <router-link to="/Apps" tag="dt" active-class="active" class="apps">
                        <a href="javascript:;">Apps</a>
                    </router-link>
                    <router-link to="/Apps" tag="dd" active-class="active">
                        <a href="javascript:;">Games</a>
                    </router-link>
                    <router-link to="/Apps" tag="dd" active-class="active">
                        <a href="javascript:;">Stories & Puzzles</a>
                    </router-link>
                </dl>
                <dl>
                    <router-link to="/Products" tag="dt" active-class="active" class="products">
                        <a href="javascript:;">Products</a>
                    </router-link>
                    <router-link to="/Products" tag="dd" active-class="active">
                        <a href="javascript:;">New!</a>
                    </router-link>
                    <router-link to="/Products" tag="dd" active-class="active">
                        <a href="javascript:;">Clothing</a>
                    </router-link>
                    <router-link to="/Products" tag="dd" active-class="active">
                        <a href="javascript:;">Toys</a>
                    </router-link>
                    <router-link to="/Products" tag="dd" active-class="active">
                        <a href="javascript:;">Tsum Tsum</a>
                    </router-link>
                    <router-link to="/Events" tag="dt" active-class="active" class="events">
                        <a href="javascript:;">Events</a>
                    </router-link>
                    <router-link to="/Events" tag="dd" active-class="active">
                        <a href="javascript:;">Parks & Travel</a>
                    </router-link>
                </dl>
            </ul>
        </transition>
        <div class="menu_btn_wrap" :class="{btn_position:btn_active}">
            <button class="menu_btn" @click="activeBtn()">
                <u>Disney SG</u>
                <span class="arrow"></span>
            </button>
        </div> 
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    data(){
        return {
            menuBtn:false,
            btn_active:false
        }
    },
    computed:mapGetters([
        'Login'
    ]),
    methods:{
        activeBtn(){
            this.menuBtn=!this.menuBtn
            this.btn_active=!this.btn_active
        }
    }
}
</script>
<style scoped>

.fade-enter-active{
    transition: all .4s linear 0s;
}
.fade-enter{
    transform: translateY(-100%);
    opacity: 1;
}
a {
    color: #000;
    display: block;
}
.NavWrap {
    position: absolute;
    top:0px;
    left:0px;
    width: 100%;
    z-index: 1000;
}
.menu_body {
    max-width: 100%;
    padding: 2px 12px 50px;
    background-image: linear-gradient(rgb(249, 249, 249), rgb(234, 234, 234));
    text-align: left;
    position: relative;
}
.menu_body::after {
    display: block;
    content: "";
    clear: both;
}
.menu_body>dl {
    width: 25%;
    float: left;
}
.menu_body>dl>dt {
    margin-top: 27px;
}
.menu_body>dl>dt>a {
    font-size: 22px;
    font-weight: 400;
    line-height: 1.1;
    padding:6px 16px 6px 48px;
}

.menu_body>dl>dt>a:hover {
    color: #1786eb;
}
.menu_body>dl>dd {

}
.menu_body>dl>dd>a {
    color: #555;
    font-size: 17.6px;
    padding:6px 16px 6px 48px;
}
.menu_body>dl>dd>a:hover {
    color: #1786eb;
}
/* menu_btn */
.menu_btn_wrap {
    position: absolute;
    top: 0px;
    left: 24px;
    background-color: #191D1F;
    border-radius: 2px;
    transition: all .4s linear 0s;
}
.btn_position {
    top: 100%;
}
.menu_btn_wrap>.menu_btn {
    padding: 14px 48px 13px 16px;
    display: block;
    font-size: 14px;
    line-height: 17px;
    background: #191D1F;
    outline: none;
    border:none;
    color: #fff;
    font-weight: 600;
    position: relative;
    cursor: pointer;
}
.menu_btn_wrap>.menu_btn::after{
    content: "";
    display: inline-block;
    position: absolute;
    right: 20px;
    bottom: 10px;
    width: 14px;
    height: 14px;
    border-right: 3px solid #108FF7;
    border-bottom: 3px solid #108FF7;
    border-top: 3px solid transparent;
    border-left: 3px solid transparent;
    border-radius: 3px;
    -webkit-transform: rotate(-135deg) skew(3deg, 3deg);
    -moz-transform: rotate(-135deg) skew(3deg, 3deg);
    -ms-transform: rotate(-135deg) skew(3deg, 3deg);
    -o-transform: rotate(-135deg) skew(3deg, 3deg);
    transform: rotate(-135deg) skew(3deg, 3deg);
}
/* 图标 */
.menu_body .home {
    background-image: url(../../assets/images/home.png);
    background-repeat: no-repeat;
    background-position: 12px center;
}
.menu_body .video {
    background-image: url(../../assets/images/dark-video-small.png);
    background-repeat: no-repeat;
    background-position: 12px center;
}
.menu_body .movies {
    background-image: url(../../assets/images/dark-movies-small.png);
    background-repeat: no-repeat;
    background-position: 12px center;
}
.menu_body .tv {
    background-image: url(../../assets/images/TV.png);
    background-repeat: no-repeat;
    background-position: 12px center;
}
.menu_body .characters {
    background-image: url(../../assets/images/characters.png);
    background-repeat: no-repeat;
    background-position: 12px center;
}
.menu_body .games {
    background-image: url(../../assets/images/games.png);
    background-repeat: no-repeat;
    background-position: 12px center;
}
.menu_body .apps {
    background-image: url(../../assets/images/Apps.png);
    background-repeat: no-repeat;
    background-position: 12px center;
}
.menu_body .products {
    background-image: url(../../assets/images/products.png);
    background-repeat: no-repeat;
    background-position: 12px center;
}
.menu_body .events {
    background-image: url(../../assets/images/events.png);
    background-repeat: no-repeat;
    background-position: 12px center;
}
@media screen and (max-width: 1024px) {
    .menu_btn_wrap {
        display: none;
    }

}
</style>
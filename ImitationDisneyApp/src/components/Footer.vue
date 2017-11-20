<template>
    <div class="NavFooter" v-show="!Login">
        <ul class="menu_body">
                <dl>
                    <router-link to="/SG" tag="dt" active-class="active" class="home">
                        <a href="javascript:;">Disney.sg</a>
                    </router-link>
                    <router-link to="/Video" tag="dt" active-class="active" class="video">
                        <a href="javascript:;">Video</a>
                    </router-link>
                    <router-link to="/Movies" tag="dd" active-class="active">
                        <a href="javascript:;">Movies</a>
                    </router-link>
                    <router-link to="/TV" tag="dd" active-class="active">
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
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    computed:mapGetters([
        'Login'
    ]),
    watch:{
        // $route(to){
        //     if(to.path=='/Login'){
        //         this.$store.dispatch('LoginToggleBtn');
        //     }
        // }
    }
}
</script>
<style scoped>
.NavFooter {
    width: 100%;
    padding: 24px 30px 16px;
    margin-top: 100px;
    margin-bottom: 100px;
}
.NavFooter .menu_body {
    width: 100%;
    display: flex;
}
.NavFooter dl {
    flex: 1 0 0;
    border-right: 1px solid rgba(0,0,0,0.11);
    padding: 0 28px;
    border-radius: 2px;
    line-height: 1.2;
}
.NavFooter dl:nth-of-type(1) {
    border-left: 1px solid rgba(0,0,0,0.11);
}
.NavFooter dt {
    font-size: 22.4px;
}
.NavFooter dd {
    font-size: 14px;
}
.NavFooter a {
    display: block;
    color: #000;
    padding: 6px 0 10px;
}
.NavFooter a:hover {
    color: #F323B5;
}
</style>
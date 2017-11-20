<template>
    <div class="sg_Movie_wrap">
        <h2 class="title">Trailers & Clips</h2>
        <ul class="Movie_list" :class="{right,left}">
            <li>
                <router-link to="/Movie" tag="div" class="Movie" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img src="../../assets/images/Movie-clip1.jpeg" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Movie" tag="div" class="Movie" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img src="../../assets/images/Movie-clip2.jpeg" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Movie" tag="div" class="Movie" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img src="../../assets/images/Movie-clip3.jpg" alt="图片">
                        </div>
                    </a>
                </router-link>
            </li>
        </ul>
        <button class="Movie_left Movie_btn" v-show="right" @click="left=true">左</button>
        <button class="Movie_right Movie_btn" v-show="right" @click="left=false">右</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            left:true
        }
    },
    computed:{
        right(){
            return !this.left
        }
    }
}
</script>
<style scoped>
    .sg_Movie_wrap {
        width: 100%;
        overflow: hidden;
        position: relative;
        margin-top: 50px;
    }
    .sg_Movie_wrap .title {
        color: rgba(0,0,0,0.9);
        font-size: 24.8px;
        font-weight: bold;
        text-align: center;
        letter-spacing:-0.248px;
        padding-left: 20px;
    }
    .sg_Movie_wrap .Movie_list {
        width: 100%;
        zoom: 1;
        transition: transform 200ms ease-in-out;
    }
    .sg_Movie_wrap .Movie_list.left {
        transform: translateX(0px);
    }
    .sg_Movie_wrap .Movie_list.right {
        transform: translateX(-50%);
    }
    .sg_Movie_wrap .Movie_list::after {
        content: "";
        display: block;
        clear: both;
    }
    .sg_Movie_wrap li {
        float: left;
        zoom: 1;
        width: 100%;
    }
    .sg_Movie_wrap li::after {
        content: "";
        display: block;
        clear: both;
    }
    .sg_Movie_wrap .Movie{
        float: left;
        width: 33.33%;
        border-radius: 3px;
        padding: 20px 20px;
    }
    .sg_Movie_wrap a{
        width: 100%;
    }
    .sg_Movie_wrap .img_wrap{
        position: relative;
        transition: box-shadow 100ms;
        width: 100%;
        padding-top: 56.25%;
        background: #ddd;
        transition:  box-shadow 200ms ease;
    }
    .sg_Movie_wrap .Movie:hover .img_wrap{
        box-shadow: 0 0px 9px 9px rgba(0,0,0,0.75);
    }
    .sg_Movie_wrap img{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: transform 200ms ease;
        transform: scale(1);
        line-height: 200px;
    }
    .sg_Movie_wrap .Movie:hover img{
        transform: scale(1.03);
    }
    .sg_Movie_wrap .Movie_btn {
        position: absolute;
        top: 50%;
        transform: translateY(-.5);
        width: 48px;
        height: 60px;
        opacity: .4;
        border:none;
        outline: none;
        border-radius: 3px;
        background-color: rgba(241, 234, 234, 0.7);
        background-position: center;
        background-size: 34px 62px;
    }
    .sg_Movie_wrap .Movie_left {
        left: 30px;
        background-image: url(../../assets/images/arrow-next.png);
    }
    .sg_Movie_wrap .Movie_right {
        right: 30px;
        background-image: url(../../assets/images/arrow-prev.png);
    }

</style>
<template>
    <div class="sg_movie_wrap">
        <h2 class="title">New & Upcoming Movies</h2>
        <ul class="movie_list" :class="{right,left}">
            <li>
                <router-link v-for="{imgUrl,index} in imgUrls1" :key="index" to="/Movies" tag="div" class="movie" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img v-lazy="imgUrl" alt="图片">
                        </div>
                    </a>
                </router-link>
            </li>
            <li>
                <router-link v-for="{imgUrl,index} in imgUrls2" :key="index" to="/Movies" tag="div" class="movie" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img v-lazy="imgUrl" alt="图片">
                        </div>
                    </a>
                </router-link>
            </li>
        </ul>
        <button class="movie_left movie_btn" @click="left=true"></button>
        <button class="movie_right movie_btn" @click="left=false"></button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            left:true,
            imgUrls1:[
                'https://ooo.0o0.ooo/2017/11/27/5a1c2b1098b93.jpeg',
                'https://ooo.0o0.ooo/2017/11/27/5a1c2b10a557a.jpeg',
                'https://ooo.0o0.ooo/2017/11/27/5a1c2b110821a.jpeg',
                'https://ooo.0o0.ooo/2017/11/27/5a1c2b113fda2.jpeg'
            ],
            imgUrls2:[
                'https://ooo.0o0.ooo/2017/11/27/5a1c2b10a557a.jpeg',
                'https://ooo.0o0.ooo/2017/11/27/5a1c2b110821a.jpeg',
                'https://ooo.0o0.ooo/2017/11/27/5a1c2b115a4f6.jpeg',
                'https://ooo.0o0.ooo/2017/11/27/5a1c2b1160ab8.jpeg'
            ]
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
    .sg_movie_wrap {
        width: 100%;
        overflow: hidden;
        position: relative;
        margin-top: 50px;
    }
    .sg_movie_wrap .title {
        color: rgba(0,0,0,0.9);
        font-size: 24.8px;
        font-weight: bold;
        text-align: center;
        letter-spacing:-0.248px;
        padding-left: 20px;
    }
    .sg_movie_wrap .movie_list {
        width: 200%;
        zoom: 1;
        transition: transform 200ms ease-in-out;
    }
    .sg_movie_wrap .movie_list.left {
        transform: translateX(0px);
    }
    .sg_movie_wrap .movie_list.right {
        transform: translateX(-50%);
    }
    .sg_movie_wrap .movie_list::after {
        content: "";
        display: block;
        clear: both;
    }
    .sg_movie_wrap li {
        float: left;
        zoom: 1;
        width: 50%;
    }
    .sg_movie_wrap li::after {
        content: "";
        display: block;
        clear: both;
    }
    .sg_movie_wrap .movie{
        float: left;
        width: 25%;
        border-radius: 3px;
        padding: 20px 20px;
    }
    .sg_movie_wrap a{
        width: 100%;
        /* transition: transform 200ms;
        transform: scale(1); */
    }
    .sg_movie_wrap .img_wrap{
        position: relative;
        transition: box-shadow 100ms;
        width: 100%;
        padding-top: 150%;
        background: #ddd;
        transition:  box-shadow 200ms ease;
    }
    .sg_movie_wrap .movie:hover .img_wrap{
        box-shadow: 0 0 9px 9px rgba(0,0,0,0.75);
    }
    .sg_movie_wrap img{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: transform 200ms ease;
        transform: scale(1);
        line-height: 200px;
    }
    .sg_movie_wrap .movie:hover img{
        transform: scale(1.03);
    }
    .sg_movie_wrap .movie_btn {
        position: absolute;
        top: 50%;
        transform: translateY(-.5);
        width: 3.23%;
        height: 10.62%;
        opacity: .4;
        border:none;
        outline: none;
        border-radius: 3px;
        background-color: rgba(241, 234, 234, 0.7);
        background-position: center;
        background-size: 100% 100%;
    }
    .sg_movie_wrap .movie_left {
        left: 30px;
        background-image: url(../../assets/images/arrow-next.png);
    }
    .sg_movie_wrap .movie_right {
        right: 30px;
        background-image: url(../../assets/images/arrow-prev.png);
    }

</style>
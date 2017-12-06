<template>
    <div class="sg_Video_wrap">
        <h2 class="title">Trailers & Clips</h2>
        <ul class="Video_list" :class="{right,left}">
            <li>
                <router-link v-for="{imgUrl,index} in imgUrls1" :key="index" to="/Video" tag="div" class="Video" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img v-lazy="imgUrl" alt="图片">
                        </div>
                    </a>
                </router-link>
            </li>
            <li>
                <router-link v-for="{imgUrl,index} in imgUrls2" :key="index" to="/Video" tag="div" class="Video" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img v-lazy="imgUrl" alt="图片">
                        </div>
                    </a>
                </router-link>
            </li>
        </ul>
        <button class="Video_left Video_btn" v-show="right" @click="left=true">左</button>
        <button class="Video_right Video_btn" v-show="right" @click="left=false">右</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            left:true,
            imgUrls1:[
                "https://i.loli.net/2017/12/01/5a21080c46ff1.jpeg",
                "https://i.loli.net/2017/12/01/5a21080d61297.jpeg",
                "https://i.loli.net/2017/12/01/5a21080d758bf.jpeg"
            ],
            imgUrls2:[
                "https://i.loli.net/2017/12/01/5a21080da165c.jpeg",
                "https://i.loli.net/2017/12/01/5a21080f565eb.jpeg",
                "https://i.loli.net/2017/12/01/5a21081061b23.jpeg"
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
    .sg_Video_wrap {
        width: 100%;
        overflow: hidden;
        position: relative;
        margin-top: 50px;
    }
    .sg_Video_wrap .title {
        color: rgba(0,0,0,0.9);
        font-size: 24.8px;
        font-weight: bold;
        text-align: center;
        letter-spacing:-0.248px;
        padding-left: 20px;
    }
    .sg_Video_wrap .Video_list {
        width: 100%;
        zoom: 1;
        transition: transform 200ms ease-in-out;
    }
    .sg_Video_wrap .Video_list.left {
        transform: translateX(0px);
    }
    .sg_Video_wrap .Video_list.right {
        transform: translateX(-50%);
    }
    .sg_Video_wrap .Video_list::after {
        content: "";
        display: block;
        clear: both;
    }
    .sg_Video_wrap li {
        float: left;
        zoom: 1;
        width: 100%;
    }
    .sg_Video_wrap li::after {
        content: "";
        display: block;
        clear: both;
    }
    .sg_Video_wrap .Video{
        float: left;
        width: 33.33%;
        border-radius: 3px;
        padding: 20px 20px;
    }
    .sg_Video_wrap a{
        width: 100%;
    }
    .sg_Video_wrap .img_wrap{
        position: relative;
        transition: box-shadow 100ms;
        width: 100%;
        padding-top: 56.25%;
        background: #ddd;
        transition:  box-shadow 200ms ease;
    }
    .sg_Video_wrap .Video:hover .img_wrap{
        box-shadow: 0 0px 9px 9px rgba(0,0,0,0.75);
    }
    .sg_Video_wrap img{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: transform 200ms ease;
        transform: scale(1);
        line-height: 200px;
    }
    .sg_Video_wrap .Video:hover img{
        transform: scale(1.03);
    }
    .sg_Video_wrap .Video_btn {
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
    .sg_Video_wrap .Video_left {
        left: 30px;
        background-image: url(../../assets/images/arrow-next.png);
    }
    .sg_Video_wrap .Video_right {
        right: 30px;
        background-image: url(../../assets/images/arrow-prev.png);
    }

</style>
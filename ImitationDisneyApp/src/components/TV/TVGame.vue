<template>
        <div class="sg_TV_wrap">
            <h2 class="title">Most Popular Games</h2>
            <ul class="TV_list" :class="{right,left}">
                <li>
                    <router-link v-for="{imgUrl,index} in imgUrls1" :key="index" to="/TVs" tag="div" class="TV" active-class="active">
                        <a href="javascript:;">
                            <div class="img_wrap">
                                <img v-lazy="imgUrl" alt="图片">
                            </div>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link v-for="{imgUrl,index} in imgUrls2" :key="index" to="/TVs" tag="div" class="TV" active-class="active">
                        <a href="javascript:;">
                            <div class="img_wrap">
                                <img v-lazy="imgUrl" alt="图片">
                            </div>
                        </a>
                    </router-link>
                </li>
            </ul>
            <button class="TV_left TV_btn" @click="left=true"></button>
            <button class="TV_right TV_btn" @click="left=false"></button>
        </div>
    </template>
    <script>
    export default {
        data(){
            return {
                left:true,
                imgUrls1:[
                "https://i.loli.net/2017/12/01/5a2101e79d715.jpeg",
                "https://i.loli.net/2017/12/01/5a2101e9690cf.jpeg",
                "https://i.loli.net/2017/12/01/5a2101e979fb1.jpeg",
                "https://i.loli.net/2017/12/01/5a2101e97baa0.jpeg"
                ],
                imgUrls2:[
                "https://i.loli.net/2017/12/01/5a2101e998903.jpeg",
                "https://i.loli.net/2017/12/01/5a2101e99de95.jpeg",
                "https://i.loli.net/2017/12/01/5a2101e9ea892.jpeg",
                "https://i.loli.net/2017/12/01/5a2101ea009de.jpeg"
                ],
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
        .sg_TV_wrap {
            width: 100%;
            overflow: hidden;
            position: relative;
            margin-top: 50px;
        }
        .sg_TV_wrap .title {
            color: rgba(0,0,0,0.9);
            font-size: 24.8px;
            font-weight: bold;
            text-align: center;
            letter-spacing:-0.248px;
            padding-left: 20px;
        }
        .sg_TV_wrap .TV_list {
            width: 200%;
            zoom: 1;
            transition: transform 200ms ease-in-out;
        }
        .sg_TV_wrap .TV_list.left {
            transform: translateX(0px);
        }
        .sg_TV_wrap .TV_list.right {
            transform: translateX(-50%);
        }
        .sg_TV_wrap .TV_list::after {
            content: "";
            display: block;
            clear: both;
        }
        .sg_TV_wrap li {
            float: left;
            zoom: 1;
            width: 50%;
        }
        .sg_TV_wrap li::after {
            content: "";
            display: block;
            clear: both;
        }
        .sg_TV_wrap .TV{
            float: left;
            width: 25%;
            border-radius: 3px;
            padding: 20px 20px;
        }
        .sg_TV_wrap a{
            width: 100%;
        }
        .sg_TV_wrap .img_wrap{
            position: relative;
            transition: box-shadow 100ms;
            width: 100%;
            padding-top: 75%;
            background: #ddd;
            transition:  box-shadow 200ms ease;
        }
        .sg_TV_wrap .TV:hover .img_wrap{
            box-shadow: 0 0 9px 9px rgba(0,0,0,0.75);
        }
        .sg_TV_wrap img{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            transition: transform 200ms ease;
            transform: scale(1);
            line-height: 200px;
        }
        .sg_TV_wrap .TV:hover img{
            transform: scale(1.03);
        }
        .sg_TV_wrap .TV_btn {
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
        .sg_TV_wrap .TV_left {
            left: 30px;
            background-image: url(../../assets/images/arrow-next.png);
        }
        .sg_TV_wrap .TV_right {
            right: 30px;
            background-image: url(../../assets/images/arrow-prev.png);
        }
    
    </style>
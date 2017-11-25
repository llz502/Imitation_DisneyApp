<template>
    <div class="PlayArea">
        <div class="video_watch_container">
            <video @click="PlayVideo($event)" class="video" width="987" height="600" controls loop="true" preload="none" poster="../../assets/images/video-latest1.jpeg"src="../../assets/mp4/《赛车总动员2》全新中文预告_标清.mp4">
                Your browser doesn't support mp4 .
            </video>
            <div class="video_watch_btn" v-show="nowplaying"></div>
        </div>
        <div class="playlist">
            <div class="up_next">up-next</div>
            <ul class="items_container">
                <li class="item">
                    <img src="../../assets/images/video-latest1.jpeg" alt="" >
                    <span class="audio_nowplaying audio_btn" v-show="nowplaying1" @click="nowplaying1=!nowplaying1"></span><span class="audio_pause audio_btn" v-show="noplaying1" @click="nowplaying1=!nowplaying1"></span>                    
                    <span class="item_info">
                        <h3>A Wrinkle in Time | Teaser Trailer</h3>
                        <span class="nowplaying" v-show="nowplaying1">nowplaying</span>
                        <h4 :class="{noplaying1}" v-show="noplaying1">A Wrinkle in Time</h4>
                    </span>
                </li>
                <li class="item">
                    <img src="../../assets/images/video-latest2.jpeg" alt="" >
                    <span class="audio_nowplaying audio_btn" v-show="nowplaying2" @click="nowplaying2=!nowplaying2"></span><span class="audio_pause audio_btn" v-show="noplaying2" @click="nowplaying2=!nowplaying2"></span>
                    <span class="item_info">
                        <h3>A Wrinkle in Time | Teaser Trailer</h3>
                        <span class="nowplaying" v-show="nowplaying2">nowplaying</span>
                        <h4 :class="{noplaying2}" v-show="noplaying2">A Wrinkle in Time</h4>
                    </span>
                </li>
                <li class="item">
                    <span class="play_btn"></span>
                    <img src="../../assets/images/video-latest3.jpeg" alt="" >
                    <span class="audio_nowplaying audio_btn" v-show="nowplaying3" @click="nowplaying3=!nowplaying3"></span><span class="audio_pause audio_btn" v-show="noplaying3" @click="nowplaying3=!nowplaying3"></span>                    
                    <span class="item_info">
                        <h3>A Wrinkle in Time | Teaser Trailer</h3>
                        <span class="nowplaying" v-show="nowplaying3">nowplaying</span>
                        <h4 :class="{noplaying3}" v-show="noplaying3">A Wrinkle in Time</h4>
                    </span>
                </li>
                <li class="item">
                    <img src="../../assets/images/video-latest4.jpeg" alt="" >
                    <span class="audio_nowplaying audio_btn" v-show="nowplaying4" @click="nowplaying4=!nowplaying4"></span><span class="audio_pause audio_btn" v-show="noplaying4" @click="nowplaying4=!nowplaying4"></span>
                    <span class="item_info">
                        <h3>A Wrinkle in Time | Teaser Trailer</h3>
                        <span class="nowplaying" v-show="nowplaying4">nowplaying</span>
                        <h4 :class="{noplaying4}" v-show="noplaying4">A Wrinkle in Time</h4>
                    </span>
                </li>
                <li class="item">
                    <span class="play_btn"></span>
                    <img src="../../assets/images/video-latest5.jpeg" alt="" >
                    <span class="audio_nowplaying audio_btn" v-show="nowplaying5" @click="nowplaying5=!nowplaying5"></span><span class="audio_pause audio_btn" v-show="noplaying5" @click="nowplaying5=!nowplaying5"></span>                                            
                    <span class="item_info">
                        <h3>A Wrinkle in Time | Teaser Trailer</h3>
                        <span class="nowplaying" v-show="nowplaying5">nowplaying</span>
                        <h4 :class="{noplaying5}" v-show="noplaying5">A Wrinkle in Time</h4>
                    </span>
                </li>
                <li class="item">
                    <img src="../../assets/images/video-latest6.jpeg" alt="" >
                    <span class="audio_nowplaying audio_btn" v-show="nowplaying6" @click="nowplaying6=!nowplaying6"></span><span class="audio_pause audio_btn" v-show="noplaying6" @click="nowplaying7=!nowplaying6"></span>
                    <span class="item_info">
                        <h3>A Wrinkle in Time | Teaser Trailer</h3>
                        <span class="nowplaying" v-show="nowplaying6">nowplaying</span>
                        <h4 :class="{noplaying6}" v-show="noplaying6">A Wrinkle in Time</h4>
                    </span>
                </li>
                <li class="item">
                    <img src="../../assets/images/video-latest7.jpeg" alt="" >
                    <span class="audio_nowplaying audio_btn" v-show="nowplaying7" @click="nowplaying7=!nowplaying7"></span><span class="audio_pause audio_btn" v-show="noplaying7" @click="nowplaying7=!nowplaying7"></span>
                    <span class="item_info">
                        <h3>A Wrinkle in Time | Teaser Trailer</h3>
                        <span class="nowplaying" v-show="nowplaying7">nowplaying</span>
                        <h4 :class="{noplaying7}" v-show="noplaying7">A Wrinkle in Time</h4>
                    </span>
                </li>
                <li class="item">
                    <img src="../../assets/images/video-latest8.jpeg" alt="" >
                    <span class="audio_nowplaying audio_btn" v-show="nowplaying8" @click="nowplaying8=!nowplaying8"></span><span class="audio_pause audio_btn" v-show="noplaying8" @click="nowplaying8=!nowplaying8"></span>
                    <span class="item_info">
                        <h3>A Wrinkle in Time | Teaser Trailer</h3>
                        <span class="nowplaying" v-show="nowplaying8">nowplaying</span>
                        <h4 :class="{noplaying8}" v-show="noplaying8">A Wrinkle in Time</h4>
                    </span>
                </li>
                <li class="item">
                    <img src="../../assets/images/video-latest9.jpeg" alt="" >
                    <span class="audio_nowplaying audio_btn" v-show="nowplaying9" @click="nowplaying9=!nowplaying9"></span><span class="audio_pause audio_btn" v-show="noplaying9" @click="nowplaying9=!nowplaying9"></span>
                    <span class="item_info">
                        <h3>A Wrinkle in Time | Teaser Trailer</h3>
                        <span class="nowplaying" v-show="nowplaying9">nowplaying</span>
                        <h4 :class="{noplaying9}" v-show="noplaying9">A Wrinkle in Time</h4>
                    </span>
                </li>
                <li class="item">
                    <img src="../../assets/images/video-latest10.jpeg" alt="" >
                    <span class="audio_nowplaying audio_btn" v-show="nowplaying10" @click="nowplaying10=!nowplayin10g"></span><span class="audio_pause audio_btn" v-show="noplaying10" @click="nowplaying10=!nowplaying10"></span>
                    <span class="item_info">
                        <h3>A Wrinkle in Time | Teaser Trailer</h3>
                        <span class="nowplaying" v-show="nowplaying10">nowplaying</span>
                        <h4 :class="{noplaying10}" v-show="noplaying10">A Wrinkle in Time</h4>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                nowplaying:true,
                nowplaying1:false,
                nowplaying2:false,
                nowplaying3:false,
                nowplaying4:false,
                nowplaying5:false,
                nowplaying6:false,
                nowplaying7:false,
                nowplaying8:false,
                nowplaying9:false,
                nowplaying10:false,
                nowplaying11:false,
            }
        },
        computed:{
            noplaying1(){
                return !this.nowplaying1
            },
            noplaying2(){
                return !this.nowplaying2
            },
            noplaying3(){
                return !this.nowplaying3
            },
            noplaying4(){
                return !this.nowplaying4
            },
            noplaying5(){
                return !this.nowplaying5
            },
            noplaying6(){
                return !this.nowplaying6
            },
            noplaying7(){
                return !this.nowplaying7
            },
            noplaying8(){
                return !this.nowplaying8
            },
            noplaying9(){
                return !this.nowplaying9
            },
            noplaying10(){
                return !this.nowplaying10
            },
            noplaying11(){
                return !this.nowplaying11
            },
        },
        methods:{
            PlayVideo(event){
                if(this.nowplaying){
                    event.target.play()
                } else {
                    event.target.pause()
                }
                this.nowplaying=!this.nowplaying
            }
        }
    }
</script>
<style scoped>
.PlayArea {
    width: 100%;
    height: 500.625px;
    min-height: 400px;
    line-height: 19.2px;
    font-size: 16px;
    font-weight: 600;
    color:#000;
    zoom: 1;
    overflow: hidden;
}
.PlayArea::after {
    content: "";
    display: block;
    clear: both;
}
.video_watch_container {
    float: left;
    width: 66.67%;
    height: 100%;
    position: relative;
    background: #000;
}
.video_watch_container .video_watch_btn {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 46px;
    height: 46px;
    transform: translate(-44px,-44px);
}
.video_watch_container .video_watch_btn::before{
    content: "";
    display: block;
    border: 1px solid white;
    background-color: rgba(0,0,0,0.3);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    position: absolute;
    left: 50%;;
    top: 0;
    transform: translate(-22px,0px);
}
.video_watch_container .video_watch_btn::after{
    content: "";
    display: block;
    border: 30px solid transparent;
    border-left-color: white;
    position: absolute;
    left: 50%;;
    top: 0;
    transform: translate(-6px,13px);
    height: 0;
    border-width: 8px 0 8px 16px;
}
.video_watch_container .video {
    position: absolute;
    left: 0;
    top: -18%;
    padding: 0;
    margin: 0;
}
.playlist {
    float: left;
    width:33.33%;
    height: 100%;
    overflow: scroll;
}
.playlist .up_next {
    line-height: 1.2;
    width: 100%;
    height: 30px;
    padding-top: 7px;
    font-size: 0.8em;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    color: #686A6B;
    border: 1px solid #cacaca;
    background-color: #DDDDDD;
}
.playlist .items_container {
    height: calc(100%-30px);
}
.playlist .item {
    position: relative;
}
.playlist .item::after {
    content: "";
    display: block;
    clear: both;
}
.playlist .item .audio_btn {
    position: absolute;
    left: 0px;
    top: 0px;
}
.playlist .item .audio_nowplaying {
    display: block;
    background: rgba(0,0,0,0.85);
    background-image: url(../../assets/images/nowplaying.gif);
    background-size: 60px;
    background-repeat: no-repeat;
    background-position: center;
    width: 30.5%;
    height: 100%;
}
.playlist .item .audio_pause {
    width: 30.5%;
    height: 100%;
    display: block;
}
.playlist .item .audio_pause::before {
    content: "";
    display: block;
    border: 1px solid white;
    background-color: rgba(0,0,0,0.3);
    border-radius: 50%;
    width: 22px;
    height: 22px;
    position: absolute;
    left: 50%;;
    top: 0%;
    transform: translate(-11px,22px);
}
.playlist .item .audio_pause::after {
    content: "";
    display: block;
    border: 15px solid transparent;
    border-left-color: white;
    position: absolute;
    left: 50%;;
    top: 0%;
    transform: translate(-3px,29px);
    height: 0;
    border-width: 4px 0 4px 8px;
}
.playlist .item img {
    display: block;
    float: left;
    width: 30.5%;
}
.playlist .item .item_info {
    float: left;
    width: 69.5%;
    margin: 12px 0;
    text-align: left;
    padding-left: 15px;
}
.playlist .item .item_info h3 {
    font-size: 0.8em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
.playlist .item .item_info .nowplaying {
    color: #fff;
    text-transform: uppercase;
    background-color: #3B98F0;
    border-radius: 3px;
    font-size: 0.75em;
    text-align: center;
    width: 110px;
    margin-top: 3px;
    padding: 2px 0;
}
.playlist .item .item_info h4 {
    font-size: 0.75em;
    line-height: 1.4em;
    margin-top: 3px;
    display: block;
    color: #8D8E8F;
}
@media screen and (max-width:1024px){
    .PlayArea {
        height: 800.625px;
    }
    .video_watch_container {
        width: 100%;
        height: 500.625px;
    }
    .playlist {
        width: 100%;
        height: 300px;
        z-index: 10001;
    }
    .playlist .item .audio_pause {
        height: 100%;
    }
    .playlist .item .audio_pause::before {
        transform: translate(-11px,-12%);
        top: 50%;
    }
    .playlist .item .audio_pause::after {
        transform: translate(-3px,50%);
        top: 50%;
    }
}

</style>
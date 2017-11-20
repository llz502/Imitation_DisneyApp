<template>
	<div class="banner">
        <Swipe class="my-swipe">
            <SwipeItem class="slide1 slide">
                <div class="img_wrap">
                    <img src="../../assets/images/slide1.jpg" alt="image">
                </div>
            </SwipeItem>
            <SwipeItem class="slide2 slide">
                <div class="img_wrap">
                    <img src="../../assets/images/slide2.jpg" alt="image">
                </div>
            </SwipeItem>
            <SwipeItem class="slide3 slide">
                <div class="img_wrap">
                    <img src="../../assets/images/slide3.jpg" alt="image">
                </div>
            </SwipeItem>
        </Swipe>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
    mounted(){
    },
    watch:{
    },
    components:{
         Swipe,
         SwipeItem
    },
    methods:{
        changeSwipe(newIndex, oldIndex) {
        console.log(`swipe from ${newIndex} to ${oldIndex}`);
      }
    }
}
</script>
<style scoped>
/* 轮播样式 */
.mint-swipe,.mint-swipe-items-wrap {
	overflow: hidden;
	position: relative;
	height: 100%;
}

.mint-swipe-items-wrap {
	-webkit-transform: translateZ(0);
	transform: translateZ(0)
}

.mint-swipe-items-wrap>div {
	position: absolute;
	-webkit-transform: translateX(-100%);
	transform: translateX(-100%);
	width: 100%;
	height: 100%;
	display: none
}

.mint-swipe-items-wrap>div.is-active {
	display: block;
	-webkit-transform: none;
	transform: none
}

.mint-swipe-indicators {
	position: absolute;
	bottom: 10px;
	left: 50%;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
    z-index: 999
}

.mint-swipe-indicator {
    width: 100%;
	width: 12px;
	height: 12px;
	display: inline-block;
	border-radius: 100%;
	background: #fff;
    opacity: .7;
	margin: 0 3px
}

.mint-swipe-indicator.is-active {
	background: rgba(223, 7, 7, 0.99)
}
/* 自定义样式 */
.my-swipe {
    width: 100%;
    height: 600px;
    color: #fff;
    font-size: 30px;
    text-align: center;
}

.slide1 {
    background-color: #FFF;
    color: #fff;
}

.slide2 {
    background-color: #fff;
    color: #27E616;
}

.slide3 {
    background-color: #fff;
    color: #fff;
}

.my-swipe .img_wrap {
    background: #ddd;
    width: 100%;
    padding-top:42.08%;
    display: block;
    position: relative;
}

.slide img {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-size: 55px;
    color: #fff;
    font-weight: bold;
    line-height: 600px;
    z-index: 998;
}
@media screen and (max-width:1024px) {
    .my-swipe {
        height: 400px;
    }
    .my-swipe .slide img {
        font-size: 35px;
        line-height: 400px;    
    }
}
@media screen and (max-width:768px) {
    .my-swipe {
        height: 200px;
    }
    .my-swipe .slide img {
        font-size: 27px;
        line-height: 200px;    
    }
}
@media screen and (max-width:475.23px) {
    .my-swipe {
        height: 100px;
    }
    .my-swipe .slide img {
        font-size: 17px;
        line-height: 100px;    
    }
}

</style>
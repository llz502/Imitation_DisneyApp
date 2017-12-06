<template>
    <div class="sg_product_wrap">
        <h2 class="title">Disney on Lazada.sg</h2>
        <ul class="product_list" :class="{right,left}">
            <li>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img v-lazy="imgUrls1[0]" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img v-lazy="imgUrls1[1]" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img v-lazy="imgUrls1[2]" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img v-lazy="imgUrls1[3]" alt="图片">
                        </div>
                    </a>
                </router-link>
            </li>
            <li>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img v-lazy="imgUrls2[0]" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img v-lazy="imgUrls2[1]" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img v-lazy="imgUrls2[2]" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img v-lazy="imgUrls2[3]" alt="图片">
                        </div>
                    </a>
                </router-link>
            </li>
            <li>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img v-lazy="imgUrls3[0]" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img v-lazy="imgUrls3[1]" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img v-lazy="imgUrls3[2]" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img v-lazy="imgUrls3[3]" alt="图片">
                        </div>
                    </a>
                </router-link>
            </li>
        </ul>
        <button class="product_left product_btn" v-show="right" @click="left=true">左</button>
        <button class="product_right product_btn" v-show="right" @click="left=false">右</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            left:true,
            imgUrls1:[
                'https://ooo.0o0.ooo/2017/11/27/5a1c2db9763ca.jpeg',
                'https://ooo.0o0.ooo/2017/11/27/5a1c2dba63ced.jpeg',
                'https://ooo.0o0.ooo/2017/11/27/5a1c2dba749b4.jpeg',
                'https://ooo.0o0.ooo/2017/11/27/5a1c2dba9d0a7.jpeg'
                ],
            imgUrls2:[
                'https://ooo.0o0.ooo/2017/11/27/5a1c2dbabd024.jpeg',
                'https://ooo.0o0.ooo/2017/11/27/5a1c2dbac6c48.jpeg',
                'https://ooo.0o0.ooo/2017/11/27/5a1c2dbb2832d.jpeg',
                'https://ooo.0o0.ooo/2017/11/27/5a1c2dbb2942d.jpeg'
                ],
            imgUrls3:[
                'https://ooo.0o0.ooo/2017/11/27/5a1c2dbb53e3f.jpeg',
                'https://ooo.0o0.ooo/2017/11/27/5a1c2dbb69b88.jpeg',
                'https://ooo.0o0.ooo/2017/11/27/5a1c2e49634b8.jpeg',
                'https://ooo.0o0.ooo/2017/11/27/5a1c2e4986a71.jpeg'
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
    .sg_product_wrap {
        width: 100%;
        overflow: hidden;
        position: relative;
        margin-top: 50px;
    }
    .sg_product_wrap .title {
        color: rgba(0,0,0,0.9);
        font-size: 24.8px;
        font-weight: bold;
        text-align: center;
        letter-spacing:-0.248px;
        padding-left: 20px;
    }
    .sg_product_wrap .product_list {
        width: 100%;
        zoom: 1;
        transition: transform 200ms ease-in-out;
    }
    .sg_product_wrap .product_list.left {
        transform: translateX(0px);
    }
    .sg_product_wrap .product_list.right {
        transform: translateX(-50%);
    }
    .sg_product_wrap .product_list::after {
        content: "";
        display: block;
        clear: both;
    }
    .sg_product_wrap li {
        float: left;
        zoom: 1;
        width: 100%;
    }
    .sg_product_wrap li::after {
        content: "";
        display: block;
        clear: both;
    }
    .sg_product_wrap .product{
        float: left;
        width: 25%;
        border-radius: 3px;
        padding: 20px 20px;
    }
    .sg_product_wrap a{
        width: 100%;
        /* transition: transform 200ms;
        transform: scale(1); */
    }
    .sg_product_wrap .img_wrap{
        position: relative;
        transition: box-shadow 100ms;
        width: 100%;
        padding-top: 100%;
        background: #ddd;
        transition:  box-shadow 200ms ease;
    }
    .sg_product_wrap .product:hover .img_wrap{
        box-shadow: 0 3px 6px 6px rgba(0,0,0,0.75);
    }
    .sg_product_wrap img{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: transform 200ms ease;
        transform: scale(1);
        line-height: 200px;
    }
    .sg_product_wrap .product:hover img{
        transform: scale(1.03);
    }
    .sg_product_wrap .product_btn {
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
    .sg_product_wrap .product_left {
        left: 30px;
        background-image: url(../../assets/images/arrow-next.png);
    }
    .sg_product_wrap .product_right {
        right: 30px;
        background-image: url(../../assets/images/arrow-prev.png);
    }

</style>
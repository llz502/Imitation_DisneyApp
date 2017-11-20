<template>
    <div class="sg_product_wrap">
        <h2 class="title">Disney on Lazada.sg</h2>
        <ul class="product_list" :class="{right,left}">
            <li>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img src="../../assets/images/sg-product1.jpeg" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img src="../../assets/images/sg-product2.jpeg" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img src="../../assets/images/sg-product3.jpeg" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img src="../../assets/images/sg-product4.jpeg" alt="图片">
                        </div>
                    </a>
                </router-link>
            </li>
            <li>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img src="../../assets/images/sg-product5.jpeg" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img src="../../assets/images/sg-product6.jpeg" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img src="../../assets/images/sg-product7.jpeg" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img src="../../assets/images/sg-product8.jpeg" alt="图片">
                        </div>
                    </a>
                </router-link>
            </li>
            <li>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img src="../../assets/images/sg-product9.jpeg" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img src="../../assets/images/sg-product10.jpeg" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img src="../../assets/images/sg-product11.jpeg" alt="图片">
                        </div>
                    </a>
                </router-link>
                <router-link to="/Products" tag="div" class="product" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img src="../../assets/images/sg-product12.jpeg" alt="图片">
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
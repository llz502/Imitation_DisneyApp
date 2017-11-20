<template>
    <div class="sg_app_wrap">
        <ul class="app_list">
            <li>
                <router-link to="/Apps" tag="div" class="app" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img src="../../assets/images/DisneyVillainsTheme.jpeg" alt="图片">
                        </div>
                    </a>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
</script>
<style scoped>
    .sg_app_wrap {
        width: 100%;
        overflow: hidden;
        position: relative;
        margin-top: 50px;
    }
    .sg_app_wrap .title {
        color: rgba(0,0,0,0.9);
        font-size: 24.8px;
        font-weight: bold;
        text-align: center;
        letter-spacing:-0.248px;
        padding-left: 20px;
    }
    .sg_app_wrap .app_list {
        width: 100%;
        zoom: 1;
        transition: transform 200ms ease-in-out;
    }
    .sg_app_wrap .app_list.left {
        transform: translateX(0px);
    }
    .sg_app_wrap .app_list.right {
        transform: translateX(-50%);
    }
    .sg_app_wrap .app_list::after {
        content: "";
        display: block;
        clear: both;
    }
    .sg_app_wrap li {
        float: left;
        zoom: 1;
        width: 100%;
    }
    .sg_app_wrap li::after {
        content: "";
        display: block;
        clear: both;
    }
    .sg_app_wrap .app{
        float: left;
        width: 100%;
        border-radius: 3px;
        padding: 20px 20px;
    }
    .sg_app_wrap a{
        width: 100%;
    }
    .sg_app_wrap .img_wrap{
        position: relative;
        transition: box-shadow 100ms;
        width: 100%;
        padding-top: 25%;
        background: #ddd;
        transition:  box-shadow 200ms ease;
    }
    .sg_app_wrap .app:hover .img_wrap{
        box-shadow: 0 0px 10px 10px rgba(0,0,0,0.75);
    }
    .sg_app_wrap img{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: transform 200ms ease;
        transform: scale(1);
        line-height: 200px;
    }
    .sg_app_wrap .app:hover img{
        transform: scale(1.03);
    }
</style>
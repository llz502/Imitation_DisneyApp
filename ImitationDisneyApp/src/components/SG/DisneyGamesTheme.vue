<template>
    <div class="sg_game_wrap">
        <ul class="game_list">
            <li>
                <router-link to="/Games" tag="div" class="game" active-class="active">
                    <a href="javascript:;">
                        <div class="img_wrap">
                            <img v-lazy="imgUrl" alt="图片">
                        </div>
                    </a>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      imgUrl: 'https://i.loli.net/2017/11/27/5a1c04f33c478.jpeg' // String../../assets/images/DisneyGamesTheme.jpeg
    }
  }
}
</script>
<style scoped>
    .sg_game_wrap {
        width: 100%;
        overflow: hidden;
        position: relative;
        margin-top: 50px;
    }
    .sg_game_wrap .title {
        color: rgba(0,0,0,0.9);
        font-size: 24.8px;
        font-weight: bold;
        text-align: center;
        letter-spacing:-0.248px;
        padding-left: 20px;
    }
    .sg_game_wrap .game_list {
        width: 100%;
        zoom: 1;
        transition: transform 200ms ease-in-out;
    }
    .sg_game_wrap .game_list.left {
        transform: translateX(0px);
    }
    .sg_game_wrap .game_list.right {
        transform: translateX(-50%);
    }
    .sg_game_wrap .game_list::after {
        content: "";
        display: block;
        clear: both;
    }
    .sg_game_wrap li {
        float: left;
        zoom: 1;
        width: 100%;
    }
    .sg_game_wrap li::after {
        content: "";
        display: block;
        clear: both;
    }
    .sg_game_wrap .game{
        float: left;
        width: 100%;
        border-radius: 3px;
        padding: 20px 20px;
    }
    .sg_game_wrap a{
        width: 100%;
    }
    .sg_game_wrap .img_wrap{
        position: relative;
        transition: box-shadow 100ms;
        width: 100%;
        padding-top: 14.65%;
        background: #ddd;
        transition:  box-shadow 200ms ease;
    }
    .sg_game_wrap .game:hover .img_wrap{
        box-shadow: 0 0px 10px 10px rgba(0,0,0,0.75);
    }
    .sg_game_wrap img{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: transform 200ms ease;
        transform: scale(1);
        line-height: 200px;
    }
    .sg_game_wrap .game:hover img{
        transform: scale(1.03);
    }

</style>
<template>
    <div class="SG">
        <Slider></Slider>
        <SGVideo></SGVideo>
        <DreamBigPrincessTheme></DreamBigPrincessTheme>
        <SGCharacter></SGCharacter>
        <DisneyGamesTheme></DisneyGamesTheme>
        <SGMovie></SGMovie>
        <SGProduct></SGProduct>
        <JointheDisneyMagicTheme></JointheDisneyMagicTheme>
        <SGTV></SGTV>
        <DisneyVillainsTheme></DisneyVillainsTheme>
        <SGApp></SGApp>
    </div>
</template>
<script>
import Slider from './SG/Slider.vue'
import SGVideo from './SG/SGVideo.vue'
import DreamBigPrincessTheme from './SG/DreamBigPrincessTheme.vue'
import SGCharacter from './SG/SGCharacter.vue'
import DisneyGamesTheme from './SG/DisneyGamesTheme.vue'
import SGMovie from './SG/SGMovie.vue'
import SGProduct from './SG/SGProduct.vue'
import JointheDisneyMagicTheme from './SG/JointheDisneyMagicTheme.vue'
import SGTV from './SG/SGTV.vue'
import DisneyVillainsTheme from './SG/DisneyVillainsTheme.vue'
import SGApp from './SG/SGApp.vue'

export default {
    data(){
        return {
            arrList:[]
        }
    },
    components:{
        Slider,
        SGVideo,
        DreamBigPrincessTheme,
        SGCharacter,
        DisneyGamesTheme,
        SGMovie,
        SGProduct,
        JointheDisneyMagicTheme,
        SGTV,
        DisneyVillainsTheme,
        SGApp
    },
    mounted(){
        // 获取数据
        this.fetchData();
    },
    methods:{
        fetchData(){
        }
    }
}
</script>
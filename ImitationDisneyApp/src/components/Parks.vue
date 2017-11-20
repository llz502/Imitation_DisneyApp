<template>
    <div class="Parks">
        <TVChannelVideo></TVChannelVideo>
        <SGMovie></SGMovie>
    </div>
</template>
<script>
import TVChannelVideo from './TV/TVChannelVideo'
import SGMovie from './SG/SGMovie.vue'

export default {
    components:{
        TVChannelVideo,
        SGMovie,
    }
}
</script>
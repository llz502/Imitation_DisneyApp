<template>
    <div class="Video">
        <PlayArea></PlayArea>
        <SGVideo></SGVideo>
        <VideoClip></VideoClip>
    </div>
</template>
<script>
import PlayArea from './Video/PlayArea'
import SGVideo from './SG/SGVideo'
import VideoClip from './Video/VideoClip'
export default {
    components: {
        PlayArea,
        SGVideo,
        VideoClip
    }
}
</script>
<style scoped>
.Video {
    width: 100%;
}
</style>
<template>
    <div class="TV">
        <SGTV></SGTV>
        <TVGame></TVGame>
        <TVChannelVideo></TVChannelVideo>
    </div>
</template>
<script>
import SGTV from './SG/SGTV'
import TVGame from './TV/TVGame'
import TVChannelVideo from './TV/TVChannelVideo'
export default {
    components: {
        SGTV,
        TVGame,
        TVChannelVideo
    }
}
</script>
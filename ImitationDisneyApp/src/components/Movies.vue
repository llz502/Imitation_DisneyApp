<template>
    <div class="wrap">
        <SGMovie></SGMovie>
        <PlayArea></PlayArea>
        <MovieClip></MovieClip>
    </div>
</template>
<script>
import PlayArea from './Movie/PlayArea'
import SGMovie from './SG/SGMovie'
import MovieClip from './Movie/MovieClip'
export default {
    components: {
        PlayArea,
        SGMovie,
        MovieClip
    }
}
</script>
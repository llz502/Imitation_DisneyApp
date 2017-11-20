<template>
    <div class="Games">
        <GameLatest></GameLatest>
        <GamePopular></GamePopular>
        <DisneyGamesTheme></DisneyGamesTheme>
        <GameQuizz></GameQuizz>
    </div>
</template>
<script>
import GameQuizz from './Game/GameQuizz'
import GamePopular from './Game/GamePopular'
import DisneyGamesTheme from './SG/DisneyGamesTheme.vue'
import GameLatest from './Game/GameLatest'

export default {
    components: {
        GameQuizz,
        DisneyGamesTheme,
        GamePopular,
        GameLatest
    }
}
</script>
<style scoped>
</style>
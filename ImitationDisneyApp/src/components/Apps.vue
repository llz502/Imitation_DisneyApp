<template>
    <div class="Apps">
        <SGApp></SGApp>
        <DisneyVillainsTheme></DisneyVillainsTheme>
        <AppPopular></AppPopular>
    </div>
</template>
<script>
import SGApp from './SG/SGApp.vue'
import DisneyVillainsTheme from './SG/DisneyVillainsTheme.vue'
import AppPopular from './App/AppPopular'

export default {
    components: {
        SGApp,
        DisneyVillainsTheme,
        AppPopular
    }
}
</script>
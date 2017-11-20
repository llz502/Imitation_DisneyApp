<template>
    <div class="wrap">
        <GMenuBody></GMenuBody>
        <GMenu></GMenu>
    </div>
</template>
<script>
import GMenu from './NavHeader/GlobalMenu.vue'
import GMenuBody from './NavHeader/GlobalMenuBody.vue'

export default {
    components: {
        GMenu,
        GMenuBody
    }
}
</script>
<style scoped>
.wrap {
    position: relative;
}
</style>
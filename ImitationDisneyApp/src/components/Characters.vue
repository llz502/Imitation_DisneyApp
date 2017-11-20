<template>
    <div class="Characters">
        <CharacterMickeyFriends></CharacterMickeyFriends>
        <CharacterPixar></CharacterPixar>
    </div>
</template>
<script>
import CharacterMickeyFriends from './Character/CharacterMickeyFriends'
import CharacterPixar from './Character/CharacterPixar'
export default {
    components: {
        CharacterMickeyFriends,
        CharacterPixar
    }
}
</script>


<template>
    <div class="fullscreen-centered">
        <div class="word-wrapper">
            <transition name="fade">
                <div class="word-card" :key="'quote-card'" v-if="$store.getters['wordLoaded']">
                    <span class="word">{{ $store.state.word }}</span>
                    <span class="word-definition">{{ $store.state.definition }}</span>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WordContainer',
    mounted() {
        this.$store.dispatch('loadWord');
    },
};
</script>

<style scoped lang="scss">
.fullscreen-centered {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ghostwhite;
}

.word-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: -1;
}

.word {
    font-weight: 100;
    font-size: 180px;
    line-height: 1.4;
    position: relative;
    text-transform: uppercase;
    margin: 0;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    text-shadow: 3px 3px 3px black;
}

.word-definition {
    font-size: 40px;
    font-family: 'Indie Flower', cursive;
    text-shadow: 3px 3px 3px black;
}

.word-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 2.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
 {
    opacity: 0;
}

@media screen and (max-width: 768px) {
    .word-card {
        max-width: 80%;
    }
    .word {
        font-size: 80px;
    }
    .word-definition {
        font-size: 25px;
    }
}

@media screen and (max-width: 400px) {
    .word-card {
        max-width: 80%;
    }
    .word {
        font-size: 50px;
    }
    .word-definition {
        font-size: 20px;
    }
}
</style>

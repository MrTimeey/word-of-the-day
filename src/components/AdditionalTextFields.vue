<template>
    <transition-group name="fade">
        <div :key="'title'" class="app-title text-bubble" v-if="isMounted" @click="$store.dispatch('loadQuote')">
            Word of the Day
        </div>

        Photo by Xan Griffin on Unsplash

        <span :key="'author'" class="author text-bubble" v-if="isMounted">
            Photo by
            <a
                href="https://unsplash.com/@alfonsmc10?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Alfons Morales</a
            >
            on
            <a
                href="https://unsplash.com/s/photos/library?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Unsplash</a
            >
        </span>
        <div :key="'link-list'" class="link-list text-bubble" v-if="isMounted">
            <a :href="link.url" target="_blank" v-for="(link, index) in links" :key="'icon'.concat('_', index)">
                <em :class="link.icon"></em>
            </a>
        </div>
    </transition-group>
</template>

<script>
export default {
    name: 'AdditionalTextFields',
    data: () => ({
        image: 'https://source.unsplash.com/YLSwjSy7stw/1920x1125',
        isMounted: false,
        links: [
            { icon: 'fab fa-github', url: 'https://github.com/MrTimeey/word-of-the-day' },
            { icon: 'fab fa-twitter', url: 'https://twitter.com/tim_siegler' },
        ],
    }),
    computed: {
        imageStyle() {
            return {
                backgroundImage: `url(${this.image})`,
            };
        },
    },
    mounted() {
        this.isMounted = true;
    },
};
</script>

<style lang="scss">
.text-bubble {
    z-index: 9999;
    -webkit-box-shadow: 2px 3px 7px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 2px 3px 7px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 2px 3px 7px 2px rgba(0, 0, 0, 0.1);
    background: hsla(0, 0%, 100%, 0.6);
    padding: 5px 10px 5px 10px;
    border-radius: 10px;
}

.author {
    position: fixed;
    right: 10px;
    bottom: 10px;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 20px;
}

.app-title {
    position: fixed;
    left: 10px;
    top: 10px;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 30px;
    cursor: pointer;
}

.link-list {
    position: fixed;
    left: 10px;
    bottom: 10px;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 20px;

    a:not(:last-child) {
        padding-right: 10px;
    }
}

a {
    color: lighten(black, 20%);
}
a:hover {
    color: black;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
 {
    opacity: 0;
}
</style>

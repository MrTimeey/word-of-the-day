import Vue from 'vue';
import Vuex from 'vuex';
import * as axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        word: '',
        definition: '',
    },
    mutations: {
        setData(state, data) {
            state.word = data?.result?.word ?? '';
            state.definition = data?.result?.definition ?? '';
        },
    },
    actions: {
        async loadWord({ commit }) {
            commit('setData', {});
            let response = await axios.get('http://words.mrtimeey.de:8000/api/random');
            commit('setData', response.data);
        },
    },
    getters: {
        wordLoaded: state => {
            return state.word && state.definition;
        },
    },
    modules: {},
});

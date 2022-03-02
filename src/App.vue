<template>
  <router-view/>
</template>
<script lang="ts">
import { store } from "@/store"
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    store.commit('user/setToken', 'token');
    store.commit('user/setUserSigns', 'userSigns');
    store.commit('user/setOpenId', 'openId');
  }
})
</script>
<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    min-width: 1024px;
    min-height: 600px;
  }
</style>

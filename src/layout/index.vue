
<template>
	<el-container>
    <el-aside class="menu-nav-box">
      <Menu />
    </el-aside>
    <el-container>
      <el-header>
        <Head />
      </el-header>
      <el-main>
        <router-view v-slot="{ Component, route }">
          <transition>
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { defineComponent, ref } from 'vue'
import Head from './head.vue'
import Menu from './menu/index.vue'

export default defineComponent({
  components: {
    Head,
    Menu
  },
  setup() {
  
  },
})
</script>
<style lang="scss" scoped>

.menu-nav-box {
  transition: width .28s;
  width: 250px !important
}
.el-header:nth-child(1) {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  height: 88px;
}

.el-aside:nth-child(1) {
  width: auto;
  background-color: #303133;
  color: var(--el-text-color-primary);
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
}

.el-container:nth-child(1) {
  height: 100%;
}
</style>

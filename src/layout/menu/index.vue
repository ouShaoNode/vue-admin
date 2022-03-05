<template>
    <el-scrollbar>
    <el-menu :background-color="'#303133'" :text-color="'white'">
      <memu-item v-for="(menu, key) in allRoutes" :key="key" :menu="menu" />
    </el-menu>
  </el-scrollbar>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import MemuItem from './memuItem.vue'

export default defineComponent({
  components: {
    MemuItem
  },
  setup() {
    const allRoutes = useRouter().options.routes
    return {
      allRoutes
    }
  },
})
</script>
<style lang="scss" scoped>
.menu-nav-box {
  transition: width .28s;
  width: 250px !important
}
.el-menu {
  border: none;
}
.menu-nav-scrollbar {
  height: 100%;
}


</style>

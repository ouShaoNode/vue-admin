<template>
  <el-sub-menu v-if="showMenu && menuType === 1" :index="menu.path">
    <template #title>
        <el-icon class="displ"><location /></el-icon>
        <span>{{menu.meta.title}}</span>
    </template>
    <el-menu-item class="menu-item" v-for="(item, key) in menu.children" :key="key" :index="item.path" @click="menuItemAction()">{{item.meta.title}}</el-menu-item>
  </el-sub-menu>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Route } from '@/types/router'
import { store } from '@/store'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
type menuType = 0 | 1 | 2 // 0没有子菜单；1级子菜单，2级子菜单
export default defineComponent({
  name: 'menu-item',
  components: {
    Location,
    Document,
    Setting,
    IconMenu
  },
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  setup(props) {

    let menu = props.menu as Route
    let showMenu = menu.meta?.showMenu
    let menuType: menuType = 0
    if (menu.children && menu.children.length > 0) {
      menuType = 1
      if (menu.children[0].children && menu.children[0].children.length) {
        menuType = 2
      }
    }
    const menuItemAction = () => {
      console.log(1111)
    }
    return {
      menu,
      showMenu,
      menuType,
      menuItemAction
    }
  }
})
</script>
<style lang="scss" scoped>
.menu-item{
  background: #000000;
}
.menu-nav-box {
  transition: width .28s;
  width: 250px !important
}
</style>

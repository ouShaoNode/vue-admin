
<template>
  <el-sub-menu index="1">
    <template #title>
        <el-icon class="displ"><location /></el-icon>
        <span>认证管理</span>
    </template>
    <el-menu-item index="12-1">是</el-menu-item>
  </el-sub-menu>
</template>
<script>
import { defineComponent, ref } from 'vue'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

export default defineComponent({
  name: 'menu-item',
  components: {
    Location,
    Document,
    Setting,
    IconMenu,
  },
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    
  }
})
</script>
<style lang="scss" scoped>
.menu-nav-box {
  transition: width .28s;
  width: 250px !important
}
</style>

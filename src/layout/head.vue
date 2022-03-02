<template>
    <div class="head-box">
        <div class="user-info-box">
            <el-avatar class="user-img" :size="50" :src="circleUrl"></el-avatar>
            <div class="login-out">退出</div>
        </div>
        <div class="server-time-box">
            <el-button type="primary" round>服务器时间：20:52:20</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {

  
  }
})
</script>

<style  lang="scss" scoped>
.login-out {
    color: $color-white-opacity-2;
    font-size: $font-size-10;
    border: 1px solid $color-white-opacity-2;
    border-radius: $border-large-radius;
    padding: 0px 15px;
    height: 20px;
    line-height: 20px;
    display: flex;
    margin-left: 20px;
    &:hover {
        color: $color-danger;
        border-color: $color-danger;
        cursor: pointer;
    }
}
.user-info-box {
    display: flex;
    justify-content: center;
    align-items: end;
    padding-bottom: 20px;
}
.server-time-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
}
.head-box {
    display: flex;
    height: 100%;
    width: 100%;
}
</style>

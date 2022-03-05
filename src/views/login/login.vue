<script>
import { defineComponent, reactive, ref, onMounted } from 'vue'
import { store } from '@/store'

export default defineComponent({
	name: 'login',
  props: {
    loginAction: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const form = reactive({
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    })

    const onSubmit = () => {
      console.log('submit!')
    }
    let login = ref({
      accountText: '账号',
      accountTips: '请输入账号',
      account: '',
      passwordText: '密码',
      passwordTips: '请输入密码',
      password: '',
      btnText: '登录'
    })
    // 选中input时
    function focusAction ( type ) {
      console.log('我被选中啦')
      console.log()
    }
		//vuex 使用方式
    onMounted( () => {
			console.log('挂载完成')
			store.commit('common/changeMsg','我是同步')
			console.log(store.state.common.msg)
		})
    return {
      focusAction,
      login,
      form,
      onSubmit
    }
		// router 使用方式
		// const router = useRouter();
		// router.push("/"); 
  }
})
</script>

<template>
	<main class="login-page">
    <div class="box">
      <h2 class="box-title">后台管理</h2>
      <el-form ref="formRef" :model="form" label-width="60px">
        <el-form-item label="账号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-col :span="13">
            <el-input v-model="form.name"></el-input>
          </el-col>
          <el-col :span="2">
          </el-col>
          <el-col :span="8">
            <el-button type="success" class="tis-btn">发送验证码</el-button>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button class="btn-submit" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
	</main>
</template>

<style lang="scss" scoped>
.tis-btn {
  font-size: 10px;
}
.box-title {
  margin-top: 0px;
  text-align: center;
}
.btn-submit {
  width: 100%;
}
.box {
  width: 300px;
  padding: 20px;
  background: white;
  border-radius: 5px;
}
.login-page{
  height: 100vh;
  width: 100%;
  background: url('../../assets/images/login/login-bg.png') 0 0 no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

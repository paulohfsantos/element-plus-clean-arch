<template>
  <div>
    <div>fodase home</div>
    <el-button
      icon="el-icon-message"
      label="Show Message"
      @click="openMsg"
    ></el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'Home',

  setup() {
    const openMsg = () => {
      ElMessage({
        message: 'This is a message',
        type: 'success',
      })
    }

    return {
      openMsg,
    }
  },
})
</script>
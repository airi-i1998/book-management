<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const btnList = [
  { key: 'bookRegister', text: '登録', path: '/book-register' },
  { key: 'bookReturn', text: '返却', path: '/book-return' },
  { key: 'bookList', text: '貸し出し一覧', path: '/book-list' },
]

const bookRegister = (path: string) => {
  router.push({ path })
}

</script>

<template>
  <div class="d-flex justify-content-center align-items-center flex-wrap btn-container">
    <v-btn v-for="btn in btnList" :key="btn.key" @click="bookRegister(btn.path)" class="btn-circle mx-3 my-3"
      color="primary">
      {{ btn.text }}
    </v-btn>
  </div>
</template>

<style scoped lang="scss">
.btn-container {
  width: 100vw;
  height: 100vh;
}

.btn-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: normal;
  text-align: center;
}
</style>
<script setup lang="ts">
import { BrowserMultiFormatReader } from '@zxing/browser'

const codeReader = new BrowserMultiFormatReader()
codeReader.decodeFromVideoDevice(undefined, 'video', (result, err) => {
  if (result) {
    console.log(result)
  }
  if (err && !(err instanceof Error)) {
    console.error(err)
  }
})
</script>

<template>
  <div>
    <div class="text-center mt-10">
      <h1>QRコード読み取り</h1>
      <p class="mt-2">QRコードをカメラで読み取ってください。</p>
    </div>
    <div class="video-container">
      <video id="video" width="800" height="500" autoplay></video>
    </div>
  </div>
</template>
<style scoped lang="scss">
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background-color: #fff
}
</style>
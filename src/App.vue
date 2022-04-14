<script lang="ts" setup>
import { darkTheme } from 'naive-ui'
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'

const api = ref("")
const response = ref<any>()
const responseTime = ref()

const submit = () => {
  const start = Date.now()
  fetch(api.value)
    .then(res => res.json())
    .then(res => {
      response.value = res
      responseTime.value = Date.now() - start
    })
}

const clear = () => {
  api.value = ""
  response.value = null
  responseTime.value = null
}
</script>

<template>
<n-config-provider :theme="darkTheme">
  <div class="flex justify-center mt-10">
    <n-card title="HTTP-Req" class="max-w-[700px] min-w-[300px]">
      API link
      <div class="flex mt-2">
        <n-input 
          v-model:value="api"
          placeholder="https://api.example.com"  
          @keyup.enter="submit"
        ></n-input>
        <n-button @click="submit">Enter</n-button>
      </div>
      <Transition>
        <n-button v-if="response != null" class="mt-5" @click="clear">Clear</n-button>
      </Transition>
    </n-card>
  </div>
  <Transition>
    <div v-if="response != null" class="flex justify-center mt-10">
      <n-card title="Response" class="max-w-[700px] min-w-[300px]">
        Response time: {{ responseTime }}ms
        <ssh-pre language="json" label="JSON Response" reactive copy-button dark>
          {{ response }}
        </ssh-pre>
      </n-card>
    </div>
  </Transition>
  <n-global-style />
</n-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #2b2b2b;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

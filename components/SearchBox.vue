<template>
  <input
    id="search-text-input"
    placeholder="ค้นหาคำถาม..."
    class="placeholder:italic placeholder:text-slate-400"
    type="text"
    v-model="inputText"
  />
</template>

<script lang="ts">
import Vue from 'vue'


let lastInput: string = ''
let debounceTimer: any = null

export default Vue.extend({
  data() {
    return {
      inputText: '',
    }
  },
  watch: {
    inputText: function (val: string) {
      this.inputText = val.trim()
      if (lastInput != this.inputText) this.sendStateChange(this.inputText)
      lastInput = this.inputText
    },
  },
  methods: {
    sendStateChange: function(val: string) {
      if (debounceTimer != null) clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => {
        this.$emit('stateChange', val)
        debounceTimer = null
      }, 500)
    }
  }
})
</script>

<style>
#search-text-input {
  @apply block bg-white w-96 border rounded-md py-2 px-2 shadow-sm focus:outline-none focus:ring-1 sm:text-sm;
}
</style>

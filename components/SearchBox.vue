<template>
  <input
    id="search-text-input"
    placeholder="ค้นหาคำถาม..."
    class="placeholder:italic placeholder:text-slate-400"
    type="text"
    v-model="inputText"
  />
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            inputText: ""
        }
    },
    watch: {
        inputText: function(val) {
            this.$emit('stateChange', this.inputText)
        }
    }
})
</script>

<style>
#search-text-input {
    @apply block bg-white w-96 border rounded-md py-2 px-2 shadow-sm focus:outline-none focus:ring-1 sm:text-sm
}
</style>
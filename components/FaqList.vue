<template>
  <ul class="list-disc">
    <li class="text-2xl" v-for="(faq, idx) in faqList" v-bind:key="idx">
      {{ faq.title }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    faqList: [],
  },
})
</script>
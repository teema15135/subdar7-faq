<template>
  <div class="flex flex-row items-start justify-center">
    <div class="flex flex-col items-center">
      <Subdar7Logo />
      <SearchBox 
        class="mb-8"
        v-on:stateChange="onSearchTextBoxChanged($event)" />
      <FaqList :faqList="faqList" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DataParser from '~/utils/DataParser'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      faqList: [],
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    onSearchTextBoxChanged(text: string) {
      console.log(text)
    },
    onFaqListLoaded() {
      console.log(this.$store.state.faqs)
      this.faqList = this.$store.state.faqs
    },
    async fetchData() {
      const data = await this.$axios.$get('./data.xml')
      const parsedData = DataParser.parseXmlData(data)
      this.$store.commit('setFaqs', parsedData)
      this.onFaqListLoaded()
    },
  },
})
</script>

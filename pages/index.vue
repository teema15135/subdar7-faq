<template>
  <div class="flex flex-col items-center">
    <Subdar7Logo />
    <SearchBox v-on:stateChange="onSearchTextBoxChanged($event)"/>
    <p>{{ searchText }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DataParser from '~/utils/DataParser'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      searchText: ""
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    onSearchTextBoxChanged(text: string) {
      this.searchText = text
    },
    async fetchData() {
      const data = await this.$axios.$get("./data.xml")
      const parsedData = DataParser.parseXmlData(data)
      this.$store.commit('setFaqs', parsedData)
    }
  }
})
</script>

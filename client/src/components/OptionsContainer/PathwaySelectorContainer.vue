<template>
    <div class="pathway-selector-container">
      <div v-for="pathway in allPathways" :key="pathway">
        <pathway-selector :pathway="pathway" />
      </div>
    </div>
</template>

<script>

import PathwaySelector from './PathwaySelector.vue';

export default {
  name: 'pathway-selector-container',
  components: {
    PathwaySelector,
  },
  computed: {
    allPathways() {
      return this.$store.state.allPathways;
    },
  },
  mounted() {
    this.$store.dispatch('updateSelectedPathwaysPending', this.$store.state.selectedPathways);
  },
};
</script>

<style scoped>
  .pathway-selector-container {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    max-height: 80vh;
    margin: 10px;
  }
</style>

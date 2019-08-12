<template>
    <div class="color-selector-container">
      <color-selector
        v-for="pathway in pathways"
        :key="pathway"
        :pathway="pathway"
      />
    </div>
</template>


<script>
import ColorSelector from './ColorSelector.vue';

export default {
  name: 'color-selector-container',
  components: {
    ColorSelector,
  },
  computed: {
    pathways() {
      return [0, ...this.$store.state.selectedPathways];
    },
  },
};
</script>


<style scoped>
  .color-selector-container {
    min-height: 92px;
    overflow: auto;
  }
</style>

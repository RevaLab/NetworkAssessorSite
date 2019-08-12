<template>
    <div class="network">
      <options-container />
      <graph />
    </div>
</template>


<script>
import Graph from '@/components/Graph.vue';
import OptionsContainer from '@/components/OptionsContainer.vue';

export default {
  name: 'network',
  components: {
    OptionsContainer,
    Graph,
  },
  computed: {
  },
  mounted() {
    this.$store.dispatch('loadNetwork', {
      genes: ['A', 'B', 'C'],
      selectedPathways: [],
    })
  },
};
</script>

<style scoped>
  .network {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
</style>

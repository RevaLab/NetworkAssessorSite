<template>
    <div class="redraw-network-button">
      <button v-on:click="updateSelectedNetwork">Redraw Network</button>
    </div>
</template>

<script>
export default {
  name: 'redraw-network-button',
  computed: {
    genes() {
      return this.$store.state.queryGenes;
    },
    selectedPathwaysPending() {
      return this.$store.state.selectedPathwaysPending;
    },
  },
  methods: {
    updateSelectedNetwork() {
      this.$store.dispatch('updateSelectedPathways', this.selectedPathwaysPending);
      this.$store.dispatch('loadNetwork', {
        genes: this.genes,
        selectedPathways: this.selectedPathwaysPending,
      });
      this.$modal.hide('newPathwaysModal');
    },
  },
};
</script>

<style scoped>
  .redraw-network-button {
    text-align: center;
  }

</style>

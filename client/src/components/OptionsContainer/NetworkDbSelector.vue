<template>
  <div class="network-db-selector">
    <div class="form-input" v-for="network in networkDbs">
      <input type="radio" :id="network" :value="network" v-model="selectedNetworkDb">
      <label :for="network">{{ network }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'network-db-selector',
  computed: {
    selectedNetworkDb: {
      set(networkDb) {
        this.$store.dispatch('updateSelectedNetworkDb', networkDb);
      },
      get() {
        return this.$store.state.selectedNetworkDb;
      },
    },
    networkDbs() {
      return this.$store.state.networkDbs;
    },
  },
};
</script>

<style scoped lang="scss">
  .network-db-selector {
    display: flex;
    flex-direction: row;
    overflow: auto;
    min-height: 22px;
    justify-content: space-between;
  }

  .form-input {
    min-height: fit-content;
    cursor: pointer;
    &:hover {
      background-color: gainsboro;
    }
    * {
      cursor: inherit;
    }
  }
</style>

<template>
  <div class="pathway-db-selector">
    <div class="form-input">
      <input type="radio" id="kegg" value="kegg" v-model="selectedPathwayDb">
      <label for="kegg">KEGG</label>
    </div>
    <div class="form-input">
      <input type="radio" id="reactome" value="reactome" v-model="selectedPathwayDb">
      <label for="reactome">Reactome</label>
    </div>
  </div>
</template>

<script>
    export default {
        name: "pathway-db-selector",
        computed: {
          selectedPathwayDb: {
            set(pathwayDb) {
              this.$store.dispatch('updateSelectedPathwayDb', pathwayDb)
            },
            get() {
              return this.$store.state.selectedPathwayDb;
            }
          }
        },
    }
</script>

<style scoped lang="scss">
  * {
    cursor: pointer;
  }

  .pathway-db-selector {
    display: flex;
    flex-direction: column;
  }

  .form-input {
      display: flex;
      flex-direction: row;

    &:hover {
      background-color: gainsboro;
    }
  }

  .form-input label {
    display: block;
    width: 100%;
    padding: 0 .5em;
  }
</style>

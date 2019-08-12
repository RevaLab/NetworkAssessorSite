<template>
  <div class="degree-selector">
    <div class="form-input">
      <input type="radio" id="first_degree" value="first_degree" v-model="selectedDegree">
      <label for="first_degree">first</label>
    </div>
    <div class="form-input">
      <input type="radio" id="second_degree" value="second_degree" v-model="selectedDegree">
      <label for="second_degree">second</label>
    </div>
  </div>
</template>

<script>
    export default {
        name: "degree-selector",
        computed: {
          selectedDegree: {
            set(selectedDegree) {
              this.$store.dispatch('updateSelectedDegree', selectedDegree)
            },
            get() {
              return this.$store.state.selectedDegree;
            }
          }
        },
    }
</script>

<style scoped lang="scss">
  .pathway-db-selector {
    display: flex;
    flex-direction: row;
    overflow: auto;
    min-height: 25px;
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

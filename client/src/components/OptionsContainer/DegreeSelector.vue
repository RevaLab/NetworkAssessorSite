<template>
  <div class="degree-selector">
    <select
      name="network_degree"
      id="network_degree"
      v-model="selectedDegree"
    >
      <option v-for="(option, idx) in degrees" :value="option" :key="option">
        {{ degreeLabels[idx] }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'degree-selector',
  data() {
    return {
      degrees: [
        'first_degree',
        'second_degree'
      ],
      degreeLabels: [
        'First',
        'Second',
      ]
    };
  },
  computed: {
    selectedDegree: {
      set(selectedDegree) {
        this.$store.dispatch('updateSelectedDegree', selectedDegree);
      },
      get() {
        return this.$store.state.selectedDegree;
      },
    },
  },
};
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

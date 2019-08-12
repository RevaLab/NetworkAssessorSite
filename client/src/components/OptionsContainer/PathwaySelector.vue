<template>
    <div class="pathway-selector">
        <input v-if="pathway !== 0" type="checkbox" :id="pathway" v-model="checked">
        <label class="pathway-name" :for="pathway">{{ pathwayName }}</label>
    </div>
</template>

<script>

export default {
  name: 'pathway-selector',
  props: {
    pathway: Number,
  },
  computed: {
    k_pathway_v_details() {
      return this.$store.state.k_pathway_v_details;
    },
    checked: {
      set(add) {
        let newPathways = [];
        if (add) {
          newPathways = this.pathways.concat([this.pathway]);
        } else {
          newPathways = this.pathways.filter(pw => this.pathway !== pw);
        }
        this.$store.dispatch('updateSelectedPathwaysPending', newPathways);
      },
      get() {
        return this.$store.state.selectedPathwaysPending.includes(this.pathway);
      },
    },
    pathways() {
      return this.$store.state.selectedPathwaysPending;
    },
    pathwayName() {
      return this.$store.state.k_pathway_v_details[this.pathway].name;
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
  * {
    cursor: pointer;
  }

  .pathway-selector {
    display: flex;
    flex-direction: row;

    &:hover {
      background-color: gainsboro;
    }

    label {
      display: block;
      width: 100%;
    }
  }

  .pathway-name {
    padding: 0 .5em;
  }
</style>

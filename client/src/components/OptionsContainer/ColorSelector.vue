<template>
    <div class="color-selector">
      <span class="pathway-name">{{ pathwayName }}</span>
      <button
        v-on:click="showSwatchModal"
        :style="{ 'background-color': this.color }">
      </button>
      <modal :name="modalName">
        <swatches
          v-model="color"
          colors="text-advanced"
          popover-to="right"
          shapes="circles"
          row-length="20"
          inline
        >
        </swatches>
      </modal>
    </div>
</template>

<script>
import Swatches from 'vue-swatches';

export default {
  name: 'color-selector',
  props: {
    pathway: Number,
  },
  components: { Swatches },
  data() {
    return {
      triggerStyle: {
        width: '20px',
        height: '20px',
        margin: '5px',
      },
    };
  },
  computed: {
    color: {
      set(val) {
        this.updateColor(val);
      },
      get() {
        return this.$store.state.k_pathway_v_color[this.pathway];
      },
    },
    pathways() {
      return this.$store.state.selectedPathways;
    },
    pathwayName() {
      return this.$store.state.k_pathway_v_details[this.pathway].name;
    },
    modalName() {
      return `${this.pathway}-color-modal`;
    },
  },
  methods: {
    updateColor(color) {
      this.$store.dispatch(
        'updateColor',
        {
          color,
          pathway: this.pathway,
        },
      );
    },
    showSwatchModal() {
      this.$modal.show(this.modalName);
    },
  },
};
</script>

<style scoped>
  .color-selector {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
  }

  .pathway-name {
    padding-right: 2px;
  }

  button {
    height:10px;
    width:10px;
    cursor:pointer;
  }
</style>

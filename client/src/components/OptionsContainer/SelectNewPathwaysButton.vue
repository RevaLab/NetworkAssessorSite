<template>
    <div class="select-new-pathways-button">
      <button v-on:click="showSelectPathwayModal">Select new pathways</button>
      <modal name="newPathwaysModal" >
        <div id="newPathwaysModal">
          <pathway-selector-container />
          <redraw-network-button />
        </div>
      </modal>
    </div>
</template>

<script>
// import PathwaySelector from "./PathwaySelector";
import PathwaySelectorContainer from './PathwaySelectorContainer.vue';
import RedrawNetworkButton from './RedrawNetworkButton.vue';

export default {
  components: {
    RedrawNetworkButton,
    PathwaySelectorContainer,
    // PathwaySelector
  },
  name: 'select-new-pathways-button',
  methods: {
    showSelectPathwayModal() {
      this.$modal.show('newPathwaysModal', {}, {
        scrollable: true,
      });
    },
  },
};
</script>

<style>
  .select-new-pathways-button .v--modal-box {
    height: 100vh !important;
    top: 0 !important;
    left: 0 !important;
    width: 325px !important;
  }
</style>

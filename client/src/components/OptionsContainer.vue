<template>
    <div class="options-container">
      <degree-selector />
      <!--<network-db-selector />-->
      <!--<pathway-db-selector />-->
      <select-new-pathways-button />
      <color-selector-container />
    </div>
</template>

<script>
import DegreeSelector from './OptionsContainer/DegreeSelector.vue';
// import PathwayDbSelector from './OptionsContainer/PathwayDbSelector.vue';
import ColorSelectorContainer from './OptionsContainer/ColorSelectorContainer.vue';
// import NetworkDbSelector from "./OptionsContainer/NetworkDbSelector";
import SelectNewPathwaysButton from './OptionsContainer/SelectNewPathwaysButton.vue';

export default {
  name: 'options-container',
  components: {
    SelectNewPathwaysButton,
    DegreeSelector,
    // NetworkDbSelector,
    ColorSelectorContainer,
    // PathwayDbSelector,
  },
};
</script>

<style scoped>
  .options-container {
    display: flex;
    flex-flow: column nowrap;
    max-height: calc(100vh - 100px);
    min-width: 300px;
    min-height: 200px;
    border: solid 1px black;
    background-color: whitesmoke;
    box-sizing: border-box;
    padding: 8px;
  }
</style>

<template>
  <div class="wrapper">
    <ComponentOuter :propText1="text1" :propText2="text2" :propText3="text3" />
  </div>
</template>

<script>
import ComponentOuter from "./components/ComponentOuter.vue";

export default {
  name: "App",
  components: {
    ComponentOuter,
  },

  data() {
    return {
      text1: "Text for Component 1 from Root Component",
      text2: "Text for Component 2 from Root Component",
      text3: "Text for Component 3 from Root Component",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

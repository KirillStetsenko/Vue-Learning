<template>
  <div class="wrapper">
    <div class="block">
      <div class="ownText">
        {{ ownText }}
      </div>
      <div class="propText">
        {{ propText1 }}
      </div>
      <div class="componentBlock">
        <ComponentMiddle :propText2="propText2" :propText3="propText3" />
      </div>
    </div>
  </div>
</template>
<script>
import ComponentMiddle from "./ComponentMiddle .vue";

export default {
  props: ["propText1", "propText2", "propText3"],
  data() {
    return {
      ownText: "Own component text",
    };
  },
  components: { ComponentMiddle },
};
</script>

<style scoped>
.block {
  width: 400px;
  margin: 10px auto;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #000;
  background-color: rgb(132, 132, 132);
  border-radius: 10px;
  transition: transform 100ms ease-in;
}

.block:hover {
  transform: scale(1.1);
}

.ownText {
  color: rgb(255, 25, 25);
}

.propText {
  color: rgb(27, 27, 27);
}
</style>

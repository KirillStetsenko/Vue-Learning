<template>
  <div class="wrapper">
    <div class="block">
      <div class="ownText">
        {{ ownTitle }}
      </div>
      <div class="propText">
        {{ propText2 }}
      </div>
      <div class="componentBlock">
        <ComponentInner :propText3="propText3" />
      </div>
    </div>
  </div>
</template>
<script>
import ComponentInner from "./ComponentInner.vue";

export default {
  data() {
    return {
      ownTitle: "Own Text Middle component",
    };
  },
  props: ["propText2", "propText3"],
  components: { ComponentInner },
};
</script>
<style scoped>
.block {
  margin: 10px auto;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #000;
  background-color: rgb(163, 163, 163);
  border-radius: 10px;
  transition: transform 100ms ease-in;
}

.block:hover {
  transform: scale(1.1);
}

.ownText {
  color: rgb(0, 255, 38);
}

.propText {
  color: rgb(27, 27, 27);
}
</style>

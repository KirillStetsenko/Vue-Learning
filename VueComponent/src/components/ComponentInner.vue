<template>
  <div class="wrapper">
    <div class="block">
      <div class="ownText">
        {{ ownText }}
      </div>
      <div class="propText">
        {{ propText3 }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ownText: "Own text Inner Component",
    };
  },
  props: ["propText3"],
};
</script>
<style scoped>
.block {
  margin: 20px auto;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #000;
  background-color: rgb(187, 187, 187);
  border-radius: 10px;
  transition: transform 100ms ease-in;
}

.block:hover {
  transform: scale(1.1);
}

.ownText {
  color: blue;
}

.propText {
  color: rgb(27, 27, 27);
}
</style>

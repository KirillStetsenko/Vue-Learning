const Inner = {
  template: `
  <div class='mainBlock inner'>
    <div class='titleBlock'>
    {{innerTitle}}
    </div>
    <div class='componentsBlock'>
    </div>
    <div class='buttonBlock'>
    <button @click='changeInnerByInner'>Change Inner</button>
    <button @click='changeMiddleByInner'>Change Middle</button>
    <button @click='changeOuterByInner'>Change Outer</button>
    </div>
  </div>
  `,

  data() {
    return {
      innerTitle: "Inner title",
    };
  },

  methods: {
    changeInnerByInner() {
      this.innerTitle = "Change by Inner";
    },

    changeInnerByOuter() {
      this.innerTitle = "Change by Outer";
    },

    changeInnerByMiddle() {
      this.innerTitle = "Change by Middle";
    },

    changeMiddleByInner() {
      this.$emit("toMiddleFromInner");
    },

    changeOuterByInner() {
      this.$emit("toOuterFromInner");
    },
  },
};

const Middle = {
  template: `
  <div class='mainBlock middle'>
    <div class='titleBlock'>
    {{middleTitle}}
    </div>
    <inner ref='innerHook' @toMiddleFromInner='changeMiddleByInner' @toOuterFromInner='$emit("toOuterFromInner")'></inner>
    <div class='buttonBlock'>
    <button @click='changeInnerByMiddle'>Change Inner</button>
    <button @click='changeMiddleByMiddle'>Change Middle</button>
    <button @click='changeOuterByMiddle'>Change Outer</button>
    </div>
  </div>
  `,

  data() {
    return {
      middleTitle: "Middle title",
    };
  },

  methods: {
    changeMiddleByMiddle() {
      this.middleTitle = "Change by Middle";
    },

    changeMiddleByOuter() {
      this.middleTitle = "Change by Outer";
    },

    changeInnerByMiddle() {
      this.$refs.innerHook.changeInnerByMiddle();
    },

    changeOuterByMiddle() {
      this.$emit("toOuterfromMiddle");
    },

    changeMiddleByInner() {
      this.middleTitle = "Change by Inner";
    },
  },

  components: {
    inner: Inner,
  },
};

const Outer = {
  template: `
  <div class='mainBlock outer'>
    <div class='titleBlock'>
    {{outerTitle}}
    </div>
    <div class='componentsBlock'>
    <middle ref='middleHook' @toOuterfromMiddle='changeOuterByMiddle' @toOuterFromInner='changeOuterByInner'></middle>
    </div>
    <div class='buttonBlock'>
    <button @click='changeInnerByOuter'>Change Inner</button>
    <button @click='changeMiddleByOuter'>Change Middle</button>
    <button @click='changeOuterByOuter'>Change Outer</button>
    </div>
  </div>
  `,

  data() {
    return {
      outerTitle: "Outer title",
    };
  },

  methods: {
    changeOuterByOuter() {
      this.outerTitle = "Change by Outer";
    },

    changeMiddleByOuter() {
      this.$refs.middleHook.changeMiddleByOuter();
    },

    changeInnerByOuter() {
      this.$refs.middleHook.$refs.innerHook.changeInnerByOuter();
    },

    changeOuterByMiddle() {
      this.outerTitle = "Change by Middle";
    },

    changeOuterByInner() {
      this.outerTitle = "Change by Inner";
    },
  },

  components: {
    middle: Middle,
  },
};

const app = Vue.createApp({
  components: {
    outer: Outer,
  },
});

app.mount("#app");

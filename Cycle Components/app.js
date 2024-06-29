const Component1 = {
  template: `
  <div>
  Component1
  </div>
  `,
};

const Component2 = {
  template: `
  <div>
  Component2
  </div>
  `,
};

const Component3 = {
  template: `
  <div>
  Component3
  </div>
  `,
};

const app = Vue.createApp({
  components: {
    component1: Component1,
    component2: Component2,
    component3: Component3,
  },
  data() {
    return {
      currentComponent: "component1",
    };
  },
  methods: {
    cycle() {
      if (this.currentComponent === "component1") {
        this.currentComponent = "component2";
      } else {
        this.currentComponent =
          this.currentComponent === "component2" ? "component3" : "component1";
      }
    },
  },
});

app.mount("#app");

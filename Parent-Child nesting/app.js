const Child = {
  template: `
  <div>
    <div>
      {{childTitle}}  
    </div>
    <button @click='updateChildFromChild'>Update Child</button>
    <button @click='updateParentFromChild'>Update Parent</button>
  </div>
  `,

  data() {
    return {
      childTitle: "Child title",
    };
  },

  methods: {
    updateChildFromChild() {
      this.childTitle = "Update by Child";
    },
    updateParentFromChild() {
      this.$emit("updateParentFromChild");
    },
    updateChildFromParent() {
      this.childTitle = "Update by Parent";
    },
  },
};

const Parent = {
  template: `
  <div>
    <div>
      {{parentTitle}}  
    </div>
      <button @click='updateParentFromParent'>Update Parent</button>
      <button @click='updateChildFromParent'>Update Child</button>
      <child @updateParentFromChild='updateParentFromChild' ref='child'></child>
  </div>
  `,

  data() {
    return {
      parentTitle: "Parent title",
    };
  },

  methods: {
    updateParentFromParent() {
      this.parentTitle = "Update by Parent";
    },
    updateParentFromChild() {
      this.parentTitle = "Update by Child";
    },
    updateChildFromParent() {
      this.$refs.child.updateChildFromParent();
    },
  },
  components: { child: Child },
};

const app = Vue.createApp({
  components: {
    parent: Parent,
  },
});

app.mount("#app");

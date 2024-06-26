const SubChild = {
  template: `
  <div class='subChild mainBlock'>
    <div class='titleBlock'>
      {{subChildTitle}}  
    </div>

    <div class='buttonBlock'>
    <button @click='updateSubChildBySubChild'>Update SubChild</button>
    <button @click='updateChildBySubChild'>Update Child</button>
    <button @click='updateParentBySubChild'>Update Parent</button>
    </div>
  </div>
  `,

  data() {
    return {
      subChildTitle: "SubChild title",
    };
  },

  methods: {
    updateSubChildBySubChild() {
      this.subChildTitle = "Update by SubChild";
    },

    updateSubChildByChild() {
      this.subChildTitle = "Update by Child";
    },

    updateSubChildByParent() {
      this.subChildTitle = "Update by Parent";
    },

    updateChildBySubChild() {
      this.$emit("updateChildBySubChild");
    },
    updateParentBySubChild() {
      this.$emit("updateParentBySubChild");
    },
  },
};

const Child = {
  template: `
  <div class='child mainBlock'>
    <div class='titleBlock'>
      {{childTitle}}  
    </div>

    <div class=componentsBlock>
    <sub-child ref='subChild' @updateChildBySubChild='updateChildBySubChild' @updateParentBySubChild='updateParentBySubChild'></sub-child>
    </div>
    
    <div class='buttonBlock'>
    <button @click='updateSubChildByChild'>Update SubChild</button>
    <button @click='updateChildByChild'>Update Child</button>
    <button @click='updateParentByChild'>Update Parent</button>
    </div>
  </div>
  `,

  data() {
    return {
      childTitle: "Child title",
    };
  },

  methods: {
    updateChildByChild() {
      this.childTitle = "Update by Child";
    },

    updateChildByParent() {
      this.childTitle = "Update by Parent";
    },

    updateChildBySubChild() {
      this.childTitle = "Update by SubChild";
    },

    updateParentByChild() {
      this.$emit("updateParentByChild");
    },

    updateSubChildByChild() {
      this.$refs.subChild.updateSubChildByChild();
    },

    updateSubChildByParent() {
      this.$refs.subChild.updateSubChildByChild();
    },

    updateParentBySubChild() {
      this.$emit("updateParentBySubChild");
    },
  },

  components: {
    "sub-child": SubChild,
  },
};

const Parent = {
  template: `
  <div class='parent mainBlock'>
    <div class='titleBlock'>
      {{parentTitle}}  
    </div>

    <div class=componentsBlock>
      <child ref='child' @updateParentBySubChild='updateParentBySubChild' @updateParentByChild='updateParentByChild'></child>
    </div>
  
    <div class='buttonBlock'>
      <button @click='updateSubChildByParent'>Update SubChild</button>
      <button @click='updateChildByParent'>Update Child</button>
      <button @click='updateParentByParent'>Update Parent</button>
    </div>
</div>
  `,

  data() {
    return {
      parentTitle: "Parent title",
    };
  },

  methods: {
    updateParentByParent() {
      this.parentTitle = "Update by Parent";
    },

    updateParentByChild() {
      this.parentTitle = "Update by Child";
    },

    updateParentBySubChild() {
      this.parentTitle = "Update by SubChild";
    },

    updateChildByParent() {
      this.$refs.child.updateChildByParent();
    },

    updateSubChildByParent() {
      this.$refs.child.$refs.subChild.updateSubChildByParent();
    },
  },

  components: {
    child: Child,
  },
};

const app = Vue.createApp({
  components: {
    parent: Parent,
  },
});

app.mount("#app");

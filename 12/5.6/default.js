Vue.component("child", {
  template: '<button @click="add">提交</button>',
  methods: {
    add: function() {
      console.log("child");
      this.$emit("dot", 1, 2);
    }
  }
});

Vue.component("parent", {
  template: '<child @dot="add"></child>',
  methods: {
    add: function(left, right) {
      console.log("parent", left, right);
    }
  }
});

var vm = new Vue({
  el: "#container",
  methods: {
    add: function(left, right) {
      console.log("root", left, right);
    }
  }
});


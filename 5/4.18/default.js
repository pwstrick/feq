Vue.component("child", {
  data: function() {
    return {
      names: ["strick", "freedom"]
    };
  },
  template: '<input ref="txt" />',
  mounted: function() {
    console.log(this.$refs); 	//{txt: input}
  }
});

Vue.component("parent", {
  template: '<child ref="child"></child>',
  mounted: function() {
    console.log(this.$refs);	//{child: VueComponent}
  }
});

var vm = new Vue({
  el: "#container"
});

//console.log(vm.$refs.parent.$refs.child.$refs);
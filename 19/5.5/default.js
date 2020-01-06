// Vue.directive("autoEnter", {
// 	inserted: function (el) {
// 		el.value = "strick";
// 	}
// });

var vm = new Vue({
  el: "#container",
  directives: {
    autoEnter: {
      inserted: function(el) {
        el.value = "strick";
      }
    }
  }
});






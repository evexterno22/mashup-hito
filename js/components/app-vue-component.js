Vue.component('header-component',{
  template:'#header-component'

});

Vue.component('main-component',{
  template:'#main-component'
});

Vue.component('footer-component',{
  template:'#footer-component'
});

document.addEventListener("qlik-cargado", () => {

	window.mashupVue = new Vue({
    router
  }).$mount('#mashup-vue');
  let evento = new Event("vue-cargado");

	document.dispatchEvent(evento);
})

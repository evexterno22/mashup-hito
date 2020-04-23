let headerComponent ={
  template:'#header-component',
};
let mainComponent={
  template:'#main-component'
};
let footerComponent={
  template:'#footer-component'
};
document.addEventListener("qlik-cargado", () => {
	window.mashupVue = new Vue({
    router: router,
    components:{
      'header-component': headerComponent,
      'main-component': mainComponent,
      'footer-component': footerComponent
    },
    mounted(){
      var sidenav = document.querySelectorAll('.sidenav');
      var sidenav1 = document.querySelectorAll('#sidenav-1');
      var dropdown1 = document.querySelectorAll('.dropdown-trigger');
      var btn = document.querySelectorAll('.fixed-action-btn');
      var optSidenav = {};
      var instDropdown1=M.Dropdown.init(dropdown1);
      var instSidenav = M.Sidenav.init(sidenav, optSidenav);
      var instSidenav1 = M.Sidenav.init(sidenav1,{ edge: 'left' });
      var instBtn = M.FloatingActionButton.init(btn, {});
      
    }
  }).$mount('#mashup-vue');
  let evento = new Event("vue-cargado");
	document.dispatchEvent(evento);
})

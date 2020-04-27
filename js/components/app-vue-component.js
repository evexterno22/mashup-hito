let headerComponent ={
  template:'#header-component',
  data: function(){
    return{
      modal:{key:0,id:'modalKPI',size:"s12 m12 l12",style:'kpi-l-modal',keyApp:0,qlik:'qamd'}
    }
  },
  methods:{
    modalShow: function(){
      window.appQlik[this.modal.keyApp].getObject(this.modal.id+this.modal.key,this.modal.qlik);
    }
  },
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
      var modal = document.querySelectorAll('.modal');
    
      var optSidenav = {};
      
      var instDropdown1=M.Dropdown.init(dropdown1);
      var instSidenav = M.Sidenav.init(sidenav, optSidenav);
      var instSidenav1 = M.Sidenav.init(sidenav1,{ edge: 'left' });
      var instBtn = M.FloatingActionButton.init(btn, {});
      var instModal = M.Modal.init(modal, {});
      
    }
  }).$mount('#mashup-vue');
  let evento = new Event("vue-cargado");
	document.dispatchEvent(evento);
})

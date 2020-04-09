Vue.component('home-component',{
  template:'#home-component'
});

Vue.component('saldos-component',{
  template:'#saldos-component'
});


const routes=[
  {path: '/home', component: { template: '<home-component></home-component>'}},
  {path: '/saldos', component: { template: '<saldos-component></saldos-component>'}}
];

const router = new VueRouter({
  routes: routes,
  //base:"/extensions/mashul-qlik-vue-material-cdn/mashul-qlik-vue-material-cdn.html#",
  mode:"hash"
});

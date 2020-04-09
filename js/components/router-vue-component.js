Vue.component('home-component',{
  template:'#home-component',
  data:function () {
      return {
        listKPI:[
          {id:0,url:'home',title:'Gráfica ejemplo 0'}
          ,{id:1,url:'home',title:'Gráfica ejemplo 1'}
          /*,{id:2,title:'Gráfica ejemplo'}
          ,{id:3,title:'Gráfica ejemplo'}*/
        ]
      }
    }
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

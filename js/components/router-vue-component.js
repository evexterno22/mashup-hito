let homeComponent = {
  template: '#home-component',
  data: function () {
    return {
      rowLargeKPI1: [
        { id: 0, url: 'home', title: 'Gráfica ejemplo 0' }
        , { id: 1, url: 'home', title: 'Gráfica ejemplo 1' }
        /*,{id:2,title:'Gráfica ejemplo'}
        ,{id:3,title:'Gráfica ejemplo'}*/
      ]
    }
  },
  mounted() {
    window.appQlik.getObject('QV01', 'jhTmTRy');
    window.appQlik.getObject('kpihome0', 'UkushK');
  }
};

let saldosComponent = {
  template: '#saldos-component'
};


const routes = [
  { path: '/', component: homeComponent },
  { path: '/saldos', component: saldosComponent }
];

const router = new VueRouter({
  routes: routes,
  //base:"/extensions/mashul-qlik-vue-material-cdn/mashul-qlik-vue-material-cdn.html#",
  mode: "hash"
});

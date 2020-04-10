let homeComponent = {
  template: '#home-component',
  data: function () {
    return {
      rowXLargeKPI1: [
          { key: 0, id: 'homeXLKPI', title: 'Gráfica ejemplo 0.0' }
      ]
      ,rowLargeKPI1: [
        { key: 0, id: 'homeLKPI', title: 'Gráfica ejemplo 0.1' }
      ]
      ,rowMediumKPI1: [
          { key: 0, id: 'homeMKPI', title: 'Gráfica ejemplo 1' }
        , { key: 1, id: 'homeMKPI', title: 'Gráfica ejemplo 2' }
      ]
      ,rowSmallKPI1: [
          { key: 0, id: 'homeSKPI', title: 'Gráfica ejemplo 3' }
        , { key: 1, id: 'homeSKPI', title: 'Gráfica ejemplo 4' }
        , { key: 2, id: 'homeSKPI', title: 'Gráfica ejemplo 5' }
      ]
      ,rowXSmallKPI1: [
        { key: 0, id: 'homeXSKPI', title: 'Gráfica ejemplo 6' }
      , { key: 1, id: 'homeXSKPI', title: 'Gráfica ejemplo 7' }
      , { key: 2, id: 'homeXSKPI', title: 'Gráfica ejemplo 8' }
      , { key: 3, id: 'homeXSKPI', title: 'Gráfica ejemplo 9' }
    ]
    }
  },
  mounted() {
    window.appQlik.getObject('homeMKPI0', 'UkushK');
    window.appQlik.getObject('homeMKPI1', 'jhTmTRy');
    window.appQlik.getObject('homeSKPI1', 'fPzFZu');
    window.appQlik.getObject('homeLKPI0', 'qgVhE');
    window.appQlik.getObject('homeXLKPI0', 'Btbd');
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

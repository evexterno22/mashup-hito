let homeComponent = {
  template: '#home-component',
  data: function () {
    return {
      rowXLargeKPI1: [
          { key: 0, id: 'homeXLKPI',size:'s12 m12 l12',qlik:'Btbd', title: 'Gráfica ejemplo 0.0',style:'kpi-xl' }
      ]
      ,rowLargeKPI1: [
        { key: 0, id: 'homeLKPI',size:'s12 m12 l12',qlik:'qgVhE', title: 'Gráfica ejemplo 0.1',style:'kpi-l' }
      ]
      ,rowMediumKPI1: [
          { key: 0, id: 'homeMKPI',size:'s12 m6 l6', qlik:'UkushK', title: 'Gráfica ejemplo 1',style:'kpi-m'}
        , { key: 1, id: 'homeMKPI',size:'s12 m6 l6', qlik:'jhTmTRy', title: 'Gráfica ejemplo 2', style:'kpi-m'}
      ]
      ,rowSmallKPI1: [
          { key: 0, id: 'homeSKPI',size:'s12 m6 l4',qlik:'', title: 'Gráfica ejemplo 3',style:'kpi-s' }
        , { key: 1, id: 'homeSKPI',size:'s12 m6 l4',qlik:'fPzFZu', title: 'Gráfica ejemplo 4',style:'kpi-s' }
        , { key: 2, id: 'homeSKPI',size:'s12 m6 l4',qlik:'', title: 'Gráfica ejemplo 5', style:'kpi-s' }
      ]
      ,rowXSmallKPI1: [
        { key: 0, id: 'homeXSKPI',size:'s6 m4 l3',qlik:'', title: 'Gráfica ejemplo 6',style:'kpi-xs'}
      , { key: 1, id: 'homeXSKPI',size:'s6 m4 l3',qlik:'', title: 'Gráfica ejemplo 7',style:'kpi-xs'}
      , { key: 2, id: 'homeXSKPI',size:'s6 m4 l3',qlik:'', title: 'Gráfica ejemplo 8',style:'kpi-xs'}
      , { key: 3, id: 'homeXSKPI',size:'s6 m4 l3',qlik:'', title: 'Gráfica ejemplo 9',style:'kpi-xs'}
    ]
    }
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

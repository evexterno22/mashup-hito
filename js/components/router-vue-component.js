/*
Size XL: s12 m12 l12 Style: kpi-xl,
Size L: s12 m12 l12 Style: kpi-,
Size M: s12 m6 l6 Style: kpi-,
Size S: s12 m6 l4 Style: kpi-,
Size XS: s6 m4 l3 Style: kpi-xs,
*/

let homeComponent = {
  template: '#home-component',
  data: function () {
    return {
      row1KPI: [
        { key: 0, id: 'homeKPI',size:'s6 m4 l3',qlik:'NrHfp', title: 'Gráfica ejemplo 3',style:'kpi-xs', download: true, titleBottom:'Bottom'}
      , { key: 1, id: 'homeKPI',size:'s6 m4 l3',qlik:'ajMAEu', title: 'Gráfica ejemplo 4',style:'kpi-xs', download: true, titleBottom:''}
      , { key: 2, id: 'homeKPI',size:'s6 m4 l3',qlik:'MEAjCJ', title: 'Gráfica ejemplo 5',style:'kpi-xs', download: true, titleBottom:''}
      , { key: 3, id: 'homeKPI',size:'s6 m4 l3',qlik:'fNGRa', title: 'Gráfica ejemplo 6',style:'kpi-xs', download: true, titleBottom:''}
    ]
    ,row2KPI: [
      { key: 4, id: 'homeKPI',size:'s12 m6 l6',qlik:'Btbd', title: '',style:'kpi-xs-home' , download: false, titleBottom:''}
    ]
    ,row3KPI: [
      { key: 5, id: 'homeKPI',size:'s12 m6 l6', qlik:'vCNaSe', title: 'Gráfica ejemplo 1',style:'kpi-m', download: true, titleBottom:''}
    , { key: 6, id: 'homeKPI',size:'s12 m6 l6', qlik:'akDGX', title: 'Gráfica ejemplo 2', style:'kpi-m', download: true, titleBottom:''}
    ]
    }
  }
};

let flujosComponent = {
  template: '#flujos-component',
  data: function (){
    return{
      row1KPI: [
        { key: 0, id: 'flujosKPI',size:'s12 m8 l8',qlik:'Btbd', title: 'Gráfica ejemplo 1',style:'kpi-m' , download: true, titleBottom:''}
      , { key: 1, id: 'flujosKPI',size:'s12 m4 l4',qlik:'Btbd', title: 'Gráfica ejemplo 2',style:'kpi-m' , download: true, titleBottom:''}
      ]
      ,row2KPI: [
        { key: 2, id: 'flujosKPI',size:'s12 m8 l8',qlik:'Btbd', title: 'Gráfica ejemplo 3',style:'kpi-m' , download: true, titleBottom:''}
      , { key: 3, id: 'flujosKPI',size:'s12 m4 l4',qlik:'Btbd', title: 'Gráfica ejemplo 4',style:'kpi-m' , download: true, titleBottom:''}
      ]
      ,row3KPI: [
        { key: 4, id: 'flujosKPI',size:'s12 m8 l8',qlik:'Btbd', title: 'Gráfica ejemplo 5',style:'kpi-m' , download: true, titleBottom:''}
      , { key: 5, id: 'flujosKPI',size:'s12 m4 l4',qlik:'Btbd', title: 'Gráfica ejemplo 6',style:'kpi-m' , download: true, titleBottom:''}
      ]
      ,row4KPI: [
        { key: 6, id: 'flujosKPI',size:'s12 m8 l8',qlik:'Btbd', title: 'Gráfica ejemplo 7',style:'kpi-m' , download: true, titleBottom:''}
      , { key: 7, id: 'flujosKPI',size:'s12 m4 l4',qlik:'Btbd', title: 'Gráfica ejemplo 8',style:'kpi-m' , download: true, titleBottom:''}
      ]
    }
  }
};

let incumplimientoComponent = {
  template: '#incumplimiento-component',
  data: function (){
    return{
      row1KPI: [
        { key: 0, id: 'incumplimientoKPI',size:'s12 m12 l12',qlik:'Btbd', title: 'Gráfica ejemplo 1',style:'kpi-l' , download: true, titleBottom:''}
      ]
      ,row2KPI: [
        { key: 1, id: 'incumplimientoKPI',size:'s12 m12 l12',qlik:'Btbd', title: 'Gráfica ejemplo 2',style:'kpi-l' , download: true, titleBottom:''}
      ]
      , row3KPI: [
        { key: 2, id: 'incumplimientoKPI',size:'s12 m12 l12',qlik:'Btbd', title: 'Gráfica ejemplo 3',style:'kpi-l' , download: true, titleBottom:''}
      ]

    }
  }
};

let distribucionComponent = {
  template: '#distribucion-component',
  data: function (){
    return{
      row1KPI: [
        { key: 0, id: 'distribucionKPI',size:'s12 m12 l12',qlik:'Btbd', title: 'Gráfica ejemplo 1',style:'kpi-m' , download: true, titleBottom:''}
      ]
      ,row2KPI: [
        { key: 1, id: 'distribucionKPI',size:'s12 m12 l12',qlik:'Btbd', title: 'Gráfica ejemplo 2',style:'kpi-m' , download: true, titleBottom:''}
      ]
      , row3KPI: [
        { key: 2, id: 'distribucionKPI',size:'s12 m12 l12',qlik:'Btbd', title: 'Gráfica ejemplo 3',style:'kpi-m' , download: true, titleBottom:''}
      ]

    }
  }
};

let reporteComponent = {
  template: '#reporte-component',
  data: function (){
    return{
      row1KPI: [
        { key: 0, id: 'reporteKPI',size:'s12 m12 l12',qlik:'Btbd', title: 'Gráfica ejemplo 1',style:'kpi-xl' , download: false, titleBottom:''}
      ]
    }
  }
};

let matrizComponent = {
  template: '#matriz-component',
  data: function (){
    return{
      
      row1KPI: [
        { key: 0, id: 'matrizKPI',size:'s12 m12 l12',qlik:'Btbd', title: 'Gráfica ejemplo 1',style:'kpi-l', download: true, titleBottom:''}
      ]
      ,row2KPI: [
        { key: 1, id: 'matrizKPI',size:'s12 m12 l12',qlik:'Btbd', title: 'Gráfica ejemplo 2',style:'kpi-l' , download: true, titleBottom:''}
      ]
      ,row3KPI: [
        { key: 2, id: 'matrizKPI',size:'s2 m2 l2',qlik:'Btbd', title: '',style:'kpi-xs-matriz' , download: false, titleBottom:''}
      , { key: 3, id: 'matrizKPI',size:'s2 m2 l2',qlik:'Btbd', title: '',style:'kpi-xs-matriz' , download: false, titleBottom:''}
      ]
      ,row4KPI: [
        { key: 4, id: 'matrizKPI',size:'s12 m6 l6',qlik:'Btbd', title: 'Gráfica ejemplo 3',style:'kpi-s' , download: true, titleBottom:''}
      , { key: 5, id: 'matrizKPI',size:'s12 m6 l6',qlik:'Btbd', title: 'Gráfica ejemplo 4',style:'kpi-s' , download: true, titleBottom:''}
      ]
    }
  }
};

let linksComponent = {
  template: '#links-component',
  data: function (){
    return{
    }
  }
};


const routes = [
  { path: '/', component: homeComponent }
  ,{ path: '/Flujos', component: flujosComponent }
  ,{ path: '/Incumplimiento', component: incumplimientoComponent }
  ,{ path: '/Distribucion', component: distribucionComponent }
  ,{ path: '/Reporte', component: reporteComponent }
  ,{ path: '/Matriz', component: matrizComponent }
  ,{ path: '/Links', component: linksComponent }
];

const router = new VueRouter({
  routes: routes,
  //base:"/extensions/mashul-qlik-vue-material-cdn/mashul-qlik-vue-material-cdn.html#",
  mode: "hash"
});

Vue.component('kpi-component',{
  props:['kpi'],
  template:'#kpi-component',
  mounted() {
    window.appQlik[this.kpi.keyApp].getObject(this.kpi.id+this.kpi.key,this.kpi.qlik);
  },
  methods:{
    download(){
      //alert("hola mundo");
      window.appQlik[this.kpi.keyApp].getObject(this.kpi.qlik).then(model => {
        window.appQlik[this.kpi.keyApp].table(model).exportData({'format':'CSV_C','state':'A','filename': 'exportdata.csv','download': true});
      });
    }
  }
});

Vue.component('kpiin-component',{
  props:['kpiin'],
  template:'#kpiin-component',
  mounted() {
    window.appQlik[this.kpiin.keyApp].getObject(this.kpiin.id+this.kpiin.key,this.kpiin.qlik);
  },
  methods:{
    download(){
      //alert("hola mundo");
      window.appQlik[this.kpiin.keyApp].getObject(this.kpiin.qlik).then(model => {
        window.appQlik[this.kpiin.keyApp].table(model).exportData({'format':'CSV_C','state':'A','filename': 'exportdata.csv','download': true});
      });
    }
  }
});


Vue.component('sidenav-component',{
  template:'#sidenav-component',
  data: function(){
    return{
      options:[
         {key:0,url:'/',tooltip:'Home',icon:'fas fa-home i-small', styleIcon:'padding: 0 16px !important;'}
        ,{key:1,url:'/Flujos',tooltip:'Fujos',icon:'fas fa-funnel-dollar i-small', styleIcon:''}
        ,{key:2,url:'/Incumplimiento',tooltip:'Incumplimiento',icon:'fas fa-praying-hands i-small', styleIcon:''}
        ,{key:7,url:'/Adjudicacion',tooltip:'Adjudicación',icon:'fas fa-hand-holding-usd i-small', styleIcon:''}
        ,{key:3,url:'/Distribucion',tooltip:'Distribución',icon:'fas fa-money-check i-small', styleIcon:''}
        ,{key:4,url:'/Reporte',tooltip:'Reporte',icon:'fas fa-business-time i-small', styleIcon:''}
        ,{key:5,url:'/Matriz',tooltip:'Matriz',icon:'fas fa-th i-small', styleIcon:'padding: 0 16px !important;'}
        ,{key:6,url:'/Links',tooltip:'Links',icon:'fas fa-link i-small', styleIcon:'padding: 0 16px !important;'}
      ]
    }
  }


});
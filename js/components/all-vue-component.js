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


Vue.component('sidenav-component',{
  template:'#sidenav-component',
  data: function(){
    return{
      options:[
         {key:0,url:'/',tooltip:'Home',icon:'home'}
        ,{key:1,url:'/Flujos',tooltip:'Fujos',icon:'attach_money'}
        ,{key:2,url:'/Incumplimiento',tooltip:'Incumplimiento',icon:'assignment'}
        ,{key:3,url:'/Distribucion',tooltip:'Distribución',icon:'credit_card'}
        ,{key:4,url:'/Reporte',tooltip:'Reporte',icon:'business'}
        ,{key:5,url:'/Matriz',tooltip:'Matriz',icon:'grid_on'}
        ,{key:6,url:'/Links',tooltip:'Links',icon:'insert_link'}
      ]
    }
  }


});
var app = new Vue({
    el: '#app',
    data: {
      message: 'Mashup de Prueba!'
    }
  })
var app2 = new  Vue({
    el:'#app-2',
    data: {
      message: 'cargaste esta pagina el ' + new Date().toLocaleString()
    }
  });
var app3= new Vue({
  el: '#app-3',
  data:{
    seen:true
  }
});

var app4= new Vue({
  el:'#app-4',
  data:{
    todos:[
    {text: 'Aprende Javascript'},
    {text: 'Aprende vue'},
    {text: 'Haz cosas increibles'}
    ]
  }
});

app4.todos.push({text: 'Nuevo elemento'});

var app5= new Vue({
  el:'#app-5',
  data:{
    message: 'Hola Vue.js!'
  },
  methods: {
    reverseMessage: function() {
      this.message= this.message.split('').reverse().join('')
    }
  }
});

var app6= new Vue({
  el:"#app-6",
  data:{
    message: "Hola Vue!"
  }
});

//Router Test
const Foo={ template: '<div>foo</div>'};
const Bar={ template: '<div>bar</div>'};

const routes=[
  {path: '/foo', component: Foo},
  {path: '/bar', component: Bar}
];

const router = new VueRouter({
  routes: routes,
  //base:"/extensions/mashul-qlik-vue-material-cdn/mashul-qlik-vue-material-cdn.html#",
  mode:"hash"
});



var app8 = new Vue({
  router

}).$mount('#app-8');

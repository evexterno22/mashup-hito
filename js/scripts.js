document.addEventListener('vue-cargado', function() {
  var sidenav = document.querySelectorAll('.sidenav');
  var sidenav1 = document.querySelectorAll('#sidenav-1');
  var optSidenav = {};
  var instSidenav = M.Sidenav.init(sidenav, optSidenav);
  var instSidenav1 = M.Sidenav.init(sidenav1,{ edge: 'left' });
  });

var routes = [
  { path: "/", redirect: "/about" },
  { path: "/about", component: About },
  { path: "/exhibits", component: Shows },
  { path: "/exhibits/:year", component: Exhibit },
  { path: "/exhibits/:year/gallery/:id", component: Gallery, props: true },
  { path: "/acknowledgements", component: Acknowledgements },
  { path: "/press", component: Press },
];

Vue.use(VueLazyload);

var router = new VueRouter({
  routes: routes,
  base: "/",
  // mode: "history",
});

var app = new Vue({
  el: "#app",
  router: router,
});

// Tutorials:
//newfinds.com/posts/vue-route-params
//medium.com/@bluntjackson/truly-understanding-javascript-promises-await-and-async-f3f51e283554
//github.com/vuejs/vue-router/issues/1280#issuecomment-358714308

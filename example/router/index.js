import VueRouter from 'vue-router'
import routes from './routes.js'

const nextDirection = (direction) => {
  let el = document.querySelector('#sugar-app');
  if (el) el.setAttribute('transition-direction', direction);
}

const router = new VueRouter({
  routes
})

const forward = ['forward', 'push', 'replace'];

forward.map((method) => {
  router[`_${method}`] = router[method];
  router[method] = (option) => {
    nextDirection('forward');
    router[`_${method}`](option);
  }
})


router.beforeEach((to, from, next) => {
  let h = JSON.parse(sessionStorage.getItem(to.path) || '{}');
  if (h && h.history) {
    nextDirection('back');
    h.history = false;
    sessionStorage.setItem(to.path, JSON.stringify(h))
  } else {
    sessionStorage.setItem(from.path || '/', JSON.stringify({
      history: true
    }))
  }
  next();
})

export default router;

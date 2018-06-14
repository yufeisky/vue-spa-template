/**
 * @file
 * Created by hanan on 16/10/15.
 */
const Index = r => require(['views/index'], r);
const Success = r => require(['views/success'], r);
const NotFound = r => require(['views/notfound'], r);

// 根目录
const rootPath = '';

// 页面路由
const routes = [
  {path: '', redirect: {name: 'Index'}},
  {path: '/index', component: Index, name: 'Index'},
  {path: '/success', component: Success, name: 'Success'}
].map(route => {
  route.path = rootPath + route.path;
  return route;
});

// 404 页
routes.push({path: '*', component: NotFound, name: 'notfound'});
// routes.push({path: '*', component: Hello, name: 'hello'});

export default routes;

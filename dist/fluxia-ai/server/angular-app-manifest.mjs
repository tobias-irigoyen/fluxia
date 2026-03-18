
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 20447, hash: '7a1f160f8aee19c13e94512948b71f599ecf362bb86e6ca3766d5651a15eab2a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13852, hash: 'a45008577edee1272f20039cd3bb5233e721b5ce35133e075a194c99fa1821eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 132257, hash: '783ef45b134541630c60cd22478c1875435d3b70999f040e821dec305503051b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-GV65MC6R.css': {size: 28549, hash: 'bzpKmc3WGcs', text: () => import('./assets-chunks/styles-GV65MC6R_css.mjs').then(m => m.default)}
  },
};

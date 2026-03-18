
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
    'index.csr.html': {size: 20223, hash: 'ef46c3498656c476cb0c4c086f1768f868f623770a5edb019c27d5ae11e4d515', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13629, hash: '76b7609c05833986d9ab59cd6ed549ff0763cad380b343298d62ebb579eb74c0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 132033, hash: 'f019bb436ddaab728ce775f9d71326d5c1ed358f060cfec8b2be892614444927', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-GV65MC6R.css': {size: 28549, hash: 'bzpKmc3WGcs', text: () => import('./assets-chunks/styles-GV65MC6R_css.mjs').then(m => m.default)}
  },
};

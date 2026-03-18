
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
    'index.csr.html': {size: 20258, hash: '43651bdd16fab222141d5b6c2d562ff2d4326f7af9f729d7fb0927314e02c50d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13664, hash: 'e394fbc2be512f5767a6d17195c8feed7efb6058c65a8769bed0473c81da56a0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 132068, hash: 'd5a3996c5b7dad27cf8f9c1029b330f995297162a12108acd354d45c2789c8b6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-GV65MC6R.css': {size: 28549, hash: 'bzpKmc3WGcs', text: () => import('./assets-chunks/styles-GV65MC6R_css.mjs').then(m => m.default)}
  },
};

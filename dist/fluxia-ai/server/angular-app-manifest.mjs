
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
    'index.csr.html': {size: 20241, hash: '0d5e4c1d7c4f0fa41ae80623753117cc46a842cd766be87ea22f416d7ea228b2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13688, hash: '935fadc496c0416c75fdcc974c502c0db9e40f78b3bac9fb8a75227b631db16d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 132050, hash: '0861d071b9f4a0f9d2f29b289404a4ab0aa461b6909df20c95c17656d74bf059', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HTFWXKZS.css': {size: 27880, hash: 'Uo5AVNDQBx4', text: () => import('./assets-chunks/styles-HTFWXKZS_css.mjs').then(m => m.default)}
  },
};


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
    'index.csr.html': {size: 20265, hash: '16f1b059ad1b2a811daeb59d0676850e1c1c4cce99257f592148544f4dc8c10a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13671, hash: '8b9bd20c2fe241682a94b53b9bd13c682a08404b61ab526d436a95015fd46e13', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 132075, hash: '4162a18cd9867f5805004bcb306ee3cf056f57cb056d72aafe7d69b95b52dd08', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-GV65MC6R.css': {size: 28549, hash: 'bzpKmc3WGcs', text: () => import('./assets-chunks/styles-GV65MC6R_css.mjs').then(m => m.default)}
  },
};

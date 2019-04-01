const config = require('config');
const express = require('express');
const next = require('next');
const routes = require('../routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
  app.render(req, res, route.page, query);
});

app
  .prepare()
  .then(() => {
    const server = express();
    const { port } = config.api;

    server
      .use(handler)
      .listen(port, err => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    // eslint-disable-next-line no-console
    console.error(ex.stack);
    process.exit(1);
  });

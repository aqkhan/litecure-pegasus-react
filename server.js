const express = require('express');
const next = require('next');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

const app = next({dir: '.', dev });
const handle = app.getRequestHandler();

const getRoutes = require('./routes');

const routes = getRoutes();
app.prepare().then(() => {
    const server = express();



    server.get('/product/:title', (req, res) => {
        const actualPage = "/product";
        const queryParams = {title: req.params.title};
        app.render(req, res, actualPage, queryParams);
    });
    server.get('/advisory-board-detail/:name', (req, res) => {
        const actualPage = "/advisory-board-detail";
        const queryParams = {name: req.params.name};
        app.render(req, res, actualPage, queryParams);
    });
    server.get('*', (req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query = {} } = parsedUrl;
        const route = routes[pathname];
        if (route) {
            return app.render(req, res, route.page, query);
        }
        return handle(req, res, 'index');
    })



    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });
})

// const express = require("express");
// const next = require("next");
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();
//
// app.prepare()
//     .then(() => {
//         const server = express();
//         server.get('/product/:id', (req, res) => {
//             const actualPage = "/products";
//             const queryParams = {name: req.params.id};
//             app.render(req, res, actualPage, queryParams);
//         });
//
//
//
//         server.get('*', (req, res) => {
//             return handle(req, res)
//         });
//
//         server.listen(3000, (err) => {
//             if (err) throw err;
//         })
//     })
//     .catch((ex) => {
//         process.exit(1)
//     });

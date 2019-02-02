const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('/product/:title', (req, res) => {
            const actualPage = "/product";
            const queryParams = {title: req.params.title};
            app.render(req, res, actualPage, queryParams);
        });
        server.get('/advisory-board-member-detail/:name', (req, res) => {
            const actualPage = "/advisory-board-member-detail";
            const queryParams = {name: req.params.name};
            app.render(req, res, actualPage, queryParams);
        });
        server.get('/published-paper-detail/:name', (req, res) => {
            const actualPage = "/published-paper-detail";
            const queryParams = {name: req.params.name};
            app.render(req, res, actualPage, queryParams);
        });
        server.get('/casestudy-detail/:name', (req, res) => {
            const actualPage = "/casestudy-detail";
            const queryParams = {name: req.params.name};
            app.render(req, res, actualPage, queryParams);
        });
        server.get('/article-detail/:name', (req, res) => {
            const actualPage = "/article-detail";
            const queryParams = {name: req.params.name};
            app.render(req, res, actualPage, queryParams);
        });
        server.get('/post/:name', (req, res) => {
            const actualPage = "/post";
            const queryParams = {name: req.params.name};
            app.render(req, res, actualPage, queryParams);
        });
        server.get('/webinar/:name', (req, res) => {
            const actualPage = "/webinar";
            const queryParams = {name: req.params.name};
            app.render(req, res, actualPage, queryParams);
        });

        server.get('/detail/:name', (req, res) => {
            const actualPage = "/detail";
            const queryParams = {name: req.params.name};
            app.render(req, res, actualPage, queryParams);
        });


        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(3000, (err) => {
            if (err) throw err;
        })
    })
    .catch((ex) => {
        process.exit(1)
    });
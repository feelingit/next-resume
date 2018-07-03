// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// If you want to use another port change the value 3000 to any port you wish.
const port = 3000

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/') {
      app.render(req, res, '/index', { 'resume': 'resume' })

    // A robots.txt file indicates those parts of your site
    // you don’t want accessed by search engine crawlers.
    // Change it as you need.
    } else if (pathname === '/robots.txt') {
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.end('Disallow: /')

    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(port, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + port)
  })
})

import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../src/App'

const PORT = 8080
const app = express()

const router = express.Router()

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    )
  })
}
router.use('^/$', serverRenderer)

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

var file = fs.readFileSync('./server/data.json', 'utf8');

app.get('/api/jobs', (req, res) => {
  const jobs = JSON.parse(file);
  const id = req.query.id;

  if (id) {
    const result = jobs.find(function(job) {
      return job.id === parseInt(id);
    });

    if (!result) {
      res.status(404);
      res.end(JSON.stringify({ error: 'Job does not exist in the database', code: 'not_found' }));
    }
    res.end(JSON.stringify(result));
  }

  res.end(JSON.stringify(jobs));
});

// tell the app to use the above rules
app.use(router)

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})
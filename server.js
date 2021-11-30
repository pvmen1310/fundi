const express = require('express')
const next = require('next')
const dev = false
// Create the Express-Next App

const app = next({ dev })
// app.set('port', process.env.PORT || 3000);
const handle = app.getRequestHandler()
//Start the app
app.prepare()
//Start Express server and serve the
.then(() => {
  const server = express()
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(443, (err) => {
    console.log(err);
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
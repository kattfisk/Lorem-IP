const express = require('express')
const helmet = require("helmet")

const app = express()
app.disable('x-powered-by')
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "font-src": ["'self'", "https:"],
        "script-src": ["'self'", "https:"],
        "style-src": ["'self'", "https:"],
      },
    },
  })
)

const port = process.env.IPSUM_PORT || 3000
app.get('/', function (req, res) {
  const ipsumHtml = `<h1>Ipsum dolor sit amet</h1> 
<p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>`
  res.send(ipsumHtml)
})

app.listen(port)
console.log(`Ipsum running on port ${port}`)

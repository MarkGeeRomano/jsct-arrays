const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  if (req.url === '/') {
    const pdfPath = './arrays.pdf'
    const file = fs.createReadStream(pdfPath)
    const stat = fs.statSync(pdfPath)
    res.setHeader('Content-Length', stat.size)
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'inline; filename=jsct_arrays.pdf')
    file.pipe(res)
  } else if (req.url === '/survey') {
    res.writeHead(302, { Location: 'https://github.com/' })
    res.end()
  }
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`Listening on port ${PORT}`))

const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')
const axios = require('axios')

const port = parseInt(process.env.KKCPORT, 10) || 3000
const dev = process.env.KKCNODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

const options = {
  live: false,
  token: "",
  text: "-"
}

var axiosConfig = {
  headers: {
      'Content-Length': 0,
      'Content-Type': 'text/plain'
  },
 responseType: 'text'
};

// Zoom meeting sequences
var zoomMeetings = {}

function sendCaption(data) {
  if(!zoomMeetings[options.token]) zoomMeetings[options.token] = 0;
  if(options.live) {
      axios
      .post(options.token + "&seq=" + zoomMeetings[options.token], 
          data,
          axiosConfig
      )
      .then(res => {
        console.log(`statusCode: ${res.status} ${options.text} ${zoomMeetings[options.token]}`)
      })
      .catch(error => {
        console.error(`statusCode: ${error}`)
      })
      zoomMeetings[options.token]++
  }
}


// socket.io server
io.on('connection', socket => {
  socket.emit('update', options)

  socket.on('setToken', (data) => {
      options.token = data
      if(options.token != data) zoomMeetings[options.token] = 0
      socket.broadcast.emit('update', options)
  })

  socket.on('setLive', (data) => {
      console.log("Live: ", data.live)
      if(!data.live) {
          options.text = "-"
          sendCaption(options.text)
          clearInterval(textInterval)
      }
      options.live = data.live
      socket.broadcast.emit('update', options)
      sendCaption(options.text)
  })

  var textInterval;
  socket.on('setText', (data) => {
      options.text = data
      socket.broadcast.emit('update', options)
      sendCaption(data)
      clearInterval(textInterval)
      textInterval = setInterval(() => {sendCaption(data)}, 10000)
  })
})

nextApp.prepare().then(() => {
  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
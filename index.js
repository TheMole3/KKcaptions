const config = require('./config.json')

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');
const axios = require('axios');

const dev = process.env.NODE_ENV || 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

let port = config.port;

const options = {
    live: false,
    token: "",
    text: "-"
}

var zoomSeq = {

}

var axiosConfig = {
    headers: {
        'Content-Length': 0,
        'Content-Type': 'text/plain'
    },
   responseType: 'text'
};



function sendCaption(data) {
    if(options.live) {
        axios
        .post(options.token + "&seq=" + zoomSeq[options.token], 
            data,
            axiosConfig
        )
        .then(res => {
          console.log(`statusCode: ${res.status} ${options.text} ${zoomSeq[options.token]}`)
        })
        .catch(error => {
          console.error(error)
        })
        io.broadcast.emit('info', {
            zoomSeq: zoomSeq[options.token],
            ...options
        })
        zoomSeq[options.token]++
    }
}

setInterval(function() {
    sendCaption(options.text)
}, 5000);

io.on('connect', socket => {
    socket.emit('update', options)

    socket.on('setToken', (data) => {
        console.log(data)
        if(options.token != data.token) zoomSeq[options.token] = 0
        options.token = data.token
        socket.broadcast.emit('update', options)
    })

    socket.on('setLive', (data) => {
        console.log(options.live)
        socket.broadcast.emit('update', options)
        if(!data.live) {
            options.text = "-"
            sendCaption(options.text)
        }
        options.live = data.live
        sendCaption(options.text)
    })

    socket.on('setText', (data) => {
        options.text = data.text
        sendCaption(data.text)
    })
})

nextApp.prepare().then(() => {
    app.get('*', (req, res) => {
        return nextHandler(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err;
        console.log('KKcaption started on :' + port)
    })
})
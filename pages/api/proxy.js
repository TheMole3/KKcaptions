// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');

/*

/api/proxy
POST
{
  method
  url
  body
}

*/

var axiosConfig = {
  headers: {
      'Content-Length': 0,
      'Content-Type': 'text/plain'
  },
  responseType: 'text'
};

export default (req, res) => {
  if (req.body.method =="POST") {
    axios.post(req.body.url, req.body.body, axiosConfig).then((response) => {
      res.send({body: response.body, status: response.status})
    }).catch((error) => {
      res.send({status: error.response.status, message: error.message})
    })
  } else if (req.body.method == "GET") {
    axios.get(req.body.url).then((response) => {
      res.send({data: response.data, status: response.status})
    }).catch((error) => {
      console.log(error)
      res.send({status: error.code||errro.status, message: error.message})
    })
  } else {
    res.send(405)
  }
}

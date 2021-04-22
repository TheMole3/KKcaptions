import React, { useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications';

let sendLoop;

const LiveLogic = (props) => {
    let state = props.state.state,
    setState = props.state.setState;

    const { addToast } = useToasts()
    function error(msg) {
      addToast(msg, {
        appearance: 'error',
        autoDismiss: true,
      })
    }

    function sendText(textOverride) {
      var text = textOverride?textOverride:state.selText
      if(!text) return
      fetch('/api/proxy', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "method": "POST",
          "url": `${state.connection.url}&seq=${state.connection.seq}`,
          "body": text
        })
      }).then(response => response.json())
      .then(data => {
        if(data.status != 200) return error(`${data.status} | ${data.message}`)
        if(!data) return;
        setState({...state, connection:{...state.connection, seq: state.connection.seq+=1}})
      });
    }

    function updateSeq() {
      var url = state.connection.url.split("?")
      fetch('/api/proxy', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "method": "GET",
          "url": `${url[0]}/seq?${url[1]}`,
        })
      }).then(response => response.json())
      .then(data => {
        if(data.status != 200) return error(`${data.status} | ${data.message}`)
        if(!data.data) return;
        setState({...state, connection:{...state.connection, seq: data.data+=1}})
      });
    }
    
    useEffect(() => {
      if(state.live) { // If we are live
        // Check if the zoom token is working
        if(!state.connection.url || !state.connection.query || !state.connection.id) {error("Något är fel med din zoom token"); setState({...state, live:false}); return}

        sendText()
        clearInterval(sendLoop)
        if(!state.selText) return sendText("-")
        sendLoop = setInterval(sendText, 10000)
      }
    }, [state.selText, state.live])

    useEffect(() => {
      if(state.live) {
        updateSeq()
      } else {
        sendText("-")
        clearInterval(sendLoop)
      }
    }, [state.live])

    useEffect(() => {
      if(state.connection.id) updateSeq()
    }, [state.connection.id])

    return null
}

export default LiveLogic
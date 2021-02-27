import React from 'react';
import {useEffect, useState} from 'react';
import {Switch, TextField, Button} from '@material-ui/core/';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import $ from 'jquery';
import io from 'socket.io-client'

var socket = io()

function ControllRow(props) {
  const [state, setState] = useState({
    live: false,
  });

  const handleChange = (event) => {
    setState({ "live": event.target.checked });
    if(!event.target.checked && glob.textList) glob.textList.setState({'selText': "-"})
    socket.emit('setLive', {
      live: event.target.checked
    })
  };

  useEffect(() => {
    socket.on('update', data => {
      console.log('live ', data.live)
      setState({live: data.live})
    })
  })

  return (
    <div style={{
      display: "flex",
      flex: "0 1 auto",
      width: "100%",
      backgroundColor: colors.tartOrange,
      boxShadow: "0px 0px 0px 2px " + colors.lavenderWeb + "CC",
      alignItems: "center",
      justifyContent: "space-evenly",
    }}>
      <span style={{fontFamily:"Raleway"}}>KK captions</span>
      <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<EditIcon />}
          onClick={()=>{if(props.state.view=="live") props.state.setState({view: 'edit'}); else props.state.setState({view: 'live'})}}
          style={{margin: 5, backgroundColor: colors.etonBlue}}
      >{props.state.view=="live"?"Edit":"Live"}</Button>
      <div style={{
        display: "flex",
        alignItems: "center"
      }}>
        <span style={{fontFamily: "Raleway", fontSize: 20}}>Live </span>
        <Switch
          color="primary"
          checked={state.live}
          onChange={handleChange}
          name="live"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </div>
    </div>
  )
}

function Footer() {
  const [state, setState] = useState({
    token: "",
  });

  useEffect(() => {
    socket.on('update', data => {
      console.log('token ', data.token)
      setState({token: data.token})
    })
  })


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleTokenSend = (event) => {
    socket.emit('setToken', {token: state.token})
  }

  return ( 
    <div style={{
      display: "flex",
      flex: "0 1 auto",
      bottom: 0,
      width: "100%",
      alignItems: "center",
      justifyContent: "space-evenly",
      position: "relative",
      backgroundColor: colors.tartOrange,
      boxShadow: "0px 0px 0px 2px " + colors.lavenderWeb + "CC",
    }}>
        <TextField
          id="filled-full-width"
          label="Zoom CC api token"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
          name="token"
          variant="filled"
          value={state.token}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
          style={{marginRight: 5}}
          onClick={handleTokenSend}
        >Uppdatera</Button>
    </div>
  )
}

function TextRow(props) {
  console.log(props.keys, props.state.text)
  var style = props.keys==props.state.text ? {border: `3px solid rgb(240, 84, 79)`, padding: styles.textRow.padding-3}:{}
  return(
      <li style={{...styles.textRow, ...style}} onClick={() => {
          props.state.setState({'selText': props.keys})
          if(props.keys==props.state.text) props.state.setState({'selText': "props.keys"})
          socket.emit('setText', props.keys==props.state.text?{text: "-"}:{text: props.text})
      }}>
          <span>{props.text.split("\n").map((i,key) => {
              return <div style={{fontFamily: "Raleway", 
              "-webkit-touch-callout": "none",
              "-webkit-user-select": "none",
              "-khtml-user-select": "none",
              "-moz-user-select": "none",
              "-ms-user-select": "none",
              "user-select": "none"}} key={key}>{i}</div>;
          })}</span>
      </li>
  )
}

function NewSong(props) {
  return(
    <li style={{      
      listStyleType: "none",
      margin: 10,
      fontSize: "10pt",
      position: "relative",
      cursor: "default",
      padding: 10,
      backgroundColor: colors.sonicSilver,
      borderRadius: 0,
    }}>
      <span style={{fontFamily: "Raleway", cursor: "default", 
      "-webkit-touch-callout": "none",
      "-webkit-user-select": "none",
      "-khtml-user-select": "none",
      "-moz-user-select": "none",
      "-ms-user-select": "none",
      "user-select": "none"}} >{props.title}</span>
  </li>
  )
}

var songList =typeof window !== 'undefined' && localStorage.getItem('song') ? JSON.parse(localStorage.getItem('song')): {
  "Hossiana": [
    "Hosianna, Hosianna",
    "Du är vårt lov för alltid\nÄra din nåd för evigt"
  ],
  "Jag går på livets väg": 
  [
    "Jag går på livets väg\nJag går på livets väg\nDär kan allting hända men jag kan va trygg",
    "för Gud finns över mig och under mig\nFramför mig och bakom mig\nHan omsluter mig på alla sidor",
  ],
  "Mitt hjärta": [
    "Knäpper mina händer ber en bön till Gud.\nGud som haver barnen kär\nse till mig som liten är",
    "Här i mitt hjärta vill du bo hos mig\nHär i mitt hjärta finns det plats för Dig\nDu vill bo i mitt hjärta och stanna kvar hos mig",
  	"Jag får be till Dig\njag får tacka Dig om och om igen",
    "Knäpper mina händer ber en bön till Gud\nVart jag mig i världen vänder\nstår min lycka i Guds händer"
  ]
}

var glob = {textList:{}}
function TextList() {
  const [state, setState] = useState({
    selText: "",
  });
  glob.textList = {
    state, setState
  }
  
  return (
      <ul style={{
          padding: 0,
          overflowX: "hidden",
          overflowY: "scroll"
      }}>
        { 
          Object.keys(songList).map((song, songIndex) => {
            var songText = songList[song].map((text, textIndex) => {
              return <TextRow text={text} keys={songIndex + ":" + textIndex} state={{text: state.selText, setState}}></TextRow>
            })
            return (
              <ul style={{marginBottom: 30}}>
                <NewSong title={song}></NewSong>
                {songText}
              </ul>
            )
          })
        }
      </ul>
  )
}

function Edit() {
  var string = ``
  Object.keys(songList).forEach((song, i) => {
    string+=`* ${song}\n`;
    songList[song].forEach((text, i) => {
      if(songList[song].length-1 == i) return string+=text+"\n\n"
      string+=text+"\n-\n"
    })
  })

  const [state, setState] = useState({
    text: string,
  });
  
  function applyHighlights(text) {
    text = text
      .replace(/\n$/g, '\n\n')
      .replace(/^[*].*/gm, '<mark style="border-radius: 3px;color: transparent;background-color: #b1d5e5">$&</mark>')
      .replace(/^[-].*/gm, '<mark style="border-radius: 3px;color: transparent;background-color: #e5b1b1">$&</mark>');
    return text;
  }

  function handleInput(event) {
      setState({ ...state, [event.target.name]: event.target.value });
      var text = event.target.value;
      var highlightedText = applyHighlights(text);
      $('.hilights').html(highlightedText);

      var arr = {}
      text.split(/^[*].*/gm).filter(x => x.replace(/\s/g, "")).forEach((song,i) => {
        arr[text.match(/^[*].*/gm)[i].replace("*", "").trim()] = song.split(/^[-].*/gm).map(x => x.trim())
      });
      songList = arr;
      if (typeof window !== 'undefined') { // We are running on client
        localStorage.setItem('song', JSON.stringify(songList))
      }
  }

  function handleScroll() {
    var scrollTop = $('.textarea').scrollTop();
    $('.backdrop').scrollTop(scrollTop);
    
    var scrollLeft = $('.textarea').scrollLeft();
    $('.backdrop').scrollLeft(scrollLeft);  
  }

  return(
    <div>
      <div className="backdrop" style= {{
        position: "absolute",
        zIndex: 1,
        overflow: "auto",
        pointerEvents: "none",
        backgroundColor: colors.lavenderWeb,
        width: "100%",
        height: "90%",
        resize: "none",
        padding: "13px",
        font: "10pt 'Open Sans'",
        letterSpacing: "1px",
      }}>
        <div className="hilights" style={{
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          color: "transparent"
        }}></div>
      </div>
      <textarea
        className="textarea"
        id="outlined-multiline-static"
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          width: "100%",
          height: "90%",
          resize: "none",
          zIndex: 10,
          padding: "10px",
          font: "10pt 'Open Sans'",
          letterSpacing: "1px",
          color: "black",
          overflow: "auto",
        }}
        value={state.text}
        name="text"
        onInput={handleInput}
        onScroll={handleScroll}
        onLoad={handleInput}
      />
    </div>
  )
}
function LiveView (state, setState) {
  if(state.view=='live') {
    return (
      <TextList style={{flex: "1 1 auto"}}></TextList>
    )
  } else if(state.view=='edit') {
    return(
      <Edit style={{flex: "1 1 auto"}}></Edit>
    )
  }
}

function App() {
  const [state, setState] = useState({
    view: "live",
  });

  return(
    <div style={{
      display: "flex",
      flexFlow: "column",
      height: "100vh"
    }}>
      <ControllRow state={{setState, view: state.view}}></ControllRow>
      {LiveView(state, setState)}
      {state.view=='live'?<Footer></Footer>:<span></span>}
      
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: ${colors.richBlackFogra};
          overflow: hidden;
          height: 100%;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

var colors = {
  richBlackFogra: "#071013",
  lavenderWeb: "#eeeeff",
  sonicSilver: "#707078",
  etonBlue: "#79c99e",
  tartOrange: "#f0544f",
}

var styles = {
  textRow: {
      listStyleType: "none",
      margin: 10,
      fontSize: "15pt",
      cursor: "pointer",
      padding: 10,
      backgroundColor: colors.lavenderWeb,
      borderRadius: 5,
  }
}

export default App;
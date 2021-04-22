import React, { useEffect, useState } from 'react'
import { ToastProvider, useToasts } from 'react-toast-notifications';

import SongList from '../public/SongList'
import Header from '../public/Header'
import Footer from '../public/Footer'
import LiveLogic from '../public/LiveLogic'
import EditSong from '../public/EditSong'

export default function Home() {
  const [state, setState] = useState({
    songList: [],
    selText: "",
    live: false,
    screen: "live", // live|edit
    connection: {
      url: "", // Full Zoom url
      query: "", // The full Zoom query -seq
      id: "", // The Zoom id
      seq: 1,
    },
    text: "" // The unparsed text
  })

  // Load song list or use default
  let defaultSongs = [{"title":"Du omsluter mig","lines":["Du omsluter mig på alla sidor\nOch du håller mig i din hand"]},{"title":"Jag går på livets väg","lines":["Jag går på livets väg\nJag går på livets väg\nDär kan allting hända men jag kan va trygg","för Gud finns över mig och under mig\nFramför mig och bakom mig\nHan omsluter mig på alla sidor"]},{"title":"Mitt hjärta","lines":["Knäpper mina händer ber en bön till Gud.\nGud som haver barnen kär\nse till mig som liten är","Här i mitt hjärta vill du bo hos mig\nHär i mitt hjärta finns det plats för Dig\nDu vill bo i mitt hjärta och stanna kvar hos mig","Jag får be till Dig\njag får tacka Dig om och om igen","Knäpper mina händer ber en bön till Gud\nVart jag mig i världen vänder\nstår min lycka i Guds händer"]}]
  useEffect(() => {
    setState({...state, songList: localStorage.getItem("songList")?JSON.parse(localStorage.getItem("songList")):defaultSongs})
  }, [])

  return (
    <ToastProvider placement="top-left">
    <div>
      <LiveLogic state={{state, setState}}/>
      <Header state={{state, setState}}/>
      {state.screen == "live"?
      [<SongList state={{state, setState}} songList={state.songList}/>,
      <div
        style={{
            display: "flex",
            height: "10vh",
        }}
      ></div>,
      <Footer state={{state, setState}}/>]:
      <EditSong state={{state, setState}} songList={state.songList}></EditSong>
      }
      
    </div>
    </ToastProvider>
  )
}

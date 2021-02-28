const globalAny = global;

import React, { useEffect, useState } from 'react'
import {io, Socket} from 'socket.io-client';

import TokenFooter from '../public/components/TokenFooter';
import { ToastProvider } from 'react-toast-notifications';
import colors from '../public/components/colors';
import Header from '../public/components/Header';
import EditSong from '../public/components/ReditSong';
import SongList from '../public/components/SongList';


var socket = io();
globalAny.socket = socket;

function App() {
    // Init options
    if(typeof window !== 'undefined') var arr = JSON.parse(localStorage.getItem('song')); else var arr = {}
    const [state, setState] = useState({
        view: "Captions",
        token: "",
        songList: typeof window !== 'undefined' && localStorage.getItem('song') ? arr : {"Du omsluter mig":["Du omsluter mig på alla sidor\nOch du håller mig i din hand"],"Jag går på livets väg":["Jag går på livets väg\nJag går på livets väg\nDär kan allting hända men jag kan va trygg","för Gud finns över mig och under mig\nFramför mig och bakom mig\nHan omsluter mig på alla sidor"],"Mitt hjärta":["Knäpper mina händer ber en bön till Gud.\nGud som haver barnen kär\nse till mig som liten är","Här i mitt hjärta vill du bo hos mig\nHär i mitt hjärta finns det plats för Dig\nDu vill bo i mitt hjärta och stanna kvar hos mig","Jag får be till Dig\njag får tacka Dig om och om igen","Knäpper mina händer ber en bön till Gud\nVart jag mig i världen vänder\nstår min lycka i Guds händer"]},
        live: false,
        text: ""
    });
    useEffect(() => {
        socket.on('update', (data) => {
            setState({ ...state, ...data })
        })
    })


    return [
        <ToastProvider placement="top-left">

        <div>
            <Header state={{state, setState}}></Header>
            {state.view == "Captions"?
            [
            <SongList state={{state, setState}}></SongList>,
            <div
                style={{
                    display: "flex",
                    height: "10vh",
                }}
            ></div>,
            <TokenFooter state={{state, setState}}></TokenFooter>
            ]
            :
            <EditSong state={{state, setState}}></EditSong>
            }
        </div>

        </ToastProvider>


        ,<style jsx global>{`
            html,
            body {
                padding: 0;
                margin: 0;
                background-color: ${colors.richBlackFogra};
            }
        `}</style>  
    ]
}

export default App;
import React, { useEffect, useState } from 'react';
import $ from 'jquery'
import colors from './colors';

const EditSong = (props) => {
    /* Parse array into text */
    function parseSongList(songList) {
      let text = "";

      songList.forEach((song, songIndex) => {
        text += `*${song.title}\n`
        song.lines.forEach((line, lineIndex) => {
          text += `${line}`
          if(!((songIndex+1) == songList.length && (lineIndex+1) == song.lines.length)) text += `\n\n`
        })
      })

      return text
    }

    /* Parse text into array */
    function parseSongText(text) {
      var songList = []
      text.split(/^[*].*/gm).filter(x => x.replace(/\s/g, "")).forEach((song, i) => {
        songList.push({
          title: text.match(/^[*].*/gm)[i].replace("*", "").trim(),
          lines: song.split(/^[\n\n]/gm).map(x => x.trim()).filter(x => x)
        })
      });
      return songList
    }

    /* Update songList when user is done editing */
    useEffect(() => {
      props.state.setState({...props.state.state, text: parseSongList(props.songList)}) // Runs on mount

      return () => { // runs on unmount
      }
    }, [])

    /* Update when chaging text */
    function handleInput(event) {
      let parsed = parseSongText(event.target.value)
      props.state.setState({...props.state.state, text: event.target.value, songList: parsed})
      localStorage.setItem("songList", JSON.stringify(parsed))
    }

    /* Scroll the hilights and text at the same time */
    function handleScroll() {
      var scrollTop = $('.textarea').scrollTop();
      $('.backdrop').scrollTop(scrollTop);
      
      var scrollLeft = $('.textarea').scrollLeft();
      $('.backdrop').scrollLeft(scrollLeft);  
    }    

    /* Apply the guide highlights */
    function applyHighlights(text) {
      text=text
        .replace(/\n$/g, '\n\n')
        .replace(/^(?![\n*]).*/gm, '<mark style="color: transparent; background-color: #e5b1b1"><span style="width:2%; display:inline-block"></span></mark>')
        .replace(/^[*].*/gm, '<span style="width:3%; display:inline-block"></span><mark style="border-radius: 3px;color: transparent;background-color: #b1d5e5">$&</mark>');
      return text;
    }
    useEffect(() => {
      $('.hilights').html(applyHighlights(props.state.state.text))
    })

    return (
        <div className="container" style={{
            overflow: "none"
        }}>
            <div style={{...styles.textarea,
                pointerEvents: "none",
                backgroundColor: colors.lavenderWeb,
                color: "transparent",
                left: 0,
                width: "100%"
            }} className="backdrop">
                <div style={{
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                }} className="hilights"></div>
            </div>
            <textarea
                className="textarea"
                style={styles.textarea}
                onInput={handleInput}
                onScroll={handleScroll}
                value={props.state.state.text}
            ></textarea>
        </div>
    )
}

var styles = {
    textarea: {
        position: "absolute",
        zIndex: 1,
        overflow: "auto",
        backgroundColor: "transparent",
        width: "97%",
        height: "94%",
        resize: "none",
        font: "10pt 'Open Sans'",
        letterSpacing: "1px",
        padding: 0,
        left: "3%",
        border: "none",
        outline: "none"
    }
}

export default EditSong;
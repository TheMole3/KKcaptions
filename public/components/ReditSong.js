import React, { useEffect, useState } from 'react';
import $ from 'jquery'
import colors from './colors';

const EditSong = (props) => {
    function applyHighlights(text) {
        text = text
            .replace(/\n$/g, '\n\n')
            .replace(/^(?![\n*]).*/gm, '<mark style="color: transparent; background-color: #e5b1b1"><span style="width:2%; display:inline-block"></span></mark>')
            .replace(/^[*].*/gm, '<span style="width:3%; display:inline-block"></span><mark style="border-radius: 3px;color: transparent;background-color: #b1d5e5">$&</mark>');
        return text;
    }

    var string = ``
    var songList = props.state.state.songList;
    Object.keys(songList).forEach((song, songIndex) => {
      string+=`* ${song}\n`;
      songList[song].forEach((text, i) => {
        if(songList[song].length-1 == i && Object.keys(songList).length-1 == songIndex) return string+=text+""
        string+=text+"\n\n"
      })
    })

    const [text, setText] = useState(string)

    useEffect(() => {
        $('.hilights').html(applyHighlights(text))
    })

    function handleInput(event) {
        setText(event.target.value);
        var text = event.target.value;
        var highlightedText = applyHighlights(text);
        $('.hilights').html(highlightedText);
  
        var arr = {}
        text.split(/^[*].*/gm).filter(x => x.replace(/\s/g, "")).forEach((song,i) => {
          arr[text.match(/^[*].*/gm)[i].replace("*", "").trim()] = song.split(/^[\n\n]/gm).map(x => x.trim()).filter(x => x)
        });
        props.state.setState({...props.state, songList: arr})
        

        if (typeof window !== 'undefined') { // We are running on client
          localStorage.setItem('song', JSON.stringify(arr))
        }
    }

    function handleScroll() {
        var scrollTop = $('.textarea').scrollTop();
        $('.backdrop').scrollTop(scrollTop);
        
        var scrollLeft = $('.textarea').scrollLeft();
        $('.backdrop').scrollLeft(scrollLeft);  
      }    

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
                value={text}
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
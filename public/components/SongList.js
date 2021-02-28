const globalAny = global;

import colors from "./colors";

/* TextRow() A row of text
    props {
        text: String
        state: {
            ...props
            setState
        }
    }
*/
function TextRow(props) {
    var state = props.state;
    return (
        <li 
            style={{...styles.textRow, ...props.id==state.state.selRow ? {border: `3px solid rgb(240, 84, 79)`, padding: styles.textRow.padding-3}:{}}}
            onClick={() => {
                var textState = props.id==props.state.state.selRow?{selRow: "-", text: "-"}:{selRow: props.id, text: props.text} // If text is selected unselect else select
                state.setState({...state.state, ...textState}); // Set the text state
                globalAny.socket.emit('setText', textState.text) // Emit text to server
            }}
        >
            <span>{props.text.split("\n").map((i, key) => { return <div style={styles.noSelect} key={key}>{i}</div>; })} </span> 
        </li>
    )
}

/* TitleRow() A row for the title of a song
    props {
        title: String
    }
*/
function Title(props) {
    return (
        <li style={styles.title}>
            <span>{props.title}</span> 
        </li>
    )
}

/* SongList() Create a ul within a div
    props {
        state: {
            ...props
            setState
        }
    }
*/
const SongList = (props) => {
    var state = props.state;
    return (
        <div>
            {Object.entries(state.state.songList).filter(x => x).map((song, songKey) => {
                return [
                    <Title title={song[0]} key={songKey}></Title>,
                    song[1].map((text, rowKey) => {
                        return <TextRow text={text} state={state} id={songKey+":"+rowKey} key={songKey+":"+rowKey}></TextRow>
                    })
                ]
            })}
        </div>
    )
}

  
var styles = {
    noSelect: {
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "KhtmlUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "UserSelect": "none"
    },
    textRow: {
        listStyleType: "none",
        margin: 10,
        fontSize: "15pt",
        cursor: "pointer",
        padding: 10,
        backgroundColor: colors.lavenderWeb,
        borderRadius: 5,
    },
    title: {
        listStyleType: "none",
        margin: 10,
        fontSize: "10pt",
        position: "relative",
        cursor: "default",
        padding: 10,
        marginTop: 20,
        backgroundColor: colors.sonicSilver,
    }
}

export default SongList
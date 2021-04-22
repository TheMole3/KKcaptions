import colors from '../public/colors'


/*
song = {
    title: String
    lines: [
        String, String
    ]
}
state = {
    state: object,
    setState: function
}
*/
const Song = (props) => {
    return [
        <dt key={props.song.index.toString()} style={{...styles.title, ...styles.noSelect}}>{props.song.title}</dt>,
        props.song.lines.map((line, index) => {
            return <dd key={props.song.index + "|" + index} style={{...styles.textRow, ...styles.noSelect, ...props.state.state.selText==line ? {border: `3px solid rgb(240, 84, 79)`, padding: styles.textRow.padding-3}:{}}} onClick={() => {
                if(props.state.state.selText != line) 
                    props.state.setState({...props.state.state, selText: line})
                else
                    props.state.setState({...props.state.state, selText: ""})
            }}>{line}</dd>
        })
    ]
}

/*
    songList = [
        {
            title: String
            lines: [
                String, String
            ]
        },
        ...
    ]
*/
const SongList = (props) => {
    return (
        <dl>
            {props.songList.map((song, index) => {
                return <Song state={props.state} song={{...song, index}}/>
            })}
        </dl>
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
        whiteSpace: "pre-line",
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
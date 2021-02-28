const globalAny = global;

import React from 'react';
import colors from './colors'
import {Switch, Button, FormControlLabel} from '@material-ui/core/';

const Header = (props) => {
    const setLive = (event) => {
        var live = event.target.checked ? {...props.state.state, live: event.target.checked } : {...props.state.state, 'selRow': "-", "text": "-", live: event.target.checked}
        props.state.setState(live);
        globalAny.socket.emit('setLive', {
          live: event.target.checked
        })
    };

    const changeView = (event) => {
        props.state.setState({...props.state.state, view: props.state.state.view=="Captions"?"Edit":"Captions"})
    }

    return (
        <div style={styles.header}>
            <span style={{...styles.noSelect, fontFamily:"Raleway"}}>KK captions</span>
            <Button variant="contained" color="primary" onClick={changeView} style={{width: 100}}>{props.state.state.view=="Captions"?"Edit":"Captions"}</Button>
            <FormControlLabel
                style={{...styles.noSelect}}
                control={<Switch name="live" color="primary" checked={props.state.state.live} />}
                label="Live"
                labelPlacement="start"
                onChange={setLive}
            />
        </div>
    )
}

var styles = {
    header: {
        backgroundColor: colors.tartOrange,
        display: "flex",
        position: "sticky",
        top:0 ,
        width: "100%",
        borderBottom: "2px solid " + colors.lavenderWeb + "CC",
        alignItems: "center",
        justifyContent: "space-evenly",
        zIndex: 10,
        paddingTop: 7,
        paddingBottom: 7
    },
    KKcaptions: {
        fontSize: "10pt"
    },
    noSelect: {
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "KhtmlUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "UserSelect": "none"
    }
}

export default Header;
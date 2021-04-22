import React from 'react';
import colors from './colors'
import {Switch, Button, FormControlLabel, IconButton} from '@material-ui/core/';

const Header = (props) => {
    const setLive = (event) => {
        props.state.setState({...props.state.state, live: event.target.checked});
    };

    const changeView = (event) => {
        props.state.setState({...props.state.state, screen: props.state.state.screen=="live"?"edit":"live"})
    }

    return (
        <div style={styles.header}>
            <span style={{...styles.noSelect, fontFamily:"Raleway"}}>KK captions</span>
            <Button variant="contained" color="primary" onClick={changeView} style={{width: 100}}>{props.state.state.screen=="live"?"Captions":"Edit"}</Button>
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
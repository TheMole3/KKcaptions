import { Button, TextField } from "@material-ui/core"
import React, {useState} from "react"
import { useToasts } from 'react-toast-notifications'

import colors from "./colors"

function parseQuery(queryString) {
    if(!queryString) return;
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

var TokenFooter = (props) => {
    const { addToast } = useToasts()

    const [token, updateToken ] = useState("")

    const handleTokenSubmit = (e) => {
        var queryArr = parseQuery(token.split("?")[1]);
        if(!queryArr) return;
        var connection = props.state.state.connection;
        connection.id = queryArr.id;
        connection.query = token.split("?")[1];
        connection.url = token;

        props.state.setState({...props.state.state, connection})
        console.log(props.state)

        addToast("Zoom token uppdaterad", {
            appearance: 'success',
            autoDismiss: true,
        })
    }

    const handleChange = (event) => {
        updateToken(event.target.value);
    };    

    return (
        <div style={styles.footer}>
              <TextField
                id="filled-full-width"
                label="Zoom CC api token"
                style={styles.textField}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                name="token"
                variant="filled"
                onKeyPress={(e) => {if (e.code === 'Enter') handleTokenSubmit(e)}}
                onChange={handleChange}
                value={props.state.state.token}
              />
              <Button
                style={styles.button}
                variant="contained" 
                color="primary"
                onClick={handleTokenSubmit}
              >Uppdatera</Button>
          </div>
    )
}

var styles = {
    footer: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: colors.tartOrange,
        display: "flex",
        justifyContent: "center"
    },
    button: {
        margin: 10
    },
    textField: {
        width: "80%",
        margin: 8,
    }
}

export default TokenFooter
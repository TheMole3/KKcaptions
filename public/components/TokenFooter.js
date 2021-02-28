const globalAny = global;

import { Button, TextField } from "@material-ui/core"
import React from "react"
import { useToasts } from 'react-toast-notifications'

import colors from "./colors"

var TokenFooter = (props) => {
    const { addToast } = useToasts()

    const handleTokenSubmit = (e) => {
        addToast("Zoom token uppdaterad", {
            appearance: 'success',
            autoDismiss: true,
        })
        globalAny.socket.emit('setToken', props.state.state.token)
    }

    const handleChange = (event) => {
        props.state.setState({ ...props.state.state, [event.target.name]: event.target.value });
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
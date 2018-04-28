import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Settings from 'material-ui-icons/Settings';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';
import {changeTimerSettings} from '../store/store'
import {connect} from 'react-redux'

class TimerSettings extends React.Component {
    state = {
        isOpen: false,
        minutes: Math.floor(this.props.seconds / 60),
        seconds: this.props.seconds % 60,
    };

    handleOpen = () => {
        this.setState({isOpen: true});
    };
    handleClose = () => {
        this.setState({isOpen: false});
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleSaveSettings = () => {
        var time = Number(this.state.minutes) * 60 + Number(this.state.seconds);
        if(time > 0){
            this.props.changeTimerSettings(time);
        }
    };

    render() {
        const actions = [<FlatButton label="Ok" primary onClick={this.handleClose}/>];
        return (
            <div style={{float:'right', marginTop: -5, marginLeft: -5}}>
                <IconButton onClick={this.handleOpen} >
                    <Settings/>
                </IconButton>
                <Dialog title="Settings" actions={actions} modal={false} open={this.state.isOpen}
                        onRequestClose={this.handleClose}>
                    <h2>Minutes</h2>
                    <TextField
                        id="minutes"
                        label="number"
                        value={this.state.minutes}
                        onChange={this.handleChange('minutes')}
                        type="number"
                        margin="normal"
                    />
                    <br/>
                    <h2>Seconds</h2>
                    <TextField
                        id="seconds"
                        label="number"
                        value={this.state.seconds}
                        onChange={this.handleChange('seconds')}
                        type="number"
                        margin="normal"
                    />
                    <br/>
                    <RaisedButton label="Save" primary={true} onClick={this.handleSaveSettings}/>
                </Dialog>
            </div>
        )
    }
};

const mapStateToProps = ({seconds}) => ({seconds});
const mapDispatchToProps = {changeTimerSettings};

export default connect(mapStateToProps, mapDispatchToProps)(TimerSettings)

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {startClock, stopClock} from '../store/store'
import RaisedButton from 'material-ui/RaisedButton';

class ToggleButtons extends Component {
    startTime = () => {
        this.props.startClock()
    };
    stopTime = () => {
        this.props.stopClock()
    };

    render() {
        return (
            <div>
                <RaisedButton style={{margin: 12, marginLeft: 40}} onClick={this.startTime}>Start Time</RaisedButton>
                <RaisedButton style={{margin: 12}} onClick={this.stopTime}>Stop Time</RaisedButton>
            </div>
        )
    }
}

const mapDispatchToProps = {startClock, stopClock};

export default connect(null, mapDispatchToProps)(ToggleButtons)

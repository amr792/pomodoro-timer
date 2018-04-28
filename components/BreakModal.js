import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux'
import {endBreak, resetPomodoro} from '../store/store'

export const BreakModal = ({ onBreak, endBreak, endOfPomodoro, resetPomodoro}) => {
    const breakActions = [<FlatButton label="Continue" primary onClick={endBreak}/>];
    const pomodoroActions = [<FlatButton label="Reset" primary onClick={resetPomodoro}/>];
    return (
        <div>
            <Dialog title="Take a Break" actions={breakActions} modal={false} open={onBreak} onRequestClose={endBreak}>You earned it</Dialog>
            <Dialog title="End of Pomodoro" actions={pomodoroActions} modal={false} open={endOfPomodoro} onRequestClose={resetPomodoro}>End of simulation, RESET to go again</Dialog>
        </div>
    )
};

const mapStateToProps = ({onBreak, endOfPomodoro}) => ({onBreak, endOfPomodoro});
const mapDispatchToProps = { endBreak, resetPomodoro };

export default connect(mapStateToProps, mapDispatchToProps)(BreakModal)

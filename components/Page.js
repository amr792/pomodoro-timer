import React from 'react'
import {connect} from 'react-redux'
import Clock from './Clock'
import ToggleButtons from './ToggleButtons';
import BreakModal from './BreakModal';
import TimerSettings from './TimerSettings';

export const Page = ({seconds, rounds}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{position: 'relative'}}>
                <h1>Pomodoro Timer
                    <TimerSettings/>
                </h1>
                <h2 style={{marginLeft: 70}}>
                    Round {rounds} of 4
                </h2>
                <Clock seconds={seconds}/>
                <ToggleButtons/>
                <BreakModal/>
            </div>
        </div>
    )
};

const mapStateToProps = ({seconds, rounds}) => ({seconds, rounds});
export default connect(mapStateToProps)(Page)


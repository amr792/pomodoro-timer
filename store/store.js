import Rx, {Observable} from 'rxjs';
import {createStore, applyMiddleware} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';

// ACTIONS
const TICK = 'TICK';
const ROUND_END = 'ROUND_END';
const RESET_CLOCK = 'RESET_CLOCK';
const START_CLOCK = 'START_CLOCK';
const STOP_CLOCK = 'STOP_CLOCK';
const RESET_POMODORO = 'RESET_POMODORO';
const END_POMODORO = 'END_POMODORO';
const START_BREAK = 'START_BREAK';
const END_BREAK = 'END_BREAK';
const TIMER_SETTINGS = 'TIMER_SETTINGS';

// ACTION CREATORS
export const tick = () => ({type: TICK});
export const roundEnd = () => ({type: ROUND_END});
export const resetClock = () => ({type: RESET_CLOCK});
export const startClock = () => ({type: START_CLOCK});
export const stopClock = () => ({type: STOP_CLOCK});
export const resetPomodoro = () => ({type: RESET_POMODORO});
export const endPomodoro = () => ({type: END_POMODORO});
export const endBreak = () => ({type: END_BREAK});
export const startBreak = () => ({type: START_BREAK});
export const changeTimerSettings = (newRoundTime) => ({type: TIMER_SETTINGS, payload: newRoundTime});

// OBSERVABLES (EPICS)
const tickEpic = (action$, store) =>
    action$
        .ofType(TICK)
        .filter(() => store.getState().seconds <= 0)
        .map(roundEnd);

const startClockEpic = (action$, store) =>
    action$
        .ofType(START_CLOCK)
        .filter(() => store.getState().seconds > 0)
        .switchMap(() =>
            Observable.interval(1000)
                .takeUntil(action$.ofType(STOP_CLOCK))
                .mapTo(tick())
        );

const endRoundEpic = (action$) =>
    action$
        .ofType(ROUND_END)
        .map(stopClock);

const endRoundGiveBreakEpic = (action$, store) =>
    action$
        .ofType(ROUND_END)
        .delay(1000)
        .map(() =>  store.getState().rounds < 4 ? startBreak() : endPomodoro());

const rootEpic = combineEpics(
    tickEpic,
    startClockEpic,
    endRoundEpic,
    endRoundGiveBreakEpic,
);

const epicMiddleware = createEpicMiddleware(rootEpic);

const exampleInitialState = {
    rounds: 1,
    roundLength: 25 * 60,
    seconds: 25 * 60,
    onBreak: false,
    endOfPomodoro: false,
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case TICK:
            return Object.assign({}, state, {seconds: state.seconds - 1});
        case RESET_CLOCK:
            return Object.assign({}, state, {seconds: state.roundLength});
        case START_BREAK:
            return Object.assign({}, state, {onBreak: true});
        case END_BREAK:
            return Object.assign({}, state, {onBreak: false, seconds: state.roundLength, rounds: state.rounds + 1});
        case RESET_POMODORO:
            return Object.assign({}, state, {
                onBreak: false,
                endOfPomodoro: false,
                seconds: state.roundLength,
                rounds: 1
            });
        case END_POMODORO:
            return Object.assign({}, state, {onBreak: false, endOfPomodoro: true, seconds: 0});
        case TIMER_SETTINGS:
            return Object.assign({}, state, {roundLength: action.payload, seconds: action.payload});
        default:
            return state
    }
};

export const initStore = () => {
    return createStore(reducer, applyMiddleware(epicMiddleware))
};

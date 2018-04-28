import { reducer, endBreak } from '../store/store';

const stateFactory = (
    { rounds = 1, roundLength = 25 * 60, seconds = 0, onBreak = true, endOfPomodoro = false } = {}
) => ({ rounds, roundLength, seconds, onBreak, endOfPomodoro });

describe('Increment round along with status message', () => {
    const msg = 'increment round';
    const state = stateFactory();
    const action = endBreak();
    const actual = reducer(state, action);
    const expected = { rounds: 2, roundLength: 1500, seconds: 25 * 60, onBreak: false, endOfPomodoro: false };
    it(msg, () => {
        expect(actual).toEqual(expected);
    });
});
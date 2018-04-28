import tape from 'tape'
import {createStore} from 'redux'
import {reducer} from './store'

tape('Increment round along with status message', function (test) {
    var initialState = {
        round: 1,
    };

    var incrementAction = { type: 'ROUND_END' };

    var store = createStore(reducer, initialState);

    store.dispatch(incrementAction);

    var actual = store.getState().round;

    var expected = 2;

    var message = 'Counter should have incremented';

    test.equal(actual, expected, message);

    test.end()
});
/**
 * Created by gabrielmatasariu on 8/1/2016.
 */

import { Store, toImmutable } from 'nuclear-js';

export default Store({
    getInitialState(){
        return toImmutable({
            value: null
        });
    },
    initialize(){
        this.on('FILTER',filter);
    }
})

function filter(state, payload) {
    const nextState = state.set('value',payload.value);

    return nextState;
};


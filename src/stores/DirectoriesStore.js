/**
 * Created by gabrielmatasariu on 8/1/2016.
 */
import {Store, toImmutable} from 'nuclear-js';

export default Store({
    getInitialState(){
        return toImmutable([]);
    },
    initialize(){
        this.on('RECEIVE-PRODUCTS',receiveProducts);
    }
})

function receiveProducts(state,{ directories }){
    let newDirectories = toImmutable(directories);
    return state.merge(newDirectories);
}
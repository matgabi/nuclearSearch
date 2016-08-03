/**
 * Created by gabrielmatasariu on 8/1/2016.
 */

import reactor from './reactor';

export  default {
    filter(value){
        reactor.dispatch('FILTER', value );
    },
    fetchProducts(data) {
             let directories = data;
            reactor.dispatch('RECEIVE-PRODUCTS',  { directories } );
        }
    }

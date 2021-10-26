import {configureStore} from '@reduxjs/toolkit';
import { cryptoApi } from '../Services/cryptoApi';
import { newsApi } from '../Services/cryptoNews';
export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [newsApi.reducerPath]:newsApi.reducer,
    }
});
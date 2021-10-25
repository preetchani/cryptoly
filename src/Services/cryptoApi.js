import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const crytpoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_CRYPTO_API,
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

/* Create uitlity function to pass url and headers in api request */
const createRequest = (url)=>({url, headers:crytpoApiHeaders});
/* user createApi function and pass object with params of path,basequery and endpoints */
export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoData:builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`)
        })
    })
});

/* use redux hook to call fetch cryto data*/
export const {useGetCryptoDataQuery} = cryptoApi;
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


const newsApiHeader ={
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_NEWS_API
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url)=>({url, headers:newsApiHeader});


export const newsApi = createApi({
    reducerPath:'newsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNewsData:builder.query({
            query:({newsCategory,count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {useGetCryptoNewsDataQuery} = newsApi;
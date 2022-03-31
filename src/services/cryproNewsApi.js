import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeader = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': 'apikey'
  }

  const baseURL = 'https://bing-news-search1.p.rapidapi.com'

  const createRequest = (url) =>({url,headers:cryptoNewsApiHeader})
  
  export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({baseUrl : baseURL}),
    endpoints : (builder) =>({
        getCryptoNews : builder.query({
            query : ({newsCategory,count}) =>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi

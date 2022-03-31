import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeader = {

    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '55200af8bfmsh8dd9afb95eec3c3p1da145jsn35e0f380faac'
}

const baseURL = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) =>({url,headers:cryptoApiHeader})

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl : baseURL}),
    endpoints : (builder) =>({
        getCryptos : builder.query({
            query : (count) =>createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails : builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
      })  
 
    }),

    
})

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery,useGetCryptoHistoryQuery
} = cryptoApi




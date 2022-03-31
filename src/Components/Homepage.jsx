import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import {Link} from 'react-router-dom'
import { useGetCryptosQuery } from '../services/CryptoApi'
import Cryptocurrency from './Cryptocurrency'
import News from './News'
import Loader from './Loader'



const {Title} = Typography 
const Homepage = () => {

  const {data, isFetching} = useGetCryptosQuery(10);
  
      if(isFetching) return <Loader/>
  const globalStatsData = data?.data?.stats;

  return (
    <>
    <Title level={2} className= 'heading'>
        Global Crypto Stats
        <Row>
          <Col span={12}><Statistic title = "Total Cryptocurrencies" value={millify(globalStatsData.total)}/> </Col>
          <Col span={12}><Statistic title = "Total Exchanges" value={millify(globalStatsData.totalExchanges)}/> </Col>
          <Col span={12}><Statistic title = "Total Market Cap" value={millify(globalStatsData.totalMarketCap)}/> </Col>
          <Col span={12}><Statistic title = "Total 24h Volume" value={millify(globalStatsData.total24hVolume)}/> </Col>
          <Col span={12}><Statistic title = "Total Markets" value={millify(globalStatsData.totalMarkets)}/> </Col>
        </Row>
        <div className='home-heading-container'>
          <Title level={2} className = "home-title">Top 10 cryptocurrencies in the world </Title>
          <Title level={3} className='show-more'>
            <Link to='/cryptocurrency'>Show More</Link>
          </Title> 
        </div>
        <Cryptocurrency simplified = {true}/>
        <div className='home-heading-container'>
          <Title level={2} className = "home-title">Latest cryptocurrency news</Title>
          <Title level={3} className='show-more'>
            <Link to='/news'>Show More</Link>
          </Title> 
        </div>
        <News simplified = {true}/>
    </Title>
    </>
  )
}

export default Homepage